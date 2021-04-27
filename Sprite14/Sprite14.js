/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.svg", {
        x: 185.75,
        y: 138.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
        this.whenIReceiveChoosegame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scoreboard" },
        this.whenIReceiveScoreboard
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "add and sub" },
        this.whenIReceiveAddAndSub
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartaddition() {
    yield* this.wait(4.5);
    this.visible = true;
  }

  *whenIReceiveStartdivision() {
    yield* this.wait(4.5);
    this.visible = true;
  }

  *whenIReceiveStartmultiplication() {
    yield* this.wait(4.5);
    this.visible = true;
  }

  *whenIReceiveStartsubtraction() {
    yield* this.wait(4.5);
    this.visible = true;
  }

  *whenIReceiveChoosegame() {
    this.visible = false;
  }

  *whenIReceiveScoreboard() {
    this.visible = false;
  }

  *whenIReceiveChoosegame2() {
    this.visible = false;
  }

  *whenIReceiveAddAndSub() {
    yield* this.wait(4.5);
    this.visible = true;
  }
}
