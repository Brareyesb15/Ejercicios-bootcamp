var listaCompras = ["huevos", "Carne de res", "leche", "pan","arroz"]
listaCompras.push("Aceite de Girasol")
listaCompras.splice(5,1)
var listaCine= [
        {titulo: "apocalypse now",director: "F.F Coppola", fecha: 1967 },
        {titulo:"the tree of life", director: "T. Malick", fecha: 2006},
        {titulo: "Mirror",director: "A. Tarkovski", fecha: 1975} ]
let post2010 = listaCine.filter(pelis => pelis.fecha >2009)
let directores= listaCine.map(pelis => pelis.director)
let titles= listaCine.map (pelis => pelis.titulo)   
let newListt= directores.concat(titles)
let newList = [...directores,...titles] 


   
    
   

