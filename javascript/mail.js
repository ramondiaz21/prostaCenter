$(document).ready(function() {
	mailer();
});

function mailer() {
	var form = $('#contact-form');
	var alert = $('.alert');

	$('.contact-submit').click(function() {
		$(form).addClass('submitted');
	});

	$(form).submit(function(e) {
		e.preventDefault();

		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response) {
			$(alert).removeClass('error');
			$(alert).addClass('success');

			$(alert).text(response);
			alertMessage();
			$(form).removeClass('submitted');

			$('#name').val('');
			$('#company').val('');
			$('#email').val('');
			$('#message').val('');
		}).fail(function(data) {
			$(alert).removeClass('success');
			$(alert).addClass('error');

			if (data.responseText !== '') {
				$(alert).text(data.responseText);
				alertMessage();
			} else {
				$(alert).text('Lo sentimos, ha ocurrido un error.');
				alertMessage();
			}
		});
	});
}