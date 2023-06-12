class Bridge3 extends MovableObject {
  x = 860 * 2;
  y = 370;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/mountain-platformer-pixel-art-tileset/PNG/Objects/bridge6.png"
    );
  }
}
