jQuery(document).ready(function($){
	$.ajax({
			type: "GET",  
			url: '../wp-content/themes/piha/bsa-ads.php' ,  
			dataType:'html',
			success: function(data) {
				$('body').prepend(data);			
				$('#c-ads').click(function(){					
					$('#ads-wrapper').remove();
				});
			},
			error: function() {            
			}
	});

});
