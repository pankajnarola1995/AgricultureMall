// Find all iframe inside action box aside
jQuery(window).load(function(){
  var $allVideos = jQuery(".magic-action-box.mab-responsive iframe");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    jQuery(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // When the window is resized
  jQuery(window).resize(function() {

    // Resize all videos according to their own aspect ratio
    $allVideos.each(mabResizeYtVideo);
  });

  // kick off one call to fix videos on load
  $allVideos.each(mabResizeYtVideo);
});

function mabResizeYtVideo(){
  var $fluidEl = jQuery(this).parent();
  var newWidth = $fluidEl.width();
  var $el = jQuery(this);
  $el
    .width(newWidth)
    .height(newWidth * $el.data('aspectRatio'));
}