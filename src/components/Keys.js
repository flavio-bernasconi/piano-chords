import React from "react";
import { inject, observer } from "mobx-react";
import { OCTAVE_NOTES } from "../const";
import { Howl } from "howler";

const Key = inject("rootStore")(
  observer(function Key({ tone, index, rootStore }) {
    const { setNotes, selectedNotesNames } = rootStore;

    function playSingleNote() {
      const sound = new Howl({
        src: [`../sounds/${tone}.mp3`],
      });
      const chordToPlay = sound.play();
      sound.fade(1, 0, 1200, chordToPlay);
      setNotes(tone, index);
    }

    const singleKey = (optionalCLass) => (
      <div
        onClick={playSingleNote}
        className={`key ${optionalCLass} ${
          selectedNotesNames().includes(tone) && "isActive"
        }`}
      >
        <p className="textKey">
          {/* {optionalCLass === "white" && tone.includes("C") && tone} */}
          {tone}
        </p>
      </div>
    );

    return tone.includes("b") ? (
      <div className="sharp">{singleKey("black")}</div>
    ) : (
      singleKey("white")
    );
  })
);

export const Keys = () => {
  return (
    <div className="keys">
      {OCTAVE_NOTES.map((tone, i) => (
        <Key tone={tone} key={i} index={i} />
      ))}
    </div>
  );
};
