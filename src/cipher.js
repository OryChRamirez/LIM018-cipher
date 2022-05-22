const cipher = {
  encode : function(msjIngresado, desplazamiento){
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

};

export default cipher;







/* let btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click',btnDescifrado); 

function btnDescifrado(){
  let msjIngresado = document.getElementById('mensaje').value;
  let desplazamiento = document.getElementById('desplazamiento').value;
  document.getElementById('cifradoDescifrado').value = msjIngresado;  //está arrojando el valor del mensaje ingresado (falta agregar la otra función)

} */
