class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y)
    { super (scene,x, y, 'monster');
        scene.add.existing(this);           // add object to the existing scene
        scene.physics.add.existing(this);
        this.setSize(128, 32);
        this.newMonster = true;
        this.hP = 5; //set hitpoints
}

    update() {
       

    }

    hit() {
        console.log('hit2');
        this.hP= this.hP-1
        this.isDead();
        
    }

    isDead() {
         //Destroy sprite in multiple hits
         if(this.hP <= 0)
         {
             this.destroy();
             return true;
         }
    }
}