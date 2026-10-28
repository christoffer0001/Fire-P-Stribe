class UI{
    constructor(width, height){
    this.c=0;
    this.s=100;
    this.xstart=280;
    this.ystart=90;

    }
    drawBoard(){

  
    for(let i=0; i<7 ; i++){
    for(let j=0; j<6 ; j++){
    rect(this.xstart+this.s*i,this.ystart+this.s*j,this.s,this.s);
        }
    }

function mousePressed(){


    for (let i=0; i<7; i++){
        if (mouseX>i*this.s+this.xstart && mouseX<this.xstart+this.s+this.s*i){
            this.c+=i;
            console.log(this.c); 

    }
        
            
    }
}
  }
}