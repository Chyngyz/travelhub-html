$(document).ready(function(){
	$('.js-th-burger').click(function(){
		$(this).toggleClass('th-nav-burger_open');
		$('.th-nav').toggleClass('th-nav_open');
	});

	$('.js-th-lang-switcher').click(function() {
		$(this).parent().toggleClass('th-lang-switcher_open');

		setTimeout(function() {
			$('.th-lang-switcher').removeClass('th-lang-switcher_open');
		}, 2500);
	});

	// Ind Tour Page
	$('#individual-tour-form').on('submit', function(e) {
		e.preventDefault();

        $.magnificPopup.open({
            items: {
                src: '#response-popup',
                type: 'inline'
            }
        }, 0);
	});

	$('.js-close-btn').click(function (e) {
		e.preventDefault();
		$.magnificPopup.close();
    });

	$('.js-th-custom-scrollbar').mCustomScrollbar({
		theme: 'minimal-dark',
        scrollInertia: 500
	});


	// User menu slide toggle
	$('.js-th-user-menu').click(function (e) {
		if (window.innerWidth < 998) {
			e.preventDefault();
			$('.th-agent-layout__sidebar').addClass('open');
		}
    });

	$('.js-th-agent-menu-overlay').click(function () {
        $('.th-agent-layout__sidebar').removeClass('open');
    });

	// Payment page
    $("#card-number").mask("9999 9999 9999 9999", {placeholder:"*"});
    $("#expiry").mask("99/9999");

    // Eula nav trigger
	$('.js-th-eula-nav').click(function () {
		$('.th-eula__nav').toggleClass('open');

		if ($('.th-eula__nav.open').length) {
			$(this).html('Hide &#x25B2;')
		} else {
            $(this).html('Choose document &#x25BC;')
		}
    })


    // Same height as
    jQuery.fn.sameHeightAs = function() {
        $('[data-height]').each(function (ind, element) {
            var targetElement = $(element).data('height');
            if ($(targetElement).length && window.innerWidth < 998) {
                var height = $(targetElement).outerHeight();
                $(element).css('height', height);
            }
        });
	}

	$(window).resize(function () {
        jQuery.fn.sameHeightAs();
    })
    jQuery.fn.sameHeightAs();


	// Add discount popup

	$('.js-th-add-discount').click(function (e) {
		e.preventDefault();

        $.magnificPopup.open({
            items: {
                src: '#discount-popup',
                type: 'inline'
            }
        }, 0);
    })



});
