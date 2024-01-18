try {
    let a = 4
    let c = a + b
}
catch(error){
    alert('Se ha producido un error', error.message);
}
finally{
    console.log('Bloque Finally');
}


