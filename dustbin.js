class Dustbin {
    constructor(x, y) {
    
      var options={
        isStatic: true
      }

      this.x = x;
      this.y = y;
      this.DustbinWidth=200;
      this.DustbinHeight=200;
      this.thickness=20;
//      this.image=loadImage("dustbingreen.png")
      this.leftWall = Bodies.rectangle(this.x-this.DustbinWidth/2, this.y, this.thickness,this.DustbinHeight,options );
      this.rightWall = Bodies.rectangle(this.x+this.DustbinWidth/2, this.y, this.thickness,this.DustbinHeight,options);
      this.bottomWall = Bodies.rectangle(this.x, this.y+95, this.DustbinWidth,this.thickness,options);
      
      
      World.add(world, this.leftWall);
      World.add(world, this.rightWall);
      World.add(world, this.bottomWall);
    }
    display(){
      var posLeft =this.leftWall.position;
      var posRight =this.rightWall.position;
      var posBottom =this.bottomWall.position;
    
      push();
      translate(posLeft.x, posLeft.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      stroke("yellow")
      fill("red");
      rect(0,0,this.thickness,this.DustbinHeight)
     
      pop();

      push();
      translate(posRight.x, posRight.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      stroke("yellow")
      fill("red");
      rect(0,0,this.thickness,this.DustbinHeight)

      pop();

      push();
      translate(posBottom.x, posBottom.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      stroke("yellow")
      fill("red");
      rect(0,0,this.DustbinWidth,this.thickness)
      pop();
     // image(this.image,this.x-this.DustbinWidth/2,this.y-90,this.DustbinWidth,this.DustbinHeight)
    }
  };
  