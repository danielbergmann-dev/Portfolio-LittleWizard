class StatusBarCoins extends DrawableObject {
  coinsCollected = 0;

  IMAGES = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/coin100.png",
  ];

  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 40;
    this.width = 200;
    this.height = 50;
    this.setPercentage(0);
  }

  updatePercentage() {
    // wie viele sterne für eine vollständige Füllung der StatusBar
    const coinsForFullBar = 8;
    this.setPercentage((this.coinsCollected / coinsForFullBar) * 100);
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
