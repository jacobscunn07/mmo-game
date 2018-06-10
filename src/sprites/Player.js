import Phaser from 'phaser'

class Player extends Phaser.Sprite {
    constructor({ game, x, y }) {
        super(game, x, y, "miosprite");
        this.setAnimations();
    }

    setAnimations() {
        this.animations.add('walkright', Phaser.Animation.generateFrameNames('walk_right', 1, 4), 7, true);
        this.animations.add('attackright', Phaser.Animation.generateFrameNames('atk_right', 1, 5), 7, true);
        this.animations.add('idleright', Phaser.Animation.generateFrameNames('idle_right', 1, 5), 7, true);
        this.animations.add('walkup', Phaser.Animation.generateFrameNames('walk_up', 1, 4), 7, true);
        this.animations.add('attackup', Phaser.Animation.generateFrameNames('atk_up', 1, 5), 7, true);
        this.animations.add('idleup', Phaser.Animation.generateFrameNames('idle_up', 1, 5), 7, true);
        this.animations.add('walkdown', Phaser.Animation.generateFrameNames('walk_down', 1, 4), 7, true);
        this.animations.add('attackdown', Phaser.Animation.generateFrameNames('atk_down', 1, 5), 7, true);
        this.animations.add('idledown', Phaser.Animation.generateFrameNames('idle_down', 1, 5), 7, true);
    }

    walkLeft() {
        this.smoothed = false;
        this.anchor.x = 0.4;
        this.scale.x = -1;
        this.x -= 2;
        this.animations.play('walkright');
    }

    walkRight() {
        this.scale.x = 1;
        this.anchor.setTo(0,0);
        this.x += 2;
        this.animations.play('walkright');
    }

    walkUp() {
        this.y -= 2;
        this.animations.play('walkup');
    }

    walkDown() {
        this.y += 2;
        this.animations.play('walkdown');
    }
}

export default Player;
