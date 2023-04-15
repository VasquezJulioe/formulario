const btnEnviar = document.getElementById('enviar');
const btnLimpiar = document.getElementById('limpiar')
const nombre = document.getElementById('name');
const correo = document.getElementById('email');
const asunto = document.getElementById('label');
const mensaje = document.getElementById('message');
var falta = true;
btnEnviar.addEventListener('click', function () {
    if (nombre.value == '') {
        alert('Ingrese el nombre');
    } else if (correo.value == '') {
        alert('Ingrese el correo');
    } else if (asunto.value == '') {
        alert('Ingrese el asunto');
    } else if (mensaje.value == '') {
        alert('Ingrese el mensaje');
    } else {
        falta = false;
    }
    if (!falta) {
        console.log(`Nombre: ${nombre.value}`);
        console.log(`Correo: ${correo.value}`);
        console.log(`Asunto: ${asunto.value}`);
        console.log(`Mensaje: ${mensaje.value}`);
    }
})

btnLimpiar.addEventListener('click', function () {
    nombre.value = '';
    correo.value = '';
    asunto.value = '';
    mensaje.value = '';
})

