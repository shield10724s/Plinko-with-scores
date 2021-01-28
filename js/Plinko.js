class Plinko{
    constructor(x,y){
        var options={
            isStatic : true
        }
        this.x=x;
        this.y=y;
        this.r=20;
        this.body = Bodies.circle(this.x, this. y,this.r/2 ,options);
        World.add(world, this.body);
    }

    display(){
        var plinko_pos = this.body.position;
        push();
        translate(plinko_pos.x, plinko_pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill('white');
        ellipse(0,0,this.r,this.r);
        pop();
    }
}