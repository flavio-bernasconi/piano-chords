import React, { useEffect } from "react";
import { Keys } from "./Keys";
import { inject, observer } from "mobx-react";
import AudioPlayer from "./Audio";
import { getNotesToPlay } from "../utils";

export const Piano = inject("rootStore")(
  observer(function Piano({ rootStore }) {
    const { getChord, result, selectedNotes, refreshKeys } = rootStore;

    const audioPlayer = AudioPlayer();

    useEffect(() => {
      audioPlayer.setInstrument("bright_acoustic_piano");
    }, [audioPlayer]);

    const handleClick = () => {
      console.log(getNotesToPlay(selectedNotes));

      getNotesToPlay(selectedNotes).forEach((note) =>
        audioPlayer.playNote(note)
      );
    };

    if (selectedNotes.length > 2) {
      getChord();
    }

    return (
      <div className="piano">
        <button onClick={refreshKeys}>refresh keys</button>
        <Keys />
        {selectedNotes.length > 2 && result && (
          <>
            <h1>{result}</h1>
            <button onClick={handleClick}>Play</button>
          </>
        )}
      </div>
    );
  })
);
