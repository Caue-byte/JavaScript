//Definindo variavel para ficar fora do escopo
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
//Peguei o tamanho da tela 

    console.log(largura, altura )
}
ajustaTamanhoPalcoJogo()
    function posicaoRandomica(){
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
mosquito.className = tamanhoAleatorio()
//Dando a posição randomica para sua posição atual
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
//adicionando o mosquito no body html
document.body.appendChild(mosquito)

tamanhoAleatorio()
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