
const rows = document.querySelector('#mainContainer');


let player = 1
let click = true

function chose_Rick(){
    const popUpRick = document.querySelector(".choosePlayer")
    popUpRick.style.display="none"
    click=true
    

}

function chose_Morty(){
    const popUpRick = document.querySelector(".choosePlayer")
    popUpRick.style.display="none"
    click=false
    
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

    const sondRick=document.createElement("audio")
    const audioRick=document.createElement("source")
    const body=document.querySelector("body")
    sondRick.autoplay = "autoplay"
    body.appendChild(sondRick)
    sondRick.appendChild(audioRick)
    audioRick.src="./assets/music/arroto_rick.mp3"
    audioRick.type="audio/mp3"

}


rows.childNodes.forEach(row => {
    row.addEventListener('click', addPiece)
});