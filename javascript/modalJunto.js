document.addEventListener('DOMContentLoaded', function () {
  // Obtén una referencia al modal y su cuerpo
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  var modalBody = document.getElementById('modalBody');

  // Verifica si el ancho de la pantalla es menor o igual a 991.98px
  if (window.innerWidth <= 991.98) {
    $('.card-servicios').on('click', function (event) {
      event.preventDefault();

      var servicioData = {
        name: $(this).find('.card-servicios-title').text(),
        position: $(this).find('.card-subtitle').text(),
        content: [$(this).find('.card-text').text()],
        socials: []
      };

      // Actualiza el contenido del modal de servicios
      modalBody.innerHTML = `
        <button type="button" class="only-mobile btn btn-secondary" data-bs-dismiss="modal">< Volver</button>
        <div class="photo-wrapper-general">
          <div class="photo-wrapper">
            <img src="images/doctors.svg" alt="">
          </div>
        </div>
        <div class="info-wrapper">
          <button type="button" class="only-desktop" data-bs-dismiss="modal">< Volver</button>
          <h5 class="sub-subtitle">${servicioData.position}</h5>
          <h6 class="position-text">${servicioData.content}</h6>
        </div>
      `;

      // Cierra cualquier instancia previa del modal
      myModal.hide();

      // Abre el modal
      myModal.show();
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
      $('#modalBody').empty();
    });
  }

  // Captura el evento de cerrarse el modal
  myModal._element.addEventListener('hidden.bs.modal', function () {
    // Limpia el contenido del modal al cerrarse
    modalBody.innerHTML = '';
  });

  // Función para abrir el modal de doctores
  function openDoctorModal(doctorData) {
    // Actualiza el contenido del modal de doctores
    modalBody.innerHTML = `
      <button type="button" class="only-mobile btn btn-secondary" data-bs-dismiss="modal">< Volver</button>
      <div class="photo-wrapper-general">
        <div class="photo-wrapper">
          <img src="images/doctors.svg" alt="">
        </div>
      </div>
      <div class="info-wrapper">
        <button type="button" class="only-desktop" data-bs-dismiss="modal">< Volver</button>
        <h5 class="sub-subtitle">${doctorData.name}</h5>
        <h6 class="position-text">${doctorData.position}</h6>
        <ul>
          ${doctorData.content.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="social-icons-wrapper">
          ${generateSocialIcons(doctorData.socials)}
        </div>
      </div>
    `;

    // Cierra cualquier instancia previa del modal
    myModal.hide();

    // Abre el modal de doctores
    myModal.show();
  }

  // Función para establecer el médico activo y abrir el modal
  window.setActiveDoctor = function (doctorData) {
    openDoctorModal(doctorData);
  }

  // Función para generar iconos de redes sociales
  function generateSocialIcons(socials) {
    return socials.map(social => `
      <a href="${social.link}" target="_blank">
        <i class="${social.icon}"></i>
      </a>
    `).join('');
  }
});