var parrafos
var img


function inicializar(){
    parrafos = document.querySelectorAll("p")
    img = document.getElementById("imagenMuestra")

    document.getElementById('btnFondoVerde').onclick = fondo_verde
    document.getElementById('btnTextoRojo').onclick = texto_rojo
    document.getElementById('btnCambiarImagen').onclick = cambio_img
}

function fondo_verde(){
    parrafos[0].style.backgroundColor = 'green'
    parrafos[1].style.backgroundColor = 'green'

}

function texto_rojo(){
    parrafos[0].style.color = 'red'
    parrafos[1].style.color = 'red'
}

function cambio_img(){
    img.src = 'imagen2.png'
}
