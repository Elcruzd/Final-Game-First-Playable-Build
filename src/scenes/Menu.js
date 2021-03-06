/* 
** Name: Zhendong Jiang - programming, game design
**       Nathan Pon - art, audio assets
**       Jiahui Li - art, audio assets
** Porject: Final Game:
** Game Title: 
** Date: 
*/

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        // place menu background
        this.add.image(0, 0, 'menuBackground').setOrigin(0, 0);
        // place logo
        // this.add.image(game.config.width/2, game.config.height/4, 'logo').setOrigin(0.5);
        this.add.text(20, 20, "Final Game");
        
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#00044a',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // add play button
        this.add.rectangle(game.config.width/2, game.config.height/2 + 32, game.config.width/2, borderUISize * 2, 0xFEEEBC)
        this.playButton = this.add.text(game.config.width/2, game.config.height/2 + 32, 'START', menuConfig).setOrigin(0.5);
        // set interactive that can go to the play scene
        this.playButton.setInteractive();
        this.playButton.on('pointerdown', () => {
            this.selectSound = this.sound.add('select', {
                mute: false,
                volume: 0.5,
                rate: 1,
                loop: false 
            });
            this.selectSound.play();
            this.scene.start('playScene');
        })

        // add credits button
        this.add.rectangle(game.config.width/2, game.config.height/2 + 190, 0xFEEEBC).setOrigin(0.5);
        this.creditsButton = this.add.text(game.config.width/2, game.config.height/2 + 190, 'CLICK TO VIEW CREDITS', menuConfig).setOrigin(0.5);
        // set interactive that can go to the play scene
        this.creditsButton.setInteractive();
        this.creditsButton.on('pointerdown', () => {
            this.selectSound = this.sound.add('select', {
                mute: false,
                volume: 0.5,
                rate: 1,
                loop: false 
            });
            this.selectSound.play();
            this.scene.start('creditScene');
        })
        // add game instructions
        this.add.text(game.config.width/2, game.config.height/2 + 160, 'TEST', menuConfig).setOrigin(0.5);
        
        // define keys
       //  cursors = this.input.keyboard.createCursorKeys();
        
    }

    update() {
  //   if(cursors.right.isDown) {
           // this.scene.start('playScene');
     //   }
    }
}
