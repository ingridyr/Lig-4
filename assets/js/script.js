//criar as peças pelo DOM
//denominação das peças:
//letra 'A' para jogador1
//letra 'B' para jogador2
//criar o listener
/* -------------------------------------------- */

//aqui cria a div pai das peças
const body = document.querySelector('body')
const pieces = document.createElement('div')
pieces.classList.add("pieces")

body.appendChild(pieces)

/* ---------------------------------------------- */

//aqui cria as funções para a construção das peças
function creatorOne(){
    const playerOne = document.createElement('div')
    playerOne.classList.add("playerOne")

    pieces.appendChild(playerOne)
}
creatorOne()//teste

function creatorTwo(){
    const playerTwo = document.createElement('div')
    playerTwo.classList.add("playerTwo")

    pieces.appendChild(playerTwo)
}
creatorTwo()//teste
/* ------------------------------------------------- */

//aqui adiciona o listener à div ref à coluna
document.addEventListener("click", function(){
    //fazer um "toggle" on/off para alternar entre os players 1 e 2
    //selecionar a coluna clicada e chamar a função creator de acordo com o status
    //do toggle
})