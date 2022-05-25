import cipher from './cipher.js';

// console.log(cipher); 

let btnCifrador = document.getElementById('btnCifrador');
btnCifrador.addEventListener('click',pantallaCifrador);

let btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click',pantallaInfo);

let btnCifrador2 = document.getElementById('btnCifrador2');
btnCifrador2.addEventListener('click',pantallaCifrador);

function pantallaCifrador(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('informacion').style.display = 'none';
    document.getElementById('cifrador').style.display = 'block';
    document.getElementById("body").style.backgroundImage = 'url(img/juliocesar007.png)';
  }

function pantallaInfo(){
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('cifrador').style.display = 'none';
  document.getElementById('informacion').style.display = 'block';
  document.getElementById("body").style.backgroundImage = 'none';
}

let btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click',btnCifrado);

function btnCifrado(){
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('cifradoDescifrado').value = cipher.encode(string, offset);
    document.getElementById('txtEnviarMensaje').innerHTML = 'Mensaje Cifrado';
  }

  let btnDescifrar = document.getElementById('btnDescifrar');
  btnDescifrar.addEventListener('click',btnDescifrado);

  function btnDescifrado(){
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('cifradoDescifrado').value = cipher.decode(string, offset);
    document.getElementById('txtEnviarMensaje').innerHTML = 'Mensaje Descifrado';

  }
  let btnLimpiar = document.getElementById('btnLimpiar');
  btnLimpiar.addEventListener('click',limpiar);
  
  function limpiar(){
    document.getElementById('cifradoDescifrado').value = "";
    document.getElementById('mensaje').value = "";
    document.getElementById('offset').value = "";
    document.getElementById('txtEnviarMensaje').innerHTML = 'Mensaje';

  }
