//Variables
class Producto {
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }
}

class UI{
    agregarTarea(producto){
        const $listaProductos = document.getElementById('lista-productos');

        const elemento_div = document.createElement('div');
        elemento_div.className = 'card mb-3'

        const elemento2_div = document.createElement('div');
        elemento2_div.className = 'card-body';
        elemento2_div.innerHTML = `
        <h6 class="lead d-inline-block"><strong>Nombre del producto: </strong>${producto.nombre}</h6>
        <h6 class="lead d-inline-block"><strong>Precio: </strong>$${producto.precio}</h6>
        <h6 class="lead d-inline-block"><strong>Año: </strong>${producto.year}</h6>`

        const elemento_button = document.createElement('button');
        elemento_button.className = 'btn btn-outline-danger btn-sm';
        elemento_button.innerText = 'Eliminar';

        $listaProductos.insertBefore(elemento_div, $listaProductos.firstElementChild);
        elemento_div.appendChild(elemento2_div);
        elemento_div.appendChild(elemento_button);
        this.mostrarMensaje('Su producto fue agregado correctamente', 'success')
    }

    eliminarTarea(evento){
        if(evento.target.tagName == 'BUTTON'){
            evento.target.offsetParent.remove();
            this.mostrarMensaje('Se eliminó una tarea', 'danger');
        }
    }

    mostrarMensaje(msj, clase){
        const $contenerdor = document.querySelector('.container');
        const $app = document.getElementById('app');

        const elemento_div = document.createElement('div');
        elemento_div.className = `alert alert-${clase} alert-dismissible fade show mt-5`;
        elemento_div.innerText = msj;

        const elemento_button = document.createElement('button');
        elemento_button.className = 'close';
        elemento_button.setAttribute('data-dismiss', 'alert');
        
        const elemento_span = document.createElement('span')
        elemento_span.innerHTML = '&times;';
        
        $contenerdor.insertBefore(elemento_div, $app);
        elemento_div.appendChild(elemento_button);
        elemento_button.appendChild(elemento_span);

        setTimeout(function(){
            elemento_div.remove();
        }, 3000);
    }

}
//Function
const enviarDatos = function(e){
    e.preventDefault();
    const $nombre = document.getElementById('nombre').value;
    const $precio = document.getElementById('precio').value;
    const $year = document.getElementById('year').value;

    const producto = new Producto($nombre, $precio, $year);

    const ui = new UI();

    if ($nombre === '' || $precio === '' || $year === '') {
        ui.mostrarMensaje('Completa todos los campos', 'warning');
    }else{
        ui.agregarTarea(producto);
        document.getElementById('formulario').reset();

    }
};

// Events
document.getElementById('formulario')
    .addEventListener('submit', enviarDatos);


document.getElementById('lista-productos')
    .addEventListener('click', function(evento){
        const ui = new UI();
        ui.eliminarTarea(evento);
    }); 