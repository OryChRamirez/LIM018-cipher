const cipher = {

  encode : function(msjIngresado, desplazamiento){
    let msjCifrado = "";
    let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    desplazamiento = (desplazamiento % 27 + 27) % 27;

    console.log('mensaje ingresado',msjIngresado);
    console.log('desplazamiento',desplazamiento);
try{
 if(desplazamiento != 0 && msjIngresado != " " && desplazamiento != "" && msjIngresado != ""){ 
   console.log('dentro del IF'); 
    if(msjIngresado){
      for(let i=0; i<msjIngresado.length; i++){
        if(alfabeto.indexOf(msjIngresado[i])!=-1){
          let posicion = ((alfabeto.indexOf(msjIngresado[i])+desplazamiento+1)%27);
          msjCifrado += alfabeto[posicion];
        }
        else 
        msjCifrado += msjIngresado[i];
      }
    }
    return msjCifrado;
  }else{
    throw new TypeError('Error');
  }}
  catch(e){
    return e;
  }
  },

  decode : function(msjIngresado, desplazamiento){
    let msjCifrado = "";
    let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    desplazamiento = (desplazamiento % 27 - 27) % 27;
  
    if(msjIngresado){
  
      for(let i=0; i<msjIngresado.length; i++){
        if(alfabeto.indexOf(msjIngresado[i])!=-1){
          let posicion = ((alfabeto.indexOf(msjIngresado[i])-desplazamiento-1)%27);
          msjCifrado += alfabeto[posicion];
        }
        else 
        msjCifrado += msjIngresado[i];
      }
    }
    return msjCifrado;
  }
}
export default cipher;
