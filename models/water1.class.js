class Water1 extends MovableObject {
  x = 548 * 2;
  y = 440;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/mountain-platformer-pixel-art-tileset/PNG/Tiles_water/water_tile32.png"
    );
  }
}
