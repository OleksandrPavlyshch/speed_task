'use strict';

(function () {

	var $body = $('body')
		, scrollClass = "is-scroll";

	
	var scrollWatch = function(){

		if(window.pageYOffset > window.innerHeight/6){
			$body.addClass(scrollClass);
		}

		window.addEventListener('scroll', function () {
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if(scrolled > 30){
				$body.addClass(scrollClass);
				return;
			}
			$body.removeClass(scrollClass);
		});

	};

	//init
	scrollWatch();
})();