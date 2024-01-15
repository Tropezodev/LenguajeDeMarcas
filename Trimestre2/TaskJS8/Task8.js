function fecha(){
    let fecha = new Date()
    document.write('<p>Día de la semana: ',fecha.getDay(),'</p>')
    document.write('<p>Día: ',fecha.getDate(),'</p>')
    document.write('<p>Mes: ',fecha.getMonth(),'</p>')
    document.write('<p>Año: ',fecha.getFullYear(),'</p>')
    document.write('<p>Hora: ',fecha.getHours(),'</p>')
    document.write('<p>Minutos: ',fecha.getMinutes(),'</p>')
    document.write('<p>Segundos: ',fecha.getSeconds(),'</p>')
}