import { types as t } from "mobx-state-tree";

export const NoteModel = t.model("NoteModel", {
  note: "",
  index: 0,
});
