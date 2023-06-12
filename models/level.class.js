class Level {
  enemies;
  cloudSecretRoom;
  birds;
  backgroundObjects;
  level_end_x = 2560;
  level_start_x = -1368;

  constructor(enemies, clouds, cloudSecretRoom, birds, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.cloudSecretRoom = cloudSecretRoom;
    this.birds = birds;
    this.backgroundObjects = backgroundObjects;
  }
}
