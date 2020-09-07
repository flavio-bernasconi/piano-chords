export function removeNumberFromNote(notes) {
  return notes.map((single) => single.note.replace(/[0-9]/g, ""));
}
export function getNotesToPlay(notes) {
  return notes.map((single) => single.note);
}
export function extractNoteIndex(notes) {
  return notes.map((single) => single.index);
}
