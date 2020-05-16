class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init() {
  }

  preload() {
    this.load.image('gameover1', 'assets/font/gameover1.png');
    this.load.image('gameover2', 'assets/font/gameover2.png');
  }

  create() {
    this.config = this.game.config;
  }

  update() {
  }
}
