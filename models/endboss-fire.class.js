class EndbossFire extends MovableObject {
    constructor(x, y) {
      super().loadImage("img/6_salsa_bottle/fire/Fire1.png"); // Bild für das Feuer
      this.x = Math.random() * (1500 - (-200)) + (-200); // Zufällige x-Koordinate zwischen -200 und 1500
      this.y = 400;
      this.height = 30; 
      this.width = 30; 
    }
  }
  