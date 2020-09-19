import { types as t } from "mobx-state-tree";
import { NoteModel } from "./Note";
import { CHORDS, OCTAVE_NOTES } from "../const";
import { isChordEqualToSelectedNotes } from "../utils";
import AudioPlayer from "../components/Audio";
// chords https://www.piano-keyboard-guide.com/keyboard-chords.html

const limitKeys = 5;

export const RootStore = t
  .model("RootStore", {
    selectedNotes: t.array(NoteModel),
    currentChord: t.optional(t.string, ""),
    relatedChords: t.optional(t.array(t.frozen()), []),
    rootOctave: t.optional(t.string, ""),
  })
  .actions((self) => ({
    setNotes(note, i) {
      const isNoteAlreadyInIndex = self.selectedNotesNames().indexOf(note);
      if (isNoteAlreadyInIndex > -1) {
        self.selectedNotes.splice(isNoteAlreadyInIndex, 1);
      } else {
        if (!self.isFull()) {
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
    },
    sortNotes() {
      return self.selectedNotes
        .slice()
        .sort((a, b) => (a.index > b.index ? 1 : -1));
    },
    getChord() {
      let chordResult = "";
      CHORDS.forEach((chord) => {
        if (isChordEqualToSelectedNotes(chord, self)) {
          chordResult = chord;
        }
      });

      const chordName = Object.keys(chordResult)[0];
      self.currentChord = chordName;
      chordName && self.getRelatedChords(chordName.slice(0, 2));
      self.rootOctave = self.sortNotes()[0].note.slice(-1);
      return chordResult;
    },
    refreshKeys() {
      self.selectedNotes = [];
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
    changeRelatedChord(relatedChord) {
      const {
        currentChord,
        refreshKeys,
        selectedNotes,
        setNotes,
        rootOctave,
      } = self;

      const chordsToPlay = Object.values(relatedChord)[0];
      if (chordsToPlay === currentChord) {
        return null;
      } else {
        refreshKeys();
        chordsToPlay.forEach((tone, index) => {
          const clone = [...OCTAVE_NOTES];
          const indexRootNote = OCTAVE_NOTES.indexOf(
            Boolean(selectedNotes.length) && selectedNotes[0]?.note
          );
          if (indexRootNote > -1) {
            const listNotesRoot = clone.filter((_, i) => i >= +indexRootNote);
            const noteToPlayAllOctave = listNotesRoot.filter(
              (note) => note.trim().slice(0, -1) === tone.trim()
            );
            setNotes(noteToPlayAllOctave[0], index);
          } else {
            setNotes(tone.trim() + rootOctave, index);
          }
        });
      }
    },
  }))
  .views((self) => ({
    selectedNotesIndex() {
      return self.selectedNotes.map((note) => note.index);
    },
    selectedNotesNames() {
      return self.selectedNotes.map((note) => note.note);
    },
    isFull() {
      return self.selectedNotes.length >= limitKeys;
    },
  }));
