import React from "react";
import { inject, observer } from "mobx-react";
import { TONES } from "../const";
import { OCTAVE_NOTES } from "../const";

const Key = inject("rootStore")(
  observer(function Key({ tone, index, rootStore, isActive }) {
    const { setNotes, selectedNotesIndex } = rootStore;

    return (
      <>
        {tone.includes("#") ? (
          <div className="sharp">
            <div
              onClick={() => setNotes(tone, index)}
              className={`key ${tone.includes("#") ? "black" : "white"} ${
                selectedNotesIndex().includes(index) && "isActive"
              }`}
            >
              {tone}
            </div>
          </div>
        ) : (
          <div
            onClick={() => setNotes(tone, index)}
            className={`key ${tone.includes("#") ? "black" : "white"} ${
              selectedNotesIndex().includes(index) && "isActive"
            }`}
          >
            {tone}
          </div>
        )}
      </>
    );
  })
);

export const Keys = inject("rootStore")(
  observer(function Keys({ rootStore }) {
    return (
      <div className="keys">
        {OCTAVE_NOTES.map((tone, i) => (
          <Key tone={tone} key={i} index={i} />
        ))}
      </div>
    );
  })
);
