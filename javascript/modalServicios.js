document.addEventListener('DOMContentLoaded', function () {
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

      $('#modalBody').html(`
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
      `);

      // Oculta el modal anterior
      $('#exampleModal').modal('hide');

      // Abre un nuevo modal
      var newModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      newModal.show();
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
      $('#modalBody').empty();
    });
  }
});
