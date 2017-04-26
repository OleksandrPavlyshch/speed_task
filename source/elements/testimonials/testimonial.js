'use strict';
(function(){
	$(document).ready(function(){
		$("#testimonials_slider").owlCarousel({
			items: 1
			, center: true
			, loop: true
			, mouseDrag: false
			, nav: false
			, autoplay: true
		});
	});
})();