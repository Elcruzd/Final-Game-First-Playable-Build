class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, _texture) {
        super(scene,x, y, 'crosshair');
        scene.add.existing(this); 
        this.isFiring = false;
      //  this.sfxHarpoon = scene.sound.add('gunshot');
     
    }
    update() {
        
    }

    
   
}