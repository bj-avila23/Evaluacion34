class Rope {
  constructor(bodyA, pointB) {
   var opstions = {
  bodyA : bodyA,
  pointB : pointB,
  stiffness : 1.0,
  lenght : 250

  
   }
   
   this.pointB = pointB;
   this.rope = Constraint.create(opstions);
   World.add(world,this.rope);

  }
  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
  }

  display() {
    if (this.rope.bodyA){
      var pointA = this.rope.bodyA;
      var pointB = this.pointB;
      push();
      stroke(48,22,8);
      strokeWeight(4);
      line(pointB.x,pointB.y,pointA.x,pointA.Y);
      pop();
    }

  }
}
