// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Variables globales
let listaAmigosSorteados=[];


// funcion agregar amigos
function agregarAmigo(){
    // obtener el contenido de la captura en html
    const textoEntrada = document.getElementById('amigo');
    // si esta vacio o null el nombre a añadir
    let nombreAmigo = (textoEntrada.value).trim();
    console.log("Nombre amigo ", nombreAmigo);
    if (nombreAmigo===null || nombreAmigo==='') {
        alert("Por favor colocar nombres validos sin  blancos ");
        return;
    }
    nombreAmigo = camelCase(nombreAmigo);
    // validar si existe amigo
    if (validaRepetidos(nombreAmigo)){
        alert(`Nombre ${nombreAmigo},  ya existe !!!, Inserte otro nombre`);
        return;
    }
    console.log("Amigo digitado ", nombreAmigo, "long:",nombreAmigo.length);
    listaAmigosSorteados.push(nombreAmigo);
    // Limpia campo del input
    textoEntrada.value = "";
    listarAmigos();
}

agregarAmigo();

// actualizar lista de amigos
function listarAmigos(){
    limpiarLista();
    for (let i = 0; i < listaAmigosSorteados.length; i++) {
        const nombre = listaAmigosSorteados[i]; 
        console.log(nombre);        
        // Crea un nuevo elemento <li>
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre; // Establece el texto del <li>
        // Agrega el <li> a la lista <ul>
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(nuevoAmigo);
    }
}

// limpiar lista UL
function limpiarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpia cualquier contenido existente
}

// desafios extra
// 1. En los nombres que se capturan Colocarlos en “Camel Case”
function camelCase(nombre){
    let name = nombre.toLowerCase();
    let caracter = nombre.charAt(0).toUpperCase();
    let str=name.substring(1,name.length);
    name=caracter.concat(str);
    console.log("Nombre camelCase ",name);
    return name;
}

// 2. Revisar que no estén repetidos los nombres
function validaRepetidos(nombre){
    if (listaAmigosSorteados.includes(nombre)) {
        return true;       
    }
    return false;
}

// funcion para sortear amigos
function sortearAmigo(){
    let numeroAmigos = listaAmigosSorteados.length;
    if (numeroAmigos===0){
        alert("Por favor registrar amigos, la seleccion esta vacia !!!");
        return;
    }
    let alAzar =  Math.trunc(Math.random()*numeroAmigos);
    limpiarSortearAmigos();
    console.log(numeroAmigos, alAzar);
    let seleccionado = listaAmigosSorteados[alAzar];
    console.log("Amigo sorteado ", seleccionado);
    // Crea un nuevo elemento <li>
    const amigoAzar = document.createElement('li');
    amigoAzar.textContent = seleccionado; // Establece el texto del <li>
    resultado.appendChild(amigoAzar);
}

// limpiar sortear amigos
function limpiarSortearAmigos(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}

