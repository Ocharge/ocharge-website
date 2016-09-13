$('.nav').hide();
$(document).ready(function() {
	function showNav() {
		if ($(this).scrollTop() > 100) {
			$('.nav-home').fadeOut(500);
			$('.nav').fadeIn(500);
		}
		else {
			$('.nav').fadeOut(500);
			$('.nav-home').fadeIn(500);
		}
	}
	$(window).scroll(showNav);

	showNav();
});