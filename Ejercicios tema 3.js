// PRIMERA PARTE:
function suma(a,b,c) {
    return a+b+c
}


suma (2,4,6)

// SEGUNDA PARTE


class Coche {
         constructor() {
            this.puerta = 4
         }
    sumarPuertas(n) {
        this.puerta = this.puerta +n;
            return this.puerta;
  }  
}
        
  let audi = new Coche()

audi.sumarPuertas(1)