

   jQuery(document).ready(function() {
        //If Javascript is running, change css on product-description to display:block
        //then hide the div, ready to animate
        jQuery("div.pop-up").css({'display':'none'})

        jQuery("a.trigger").hover(
          function () {
            jQuery(this).prev().css({
              'display': 'block'
            });
          },
		  function () {
            jQuery(this).prev().css({
              'display': 'none'
            });
          }
          
        );
      });