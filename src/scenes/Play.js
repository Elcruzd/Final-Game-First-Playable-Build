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
       
       //Ammo Count
        this.p1Ammo = 50;  

        //Play bgm
        this.bgm = this.sound.add('bgm', {
          mute: false,
          volume: 1.5,
          rate: 1.5,
          loop: true 
      });
      this.bgm.play();
      
      //UI
      this.add.rectangle(0,borderUISize + borderPadding, game.config.width/4, borderUISize * 2, 283033 ).setOrigin(0,0.7); 
      this.healthText = this.add.text(16,16, 'Health: $ ', { fontSize: '16px', fill: '#000' });
      this.add.rectangle(0,borderUISize + borderPadding, game.config.width/4, borderUISize * 2, 283033 ).setOrigin(-4,0.7); 
      this.ammoText = this.add.text(16,32,`Ammo: ${this.p1Ammo}`, { fontSize: '16px', fill: '#000' });

     //Add group of enemies
       this.bossGroup = this.add.group({
         runChildUpdate:true
       })
     
  
      // this.boss1 =new Enemy(this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(0.5,1);
      // this.boss2 = new Enemy(this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(-0.5,1);
        
   //create player
   this.p1 = new Player (this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(0.5,0.5); //add player 1

    //Player movement with mouse 
    this.p1Controls();

    this.time.delayedCall(1000, () => {
      this.spawnBoss();
    })
      
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

    
    //Spawn Enemy at random points
    spawnBoss(){
      this.boss1 = new Enemy(this, Phaser.Math.Between(0, game.config.width/2), Phaser.Math.Between(0,  game.config.height-borderUISize-borderPadding)).setOrigin(0.5,1);
      this.boss2 = new Enemy(this, Phaser.Math.Between(0, game.config.width/2), Phaser.Math.Between(0, game.config.height-borderUISize-borderPadding)).setOrigin(-0.5,1);
      this.bossGroup.add(this.boss1);
      this.bossGroup.add(this.boss2);
     
     }

 update(){ 
   //Temporary game over scene transition
  if(this.p1Ammo <=0){
    this.scene.start("menuScene");
  }
  //Collision Detection
  this.physics.overlap(this.bossGroup, this.bullet, this.hitEnemy, null, this)

 
}


 //Collision Callback Function
hitEnemy(sprite, bullet) {
  console.log('hit');
  sprite.hit();
  bullet.destroy();
  this.collide = this.sound.add('monsterHit', {
    mute: false,
    volume: 1,
    rate: 1,
    loop: false 
   });
  this.collide.play();
  }

  /*TO BE ADDED
replenishAmmo(sprite, bullet) {
  if(sprite.isDead (true))
  {
    this.p1Ammo += 15
    this.ammoText.text = `Ammo: ${this.p1Ammo} `;
  }
}*/
    
    
}

 



