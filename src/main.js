/* 
** Name: Zhendong Jiang - programming, game design
**       Nathan Pon - art, audio assets
**       Jiahui Li - art, audio assets
** Porject: Final Game:
** Game Title: 
** Date: 
*/
// game configuration

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Credits, Play, End ]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height/20;
let borderPadding = borderUISize/3;