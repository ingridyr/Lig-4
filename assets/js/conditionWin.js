let teste = [
    "WWWWWWW",
    "WWWWWWW",
    "WWWBWWW",
    "WWBWWWW",
    "WBWWWWW",
    "BWWWWWW"
];

function victory(array) {

    const modColumns = array[1].length - 3;
    const modLines = array.length - 3;

    //vitoria horizontal

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < modColumns; j++) {

            if (array[i][j] == "B") {

                if (array[i][j] == array[i][j + 1] && array[i][j] == array[i][j + 2] && array[i][j] == array[i][j + 3]) {
                    console.log("vitoria horizontal do preto")
                }
            }
            if (array[i][j] == "R") {

                if (array[i][j] == array[i][j + 1] && array[i][j] == array[i][j + 2] && array[i][j] == array[i][j + 3]) {
                    console.log("vitoria horizontal do vermelho")
                }
            }
        }

    }

    //vitoria vertical

    for (let i = 0; i < modLines; i++) {

        for (let j = 0; j < array[1].length; j++) {

            if (array[i][j] == "B") {

                if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                    alert("vitoria vertical do preto")
                }
            }
            if (array[i][j] == "R") {

                if (array[i][j] == array[i + 1][j] && array[i][j] == array[i + 2][j] && array[i][j] == array[i + 3][j]) {
                    alert("vitoria vertical do vermelho")
                }
            }
        }
    }

    //vitoria diagonal 


    for (let i = 0; i < modLines; i++) {

        for (let j = 0; j < modColumns; j++) {

            if (array[i][j] == "B") {

                if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                    alert("vitoria diagonal direita do preto")
                }
            }
            if (array[i][j] == "R") {
                if (array[i][j] == array[i + 1][j + 1] && array[i][j] == array[i + 2][j + 2] && array[i][j] == array[i + 3][j + 3]) {
                    alert("vitoria diagonal direita do vermelho")
                }
            }
        }
    }
    //diagional esquerda
    for (let i = 0; i < array.length - 3; i++) {

        for (let j = 0; j < array[1].length; j++) {

            if (array[i][j] == "B") {

                if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                    alert("vitoria diagonal esquerda preto")
                }
            }
            if (array[i][j] == "R") {
                if (array[i][j] == array[i + 1][j - 1] && array[i][j] == array[i + 2][j - 2] && array[i][j] == array[i + 3][j - 3]) {
                    alert("vitoria diagonal esquerda vermelho")
                }
            }
        }
    }

}
