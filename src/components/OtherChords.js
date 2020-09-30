import { inject, observer } from "mobx-react";
import React from "react";
import { TONES } from "../const";

export const OtherChords = inject("rootStore")(
  observer(function OtherChords({ rootStore }) {
    const { listAllChords } = rootStore;
    return (
      <div className="parallax">
        <h3>Other chords</h3>
        {TONES.map((tone, i) => (
          <div className="btn-round" key={Math.random()}>
            <p
              className="chord"
              onClick={() => {
                listAllChords(tone);
              }}
            >
              {tone}
            </p>
          </div>
        ))}
      </div>
    );
  })
);
