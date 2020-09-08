import React from "react";
import { inject, observer } from "mobx-react";
import { OCTAVE_NOTES } from "../const";
import { Howl } from "howler";

const Key = inject("rootStore")(
  observer(function Key({ tone, index, rootStore }) {
    const { setNotes, selectedNotesIndex } = rootStore;

    const singleKey = (optionalCLass) => (
      <div
        onClick={() => {
          const sound = new Howl({
            src: [`../sounds/${tone}.mp3`],
          });

          const chordToPlay = sound.play();
          sound.fade(1, 0, 1200, chordToPlay);
          setNotes(tone, index);
        }}
        className={`key ${optionalCLass} ${
          selectedNotesIndex().includes(index) && "isActive"
        }`}
      >
        <p className="textKey">
          {optionalCLass === "white" && tone.includes("C") && tone}
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
      <audio id="audio">
        <source src="../sounds/A0.mp3" />
      </audio>
      {OCTAVE_NOTES.map((tone, i) => (
        <Key tone={tone} key={i} index={i} />
      ))}
    </div>
  );
};
