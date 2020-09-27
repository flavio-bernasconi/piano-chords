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
  thirdNoteDistanceSecondFromNote
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
            thirdNoteDistanceSecondFromNote) %
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

const SIXTH = createTetradChord("sixth", 4, 3, 2);

const MINOR_SIXTH = createTetradChord("minor sixth", 3, 4, 2);

const ADD = createTetradChord("add", 4, 3, 7);

const DIM_SEVENTH = createTetradChord("simished seventh", 3, 3, 3);

const HALF = createTetradChord("half-diminished seventh", 3, 3, 4);

// const MAJOR_SEVENTH = [
//   { "C major seventh": ["C", "E", "G", "B"] },
//   { "C# major seventh": ["Db", "F", "Ab", "C"] },
//   { "D major seventh": ["D", "Gb", "A", "Db"] },
//   { "D# major seventh": ["Eb", "G", "Bb", "D"] },
//   { "E major seventh": ["E", "Ab", "B", "Eb"] },
//   { "F major seventh": ["F", "A", "C", "E"] },
//   { "F# major seventh": ["Gb", "Bb", "Db", "F"] },
//   { "G major seventh": ["G", "B", "D", "Gb"] },
//   { "Ab major seventh": ["Ab", "C", "Eb", "G"] },
//   { "A major seventh": ["A", "Db", "E", "Ab"] },
//   { "Bb major seventh": ["Bb", "D", "F", "A"] },
//   { "B major seventh": ["B", "Eb", "Gb", "Bb"] },
// ];

// const MINOR_SEVENTH = [
//   { "C minor seventh": ["C", "Eb", "G", "Bb"] },
//   { "C# minor seventh": ["Db", "E", "Ab", "B"] },
//   { "D minor seventh": ["D", "F", "A", "C"] },
//   { "Eb minor seventh": ["Eb", "Gb", "Bb", "Db"] },
//   { "E minor seventh": ["E", "G", "B", "D"] },
//   { "F minor seventh": ["F", "Ab", "C", "Eb"] },
//   { "F# minor seventh": ["Gb", "A", "Db", "E"] },
//   { "G minor seventh": ["G", "Bb", "D", "F"] },
//   { "Ab minor seventh": ["Ab", "B", "Eb", "Gb"] },
//   { "A minor seventh": ["A", "C", "E", "G"] },
//   { "Bb minor seventh": ["Bb", "Db", "F", "Ab"] },
//   { "B minor seventh": ["B", "D", "Gb", "A"] },
// ];
// const MINOR_SEVENTH_FLAT = [
//   { "C minor seventh flat five": ["C", "Eb", "Gb", "Bb"] },
//   { "C# minor seventh flat five": ["Db", "E", "G", "B"] },
//   { "D minor seventh flat five": ["D", "F", "Ab", "C"] },
//   { "Eb minor seventh flat five": ["Eb", "Gb", "A", "Db"] },
//   { "E minor seventh flat five": ["E", "G", "Bb", "D"] },
//   { "F minor seventh flat five": ["F", "Ab", "B", "Eb"] },
//   { "F# minor seventh flat five": ["Gb", "A", "C", "E"] },
//   { "G minor seventh flat five": ["G", "Bb", "Db", "F"] },
//   { "Ab minor seventh flat five": ["Ab", "Cb", "D", "Gb"] },
//   { "A minor seventh flat five": ["A", "C", "Eb", "G"] },
//   { "Bb minor seventh flat five": ["Bb", "Db", "E", "Ab"] },
//   { "B minor seventh flat five": ["B", "D", "F", "A"] },
// ];
//C# = Db F# = Gb G# = Ab

export const CHORDS = [
  ...MAJOR,
  ...MINOR,
  ...DIMINISHED,
  ...SUS,
  ...AUG,
  ...SEVENTH,
  ...MAJOR_SEVENTH,
  ...MINOR_SEVENTH,
  ...SIXTH,
  ...MINOR_SIXTH,
  ...ADD,
  ...DIM_SEVENTH,
  ...HALF,
  // ...MAJOR_SIXTH,
  // ...MINOR_SEVENTH,
  // ...MINOR_SEVENTH_FLAT,
];

export const timeNotesPlay = 1300;

export const MESSAGE = {
  selectNotes: "select at least 3 notes",
  chordNotFound: "chord not found",
};
