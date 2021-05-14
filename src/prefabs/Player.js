class Player extends Phaser.GameObjects.Sprite {
    constructor(scene,x, y, velocity, texture, frame) {
        super(scene,x, y, velocity, texture, frame);
        scene.add.existing(this); //Place Rocket in scene
        this.isFiring = false;
        this.sfxHarpoon = scene.sound.add('gunshot');
    }
    update() {
        //Player Movement 
        if(!this.isFiring) {
            if (this.input.on&& this.x >=borderUIsize + this.width) {
            this.pointer.x = this.x;
            this.pointer.y = this.y;
        }
       /* else if(keyRIGHT.isDown && this.x <= game.config.width- borderUIsize - this.width) {
            this.x += this.moveSpeed;
          }*/
        }
        //fire mechanic
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxHarpoon.play();  // play sfx
        }  
     set
        if(this.y <= borderUIsize * 3 + borderPadding) {
            this.reset()
        }
        //Movement after firing
        /*
            if(this.isFiring) {
                if (keyLEFT.isDown && this.x >=borderUIsize + this.width) {
                this.x -= this.moveSpeed;
            }
            else if(keyRIGHT.isDown && this.x <= game.config.width- borderUIsize - this.width) {
                this.x += this.moveSpeed;
              }
            }
            */

    }

 reset () {
    this.isFiring = false
    this.y= game.config.height - borderUIsize - borderPadding;
   }
    
   
}