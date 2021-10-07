const firstPopup = document.createElement('div');
const text = document.createElement('p');
const btn = document.createElement('button');


firstPopup.className = 'introduction';
text.className = 'text-popup';
btn.className = 'btn-popup';

text.innerText = 'Bem vindo ao Lig-4 by Rich and Morty! Quem ligar 4 peças, na horzontal, vertical ou diagonal, ganha o jogo.'
btn.innerText = 'Escolher jogador'


mainContainer.appendChild(firstPopup);
firstPopup.appendChild(text);
firstPopup.appendChild(btn);

const btnSelected = document.querySelector('.btn-popup');
btnSelected.addEventListener('click', choosePlayer);



function choosePlayer(){
    firstPopup.style.display = 'none';

    const divChoosePlayer = document.createElement('div');
    divChoosePlayer.classList.add("kill")
    const divRick = document.createElement('div');
    const divMorty = document.createElement('div');
    const btn = document.createElement('button');

    mainContainer.appendChild(divChoosePlayer);
    divChoosePlayer.appendChild(divRick);
    divChoosePlayer.appendChild(divMorty);
    divChoosePlayer.appendChild(btn);
    
    divChoosePlayer.className = 'choosePlayer';
    divRick.className = 'divPlayer1';
    divMorty.className = 'divPlayer2';
    btn.className = 'close';
    btn.innerText = 'X';

    const choseRick = document.querySelector('.divPlayer1');
    const choseMorty = document.querySelector('.divPlayer2');
    const btnClose = document.querySelector('.close');

    choseRick.addEventListener('click', chose_Rick)
    choseMorty.addEventListener('click', chose_Morty)
    btnClose.addEventListener('click', () =>{
        divChoosePlayer.style.display = 'none';
    })

}

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
