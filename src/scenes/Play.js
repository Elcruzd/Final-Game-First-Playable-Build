/* 
** Name: Zhendong Jiang - programming, game design
**       Nathan Pon - art, audio assets
**       Jiahui Li - art, audio assets
** Project: Final Game:
** Game Title: 
** Date: 
*/

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        //this.add.rectangle(0,borderUIsize + borderPadding, game.config.width, borderUIsize * 2, 283033 ).setOrigin(0,0); //green UI
    
 
        this.add.rectangle(0,0, game.config.width, borderUIsize * 2, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0,0,borderUIsize, game.config.height - borderUIsize,0xFFFFFF ).setOrigin(0,0);
        this.add.rectangle(0,0,borderUIsize, game.config.height,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0,0);
      

        this.add.image(0, 0, 'city').setOrigin(0, 0);
        this.p1 = new Player (this, game.config.width/2, game.config.height-borderUIsize-borderPadding,'crosshair').setOrigin(0.5,0); //add player 1
    
      //Player movement with mouse 
      this.p1movement();
      
    }
    
    p1movement() {
      this.input.on('pointermove', (pointer) =>{ 
      this.p1.x = pointer.x;
      this.p1.y = pointer.y;
      })

      //Play SFX on click
      this.input.on('pointerdown', (pointer) =>{ 
        this.sfx = this.sound.add('gunshot', {
          mute: false,
          volume: 1,
          rate: 1,
          loop: false 
      });
        this.sfx.play();
      })

    }

    update() {
    }
}