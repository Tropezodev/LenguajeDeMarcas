function validar(){
    //Validación Nombre: vacío
    if (document.examenFormulario.usuario.value.length==0){
        alert("Debe escribir su nombre")
        document.examenFormulario.usuario.focus()
        return 0;
    }
    //Validación Nombre: <15 carácteres
    if (document.examenFormulario.usuario.value.length>=15){
        alert("El nombre debe ser tener menos de 15 carácteres")
        document.examenFormulario.usuario.focus()
        return 0;
    }
    //Validación de Contraseña: >=6 carácteres
    if (document.examenFormulario.contrasena.value.length<6){
        alert("La Contraseña debe ser tener al menos 6 carácteres")
        document.examenFormulario.contrasena.focus()
        return 0;
    }
    //Validación de Código Postal: número y 5 dígitos
    var codigoPostal = document.examenFormulario.codigoPostal.value
    codigoPostal = validarEntero(codigoPostal)
    document.examenFormulario.codigoPostal.value=codigoPostal

    if (codigoPostal.length != 5){
        alert("El Código Postal debe tener 5 dígitos numéricos.")
        document.examenFormulario.codigoPostal.focus()
        return 0;
    }
}

function validarEntero(valor){
    //se comprueba si es un valor numérico
    if (isNaN(valor)) {
          //no es numero y se devuelve cadena vacia // isNaN=Booleano. Is Not a Number. Si no es un número devuelve True.
          return "";
    }else{
          //si es un número devuelve el valor
          return valor;  }
}