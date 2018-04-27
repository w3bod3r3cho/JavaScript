// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso)
}

// Funciones

// Funcion que agrega el curso al carrito
function comprarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        let curso = e.target.parentElement.parentElement;
        
        leerDatosCursor(curso);
    }
}

function leerDatosCursor(curso) {
    // console.log(curso);
    let infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    };

    insertarCarrito(infoCurso);
}

function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a ref="#" class="borrar-curso" data-id="${curso.id}">
                    X
                </a>
            </td>
        `;
    listaCursos.appendChild(row);
}