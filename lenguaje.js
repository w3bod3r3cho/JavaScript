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
  var x = 31
  if (true) {
    var x = 71; // ¡misma variable!
    console.log('var:')
    console.log(x) // 71
  }
  console.log(x) // 71
}

function letTest () {
  let x = 31
  if (true) {
    let x = 71 // variable diferente
    console.log('let:')
    console.log(x) // 71
  }
  console.log(x) // 31
}

//  varTest()  //  Descomentar para ejecutar el elemplo
//  letTest()  //  Descomentar para ejecutar el elemplo

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

console.log('============================= 2 Tipos de Variables =============================')

var foo = 42 // foo es ahora un Number
var foo = 'bar' // foo es ahora un String
var foo = true // foo es ahora un Boolean

//  Tipos de datos

//  La última definición del estándar ECMAScript define siete tipos de datos: 

//  Seis tipos de datos que son primitives:
var foo = true //  Boolean
//  console.log(foo)
var foo = null //  Null
//  console.log(foo)
var foo = undefined //  Undefined
//  console.log(foo)
var foo = 1 //  Number
//  console.log(foo)
var foo = 'cadena' //  String
//  console.log(foo)
var foo = Symbol('foo') //  Symbol (nuevo en ECMAScript 6)
//  console.log(foo)

//  Object
var foo = {}
//  console.log(foo)
//  Array
var foo = [1, 2, 3]
//  console.log(foo)

// ///////////////////////////////
//  3 Conversiones entre Tipos  //
// ///////////////////////////////

console.log('============================= 3 Conversiones entre Tipos =============================')

var foo = '50'
//  console.log(typeof Number(foo))
//  console.log(Number(foo))

//  parseFloat, parseInt
foo = '20.1093265'
/*
console.log('parseFloat')
console.log(typeof parseFloat(foo))
console.log(parseFloat(foo))
console.log(typeof parseFloat(foo).toFixed(3))
console.log(parseFloat(foo).toFixed(3))
console.log('parseInt')
console.log(typeof parseInt(foo))
console.log(parseInt(foo))
*/
//  String
/*
console.log('String')
console.log(String(foo))
console.log('length: ' + String(foo).length)
*/

// ////////////////////////
//  4 Templates Literal  //
// ////////////////////////

console.log('============================= 4 Templates Literal =============================')

const producto1 = 'Pizza',
  precio1 = 30,
  producto2 = 'Hamburguesa',
  precio2 = 40

var html =
`
    <ul>
        <li>Orden: ${producto1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${producto2}</li>
        <li>Precio: ${precio2}</li>
        <li>Total: ${total(precio1, precio2)}</li>
    </ul>
`
function total (p1, p2) {
  return p1 + p2
}

document.getElementById('html').innerHTML = html

// ///////////////
//  5 Arreglos  //
// ///////////////

console.log('============================= 5 Arreglos =============================')

const numeros = [10, 5, 4, 8, 6, 45.132, 24, 231]
//  console.log(numeros)
const mes = new Array();
//  console.log(typeof mes)
const meses = new Array('enero', 'febrero', 'marzo');
//  console.log(meses)
const mezcla = new Array('enero', true, 'febrero', 10, 12.31414, undefined, 'marzo');
//  console.log(mezcla)
//  Algunos Metodos
//  console.log(Array.isArray(meses))
//  console.log(meses.length)
//  console.log(meses[1])
//  Añadir un Elemento al Arrego
meses.push('abril')
//  console.log(meses)
//  Añadir al inicio del Arreglo
meses.unshift('Mes 0')
//  console.log(meses)
//  Eliminar el ultimo Elemento del Arrego
meses.pop()
//  console.log(meses)
//  Eliminar el Elemento del Inicio del Arreglo
meses.shift()
//  console.log(meses)
//  Eliminar un Elemento del Arreglo
meses.splice(2, 1);
//  console.log(meses)
//  Revertur el orden del Arreglo
meses.reverse()
//  console.log(meses)
//  Unir Arreglos
let meses2 = ['mayo', 'junio', 10.432, false]
//  console.log(meses.concat(meses2))
//  console.log(meses)
//  Ordenar un Arreglo con letas
let frutas = ['Platano', 'Fresa', 'Manzana', 'Sandia']
frutas.sort()
//  console.log(frutas)
//  Ordenar un Arreglo con numeros
//  console.log(numeros)
numeros.sort()
//  console.log(numeros)
numeros.sort(function(x, y) {
  return x - y
})
//  console.log(numeros)
numeros.sort(function(x, y) {
  return y - x
})
//  console.log(numeros)
//  Buscar un Elemento
//  console.log(meses.indexOf('marzo'))

// ///////////////////////////////////////////////
//  6 La Variable Const en Objectos y Arreglos  //
// ///////////////////////////////////////////////

console.log('============================= 6 La Variable Const en Objectos y Arreglos =============================')

const numbers = [1, 2, 3]
//  No puede ser reasignado el arreglo ya que es una constante
//  numbers = [4, 5, 6]
//  Pero si se pueden modificar su valor individual
numbers[0] = 4;
//  Se puede aplicar tambien todos los metodos vistos en 5 Arreglos
numbers.push(5)
//  console.log(numbers)

// ///////////////
//  7 Objectos  //
// ///////////////

console.log('============================= 7 Objectos =============================')

//  Crear Objeto
const person = {
  id: 1,
  nombre: 'Victor Leon',
  edad:30,
  profesion: 'Programador',
  sueldo: 16000.50,
  empleados: ['Jesus Varguez', 'Luis Ruiz', 'Carlos May'],
  estado: true,
  ubicacion: {
    municipio: 'Merida',
    estado: 'Yucatan'  
  },
  fechaNacimiento: function() {
    return new Date().getFullYear() - this.edad 
  }
}
/*
console.log(person)
console.log(person.id)
console.log(person.ubicacion.municipio)
console.log(person.fechaNacimiento())
*/
// ///////////////////////////////////
//  8 Creando Arreglos de Objectos  //
// ///////////////////////////////////

console.log('============================= 8 Creando Arreglos de Objectos =============================')

//  Aplican las mismas reglas para Var Let y Const
const cars = [
  {modelo: 'Mustang', motor: 6.0},
  {modelo: 'Dodge', motor: 3.0},
  {modelo: 'Nissan', motor: 4.0},
  {modelo: 'Ford', motor: 6.0},
]
console.log(cars)

for(var i = 0; i < cars.length; i++) {
  console.log(cars[i].modelo)
}

cars.forEach(element => {
  console.log(element)
});