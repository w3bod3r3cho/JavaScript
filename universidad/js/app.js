//  Eliminar de Local Storage
localStorage.clear()

//  1   Primeros pasos con el DOM y el Scripting
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   1 Primeros pasos con el DOM y el Scripting    ----------------')
/*
let elemento

elemento = document
elemento = document.all
elemento = document.all[10]

elemento = document.head
elemento = document.body
elemento = document.domain
elemento = document.URL
elemento = document.characterSet
elemento = document.forms
elemento = document.forms[0]
elemento = document.forms[0].id
elemento = document.forms[0].className
elemento = document.forms[0].classList
elemento = document.forms[0].classList[0]
elemento = document.forms[0].classList.length

document.forms[0].classList.forEach(element => {
  console.log(element)
})

console.log(elemento)

elemento = document.images
elemento = document.images.length
elemento = document.images[2].src
console.log(elemento)
elemento = document.images[2].getAttribute('src')
console.log(elemento)

//  Scripts
elemento = document.scripts
console.log(elemento)

//  htmlCollection to Array
elemento = document.images
let imagenArr = Array.from(elemento)
console.log(imagenArr)
*/

//  2   Seleccionando elementos y aplicando propiedades
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   2 Seleccionando elementos y aplicando propiedades    ----------------')
/*
//  getElementById
let elemento
elemento = document.getElementById('hero')
//  elemento = document.getElementById('hero').id
//  elemento = document.getElementById('header').className
console.log(elemento)

let encabezado
encabezado = document.getElementById('encabezado')
console.log(encabezado)
encabezado = document.getElementById('encabezado').innerText
console.log(encabezado)
encabezado = document.getElementById('encabezado').textContent
console.log(encabezado)

encabezado = document.getElementById('encabezado')
encabezado.style.background = '#333'
encabezado.style.color = '#fff'
encabezado.style.padding = '20px'
//  Cambiar el Texto
encabezado.textContent = 'Curso de Victor'
*/

//  3   Seleccionando un elemento en Javascript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   3 Seleccionando un elemento en Javascript    ----------------')
/*
//  Query Selector
const encabezadoId = document.querySelector('#encabezado')
console.log(encabezadoId)
encabezadoId.style.background = '#333'
encabezadoId.style.color = '#fff'
encabezadoId.style.padding = '20px'
encabezadoId.textContent = 'Curso de Victor'

const encabezadoClass = document.querySelector('.encabezado')
encabezadoClass.style.background = '#333'
encabezadoClass.style.color = '#fff'
encabezadoClass.style.padding = '20px'
encabezadoClass.textContent = 'Curso de Victor'

let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
enlace = document.querySelector('#principal a:last-child');
console.log(enlace)
*/

//  4   Seleccionando multiples elementos en JavaScript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   4 Seleccionando multiples elementos en JavaScript    ----------------')
/*
let enlaces = document.getElementsByClassName('enlace'),
enlace = enlaces[1]
//  CSS
enlace.style.background = '#333'
enlace.textContent = 'Nuevo Enlace'
//  console.log(enlaces);
//  console.log(enlace);

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
//  console.log(listaEnlaces);

const links = document.getElementsByTagName('a');
links[18].style.color = 'red'

let eLinks = Array.from(links);
eLinks.forEach(element => {
  console.log(element.textContent)
});

console.log(links)
*/

//  5   Seleccionando multiples elementos en JavaScript Parte 2
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   5 Seleccionando multiples elementos en JavaScript Parte 2    ----------------')
/*
let enlaces = document.querySelectorAll('#principal .enlace');
enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(element => {
  element.style.background = '#333'
});

console.log(enlaces)
*/

//  6   Traversing en JavaScript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   6 Traversing en JavaScript    ----------------')

