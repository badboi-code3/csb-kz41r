/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 99.5,
        y: 6
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scoreboard" },
        this.whenIReceiveScoreboard
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartAddition" },
        this.whenIReceiveStartaddition
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startdivision" },
        this.whenIReceiveStartdivision
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startmultiplication" },
        this.whenIReceiveStartmultiplication
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startsubtraction" },
        this.whenIReceiveStartsubtraction
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScoreboard() {
    this.visible = true;
  }

  *whenIReceiveChoosegame() {
    this.visible = false;
  }

  *whenIReceiveStartaddition() {
    this.visible = false;
  }

  *whenIReceiveStartdivision() {
    this.visible = false;
  }

  *whenIReceiveStartmultiplication() {
    this.visible = false;
  }

  *whenIReceiveStartsubtraction() {
    this.visible = false;
  }

  *whenIReceiveChoosegame2() {
    this.visible = false;
  }
}
