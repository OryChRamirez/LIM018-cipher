/* const cipher = {
  // ...
};

export default cipher;
 */


let btnCifrador = document.getElementById('btnCifrador');
btnCifrador.addEventListener('click',pantallaCifrador);

let btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click',pantallaInfo);
function pantallaCifrador(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('informacion').style.display = 'none';
    document.getElementById('cifrador').style.display = 'block';
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
  document.getElementById('cifradoDescifrado').value = cifrado(msjIngresado, desplazamiento);
}

function cifrado(msjIngresado, desplazamiento){
  let msjCifrado = "";
  let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  desplazamiento = (desplazamiento % 26 + 26) % 26;

  if(msjIngresado){

    for(let i=0; i<msjIngresado.length; i++){
      if(alfabeto.indexOf(msjIngresado[i])!=-1){
        let posicion = ((alfabeto.indexOf(msjIngresado[i])+desplazamiento)%26);
        msjCifrado += alfabeto[posicion];
      }
      else 
      msjCifrado += msjIngresado[i];
    }
  }
  return msjCifrado;
}

/* let btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click',btnDescifrado); 

function btnDescifrado(){
  let msjIngresado = document.getElementById('mensaje').value;
  let desplazamiento = document.getElementById('desplazamiento').value;
  document.getElementById('cifradoDescifrado').value = msjIngresado;  //está arrojando el valor del mensaje ingresado (falta agregar la otra función)

} */
