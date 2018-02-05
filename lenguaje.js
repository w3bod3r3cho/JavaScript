///////////////////////////////
//  Declaración de Variable  //
///////////////////////////////
/*
  var:    Vive dentro de la función declarada.  <Ej0001>.
  let:    Vive dentro del bloque declarado      <Ej0001>.
  const:  Se usa para definir constantes
*/

//  <Ej0001>
function varTest() {
    var x = 31;
    if (true) {
        var x = 71;  // ¡misma variable!
        console.log('var:');
        console.log(x);  // 71
    }
    console.log(x);  // 71
}
  
function letTest() {
    let x = 31;
    if (true) {
        let x = 71;  // variable diferente
        console.log('let:');
        console.log(x);  // 71
    }
    console.log(x);  // 31
}
 
//  varTest();  //  Descomentar para ejecutar el elemplo
//  letTest();  //  Descomentar para ejecutar el elemplo

//  </Ej0001>

/////////////////////////
//  Tipos de Variables //
/////////////////////////

/*
    Tipos dinámicos

    JavaScript es un lenguaje de tipado débil o dinámico. 
    Esto significa que no es necesario declarar el tipo de variable antes de usarla. 
    El tipo será determinado automáticamente cuando el programa comience a ser procesado. 
    Esto también significa que puedes tener la misma variable con diferentes tipos:
*/

var foo = 42;    // foo es ahora un Number
var foo = "bar"; // foo es ahora un String
var foo = true;  // foo es ahora un Boolean


//  Tipos de datos
    
//  La última definición del estándar ECMAScript define siete tipos de datos: 
    
        Seis tipos de datos que son primitives:
var foo = true;//  Boolean
var foo = null;//  Null
var foo = undefined;//  Undefined
var foo = 1;//  Number
var foo = 'cadena';//  String
var foo = Symbol("foo");//  Symbol (nuevo en ECMAScript 6)

        //  Object