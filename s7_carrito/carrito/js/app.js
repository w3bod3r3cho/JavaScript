// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    // Eliminando un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar el documento mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
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

    guardarCursoLocalStorage(curso);
}

function eliminarCurso(e) {
    e.preventDefault();

    let curso, 
        cursoId;

    // borrar-curso se inserta dinamicamente con insertarCarrito()
    if (e.target.classList.contains('borrar-curso')) {
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
        e.target.parentElement.parentElement.remove();
    }

    // Eliminar curso del LocalStorage
    eliminarCursoLocalStorage(cursoId);
}

function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();
    
    // Iteramos comparando el Id del curso borrado con los del LS
    cursosLS.forEach(function(cursoLStorage, index) {
        if (cursoLStorage.id === curso) {
            cursosLS.splice(index, 1);
        }
    });

    // Añadimos el arrego actual a LocalStorage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

function vaciarCarrito() {
    // Forma lenta
    // listaCursos.innerHTML = '';
    // Forma rapida
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Vaciar LocalStorage;
    vaciarLocalStorage();

    return false;
}

function vaciarLocalStorage() {
    localStorage.clear();
}

function guardarCursoLocalStorage(curso) {
    let cursos;

    cursos = obtenerCursosLocalStorage();

    // El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage() {
    let cursosLS;

    // Comprobamos si hay algo en LocalStorage
    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS =JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

// Imprime los cursos de LocalStorage en el Carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(curso => {
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
    });
}