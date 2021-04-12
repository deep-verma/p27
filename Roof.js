class Roof{
    constructor(x,y,w,h){
        var options = {
            isStatic:true

        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    }
    display(){
        var gp = this.body.position;
        push()
        translate(gp.x,gp.y);
        rectMode(CENTER);
        fill(120,120,120);
        rect(0,0,this.w,this.h);
        pop()
    }
}