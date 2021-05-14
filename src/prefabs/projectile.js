class projectile extends Phaser.GameObjects.Sprite {
    constructor(scene,x, y, texture) {
        super(scene,x, y, 'projectile');
        scene.add.existing(this); //Place projectile in scene
        let x = scene.Player.x
        let y = scene.Player.y-16;
        scene.physics.world.enableBody(this);
  
    }
    update() {
      
       
     }
       
     
    


    




}