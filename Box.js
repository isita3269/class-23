class Box{
    constructor(){
        var  box_option = {
            restitution:1.0
        }
        this.ishita=Bodies.rectangle(200,100,50,50,box_option);
        World.add(world,this.ishita);
    }
    
    display(){
        // nameSpacing
        var pos = this.ishita.position;
        rectMode(CENTER);
        fill("cyan");
        rect(pos.x,pos.y,this.width,this.height);
    }
}