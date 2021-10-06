
//------------------------------------------------------
//Inicio da alteração entre os jogadores e adiciona peça

//Coloca o add em cada célula

let  cell= document.querySelectorAll('.space') ; 

cell.forEach(function(c){
c.addEventListener('click', addPiece);
})


let clic = true

function addPiece(evt){

const column = evt.currentTarget
console.log(evt)

if(clic && evt.srcElement.childNodes.length === 0){
    let piece = creatorOne()
    column.appendChild(piece)
    clic = false
}else if(clic === false && evt.srcElement.childNodes.length === 0){
    let piece = creatorTwo()
    column.appendChild(piece)
    clic = true
}

}