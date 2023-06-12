class cloudSecretRoom extends MovableObject {
  y = 50;
  width = 719;
  height = 250;

  constructor() {
    super().loadImage(
      "img/dungeon-platformer-pixel-art-tileset-2/PNG/Background/Pale/myst.png"
    );
    this.x = 20;
    this.animate();
  }

  // animiert die Wolken von rechts nach links
  animate() {
    setInterval(() => {
      this.moveLeft(); // Wolken bewegen sich nach links
      if (this.x < -719) {
        this.x = 0;
      }
    }, 1000 / 60);
  }
}
