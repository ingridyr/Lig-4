
const rows = document.querySelector('#mainContainer');


let player = 1
let click = true

function chose_Rick(){
    console.log("rick")
    const popUpRick = document.querySelector(".choosePlayer")
    popUpRick.style.display="none"
    click=true
    console.log(click)

}

function chose_Morty(){
    console.log("morty")
    const popUpRick = document.querySelector(".choosePlayer")
    popUpRick.style.display="none"
    click=false
    console.log(click)
}


function addPiece(evt) {
    let column = evt.target
    let id = evt.target.id
    
    console.log(column)

    if (click) {
        click = false
        player = 'player1'
    }else{
        click = true
        player = 'player2'
    }

    let a = null
    for(let i = board.length-1; i>=0; i--){
        if(board[i][id]=== 0){
            board[i][id] = player
            a = i
            break
        }
    }
    console.log(board)

    const rowsInteration = rows.childNodes

    for(let i = 0; i < rowsInteration.length; i++){
        const currentRow = rowsInteration[i].childNodes;

        for(let j = 0; j < currentRow.length; j++){
            const currentBlock = currentRow[j]

            if(i === a && j === Number(id)){
                const div = document.createElement('div');
                div.classList.add(player);
                currentBlock.appendChild(div);
            }
        }
    }

    victory(board)
}


rows.childNodes.forEach(row => {
    row.addEventListener('click', addPiece)
});