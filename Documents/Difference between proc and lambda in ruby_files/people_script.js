$(document).ready(function(){
	$('.casePeople').on('mouseenter', function(){
		$('.circlePeople', this).stop().animate({
			marginTop : '0px',
			opacity : '0.6'
		}, 'fast');
		$('.descriptionPeople', this).stop().animate({
			opacity : '1',
			top : '100px'
		}, 'fast');
	});
	
	$('.casePeople').on('mouseleave', function(){
		$('.circlePeople',this).stop().animate({
			marginTop : '20px',
			opacity : '1'
		}, 'fast');
		$('.descriptionPeople',this).stop().animate({
			opacity : '0',
			top : '80px'
		}, 'fast');
	});
});