class BaseClass{
    constructor(x, y, width, height,shape,isstatic, angle) {
        var options = {
            'restitution':random(0.2,1),
            'friction':5,
            'density':1.0
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        if(isstatic){
          var options = {
            'restitution':random(0.8,1),
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        }
        if(shape === 'circle'){
          this.body = Bodies.circle(x, y, width, options);
          this.Cir = true;
        }else{
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.Cir = false;
        }
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        //Matter.Body.setAngle(this.body,angle);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        if(this.image){
          image(this.image, 0, 0, this.width, this.height);
        }else if(this.Cir){
          fill(20, 20, 20);
          ellipse(0,0,this.width,this.width);
        }else{
          noStroke();
          stroke(255,0,0);
          rectMode(CENTER);
          fill(50, 50, 50)
          rect(0,0,this.width,this.height*2);
        }
        
        pop();
      }
  }