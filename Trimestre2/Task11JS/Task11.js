function preguntar(){
    if (window.confirm('¿Acceder a El País?')){
        window.location='https://elpais.com/'
    }else{
        window.alert('No verás las noticias, ignorante!')
    }
}