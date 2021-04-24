class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 1
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }
    
    display() {
        
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        
    }
}