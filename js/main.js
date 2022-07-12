const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];

class Producto {
  constructor(nombre, descripcion, precio, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    if (img == "") {
      this.img = "https://via.placeholder.com/150";
    } else {
      this.img = img;
    }
  }
}

function limpiarCampos() {
  inputNombre.value = "";
  inputDescripcion.value = "";
  inputPrecio.value = "";
  inputImg.value = "";
}
function crearProducto(nombre, descripcion, precio, img) {
  nombre = inputNombre.value;
  descripcion = inputDescripcion.value;
  precio = inputPrecio.value;
  img = inputImg.value;
  return new Producto(nombre, descripcion, precio, img);
}
function guardarProducto(producto) {
  return productos.push(producto);
}
console.log(productos);

function crearHTML() {
  let html;
  for (const producto of productos) {
    html = `
    <div class="col s4 m3">
    <div class="card">
  <div class="card-image">
    <img class="responsive-img" src=${producto.img} />
    <span class="card-title">${producto.nombre}</span>
  </div>
  <div class="card-content">
    <p>
      ${producto.descripcion}
    </p>
    <p>$${producto.precio}</p>
  </div>
  <div class="card-action">
    <input type= "button" class="btn" id=${producto.id} value="Comprar" >
  </div>
  </div>
  </div>`;

    //console.log(productos);
  }
  contenedor.innerHTML += html;
  limpiarCampos();
}
btnGuardar.addEventListener("click", () => {
  const product = crearProducto(nombre, descripcion, precio, img);
  guardarProducto(product);
  crearHTML();
});
