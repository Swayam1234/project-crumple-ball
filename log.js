class Log {
  constructor(x, y,width,height, angle){
    var options = {
      friction :1,
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width =width;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle
    stroke("Green");
    strokeWeight(4);
    fill ("red")
    push ();
    translate(this.body.position.x,this.body.position.y)
    rect(0,0, this.width, this.height);
    pop ()
   
  }
}