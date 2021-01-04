import { Howl } from "howler";
import { inject, observer } from "mobx-react";
import { getNotesToPlay } from "../utils";
import React, { useEffect, useState } from "react";
import AudioPlayer from "./Audio";
import { PlayButtonIcon } from "./PlayButtonIcon";
import { timeNotesPlay } from "../const";

function checkSoundsState(listOfSounds, setIsReady) {
  const areAllSoundsLoaded = listOfSounds
    .map((sound) => sound._state)
    .every((soundState) => soundState === "loaded");

  setIsReady(areAllSoundsLoaded);
}

export const PlayResetButtons = inject("rootStore")(
  observer(function PlayResetButtons({ rootStore }) {
    const { selectedNotes, refreshKeys, getChord } = rootStore;
    const [isPlaying, setisPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [listOfSounds, setListOfSounds] = useState([]);

    const audioPlayer = AudioPlayer();

    useEffect(() => {
      audioPlayer.setInstrument("bright_acoustic_piano");
    }, [audioPlayer]);

    useEffect(() => {
      let timer;
      if (!isReady) {
        timer = setInterval(() => {
          checkSoundsState(listOfSounds, setIsReady);
        }, 50);
      } else clearInterval(timer);
    }, [listOfSounds, isReady]);

    const playChord = () => {
      if (!isPlaying && isReady) {
        const listOfSounds = getNotesToPlay(selectedNotes).map((note, i) => {
          return new Howl({
            src: [`../sounds/${note}.mp3`],
          });
        });
        setListOfSounds(listOfSounds);
        listOfSounds.forEach((sound, i) => {
          const singleNotePlaying = sound.play();
          sound.fade(1, 0, timeNotesPlay, singleNotePlaying);
        });
      }

      setisPlaying(true);
      setTimeout(() => {
        setisPlaying(false);
        setIsReady(false);
      }, timeNotesPlay);
    };

    return (
      <div className="buttons">
        <button
          className={`play ${isPlaying && "playing"} ${
            !isReady ? "disable" : ""
          }`}
          onClick={playChord}
          disabled={!isReady}
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
