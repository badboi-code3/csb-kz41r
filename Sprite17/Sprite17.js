/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.svg", {
        x: -80.68781737090558,
        y: 162.5007122359431
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "add and sub" },
        this.whenIReceiveAddAndSub
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartaddition() {
    yield* this.wait(5);
    this.visible = true;
  }

  *whenIReceiveStartsubtraction() {
    yield* this.wait(5);
    this.visible = true;
  }

  *whenIReceiveAddAndSub() {
    yield* this.wait(5);
    this.visible = true;
  }

  *whenthisspriteclicked() {}

  *whenIReceiveChoosegame() {
    this.visible = false;
  }

  *whenthisspriteclicked2() {
    this.broadcast("back to menue");
    yield* this.wait(0.1);
    this.broadcast("chooseGame");
  }
}
