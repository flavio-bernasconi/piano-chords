import { types as t } from "mobx-state-tree";
import { NoteModel } from "./Note";
import { CHORDS, MAJOR, MESSAGE, OCTAVE_NOTES } from "../const";
import {
  isChordEqualToSelectedNotes,
  getAllInversions,
  mapOrder,
  filterSortedNotesStartingFromFirstChordNote,
  noteWithAllValidOctaves,
} from "../utils";
import AudioPlayer from "../components/Audio";
import cloneDeep from "lodash/cloneDeep";
// chords https://www.piano-keyboard-guide.com/keyboard-chords.html

const limitKeys = 5;

export const RootStore = t
  .model("RootStore", {
    selectedNotes: t.array(NoteModel),
    currentChord: t.optional(t.string, ""),
    relatedChords: t.optional(t.array(t.frozen()), []),
    rootOctave: t.optional(t.string, ""),
    messageChordResult: t.optional(t.string, MESSAGE.selectNotes),
    inversion: t.optional(t.number, 0),
    initialChord: t.optional(t.array(t.frozen()), []),
  })
  .actions((self) => ({
    setNotes(note, i) {
      const isNoteAlreadyInIndex = self.selectedNotesNames().indexOf(note);
      const isNoteAlreadyIn = isNoteAlreadyInIndex > -1;
      if (isNoteAlreadyIn) {
        self.selectedNotes.splice(isNoteAlreadyInIndex, 1);
      } else {
        if (!self.isSelectedNotesFull()) {
          const infoNote = { note, index: i };
          self.selectedNotes = [...self.selectedNotes, infoNote];
        } else {
          if (self.selectedNotes.length === limitKeys) {
            const infoNote = { note, index: i };
            self.selectedNotes.splice(isNoteAlreadyInIndex, 1);
            self.selectedNotes = [...self.selectedNotes, infoNote];
          }
        }
      }
      if (self.selectedNotes.length > 2) {
        self.getChord();
        self.messageChordResult = "";
      } else {
        self.currentChord = "";
        self.messageChordResult = MESSAGE.selectNotes;
        self.inversion = 0;
      }
    },
    getChord() {
      const chordResult = CHORDS.filter((chord) =>
        isChordEqualToSelectedNotes(chord, self)
      );

      const chordName = Object.keys(chordResult[0])[0];
      if (chordName) {
        self.getRelatedChords(chordName.slice(0, 2));
      } else {
        self.inversion = 0;
      }
      self.currentChord = chordName || MESSAGE.chordNotFound;
      self.initialChord = cloneDeep(self.sortNotes());
      self.rootOctave = self.sortNotes()[0].note.slice(-1);

      return chordResult;
    },
    refreshKeys() {
      self.selectedNotes = [];
      self.currentChord = "";
      self.inversion = 0;
      self.messageChordResult = MESSAGE.selectNotes;
    },
    playSingleNote(note) {
      const audioPlayer = AudioPlayer();
      audioPlayer.setInstrument("bright_acoustic_piano");
      audioPlayer.playNote(note);
    },
    getRelatedChords(chordToFind) {
      const relatedChords = CHORDS.filter((chord) =>
        Object.keys(chord)[0].startsWith(chordToFind)
      );
      self.relatedChords = relatedChords;
    },
    setInversionChord(inversionNumber) {
      const inversion = getAllInversions(
        self.currentChord,
        inversionNumber,
        self.initialChord
      );

      self.inversion = inversionNumber;
      self.selectedNotes = [];
      self.currentChord !== MESSAGE.chordNotFound &&
        inversion[0].chord.forEach((note, i) => {
          const infoNote = { note, index: i };
          self.selectedNotes = [...self.selectedNotes, infoNote];
        });
    },
    changeRelatedChord(relatedChord) {
      const { currentChord, refreshKeys, setNotes, rootOctave } = self;
      window.scrollTo({ top: 0, behavior: "smooth" });

      const chordNotes = Object.values(relatedChord)[0];
      if (chordNotes === currentChord) {
        return null;
      } else {
        refreshKeys();

        const allNotesFromFirstNote = filterSortedNotesStartingFromFirstChordNote(
          chordNotes,
          rootOctave
        );

        chordNotes.forEach((note, index) => {
          const noteToSet = noteWithAllValidOctaves(
            allNotesFromFirstNote,
            note
          );
          setNotes(noteToSet[0], index);
        });
      }
    },
    listAllChords(tone) {
      const { refreshKeys, setNotes, rootOctave } = self;
      refreshKeys();
      window.scrollTo({ top: 0, behavior: "smooth" });

      const getMajorChord = MAJOR.filter(
        (chord) => Object.keys(chord)[0] === tone + " major"
      );
      const chordNotes = Object.values(getMajorChord[0])[0];

      const allNotesFromFirstNote = filterSortedNotesStartingFromFirstChordNote(
        chordNotes,
        rootOctave
      );

      chordNotes.forEach((note, index) => {
        const noteToSet = noteWithAllValidOctaves(allNotesFromFirstNote, note);
        setNotes(noteToSet[0], index);
      });
    },
  }))
  .views((self) => ({
    selectedNotesIndex() {
      return self.selectedNotes.map((note) => note.index);
    },
    selectedNotesNames() {
      return self.selectedNotes.map((note) => note.note);
    },
    isSelectedNotesFull() {
      return self.selectedNotes.length >= limitKeys;
    },
    sortNotes() {
      const clone = [...self.selectedNotes];
      return mapOrder(clone, OCTAVE_NOTES, "note");
    },
  }));
