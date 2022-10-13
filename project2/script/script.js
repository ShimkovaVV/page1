$('.about_items > div').on('click', function () {
	$(this).children('.about-icon').toggleClass('about-rotate-icon');
	$(this).parent('.about_items').toggleClass('change-color');
	$(this).next('.about-text').slideToggle(300);

})

$('.features_item > div').on('click', function () {
	$(this).children('.features_pretitle').toggleClass('change-color-text');
	$(this).next('.features_text').slideToggle(300);
	$(this).children('svg').children('path').toggleClass('features_icon-blue');
})


$(function () {
	$('.features_item').click(function (e) {
		e.preventDefault();
		$(this).children('#line').toggleClass('line_none');
		$(this).children('#line-engage').toggleClass('line_none');
		$(this).children('#line-develop').toggleClass('line_none');

	});
});




//https:api.telegram.org/bottoken/getUpdates

$('#button').on('click', function (e) {
	e.preventDefault();

	let email = $('#email').val().trim();

	if (email == "") {
		$('#error-email').text('Enter your email')
		return false
	}
	$.ajax({
		url: 'ajax/telegram.php',
		type: 'POST',
		cache: false,
		data: { 'email': email },
		dataType: 'html',
		beforeSend: function () {
			$('#button').prop('disabled', true)
		},
		success: function () {
			$('.modal-overlay').fadeIn();
			$('#email').val('');
			$('#button').prop('disabled', false)
		}
	})
})