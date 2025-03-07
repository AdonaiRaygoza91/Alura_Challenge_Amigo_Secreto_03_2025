let nombreAmigo = [];
let amigoSorteado = [];
console.log(amigoSorteado)

function agregarAmigo() {
    let amigoDeUsuario = document.getElementById('amigo').value; 
    console.log(amigoDeUsuario);
    if (amigoDeUsuario === ''){
        alert('Para iniciar escriba minimo un nombre.');
        }else if (nombreAmigo.includes(amigoDeUsuario)){
            alert('Este nombre ya se encuentra registrado, por favor indica otro nombre');
        }else{
            nombreAmigo.push(amigoDeUsuario);
    }
    limpiarCaja();
    amigosAgregados();
    return;
}

function sortearAmigo(){
    if(nombreAmigo.length === 0){
        alert('No hay nombres de amigos para sortear, ingresa los nombres de tus amigos');
     } else {
        let amigoSecreto = nombreAmigo[Math.floor(Math.random()*nombreAmigo.length)];
        if(amigoSorteado.includes(amigoSecreto)){
            sortearAmigo()
        }else{
            amigoSorteado.push(amigoSecreto)           
            let eliminarDeListaNombreAmigos = nombreAmigo.indexOf(amigoSecreto);
            if (eliminarDeListaNombreAmigos !== -1){
                nombreAmigo.splice(eliminarDeListaNombreAmigos, 1);
            }
            document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
        }
    }    
    if (amigoSorteado.length === nombreAmigo.length + 1){
        alert('Todos los amigos de la lista han sido sorteados')
    }          
    amigosAgregados(); 
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function amigosAgregados() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < nombreAmigo.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombreAmigo[i];
        listaAmigos.appendChild(li);
    }
    return;
}  