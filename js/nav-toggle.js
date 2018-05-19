$(document).ready(function(){
	var btn = $('#nav-toogler');
	var nav_bar = $('.nav-bar');
	var flag = true;
	btn.on('click',function(){
		if(flag){
			nav_bar.hide(300);
			btn.css({
				background: 'linear-gradient(to bottom, #6dffc6, #3fd2ce)',
				color : '#fff',
			});
			flag = !flag;
		}else{
			nav_bar.show(300);
			btn.css({
				background: '#fff',
				color:'#000'
			});
			flag = !flag;
		}
		
	})
})