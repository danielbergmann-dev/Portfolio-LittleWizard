class World {
  character = new Character();
  endboss = new Endboss();
  level = level1;
  canvas; // Canvas wird in der Klasse World gespeichert
  ctx; // Context wird in der Klasse World gespeichert
  keyboard; // Keyboard wird in der Klasse World gespeichert
  camera_x = -719; // Kamera wird in der Klasse World gespeichert
  statusBar = new StatusBar(); // StatusBar wird in der Klasse World gespeichert
  statusBarCoins = new StatusBarCoins(); // StatusBarCoins wird in der Klasse World gespeichert
  statusBarEndboss = new StatusBarEndBoss(); // StatusBarEndBoss wird in der Klasse World gespeichert
  statusBarBottle = new StatusBarBottle(); // StatusBarBottle wird in der Klasse World gespeichert
  throwablesObjects = []; // throwables wird in der Klasse World gespeichert
  throwablesObjects2 = []; // throwables wird in der Klasse World gespeichert
  looseScreen = new LooseScreen(); // LooseScreen wird in der Klasse World gespeichert
  winScreen = new WinScreen(); // WinScreen wird in der Klasse World gespeichert
  gameOver = false;
  coins = []; // Sterne werden in der Klasse World gespeichert
  bottles = []; // Flaschen werden in der Klasse World gespeichert
  bottles2 = []; // Secret K wird in der Klasse World gespeichert
  grass = new Grass(); // Gras wird in der Klasse World gespeichert
  secretStone1 = new SecretStone1(); // SecretStone1 wird in der Klasse World gespeichert
  endbossStone1 = new EndbossStone1();
  endbossStone1U = new EndbossStone1();
  endbossStone1UR = new EndbossStone1();
  endbossStoneALL = new EndbossStoneAll();
  endbossStoneALL2 = new EndbossStoneAll();
  endbossStoneALL_L = new EndbossStoneAll();
  endbossStoneALL_R = new EndbossStoneAll();
  endbossStoneL1 = new EndbossStoneL1();
  endbossStoneUP = new EndbossStoneUP();
  endbossStoneUP2 = new EndbossStoneUP();
  endbossStoneR1 = new EndbossStoneR1();
  endbossTrap = new EndbossTrap();
  tree1 = new Tree1(); // Baum wird in der Klasse World gespeichert
  tree2 = new Tree1();
  tree3 = new Tree1();
  grass2 = new Grass2();
  bridge1 = new Bridge1(); // Brücke wird in der Klasse World gespeichert
  bridge2 = new Bridge2();
  bridge3 = new Bridge3();
  water1 = new Water1(); // Wasser wird in der Klasse World gespeichert
  stone1 = new Stone1();
  stone11 = new Stone11();
  stone111 = new Stone111(); //stone1111 = new Stone111();
  stone2 = new Stone2();
  rock1 = new Rock1();
  shield1 = new Shield1(); // Schild wird in der Klasse World gespeichert

  constructor(canvas, keyboard, character) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.generateCoins(8); // Erzeugt 8 zufällige Sterne
    this.generateBottles(4); // Erzeugt 4 zufällige Flaschen
    this.generateBottles2(1); // Erzeugt Secret K
    this.drawTree2(); // Baum wird gezeichnet
    this.drawTree3();
    this.drawEndbossStoneAll2();
    this.drawEndbossStoneAll_L();
    this.drawEndbossStoneAll_R();
    this.drawEndbossStone1U();
    this.drawEndbossStone1UR();
    this.drawEndbossStoneUP2();

  }

  setWorld() {
    this.character.world = this; // Welt wird dem Character zugewiesen
  }

  drawEndbossStoneUP2() {
    this.endbossStoneUP2.x = 2300;
    this.endbossStoneUP2.y = 380;
    this.endbossStoneUP2.height = 64;
    this.endbossStoneUP2.width = 64;
  }

  drawEndbossStone1U() {
    this.endbossStone1U.x = 2985;
    this.endbossStone1U.y = 430;
    this.endbossStone1U.height = 64;
    this.endbossStone1U.width = 84;
  }

  drawEndbossStone1UR() {
    this.endbossStone1UR.x = 3060;
    this.endbossStone1UR.y = 430;
    this.endbossStone1UR.height = 64;
    this.endbossStone1UR.width = 84;
  }

  drawEndbossStoneAll2() {
    this.endbossStoneALL2.x = 3115;
    this.endbossStoneALL2.y = 420;
    this.endbossStoneALL2.height = 64;
    this.endbossStoneALL2.width = 64;
  }

  drawEndbossStoneAll_L() {
    this.endbossStoneALL_L.x = 3115;
    this.endbossStoneALL_L.y = 370;
    this.endbossStoneALL_L.height = 64;
    this.endbossStoneALL_L.width = 64;
  }

  drawEndbossStoneAll_R() {
    this.endbossStoneALL_R.x = 3115;
    this.endbossStoneALL_R.y = 380;
    this.endbossStoneALL_R.height = 64;
    this.endbossStoneALL_R.width = 64;
  }

  drawlava2() {
    this.lava2.x = 2700;
    this.lava2.y = 410;
    this.lava2.height = 70;
    this.lava2.width = 64;
  }

  drawTree2() {
    this.tree2.x = 720;
    this.tree2.y = 275;
    this.tree2.height = 108;
    this.tree2.width = 79;
  }

  drawTree3() {
    this.tree3.x = 780;
    this.tree3.y = 325;
    this.tree3.height = 108;
    this.tree3.width = 79;
  }

  // Kollisionen werden überprüft
  run() {
    setInterval(() => {
      this.checkCollisionEndboss();
      this.checkCollision();
      this.checkThrowObjects();
      this.checkThrowObjects2();
      this.checkCoinCollision();
      this.checkBottleCollision();
      this.checkBottle2Collision();
      this.checkThrowableObjectCollision();
      this.checkThrowableObjectCollisionEndboss();
      this.checkCharacterPosition();
    }, 200);
  }

  checkCharacterPosition() {
    // Abfrage, der Character X Position, um SuperKraft zu aktivieren, nachdem der Schatz gefunden wurde
    if (world.character.x < -1046) {
      this.keyboard.ESC = true;
    }
  }

  checkCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        enemy.attack = true;
        enemy.attackCharacter();
        this.statusBar.setPercentage(this.character.energy);
      } else if (this.character.isJumpingOn(enemy) && !enemy.isDead) {
        enemy.die(); // Enemy stirbt, wenn der Character darauf springt
      }
    });
  }

  checkCollisionEndboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy);
    }
  }

  generateBottles(numBottles) {
    for (let i = 0; i < numBottles; i++) {
      const x = Math.random() * 2000;
      const y = 350; // Flaschen auf dem Boden platzieren
      const bottle = new Bottle(x, y);
      this.bottles.push(bottle);
    }
  }
  generateBottles2(numBottles) {
    for (let i = 0; i < numBottles; i++) {
      const x = -1136;
      const y = 350; // Flaschen auf dem Boden platzieren
      const bottle2 = new Bottle2(x, y);
      this.bottles2.push(bottle2);
    }
  }

  generateCoins(numCoins) {
    for (let i = 0; i < numCoins; i++) {
      const coin = new Coin();
      this.coins.push(coin);
    }
  }

  checkThrowObjects() {
    if (this.keyboard.SPACE && this.statusBarBottle.percentage >= 20) {
      this.character.playAnimation(this.character.IMAGES_ATTACK);
      let bottle = new ThroableObject(
        this.character.x + 20,
        this.character.y + 40
      );
      this.throwablesObjects.push(bottle);
      this.statusBarBottle.setPercentage(this.statusBarBottle.percentage - 20); // Reduziere den Füllstand der StatusBarBottle
    }
  }

  checkThrowObjects2() {
    if (this.keyboard.K) {
      this.character.playAnimation(this.character.IMAGES_ATTACK);
      let bottle2 = new ThroableObjectFire(
        this.character.x + 20,
        this.character.y + 40
      );
      this.throwablesObjects2.push(bottle2);
      this.statusBarBottle.setPercentage(this.statusBarBottle.percentage - 0); // Reduziere den Füllstand der StatusBarBottle
    }
  }

  checkCoinCollision() {
    this.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.coins.splice(index, 1); // Entferne die Münze aus dem Array
        this.statusBarCoins.coinsCollected += 1; // Aktualisiere den coinsCollected-Wert der StatusBarCoins
        this.updateStatusBarCoins(); // Aktualisiere die StatusBarCoins
      }
    });
  }

  checkBottleCollision() {
    this.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.bottles.splice(index, 1); // Entferne die Flasche aus dem Array
        this.statusBarBottle.setPercentage(
          this.statusBarBottle.percentage + 20
        ); // Aktualisiere den Flaschen-Status
      }
    });
  }

  checkBottle2Collision() {
    this.bottles2.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.bottles2.splice(index, 1); // Entferne die Flasche aus dem Array
        this.statusBarBottle.setPercentage(
          this.statusBarBottle.percentage + 20
        ); // Aktualisiere den Flaschen-Status
      }
    });
  }

  checkThrowableObjectCollision() {
    this.throwablesObjects.forEach((throwable, throwableIndex) => {
      this.level.enemies.forEach((enemy, enemyIndex) => {
        if (throwable.isColliding(enemy)) {
          enemy.isDead = true;
          enemy.die(); // Das Huhn stirbt

          this.throwablesObjects.splice(throwableIndex, 1); // Entferne das Wurfobjekt aus dem Array
        }
      });
    });
  }

  checkThrowableObjectCollisionEndboss() {
    // Überprüfe Kollisionen und entferne Wurfobjekte aus dem Array
    this.throwablesObjects2.forEach((throwable, throwableIndex) => {
      if (throwable.isColliding(this.endboss)) {
        this.endboss.hit();
        this.statusBarEndboss.setPercentage(
          this.statusBarEndboss.percentage - 20);
        this.throwablesObjects2.splice(throwableIndex, 1); // Entferne das Wurfobjekt aus dem Array
      }});
    // Überprüfe, ob der Endboss noch lebt
    if (this.statusBarEndboss.percentage <= 0) {
      this.endboss.isDead = true;
    }}

  updateStatusBarCoins() {
    this.statusBarCoins.updatePercentage(); // Aktualisiere die Prozentanzeige der StatusBarCoins
  }

  drawElements(element) {
    for (let i = 0; i < element.count; i++) {
      this.ctx.drawImage(
        element.img,
        element.x + i * element.width,
        element.y,
        element.width,
        element.height
      );
    }
  }

  // Zeichnet alle Objekte auf die World
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas wird geleert
    this.ctx.translate(this.camera_x, 0); // Verschiebt den Canvas nach links

    this.addObjektsToMap(this.level.backgroundObjects); // Hintergrund wird gezeichnet
    this.addObjektsToMap(this.level.clouds); // Wolken werden gezeichnet
    this.addObjektsToMap(this.level.cloudSecretRoom); // CloudSecretRoom wird gezeichnet
    this.addObjektsToMap(this.level.birds); // Vögel werden gezeichnet
    this.addObjektsToMap(this.coins); // Sterne werden gezeichnet
    this.addObjektsToMap(this.bottles); // Flaschen werden gezeichnet
    this.addObjektsToMap(this.bottles2); // Secret K wird gezeichnet

    this.ctx.translate(-this.camera_x, 0); // Verschiebt den Canvas zurück
    this.addToMap(this.statusBar); // StatusBar wird gezeichnet
    this.addToMap(this.statusBarCoins); // StatusBarCoin wird gezeichnet
    this.addToMap(this.statusBarEndboss); // StatusBarEndBoss wird gezeichnet
    this.addToMap(this.statusBarBottle); // StatusBarBottle wird gezeichnet
    this.ctx.translate(this.camera_x, 0); // Verschiebt den Canvas nach links

    this.addObjektsToMap(this.level.enemies); // Gegner werden gezeichnet
    this.addToMap(this.character); // Character wird gezeichnet
    this.addToMap(this.tree2); // Gras wird gezeichnet
    this.addToMap(this.tree3); // Gras wird gezeichnet
    this.addToMap(this.endbossStone1U); // Gras wird gezeichnet
    this.addToMap(this.endbossStone1UR); // Gras wird gezeichnet
    this.addToMap(this.endbossStoneALL2); // Gras wird gezeichnet
    this.addToMap(this.endbossStoneALL_L); // Gras wird gezeichnet
    this.addToMap(this.endbossStoneALL_R); // Gras wird gezeichnet
    this.addToMap(this.endbossStoneUP2); // Gras wird gezeichnet
    this.addToMap(this.endboss); // Endboss wird gezeichnet

    this.addObjektsToMap(this.throwablesObjects2); // throwables werden gezeichnet
    this.addObjektsToMap(this.throwablesObjects); // throwables werden gezeichnet

    this.drawElements(this.secretStone1);
    this.drawElements(this.endbossStone1);
    this.drawElements(this.endbossStoneL1);
    this.drawElements(this.endbossStoneUP);
    this.drawElements(this.endbossStoneR1);
    this.drawElements(this.endbossTrap);
    this.drawElements(this.endbossStoneALL);
    this.drawElements(this.tree1);
    this.drawElements(this.shield1);
    this.drawElements(this.rock1);
    this.drawElements(this.stone111);
    this.drawElements(this.water1);
    this.drawElements(this.grass);
    //this.drawElements(this.grass2);
    this.drawElements(this.bridge1);
    this.drawElements(this.bridge2);
    this.drawElements(this.bridge3);
    this.drawElements(this.stone1);
    this.drawElements(this.stone11);
    this.drawElements(this.stone2);

    this.ctx.translate(-this.camera_x, 0); // Verschiebt den Canvas nach rechts

    if (this.character.energy <= 0) {
      this.gameOver = true;
      this.addToMap(this.looseScreen);
    }

    if (this.statusBarEndboss.percentage <= 0) {
      this.gameOver = true;
      this.addToMap(this.winScreen);
    }

    // Draw () wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjektsToMap(objects) {
    // Hintergrund, Wolken, Gegner werden gezeichnet
    objects.forEach((o) => {
      this.addToMap(o); // o = Character wird gezeichnet
    });
  }

  addToMap(mo) {
    // mo = Character
    if (mo.otherDirection) {
      this.flipImage(mo); // Wenn true, dann wird die Funktion flipImage() aufgerufen
    }

    mo.draw(this.ctx); // Zeichnet den Character
    // mo.drawFrame(this.ctx); // Zeichnet den Frame

    if (mo.otherDirection) {
      this.flipImageBack(mo); // Wenn true, dann wird die Funktion flipImageBack() aufgerufen
    }
  }

  flipImage(mo) {
    this.ctx.save(); // Speichert den aktuellen Zustand des Canvas
    this.ctx.translate(mo.width, 0); // Verschiebt den Canvas
    this.ctx.scale(-1, 1); // Spiegelt den Canvas
    mo.x = -mo.x; // Verschiebt den Character
  }

  flipImageBack(mo) {
    mo.x = -mo.x; // Verschiebt den Character
    this.ctx.restore(); // Setzt den Canvas auf den Zustand vor dem Speichern
  }
}
