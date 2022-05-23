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

let mayusculas = document.getElementById('mensaje');
mayusculas.addEventListener('keyup', function(){
  this.value = this.value.toUpperCase();
})

let btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click',btnCifrado);

function btnCifrado(){
    let msjIngresado = document.getElementById('mensaje').value;
    let desplazamiento = document.getElementById('desplazamiento').value;
    document.getElementById('cifradoDescifrado').value = cipher.encode(msjIngresado, desplazamiento);
  }

  let btnDescifrar = document.getElementById('btnDescifrar');
  btnDescifrar.addEventListener('click',btnDescifrado);

  function btnDescifrado(){
    let msjIngresado = document.getElementById('mensaje').value;
    let desplazamiento = document.getElementById('desplazamiento').value;
    document.getElementById('cifradoDescifrado').value = cipher.decode(msjIngresado, desplazamiento);
  }