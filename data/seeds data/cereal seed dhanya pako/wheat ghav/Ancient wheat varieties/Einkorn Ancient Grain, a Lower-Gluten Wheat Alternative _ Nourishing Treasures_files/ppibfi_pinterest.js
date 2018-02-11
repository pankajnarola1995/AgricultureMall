jQuery(window).ready(function(jQuery) {
	jQuery('.pibfi_pinterest').each(function(index, element) {
		var	$this = jQuery(this),
				$theImage = jQuery($this.find('img:first-child')[0]),
				theImageWidth = $theImage.width(), //Gets the images width
				theImagePosition = $theImage.position(), //Gets the images position (left/right/center)
				$theButton = jQuery($this.find('.xc_pin')[0]);
				
		theImageWidth = $theImage.outerWidth(); // Width of image + padding + border
			
			//Center image = (ContentWidth / 2) + (ImageWidth /2) - ButtonWidth
		if ($theImage.hasClass('aligncenter')) {
			theContentCenter = ContentWidth/2;
			halfOfImgWidth = theImageWidth/2;
			newPosition = theContentCenter + halfOfImgWidth - $theButton.width();
		}
			
			//Right image = ContentWidth - ButtonWidth
		else if ($theImage.hasClass('alignright')) {
			newPosition = ContentWidth - $theButton.width(); 
		}
			
			//Left image and unknown alignment = ImageWidth - ButtonWidth
		else {
			//For imgs with captions / zero width
			if (theImageWidth == 0) newPosition = 0;
			
			//Known width / !zero width
			else newPosition = theImageWidth - $theButton.width();		
		}
		$theButton.css('left', newPosition);
		$theButton.css('display', 'block');
	});	
	
	//Trigger when user hovers over the Pin It button (little FX)
	jQuery('.xc_pin').hover
	(
		function(e){
			jQuery(this).prev().addClass('pibfi_pinterest_hover');
		},
		function(e){
			jQuery(this).prev().removeClass('pibfi_pinterest_hover');
		}
	);
	
});

// By kortchnoi
function pin_this(e, url) {
	jQuery(window).ready(function(jQuery) {
		window.open(url, 'pinterest', 'screenX=100,screenY=100,height=580,width=730');
		e.preventDefault();
		e.stopPropagation();
	});
//});
}