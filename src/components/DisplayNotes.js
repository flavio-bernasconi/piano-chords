import { inject, observer } from "mobx-react";
import React from "react";

const NoteSelected = ({ note }) => {
  return <h1 className="singleNoteSelected">{note}</h1>;
};

export const DisplayNotes = inject("rootStore")(
  observer(function DisplayNotes({ rootStore }) {
    const { selectedNotes, sortNotes } = rootStore;

    return (
      <div className="selectedNotes">
        {selectedNotes &&
          sortNotes().map((single, i) => (
            <NoteSelected key={single.index} note={single.note} />
          ))}
      </div>
    );
  })
);
