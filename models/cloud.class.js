class Cloud extends MovableObject {
  y = 50;
  width = 500;
  height = 250;

  constructor() {
    super().loadImage(
      "img/pixel-art-forest-platformer-tileset/Background/Pale/clouds_small.png"
    );
    this.x = Math.random() * 500;
    this.animate();
  }

  // animiert die Wolken von rechts nach links
  animate() {
    setInterval(() => {
      this.moveLeft(); // Wolken bewegen sich nach links
      if (this.x < 719) {
        this.x = 720 * 2;
      }
    }, 1000 / 60);
  }
}
