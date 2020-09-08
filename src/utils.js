export function removeNumberFromNote(notes) {
  return notes.map((single) => single.note.replace(/[0-9]/g, ""));
}
export function getNotesToPlay(notes) {
  return notes.map((single) => single.note);
}
export function extractNoteIndex(notes) {
  return notes.map((single) => single.index);
}

export function getHightestNote(notes) {
  if (notes.length > 0) {
    return Math.max(...notes);
  } else return 0;
}
export function getLowestNote(notes) {
  if (notes.length > 0) {
    return Math.min(...notes);
  } else return 0;
}
