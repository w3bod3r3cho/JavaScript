//  1 Event Listener Click
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   1 Event Listener Click   ----------------')

//  Al Buscador
/*
document.querySelector('#submit-buscador').addEventListener('click', function (event) {
  event.preventDefault(); //  Previenes que haga el Action su funcion Default(#) action="#"
  alert('Buscando Cursos')
})

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton)

function ejecutarBoton (event) {
  event.preventDefault(); //  Previenes que haga el Action su funcion Default(#) action="#"
  alert('Buscando Cursos desde la funcion ejecutarBoton')
}

document.querySelector('#encabezado').addEventListener('click', function (event) {
  event.target.innerText = 'Nuevo Encabezado'
  console.log(event.target.innerText)
})
*/
//  2 Otros eventos con el mouse
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   2 Otros eventos con el mouse   ----------------')

//  Variables
let 
  encabezado = document.querySelector('#encabezado'),
  enlace = document.querySelector('.enlace'),
  boton = document.querySelector('#vaciar-carrito');

//  Click
//  boton.addEventListener('click', obtenerEvento)
//  Doble Click
//  boton.addEventListener('dblclick', obtenerEvento)
//  Mouse Enter
//  boton.addEventListener('mouseenter', obtenerEvento)
//  Mouse Leave
//  boton.addEventListener('mouseleave', obtenerEvento)
//  Mouse Over
//  boton.addEventListener('mouseover', obtenerEvento)
//  Mouse Out
//  boton.addEventListener('mouseout', obtenerEvento)
//  Mouse Down
//  boton.addEventListener('mousedown', obtenerEvento)
//  Mouse Up
//  boton.addEventListener('mouseup', obtenerEvento)
//  Mouse Move
//  boton.addEventListener('mousemove', obtenerEvento)
//  encabezado.addEventListener('mousemove', obtenerEvento)

//function obtenerEvento(event) {
//  console.log(`Evento ${event.type}`);
//}

//  3 Eventos para los Inputs
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   3 Eventos para los Inputs   ----------------')

//const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento)
// busqueda.addEventListener('keyup', obtenerEvento)
// busqueda.addEventListener('keypress', obtenerEvento)
// busqueda.addEventListener('focus', obtenerEvento)
// busqueda.addEventListener('blur', obtenerEvento)
// busqueda.addEventListener('cut', obtenerEvento)
// busqueda.addEventListener('copy', obtenerEvento)
// busqueda.addEventListener('paste', obtenerEvento)
// busqueda.addEventListener('input', obtenerEvento)
// DISPONIBLE EN LOS SELECT
// busqueda.addEventListener('change', obtenerEvento)
/*
function obtenerEvento(event) {
  // console.log(busqueda.value);
  // document.querySelector('#encabezado').innerHTML = busqueda.value;
  console.log(`Evento ${event.type}`);
}
*/
//  4 Event Bubbling
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   4 Event Bubbling   ----------------')

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function (){
  console.log('Click en Card');
});

infoCurso.addEventListener('click', function (){
  console.log('Click en info Curso');
});

agregarCarrito.addEventListener('click', function (e){
  console.log('Click en agregar Carrito');
  e.stopPropagation();
});

//  5 Delegation
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   5 Delegation   ----------------')
/*
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento (e) {
  e.preventDefault();

  //console.log('click');

  //console.log(e.target.classList);
  
  if (e.target.classList.contains('borrar-curso')) {
    console.log('Si!');
  }
  else {
    console.log('No!');
  }
  
  if (e.target.classList.contains('borrar-curso')) {
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.parentElement);
    console.log(e.target.parentElement.parentElement.remove());
  }
  if (e.target.classList.contains('agregar-carrito')) {
    console.log('curso agregado');
  }
}
*/
//  Seccion 4 Local y Session Storage
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   Seccion 4 Local y Session Storage   ----------------')

localStorage.setItem('nombre', 'Juan');
sessionStorage.setItem('nombre', 'Juan');

const nombre = localStorage.getItem('nombre');

localStorage.removeItem('nombre');
localStorage.clear();
sessionStorage.removeItem('nombre');
