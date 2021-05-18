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
     
        this.add.image(0, 0, 'city').setOrigin(0, 0);
         this.p1Ammo = 50;
      
        //UI
        this.add.rectangle(0,borderUIsize + borderPadding, game.config.width/4, borderUIsize * 2, 283033 ).setOrigin(0,0.7); //green UI
        this.healthText = this.add.text(16,16, 'Health: ', { fontSize: '16px', fill: '#000' });
        this.add.rectangle(0,borderUIsize + borderPadding, game.config.width/4, borderUIsize * 2, 283033 ).setOrigin(-4,0.7); 
        this.ammoText = this.add.text(16,32,`Ammo: ${this.p1Ammo}`, { fontSize: '16px', fill: '#000' });
        
        this.m1 = new Enemy(this, game.config.width/2, game.config.height-borderUIsize-borderPadding).setOrigin(0.5,1);
        this.m2 = new Enemy(this, game.config.width/2, game.config.height-borderUIsize-borderPadding).setOrigin(-0.5,1);
        this.p1 = new Player (this, game.config.width/2, game.config.height-borderUIsize-borderPadding).setOrigin(0.5,0.5); //add player 1

      //Player movement with mouse 
      this.p1Controls();
     // this.physics.add.overlap(bullet,Enemy,this.hitEnemy, null, this)
      
      
    }

 
    p1Controls() {
     
      this.input.on('pointermove', (pointer) =>{ 
      this.p1.x = pointer.x;
      this.p1.y = pointer.y;
      })

      //Fire projectile on click
     this.input.on('pointerdown', (pointer) =>{ 

      this.bullet = new projectile (this, this.p1.x, this.p1.y+300, 'projectile');

     //this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y+300,'projectile'); //Working code
     this.bullet.body.velocity.y = -300;  //Makes projectile visible
   
     this.p1Ammo -= 1
     this.ammoText.text = `Ammo: ${this.p1Ammo} `;
     
      this.sfx = this.sound.add('gunshot', {
          mute: false,
          volume: 1,
          rate: 1,
          loop: false 
      });
        this.sfx.play();   
      })

    }

 update(){
   //Temporary game over
  if(this.p1Ammo <=0){
    this.scene.start("menuScene");
  }

 }



}
