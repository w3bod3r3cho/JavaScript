// Scope
// The best practice use let for variable and const for constant

// 1 Object Literal
// ----------------------------------------------------------------------

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(p) {
        console.log(`Draw ${p}`);
    }
};

// circle.draw(1);

// 2 Factories
// ----------------------------------------------------------------------

// let varCircle = Object.create(circle);
// varCircle.draw(2);

function createCircle(radius) {
    return {
        radius,
        draw: function (p) {
            console.log(`Draw ${p}`);
        }
    }
}
const circleFactorie = createCircle(1);
// circleFactorie.draw('Factorie');

// 3 Constructors
// ----------------------------------------------------------------------

function Circle2(radius) {
    this.radius = radius;
    this.draw = function (p) {
        console.log(`Draw ${p}`);
    }
}
const another = new Circle2(2);
// another.draw('Constructors');

// 4 Functions are Objects
// ----------------------------------------------------------------------

// 5 Values vs Reference Types
// ----------------------------------------------------------------------

// Value Types     = Primitives
// Number, String, Boolean, Symbol, undefined, null
// Reference Types = Onjects
// Object, Function, Array
  
let x = 10;
let y = x;
x = 20;
//- console.log(`x = ${x} & y = ${y}`)

let w = { value: 10 };
let z = w;
w.value = 10;
//- console.log(`x = ${w.value} & y = ${z.value}`);

// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;
function increase(number) {
    number++;
}
increase(number);
//- console.log(number);

let obj = { valiue: 10 };
function increase(obj) {
    obj.valiue++;
}
increase(obj);
//- console.log(obj);

// 6 Adding/Removing Properties
// ----------------------------------------------------------------------

function Circle3(radius) {
    this.radius = radius;
    this.draw = function (p) {
        console.log(`Draw ${p}`);
    }
}

const circle3 = new Circle3(10);
circle3.location = { x: 1 };
// Bracket notation
circle3['location2'] = { x: 1 };

// const propertyName = 'location';
// circle[propertyName] = { x: 1 };

const propertyName = 'center location';
circle3[propertyName] = { x: 1 };

//- console.log(circle3);

delete circle3['location2'];
delete circle3.location; 
//- console.log(circle3);

// 7 Enumerating Properties
// ----------------------------------------------------------------------

for (let key in circle3) {
    //- console.log(key, circle[key]);
}

const keys = Object.keys(circle3);
//- console.log(keys);

if ('radius' in circle3) {
    //- console.log('Circle has a radius.');
}

// 8 Abstraction
// ----------------------------------------------------------------------

function Circle4(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimunLocation = function(factor) {
        // Magic...
        return factor;
    }
    this.draw = function (p) {
        // Hide the Details, Show the essentials
        console.log(`computeOptimunLocation: ${this.computeOptimunLocation(p)}`);
        console.log(`Draw ${p}`);
    }
}

const circle4 = new Circle4(10);
// Hide the Details, Show the essentials
// circle4.computeOptimunLocation(0.1);
// circle4.draw('Circle4');

// Private Properties and Methods
// ----------------------------------------------------------------------

function Circle5(radius) {
    // Local variable (PRIVATE)
    let color = 'red';
    let localDefaultLocation = { x: 15, y: 12 };

    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimunLocation = function (factor) {
        // Magic...
        console.log(localDefaultLocation);

        return factor;
    }
    this.draw = function (p) {
        // Scope -> this variables live only inside of function
        let x, y;
        
        // Hide the Details, Show the essentials
        console.log(`computeOptimunLocation: ${this.computeOptimunLocation(p)}`);
        console.log(`Draw ${p}`);
    }
}

const circle5 = new Circle5(10);
circle5.draw(10);
const keys2 = Object.keys(circle5);
console.log(keys2);