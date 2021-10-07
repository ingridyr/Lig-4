
//------------------------------------------------------
//Inicio da alteração entre os jogadores e adiciona peça

//Coloca o add em cada célula

let  col0= document.querySelectorAll('.space0') ; 

col0.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col1= document.querySelectorAll('.space1') ; 

col1.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col2= document.querySelectorAll('.space2') ; 

col2.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col3= document.querySelectorAll('.space3') ; 

col3.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col4= document.querySelectorAll('.space4') ; 

col4.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col5= document.querySelectorAll('.space5') ; 

col5.forEach(function(c){
c.addEventListener('click', addPiece);
})

let  col6= document.querySelectorAll('.space6') ; 

col6.forEach(function(c){
c.addEventListener('click', addPiece);
})




let clic = true
function addPiece(evt){
    let column = evt.target
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
let a = document.querySelector('.rowContainer1')
a.addEventListener('click', b)

function b(evt){
    console.log(evt)
}
