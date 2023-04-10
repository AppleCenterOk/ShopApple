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
  
