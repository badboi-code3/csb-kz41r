/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 227.44179846178562,
        y: -135.62321837194503
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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

  *whenIReceiveStartgame() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
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

  *whenthisspriteclicked() {
    this.broadcast("startGame");
    this.stage.vars.randomgame = this.random(1, 2);
    if (this.stage.vars.randomgame == 1) {
      this.stopAllSounds();
      yield* this.wait(0.1);
      this.stopAllSounds();
      this.broadcast("StartAddition");
    }
    if (this.stage.vars.randomgame == 2) {
      this.stopAllSounds();
      yield* this.wait(0.1);
      this.stopAllSounds();
      this.broadcast("startsubtraction");
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
