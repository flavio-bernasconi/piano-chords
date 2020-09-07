export const TONES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const OCTAVE_NUMBERS = [1, 2, 3, 4, 5, 6, 7];

export const OCTAVE_NOTES = OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
  const notesInOctave = TONES.map((tone) => `${tone}${octaveNumber}`);
  return [...notes, ...notesInOctave];
}, []);

const MAJOR = [
  { "C major": ["C", "E", "G"] },
  { "C# major": ["C#", "E#", "G#"] },
  { "D major": ["D", "F#", "A"] },
  { "Eb major": ["E#", "D", "B#"] },
  { "E major": ["E", "G#", "B"] },
  { "F major": ["F", "A", "C"] },
  { "F# major": ["F#", "A#", "C#"] },
  { "G major": ["G", "B", "D"] },
  { "Ab major": ["A#", "C", "E#"] },
  { "A major": ["A", "C#", "E"] },
  { "Bb major": ["B#", "D", "F"] },
  { "B major": ["B", "D#", "F#"] },
];

export const CHORDS = [...MAJOR];
