const mainContainer = document.getElementById('mainContainer');

const board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];

//Função para criação de células

function createDiv(row,classList, id){
    const cell = document.createElement('div');
    
    cell.classList.add(classList);
    cell.id = id;
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
          
            if(letter === 0){
                createDiv(row,'space', j)
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

    return playerOne
}


function creatorTwo(){
    const playerTwo = document.createElement('div')
    playerTwo.classList.add("playerTwo")

    return playerTwo
}



