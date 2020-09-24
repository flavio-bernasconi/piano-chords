import { inject, observer } from "mobx-react";
import React from "react";
import { MAJOR, TONES, OCTAVE_NOTES } from "../const";

export const OtherChords = inject("rootStore")(
  observer(function OtherChords({ rootStore }) {
    const { setNotes, selectedNotes, rootOctave, refreshKeys } = rootStore;
    return (
      <div className="parallax">
        {TONES.map((tone, i) => {
          return (
            <p
              onClick={() => {
                refreshKeys();

                const relatedChords = MAJOR.filter((chord) => {
                  return Object.keys(chord)[0] === tone + " major";
                });
                const chordsToPlay = Object.values(relatedChords[0])[0];
                console.log(Object.values(relatedChords[0])[0]);

                chordsToPlay.forEach((note, index) => {
                  console.log("note", note);
                  const clone = [...OCTAVE_NOTES];
                  const indexRootNote = OCTAVE_NOTES.indexOf(note + "3");

                  if (indexRootNote > -1) {
                    const listNotesRoot = clone.filter(
                      (_, i) => i >= +indexRootNote
                    );
                    const noteToPlayAllOctave = listNotesRoot.filter((n) => {
                      return n.trim().slice(0, -1) === note.trim();
                    });
                    console.log(noteToPlayAllOctave[0]);
                    setNotes(noteToPlayAllOctave[0], index);
                  } else {
                    setNotes(note.trim() + rootOctave, index);
                  }
                });
              }}
            >
              {tone}
            </p>
          );
        })}
      </div>
    );
  })
);
