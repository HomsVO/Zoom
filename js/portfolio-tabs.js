(function($) {

	$(function() {

		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			$('.active .portfolio__block').slice(0,6).show();
			$('#portfolio__show_more').on('click',function(e){
				e.preventDefault();
				$('.active .portfolio__block:hidden').slice(0,3).slideDown();
			})
		});

	});
})(jQuery);