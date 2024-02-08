var padre
var hijos
var elemento_creado
var lista_creada
var elemeneto_li
var lista_creada_hijos

function inicializar(){
    padre = document.querySelector("body")
    hijos = document.querySelectorAll("p")
    
    crear_elemento()
    crear_lista()
    modificar_lista()

    document.getElementById('btn').onclick = accion
}

function crear_elemento(){
    elemento_creado= document.createElement("p")
    elemento_creado.textContent= "Párrafo añadido con JavaScript"
    elemento_creado.style.background= "yellow"
}

function accion(){
    hijos[0].innerHTML = "Texto actualizado"
    padre.insertBefore(elemento_creado, hijos[hijos.length-1])

    if (hijos.length>=4){
    padre.removeChild(hijos[3])
    }
}

function crear_lista(){
    lista_creada= document.createElement("ul")
    for (i=1; i<6; i++){
        elemeneto_li= document.createElement("li")
        elemeneto_li.textContent= "Ítem" + i
        lista_creada.appendChild(elemeneto_li)
    }
    padre.appendChild(lista_creada)
}

function modificar_lista(){
    lista_creada_hijos= document.querySelectorAll("li")
    if (lista_creada_hijos.length>=3){
        lista_creada_hijos[2].innerHTML= "Ítem modificado"
        }
}