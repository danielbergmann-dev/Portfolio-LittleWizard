class Grass2 extends MovableObject {
  x = 1130;
  y = 420;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/pixel-art-forest-platformer-tileset/Tiles/Ground_grass_0002_tile.png"
    );
  }
}
