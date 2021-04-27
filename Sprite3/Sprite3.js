/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 59.75,
        y: 54.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "music on" },
        this.whenIReceiveMusicOn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "music off" },
        this.whenIReceiveMusicOff
      ),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp)
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChoosegame() {
    this.visible = true;
  }

  *whenIReceiveMusicOn() {
    this.visible = true;
  }

  *whenIReceiveMusicOff() {
    this.visible = false;
  }

  *whenIReceiveHelp() {
    this.visible = false;
  }
}
