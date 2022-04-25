function calcular(tipo, valor){

    let visor = document.getElementById('resultado')

if(tipo === 'acao'){

if(valor === 'c'){
//Limpar o visor
    visor.value = ''
}

if(valor === '+' || valor === '-' || valor === 'x' || valor === '/' || valor === '.'){
    visor.value += valor
}

if(valor === '='){

    let valor_campo = eval(visor.value)

    visor.value = valor_campo
    
}

}  
else if(tipo === 'valor'){
    
    visor.value +=  valor
}


}
