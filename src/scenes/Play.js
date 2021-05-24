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

       //Initialize ammoCount
       this.ammoCount = 50;
       
        //Play bgm
        this.bgm = this.sound.add('bgm', {
          mute: false,
          volume: 1.5,
          rate: 1.5,
          loop: true 
      });
      this.bgm.play();
      
      
     //Add group of enemies
       this.bossGroup = this.add.group({
         runChildUpdate:true
       })

       /*ANIMATIONS To be Added
       this.anims.create({
        key: "bossAnim",
        frames: this.anims.generateFrameNumbers
       })*/

      // this.boss1 =new Enemy(this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(0.5,1);
      // this.boss2 = new Enemy(this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(-0.5,1);
        
   //create player
   this.p1 = new Player (this, game.config.width/2, game.config.height-borderUISize-borderPadding).setOrigin(0.5,0.5); //add player 1
   this.add.rectangle(0,borderUISize + borderPadding, game.config.width/4, borderUISize * 2, 0xFEEEBC).setOrigin(0,0.7); 
   this.healthText = this.add.text(16,16, 'Health: $ ', { fontSize: '16px', fill: '#000' });
   this.add.rectangle(0,borderUISize + borderPadding, game.config.width/4, borderUISize * 2, 0xFEEEBC).setOrigin(-4,0.7);  
   this.ammoText = this.add.text(16,32,`Ammo: ${this.ammoCount}`, { fontSize: '16px', fill: '#000' });

    //Player movement with mouse 
    this.p1Controls();
    
    //create particles
    this.particleManager = this.add.particles('orange');
    this.defeatExplosion = this.add.particles('explode');

    this.time.delayedCall(5000, () => {
      this.loopCall();  
    }) 
      
  }

    p1Controls() {
     
      this.input.on('pointermove', (pointer) =>{ 
      this.p1.x = pointer.x;
      this.p1.y = pointer.y;
      })

      //Fire projectile on click
     this.input.on('pointerdown', (pointer) =>{ 
     
     this.bullet = new projectile (this, this.p1.x, this.p1.y+350, 'projectile');

     this.bullet.body.velocity.y = -300;  //Makes projectile visible   
    
     this.ammoCount -= 1
     this.ammoText.text = `Ammo: ${this.ammoCount}`;
     
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

      this.boss1 = new Enemy(this, Phaser.Math.Between(game.config.width, game.config.width/2), Phaser.Math.Between(0,  game.config.height)).setOrigin(0.5,1);
      this.bossGroup.add(this.boss1);
   
     
     }

//Have enemies spawn repeatedly every ten seconds     
loopCall() {

  this.time.delayedCall(10000, () => {
    this.loopCall();  
  })
this.spawnBoss();


}

 update(){ 
 
 
  if(this.ammoCount <=0){
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

  //Create particles

  this.particleManager.createEmitter({
    x: this.bullet.x,
    y: this.bullet.y,
    tint: { start: 0xFF7200 , end: 0xFF5000},
    scale: { start: 0.50, end: 0.50 },
    speed: 150,
    lifespan: 1000,
    maxParticles: 20,
    blendMode: 'ADD'
  });
  this.replenishAmmo(sprite);
}

//Replenish the player's ammo upon defeating a boss
replenishAmmo(sprite) {
   if(sprite.isDead())
   {
    this.ammoCount += 10
    this.ammoText.text = `Ammo: ${this.ammoCount}`;

    this.defeatExplosion.createEmitter({
      x: this.boss1.x,
      y: this.boss1.y,
      tint: { start: 0xFF7200 , end: 0xFF5000},
      scale: { start: 0.75, end: 0.50 },
      speed: 150,
      lifespan: 2000,
      maxParticles: 20,
      blendMode: 'ADD'
    });
    
   }
 }
    
    
}

 



