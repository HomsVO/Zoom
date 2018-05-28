$(document).ready(function(){

var slider, slide; 
var current_slide = 0;

/* */	
function slider(slider) {
	slide = $(slider + ' ' + '.slide');/* наши слайды. 
	slider - передем параметром выбраный нами слайдер "#slider" 
	#slider .slide
	*/

	slide_num = slide.length-1;// кол. слайдов
/* ======== навигация слайдера ===========*/

	//создаем навигацию.
	var el;	
	el = '<img src="img/Left.png" class="slide_nav prev"></img>';
	el += '<img src="img/Right.png" class="slide_nav next"></img>';
	$(slider).append(el);
	//создаем навигацию.

	$(slider + ' ' + '.prev').on('click',function(){
		--current_slide; //уменьшаем при клике на ед.
		if (current_slide < 0) {current_slide = slide_num}/*если число меньше 0,то 
		присваиваем ему current_slide = slide_num т.е 3(в нашем случае)*/
		show_slide(slider,current_slide);
	});

	$(slider + ' ' + '.next').on('click',function(){
		++current_slide; //увеличиваем при клике на ед.
		if (current_slide > slide_num) {current_slide = 0}
		// если число больше slide_num т.е 3(в нашем случае) то присваиваем ему 0 	
		show_slide(slider,current_slide);
	});
	/* ======== навигация слайдера ===========*/
}
/* */
/* ========== функция для показа нужного слайда ============*/
function show_slide(slider,current_slide){
	slide = $(slider + ' ' + '.slide');/* наши слайды. 
	slider - передем параметром выбраный нами слайдер "#slider" */	
	slide.hide(300); //прячем все слайды

	slide.eq(current_slide).show(300); // показываем нужный нам слайд
}
/* =========== функция для показа нужного слайда =============*/

/*вызывам нашу функцию slider('#slider') и передаем параметром наш слайдер т.е  '#slider'
также можно сделать несколко слайдеров.
slider('#slider1');
slider('#slider2');
slider('#slider3');
slider('#slider3');
 */
slider('#slider');

});