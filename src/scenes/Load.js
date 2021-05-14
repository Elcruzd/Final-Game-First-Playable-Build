/* 
** Name: Zhendong Jiang - programming, game design
**       Nathan Pon - art, audio assets
**       Jiahui Li - art, audio assets
** Porject: Final Game:
** Game Title: 
** Date: 
*/

class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        this.load.path = './assets/';
       
      //Placeholder art assets (final game)
        this.load.image('city', 'FinalBGA.png')
        this.load.image ('crosshair','CHgame.png')
        this.load.image ('monster', 'monsterBoss.png')
        this.load.image ('projectile', 'projectile.png')
        
        // load audio asset
        this.load.audio('gunshot', 'gunshot.wav');
        this.load.audio('select', 'select.wav');
    

    }

    create() {
   
        this.anims.create({
            key: 'swimming',
            frames: this.anims.generateFrameNames('swim', {
                prefix: 'swim/',
                start: 1,
                end: 8,
                suffix: '.png',
                zeroPad: 4,
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: 'bloods',
            frames: this.anims.generateFrameNumbers('bloodExplode', {
                start: 0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        });

        this.scene.start('menuScene');  // move to menu scene
    }
}