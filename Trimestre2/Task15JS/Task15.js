function selector(){

    let elemento_creado = document.createElement('li') //Se crea un elemento <li> vacío y lo guardamos en una variable
    let texto= document.createTextNode('Nuevo Elemento Creado') //Creamos el texto que va dentro del nodo
    elemento_creado.appendChild(texto) //Metemos el texto en el elemento <li>

    let elemento_padre = document.querySelector('ul') //Recuperamos el elemento padre
    let elementos_hijo = document.querySelectorAll('li') //Recuperamos el Nodelist de los elementos hijo

    elemento_padre.insertBefore(elemento_creado, elementos_hijo[1]) //Introducimos el elemento creado en la posición que queremos
}