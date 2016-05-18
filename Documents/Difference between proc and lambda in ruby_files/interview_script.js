$(document).ready(function(){
	$('.interviewsPage .caseLeft, .interviewsPage .caseRight').on('mouseenter', function(){
		$(this).stop().animate({
			boxShadow : '0px 5px 20px 0px #000000'
		}, 'fast');
		
		$('img', this).css({
			display : 'block'
		});
		
		$('img', this).stop().animate({
			opacity : '1',
			top : '60px',
		}, 'fast');
	});
	
	$('.interviewsPage .caseLeft, .interviewsPage .caseRight').on('mouseleave', function(){
		$(this).stop().animate({
			boxShadow : 'none',
		}, 'fast');
		
		
		$('img', this).stop().animate({
			opacity : '0',
			top : '0px',
		}, 'fast').hide(1);
	});
});