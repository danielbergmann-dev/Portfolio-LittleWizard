class StatusBarEndBoss extends DrawableObject {
  IMAGES = [
    "img/7_statusbars/2_statusbar_endboss/blue/0_0.png",
    "img/7_statusbars/2_statusbar_endboss/blue/20_20.png",
    "img/7_statusbars/2_statusbar_endboss/blue/40_40.png",
    "img/7_statusbars/2_statusbar_endboss/blue/60_60.png",
    "img/7_statusbars/2_statusbar_endboss/blue/80_80.png",
    "img/7_statusbars/2_statusbar_endboss/blue/100_100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 500;
    this.y = 40;
    this.width = 200;
    this.height = 50;
    this.setPercentage(100);
  }

  // set percentage()
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 ...5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}


