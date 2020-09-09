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
const OCTAVE_NUMBERS = [1, 2, 3, 4, 5, 6, 7];

export const OCTAVE_NOTES = OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
  const notesInOctave = TONES.map((tone) => `${tone}${octaveNumber}`);
  return [...notes, ...notesInOctave];
}, []);

const MAJOR = [
  { "C major": ["C", "E", "G"] },
  { "Db major": ["Db", "Eb", "Ab"] },
  { "D major": ["D", "Gb", "A"] },
  { "Eb major": ["Eb", "D", "Bb"] },
  { "E major": ["E", "Ab", "B"] },
  { "F major": ["F", "A", "C"] },
  { "Gb major": ["Gb", "Ab", "Db"] },
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
  { "C diminished": [" C", " Eb", "Gb"] },
  { "C# diminished": ["Db", " E", "G"] },
  { "D diminished": [" D", " F", "Ab"] },
  { "Eb diminished": ["Eb", " Gb", "A"] },
  { "E diminished": [" E", " G", "Bb"] },
  { "F diminished": ["F", " Ab", "B"] },
  { "F# diminished": ["Gb", " A", "C"] },
  { "G diminished": [" G", " Bb", "Db"] },
  { "Ab diminished": ["Ab", " Cb", "D"] },
  { "A diminished": [" A", " C", "Eb"] },
  { "Bb diminished": ["Bb", " Db", "E"] },
  { "B diminished": [" B", " D", "F"] },
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

const DOMINANT_SEVENTH = [
  { "C dominant seventh": ["C", "E", "G", "B"] },
  { "C# dominant seventh": ["Db", "F", "Ab", "C"] },
  { "D dominant seventh": ["D", "Gb", "A", "Db"] },
  { "D# dominant seventh": ["Eb", "G", "Bb", "D"] },
  { "E dominant seventh": ["E", "Ab", "B", "Eb"] },
  { "F dominant seventh": ["F", "A", "C", "E"] },
  { "F# dominant seventh": ["Gb", "Bb", "Db", "F"] },
  { "G dominant seventh": ["G", "B", "D", "Gb"] },
  { "Ab dominant seventh": ["Ab", "C", "Eb", "G"] },
  { "A dominant seventh": ["A", "Db", "E", "Ab"] },
  { "Bb dominant seventh": ["Bb", "D", "F", "A"] },
  { "B dominant seventh": ["B", "Eb", "Gb", "Bb"] },
];

export const CHORDS = [...MAJOR, ...MINOR, ...DIMINISHED, ...MAJOR_SEVENTH];
