/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 187.75,
        y: 128.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "music off" },
        this.whenIReceiveMusicOff
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "music on" },
        this.whenIReceiveMusicOn
      ),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMusicOff() {
    this.visible = true;
  }

  *whenIReceiveMusicOn() {
    this.visible = false;
  }

  *whenIReceiveHelp() {
    this.visible = false;
  }
}
