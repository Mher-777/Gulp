var defaults = {

	events: () => {
		$('.js-scroll').on('click', function() {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		});
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }