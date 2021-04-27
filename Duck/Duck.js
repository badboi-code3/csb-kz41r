/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duck extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("not talk", "./Duck/costumes/not talk.svg", {
        x: 31.349999999999994,
        y: 36.72
      }),
      new Costume("talk", "./Duck/costumes/talk.svg", {
        x: 31.349999999999994,
        y: 36.72
      }),
      new Costume("costume1", "./Duck/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("costume2", "./Duck/costumes/costume2.svg", { x: 46, y: 53 }),
      new Costume("costume3", "./Duck/costumes/costume3.svg", {
        x: 76.57061248822322,
        y: 41.66418671985343
      }),
      new Costume("costume4", "./Duck/costumes/costume4.svg", {
        x: 76.57061248822322,
        y: 41.66417671985346
      }),
      new Costume("costume5", "./Duck/costumes/costume5.svg", {
        x: 29.5,
        y: 29
      })
    ];

    this.sounds = [
      new Sound("background", "./Duck/sounds/background.wav"),
      new Sound("during question", "./Duck/sounds/during question.wav"),
      new Sound("scoreboard", "./Duck/sounds/scoreboard.wav"),
      new Sound("correct", "./Duck/sounds/correct.wav"),
      new Sound("wrong", "./Duck/sounds/wrong.wav"),
      new Sound("end", "./Duck/sounds/end.wav"),
      new Sound("waiting sound", "./Duck/sounds/waiting sound.wav"),
      new Sound("chose game2", "./Duck/sounds/chose game2.wav")
    ];

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
      new Trigger(Trigger.BROADCAST, { name: "sound" }, this.whenIReceiveSound),
      new Trigger(
        Trigger.BROADCAST,
        { name: "add and sub" },
        this.whenIReceiveAddAndSub
      ),
      new Trigger(Trigger.BROADCAST, { name: "help" }, this.whenIReceiveHelp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chooseGame" },
        this.whenIReceiveChoosegame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "back to menue" },
        this.whenIReceiveBackToMenue
      )
    ];
  }

  *addition() {
    this.stage.watchers.questionnumber.visible = true;
    this.stage.watchers.question10.visible = true;
    this.stage.watchers.score.visible = true;
    for (let i = 0; i < 10; i++) {
      if (this.audioEffects.volume == 0) {
        this.stopAllSounds();
        yield* this.wait(0.1);
        this.stopAllSounds();
        yield* this.wait(0.1);
      } else {
        if (this.audioEffects.volume == 100) {
          this.audioEffects.volume = 100;
        }
        yield* this.startSound("during question");
        this.stage.vars.questionnumber += 1;
        this.stage.vars.outof10 = 10;
        this.stage.vars.guess = 0;
        this.stage.vars.randomnumber1 = this.random(1, 100);
        this.stage.vars.randomnumber2 = this.random(1, 100);
        this.stage.vars.answertoproblem =
          this.stage.vars.randomnumber1 + this.stage.vars.randomnumber2;
        yield* this.askAndWait(
          "" +
            this.stage.vars.randomnumber1 +
            ("" + "+" + this.stage.vars.randomnumber2)
        );
        this.stage.vars.guess = this.answer;
        if (
          this.answer ==
          this.stage.vars.randomnumber1 + this.stage.vars.randomnumber2
        ) {
          this.stopAllSounds();
          this.broadcast("correct");
          yield* this.startSound("correct");
          yield* this.sayAndWait("that is correct", 3);
          this.stage.vars.score += 1;
          this.stage.vars.scoreboard += 1;
          this.stopAllSounds();
        } else {
          this.stopAllSounds();
          this.broadcast("wrong");
          yield* this.startSound("wrong");
          yield* this.sayAndWait("that is the wrong answer", 2.75);
          yield* this.startSound("waiting sound");
          yield* this.sayAndWait("the answer is", 2);
          yield* this.sayAndWait(this.stage.vars.answertoproblem, 2);
          this.stopAllSounds();
        }
      }
      yield;
    }
    this.stage.watchers.question10.visible = false;
    this.stage.watchers.questionnumber.visible = false;
    this.stage.watchers.score.visible = false;
    this.broadcast("scoreboard");
    this.stage.watchers.scoreboard.visible = true;
    this.stage.watchers.outof10.visible = true;
    yield* this.scoreboard();
    this.stage.watchers.outof10.visible = false;
    this.stage.watchers.scoreboard.visible = false;
    this.broadcast("chooseGame");
    this.stopAllSounds();
    yield* this.wait(0.1);
    this.stopAllSounds();
    yield* this.wait(0.1);
    this.stopAllSounds();
    yield* this.wait(0.1);
    yield* this.playSoundUntilDone("chose game2");
    this.stage.vars.score = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.name = "";
    this.stage.watchers.highscore.visible = false;
    this.stage.watchers.name.visible = false;
    this.stage.vars.score = 0;
    yield* this.wait(5.3);
    this.costume = "talk";
    yield* this.sayAndWait("welcome to MATH AND ME", 5);
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.costume = "talk";
    yield* this.sayAndWait("lets play a math game", 5);
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.costume = "talk";
    yield* this.sayAndWait("answer all the questions", 5);
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.costume = "talk";
    yield* this.sayAndWait("there is no timer", 5);
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.costume = "talk";
    yield* this.sayAndWait(
      "chose one of the following operations or chose random",
      5
    );
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.costume = "talk";
    yield* this.sayAndWait('click on the "?" button to get instructions', 5);
    this.costume = "not talk";
    yield* this.wait(0.2);
    this.stage.watchers.name.visible = true;
    yield* this.username();
    this.broadcast("chooseGame");
    this.stopAllSounds();
    yield* this.wait(0.1);
    yield* this.playSoundUntilDone("chose game2");
    yield* this.playSoundUntilDone("chose game2");
  }

  *whenIReceiveStartaddition() {
    this.stage.vars.scoreboard = 0;
    this.stage.vars.question10 = 10;
    this.stage.vars.questionnumber = 0;
    yield* this.startSound("waiting sound");
    yield* this.sayAndWait("are you ready", 2);
    yield* this.sayAndWait(3, 0.8);
    yield* this.sayAndWait(2, 0.8);
    yield* this.sayAndWait(1, 0.8);
    this.stopAllSounds();
    yield* this.addition();
  }

  *subtraction() {
    this.stage.watchers.questionnumber.visible = true;
    this.stage.watchers.question10.visible = true;
    this.stage.vars.score = 0;
    this.stage.watchers.score.visible = true;
    for (let i = 0; i < 10; i++) {
      if (this.audioEffects.volume == 0) {
        this.stopAllSounds();
        yield* this.wait(0.1);
        this.stopAllSounds();
        yield* this.wait(0.1);
      } else {
        this.audioEffects.volume = 100;
      }
      this.stage.vars.questionnumber += 1;
      yield* this.startSound("during question");
      this.stage.vars.outof10 = 10;
      this.stage.vars.guess = 0;
      this.stage.vars.randomnumber1 = this.random(1, 100);
      this.stage.vars.randomnumber2 = this.random(1, 100);
      if (this.stage.vars.randomnumber1 > this.stage.vars.randomnumber2) {
        this.stage.vars.answertoproblem =
          this.stage.vars.randomnumber1 - this.stage.vars.randomnumber2;
        yield* this.askAndWait(
          "" +
            this.stage.vars.randomnumber1 +
            ("" + "-" + this.stage.vars.randomnumber2)
        );
      } else {
        this.stage.vars.answertoproblem =
          this.stage.vars.randomnumber2 - this.stage.vars.randomnumber1;
        yield* this.askAndWait(
          "" +
            this.stage.vars.randomnumber2 +
            ("" + "-" + this.stage.vars.randomnumber1)
        );
        this.stage.vars.guess = this.answer;
      }
      if (this.answer == this.stage.vars.answertoproblem) {
        this.stopAllSounds();
        this.broadcast("correct");
        yield* this.startSound("correct");
        yield* this.sayAndWait("that is correct", 2.9);
        this.stage.vars.score += 1;
        this.stage.vars.scoreboard += 1;
      } else {
        this.stopAllSounds();
        this.broadcast("wrong");
        yield* this.startSound("wrong");
        yield* this.sayAndWait("that is the wrong answer", 2.8);
        yield* this.startSound("waiting sound");
        yield* this.sayAndWait("the answer is", 2);
        yield* this.sayAndWait(this.stage.vars.answertoproblem, 2);
        this.stopAllSounds();
      }
      yield;
    }
    this.stage.watchers.question10.visible = false;
    this.stage.watchers.questionnumber.visible = false;
    this.stage.watchers.score.visible = false;
    this.broadcast("scoreboard");
    this.stage.watchers.scoreboard.visible = true;
    this.stage.watchers.outof10.visible = true;
    yield* this.scoreboard();
    this.stage.watchers.outof10.visible = false;
    this.stage.watchers.scoreboard.visible = false;
    this.broadcast("chooseGame");
    this.stopAllSounds();
    yield* this.playSoundUntilDone("chose game2");
  }

  *whenIReceiveStartsubtraction() {
    this.stage.vars.scoreboard = 0;
    this.stage.vars.question10 = 10;
    this.stage.vars.questionnumber = 0;
    yield* this.startSound("waiting sound");
    yield* this.sayAndWait("are you ready", 2);
    yield* this.sayAndWait(3, 0.8);
    yield* this.sayAndWait(2, 0.8);
    yield* this.sayAndWait(1, 0.8);
    this.stopAllSounds();
    yield* this.subtraction();
  }

  *scoreboard() {
    if (this.stage.vars.score == 10) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("GREAT JOB!!!! 10/10 I AM SO PROUD OF YOU", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 9) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("GREAT JOB!!!! 9/10 I AM SO PROUD OF YOU", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 8) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("GREAT JOB!!!! 8/10 I AM SO PROUD OF YOU", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 7) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("GREAT JOB!!!! 7/10 I AM SO PROUD OF YOU", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 6) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("GREAT JOB!!!! 6/10 I AM SO PROUD OF YOU", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 5) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("5/10 NICE TRY!! DONT GIVE UP", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 4) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("4/10 NICE TRY!! DONT GIVE UP", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 3) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait("3/10 NICE TRY!! KEEP TRYING ", 10);
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 2) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait(
        "NOT BAD!! YOU DID GREAT FOR WHAT YOU CAN DO, I BELIEVE IN YOU.",
        10
      );
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 1) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait(
        "1/10 GREAT EFFORT!! IM PROUD OF YOU FOR TRYING, GREATNESS IS RIGHT IN FRONT OF YOU",
        10
      );
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
    if (this.stage.vars.score == 0) {
      yield* this.startSound("end");
      yield* this.startSound("end");
      yield* this.highScore();
      yield* this.sayAndWait(
        "I GIVE AN A+++ FOR EFFORT BUT KEEP TRYING AND YOU WILL FIND GREATNESS",
        10
      );
      yield* this.startSound("end");
      yield* this.startSound("end");
    }
  }

  *backgroundMusic() {
    yield* this.startSound("background");
  }

  *whenIReceiveSound() {
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

  *addAndSub() {
    this.stage.watchers.questionnumber.visible = true;
    this.stage.watchers.question10.visible = true;
    this.stage.watchers.score.visible = true;
    this.stage.vars.score = 0;
    for (let i = 0; i < 5; i++) {
      yield* this.add2();
      yield* this.sub2();
      yield;
    }
    this.stage.watchers.question10.visible = false;
    this.stage.watchers.questionnumber.visible = false;
    this.stage.watchers.score.visible = false;
    this.broadcast("scoreboard");
    this.stage.watchers.scoreboard.visible = true;
    this.stage.watchers.outof10.visible = true;
    yield* this.scoreboard();
    this.stage.watchers.outof10.visible = false;
    this.stage.watchers.scoreboard.visible = false;
    this.broadcast("chooseGame");
    this.stopAllSounds();
    yield* this.wait(0.1);
    this.stopAllSounds();
    yield* this.wait(0.1);
    this.stopAllSounds();
    yield* this.wait(0.1);
    yield* this.playSoundUntilDone("chose game2");
  }

  *whenIReceiveAddAndSub() {
    this.stage.vars.scoreboard = 0;
    this.stage.vars.question10 = 10;
    this.stage.vars.questionnumber = 0;
    yield* this.startSound("waiting sound");
    yield* this.sayAndWait("are you ready", 2);
    yield* this.sayAndWait(3, 0.8);
    yield* this.sayAndWait(2, 0.8);
    yield* this.sayAndWait(1, 0.8);
    this.stopAllSounds();
    yield* this.addAndSub();
  }

  *add2() {
    for (let i = 0; i < 1; i++) {
      if (this.audioEffects.volume == 0) {
        this.stopAllSounds();
        yield* this.wait(0.1);
        this.stopAllSounds();
        yield* this.wait(0.1);
      } else {
        if (this.audioEffects.volume == 100) {
          this.audioEffects.volume = 100;
        }
      }
      yield* this.startSound("during question");
      yield* this.startSound("during question");
      this.stage.vars.questionnumber += 1;
      this.stage.vars.outof10 = 10;
      this.stage.vars.guess = 0;
      this.stage.vars.randomnumber1 = this.random(1, 100);
      this.stage.vars.randomnumber2 = this.random(1, 100);
      this.stage.vars.answertoproblem =
        this.stage.vars.randomnumber1 + this.stage.vars.randomnumber2;
      yield* this.askAndWait(
        "" +
          this.stage.vars.randomnumber1 +
          ("" + "+" + this.stage.vars.randomnumber2)
      );
      this.stage.vars.guess = this.answer;
      if (
        this.answer ==
        this.stage.vars.randomnumber1 + this.stage.vars.randomnumber2
      ) {
        this.broadcast("correct");
        this.stopAllSounds();
        yield* this.startSound("correct");
        yield* this.sayAndWait("that is correct", 3);
        this.stage.vars.score += 1;
        this.stage.vars.scoreboard += 1;
      } else {
        this.broadcast("wrong");
        this.stopAllSounds();
        yield* this.startSound("wrong");
        yield* this.sayAndWait("that is the wrong answer", 3);
        yield* this.startSound("waiting sound");
        yield* this.sayAndWait("the answer is", 2);
        yield* this.sayAndWait(this.stage.vars.answertoproblem, 2);
        this.stopAllSounds();
      }
      yield;
    }
  }

  *sub2() {
    for (let i = 0; i < 1; i++) {
      if (this.audioEffects.volume == 0) {
        this.stopAllSounds();
        yield* this.wait(0.1);
        this.stopAllSounds();
        yield* this.wait(0.1);
      } else {
        this.audioEffects.volume = 100;
      }
      this.stage.vars.questionnumber += 1;
      yield* this.startSound("during question");
      yield* this.startSound("during question");
      this.stage.vars.outof10 = 10;
      this.stage.vars.guess = 0;
      this.stage.vars.randomnumber1 = this.random(1, 100);
      this.stage.vars.randomnumber2 = this.random(1, 100);
      if (this.stage.vars.randomnumber1 > this.stage.vars.randomnumber2) {
        this.stage.vars.answertoproblem =
          this.stage.vars.randomnumber1 - this.stage.vars.randomnumber2;
        yield* this.askAndWait(
          "" +
            this.stage.vars.randomnumber1 +
            ("" + "-" + this.stage.vars.randomnumber2)
        );
      } else {
        this.stage.vars.answertoproblem =
          this.stage.vars.randomnumber2 - this.stage.vars.randomnumber1;
        yield* this.askAndWait(
          "" +
            this.stage.vars.randomnumber2 +
            ("" + "-" + this.stage.vars.randomnumber1)
        );
        this.stage.vars.guess = this.answer;
      }
      if (this.answer == this.stage.vars.answertoproblem) {
        this.broadcast("correct");
        this.stopAllSounds();
        yield* this.startSound("correct");
        yield* this.sayAndWait("that is correct", 2);
        this.stage.vars.score += 1;
        this.stage.vars.scoreboard += 1;
      } else {
        this.broadcast("wrong");
        this.stopAllSounds();
        yield* this.startSound("wrong");
        yield* this.sayAndWait("that is the wrong answer", 2);
        yield* this.startSound("waiting sound");
        yield* this.sayAndWait("the answer is", 2);
        yield* this.sayAndWait(this.stage.vars.answertoproblem, 2);
        this.stopAllSounds();
      }
      yield;
    }
  }

  *whenIReceiveHelp() {
    this.visible = false;
  }

  *whenIReceiveChoosegame() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
    this.audioEffects.volume = 100;
    this.stage.watchers.outof10.visible = false;
    this.stage.watchers.scoreboard.visible = false;
    this.stage.watchers.question10.visible = false;
    this.stage.watchers.questionnumber.visible = false;
    this.stage.watchers.score.visible = false;
    this.stage.vars.highscore = 0;
    yield* this.backgroundMusic();
  }

  *username() {
    yield* this.askAndWait("What's your name?");
    this.stage.vars.name = this.answer;
  }

  *highScore() {
    this.stage.watchers.highscore.visible = true;
    if (this.stage.vars.score > this.stage.vars.highscore) {
      this.stage.vars.highscore = this.stage.vars.score;
      yield* this.sayAndWait("NEW HIGHSCORE!", 5);
    } else {
      this.stage.vars.highscore = this.stage.vars.highscore;
    }
  }

  *whenIReceiveBackToMenue() {
    this.stopAllSounds();
    /* TODO: Implement stop other scripts in sprite */ null;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.watchers.outof10.visible = false;
    this.stage.watchers.question10.visible = false;
    this.stage.watchers.score.visible = false;
    this.stage.watchers.questionnumber.visible = false;
    this.stopAllSounds();
    yield* this.playSoundUntilDone("chose game2");
  }
}
