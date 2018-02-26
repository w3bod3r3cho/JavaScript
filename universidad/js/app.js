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

let enlace
enlace = document.querySelector('#principal a:first-child')
enlace = document.querySelector('#principal a:nth-child(3)')
enlace = document.querySelector('#principal a:last-child')
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
//  console.log(enlaces)
//  console.log(enlace)

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace')
//  console.log(listaEnlaces)

const links = document.getElementsByTagName('a')
links[18].style.color = 'red'

let eLinks = Array.from(links)
eLinks.forEach(element => {
  console.log(element.textContent)
})

console.log(links)
*/

//  5   Seleccionando multiples elementos en JavaScript Parte 2
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   5 Seleccionando multiples elementos en JavaScript Parte 2    ----------------')
/*
let enlaces = document.querySelectorAll('#principal .enlace')
enlaces = document.querySelectorAll('#principal a:nth-child(odd)')

enlaces.forEach(element => {
  element.style.background = '#333'
})

console.log(enlaces)
*/

//  6   Traversing en JavaScript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   6 Traversing en JavaScript    ----------------')

//  1   Padre al hijo
/*
let nav = document.querySelector('#principal')
console.log(nav)
console.log(nav.nodeName)
console.log(nav.children)
console.log(nav.children[0].nodeName)
console.log(nav.children[0].nodeType)
*/
/* 
  Los Nodos son las etiquetas HTML
  
  nodeType:
    1 = Elemento
    2 = Atributo
    3 = Text Node
    8 = Comentarios
    9 = Documentos
    10 = Doctype
*/
/*
let barra = document.querySelector('.barra')
console.log(barra.children)
console.log(barra.children[0].children)
console.log(barra.children[0].children[0].children)
let cursos = document.querySelectorAll('.card')
console.log(cursos)
console.log(cursos[0])
console.log(cursos[0].childElementCount)
console.log(cursos[0].firstElementChild)
console.log(cursos[0].lastElementChild)
console.log(cursos[0].lastChild)
*/
//  2   Hijo al padre
/*
let enlaces = document.querySelectorAll('.enlace')
console.log(enlaces)
console.log(enlaces[0])
console.log(enlaces[0].parentNode)
console.log(enlaces[0].parentElement) //  Recomendado

let cursos = document.querySelectorAll('.card')
console.log(cursos[0])
console.log(cursos[0].parentElement)
console.log(cursos[0].parentElement.parentElement)
console.log(cursos[0].parentElement.parentElement.parentElement)
console.log(cursos[0].parentElement.parentElement.parentElement.children)
console.log(cursos[0].parentElement.parentElement.parentElement.children[0])
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola')

console.log(enlaces[4].previousSibling)
console.log(enlaces[4].previousElementSibling)
console.log(enlaces[4].previousElementSibling.previousElementSibling)
console.log(enlaces[0].nextElementSibling)
console.log(enlaces[0].nextElementSibling.nextElementSibling)
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement)
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children)
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4])
*/
//  7 Creando elementos con JavaScript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   7 Creando elementos con JavaScript   ----------------')
/*
//  Crear enlace
let enlace = document.createElement('a');
//  Agregar una Clase
enlace.className = 'enlace';
//  Agregar Id
enlace.id = 'nuevo-id'; 
//  Agregar Atributo
enlace.setAttribute('href', '#');
//  Agregat Texto
enlace.textContent = 'Nuevo Enlace';
//  Agregar al HTML
document.querySelector('#secundaria').appendChild(enlace)
console.log(enlace);
*/
//  8 Reemplazando elementos con JavaScript
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   8 Reemplazando elementos con JavaScript   ----------------')
/*
//  Reemplazar elementos
let nuevoElemento = document.createElement('h2');
//  Agregar un Id
nuevoElemento.id = 'encabezado';
//  Agregar nuevo texto
nuevoElemento.appendChild(document.createTextNode('Los Mejores Cursos Nuevo Hijo'));
//  Elemento anterior (sera reemplazado)
let anterior = document.querySelector('#encabezado');
//  Elemento padre
let padre = anterior.parentElement;
//  Reemplazar
padre.replaceChild(nuevoElemento, anterior)
console.log(padre);
console.log(anterior);
console.log(nuevoElemento);
*/
//  9 Agregando y quitando clases y otros atributos
//  ----------------------------------------------------------------------------------------------------
console.log('----------------   9 Agregando y quitando clases y otros atributos   ----------------')
/*
let enlaces = document.querySelectorAll('.enlace')
let navegacion = document.querySelector('#principal')
console.log(Array.from(document.querySelectorAll('.enlace')).length)
navegacion.removeChild(enlaces[0])
enlaces[1].remove()
console.log(Array.from(document.querySelectorAll('.enlace')).length)
console.log(enlaces)
*/
let 
  primerLi = document.querySelector('.enlace'),
  elemnto;

elemento = primerLi.className;
console.log(elemento);
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);
elemento = primerLi.getAttribute('href');
console.log(elemento);
primerLi.setAttribute('href', 'http.google.com');
elemento = primerLi.getAttribute('href');
console.log(elemento);
primerLi.setAttribute('data-id', 20);
elemento = primerLi.getAttribute('data-id');
console.log(elemento);
elemento = primerLi.hasAttribute('data-id');
console.log(elemento);
elemento = primerLi.hasAttribute('data-algo');
console.log(elemento);
primerLi.removeAttribute('data-id');
elemento = primerLi.hasAttribute('data-id');
console.log(elemento);