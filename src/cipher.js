const cipher = {
  encode : function(string, offset){
      let codeMayus ="";
      let codeMinus ="";
      let codificador="";
      let codificador2="";

      offset = parseInt(offset);
    if(string === string.toUpperCase()){
      for(let i=0;i<=string.length;i++){
        codificador = (string.charCodeAt(i) - 65 + offset)%26 + 65;
        if(codificador < 65){
       codificador =(string.charCodeAt(i) - 65 + offset)%26 + 65 + 26;
        codeMayus = codeMayus + String.fromCharCode(codificador);
        }else{
        codeMayus = codeMayus + String.fromCharCode(codificador);
    }}
    return codeMayus;
  }else if(string === string.toLowerCase()){
    for(let i=0;i<=string.length;i++){
      codificador2 = (string.charCodeAt(i) - 97 + offset)%26 + 97;
      if(codificador2 < 65){
      codificador2 = (string.charCodeAt(i) - 97 + offset)%26 + 97 +26;
        codeMinus = codeMinus + String.fromCharCode(codificador2);
      }else{
        codeMinus = codeMinus + String.fromCharCode(codificador2);      
    }}
    return codeMinus;
  }},
  decode : function (string,offset){
    let decodeMayus ="";
      // let decodeMinus ="";
      let decodificador="";
      // let decodificador2="";
      offset = parseInt(offset);
      if(string === string.toUpperCase()){
        for(let i=0;i<=string.length;i++){
          decodificador = (string.charCodeAt(i) - 65 - offset)%26 + 65;
          if(decodificador < 65){
            decodificador =(string.charCodeAt(i) - 65 - offset)%26 + 26 + 65;
            decodeMayus = decodeMayus + String.fromCharCode(decodificador);
                    }else{
          decodeMayus = decodeMayus + String.fromCharCode(decodificador);
      }}
      return decodeMayus;
    }      
  }

  }
export default cipher;