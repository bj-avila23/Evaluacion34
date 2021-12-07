class Box {
  constructor(x, y, width, height) {
   var opstions ={
     'friction': 0.8,
     'density' : 1.4,
     'restitution' : 0.8
   
   }
   this.body = Bodies.rectangle(x,y, width,height,opstions);
   this.width = width
   this.height = height
   World.add(world,this.body);
  
   }
  
  display(){
    var position = this.body.position
     var angle = this.body.angle;
     push ();
     translate(position.x,position.y);
     rotate(angle);
      rectMode (CENTER);
      strokeWeight(4)
      stroke("blue");
      fill("purple");
      rect(0,0,this.width,this.height);
      pop();
  }
}