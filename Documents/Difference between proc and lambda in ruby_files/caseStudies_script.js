$(document).ready(function(){
	$('.caseStudy').on('mouseenter', function(){
		$('.logoStudy', this).stop().animate({
			top : '3px',
		});
		
		$('.textStudy', this).stop().animate({
			opacity : '1',
			top : '50px',
		});
		
		$('.logoStudy', this).css({
			borderBottom : '#cccccc solid 1px'
		});

		$('.logoPDF', this).stop().animate({
			opacity : '1'
		});
	});
	
	$('.caseStudy').on('mouseleave', function(){
		$('.logoStudy', this).stop().animate({
			top : '50px'
		});
		
		$('.textStudy', this).stop().animate({
			opacity : '0',
			top : '0px'
		});
		
		$('.logoStudy', this).css({
			borderBottom : 'none'
		});

		$('.logoPDF', this).stop().animate({
			opacity : '0'
		});
	});
});