import { Poligono } from './poligono.js';
// import Poligono from './poligono.js' export default Poligono

var p = new Poligono(10, 20, 4);
const keys = Object.keys(p);
console.log(p);
p.imprimirPosicion();
console.log(p.imprimirPoligono());
Poligono.ladosPoligono();


var frutas = ['Manzana', 'Banana'];
frutas.push('Mango');
// ["Fresa", "Banana", "Mango"];

var pos = ['Manzana', 'Banana'].indexOf('aaa    ');
console.log('\n' +pos);