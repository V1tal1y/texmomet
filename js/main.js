$(document).ready(function(){
	
	$('.burger').click(function(){
		$('nav ul').toggleClass('active');
	});
	$('.nav li i').click(function(){
		$(this).parent().toggleClass('active');
	});
	
})