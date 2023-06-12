class Bridge1 extends MovableObject {
  x = 575 * 2;
  y = 370;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/mountain-platformer-pixel-art-tileset/PNG/Objects/bridge5.png"
    );
  }
}
