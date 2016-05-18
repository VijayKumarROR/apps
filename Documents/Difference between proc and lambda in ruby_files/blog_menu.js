$(document).ready(function(){
	$('.caseBlog').on('mouseenter', function(){
		$(this).stop().animate({boxShadow: '0 10 30px #ba99e5'},'fast');
		$('.title', this).stop().animate({color: '#956fc8'},'fast');
	});
	
	$('.caseBlog').on('mouseleave', function(){	
		$(this).stop().animate({boxShadow: 'none'},'fast');
		$('.title', this).stop().animate({color: 'black'},'fast');
	});
	
	$('.blogMenu li').on('mouseenter', function(){
		$('a', this).stop().animate({color: 'white'},'fast');
	});
	
	$('.blogMenu li').on('mouseleave', function(){
		$('a', this).stop().animate({color: 'black'},'fast');
	});	
	
	for(i=0; i<$('.caseBlog').size(); i=i+2)
	{
		if($('.caseBlog').eq(i).height() > $('.caseBlog').eq(i+1).height())
		{
			$('.caseBlog').eq(i+1).css({
				height : $('.caseBlog').eq(i).height()
			});
		}
		else
		{
			$('.caseBlog').eq(i).css({
				height : $('.caseBlog').eq(i+1).height()
			});
		}
	}
});

		