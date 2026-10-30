class Checking{
    constructor(board){
        this.r=10
        this.board = board;
    }
    /*
    validColumn(){
        if(Board[tal af ceci][1]==1){
            return
        } 
    }
 */
    validSquare(square, player){
        /*
        for (let i = 7; i > 1 ; i--){
            for (let j = 6; j > 1; j--) {
                if(Board[j][i]==0){
                    Board[j][i]+=1
                }
            }
        }
            */

        for (let i = 5; i >= 0; i--){
            if (this.board[i][square] == 0) {
                Board[i][square] = player;
                player = player == 1? 1:2;
            }
        }
        
    }

    placeSquare(square, board, player){
        this.player = player;
        this.currentBoard = board;
        this.place = [square, this.validSquare(this.player)];


        
        for (let i = 0; i < 7 ; i++){
            for (let j = 0; j <= 5; j++) {
                if (this.currentBoard == 0) continue;

                if(this.currentBoard[j][i]==1){
                    push();
                    fill(200, 0, 0);
                    circle(i,j,this.r)
                    pop();
                } else {
                    push();
                    fill(0, 0, 200);
                    circle(i,j,this.r)
                    pop();
                }
            }
        }
    
        
    }
}