/*dispatchEvent*/

const palavra = "tunel";

let letra = elemento('input')
var b = document.getElementsByTagName("svg");
console.log(letra.length);
let pos = 0;

function elemento(nomeclasse) {
  return document.getElementsByClassName(nomeclasse);
}

function adicionarbordalinha(linha) {
  for (var i = 0; i < linha + 5; i++) {
    letra[i].classList.add("border-edit");
    // console.log(i);
  }
}

function pegaTecla(event) {
  var tecla = event.keyCode;

  if (tecla > 65 || tecla < 90) {
    console.log(tecla);

    b[4].classList.add("dark");
    b[4].classList.remove("light");
    var letra = String.fromCharCode(tecla)
    console.log('Aqui', letra);

    if (alfabeto.indexOf(letra) != -1) {
      return letra;
    }
    pos--;
    return "";
  }
}


function atribue(event) {
  letra[pos].innerHTML = pegaTecla(event);
  pos++;
  console.log("pos", pos);
  if (pos % 5 == 0) {
    b[5].classList.add("dark");
    b[5].classList.remove("light");
  } else {
    b[5].classList.add("light");
    b[5].classList.remove("dark");

  }

}

window.addEventListener("load", adicionarbordalinha(0));

document.addEventListener("keydown", atribue);

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function checar() {


  for (var i = 0; i < 5; i++) {
    var l = letra[pos - 5 + i].innerHTML;


    if (palavra.toUpperCase().indexOf(l) != -1) {
      letra[pos - 5 + i].classList.add("letteryellow");
    } else {
      letra[pos - 5 + i].classList.add("letterred");
    }

    if (l == palavra[i].toUpperCase()) {
      letra[pos - 5 + i].classList.add("lettergreem");
      console.log(l, palavra[i].toUpperCase());
    }
    
  }



  adicionarbordalinha(pos)
}


var checagem = elemento('check')[1].addEventListener('click', checar)

console.log(checagem);