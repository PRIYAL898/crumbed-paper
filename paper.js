class Paper{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5,
         }

         this.body=bodies.circle(x,y,4,options);
         this.radius=4;

         World.add(world,this.body);
    }
    diplay(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius);
    }
}