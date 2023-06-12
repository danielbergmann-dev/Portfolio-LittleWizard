class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 120;
  y = 275;
  height = 150;
  width = 100;
  hitboxWidth = this.width;
  hitboxHeight = this.height;
  hitboxOffsetX = 0;
  hitboxOffsetY = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  //imagechache fülle ich mit den Bildern, die ich in der Klasse Character habe
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
