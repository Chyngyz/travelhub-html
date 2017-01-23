$(document).ready(function(){
	$('.th-js-burger').click(function(){
		$(this).toggleClass('th-nav-burger_open');
		$('.th-nav').toggleClass('th-nav_open');
	});

	$('.th-js-lang-switcher').click(function() {
		$(this).parent().toggleClass('th-lang-switcher_open');

		setTimeout(function() {
			$('.th-lang-switcher').removeClass('th-lang-switcher_open');
		}, 2500);
	});
});
