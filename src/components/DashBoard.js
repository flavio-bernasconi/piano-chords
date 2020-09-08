import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import AudioPlayer from "./Audio";
import { getNotesToPlay } from "../utils";
import { DisplayNotes } from "./DisplayNotes";
import { Howl } from "howler";

export const DashBoard = inject("rootStore")(
  observer(function DashBoard({ rootStore }) {
    const { getChord, result, selectedNotes, sortNotes } = rootStore;

    const audioPlayer = AudioPlayer();

    useEffect(() => {
      audioPlayer.setInstrument("bright_acoustic_piano");
    }, [audioPlayer]);

    const handleClick = () => {
      const listOfSounds = getNotesToPlay(selectedNotes).map((note, i) => {
        return new Howl({
          src: [`../sounds/${note}.mp3`],
        });
      });

      listOfSounds.forEach((sound) => {
        const singleNotePlaying = sound.play();
        sound.fade(1, 0, 1200, singleNotePlaying);
      });
    };

    if (selectedNotes.length > 2) {
      getChord();
    }

    return (
      <div>
        <DisplayNotes notes={sortNotes(selectedNotes)} />
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
