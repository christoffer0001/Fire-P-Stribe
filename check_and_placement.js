class Checking{
    constructor(){
        let r=10

    }
    
    validColumn(){
        if(Board[tal af ceci][1]==1){
            return
            


        }
            
        
    }


    validSquare(){
        for (let i = 7; i > 1 ; i--){
            for (let j = 6; j > 1; j--) {
                if(Board[j][i]==0){
                    Board[j][i]+=1
            


                }
            }
        }
        
    }
    placeSquare(){
        for (let i = 7; i > 1 ; i--){
            for (let j = 6; j > 1; j--) {
                if(Board[j][i]==1){
                    circle(i,j,r)
            


                }
            }
        }
    }
}