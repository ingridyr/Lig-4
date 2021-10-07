
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
                        alert("vitoria horizontal do preto")
                        result = true
                    }
                }

                if (array[i][j] == 'player2') {
    
                    if (array[i][j] == array[i][j + 1] && array[i][j] == array[i][j + 2] && array[i][j] == array[i][j + 3]) {
                        alert("vitoria horizontal do vermelho")
                        result = true
                    }
                }
            }
    
        }
        return result
    }
    console.log(horizontal())
    

    //vitoria vertical

    function vertical(){

        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < array[1].length; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                        alert("vitoria vertical do preto")
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
    
                    if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                        alert("vitoria vertical do vermelho")
                        result = true
                    }
                }
            }
        }
        return result
    }
    console.log(vertical())

    

    //vitoria diagonal 

    function diagonal(){
        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < modColumns; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                        alert("vitoria diagonal direita do preto")
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
                    if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                        alert("vitoria diagonal direita do vermelho")
                        result = true
                    }
                }
            }
        }
        return result
    }
    console.log(diagonal())

    

    //vitoria diagional esquerda

    function leftDiagonal(){
        let result = false

        for (let i = 0; i < modLines; i++) {

            for (let j = 0; j < array[1].length; j++) {
    
                if (array[i][j] == 'player1') {
    
                    if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                        alert("vitoria diagonal esquerda preto")
                        result = true
                    }
                }
                if (array[i][j] == 'player2') {
                    if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                        alert("vitoria diagonal esquerda vermelho")
                        result = true
                    }
                }
            }
        }
        return result
    }
    console.log(leftDiagonal())


    if(array[0][0] !== 0 && array[0][1] !== 0 && array[0][2] !== 0 && array[0][3] !== 0 && array[0][4] !== 0 && array[0][5] !== 0 && array[0][6] !== 0 ){
        alert("empate")
    }
    // if(vertical() === false && horizontal() === false && diagonal() === false && leftDiagonal() === false){
    //     alert("empate")
    // }
    
}
