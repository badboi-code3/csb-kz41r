/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume4", "./Sprite2/costumes/costume4.svg", {
        x: 72.38292474298382,
        y: 137.29126657467924
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "credits" },
        this.whenIReceiveCredits
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "setting" },
        this.whenIReceiveSetting
      ),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp)
    ];
  }

  *whenIReceiveChoosegame() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("startGame");
    this.stopAllSounds();
    yield* this.wait(0.1);
    this.stopAllSounds();
    this.broadcast("startsubtraction");
  }

  *whenIReceiveStartgame() {
    this.visible = false;
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

  *whenIReceiveCredits() {
    this.visible = false;
  }

  *whenIReceiveSetting() {
    this.visible = false;
  }

  *whenIReceiveHelp() {
    this.visible = false;
  }
}
