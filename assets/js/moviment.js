
//------------------------------------------------------
//Inicio da alteração entre os jogadores e adiciona peça

//Coloca o add em cada célula

const rows = document.querySelector('#mainContainer');
rows.childNodes.forEach(row => {
    row.addEventListener('click', addPiece)
});



let player = 1
let click = true

function addPiece(evt) {
    let column = evt.target
    let id = evt.target.id

    console.log(id)

    if (click) {
        click = false
        player = 1
    } else {
        click = true
        player = 2
    }

    for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][id] === 0) {
            board[i][id] = player
            break
        }
    }
    console.log(board)


/* let a=document.getElementsByClassName('rowContainer')[1]
console.log(a.childNodes) */

for(let i=board.length-1;i>=0;i--){
   
}

    if (click) {
        let piece = creatorOne()
        //for(let i = board1.lengh-1; i>=0; i--){}

        column.appendChild(piece)
        click = false

    } else if (click === false && evt.srcElement.childNodes.length === 0) {
        let piece = creatorTwo()
        column.appendChild(piece)
        click = true
    }

}
