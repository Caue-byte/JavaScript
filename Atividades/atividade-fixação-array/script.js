let objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionar(){

let valor = document.getElementById('campo').value
let existe = objetos.indexOf(valor)



if(valor === ''){
    window.alert('Insira um valor válido')
}
else if(existe != -1){
    window.alert('Objeto já foi adicionado')
}
else{
    objetos.unshift(valor)

    console.log(objetos)
}
document.getElementById('campo').value = ''
    
}

function ordenar(){
    objetos.sort()
    objetos.sort(ordenarObjetos)
    function ordenarObjetos(a, b){
        a - b

    }
    document.write(objetos)

}
