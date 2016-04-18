$(document).ready(function() {
	

	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		var emailAddress = $('input[name="emailAddress"]').val();
		
		//1. requirement one
		if (username === '') {
			$('#errorMessage')
				.html('Please enter a username')
				.removeClass('hide');


		//2. requirement two		
		} else if (password.length < 8) {
			$('#errorMessage')	
				.html('please enter a password that is at least 8 characters')
				.removeClass('hide');
				
		} else if (emailAddress.indexOf('@') === -1) {
			$('#errorMessage')
				.html('Please provide a valid email address')
				.removeClass('hide');
		
		} else {
			$('#errorMessage').addClass('hide');

			$('#successMessage')
				.html('Bon Voyage!')
				.removeClass('hide');

		}
	}		
	

});

