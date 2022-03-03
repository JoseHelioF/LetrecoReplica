let letra = document.getElementsByClassName("input")
let pos = 0

function adicionarbordalinha(linha) {
    for (var i = 0; i < linha + 5 ; i++) {
    letra[i].classList.add("border-edit")
    console.log(i);
    }
    
}

window.addEventListener("load",adicionarbordalinha(0))


function pegaTecla() {
    var tecla = event.keyCode;
    return String.fromCharCode(tecla);
}

function atribue() {
    letra[pos].innerHTML = pegaTecla()
    pos ++;
}

document.addEventListener('keydown', atribue);

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(alfabeto);