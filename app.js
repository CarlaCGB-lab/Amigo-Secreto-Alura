// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
//let nombreDeUsuario = document.getElementById('amigo').value.trim();

function agregarAmigo(){
    let nombreDeUsuario = document.getElementById('amigo').value.trim();
    //Verificar Vacios
    if (nombreDeUsuario === ""){
        alert ('Por favor, inserte un nombre.');
        return;
    } 
    
    actualizarLista(nombreDeUsuario);

    document.getElementById('amigo').value ='';
        
    
}

function actualizarLista(nombre){

    for (let i=0; i< amigos.length;i++){
    
        if (nombre === amigos[i]){

            alert (`Ya se ingreso el nombre ${nombre}`);
            return;
        }
    }
        document.getElementById('listaAmigos').innerHTML += `<li> ${nombre} </li>`;
        amigos.push(nombre);
        console.log(amigos);
        
            
}

function sortearAmigo(){
    
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('listaAmigos').innerHTML = '';
    
    if(amigos.length ===0){
       alert ('No ingresaste ningun nombre');
       document.getElementById('reiniciar').setAttribute('disabled',true);
       return; 
    }

    let posicionAleatoria = Math.floor(Math.random()*amigos.length);
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigos[posicionAleatoria]}`;
    console.log(posicionAleatoria)
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function condicionesIniciales(){
    amigos=[];
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('resultado').innerHTML = '';
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Vaciar array amigos
    //Deshabilitar el botón de nuevo juego
    //Eliminar resultado
    condicionesIniciales();
    
      
}

condicionesIniciales();



