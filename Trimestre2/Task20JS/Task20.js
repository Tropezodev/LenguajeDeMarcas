function inicializarEventos(){
    let parrafo = document.getElementsByTagName('p')
    parrafo[0].addEventListener('click', click)
}
function click(){
    alert('Se ha clickcado en el párrafo')
}