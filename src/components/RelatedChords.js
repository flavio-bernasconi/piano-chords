import { inject, observer } from "mobx-react";
import React from "react";
import { OCTAVE_NOTES } from "../const";

export const RelatedChords = inject("rootStore")(
  observer(function RelatedChords({ rootStore }) {
    const { currentChord, relatedChords, changeRelatedChord } = rootStore;

    console.log("component related", relatedChords);

    return (
      <div>
        <h1>related</h1>
        {currentChord &&
          relatedChords.map((relatedChord, i) => {
            return (
              <div
                key={Math.random()}
                onClick={() => {
                  changeRelatedChord(relatedChord);
                }}
              >
                <p>
                  {Object.keys(relatedChord)} -
                  {Object.values(relatedChord)[0].map((note, i) => (
                    <span key={i} style={{ margin: 10 }}>
                      {note}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
      </div>
    );
  })
);
