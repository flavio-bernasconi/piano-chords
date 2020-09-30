export const TONES = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
const OCTAVE_NUMBERS = [2, 3, 4, 5];

export const OCTAVE_NOTES = OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
  const notesInOctave = TONES.map((tone) => `${tone}${octaveNumber}`);
  return [...notes, ...notesInOctave];
}, []);

export function createTriadChord(
  label,
  secondNoteDistanceFromRoot,
  thirdNoteDistanceFromSecondNote
) {
  return TONES.slice().map((root) => {
    const rootIndex = TONES.indexOf(root);
    return {
      [`${root} ${label}`]: [
        root,
        TONES[(rootIndex + secondNoteDistanceFromRoot) % TONES.length],
        TONES[
          (rootIndex +
            secondNoteDistanceFromRoot +
            thirdNoteDistanceFromSecondNote) %
            TONES.length
        ],
      ],
    };
  });
}

export function createTetradChord(
  label,
  secondNoteDistanceFromRoot,
  thirdNoteDistanceFromSecondNote,
  fourthNoteDistanceFromThirdNote
) {
  return TONES.slice().map((root) => {
    const rootIndex = TONES.indexOf(root);
    return {
      [`${root} ${label}`]: [
        root,
        TONES[(rootIndex + secondNoteDistanceFromRoot) % TONES.length],
        TONES[
          (rootIndex +
            secondNoteDistanceFromRoot +
            thirdNoteDistanceFromSecondNote) %
            TONES.length
        ],
        TONES[
          (rootIndex +
            secondNoteDistanceFromRoot +
            thirdNoteDistanceFromSecondNote +
            fourthNoteDistanceFromThirdNote) %
            TONES.length
        ],
      ],
    };
  });
}

export const MAJOR = createTriadChord("major", 4, 3);

const MINOR = createTriadChord("minor", 3, 4);

const DIMINISHED = createTriadChord("dim", 3, 3);

const SUS = createTriadChord("sus", 5, 2);

const AUG = createTriadChord("aug", 4, 4);

const SEVENTH = createTetradChord("seventh", 4, 3, 3);

const MAJOR_SEVENTH = createTetradChord("major seventh", 4, 3, 4);

const MINOR_SEVENTH = createTetradChord("minor seventh", 3, 4, 3);

const DIM_SEVENTH = createTetradChord("simished seventh", 3, 3, 3);

const SIXTH = createTetradChord("sixth", 4, 3, 2);

const MINOR_SIXTH = createTetradChord("minor sixth", 3, 4, 2);

const ADD = createTetradChord("add", 4, 3, 7);

const HALF = createTetradChord("half-diminished seventh", 3, 3, 4);

const AUG_SEVENTH = createTetradChord("aug seventh", 4, 4, 2);

export const CHORDS = [
  ...MAJOR,
  ...MINOR,
  ...DIMINISHED,
  ...SUS,
  ...AUG,
  ...AUG_SEVENTH,
  ...SEVENTH,
  ...MAJOR_SEVENTH,
  ...MINOR_SEVENTH,
  ...SIXTH,
  ...MINOR_SIXTH,
  ...ADD,
  ...DIM_SEVENTH,
  ...HALF,
];

export const timeNotesPlay = 1300;

export const MESSAGE = {
  selectNotes: "select at least 3 notes",
  chordNotFound: "chord not found",
};
