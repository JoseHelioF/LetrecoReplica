/*dispatchEvent*/
const basePalavras = ['antes','ambos','alvos','ajude','ajuda','ainda','agora','abril','braun','bordo','board','barra','baixa','autor','assim','armas','criar','craft','copia','conta','colin','citar','cinco','chris','drive','ditas','disse','delas','david','dados','crise','criou','estas','estar','estao','epoca','entre','entao','ended','earth','first','final','filme','ficou','feito','fazer','facts','estes','horas','homem','haven','guide','grupo','frase','foram','folha','julio','julho','jones','joint','james','ideia','houve','house','livro','livre','lider','levou','levar','laser','lados','junho','menos','marte','marco','maior','lunar','loves','longo','local','needs','naves','naval','natal','muito','moon»','mesmo','meses','ocean','obama','nunca','novas','notas','noite','neste','nesta','pelos','pecas','peace','passo','parte','pages','orbit','olhei','radio','quase','press','pouso','poole','poder','placa','pisar','santo','salvo','salto','russo','russa','roger','reiss','recem','small','simon','serio','serie','seria','seres','sendo','secao','terra','tendo','subiu','space','sonda','solar','sobre','smith','uniao','total','todos','tinha','times','texto','terre','verne','venus','usava','union'
]
const palavra = basePalavras[Math.round(Math.random() * (basePalavras.length-1))];

console.log(palavra);

function atrCorTitulo() {
  let arr = [];
  var titulo = document.getElementsByTagName('span')
  while (arr.length < 3) {
    var n = Math.round(Math.random() * 6)
    if (arr.indexOf(n) == -1) {
      arr.push(n)
    } else {
      n -= 1;
    }
  }
  titulo[arr[0]].setAttribute('id', 'lettergreem')
  titulo[arr[1]].setAttribute('id', 'letteryellow')
  titulo[arr[2]].setAttribute('id', 'letterred')
}


let letra = elemento('input')
var b = document.getElementsByTagName("svg");
let pos = 0;

function elemento(nomeclasse) {
  return document.getElementsByClassName(nomeclasse);
}

function adicionarbordalinha(linha) {
  for (var i = 0; i < linha + 5; i++) {
    letra[i].classList.add("border-edit");
    if (i - 5 >= 0) {
      letra[i - 5].classList.remove("border-edit");
    }
    // console.log(i);
  }
}

function pegaTecla(event) {
  var tecla = event.keyCode;

  if (tecla > 65 || tecla < 90) {
    // console.log(tecla);

    b[4].classList.add("dark");
    b[4].classList.remove("light");
    var letra = String.fromCharCode(tecla)
    // console.log('Aqui', letra);

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
  // console.log("pos", pos);
  if (pos % 5 == 0) {
    b[5].classList.add("dark");
    b[5].classList.remove("light");
  } else {
    b[5].classList.add("light");
    b[5].classList.remove("dark");

  }

}

window.addEventListener("load", adicionarbordalinha(0));
window.addEventListener("load", atrCorTitulo());

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
      // console.log(l, palavra[i].toUpperCase());
    }

  }
  adicionarbordalinha(pos)
  coloreTeclado();
}

function coloreTeclado(){
  console.log("coloreTeclado");
  let teclado = document.getElementsByClassName('key')
  console.log(teclado.length);
};

var checagem = elemento('check')[1].addEventListener('click', checar)
