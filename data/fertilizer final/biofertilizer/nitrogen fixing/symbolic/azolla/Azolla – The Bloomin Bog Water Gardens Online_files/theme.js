/** 
 * Megatronic Theme JS
 */


/** 
 * Global 
 * - Init dropdown menus
 */
$( function(){
  initDropDown();

  // Adjust the width of the main menu depending on how much space the customer controls on the right takes up
  $('#nav').width( $('#top-menu').width() - $('#customer-controls').width() - 30 );

  // Adjust the height of the customer controls links, just in case the nav goes on two lines
  var padding = parseInt($('#customer-controls li:first').css('paddingTop').split('px')[0]) + parseInt($('#customer-controls li:first').css('paddingBottom').split('px')[0]);
  $('#customer-controls li').height( $('#top-menu').height() - padding );
});


/** 
 * Homepage 
 * - init carousel
 */
if( $('.template-index:first').length > 0 ){
  
  $("#carousel").scrollable({
    circular: true
  }).navigator({
    navi: "#carousel-slide-menu",
    naviItem: 'li'
  });

  if ( $("#carousel").find('.items li[class!=cloned]').length > 1 ) {
    window.api = $("#carousel").autoscroll({
      autoplay: true,
      api: true,
      interval: 7500
    })
    $("#carousel").hover(
        function() { api.pause(); },
        function() { api.play(); }
    );
  }

  $('#carousel-thumbs li:first a').addClass('active');
  
}


/** 
 * Product 
 * - init zoomer
 * - ajaxy cart stuff
 */
if( $('.template-product:first').length > 0 ){
  
  $(window).load( function(){
    $('#product-thumbs a').click( function(){ return false; });
    $('#add-to-cart').click( addToCart ); 
  });
  
  function addToCart(e){
    $.ajax({ 
      type: 'POST',
      url: '/cart/add.js',
      async: false, 
      cache: false, 
      data: $(this).parent().serialize(),
      dataType: 'json',
      error: addToCartFail,
      success: addToCartSuccess  
    });
    e.preventDefault();
  }
  
  function addToCartSuccess (jqXHR, textStatus, errorThrown){
    $.ajax({ 
      type: 'GET',
      url: '/cart.js',
      async: false, 
      cache: false, 
      dataType: 'json',
      success: updateCartDesc  
    });         
    $('#add-to-cart-msg').hide().addClass('success').html('Item added to cart! <a href="/cart" title="view cart">View Cart</a>.').fadeIn();   
    if(typeof(upsell_offer) === "function"){ upsell_offer(); }
  }
  
  function addToCartFail(jqXHR, textStatus, errorThrown){
    $('#add-to-cart-msg').hide().addClass('error').html(jqXHR.description).fadeIn();
  }
  
  function updateCartDesc(data){
    var $cartLinkText = $('#top-cartlink-text');
    
    switch(data.item_count){
      case 0: 
        $cartLinkText.text('Your cart is empty');
        break;
      case 1:
        $cartLinkText.text('1 item');
        break;
      default:
        $cartLinkText.text(data.item_count+' items');
        break;
    }
  }
  
} // end Product Pg



/** 
 * User Accounts > Login
 * - open Facebox to open the forgot a password form
 */
if( $('.template-customers-login:first').length > 0 ){
  
  $('#forgot-password-link').click( function(e){
    $.facebox({ div: '#recover-password' });
    $('.cancel-forgot-password-link').live('click', closeFacebox);
    $('.submit-forgot-password-link').live('click', closeFacebox);
    e.preventDefault();
  });
  
}



/** 
 * Cart
 * - expand add a note to order
 */
if( $('.template-cart:first').length > 0 ){
  $('#note').hide();
  $('#checkout-addnote label:first').toggle( function(){ $('#note').show(); }, function(){ $('#note').hide(); } );
}



/** 
 * Contact Form 
 */
$('.contact-form').submit( function(e){
  
  var emailField = $(this).find('.email:first');
  var errorMsg = '<label class="error-msg" for="'+emailField.attr('id')+'">Please enter a valid email.</label>';
  
  if( !validEmail(emailField.val()) === true ){   
    if( emailField.parent().is('li') ){
      emailField.parent().addClass('has-error').find('.error-msg').remove();
      $('#email').after(errorMsg);
    } else {
      $(this).addClass('has-error').find('.error-msg').remove();
      $(this).append(errorMsg);
    }
    e.preventDefault();   
  }
  
});

/** 
 * Appropriated from http://docs.jquery.com/Plugins/validation */
function validEmail(value){
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
}



/**
 * User Accounts > Addresses 
 * - initializes country/province listeners
 * - open Facebox to edit an address, has to change some ids (facebooks duplicates an existing div on the page)
 */

if( $('.template-customers-addresses:first').length > 0 ){  
  
  new Shopify.CountryProvinceSelector('address_country_new', 'address_province_new', {hideElement: 'address_province_container_new'});  
  
  $('.action-edit a').click( function(e){
    var id = $(this).attr('data-address-id');
    var addressId = 'fb_address_country_'+id;
    var provinceId = 'fb_address_province_'+id;
    var provinceContainerId = 'fb_address_province_container'+id;
    
    jQuery.facebox({ div: '#edit-address-'+id });
    
    $('#facebox #address_country_'+id).attr('id', addressId);
    $('#facebox #address_province_'+id).attr('id', provinceId);
    $('#facebox #address_province_container_'+id).attr('id', provinceContainerId);        
    
    new Shopify.CountryProvinceSelector(addressId, provinceId, {hideElement: provinceContainerId});   
    
    $('.cancel-update-address-form-link').live('click', closeFacebox);
    
    e.preventDefault();
  });

}



/** 
 * Utility: close facebox 
 */
function closeFacebox(e){
  jQuery(document).trigger('close.facebox');
  if( $(this).is('a') ){ e.preventDefault(); }  
}



/**
 * Dropdown Menus
 */
function initDropDown(){
  $('#nav .has-dropdown').hoverIntent( {over: ddOver, timeout: 150, out: ddOut } );
}

function ddOver(e){
  $(this).find('a:first').addClass('active');
  $(this).find('ul:first').show();
}

function ddOut(e){
  $(this).find('a:first').removeClass('active');
  $(this).find('ul:first').hide();  
}



/** 
 * Grid > Aligning Images, assuming they are small.
 * Remove this if all images will have the same dimensions (if they don't: they should at least have the same aspect ratio)
 */
$(window).load( function(){ 
  var photoContainerHeight = $('.thumbgrid:first .product-photo').height();
  $('.thumbgrid img').each( function(){
    var h = $(this).height();
    if( h < photoContainerHeight )
      $(this).css({marginTop: (photoContainerHeight/2 - h/2) + 'px'})
  });
});

