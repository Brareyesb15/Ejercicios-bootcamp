const brandon= {
    nombre: "Brandon",
    apellido: "Reyes",
    edad: 27,
    altura: 1.84,
    eresDesarrollador: true
}
let calcEdad = brandon.edad

let bestfriend1 = {
    nombre: "Eduardo",
    apellido: "Castilla",
    edad: 27,
    altura: 1.70,
    eresDesarrollador: false
}
let bestfriend2 ={
    nombre: "Mafe",
    apellido: "Torres",
    edad: 26,
    altura: 1.70,
    eresDesarrollador: false
}
let lista = [brandon, bestfriend1,bestfriend2]

let listaOrden = lista.sort((a,b) => a.edad + b.edad)
