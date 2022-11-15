let siempreCierta =  () =>  1 === 1 

let asincronno = () => 
setTimeout (function () {
    console.log("Hola,soy una promesa")
},5000);

function* indexG() {
    let indx = 0; 
    while(true) {
    indx = indx + 2; 
    yield indx
    }
}

let indxG = indexG()

console.log (indxG.next()) 
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())
console.log (indxG.next())





