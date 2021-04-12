class Bob{
    constructor(x,y,r){
        var options = {
            isstatic:false,
            restitution:1.0,
            friction:0.0,
            density:0.8

        }
        this.x = x;
        this.y = y;
        this.r = r;
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
    display(){
        var bp = this.body.position;
        push()
        translate(bp.x,bp.y);
        //Mode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}