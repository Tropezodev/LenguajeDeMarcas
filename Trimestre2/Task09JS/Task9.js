function inicializar(){
    document.getElementById('crear-ventana').onclick = crearNueva
    document.getElementById('cerrar-ventana').onclick = cerrarNueva
}
var ventana
function crearNueva(){
    ventana = window.open('https://www.cesur.com');
}
function cerrarNueva(){
    ventana.close()
}