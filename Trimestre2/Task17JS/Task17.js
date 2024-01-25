var caja_texto

function inicializar(){
    caja_texto = document.getElementById('caja_texto')
    document.getElementById('Boton').onclick = cambio_color
}

function cambio_color(){
    caja_texto.style.backgroundColor = '#f88067'
}

