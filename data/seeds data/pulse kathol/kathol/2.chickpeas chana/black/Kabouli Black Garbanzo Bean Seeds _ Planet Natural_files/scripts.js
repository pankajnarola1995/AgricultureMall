function heightfix( items, callback ) {
	var	maxh	= 0,
		count	= items.length;
	jQuery.each( items, function( index, element ) {
		if ( jQuery( this ).height() > maxh ) {
			maxh = jQuery( this ).height();
		}
		if ( ( index + 1 ) == count ) {
			items.height( maxh );
			if ( callback ) {
				callback();
			}
		}
	} );
}

function rebuildExcerpt() {
	var wrapHeight = jQuery( '.product div.summary' ).height();
	jQuery( '.product div.summary p' ).each( function() {
		var $this			= jQuery( this ),
			currentText		= $this.text(),
			splitText		= currentText.split( ' ' );
		$this.html( '' );
		jQuery.each( splitText, function( index, element ) {
			var currentHeight,
				tempText;
			tempText		= $this.html();
			$this.html( $this.html() + element + ' ' );
			currentHeight 	= $this.height();
			if ( currentHeight > wrapHeight ) {
				var endText = '';
				for ( var i = 0; i < ( index - 1 ); i ++ ) {
					endText+= ( i != 0 ? ' ' : '' ) + splitText[i];
				}
				$this.html( endText + ' ...' );
				return false;
			}
		} );
	} );
}

function video_resize(){
    
    // home resize
    if( jQuery('#content').width() < 940 ){
        
        jQuery('.vvqbox iframe').each(function(){
        
            var the_video = jQuery(this);
            
            var current_width = the_video.width();
            var current_height = the_video.height();
            
            var new_width = jQuery('#content').width();
            var new_height = Math.round( current_height *  new_width / current_width );
            
            the_video.css('width', new_width+'px');
            the_video.css('height', new_height+'px');
        });
    }
}

function yotpoReviewTab() {

	var count	= 0,
		t;
	t = setInterval( function() {
		if ( jQuery( '.yotpo-main-widget' ).length ) {
			var number = jQuery( '.yotpo-nav-tab.yotpo-active .nav-tab-sum' ).text();
			if ( ! jQuery( '.reviews_tab .number' ).length ) {
				jQuery( '.reviews_tab a' ).append( ' <span class="number"></span>' );
			}
			jQuery( '.reviews_tab .number' ).text( ( number != '()' ? number : '(0)' ) );
		}
		count ++;
		if ( count == 10 ) {
			clearInterval( t );
		}
	}, 500 );
				
}

jQuery(window).load(function() {
    // home slider height adjustment for mobile
    jQuery('#slider .wrap').height(jQuery('#slider .details img').height());
});

jQuery(document).ready(function(){

    //console.log('referrer: '+document.referrer);
    
    // paypal express button - cheking if the shipping calculation has been made
    jQuery('.button-check-out-paypal').click(function(){
        
        if( jQuery('.shipping .weight_exceeded').length > 0 ){
            
            jQuery('.checkout-options-content').append('<span class="error" style="display:none;">'+ jQuery('.shipping .weight_exceeded').html() +'</span>')
            jQuery('.checkout-options-content .error').slideDown(400);
            
            return false;
        }
        //if( jQuery('.shipping #shipping_method').length <= 0 ){
		if ( jQuery('.calculated_shipping .shipping_method').length <= 0 ) {
            
            jQuery('.checkout-options-content').append('<span class="error" style="display:none;">You must calculate the shipping costs first.</span>')
            jQuery('.checkout-options-content .error').slideDown(400);
            
            return false;
        }
        
    });
    
    // video resize
    video_resize();
    
    // mobile menu drop down
    jQuery('#mob-menu').click(function(){
        jQuery('#menu-main-menu').slideToggle(200);
        return false;
    });

	// Create mobile main menu dropdown
	jQuery( '#menu-main-menu' ).each( function() {
		var list	= jQuery( this ),
			select	= jQuery( document.createElement( 'select' ) ).appendTo( jQuery( '#mobile-drop-menu .wrap' ) ).change( function() {
				window.location.href = jQuery( this ).val();
			} );
		jQuery( document.createElement( 'option' ) ).appendTo( select ).val( '/' ).html( 'Main Menu' );
		jQuery( '>li a', this ).each( function() {
			var prefix = ( jQuery( this ).parents( '.sub-menu' ).length > 0 ? '- ' : '' );
			var option = jQuery( document.createElement( 'option' ) ).appendTo( select ).val( this.href ).html( prefix + jQuery( this ).html() );
			if ( jQuery( this ).attr( 'class' ) === 'selected' ) {
				option.attr( 'selected', 'selected' );
			}
		} );
	} );

	// Create mobile footer menu dropdown
	jQuery( '.widget_nav_menu ul' ).each( function() {
		var list	= jQuery( this ),
			title	= list.parents( '.widget_nav_menu' ).find( '.widget-title' ),
			select	= jQuery( document.createElement( 'select' ) ).insertBefore( jQuery( this ) ).change( function() {
				window.location.href = jQuery( this ).val();
			} );
		jQuery( document.createElement( 'option' ) ).appendTo( select ).val( '#' ).html( title.text() );
		jQuery( '>li a', this ).each( function() {
			var option = jQuery( document.createElement( 'option' ) ).appendTo( select ).val( this.href ).html( jQuery( this ).html() );
			if ( jQuery( this ).attr( 'class' ) === 'selected' ) {
				option.attr( 'selected', 'selected' );
			}
		} );
	} );
    
    // home slider height adjustment for mobile
    jQuery(window).resize(function(){
        
        jQuery('#slider .wrap').height(jQuery('#slider .details img').height());
        
        video_resize();
        
    });
    
   // selecting the first option on products with variations
   //jQuery('.variations_form .variations select').each(function(){
   //jQuery(this).children('option:eq(1)').attr("selected", "selected");  
   //});
    
    jQuery('.search_products input').focusin(function(){
        jQuery(this).addClass('on'); 
    });
    
    // pages menu drop down
    jQuery('.page #sidebar li span').click(function(){
        var submenu=jQuery(this).parent().children('ul');
        if(jQuery(submenu).css('display')!='block'){
            jQuery(this).html('-');
            jQuery(submenu).slideDown(500);
        }else{
            jQuery(this).html('+');
            jQuery(submenu).slideUp(500);
        } 
    });
    
    // replacing credit card title
    jQuery('#cart-checkout #payment h3').each(function(){
        if( jQuery(this).html() == 'Credit card information' ){
            jQuery(this).html('6. Enter your credit card information');
        }
    });

	// "read more" on product categories
    jQuery('a.read_more_toggle').click(function(){
        jQuery('.more_content').stop().clearQueue().slideToggle(500, function(){
            
            if( jQuery('.more_content').css('display') == 'block' ){
                jQuery('a.read_more_toggle').html('Collapse');
            }else{
                jQuery('a.read_more_toggle').html('Read More');
            }
            
        });
        return false;
    });
    
	jQuery( '.woocommerce-message' ).addClass( 'woocommerce_message' );
	jQuery( '.woocommerce_message, .woocommerce-message' ).slideDown( 'slow' );
	
	jQuery( '.woocommerce-tabs' ).addClass( 'woocommerce_tabs' );
	
	// Add number of review to reviews tab
	yotpoReviewTab();

});

/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);
