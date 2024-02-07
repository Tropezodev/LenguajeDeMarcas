var parrafos
var padre

function inicializar(){
    padre = document.querySelector('body') //Te devuelve el primero
    parrafos = document.querySelectorAll('p') //Te devuelve la Nodelist entera
    
    let enlace = document.createElement('a')
    enlace.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    enlace.target='_blank'
    enlace.innerHTML='  Enlace'
    parrafos[2].appendChild(enlace)
    
    let elemento_creado = document.createElement('p')
    elemento_creado.textContent = 'Párrafo nuevo'
    elemento_creado.style.color = 'red'
    
    padre.appendChild(elemento_creado)
    //document.body.appendChild(elemento_creado)
    //document.body.insertBefore(elemento_creado, parrafos[2]) // Para elegir la posición después (before) de donde queremos insertar el elemento

    padre.removeChild(parrafos[1])
}