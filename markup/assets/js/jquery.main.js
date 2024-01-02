var $ = jQuery.noConflict();
jQuery(function () {
	isElementExist(".slider", initSliderMobile);
	isElementExist("#modal-show", initModalShow);

	initTabs();
	initAccordion();
	initFancybox();
	// initModalShow();
});

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch (e) {
			console.log(e);
		}
	}
}

function initFancybox() {
	$.fancybox.defaults.touch = false;
}

function initModalShow() {
	$("#modal-show").fancybox().trigger('click');
}

function initAccordion() {
	jQuery('.accordion__item:not(.open) .accordion__expanded').hide();
	jQuery('.accordion__title').on('click', function () {
		var item = jQuery(this).closest('.accordion__item')[0];
		jQuery(this).closest('.accordion__item').toggleClass('open');
		if (jQuery(this).closest('.accordion__item').hasClass('open')) {
			jQuery(this).closest('.accordion__item').find('.accordion__expanded').stop().slideDown();
			jQuery(this).closest('.accordion__item').closest('.accordion').find('.accordion__item').each(function () {
				if (this != item) {
					jQuery(this).removeClass('open').find('.accordion__expanded').stop().slideUp()
				}
			});
		} else {
			jQuery(this).closest('.accordion__item').find('.accordion__expanded').stop().slideUp();
		}
	});
};

function initTabs() {
	jQuery('.tab-control__btn').on('click', function (e) {
		e.preventDefault();
		var ind = jQuery(this).closest('li').index();
		jQuery(this)
			.closest('.tab-control__item')
			.addClass('active')
			.siblings('.tab-control__item.active')
			.removeClass('active');
		jQuery(this)
			.closest('.tabset')
			.find('.tab-body .tab')
			.eq(ind)
			.addClass('active')
			.siblings('.tab.active')
			.removeClass('active');
		jQuery(window).resize();
	});

	if (window.location.href.split('#').length) {
		var activeTab = '#' + window.location.href.split('#')[1];
		jQuery('a[href="' + activeTab + '"]').trigger('click');
	}
};

function initSliderMobile() {
	const breakpoint = window.matchMedia('(min-width: 768px)');
	let mySwiper;
	function breakpointChecker() {

		if (breakpoint.matches) {

			if (mySwiper !== undefined) mySwiper.destroy(true, true);

			return;

		} else {
			return enableSwiper();

		}

	};
	function enableSwiper() {
		$(".slider").each(function () {
			const self = this;
			mySwiper = new Swiper(this, {
				slidesPerView: 'auto',
				loop: false,
				spaceBetween: 10,
			});
		});
	};
	breakpoint.addListener(breakpointChecker);

	breakpointChecker();
}