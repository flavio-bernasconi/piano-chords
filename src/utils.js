export function removeNumberFromNote(notes) {
  return notes.map((single) => single.note.replace(/[0-9]/g, ""));
}
export function getNotesToPlay(notes) {
  return notes.map((single) => single.note);
}
export function extractNoteIndex(notes) {
  return notes.map((single) => single.index);
}

function getHightestNote(notes) {
  if (notes.length > 0) {
    return Math.max(...notes);
  } else return 0;
}
function getLowestNote(notes) {
  if (notes.length > 0) {
    return Math.min(...notes);
  } else return 0;
}

export function isOutOfRange(indexNotesSlected, i) {
  const currentLowestNote = getLowestNote(indexNotesSlected);
  const currentHighestNote = getHightestNote(indexNotesSlected);

  if (
    (currentLowestNote && i - currentLowestNote > 14) ||
    currentLowestNote - i > 14 ||
    currentHighestNote - i > 14
  ) {
    return true;
  } else return false;
}
