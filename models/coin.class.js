class Coin extends MovableObject {
  static lastX = 0;
  width = 30;
  height = 30;

  IMAGES_COIN = [
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star2.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star3.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star4.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star5.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star6.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star7.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star8.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star9.png",
    "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star10.png",
  ];

  constructor() {
    super().loadImage(
      "img/pixel-art-forest-platformer-tileset/Objects_Animated/Star/star.png"
    );
    this.loadImages(this.IMAGES_COIN);
    this.x = 1068 + Math.random() * 1500; // Zufällige Positionierung zwischen 0 und 1000
    this.y = 310 + Math.random() * 20; // Zufällige Positionierung zwischen 0 und 300
    this.animate();

    // Hitbox für die Coins
    this.hitboxWidth = 80;
    this.hitboxHeight = 40;
    this.hitboxOffsetX = 0;
    this.hitboxOffsetY = -20;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 200);
  }
}
