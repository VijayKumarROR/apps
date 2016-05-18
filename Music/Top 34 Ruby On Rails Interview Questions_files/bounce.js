/*
 *  Name: Pop Up Script - OuiBounce
 * Purpose: displays a pop up to site users & let them enter their email to subscribe for services
   
 *  Algorithm: 
 *  Step 1: Displays a pop up.
 *  Step 2: On closing it without entering email details, tracking sheet will be update with no. of times in popup dispalyed in(public_html/customization/popup/track.scv)
 *  Step 3: on submitting pop up with email details tracking sheet it will update, data will be sent email,times and date in store in generate both csv files (public_html4/customization/popup/subscription.csv)      
 *  Step 4: on submission of the subscription popup form, data will be sent to subscription-list.php through ajax and generate csv file (public_html/customization/popup/subscription-list.php)
   
*   Date Created: 06/02/2015
*/
      var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {      
	        timer: 0,         //Set a min time before Ouibounce fires
	        sensitivity: 10,  //The higher value, the more sensitive, and the more quickly the event will fire. Defaults to 20.
	        cookieExpire: 30, // disable ouibounce sitewide for 30 days
	        sitewide: true,
	        callback: function() { console.log('ouibounce fired!'); }
      });
  
     
      	
	/* When Pop up fires, it should disappear on "X" close button click event */      			
			     
       jQuery('#ouibounce-modal .modal-title .left .blue img').on('click', function() {        	
	       jQuery('#ouibounce-modal').fadeOut('slow');  
	      var sub= 'Closed';
	      			
			     	 jQuery.ajax({
			     	 	
	       				 url: '/customization/popup/subscription-list.php?sub='+sub,
	        			type: 'post',       				
	       				 success:function(d){
	       				 console.log('Closed');
	       				 }
	    				});	
       });
	
     	
     	 /*
       	   *	When Pop Up fires & user enter subscription form details, then after clicking on Subscribe Me! button
       	   *	users email should be submitted to CSV file & user should see the thank you message.
     	   *    After thank you message pop up will be disable for 30days
       */	
	jQuery('#ouibounce-modal #subform #sub ').on('click', function(e) { 
		var emailVal = jQuery('#ouibounce-modal #subform #email').val();
		
		if(emailVal===''){	
		jQuery('#ouibounce-modal #subform span').text('Please, Enter Email ID!');	
		jQuery('#ouibounce-modal #subform span').fadeIn('slow');
		jQuery('#ouibounce-modal #subform span').delay( 1000 ).fadeOut('slow');	
		}  else{
			var emailCheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	           	 if( !emailCheck.test( emailVal ) ) {
		           	 jQuery('#ouibounce-modal #subform span').text('Please, Enter valid Email ID!');
		                jQuery('#ouibounce-modal #subform span').fadeIn('slow');
				jQuery('#ouibounce-modal #subform span').delay( 1000 ).fadeOut('slow');
	                } else {
		                jQuery('#ouibounce-modal #subform').css('display','none');
		     		 jQuery('#ouibounce-modal #tyform').fadeIn('slow');
			     	 jQuery('#ouibounce-modal').delay( 800 ).fadeOut('slow');
			     	var sub= 'Subscribed';	
		
		/*
		  *    When Pop Up fires & user enter subscription form details, then after clicking on Subscribe Me! button
     	          *    users email should be submitted with ajax through subscription-list.php & saved in subscriptions.csv
     	          *    CSV File can download /customization/popup/subscription.csv   	
		*/	     	
			     	 jQuery.ajax({
			     	 
	       				 url: '/customization/popup/subscription-list.php?email='+emailVal+'&sub='+sub,
	        			type: 'post',       				
	       				 success:function(d){
	       				 console.log('Data Submitted!');
	       				 }
	    				});
	  			}
			}
	});
      
      jQuery('#ouibounce-modal .modal').on('click', function(e) {
        e.stopPropagation();
      });
      
      
   

    
    
   
    
    
   
    