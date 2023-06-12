class ThroableObjectFire extends MovableObject {
  IMAGES_THROWABLE1 = [
    "img/6_salsa_bottle/comet/comet4.png",
    "img/6_salsa_bottle/comet/comet5.png",
    "img/6_salsa_bottle/comet/comet7.png",
    "img/6_salsa_bottle/comet/comet8.png",
    "img/6_salsa_bottle/comet/comet9.png",
    "img/6_salsa_bottle/comet/comet10.png",
    "img/6_salsa_bottle/comet/comet11.png",
    "img/6_salsa_bottle/comet/comet12.png",
    "img/6_salsa_bottle/comet/comet13.png",
    "img/6_salsa_bottle/comet/comet14.png",
  ];

  IMAGES_THROWABLE = [

    "img/0_endboss/tesla_ball/tesla_ball5.png",
    "img/0_endboss/tesla_ball/tesla_ball6.png",
    "img/0_endboss/tesla_ball/tesla_ball7.png",
    "img/0_endboss/tesla_ball/tesla_ball8.png",
    "img/0_endboss/tesla_ball/tesla_ball9.png",
    "img/0_endboss/tesla_ball/tesla_ball10.png",
    "img/0_endboss/tesla_ball/tesla_ball11.png",
    "img/0_endboss/tesla_ball/tesla_ball12.png",
    "img/0_endboss/tesla_ball/tesla_ball13.png",
    "img/0_endboss/tesla_ball/tesla_ball14.png",
  ];

  constructor(x, y) {
    super().loadImage("img/0_endboss/tesla_ball/tesla_ball5.png");
    this.loadImages(this.IMAGES_THROWABLE);
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 90;
    this.throw();
  }

  throw() {
    this.speedY = 40;
    //this.applyGravity();
    if (this.isAboveGround() || this.speedY > 0) {
      setInterval(() => {
        this.playAnimation(this.IMAGES_THROWABLE);
      }, 6000 / 60);
    }

    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
