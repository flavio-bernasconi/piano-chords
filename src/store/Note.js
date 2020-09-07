import { types as t } from "mobx-state-tree";
// https://www.piano-keyboard-guide.com/keyboard-chords.html

export const NoteModel = t.model("NoteModel", {
  note: "",
  index: 0,
});
