/*

Envy by WeTheme (http://www.wetheme.com)
Custom JS

Last Update:
2nd December 2014
- Added Sidr code

*/

// Mobile Browser Menu

$("select#mobile-menu").change(function() {
  window.location = $(this).find("option:selected").val();
});

// Zoom!

$(document).ready(function(){
  $('.featured-image-div').zoom();		
  $('a.image-swap').click(function() {
    var newImage = $(this).attr('href');
    $( '.featured-image-div img' ).attr({ src: newImage }); 
    return false;
  });
  
});

// FancyBox

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".fancybox-instagram").fancybox({
		padding : 0
	});
});

// Sidr

$(document).ready(function() {
	$('.slide-menu').sidr({
		side: 'right'
	});
});

$('#responsive-menu-button').sidr({
	name: 'sidr-mobile',
	source: '#mobile-navigation'
}); 

// Select or Die
