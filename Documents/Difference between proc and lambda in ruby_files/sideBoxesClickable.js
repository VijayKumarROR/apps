$(function(){
	$('.block_case_studies').on('click', function(){
		$title = $('h2', this);
		if ($title.text() == '5 Reasons')
		{
			window.location.href="http://www.compassitesinc.com/join-us/5-reasons/";
		}
		else if ($title.text() == 'Why Compassites?')
		{
			window.location.href="http://www.compassitesinc.com/client-speaks/why-compassites/";
		}
		else if ($title.text() == 'CEO Speak')
		{
			window.location.href="http://www.compassitesinc.com/blogs/7-reasons-to-get-associated-with-compassites/";
		}
	});	
});