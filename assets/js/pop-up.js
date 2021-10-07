
function popUpOne() {
    const body    = document.querySelector("body")
    const div     = document.createElement("div")
    div.className = "popUpPlayer1"

    const button2     = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph     = document.createElement("p")
    paragraph.innerText = "Parabéns Rick, você venceu!"

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    const audio    = document.createElement("audio")
    audio.autoplay = "autoplay"
    audio.loop     = "true"
    const source = document.createElement("source")
    source.src   = "./assets/music/rick-and-morty-theme-song.mp3"
    source.type  = "audio/mp3"

    const img = document.createElement("img")
    img.src   = "./assets/img/player2.png"

    audio.appendChild(source)
    div.appendChild(audio)
    div.appendChild(button2)
    div.appendChild(img)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
        audio.pause()
    })

    button.addEventListener('click', reset = () => {
        location.reload()
    });
}


function popUpTwo() {
    const body    = document.querySelector("body")
    const div     = document.createElement("div")
    div.className = "popUpPlayer2"

    const button2     = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph     = document.createElement("p")
    paragraph.innerText = "Parabéns Morty, você venceu!"

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    const audio    = document.createElement("audio")
    audio.autoplay = "autoplay"
    audio.loop     = "true"
    const source = document.createElement("source")
    source.src   = "./assets/music/rick-and-morty-theme-song.mp3"
    source.type  = "audio/mp3"

    const img = document.createElement("img")
    img.src   = "./assets/img/player1.png"

    audio.appendChild(source)
    div.appendChild(audio)
    div.appendChild(button2)
    div.appendChild(img)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
        audio.pause()
    })

    button.addEventListener('click', reset = () => {
        location.reload()
    });
}


function popUpDraw() {
    const body    = document.querySelector("body")
    const div     = document.createElement("div")
    div.className = "popUpDraw"

    const button2     = document.createElement("button")
    button2.className = "closetButton"
    button2.innerText = "X"

    const paragraph     = document.createElement("p")
    paragraph.innerText = "\"Wubba lubba dub dub!\" Deu empate!"

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    const audio    = document.createElement("audio")
    audio.autoplay = "autoplay"
    audio.loop     = "true"
    const source = document.createElement("source")
    source.src   = "./assets/music/rick-and-morty-theme-song.mp3"
    source.type  = "audio/mp3"

    const img = document.createElement("img")
    img.src   = "./assets/img/empate.png"

    
    audio.appendChild(source)
    div.appendChild(audio)
    div.appendChild(button2)
    div.appendChild(img)
    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)

    button2.addEventListener("click",function(){
        div.className = "display"
        audio.pause()
    })

    button.addEventListener('click', reset = () => {
        location.reload()
    });
}



//substituir o alert
//tem que ter um para o B, um para o R e um para empate
//if adiciona uma classe
