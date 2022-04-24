function focando(){
    document.getElementById('texto').style.background = 'yellow'

}


function VerificaCaracter(){

let valorCampo = document.getElementById('texto').value    

if(valorCampo.length < 3){

    document.getElementById('texto').style.background = 'red' 

}
else{
    document.getElementById('texto').style.background = 'green' 
}

}