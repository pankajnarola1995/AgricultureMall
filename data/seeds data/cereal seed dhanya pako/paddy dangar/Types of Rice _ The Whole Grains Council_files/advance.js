function popOpenAdvancedSearch() {
    Drupal.toggleFieldset(".search-advanced");
}

if (window.location.hash == "#search-form") {
    $(document).ready(popOpenAdvancedSearch);
}

/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);


$(function() {
  // Excellent use of ids by the webform module-  time for an update?
  $('#edit-field-wgc-menu-upload-0-upload-wrapper #edit-field-wgc-menu-upload-0-upload-wrapper .description').empty();
  $('#edit-field-wgc-menu-upload-0-upload-wrapper #edit-field-wgc-menu-upload-0-upload-wrapper .description').append("Maximum Filesize:<em>7 MB</em>");
});


// Product search dropdown styles
function highlightParentTerms() {
  var optionText = '';
  $('select#edit-term-node-tid-depth option').each(function() {
    optionText = $(this).text();
    if(optionText.indexOf('-') == -1) {
      $(this).addClass('awesome-option');
    }

    //console.log($(this).text());
  });
}

$(document).ajaxComplete(function(){
  highlightParentTerms()
});
$(document).ready(function(){
  highlightParentTerms()
});

/* Product Add Form Mod */
$(document).ready(function(){
  // Removes and adds suffix to group stamp and grams
  $('.group-stamp-and-grams .field-suffix').remove();
  $('#edit-field-serving-size-0-0-value').after('<span class="field-suffix"> grams serving size</span>');
  $('#edit-field-total-grains-0-value').after('<span class="field-suffix"> grams of TOTAL grains</span>');
  $('#edit-field-wg-grams-0-value').after('<span class="field-suffix"> grams of WHOLE grains</span>');
  $('#edit-field-grams-on-stamp-0-value').after('<span class="field-suffix"> grams to appear on stamp</span>');
});
