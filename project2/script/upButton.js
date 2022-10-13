$(window).on('scroll', function () {
	if ($(this).scrollTop() > 500) {
		$('#up').fadeIn()
	} else {
		$('#up').fadeOut()
	}
})

$('#up').on('click', function () {
	$('html,body').animate({ scrollTop: 0 }, 500)
})

$('#about-link').on('click', function (e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $('#about').offset().top
	}, 1000)
	document.getElementById('checkbox').checked = false
})

$('#about-link-stories').on('click', function (e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $('#choice').offset().top
	}, 500)
	document.getElementById('checkbox').checked = false
})