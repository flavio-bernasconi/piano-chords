import Vex from "vexflow";

export const vf = new Vex.Flow.Factory({
  renderer: { elementId: "penta", width: window.innerWidth, height: 200 },
});

const score = vf.EasyScore();
const system = vf.System();

system
  .addStave({
    voices: [
      score.voice(
        score
          .notes("C#5/q, B4, B4")
          .concat(score.tuplet(score.beam(score.notes("A4/8, E4, C4"))))
      ),
    ],
  })
  .addClef("treble")
  .addTimeSignature("4/4");
