// 'use strict';
// (function () {

// 	var $scrollLinks = $('.logo, .header_menu-list_item-link')
// 		, $htmlBody = $('html, body')
// 		, $body = $('body')
// 		, topBlockId = '#hero'
// 		, menuShowClass = 'is-menu-show'
// 		, $header = $('header');

// 	$scrollLinks.on('click', function(event) {
// 		event.preventDefault();

// 		var $this = $(this)
// 			, link = $this.attr("href")
// 			, section = $body.find(link)
// 			, headerHeight = (link !== topBlockId) ? $header.height() : 0;

// 		if(section.length){
// 			$htmlBody.animate({scrollTop: section.offset().top - headerHeight}, 1000);
// 			console.log(menuShowClass, headerHeight);
// 			$body.removeClass(menuShowClass);
// 			return;
// 		}
// 	});
// })();