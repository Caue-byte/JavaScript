//Definindo variavel para ficar fora do escopo
let altura = 0
let largura = 0
let vidas = 1
let tempo = 59
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
    tempo = 59
}
else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
    tempo = 30
}
else if(nivel === 'muitoDificil'){
    //750
    criaMosquitoTempo = 750
    tempo = 15
}
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
//Peguei o tamanho da tela 

    console.log(largura, altura )
}
ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){

    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }


}, 1000)


    function posicaoRandomica(){
  
        mosquitoexiste = document.getElementById('mosquito')

  
if(mosquitoexiste){
    mosquitoexiste.remove()

    if(vidas > 3){   
  
        window.location.href = 'fim_de_jogo.html'
}
else{
//Verificando se ja exite um elemento com id = mosquito na tela
document.getElementById('v' + vidas).src ='imagens/coracao_vazio.png'

vidas++
}
}

//Gerando posições aleatorias na tela 
//Usei -90 para que mantenha uma pequena distância das bordas
let posicaoX = Math.floor(Math.random() * largura - 90)
let posicaoY = Math.floor(Math.random() * altura - 90)

//Porem se a posição randomica for 0 (0 - 90 ela some da tela) entao operador ternário (posiçãoTal for menor que 0 receba 0 se nao receba ela mesma)
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


console.log(posicaoX, posicaoY)
//Criando a imagem do mosquito atravez do javascript
let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
//dando a classe para o mosquito
mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
//Dando a posição randomica para sua posição atual
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}
//adicionando o mosquito no body html
document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe){

        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}