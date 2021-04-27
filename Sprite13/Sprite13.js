/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 192.75,
        y: 131.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChoosegame() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.audioEffects.volume == 100) {
      this.audioEffects.volume = 0;
      this.broadcast("music off");
    } else {
      if (this.audioEffects.volume == 0) {
        this.audioEffects.volume = 100;
        this.broadcast("music on");
      }
    }
  }

  *whenthisspriteclicked2() {
    this.broadcast("sound");
  }

  *whenIReceiveHelp() {
    this.visible = false;
  }
}
