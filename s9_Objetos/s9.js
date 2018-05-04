//-----------------------------------------------------------------------------------
// S9 Objetos, Constructores y This
//-----------------------------------------------------------------------------------

// 78 Creando Objetos
// -----------------------------------------------------------------------------------

// Object literal
const cliente = {
    nombre: 'Juan',
    saldo: 600,
    tipoCliente: function() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if(this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

// console.log(cliente.tipoCliente());

// Metodo alternativo
/*
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function (){
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);
*/
// console.log(persona.tipoCliente());

// 79 Otros Objetos y Constructores
// -----------------------------------------------------------------------------------

// String
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');
// console.log(nombre1 + ' typeof:' + typeof nombre1);
// console.log(nombre2 + ' typeof:' + typeof nombre2);

/*
if (nombre1 == nombre2) {
    console.log('iguales ==');
} else {
    console.log('diferentes ==');
}

if (nombre1 === nombre2) {
    console.log('iguales ===');
} else {
    console.log('diferentes ===');
}
*/

const numero1 = 20;
const numero2 = new Number(20);
// console.log(typeof numero1);
// console.log(typeof numero2);
const boolean1 = true;
const boolean2 = new Boolean(true);
// console.log(typeof boolean1);
// console.log(typeof boolean2);

const funcion1 = function(a, b) {
    return a + b;
}

const funcion2 = new Function('a', 'b', 'return 1 + 2');

//  console.log(funcion1(2, 3));
//  console.log(funcion1(1, 2));

// Objetos
const persona1 = {
    nombre: 'Juan'
}
const persona2 = new Object({nombre: 'Juan'});
// console.log(persona1);
// console.log(persona2);

// Arreglos
const arreglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);
// console.log(arreglo1);
// console.log(arreglo2);

// 80 Prototypes en JavaScript
// -----------------------------------------------------------------------------------

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear un Prototype
Cliente.prototype.tipoCliente = function (edad) {
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

// Prototipo imprimir saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo de Cliente ${this.tipoCliente()}`;
}

// Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo - retiro;
}

const cliente1 = new Cliente('Pedro', 400);

// console.log(cliente1.tipoCliente(30));
// console.log(cliente1.nombreClienteSaldo(30));
// console.log(cliente1.retirarSaldo(200));

// 81 Heredar Prototypes a otros Objetos
// -----------------------------------------------------------------------------------

// Banca para empresas
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa('Udemy', 1000000, 9991154287, 'Educacion');
// console.log(empresa);

// 82 La Funcion Objetc Create
// -----------------------------------------------------------------------------------

const constCliente = {
    imprimirSaldo: function() {
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}
// Crear el objeto
const mary = Object.create(constCliente);
// console.log(mary);
mary.nombre = 'Mary';
mary.saldo = 1000;
mary.deuda = 3000;
// console.log(mary);
// console.log(mary.imprimirSaldo());
// console.log(mary.saldo);
// console.log(mary.retirarSaldo(300));
// console.log(mary.saldo);