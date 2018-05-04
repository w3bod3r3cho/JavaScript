class Poligono {

    numLados = 4;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    imprimirPosicion() {
        console.log(`La Posicion es: x = ${this.x} & y = ${this.y}`);
    }

    static ladosPoligono() {
        console.log(`Numero de lados: ${this.numLados}`);
    }
}
var p = new Poligono(10, 20);
const keys = Object.keys(p);
console.log(p);
p.imprimirPosicion();
Poligono.ladosPoligono();