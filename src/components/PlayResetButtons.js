import { Howl } from "howler";
import { inject, observer } from "mobx-react";
import { getNotesToPlay } from "../utils";
import React, { useEffect, useState } from "react";
import AudioPlayer from "./Audio";
import { PlayButtonIcon } from "./PlayButtonIcon";
import { timeNotesPlay } from "../const";

export const PlayResetButtons = inject("rootStore")(
  observer(function PlayResetButtons({ rootStore }) {
    const { selectedNotes, refreshKeys } = rootStore;
    const [isPlaying, setisPlaying] = useState(false);

    const audioPlayer = AudioPlayer();

    useEffect(() => {
      audioPlayer.setInstrument("bright_acoustic_piano");
    }, [audioPlayer]);

    const playChord = () => {
      const listOfSounds = getNotesToPlay(selectedNotes).map((note, i) => {
        return new Howl({
          src: [`../sounds/${note}.mp3`],
        });
      });

      if (!isPlaying && listOfSounds.length === selectedNotes.length) {
        setTimeout(() => {
          listOfSounds.forEach((sound, i) => {
            const singleNotePlaying = sound.play();
            console.log(singleNotePlaying);
            sound.fade(1, 0, timeNotesPlay, singleNotePlaying);
          });
        }, 100);
      }

      setisPlaying(true);
      setTimeout(() => {
        setisPlaying(false);
      }, timeNotesPlay);
    };

    return (
      <div className="buttons">
        <button
          className={`play ${isPlaying && "playing"}`}
          onClick={playChord}
        >
          <PlayButtonIcon width={30} color={isPlaying ? "white" : "#fbce41"} />
        </button>
        <button className="reset" onClick={refreshKeys}>
          <img src="icons/refresh.svg" alt="play-icon" width="30px" />
        </button>
      </div>
    );
  })
);
