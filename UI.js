class UI{
    constructor(width, height, check){
    this.c=0;
    this.s=100;
    this.xstart=280;
    this.ystart=90;
    this.check = check;

    }
    drawBoard(){

  
    for(let i=0; i<7 ; i++){
    for(let j=0; j<6 ; j++){
    rect(this.xstart+this.s*i,this.ystart+this.s*j,this.s,this.s);
        }
    }

  }
    pressOnBoard(board, player){  
        this.board = board;
        this.square;      
        for (let i=0; i<7; i++){
            if (mouseX>i*this.s+this.xstart && mouseX<this.xstart+this.s+this.s*i){
                this.square = i;
                this.check.placeSquare(i, this.board, player);




        }
        
            
    }
}


}