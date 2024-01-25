function selector(){
    let elemeto_padre = document.querySelector('ul')
    let elemento_hijo = document.querySelectorAll('li')

    elemeto_padre.removeChild(elemento_hijo[0])
}