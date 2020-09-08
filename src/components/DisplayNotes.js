import React from "react";

const NoteSelected = ({ note }) => {
  return <h1 className="singleNoteSelected">{note}</h1>;
};

export function DisplayNotes({ notes }) {
  return (
    <div className="selectedNotes">
      {notes.map((single) => (
        <NoteSelected key={single.index} note={single.note} />
      ))}
    </div>
  );
}
