class Ground {
    constructor(x,y,width,height) {
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("white");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
  };
