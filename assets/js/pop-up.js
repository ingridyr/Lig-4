
function popUpOne() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    div.className = "popUpPlayer1"

    const button2 = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph = document.createElement("p")
    paragraph.innerText = `parabéns,  você venceu!`

    const button = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type = "reset"

    div.appendChild(button2)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
    })
}


function popUpTwo() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    div.className = "popUpPlayer2"

    const button2 = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph = document.createElement("p")
    paragraph.innerText = `parabéns,  você venceu!`

    const button = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type = "reset"

    div.appendChild(button2)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
    })
}


function popUpDraw() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    div.className = "popUpDraw"

    const button2 = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph = document.createElement("p")
    paragraph.innerText = "\"Wubba lubba dub dub!\" Deu empate!"

    const button = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type = "reset"

    div.appendChild(button2)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
    })
}



//substituir o alert
//tem que ter um para o B, um para o R e um para empate
//if adiciona uma classe
