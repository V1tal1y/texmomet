$(document).ready(function(){
	
	$('.burger').click(function(){
		$('body').toggleClass('active');
	});
	/*function resize_wind(){
		$('body').width($(document).width());
		$('body').height($(document).height());
	}
	resize_wind();
	$(window).resize(function(){
		$('body').width($(window).width());
		$('body').height($(window).height());
	});*/
	if($('body').width()>980){
		$('.main').videoBG({
			zIndex:-1,
			ogv:'bg.ogv',
			webm:'bg.webm',
			poster:'img/main/main.jpg',
			opacity:1
		});
	}
	
})