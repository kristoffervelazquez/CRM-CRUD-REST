const url = 'http://localhost:4000/clientes';

// Añadir un unn nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        //Spinner
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtener todos los clientes
export const listarClientes = async () => {
    try {
        //Spinner
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Eliminar un cliente 
export const eliminarCliente = async id => {
    try {
        //Spinner
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Editar cliente 
// Obtiene los datos por ID
export const obtenerCliente = async id => {
    try {
        //Spinner
        const resultado = await fetch(`${url}/${id}`);
        const cliente = resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

// Actualizar el cliente

export const editarCliente = async cliente => {
    try {
        //Spinner
        const resultado = await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
