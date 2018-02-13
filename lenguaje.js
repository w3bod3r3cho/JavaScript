// //////////////////////////////
//  1 Declaración de Variable  //
// //////////////////////////////
/*
  var:    Vive dentro de la función declarada.  <Ej0001>.
  let:    Vive dentro del bloque declarado      <Ej0001>.
  const:  Se usa para definir constantes
*/

console.log('============================= 1 Declaración de Variable =============================')

//  <Ej0001>
function varTest () {
  var x = 31;
  if (true) {
    var x = 71; // ¡misma variable!
    console.log('var:');
    console.log(x); // 71
  }
  console.log(x); // 71
};

function letTest () {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log('let:');
    console.log(x); // 71
  }
  console.log(x); // 31
};

//  varTest();  //  Descomentar para ejecutar el elemplo
//  letTest();  //  Descomentar para ejecutar el elemplo

//  </Ej0001>

// ////////////////////////
//  2 Tipos de Variables //
// ////////////////////////

/*
    Tipos dinámicos

    JavaScript es un lenguaje de tipado débil o dinámico. 
    Esto significa que no es necesario declarar el tipo de variable antes de usarla. 
    El tipo será determinado automáticamente cuando el programa comience a ser procesado. 
    Esto también significa que puedes tener la misma variable con diferentes tipos:
*/

console.log('============================= 2 Tipos de Variables =============================');

var foo = 42; // foo es ahora un Number
var foo = 'bar'; // foo es ahora un String
var foo = true; // foo es ahora un Boolean

//  Tipos de datos

//  La última definición del estándar ECMAScript define siete tipos de datos: 

//  Seis tipos de datos que son primitives:
var foo = true; //  Boolean
//  console.log(foo);
var foo = null; //  Null
//  console.log(foo);
var foo = undefined; //  Undefined
//  console.log(foo);
var foo = 1; //  Number
//  console.log(foo);
var foo = 'cadena'; //  String
//  console.log(foo);
var foo = Symbol('foo'); //  Symbol (nuevo en ECMAScript 6)
//  console.log(foo);

//  Object
var foo = {};
//  console.log(foo);
//  Array
var foo = [1, 2, 3];
//  console.log(foo);

// ///////////////////////////////
//  3 Conversiones entre Tipos  //
// ///////////////////////////////

console.log('============================= 3 Conversiones entre Tipos =============================');

var foo = '50';
//  console.log(typeof Number(foo));
//  console.log(Number(foo));

//  parseFloat, parseInt
foo = '20.1093265';
/*
console.log('parseFloat');
console.log(typeof parseFloat(foo));
console.log(parseFloat(foo));
console.log(typeof parseFloat(foo).toFixed(3));
console.log(parseFloat(foo).toFixed(3));
console.log('parseInt');
console.log(typeof parseInt(foo));
console.log(parseInt(foo));
*/
//  String
/*
console.log('String');
console.log(String(foo));
console.log('length: ' + String(foo).length);
*/

// ////////////////////////
//  4 Templates Literal  //
// ////////////////////////

console.log('============================= 4 Templates Literal =============================');

const producto1 = 'Pizza',
  precio1 = 30,
  producto2 = 'Hamburguesa',
  precio2 = 40;

var html =
`
    <ul>
        <li>Orden: ${producto1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${producto2}</li>
        <li>Precio: ${precio2}</li>
        <li>Total: ${total(precio1, precio2)}</li>
    </ul>
`;
function total (p1, p2) {
  return p1 + p2;
}

document.getElementById('html').innerHTML = html;

// ///////////////
//  5 Arreglos  //
// ///////////////

console.log('============================= 5 Arreglos =============================');

const numeros = [10, 5, 4, 8, 6, 45.132, 24, 231];
//  console.log(numeros);
const mes = [];
//  console.log(typeof mes);
const meses = new Array('enero', 'febrero', 'marzo');
//  console.log(meses);
const mezcla = new Array('enero', true, 'febrero', 10, 12.31414, undefined, 'marzo');
//  console.log(mezcla);
//  Algunos Metodos
//  console.log(Array.isArray(meses));
//  console.log(meses.length);
//  console.log(meses[1]);
//  Añadir un Elemento al Arrego
meses.push('abril');
//  console.log(meses);
//  Añadir al inicio del Arreglo
meses.unshift('Mes 0');
//  console.log(meses);
//  Eliminar el ultimo Elemento del Arrego
meses.pop();
//  console.log(meses);
//  Eliminar el Elemento del Inicio del Arreglo
meses.shift();
//  console.log(meses);
//  Eliminar un Elemento del Arreglo
meses.splice(2, 1);
//  console.log(meses);
//  Revertur el orden del Arreglo
meses.reverse();
//  console.log(meses);
//  Unir Arreglos
let meses2 = ['mayo', 'junio', 10.432, false];
//  console.log(meses.concat(meses2));
//  console.log(meses);
//  Ordenar un Arreglo con letas
let frutas = ['Platano', 'Fresa', 'Manzana', 'Sandia'];
frutas.sort();
//  console.log(frutas);
//  Ordenar un Arreglo con numeros;
//  console.log(numeros);
numeros.sort();
//  console.log(numeros);
numeros.sort(function (x, y) {
  return x - y;
});
//  console.log(numeros);
numeros.sort(function (x, y) {
  return y - x;
});
//  console.log(numeros);
//  Buscar un Elemento;
//  console.log(meses.indexOf('marzo'));

// ///////////////////////////////////////////////
//  6 La Variable Const en Objectos y Arreglos  //
// ///////////////////////////////////////////////

console.log('============================= 6 La Variable Const en Objectos y Arreglos =============================');

const numbers = [1, 2, 3];
//  No puede ser reasignado el arreglo ya que es una constante
//  numbers = [4, 5, 6]
//  Pero si se pueden modificar su valor individual
numbers[0] = 4;
//  Se puede aplicar tambien todos los metodos vistos en 5 Arreglos
numbers.push(5);
//  console.log(numbers);

// ///////////////
//  7 Objectos  //
// ///////////////

console.log('============================= 7 Objectos =============================');

//  Crear Objeto
const person = {
  id: 1,
  nombre: 'Victor Leon',
  edad: 30,
  profesion: 'Programador',
  sueldo: 16000.50,
  empleados: ['Jesus Varguez', 'Luis Ruiz', 'Carlos May'],
  estado: true,
  ubicacion: {
    municipio: 'Merida',
    estado: 'Yucatan'
  },
  fechaNacimiento: function () {
    return new Date().getFullYear() - this.edad;
  }
};
/*
console.log(person);
console.log(person.id);
console.log(person.ubicacion.municipio);
console.log(person.fechaNacimiento());
*/

// ///////////////////////////////////
//  8 Creando Arreglos de Objectos  //
// ///////////////////////////////////

console.log('============================= 8 Creando Arreglos de Objectos =============================');

//  Aplican las mismas reglas para Var Let y Const
const cars = [
  {modelo: 'Mustang', motor: 6.0},
  {modelo: 'Dodge', motor: 3.0},
  {modelo: 'Nissan', motor: 4.0},
  {modelo: 'Ford', motor: 6.0}
];
/*
console.log(cars);

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i].modelo);
}

cars.forEach(element => {
  console.log(element);
})
*/

// //////////////////////////////
//  9 Funciones en Javascript  //
// //////////////////////////////

console.log('============================= 9 Funciones en Javascript =============================');

//  Funciones Declaradas
function sumar (a, b) {
  return a + b;
}
//  console.log('La suma es: ' + sumar(1, 9));

//  Funciones de Expresion
const suma = function (a, b) {
  return a + b;
}
//  console.log('La suma es: ' + suma(1, 8));

let v_suma = function (a, b) {
  sumar(a, b);
}
//  console.log('La suma es: ' + v_suma(1, 7));

v_suma = suma;
//  console.log('La suma es: ' + v_suma(1, 6));

//  Funciones   IIFE
(function (tecnologia) {
  //  console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

//  Metodos de Propiedad
//  Sun cuando una Funcion se pone dentro de un Objecto (Metodos)
const music = {
  reproducir: function (id) {
    console.log(`Reproducir música id: ${id}`);
  },
  pausar: function () {
    console.log('Pausar musica');
  }
};
//  Los Metodos tambien pueden crearse / guardarse fuera del Objecto
music.borrar = function (id) {
  console.log(`Borrando la cancion con id: ${id}`);  
};
//  music.reproducir(30);
//  music.pausar();
//  music.borrar(30);

// /////////////////////////////////////////////
//  10 Manejando los errores con Try y Catch  //
// /////////////////////////////////////////////

console.log('============================= 10 Manejando los errores con Try y Catch =============================');

//  Funcion que no existe ejemplo
/*
try {
  algo();
}
catch {
  console.log('Error la Funcion no existe');
}
finally {
  console.log('Se ejectuta este proceso de todos modos');
}

pruebaTry();
*/

function pruebaTry(){
  console.log('Descargando...');
  setTimeout(function () {
    console.log('Completa...');
  }, 3000);
};

// ////////////////////////////
//  11 Fechas en Javascript  //
// ////////////////////////////

console.log('============================= 11 Fechas en Javascript =============================');

const diaHoy = new Date();
//  console.log(diaHoy);
let navidad = new Date('2017-12-25');
//  console.log(navidad);
//  Año
//  console.log(diaHoy.getFullYear());
//  Mes es como un array Enero = 0
//  console.log(diaHoy.getMonth());
//  Dia
//  console.log(diaHoy.getDate());
//  Hora
//  console.log(diaHoy.getHours());
//  Minutos
//  console.log(diaHoy.getMinutes());
//  Milisegundos desde 1970
//  console.log(diaHoy.getTime());
//  Modificar el Año
diaHoy.setFullYear(2020);
//  console.log(diaHoy);

// ///////////////////////////////////////////////
//  12  Estructuras de Control, IF ELSE ELSEIF  //
// ///////////////////////////////////////////////

console.log('============================= 12  Estructuras de Control, IF ELSE ELSEIF =============================');
/*
if (10 > 18) {
  console.log('IF');
}
else {
  console.log('ELSE');
}

if (10 > 18) {
  console.log('IF');
}
else if (10 > 2) {
  console.log('ELSEIF');
}
else {
  console.log('ELSE');
}
*/

// /////////////////////////////
//  13  Switch en Javascript  //
// /////////////////////////////

console.log('============================= 13  Switch en Javascript =============================');

let mPago = 'Efectivo';
/*
switch (mPago) {
  case 'Efectivo':
    console.log(`El Cliente pago en ${mPago}`);
    break;
  case 'Tarjeta':
    console.log(`El Cliente pago en ${mPago}`);
    break;
  case 'Cheque':
    console.log(`El Cliente pago en ${mPago}`);
    break;
  default:
    console.log('El Metodo de Pago no es Soportado');
    break;
}
*/

// /////////////////////////////
//  14  Iteraciones For Loop  //
// /////////////////////////////

console.log('============================= 14  Iteraciones For Loop =============================');
/*
for (let idx = 0; idx < 5; idx++) {
  if (idx === 5) {
    console.log('Voy en el 5');
    continue;
  }
  if (idx === 6) {
    console.log('Voy en el 5');
    break;
  }
  console.log(idx);
}

for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 == 0) {
    console.log('par');
  }
  else {
    console.log('inpar');
  }
}

let arrProducto = ['Camisa', 'Pantalon', 'Short', 'Calcetines', 'Zapatos'];

for (let i = 0; i < arrProducto.length; i++) {
  console.log(`Se agrego el Producto ${arrProducto[i]} al Carrito`);
}
*/

// //////////////////////////////
//  15  While y Do While Loop  //
// //////////////////////////////

console.log('============================= 15  While y Do While Loop =============================');

let i = 0;
/*
while (i < 10) {
  console.log(`Numero: ${i}`);

  if (i == 5) {
    console.log('Voy en el 5');
    i++;
    continue;
  }
  if (i == 6) {
    console.log('Voy en el 6');
    break;
  }

  i++;
}

i = 0;

do {
  console.log(`Numero: ${i}`);
  i++;
} 
while (i < 10);
*/

// //////////////////////////////////
//  16  forEach, Map e Iteradores  //
// //////////////////////////////////

console.log('============================= 16  forEach, Map e Iteradores =============================');

let pendientes = ['Tarea', 'Comer', 'Dormir', 'Trabajar', 'Gym'];

pendientes.forEach(function (pendientes, index) {
  console.log(`${index} : ${pendientes}`);
});

let cestoCompra = [
  {id: 1, producto: 'Producto 1'},
  {id: 2, producto: 'Producto 2'},
  {id: 3, producto: 'Producto 3'},
  {id: 4, producto: 'Producto 4'},
];

let nompreProducto = cestoCompra.map(function (cestoCompra){
  return cestoCompra.producto;
});
console.log(cestoCompra);
console.log(nompreProducto);

let movil = {
  modelo: 'Camaro',
  motor: 'V4',
  año: 2016,
  marca: 'Ford'
};

for (let auto in movil) {
  console.log(`${auto} : ${movil[auto]}`);
}