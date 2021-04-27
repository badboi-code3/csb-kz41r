/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: -44.00000000000006,
        y: -51.54983922829584
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveHelp() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("Are you sure you want to clear your highscore?");
    if (this.answer == "Yes" || this.answer == "yes") {
      this.stage.vars.highscore = 0;
    } else {
      if (this.answer == "No" || this.answer == "no") {
        this.broadcast("help");
      }
    }
  }

  *whenIReceiveChoosegame() {
    this.visible = false;
  }
}
