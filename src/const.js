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

export const MAJOR = [
  { "C major": ["C", "E", "G"] },
  { "Db major": ["Db", "F", "Ab"] },
  { "D major": ["D", "Gb", "A"] },
  { "Eb major": ["Eb", "G", "Bb"] },
  { "E major": ["E", "Ab", "B"] },
  { "F major": ["F", "A", "C"] },
  { "Gb major": ["Gb", "Bb", "Db"] },
  { "G major": ["G", "B", "D"] },
  { "Ab major": ["Ab", "C", "Eb"] },
  { "A major": ["A", "Db", "E"] },
  { "Bb major": ["Bb", "D", "F"] },
  { "B major": ["B", "Eb", "Gb"] },
];

const MINOR = [
  { "C minor": ["C", "Eb", "G"] },
  { "Db minor": ["Db", "E", "Ab"] },
  { "D minor": ["D", "F", "A"] },
  { "Eb minor": ["Eb", "Ab", "Bb"] },
  { "E minor": ["E", "G", "B"] },
  { "F minor": ["F", "Ab", "C"] },
  { "Gb minor": ["Gb", "A", "Db"] },
  { "G minor": ["G", "Bb", "D"] },
  { "Ab minor": ["Ab", "Db", "Eb"] },
  { "A minor": ["A", "C", "E"] },
  { "Bb minor": ["Bb", "Eb", "F"] },
  { "B minor ": ["B", "D", "Gb"] },
];

const DIMINISHED = [
  { "C diminished": ["C", "Eb", "Gb"] },
  { "C# diminished": ["Db", "E", "G"] },
  { "D diminished": ["D", "F", "Ab"] },
  { "Eb diminished": ["Eb", "Gb", "A"] },
  { "E diminished": ["E", "G", "Bb"] },
  { "F diminished": ["F", "Ab", "B"] },
  { "F# diminished": ["Gb", "A", "C"] },
  { "G diminished": ["G", "Bb", "Db"] },
  { "Ab diminished": ["Ab", "Cb", "D"] },
  { "A diminished": ["A", "C", "Eb"] },
  { "Bb diminished": ["Bb", "Db", "E"] },
  { "B diminished": ["B", "D", "F"] },
];

const MAJOR_SEVENTH = [
  { "C major seventh": ["C", "E", "G", "B"] },
  { "C# major seventh": ["Db", "F", "Ab", "C"] },
  { "D major seventh": ["D", "Gb", "A", "Db"] },
  { "D# major seventh": ["Eb", "G", "Bb", "D"] },
  { "E major seventh": ["E", "Ab", "B", "Eb"] },
  { "F major seventh": ["F", "A", "C", "E"] },
  { "F# major seventh": ["Gb", "Bb", "Db", "F"] },
  { "G major seventh": ["G", "B", "D", "Gb"] },
  { "Ab major seventh": ["Ab", "C", "Eb", "G"] },
  { "A major seventh": ["A", "Db", "E", "Ab"] },
  { "Bb major seventh": ["Bb", "D", "F", "A"] },
  { "B major seventh": ["B", "Eb", "Gb", "Bb"] },
];

const MINOR_SEVENTH = [
  { "C minor seventh": ["C", "Eb", "G", "Bb"] },
  { "C# minor seventh": ["Db", "E", "Ab", "B"] },
  { "D minor seventh": ["D", "F", "A", "C"] },
  { "Eb minor seventh": ["Eb", "Gb", "Bb", "Db"] },
  { "E minor seventh": ["E", "G", "B", "D"] },
  { "F minor seventh": ["F", "Ab", "C", "Eb"] },
  { "F# minor seventh": ["Gb", "A", "Db", "E"] },
  { "G minor seventh": ["G", "Bb", "D", "F"] },
  { "Ab minor seventh": ["Ab", "B", "Eb", "Gb"] },
  { "A minor seventh": ["A", "C", "E", "G"] },
  { "Bb minor seventh": ["Bb", "Db", "F", "Ab"] },
  { "B minor seventh": ["B", "D", "Gb", "A"] },
];
//C# = Db F# = Gb G# = Ab
const MINOR_SEVENTH_FLAT = [
  { "C minor seventh flat five": ["C", "Eb", "Gb", "Bb"] },
  { "C# minor seventh flat five": ["Db", "E", "G", "B"] },
  { "D minor seventh flat five": ["D", "F", "Ab", "C"] },
  { "Eb minor seventh flat five": ["Eb", "Gb", "A", "Db"] },
  { "E minor seventh flat five": ["E", "G", "Bb", "D"] },
  { "F minor seventh flat five": ["F", "Ab", "B", "Eb"] },
  { "F# minor seventh flat five": ["Gb", "A", "C", "E"] },
  { "G minor seventh flat five": ["G", "Bb", "Db", "F"] },
  { "Ab minor seventh flat five": ["Ab", "Cb", "D", "Gb"] },
  { "A minor seventh flat five": ["A", "C", "Eb", "G"] },
  { "Bb minor seventh flat five": ["Bb", "Db", "E", "Ab"] },
  { "B minor seventh flat five": ["B", "D", "F", "A"] },
];

export const CHORDS = [
  ...MAJOR,
  ...MINOR,
  ...DIMINISHED,
  ...MAJOR_SEVENTH,
  ...MINOR_SEVENTH,
  ...MINOR_SEVENTH_FLAT,
];

export const timeNotesPlay = 1300;

export const MESSAGE = {
  selectNotes: "select at least 3 notes",
  chordNotFound: "chord not found",
};
