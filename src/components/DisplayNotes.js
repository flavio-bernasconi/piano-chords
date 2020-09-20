import { inject, observer } from "mobx-react";
import React from "react";

export const DisplayNotes = inject("rootStore")(
  observer(function DisplayNotes({ rootStore, notes }) {
    return (
      <div className="selectedNotes">
        {notes &&
          notes.map((single, i) => (
            <h1 key={i} className="singleNoteSelected">
              {single.note}
            </h1>
          ))}
      </div>
    );
  })
);
