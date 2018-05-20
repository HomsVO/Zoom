$(document).ready(function(){
	var btn = $('#nav-toggler');
	var nav_bar = $('.nav-bar');
	btn.on('click',function(){
			nav_bar.toggleClass('nav-bar--mobile');
			btn.toggleClass('nav-toggler--active');
	})

})
