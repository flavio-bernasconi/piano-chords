import { CHORDS } from "./const";

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

export function isChordEqualToSelectedNotes(chord, self) {
  return (
    Object.values(chord)[0].slice().sort().join(",") ===
    removeNumberFromNote(self.sortNotes()).sort().join(",")
  );
}

export function getAllInversions(mainChord, inversionNumber, initialChord) {
  console.log("mainChord", mainChord, initialChord.toJSON());
  const second = getNotesToPlay(initialChord).map((note, i) => {
    if (i <= 1) {
      return addOctaveToNote(note);
    } else return note;
  });

  const first = getNotesToPlay(initialChord).map((note, i) => {
    if (i === 0) {
      return addOctaveToNote(note);
    } else return note;
  });

  return CHORDS.filter((chord) => mainChord === Object.keys(chord)[0]).map(
    () => {
      if (inversionNumber === 1) {
        return {
          inversionNumber,
          chord: first,
        };
      } else if (inversionNumber === 2) {
        return {
          inversionNumber,
          chord: second,
        };
      } else {
        return { inversionNumber, chord: getNotesToPlay(initialChord) };
      }
    }
  );
}
function addOctaveToNote(note) {
  return note
    .split("")
    .map((l, i) => {
      if (i === note.split("").length - 1) {
        return +l + 1;
      } else return l;
    })
    .join("");
}

export function mapOrder(array, order, key) {
  array.sort(function (a, b) {
    var A = a[key],
      B = b[key];

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
  });

  return array;
}

// function moveLastArrayElementToFirstIndex(array) {
//   array.splice(0, 0, array[array.length - 1]);
//   array.pop();
//   return array;
// }

// function moveFirstElementToLastIndex(array, initialIndex, finalIndex) {
//   array.splice(array.length - 1, 0, array.splice(0, 1)[0]);
//   return array;
// }

// function addOctaveFirstInversion(notes, lowestOctaveCurrentChord) {
//   console.log(notes);
//   return notes.map((note, i) => {
//     // console.log(note, lowestOctaveCurrentChord);
//     if (i === 2) {
//       console.log(note);
//       return note + (lowestOctaveCurrentChord + 1);
//     } else return note + lowestOctaveCurrentChord;
//   });
// }

// function addOctaveSecondInversion(notes, lowestOctaveCurrentChord) {
//   return notes.map((note, i) => {
//     return note + (lowestOctaveCurrentChord + 1);
//   });
// }

// function backToOrigin(notes, lowestOctaveCurrentChord) {
//   return notes.map((note, i) => {
//     return note + (lowestOctaveCurrentChord + 1);
//   });
// }
