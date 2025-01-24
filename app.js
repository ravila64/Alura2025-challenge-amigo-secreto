// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Variables globales
let listaAmigosSorteados=[];


// funcion agregar amigos
function agregarAmigo(){
    // obtener el contenido de la captura en html
    const textoEntrada = document.getElementById('amigo');
    const nombreAmigo = (textoEntrada.value).trim();
    if (nombreAmigo===null || nombreAmigo===''){
        alert("Por favor colocar nombres validos, sin  blancos ");
    }
    console.log("Amigo digitado ", nombreAmigo, "long:",nombreAmigo.length);
    listaAmigosSorteados.push(nombreAmigo);
    // Limpia campo del input
    nombreAmigo.value = "";
}
agregarAmigo();

// actualizar lista de amigos
function listarAmigos(){
    
}