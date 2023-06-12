class StatusBarBottle extends DrawableObject {
  
  IMAGES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0_0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20_20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40_40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60_60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80_80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100_100.png",
  ];

  percentage = 20;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 500;
    this.y = 0;
    this.width = 200;
    this.height = 50;
    this.setPercentage(20);
  }

  // set percentage()
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 ...5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 0) {
      return 0;
    } else if (this.percentage < 20) {
      return 1;
    } else if (this.percentage < 40) {
      return 2;
    } else if (this.percentage < 60) {
      return 3;
    } else if (this.percentage < 80) {
      return 4;
    } else {
      return 5;
    }
  }
}
