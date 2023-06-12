class ThroableObject extends MovableObject {

  IMAGES_SPLASH = [
    "img/6_salsa_bottle/midas_hand/Midas1.png",
    "img/6_salsa_bottle/midas_hand/Midas2.png",
    "img/6_salsa_bottle/midas_hand/Midas3.png",
    "img/6_salsa_bottle/midas_hand/Midas4.png",
    "img/6_salsa_bottle/midas_hand/Midas5.png",
    "img/6_salsa_bottle/midas_hand/Midas6.png",
    "img/6_salsa_bottle/midas_hand/Midas7.png",
    "img/6_salsa_bottle/midas_hand/Midas8.png",
    ];

  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/1_0003_Bottle4.png");
    //this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.throw();
  }

  throw() {
    this.speedY = 30;
    /* setInterval(() => {
    this.playAnimation(this.IMAGES_SPLASH);
    }, 90); */
    this.applyGravity();

    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
