$(document).ready(function () {
  // Accordion
  $('.accordion-button').click(function () {
    $('.custom-icon').toggleClass('rotate-icon');
  });

  // Navbar calculations
  var navbarHeight = $('.navbar').height();
  var availableHeight = window.innerHeight - navbarHeight;

  $('.navbar-collapse.collapsing, .navbar-collapse.show').css('height', availableHeight + 'px');

  // Alert message
  function alertMessage() {
    var alert = $('.alert');
    $(alert).slideToggle(600, 'easeInOutCirc', function () {
      $(this).delay(5000).slideToggle(600, 'easeInOutCirc');
    });
  }

  // Change navbar class on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.navbar').addClass('altNav');
    } else {
      $('.navbar').removeClass('altNav');
    }
  });

  // Sucursal selection
  const selectElement = $("#ubicacion");
  const sucursalElements = $(".sucursal-wrapper");
  const mapImages = $(".map-wrapper img");

  $("#colima-address").css("display", "flex");
  $("#colima-map").css("display", "block");

  selectElement.change(function () {
    sucursalElements.css("display", "none");
    mapImages.css("display", "none");

    const selectedValue = selectElement.val();
    const selectedSucursal = $(`#${selectedValue}-address`);
    const selectedImage = $(`.map-wrapper .${selectedValue}`);
    
    if (selectedSucursal.length && selectedImage.length) {
      selectedSucursal.css("display", "flex");
      selectedImage.css("display", "block");
    }
  });

  // Focus styles for select
  var selectElementContacto = $('#ubicacion');

  selectElementContacto.on('change', function () {
    $(this).blur();
  });

  selectElementContacto.on('blur', function () {
    $(this).removeClass('focus-visible');
  });

  selectElementContacto.on('focus', function () {
    $(this).addClass('focus-visible');
  });

  // Smooth scrolling
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 0);
    }
  });

  // Ver más / Ver menos
  const elementosIniciales = 4;
  const serviciosContainer = $('#serviciosContainer');
  const servicios = serviciosContainer.children();
  servicios.slice(elementosIniciales).css('display', 'none');

  $('#verMasBtn').click(function () {
    servicios.slice(elementosIniciales).slideToggle();
    $(this).text($(this).text() === 'Ver más' ? 'Ver menos' : 'Ver más');
  });

   // Obtén todos los enlaces dentro de la barra de navegación móvil
   var mobileNavLinks = document.querySelectorAll('.only-mobile .navbar-nav a');

   // Agrega un evento de clic a cada enlace
   mobileNavLinks.forEach(function (link) {
     link.addEventListener('click', function () {
       // Cierra el menú desplegable al hacer clic en un enlace
       var mobileNavbar = document.querySelector('.only-mobile .navbar-collapse');
       if (mobileNavbar.classList.contains('show')) {
         mobileNavbar.classList.remove('show');
       }
     });
   });
});
