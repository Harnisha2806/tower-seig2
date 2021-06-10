class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255 ; 

  }
display(){  
  if(this.body.speed<3){
      super.display();
  }
  else{
      World.remove(world ,this.body);
      push();
      this.Visiblity = this.Visiblity -5 ;
      tint(255 ,this.Visiblity);
      image(this.image ,this.body.position.x,this.body.position.y, 50 ,50);
      pop();
  }
  
}

};

//1 byte = 8 bits ; 00000000 === off bits, when computer is off , black, false  also, 0
// 11111111 ==== on bit , when computer signal is on , white , true , in decimal it 256