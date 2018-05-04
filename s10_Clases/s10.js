//-----------------------------------------------------------------------------------
// S10 Clases en ECMAScript 6
//-----------------------------------------------------------------------------------

// 83 Creando una Clase
// -----------------------------------------------------------------------------------

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    static Bienvenida() {
        return 'Bienvenido al cajero';
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    tipoCliente() {
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

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }
}

const maria = new Cliente('Maria', 'Perez', 10000);

// console.log(maria);
// Los metodos estaticos se llaman con el nombre de la clase y luego el metodo
// console.log(Cliente.Bienvenida());
// console.log(maria.imprimirSaldo());
// console.log(maria.tipoCliente());
// console.log(maria.retirarSaldo(2000));

// 84 Herencia en Clases con JavaScript
// -----------------------------------------------------------------------------------

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // Va hacia el constructor Padre
        super(nombre, saldo);
        // Atributos de la Empresa
        this.telefono = telefono,
        this.tipo = tipo;
    }

    // Puedes reescribir un metodo pero tiene que llamarce igual
    static Bienvenida() {
        return 'Bienvenido al cajero para Empresas';
    }
}

const empresa = new Empresa('Empresa1', 1000000, 9991521458, 'Construccion');
console.log(empresa);
console.log(Empresa.Bienvenida());
console.log(empresa.imprimirSaldo());
console.log(empresa.retirarSaldo(20000));