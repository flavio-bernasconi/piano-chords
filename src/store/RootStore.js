import { types as t } from "mobx-state-tree";
import { NoteModel } from "./Note";
import { CHORDS } from "../const";
import { removeNumberFromNote } from "../utils";
import AudioPlayer from "../components/Audio";
// chords https://www.piano-keyboard-guide.com/keyboard-chords.html

const limitKeys = 5;

export const RootStore = t
  .model("RootStore", {
    selectedNotes: t.array(NoteModel),
    result: t.optional(t.string, ""),
    relatedChords: t.optional(t.array(t.frozen()), []),
    rootOctave: t.optional(t.string, ""),
  })
  .actions((self) => ({
    setNotes(note, i) {
      const isNoteAlreadyIn = self.selectedNotesNames().indexOf(note);
      console.log(self.selectedNotes.toJSON());
      if (isNoteAlreadyIn > -1) {
        self.selectedNotes.splice(isNoteAlreadyIn, 1);
      } else {
        if (!self.isFull()) {
          const infoNote = { note, index: i };
          self.selectedNotes = [...self.selectedNotes, infoNote];
        } else {
          if (self.selectedNotes.length === limitKeys) {
            const infoNote = { note, index: i };
            self.selectedNotes.splice(isNoteAlreadyIn, 1);
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
        if (
          Object.values(chord)[0].slice().sort().join(",") ===
          removeNumberFromNote(self.sortNotes()).sort().join(",")
        ) {
          chordResult = chord;
        }
      });

      const chordName = Object.keys(chordResult)[0];
      self.result = chordName;
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
      const relatedChords = CHORDS.filter((chord) => {
        const key = Object.keys(chord);
        // && key[0] !== self.result
        return key[0].startsWith(chordToFind);
      });
      console.log("relatedChords store", relatedChords);
      self.relatedChords = relatedChords;
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
