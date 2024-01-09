function submitForm() {
  // Obtener los valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Enviar datos al servidor (puedes usar fetch o XMLHttpRequest)
  fetch('/enviar-correo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
    // Puedes manejar la respuesta del servidor aquí
  })
  .catch(error => {
    console.error('Error al enviar el formulario:', error);
    // Puedes manejar errores aquí
  });
}