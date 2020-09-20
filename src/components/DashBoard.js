import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import AudioPlayer from "./Audio";
import { getNotesToPlay } from "../utils";
import { DisplayNotes } from "./DisplayNotes";
import { Howl } from "howler";
import { RelatedChords } from "./RelatedChords";

export const DashBoard = inject("rootStore")(
  observer(function DashBoard({ rootStore }) {
    const { currentChord, selectedNotes, refreshKeys, sortNotes } = rootStore;

    const audioPlayer = AudioPlayer();

    useEffect(() => {
      audioPlayer.setInstrument("bright_acoustic_piano");
    }, [audioPlayer]);

    const playChord = () => {
      const listOfSounds = getNotesToPlay(selectedNotes).map((note, i) => {
        return new Howl({
          src: [`../sounds/${note}.mp3`],
          volume: 1,
        });
      });

      listOfSounds.forEach((sound, i) => {
        // const singleNotePlaying = sound.play();
        // console.log(sound);
        // sound.fade(1, 0, 1200, singleNotePlaying);
        setTimeout(() => {
          const singleNotePlaying = sound.play();
          sound.fade(1, 0, 1200, singleNotePlaying);
        }, i * 50);
      });
    };

    return (
      <>
        <DisplayNotes notes={sortNotes(selectedNotes)} />

        {selectedNotes.length > 0 && (
          <>
            <button onClick={playChord}>Play</button>
            <button onClick={refreshKeys}>refresh keys</button>
          </>
        )}

        {selectedNotes.length > 2 && currentChord && (
          <>
            <h1>{currentChord}</h1>
            <RelatedChords />
          </>
        )}
      </>
    );
  })
);
