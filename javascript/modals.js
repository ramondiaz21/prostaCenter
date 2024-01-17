document.addEventListener('DOMContentLoaded', function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  var modalBody = document.getElementById('modalBody');

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

    // Abre el modal de doctores
    myModal.show();
  }

  // Captura el evento de cerrarse el modal
  myModal._element.addEventListener('hidden.bs.modal', function () {
    // Limpia el contenido del modal al cerrarse
    modalBody.innerHTML = '';
  });

  // Función para generar iconos de redes sociales
  function generateSocialIcons(socials) {
    return socials.map(social => `
      <a href="${social.link}" target="_blank">
        <i class="${social.icon}"></i>
      </a>
    `).join('');
  }

  // Función para establecer el médico activo y abrir el modal
  window.setActiveDoctor = function (doctorData) {
    openDoctorModal(doctorData);
  }
});
