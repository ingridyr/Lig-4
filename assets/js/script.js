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

//Fim da criação do tabuleiro