const cipher = {
  encode : function(offset,string){
      let codeLetras ="";
      let codificador="";
      offset = parseInt(offset);
    if(string !="" && offset !="" && string !=" " && offset != 0 ){
      for(let i=0;i<string.length;i++){
          codificador = string.charCodeAt(i);
          if(codificador >= 65 && codificador <= 90){
          codificador = (string.charCodeAt(i) -65 + offset)%26 + 65;
            if(codificador < 65){
              codificador = (string.charCodeAt(i) - 65 + offset)%26 + 65 + 26;
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }else{
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }
        }else if(codificador >=97 && codificador <=122){
          codificador = (string.charCodeAt(i) -97 + offset)%26 + 97;
            if(codificador < 97){
              codificador = (string.charCodeAt(i) - 97 + offset)%26 + 97 + 26;
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }else{
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }
        }else{
          codeLetras = codeLetras + String.fromCharCode(codificador);
        }
      }
  return codeLetras;
    }else{
      throw new TypeError();
    }
  },

  decode : function(offset,string){
    let codeLetras ="";
      let codificador="";
      offset = parseInt(offset);
      if(string !="" && offset !="" && string !=" " && offset != 0 ){
      for(let i=0;i<string.length;i++){
          codificador = string.charCodeAt(i);
          if(codificador >= 65 && codificador <= 90){
          codificador = (string.charCodeAt(i) -65 - offset)%26 + 65;
            if(codificador < 65){
              codificador = (string.charCodeAt(i) - 65 - offset)%26 + 65 + 26;
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }else{
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }
        }else if(codificador >=97 && codificador <=122){
          codificador = (string.charCodeAt(i) -97 - offset)%26 + 97;
            if(codificador < 97){
              codificador = (string.charCodeAt(i) - 97 - offset)%26 + 97 + 26;
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }else{
              codeLetras = codeLetras + String.fromCharCode(codificador);
            }
        }else{
          codeLetras = codeLetras + String.fromCharCode(codificador);
        }
      }
  return codeLetras;
    }else{
      throw new TypeError();
}

  }}

export default cipher;