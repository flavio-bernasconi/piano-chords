import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { DisplayNotes } from "./DisplayNotes";
import { RelatedChords } from "./RelatedChords";
import { PlayResetButtons } from "./PlayResetButtons";
import { vf } from "./Pentagram";
import { OtherChords } from "./OtherChords";
import { Inversion } from "./Inversion";

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
    vf.draw();

    return (
      <div>
        <div className="dashboard">
          <div className="list-notes">
            <DisplayNotes notes={sortNotes()} />
            <div className="chord-result">
              {currentChord && (
                <>
                  <h1>{currentChord}</h1>
                  {currentChord !== "chord not found" && <Inversion />}
                </>
              )}
              {messageChordResult}
            </div>
          </div>
          {selectedNotes.length > 0 && <PlayResetButtons />}
          {selectedNotes.length > 2 && currentChord && <RelatedChords />}
        </div>
        <OtherChords />
      </div>
    );
  })
);
