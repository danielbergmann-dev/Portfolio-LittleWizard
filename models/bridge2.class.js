class Bridge2 extends MovableObject {
    x = 590*2;
    y = 370;
    height = 64;
    width = 64;
    
    constructor() {
      super().loadImage(
        "img/mountain-platformer-pixel-art-tileset/PNG/Objects/bridge4.png"
      );
    }
  }