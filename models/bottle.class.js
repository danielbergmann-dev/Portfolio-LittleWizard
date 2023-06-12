class Bottle extends MovableObject {
    constructor(x, y) {
      super().loadImage("img/6_salsa_bottle/1_0003_Bottle4.png"); // Bild für die Flasche
      this.x = this.x = Math.random() * (1251 - 871) + 1071; // Position der Flaschen auf der x-Achse
      this.y = 400;
      this.height = 30; 
      this.width = 30; 
    }
  }
  