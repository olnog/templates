function Game(){
  this.create = function(){
    this.playerPosition = this.add.text(16, 16, '', { fontSize: '12px', fill: '#FF0000' })
    this.debug = false
    
    this.animations = new Animation()
    for (var i = 0; i < this.animations.count; i++){
      this.anims.create({
        key: this.animations.key[i],
        frames: this.anims.generateFrameNames('art', {frames: this.animations.frames[i]}),
        repeat: this.animations.repeat[i]
      })
    }

    this.player = new Player()
    this.player.gameObject = this.physics.add.sprite(this.player.startingX, this.player.startingY 'art', this.player.spriteLocation)\
    this.player.init()


    for (var i = 0; i < this.mob.count; i++){
      this.mob.gameObject.push(this.physics.add.sprite(this.mob.x[i],
        this.mob.y[i], 'art', this.mob.spriteLocation[this.mob.type[i]]))
      this.mob.init(i)
      this.mob.gameObject[i].anims.play(this.mob.startingAnimation[i], true)
    }

    this.cursors = this.input.keyboard.createCursorKeys()
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player.gameObject);
  }



  this.preload = function(){
    this.load.spritesheet('art', 'art.png', {frameWidth: /* frame width */ , frameHeight: /* frame height */ })
  }



  this.update = function (){
    if (this.debug){
      this.playerPosition.setText(Math.floor(this.player.gameObject.x) + ', ' + Math.floor(this.player.gameObject.y))
    }

    if (!this.gameWon){
      this.player.update()
      this.mob.update()
    }
  }
}
