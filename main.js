document.addEventListener('DOMContentLoaded', function () {
  var accordionButton = document.querySelector('.accordion-button');
  var customIcon = document.querySelector('.custom-icon');

  accordionButton.addEventListener('click', function () {
    customIcon.classList.toggle('rotate-icon');
  });

  var navbarHeight = document.querySelector('.navbar').offsetHeight;

  // Calcula la altura disponible
  var availableHeight = window.innerHeight - navbarHeight;

  // Aplica la altura al elemento .navbar-collapse.collapsing
  document.querySelector('.navbar-collapse.collapsing').style.height = availableHeight + 'px';
  document.querySelector('.navbar-collapse.show').style.height = availableHeight + 'px';

  

  
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.navbar').addClass('altNav')
  }
  if ($(this).scrollTop() < 500) {
    $('.navbar').removeClass('altNav')
  }
});

// Obtén el elemento select y los elementos de las sucursales
const selectElement = document.getElementById("ubicacion");
const sucursalElements = document.querySelectorAll(".sucursal-wrapper");
const mapImages = document.querySelectorAll(".map-wrapper img");

// Muestra la información de Colima por defecto
document.getElementById("colima-address").style.display = "flex";
document.getElementById("colima-map").style.display = "block";

// Agrega un event listener para el cambio en el select
selectElement.addEventListener("change", function() {
  // Oculta todas las sucursales y las imágenes
  sucursalElements.forEach(sucursal => {
    sucursal.style.display = "none";
  });
  mapImages.forEach(image => {
    image.style.display = "none";
  });

  // Muestra la sucursal correspondiente al valor seleccionado y la imagen correspondiente
  const selectedValue = selectElement.value;
  const selectedSucursal = document.getElementById(`${selectedValue}-address`);
  const selectedImage = document.querySelector(`.map-wrapper .${selectedValue}`);
  if (selectedSucursal && selectedImage) {
    selectedSucursal.style.display = "flex";
    selectedImage.style.display = "block";
  }
});