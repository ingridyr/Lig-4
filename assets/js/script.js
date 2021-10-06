const mainContainer = document.getElementById('mainContainer');

const board = [
    'w,w,w,w,w,w,w',
    'w,w,w,w,w,w,w',
    'w,w,w,w,w,w,w',
    'w,w,w,w,w,w,w',
    'w,w,w,w,w,w,w',
    'w,w,w,w,w,w,w'
];

//Função para criação de células

function createDiv(row,classList){
    const cell = document.createElement('div');
    cell.classList.add(classList);
    row.appendChild(cell);
}

//Função para criação de linhas como filhas de mainContainer

function createBoard(){
    for(let i = 0; i < board.length; i++){
        const row = document.createElement('div');
        row.className = 'rowContainer';
        mainContainer.appendChild(row);

        for(let j = 0; j < board[i].length; j++){
            let letter = board[i][j];
            if(letter === 'w'){
                createDiv(row,'space')
            }
        }
    }
}
createBoard()


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

    //pieces.appendChild(playerOne)
    return playerOne
}
creatorOne()//teste

function creatorTwo(){
    const playerTwo = document.createElement('div')
    playerTwo.classList.add("playerTwo")

    //pieces.appendChild(playerTwo)
    return playerTwo
}
creatorTwo()//teste
/* ------------------------------------------------- */

//aqui adiciona o listener à div ref à coluna
document.addEventListener("click", function(){
    //fazer um "toggle" on/off para alternar entre os players 1 e 2
    //selecionar a coluna clicada e chamar a função creator de acordo com o status
    //do toggle
})



