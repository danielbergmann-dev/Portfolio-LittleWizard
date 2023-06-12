class Birds extends MovableObject {
  height = 50;
  width = 20;
  y = 10;
  speed = 2;
  speedY = 0.5;
  startingY = 110; // Startposition in der y-Achse
  amplitude = 20; // Amplitude der Sinuswelle
  angularSpeed = 0.05; // Winkelgeschwindigkeit der Sinuswelle
  angle = 0; // Anfangswinkel

  IMAGES_FLYING = [
    "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame1.png",
    "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame2.png",
    "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame3.png",
    "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame4.png",
    "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame5.png",
  ];

  constructor(height, width) {
    super().loadImage(
      "img/pixel-art-forest-platformer-tileset/Background/Pale/Bird/frame1.png"
    );

    this.height = height;
    this.width = width;
    this.loadImages(this.IMAGES_FLYING);
    this.verticalSpeed = 0.5 + Math.random() * 0.5; // Zufällige vertikale Geschwindigkeit
    this.randomizeStartPosition(); // Zufällige Startposition
    this.animate();
  }

  randomizeStartPosition() {
    this.x = 1000 + Math.random() * 500; // Zufällige x-Position
    this.y = 60 + Math.random() * 100; // Zufällige y-Position
    this.startingY = this.y; // Aktualisieren der Startposition in der y-Achse
    this.speed = 2 + Math.random() * 0.25; // Zufällige Geschwindigkeit
  }

  // animiert die Birds von rechts nach links
  animate() {
    setInterval(() => {
      this.moveLeft();
      this.angle += this.angularSpeed;
      this.y = this.startingY +
      this.amplitude * Math.sin(this.angle * this.verticalSpeed); // Vertikale Geschwindigkeit anwenden
      this.playAnimation(this.IMAGES_FLYING);
      this.setBirdPosition();
    }, 5000 / 60);
  }

  setBirdPosition() {
    if (this.x < -219) {
      this.randomizeStartPosition(); // Zufällige Startposition, wenn der Vogel den Bildschirm verlässt
      this.angle = 0; // Setze den Winkel auf den Anfangswert zurück
      this.verticalSpeed = 0.5 + Math.random() * 0.5; // Setze eine zufällige vertikale Geschwindigkeit
    }
  }
}
