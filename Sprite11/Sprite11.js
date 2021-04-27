/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 176,
        y: 131.0015605865044
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "add and sub" },
        this.whenIReceiveAddAndSub
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartAddition" },
        this.whenIReceiveStartaddition
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startsubtraction" },
        this.whenIReceiveStartsubtraction
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChoosegame() {
    this.visible = true;
  }

  *whenIReceiveAddAndSub() {
    this.visible = false;
  }

  *whenIReceiveStartaddition() {
    this.visible = false;
  }

  *whenIReceiveStartsubtraction() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("help");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.size = 95;
      } else {
        this.size = 100;
      }
      yield;
    }
  }
}
