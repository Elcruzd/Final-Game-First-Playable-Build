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
        this.load.image ('projectile', 'bullet.png')

        //Different particle effects
        this.load.image ('orange', 'particle.png')
        this.load.image ('particle2', 'particle2.png')
        this.load.image ('explode', 'particle3.png')

        /*BOSS SPRITE TO BE ADDED
        this.load.spritesheet ('boss', 'bossSprites.png',{
        frameWidth:452,
        frameHeight:570 
        });*/
    
        // load audio asset
        this.load.audio('gunshot', 'gunshot.wav');
        this.load.audio('select', 'select.wav');
        this.load.audio('monsterHit', 'monsterHit.wav');
        this.load.audio ('enemyDefeat', 'enemyDefeat.wav');
        this.load.audio('bgm', 'bgm.wav');
    

    }

    create() {
        this.scene.start('menuScene');  // move to menu scene
    }
}