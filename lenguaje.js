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

// ///////////////////////
//  4 Templates Literal //
// ///////////////////////

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
