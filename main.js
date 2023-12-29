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