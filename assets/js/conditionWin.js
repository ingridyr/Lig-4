
function victory(array) {

    const modColumns = array[1].length - 3;
    const modLines = array.length - 3;

    //vitoria horizontal

    function horizontal(){
        let result = false

        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < modColumns; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i][j + 1] && array[i][j] == array[i][j + 2] && array[i][j] == array[i][j + 3]) {
                        popUpTwo()
                        result = true

                    }
                }

                if (array[i][j] == 'player2') {
    
                    if (array[i][j] == array[i][j + 1] && array[i][j] == array[i][j + 2] && array[i][j] == array[i][j + 3]) {
                        popUpOne()
                        result = true

                    }
                }
            }
    
        }
        return result
    }
    horizontal()
    

    //vitoria vertical

    function vertical(){

        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < array[1].length; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                        popUpTwo()
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
    
                    if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                        popUpOne()
                        result = true
                    }
                }
            }
        }
        return result
    }
    vertical()


    //vitoria diagonal 

    function rightDiagonal(){
        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < modColumns; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                        popUpTwo()
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
                    if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                        popUpOne()
                        result = true
                    }
                }
            }
        }
        return result
    }
    rightDiagonal()

    

    //vitoria diagional esquerda

    function leftDiagonal(){
        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < array[1].length; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                        popUpTwo()
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
                    if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                        popUpOne()
                        result = true

                    }
                }
            }
        }
        return result
    }
    leftDiagonal()

    //empate

    if(array[0][0] !== 0 && array[0][1] !== 0 && array[0][2] !== 0 && array[0][3] !== 0 && array[0][4] !== 0 && array[0][5] !== 0 && array[0][6] !== 0 ){
        popUpDraw()
    }
    
    
}
