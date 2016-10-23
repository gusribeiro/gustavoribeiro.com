$(function() {
	var siteHeader = $('header.site-header');
	var mainTitle = $('h1.main-title');
	var range = $('header.main-header').outerHeight() / 1.5;

	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		var calcPos = (scrollTop / range);
		var calcNeg = 1 - (scrollTop / range);

		siteHeader.css({'backgroundColor': 'rgba(0, 0, 0, ' + calcPos + ')'});
		mainTitle.css({'opacity': calcNeg});

		if (calcPos > 1) {
			siteHeader.css({'backgroundColor': 'rgba(0, 0, 0, 1)'});
			mainTitle.css({'opacity': 0});
		} else if (calcPos < 0) {
			siteHeader.css({'backgroundColor': 'rgba(0, 0, 0, 0)'});
			mainTitle.css({'opacity': 1});
		}
	});
});