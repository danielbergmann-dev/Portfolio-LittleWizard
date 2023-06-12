/* let canvas; */
let world;
let keyboard = new Keyboard();
let canvas = document.getElementById("canvas");
let touchCount = 0;


function init() {
    btnLeft();
    btnRight();
    btnUp();
    btnFire();
    btnFire2();
    update();
    document.getElementById("canvas").style.visibility = "visible"; // canvas wird sichtbar
    canvas = document.getElementById("canvas"); // canvas wird in Variable gespeichert
    world = new World(canvas, keyboard); // neue Welt wird erstellt
    
    // Anzahl der nebeneinander angeordneten Bilder
    world.grass.count = 7;
    world.secretStone1.count = 39;
    world.endbossStone1.count = 2;
    world.endbossStoneALL.count = 1;
    world.endbossStoneL1.count = 1;
    world.endbossStoneUP.count = 1;
    world.endbossStoneR1.count = 1;
    world.endbossTrap.count = 1;
    world.tree1.count = 1;
    world.grass2.count = 1;
    world.bridge1.count = 1;
    world.bridge2.count = 9;
    world.bridge3.count = 1;
    world.water1.count = 10;
    world.stone1.count = 1;
    world.stone11.count = 1;
    world.stone111.count = 1;
    world.stone2.count = 10;
    world.rock1.count = 4;
    world.shield1.count = 1;
}

// Tastatursteuerung
window.addEventListener("keydown", (e) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 75) {
        keyboard.K = true;
    }
    if (event.keyCode == 27) {
        keyboard.ESC = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 75) {
        keyboard.K = false;
    }
    if (event.keyCode == 27) {
        keyboard.ESC = false;
    }
});

// Touchsteuerung
// Bewegung nach links
function btnLeft() {
    document.getElementById("btnLeft").addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById("btnLeft").addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

// Bewegung nach rechts
function btnRight() {
    document.getElementById("btnRight").addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.RIGHT = true;
        
    });

    document.getElementById("btnRight").addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}
 // Bewegung nach oben
function btnUp() {
    document.getElementById("btnUp").addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById("btnUp").addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.UP = false;
    });
}

// Schießen
function btnFire() {
    document.getElementById("btnFire").addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById("btnFire").addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

// SuperSchuss für den Endboss
function btnFire2() {
    // SuperSchuss (K Taste) wird angezeigt, wenn der Schatz gefunden wurde
    if (keyboard.ESC == true) {
      document.getElementById("btnFire2").style.display = "block";
    } else {
      document.getElementById("btnFire2").style.display = "none";
    }
  
    document.getElementById("btnFire2").addEventListener("touchstart", function (e) {
      e.preventDefault();
      keyboard.K = true;
    });
  
    document.getElementById("btnFire2").addEventListener("touchend", function (e) {
      e.preventDefault();
      keyboard.K = false;
    });
  }

  function update() {
    btnFire2();
    requestAnimationFrame(update);
  }
  
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

function settings() {
    window.location.href = "settings.html";
}

function settings() {
    window.location.href = "settings.html";
}

function home() {
    window.location.href = "index.html";
}
function repeat() {
    window.location.href = "index2.html";
}

function pauseAudio() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}


