class Bottle2 extends MovableObject {
    constructor(x, y) {
      super().loadImage("img/1_chest/Chest3_open.png"); // secret K
      this.x = -1350;
      this.y = 365;
      this.height = 80; 
      this.width = 60; 
      this.hitboxWidth = 60;
      this.hitboxHeight = 30;
      this.hitboxOffsetX = 10;
      this.hitboxOffsetY = 0;
    }
  }
  