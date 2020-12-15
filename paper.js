class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.0
      }
      this.radius = 10;   
      this.body = Bodies.circle(x, y, 10, options);
       

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      strokeWeight(3)
      stroke("yellow")
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  