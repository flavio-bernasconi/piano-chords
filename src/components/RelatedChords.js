import { inject, observer } from "mobx-react";
import React from "react";
import { OCTAVE_NOTES } from "../const";

export const RelatedChords = inject("rootStore")(
  observer(function RelatedChords({ rootStore }) {
    const {
      result,
      relatedChords,
      setNotes,
      refreshKeys,
      selectedNotes,
      rootOctave,
    } = rootStore;

    console.log("component related", relatedChords);

    return (
      <div>
        <h1>related</h1>
        {result &&
          relatedChords.map((relatedChord, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  console.log("oooouuuu", Object.values(relatedChord)[0]);
                  const chordsToPlay = Object.values(relatedChord)[0];
                  refreshKeys();
                  chordsToPlay.forEach((tone, index) => {
                    const clone = [...OCTAVE_NOTES];
                    const indexRootNote = OCTAVE_NOTES.indexOf(
                      Boolean(selectedNotes.length) && selectedNotes[0]?.note
                    );
                    if (indexRootNote > -1) {
                      const notesStartFromRoot = clone.filter(
                        (_, i) => i >= +indexRootNote
                      );
                      const noteToPlayAllOctave = notesStartFromRoot.filter(
                        (note) => {
                          return note.trim().slice(0, -1) === tone.trim();
                        }
                      );
                      setNotes(noteToPlayAllOctave[0], index);
                    } else {
                      setNotes(tone.trim() + rootOctave, index);
                    }
                  });
                }}
              >
                <p>
                  {Object.keys(relatedChord)} -
                  {Object.values(relatedChord)[0].map((note) => (
                    <span style={{ margin: 10 }}>{note}</span>
                  ))}
                </p>
              </div>
            );
          })}
      </div>
    );
  })
);
