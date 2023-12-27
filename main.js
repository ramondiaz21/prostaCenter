document.addEventListener('DOMContentLoaded', function () {
  var accordionButton = document.querySelector('.accordion-button');
  var customIcon = document.querySelector('.custom-icon');

  accordionButton.addEventListener('click', function () {
    customIcon.classList.toggle('rotate-icon');
  });
});