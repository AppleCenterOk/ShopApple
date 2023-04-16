const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const botonDesplegar = document.getElementById('desplegar-productos');
  const productosExtra = document.querySelectorAll('.producto.hidden');
  
  botonDesplegar.addEventListener('click', function() {
    productosExtra.forEach((producto, index) => {
      setTimeout(function() {
        producto.classList.toggle('hidden');
      }, 100 * index);
    });
  
    botonDesplegar.textContent = botonDesplegar.textContent === 'Desplegar' ? 'Ocultar' : 'Desplegar';
  });

  $(document).ready(function() {
    $('.producto').click(function() {
      var idProducto = $(this).attr('id');
      window.location.href = 'detalle-producto.html?id=' + idProducto;
    });
  });
  
  // Simulamos obtener los datos del producto de una API
const productoDelMomento = {
  nombre: 'Nombre del producto',
  descripcion: 'Descripción breve del producto',
  precio: 99.99,
  imagen: 'https://via.placeholder.com/300x300.png',
  urlCompra: 'https://www.instagram.com/applecenter.ok/'
};

// Actualizamos la información del producto en la página
const nombreProducto = document.querySelector('.product-card h3');
const descripcionProducto = document.querySelector('.product-card .description');
const precioProducto = document.querySelector('.product-card .price');
const imagenProducto = document.querySelector('.product-card img');
const enlaceCompra = document.querySelector('.product-card .btn');

nombreProducto.textContent = productoDelMomento.nombre;
descripcionProducto.textContent = productoDelMomento.descripcion;
precioProducto.textContent = `$${productoDelMomento.precio}`;
imagenProducto.src = productoDelMomento.imagen;
enlaceCompra.href = productoDelMomento.urlCompra;
