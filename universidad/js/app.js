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
