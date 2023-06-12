class Grass extends MovableObject {
  x = 720;
  y = 420;
  height = 64;
  width = 64;

  constructor() {
    super().loadImage(
      "img/pixel-art-forest-platformer-tileset/Tiles/Ground_grass_0001_tile.png"
    );
  }
}
