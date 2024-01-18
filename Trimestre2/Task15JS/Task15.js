function selector(){
    let elemento_padre = document.querySelector('ul')
    let elementos_hijo = document.querySelectorAll('li')

    let elemento_creado = document.createElement('li')
    let texto= document.createTextNode('Nuevo Elemento Creado')
    elemento_creado.appendChild(texto)

    elemento_padre.insertBefore(elemento_creado, elementos_hijo[1])
}