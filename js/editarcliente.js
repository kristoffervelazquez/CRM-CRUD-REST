import { obtenerCliente, editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js' 

(() => {

    // CAMPOS FORMULARIO
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        llenarDatos(idCliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    async function llenarDatos(idCliente) {
        try {
            const cliente = await obtenerCliente(idCliente)
            const { nombre, email, telefono, empresa, id } = cliente;
            
            nombreInput.value = nombre;
            emailInput.value = email;
            telefonoInput.value = telefono;
            empresaInput.value = empresa;
            idInput.value = id;

        } catch (error) {
            console.log(error);
        }
    }

    function validarCliente(e) {
        e.preventDefault();
        // Objeto con los valores del formulario;
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id : idInput.value
        }

        // Se valida que ningun campo este vacio
        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // Reescribe el objeto
        editarCliente(cliente);

    }



}) ();