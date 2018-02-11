// JavaScript Document
jQuery(document).ready( function() {	
	
	$container = jQuery('#wmle_container');		 // START MASONRY
	$container.imagesLoaded(function(){
		$container.masonry();
	})
								 
	jQuery(".wmle_loadmore_btn").click( function(e) {
		e.preventDefault();
		url 				= jQuery(this).attr("href");
		containerDivId  	= jQuery(this).attr("rel")
		pageNumber 			= jQuery("#"+containerDivId).attr("data-page");
		randSeed 			= jQuery("#"+containerDivId).attr("data-seed");
		jQuery("#"+containerDivId).attr("data-load-status",'no');
		if (pageNumber == null){
		  pageNumber = 1;
		}
		url = url + '&pageNumber=' + pageNumber + '&randSeed=' + randSeed ;
		jQuery.ajax({
			dataType : "json",
			url : url,
			beforeSend : function(){
				jQuery("img.loading_icon").show();
				jQuery('.wmle_loadmore_btn').html('Loading...');
			},
			success: function(response) {
				if(response.status == "ok") {
					var newPageNumber = parseInt(pageNumber) + 1;
					$boxes = jQuery(response.elements);
					$container.append( $boxes ).imagesLoaded( function(){
						jQuery('.wmle_item_holder').show(); 
						$container.masonry( 'appended', $boxes);
						jQuery("img.loading_icon").hide();
						jQuery("#"+containerDivId).attr("data-page", newPageNumber);
						jQuery('.wmle_loadmore_btn').html('Load More');
						jQuery("#"+containerDivId).attr("data-load-status",'ready');
						if (parseInt(newPageNumber) > parseInt(response.max_pages)){ // Hide load more btn if no more pages.
							jQuery('.wmle_loadmore').remove();
						}
					});
					
				}
				else {
				   jQuery('.wmle_loadmore_btn').html(response.message);
				}
			}
		})
	})   
})