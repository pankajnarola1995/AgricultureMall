jQuery(document).ready(function(){
	var $_magicactionbox = jQuery('.magic-action-box');
	
	//add class "last" to .mab-main-copy p:last-child and .mab-secondary-copy p:last-child
	//jQuery('.magic-action-box .mab-main-copy p:last-child').addClass('last');
	$_magicactionbox.find('.mab-main-copy p:last-child').addClass('mablast');
	$_magicactionbox.find('.mab-secondary-copy p:last-child').addClass('mablast');
	
	//add class "last" to last .mab-field div in form
	$_magicactionbox.find('.mab-main-action-wrap form .mab-field:last').addClass('mablast');
});