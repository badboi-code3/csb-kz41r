/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("main", "./Stage/costumes/main.svg", {
        x: 242.74174174174172,
        y: 182.68169168168174
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.answertoproblem = 16;
    this.vars.guess = 0;
    this.vars.randomnumber1 = 45;
    this.vars.randomnumber2 = 61;
    this.vars.randomgame = 2;
    this.vars.score = 0;
    this.vars.mathandme = 0;
    this.vars.scoreboard = 0;
    this.vars.outof10 = 10;
    this.vars.timer = 17;
    this.vars.question10 = 10;
    this.vars.questionnumber = 1;
    this.vars.name = 0;
    this.vars.highscore = 0;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: false,
      value: () => this.vars.score,
      x: 445,
      y: -26
    });
    this.watchers.scoreboard = new Watcher({
      label: "scoreboard",
      style: "large",
      visible: false,
      value: () => this.vars.scoreboard,
      x: 407,
      y: -83
    });
    this.watchers.outof10 = new Watcher({
      label: "outof10",
      style: "large",
      visible: false,
      value: () => this.vars.outof10,
      x: 481,
      y: -91
    });
    this.watchers.question10 = new Watcher({
      label: "question/10",
      style: "large",
      visible: false,
      value: () => this.vars.question10,
      x: 339,
      y: 173
    });
    this.watchers.questionnumber = new Watcher({
      label: "questionnumber",
      style: "large",
      visible: false,
      value: () => this.vars.questionnumber,
      x: 260,
      y: 172
    });
    this.watchers.name = new Watcher({
      label: "name",
      style: "large",
      visible: false,
      value: () => this.vars.name,
      x: 548,
      y: 60
    });
    this.watchers.highscore = new Watcher({
      label: "highscore",
      style: "normal",
      visible: false,
      value: () => this.vars.highscore,
      x: 595,
      y: 31
    });
  }
}
