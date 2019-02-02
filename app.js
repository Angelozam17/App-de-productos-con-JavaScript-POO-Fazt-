//Variables
class Producto {
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }
}

//Function

// Events
document.getElementById('formulario')
    .addEventListener('submit', function(e){
        e.preventDefault();
        const $nombre = document.getElementById('nombre').value;
        const $precio = document.getElementById('precio').value;
        const $year = document.getElementById('year').value;

        const producto = new Producto();
        producto()
    });
