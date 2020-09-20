import React from "react";
import { Keys } from "./Keys";
import { inject, observer } from "mobx-react";

export const Piano = inject("rootStore")(
  observer(function Piano({ rootStore }) {
    return (
      <>
        <div className="piano">
          <Keys />
        </div>
      </>
    );
  })
);
