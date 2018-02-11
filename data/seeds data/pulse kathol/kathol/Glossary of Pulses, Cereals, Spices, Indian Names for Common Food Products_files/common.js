//$("img").lazyload();

$(document).ready(function(){
	set_sidebar_ht();
	$('.ham_menu').click(function(){
		if($('#top_nav_sm').width() != 0)
		{
			$('#top_nav_sm').animate({'width':"0"}, 'slow');
		}
		else
		{
			$('#top_nav_sm').animate({'width':"60%"}, 'slow');
		}
		$('body').toggleClass('freeze');
	});
	
	$( window ).resize(function(){
		set_sidebar_ht();
	});
	
	$('.fp').focusPoint();
	
	// Code for equal DIV height
	var wrap_ht;
	var new_ht = 0;
	$(".album_info_wrap").each(function(){
		wrap_ht = $(this).height();
		if(wrap_ht > new_ht)
		{
			new_ht = wrap_ht;
		}
	});
	
	$(".album_info_wrap").css("height", new_ht + 20);
});

function set_sidebar_ht()
{
	var head_height = $('.header').height();
	var window_height = $(window).height();
	$('#top_nav_sm').height(window_height - head_height - 20);
}