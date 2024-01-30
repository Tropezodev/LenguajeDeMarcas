var parrafos
function inicializarEventos(){
    parrafos = document.querySelectorAll('ul li')
    parrafos[0].addEventListener('click', click)
}
function click(){
    parrafos[0].style.color = 'green'
    parrafos[0].style.fontWeight = 'bold'
}