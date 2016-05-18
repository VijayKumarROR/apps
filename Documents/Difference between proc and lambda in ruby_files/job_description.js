$(document).ready(function(){
	$('.case').on('mouseenter', function(){
		$('.jd-text', this).stop().animate({
			opacity : '1',
			left : '142'
		});
	});
	
	$('.case').on('mouseleave', function(){
		$('.jd-text', this).stop().animate({
			marginLeft : '0px',
			opacity : '0',
			left : '120'
		});
	});
	
	$('.dotNet').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/dot-net-developer";
	});
	
	$('.ios').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/ios-developer/";
	});
	
	$('.android').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/android-developer/";
	});
	
	$('.java').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/java-engineer";
	});
	
	$('.ruby').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/ruby-on-rails-developer";
	});
	
	$('.ui').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/front-end-engineer";
	});
	
	$('.php').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/php-engineer";
	});
	
	$('.osl').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/head-of-inside-sales";
	});
	
	$('.data').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/data-scientist";
	});
	
	$('.ux').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/user-experience-and-usability-expert/";
	});
	
	$('.hos').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/liferay-alfresco-developers";
	});
	
	$('.admin').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/hr-intern";
	});
	
	$('.test').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/test-engineer";
	});
	
	$('.flex').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/flex-developer";
	});
	
	$('.ba').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/business-analyst";
	});
	
	$('.marketing').on('click', function(){
		window.location.href="http://www.compassitesinc.com/join-us/head-of-sales";
	});
});