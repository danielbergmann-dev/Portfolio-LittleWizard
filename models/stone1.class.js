class Stone1 extends MovableObject {
  x = 855*2;
  y = 415;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/mountain-platformer-pixel-art-tileset/PNG/Tiles_ground/ground_tile01.png"
    );
  }
}
