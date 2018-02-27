//  1 Event Listener Click
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   1 Event Listener Click   ----------------')

//  Al Buscador
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
