$(function(){
	$('.active .portfolio__block').slice(0,6).show();
	$('.show-more__btn').each(function(){
		$(this).on('click',function(e){
		e.preventDefault();
		$('.active .portfolio__block:hidden').slice(0,3).slideDown();
	});
})
})