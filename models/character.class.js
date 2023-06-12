class Character extends MovableObject {
  height = 140;
  width = 70;
  x = 886;
  y = 330;
  speed = 7;
  deathAnimationPlayed = false;
  currentAnimation = null;
  idleIntervalSet = false;
  idleImageCount;
  gameOver = false;
  world; // Welt wird dem Character zugewiesen
  walking_sound = new Audio("audio/running.mp3");
  isGameOver = false;

  IMAGES_WALKING = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk4.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk5.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk6.png",
  ];
  IMAGES_JUMPING = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump4.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump5.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump6.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump7.png",
  ];
  IMAGES_DEATH = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death4.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death5.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death6.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death7.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death8.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death9.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Death/death10.png",
  ];
  IMAGES_ATTACK = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack4.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack5.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack6.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Attack/attack7.png",
  ];
  IMAGES_HURT = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Hurt/hurt1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Hurt/hurt2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Hurt/hurt3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Hurt/hurt4.png",
  ];
  IMAGES_IDLE = [
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle1.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle2.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle3.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle4.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle5.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle6.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle7.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle8.png",
    "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle9.png",
  ];

  constructor() {
    super().loadImage(
      "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png"
    );
    this.loadImages(this.IMAGES_WALKING); //imagecache fülle ich mit den Bildern, die ich in der Klasse Character habe
    this.loadImages(this.IMAGES_JUMPING); 
    this.loadImages(this.IMAGES_DEATH); 
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK); 
    this.loadImages(this.IMAGES_IDLE); 

    // Hitbox für den Character
    this.hitboxWidth = 40;
    this.hitboxHeight = 50;
    this.hitboxOffsetX = 20;
    this.hitboxOffsetY = 60;
    this.applyGravity();
    this.animate();
  }

  animate() {
    const updateGame = () => {
      this.walking_sound.pause();
      this.keyPressedRight();
      this.keyPressedLeft();
      this.keyPressedUp();
      this.world.camera_x = -this.x + 110; // Kamera folgt dem Character
    };
    
    setInterval(updateGame, 1500 / 60);
    this.loadImageIdle();
    this.resetIdleAnimation();
    this.idleAnimation();
    this.startIdleAnimation();
    setInterval(this.handleIdleAnimation.bind(this), 3000);
    setInterval(this.handleAnimation.bind(this), 100);
    if (this.gameOver && !this.deathAnimationPlayed) this.handleGameOver();
  }

  jump() {
    this.speedY = 33; //30px pro Sekunde
  }

  keyPressedRight() {
    if (!this.world.keyboard.RIGHT || this.x >= this.world.level.level_end_x)
      return;
    this.moveRight();
    this.otherDirection = false;
    this.playWalkingSound();
  }

  keyPressedLeft() {
    if (this.world.keyboard.LEFT && this.x != -1368) {
      this.moveLeft();
      this.otherDirection = true;
      this.playWalkingSound();
    }
  }

  keyPressedUp() {
    if (this.world.keyboard.UP && !this.isAboveGround()) {
      this.jump();
      this.y = 455;
    }
  }

  playWalkingSound() {
    this.walking_sound.play();
  }

  loadImageIdle() {
    this.loadImage(
      "img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Idle/idle1.png"
    );
  }

  resetIdleAnimation() {
    this.idleIntervalSet = false;
    this.idleImageCount = 0;
    this.loadImageIdle.call(this);
  }

  idleAnimation() {
    let path = this.IMAGES_IDLE[this.idleImageCount];
    this.img = this.imageCache[path];
    if (
      this.idleImageCount == this.IMAGES_IDLE.length ||
      keyboard.RIGHT ||
      keyboard.LEFT
    ) {
      this.resetIdleAnimation();
      return false;
    }
    this.idleImageCount++;
    return true;
  }

  startIdleAnimation() {
    if (this.idleIntervalSet) return;
    this.idleIntervalSet = true;
    let idleInterval = 1000;
    this.idleImageCount = 0;
    setTimeout(() => {
      let idleCharacter = setInterval(() => {
        if (!this.idleAnimation.call(this)) clearInterval(idleCharacter);
      }, 300);
    }, idleInterval);
  }

  handleIdleAnimation() {
    if (
      !keyboard.RIGHT &&
      !keyboard.LEFT &&
      !this.deathAnimationPlayed &&
      !this.idleIntervalSet
    ) {
      this.loadImageIdle.call(this);
      this.startIdleAnimation.call(this);
    }
  }

  handleAnimation() {
    if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    } else if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      // Walk animation
      this.playAnimation(this.IMAGES_WALKING);
    }
  }

  handleGameOver() {
    this.playDeathAnimation();
    this.currentMusic = this.deathMusic;
    this.currentMusic.play();
    setInterval(() => {
      this.playAnimation(this.IMAGES_DEATH);
    }, 4000 / 8);
    this.deathAnimationPlayed = true;
    this.addToMap(this.looseScreen);

    setTimeout(() => {
      this.stopMovement();
    }, 1000);
  }
}
