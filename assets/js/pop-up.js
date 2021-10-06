
function popUpPlayer1(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpPlayer1"
    const paragraph = document.createElement("p")

    div.appendChild(paragraph)
    body.appendChild(div)
}
popUpPlayer1()


function popUpPlayer2(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpPlayer2"

    const paragraph = document.createElement("p")

    body.appendChild(div)
    div.appendChild(paragraph)
}
popUpPlayer2()

//substituir o alert
//tem que ter um para o B e um para o R
//if adiciona uma classe