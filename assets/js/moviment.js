
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

// const l0 = document.querySelector('.rowContainer0')
// l0.addEventListener('click', addPiece)






let board1 = [
    [0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,]
]


let player = 1
let click = true

function addPiece(evt){
    let column = evt.target
    let id = evt.target.id
    


    if (click){
        click = false
        player = 2
    }else{
        click = true
        player = 1
    }

    for(let i = board1.length-1; i>=0; i--){
        if(board1[i][id]===0){
            board1[i][id] = player
            break
        }
    }
console.log(board1)



        // if(click ){
        //     let piece = creatorOne()
        //     //for(let i = board1.lengh-1; i>=0; i--){}
            
        //     column.appendChild(piece)
        //     click = false
            
        // }else if(click === false && evt.srcElement.childNodes.length === 0){
        //     let piece = creatorTwo()
        //     column.appendChild(piece)
        //     click = true
        // }

}
