var elan = {
    nombre: 'Elan Francisco',
    apellidos:'Perea Aprilla',
    edad:0
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre:
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(elan);