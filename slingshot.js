class SlingShot{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = b
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
        this.pointB=b
    }

      display(){
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.SlingShot.pointB;
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
    }