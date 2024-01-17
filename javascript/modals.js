document.addEventListener('DOMContentLoaded', function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  var modalBody = document.getElementById('modalBody');

  // Captura el evento de mostrarse el modal
  myModal._element.addEventListener('shown.bs.modal', function (event) {
    // Obtiene los datos del objeto doctorData
    var doctorData = modalBody.parentNode.doctorData;
    var name = doctorData.name;
    var position = doctorData.position;
    var content = doctorData.content;
    var socials = doctorData.socials;

    // Actualiza dinámicamente el contenido del modal
    modalBody.innerHTML = `
      <div class="photo-wrapper">
        <img src="images/doctors.svg" alt="">
      </div>
      <div class="info-wrapper">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">< Volver</button>
        <h5 class="sub-subtitle">${name}</h5>
        <h6 class="position-text">${position}</h6>
        <ul>
          ${content.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="social-icons-wrapper">
          ${generateSocialIcons(socials)}
        </div>
      </div>
    `;

    // Abre el modal
    myModal.show();
  });

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
});

// Función para establecer el médico activo
function setActiveDoctor(doctorData) {
  var modalBody = document.getElementById('modalBody');
  modalBody.parentNode.doctorData = doctorData;
}
