import React from "react";
import { inject, observer } from "mobx-react";
import { DisplayNotes } from "./DisplayNotes";
import { RelatedChords } from "./RelatedChords";
import { PlayResetButtons } from "./PlayResetButtons";

export const DashBoard = inject("rootStore")(
  observer(function DashBoard({ rootStore }) {
    const {
      currentChord,
      selectedNotes,
      sortNotes,
      messageChordResult,
    } = rootStore;

    const x = selectedNotes.toJSON();

    return (
      <div className="dashboard">
        <div className="list-notes">
          <DisplayNotes notes={sortNotes()} />
          <div className="chord-result">
            <h1>{currentChord}</h1>
            {messageChordResult}
          </div>
        </div>

        {/* {selectedNotes.length > 0 && <PlayResetButtons />} */}
        <PlayResetButtons />

        {/* {selectedNotes.length > 2 && currentChord && <RelatedChords />} */}
      </div>
    );
  })
);
