class Poligono {

    /**
   * @param {number} x
   * @param {number} y
   * @param {string} numLados
   */
    constructor(x, y, numLados) {
        this.x = x;
        this.y = y;
        this.numLados = numLados;
    }

    imprimirPosicion() {
        console.log(`La Posicion es: x = ${this.x} & y = ${this.y}`);
    }

    imprimirPoligono() {

        let clasePoligono;

        switch (this.numLados) {
            case "3":
                clasePoligono = "Triangulo";
                break;
            case "4":
                clasePoligono = "Cuadrado";
                break;
            case "5":
                clasePoligono = "Pentagono";
                break;
            default:
                clasePoligono = "Otro tipo"
                break;
        }

        return clasePoligono;
    }

    static ladosPoligono() {
        console.log(`Static 2 * 2 = ${2 * 2}`);
    }
}

export { Poligono };
// export default Poligono;