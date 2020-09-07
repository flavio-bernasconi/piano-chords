import { types as t } from "mobx-state-tree";
import { NoteModel } from "./Note";
import { CHORDS } from "../const";
import { removeNumberFromNote, extractNoteIndex } from "../utils";
// chords https://www.piano-keyboard-guide.com/keyboard-chords.html

export const RootStore = t
  .model("RootStore", {
    selectedNotes: t.array(NoteModel),
    result: t.optional(t.string, "No result"),
  })
  .actions((self) => ({
    setNotes(note, i) {
      const isNoteAlreadyIn = self.selectedNotesIndex().indexOf(i);
      const indexNotesSlected = extractNoteIndex(self.sortNotes());
      const currentLowestNote =
        indexNotesSlected.length > 0 ? Math.min(...indexNotesSlected) : 0;

      if (
        (currentLowestNote && i - currentLowestNote > 12) ||
        currentLowestNote - i > 12
      ) {
        return null;
      } else if (isNoteAlreadyIn > -1) {
        self.selectedNotes.splice(isNoteAlreadyIn, 1);
      } else {
        if (self.selectedNotes.length <= 3) {
          const infoNote = { note, index: i };
          self.selectedNotes = [...self.selectedNotes, infoNote];
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
          JSON.stringify(Object.values(chord)[0]) ===
          JSON.stringify(removeNumberFromNote(self.sortNotes()))
        ) {
          chordResult = chord;
        }
      });
      self.result = Object.keys(chordResult)[0];
      return chordResult;
    },
    refreshKeys() {
      self.selectedNotes = [];
    },
  }))
  .views((self) => ({
    selectedNotesIndex() {
      return self.selectedNotes.map((note) => note.index);
    },
  }));
