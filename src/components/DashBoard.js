import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { DisplayNotes } from "./DisplayNotes";
import { RelatedChords } from "./RelatedChords";
import { PlayResetButtons } from "./PlayResetButtons";
import { vf } from "./Pentagram";

export const DashBoard = inject("rootStore")(
  observer(function DashBoard({ rootStore }) {
    const {
      currentChord,
      selectedNotes,
      sortNotes,
      messageChordResult,
      setNotes,
    } = rootStore;

    useEffect(() => {
      [
        { index: 17, note: "F3" },
        { index: 21, note: "A3" },
        { index: 24, note: "C4" },
      ].forEach(({ index, note }) => setNotes(note, index));
    }, []);

    const x = selectedNotes.toJSON();
    // vf.draw();
    selectedNotes.map((note) => console.log(note));

    return (
      <div className="dashboard">
        <div className="list-notes">
          <DisplayNotes notes={sortNotes()} />
          <div className="chord-result">
            <h1>{currentChord}</h1>
            {messageChordResult}
          </div>
        </div>

        {selectedNotes.length > 0 && <PlayResetButtons />}
        {/* <PlayResetButtons /> */}

        {selectedNotes.length > 2 && currentChord && <RelatedChords />}
      </div>
    );
  })
);
