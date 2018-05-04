// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// Event Listener
eventListeners();

function eventListeners() {
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton enviar en el submit
    // btnEnviar.addEventListener('click', enviarEmail);
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton reset
    resetBtn.addEventListener('click', reserFormulario);
}

// Funciones

function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    validarLongitud(this);

    // Validar el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if (email.value != '' && asunto.value != '' && mensaje.value != '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;

    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// Cuando se envia el correo
function enviarEmail(e) {
    // Spinner al presionar enviar
    const spínnerGift = document.querySelector('#spinner');
    spínnerGift.style.display = 'block';

    // Gift que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar el spinner y mostrar gift enviado
    setTimeout(() => {
        spínnerGift.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);  
    }, 3000);

    e.preventDefault();
}

function reserFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}