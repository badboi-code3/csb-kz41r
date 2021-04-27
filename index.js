import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Duck from "./Duck/Duck.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Duck: new Duck({
    x: -6.000000000000002,
    y: 10.470588235294128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Sprite1: new Sprite1({
    x: -156,
    y: 63,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: -156,
    y: -21,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: -7,
    y: 128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite6: new Sprite6({
    x: -6.68631519990808,
    y: -37.13724472943474,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Sprite7: new Sprite7({
    x: 79,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite8: new Sprite8({
    x: -28,
    y: 41,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite9: new Sprite9({
    x: 8,
    y: -2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite14: new Sprite14({
    x: -56,
    y: 44,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite3: new Sprite3({
    x: 39,
    y: 97,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Sprite4: new Sprite4({
    x: 164,
    y: 19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite13: new Sprite13({
    x: 142,
    y: 53,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Sprite10: new Sprite10({
    x: 201,
    y: -182,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Sprite11: new Sprite11({
    x: -59,
    y: 45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Sprite12: new Sprite12({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Sprite15: new Sprite15({
    x: 299,
    y: -136,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Sprite16: new Sprite16({
    x: -99,
    y: -27,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Sprite17: new Sprite17({
    x: -317,
    y: -97,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
