class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
  }

  create() {
    this.config = this.game.config;

    var goMusic = this.sound.add('gameover');
    goMusic.play({
        mute: false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    });

    this.gobackground = this.add.tileSprite(0,0,this.config.width,this.config.height,'bg2');
    this.gobackground.setOrigin(0,0);
    this.spacering = this.add.tileSprite(0,0 ,150,100, 'spaceRing').setDisplaySize(this.config.width,this.config.height).setOrigin(0);

    this.anims.create({
      key: 'gameoverflash',
      frames: [
          {key: 'gameover1'},
          {key: 'gameover2'}
      ],
      frameRate: 15,
      repeat: -1
  });

    this.anims.create({
      key: 'fallover',
      frames: [
          {key: 'dead1'},
          {key: 'dead2'},
          {key: 'dead3'},
          {key: 'dead4'},
          {key: 'dead5'},
          {key: 'dead6'},
          {key: 'dead7'},
          {key: 'dead8'},
          {key: 'dead9'},
          {key: 'dead10'}
      ],
      frameRate: 10, 
      repeat: 0
});

this.anims.create({
  key: "fallover",
  frames: this.anims.generateFrameNumbers("fallover"),
  frameRate: 10, 
  repeat: -1 
});

}

 update() {
  }
}
