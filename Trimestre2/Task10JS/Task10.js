function pantalla(){
    document.writeln('<title>Ejemplo 12- Información de la pantalla</title>')
    document.write('<h1>Ejemplo 12- Información de la pantalla</h1><br><br>')
    document.write('<p> La altura de la pantalla del usuario es: ', screen.height, '</p><br><br>')
    document.write('<p> La altura disponible en la pantalla del usuario es: ', screen.availHeight, '</p><br><br>')
    document.write('<p> El ancho total de la pantalla del usuario es: ', screen.width, '</p><br><br>')
    document.write('<p> El ancho disponible en la pantalla del usuario es: ', screen.availWidth, '</p>')
}