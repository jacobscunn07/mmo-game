/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Player from './../sprites/Player';

export default class extends Phaser.State {
  init() { }
  preload() {
    // this.load.spritesheet('clotharmor', './../../assets/images/clotharmor.png', 32, 32, 5);
    this.load.atlasJSONHash('miosprite', './../../assets/images/clotharmor.png', 'src/sprites/clotharmor.json');

  }

  create() {
    this.cursors = game.input.keyboard.createCursorKeys();

    this.test = new Player({
      game: this.game,
      x: 200,
      y: 300
    });
    this.game.add.existing(this.test);
    this.test.animations.play('walkdown');
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.test, 32, 32);
    }
  }

  update() {
    if (this.cursors.left.isDown)
    {
        this.test.walkLeft();
    }
    else if (this.cursors.right.isDown)
    {
      this.test.walkRight();
    }

    if (this.cursors.up.isDown)
    {
      this.test.walkUp();
    }
    else if (this.cursors.down.isDown)
    {
      this.test.walkDown();
    }
  }
}
