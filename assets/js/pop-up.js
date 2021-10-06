
function popUpOne(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpPlayer1"
    const paragraph = document.createElement("p")

    div.appendChild(paragraph)
    body.appendChild(div)
}
popUpOne()


function popUpTwo(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpPlayer2"

    const paragraph = document.createElement("p")

    body.appendChild(div)
    div.appendChild(paragraph)
}
popUpTwo()

function popUpDraw(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpDraw"

    const paragraph = document.createElement("p")

    body.appendChild(div)
    div.appendChild(paragraph)
}
popUpDraw()


//substituir o alert
//tem que ter um para o B, um para o R e um para empate
//if adiciona uma classe
