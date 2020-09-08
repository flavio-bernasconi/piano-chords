import React from "react";
import { Keys } from "./Keys";
import { inject, observer } from "mobx-react";

export const Piano = inject("rootStore")(
  observer(function Piano({ rootStore }) {
    const { refreshKeys } = rootStore;

    return (
      <>
        <button onClick={refreshKeys}>refresh keys</button>
        <div className="piano">
          <Keys />
        </div>
      </>
    );
  })
);
