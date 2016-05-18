/*function to get URL params*/
function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}
jQuery('#miniSurveyView1373').submit(function(){
	alert("Thank You for your valuable feedback!!");
});

jQuery(document).ready(
   function()
    {	
    	jQuery('.frame_slider').bxSlider({
        auto: true,
	speed: 600,
	pause: 5000,
    autoControls: false,
        
      
	autoHover:true,
	controls:false,
        easing: 'easeInQuart' 
});
/* Determine id from url */
var people_id = gup('id');

/* If id specified */
if (people_id != "") {
	/*Iterate through all li items of .people_block */
	jQuery(".people_block li").each(function(i){		
		if(jQuery(this).attr('id') == people_id)
		{
			jQuery(this).addClass('active');
			jQuery(this).find('img.photo_hover').show(); 
		}
		else
		{
			jQuery(this).removeClass('active');
		}
	});
}/* end if id specified */
else
{
	jQuery("#mahesh_baxi").addClass('active');
	jQuery("#mahesh_baxi").find('img.photo_hover').show(); 
}

jQuery('.frame_slider img').fadeIn(800);
		    	setTimeout("jQuery('.frame_slider .text_content').fadeIn(800)",1000);
	jQuery('.people_block li').click(
    		function(){
    			jQuery('.people_block li').removeClass('active');
    			jQuery(this).addClass('active');
    			jQuery(this).find('img.photo_hover').show();
    		}
        );
    	
    	jQuery('.people_more_link').live('click',
    		function()
    		{
    		
    			jQuery('.people_block li.active').append('<a href="#" class="back_link">back</a>');
    			jQuery('#pageid-leadership .inner_content_block').addClass('detailsinner');
    			jQuery('.people_block li').hide();
    			jQuery('.people_more_link').hide();
			jQuery('.people_block li.active').show().css({'position' : 'static'});;
			jQuery('.linked-in-profile img').css({'display':'block'});
    		    jQuery('.people_block li.active').find('.people_details').css({'overflow' : 'auto', 'height' : 'auto' , 'width' : 'auto', 'position' : 'static' });
    		}
        );
    	
    	jQuery('.back_link').live('click',
    		function()
    		{
    			jQuery('.back_link').remove();
    			jQuery('#pageid-leadership .inner_content_block').removeClass('detailsinner');
    			jQuery('.people_block li').show();
                        jQuery('.people_more_link').show();
    			jQuery('.people_block li.active').show().css({'position' : 'absolute'});;
				jQuery('.linked-in-profile img').css({'display':'none'});
    		    jQuery('.people_block li.active').find('.people_details').css({'overflow' : 'hidden', 'height' : '286px' , 'width' : '315px', 'position' : 'absolute' });
    		}
        );
		/* jQuery("a.call_to_action,.text_content a").hover(
		function () {
			jQuery(this).fadeTo("slow",1);
		}, 
		function () {
			jQuery(this).fadeTo("fast",0.8);
		});*/
});
