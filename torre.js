class Torre{
    constructor(x,y){
        var parado = {isStatic:true};
        this.body = Bodies.rectangle(x,y,160,360,parado);
        World.add(world, this.body);
        this.imagem = loadImage("torre.png");
    }
    show(){
        var pos = this.body.position;
        //atualizar as configurações
        push();
        imageMode(CENTER);
        image(this.imagem,pos.x, pos.y,160,360);
        //volta para as configurações antigas
        pop();
    }

}