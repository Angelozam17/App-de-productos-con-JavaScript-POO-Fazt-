class Producto {
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    };
};

class UI {
    agregarProducto(producto){
        const $listaProductos = document.getElementById('lista-productos');
        const elemento_div = document.createElement('div');
        elemento_div.innerHTML = `
            <div class="card text-center mb-3">
                <div class="card-body p-3">
                    <strong>Nombre del producto</strong>: ${producto.nombre}
                    <strong>Precio</strong>: $${producto.precio}
                    <strong>Año</strong>: ${producto.year}
                </div>
                <button class="btn btn-outline-danger btn-sm justify-content-end" name="eliminar">Eliminar</button>
            </div>`;

        $listaProductos.appendChild(elemento_div);
        this.resetFormulario();
    }

    resetFormulario(){
        document.getElementById('formulario').reset();
    }

    eliminarProducto(elemento){
        if (elemento.name === 'eliminar' ) {
            const div_principal = elemento.parentElement.parentElement;
            div_principal.remove();
            this.mostrarMsg('Se ha eliminado un producto.', 'warning')
            console.log(div_principal);
        };
    };

    mostrarMsg(msg, cssClass){
        const $contenedor = document.querySelector('.container');
        const $app = document.querySelector('#app');
        const elemento_div = document.createElement('div');
        elemento_div.className = `mt-5 mb-0 alert alert-${cssClass}`;
        elemento_div.appendChild(document.createTextNode(msg));
        $contenedor.insertBefore(elemento_div, $app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 200);
    };
};

//EVENTS

document.getElementById('formulario')
    .addEventListener('submit', function(){
        const $nombre = document.getElementById('nombre').value;
        const $precio = document.getElementById('precio').value;
        const $year = document.getElementById('year').value;
        const producto = new Producto($nombre, $precio, $year);
        const ui = new UI();

        if ($nombre === '' || $precio === '' || $year === '') {
            ui.mostrarMsg('Completa todos los campos', 'danger')
        }else {
            ui.agregarProducto(producto);
            ui.mostrarMsg('El producto fue agregado correctamente.', 'success');
        };      
});

document.getElementById('lista-productos')
    .addEventListener('click', function(event){
        const ui = new UI();
        ui.eliminarProducto(event.target)
    });