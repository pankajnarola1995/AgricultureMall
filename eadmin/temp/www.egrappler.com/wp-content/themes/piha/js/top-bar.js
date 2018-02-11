jQuery(document).ready(function($){
	$.ajax({
			type: "GET",  
			url: '../wp-content/themes/piha/top-bar.php' ,  
			dataType:'html',
			success: function(data) {
				$('body').prepend(data);
				//also assign the back to post url				
				$('#header-menu-wrap #back-to-post').attr('href', $('body').attr('data-post'));	
			},
			error: function() {            
			}
	});

});
