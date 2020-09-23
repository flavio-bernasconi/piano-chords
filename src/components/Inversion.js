import React from "react";
import { inject, observer } from "mobx-react";

export const Inversion = inject("rootStore")(
  observer(function Inversion({ rootStore }) {
    const { inversion, setInversionChord } = rootStore;
    return (
      <div className="inversions-list">
        {[0, 1, 2].map((n) => (
          <p
            className={`inversion ${n === inversion && "inversion-active"}`}
            onClick={() => setInversionChord(n)}
          >
            {n}
          </p>
        ))}
      </div>
    );
  })
);
