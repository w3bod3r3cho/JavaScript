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
encabezado.addEventListener('mousemove', obtenerEvento)

function obtenerEvento(event) {
  console.log(`Evento ${event.type}`);
}

