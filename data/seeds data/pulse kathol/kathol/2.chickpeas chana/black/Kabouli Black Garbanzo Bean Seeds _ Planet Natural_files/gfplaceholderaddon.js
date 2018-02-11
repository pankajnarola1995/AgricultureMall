(function($){

var gf_placeholder = function() {

	$('.gform_wrapper .gf-add-placeholder')
		.find('input, textarea').filter(function(i){
			var $field = $(this);
			
			if (this.nodeName == 'INPUT') {
				var type = this.type;
				return !(type == 'hidden' || type == 'file' || type == 'radio' || type == 'checkbox');
			}

			return true;
		})
		.each(function(){
			var $field = $(this);

			var id = this.id;
			var $labels = $('label[for=' + id + ']').hide();
			var label = $labels.last().text();

			if (label.length > 0 && label[ label.length-1 ] == '*') {
				label = label.substring(0, label.length-1) + ' *';
			}

			$field[0].setAttribute('placeholder', label);
		});

	var support = (!('placeholder' in document.createElement('input'))); 
	if ( support && jquery_placeholder_url )
		$.ajax({
			cache: true,
			dataType: 'script',
			url: jquery_placeholder_url,
			success: function() {
				$('input[placeholder], textarea[placeholder]').placeholder({
					blankSubmit: true
				});
			},
			type: 'get'
		});

    $('.gform_wrapper .gf-add-placeholder').find('select').filter(function(i){
        var $theSelect = $(this);

       $theSelect.each(function(){
           var elementID = this.id;
           var inIdFormat = "#" + elementID;
           var theLabel = $('label[for=' + elementID + ']').text();
           console.log('The id for this field is '+ elementID + ' the label for this field is ' + theLabel);
           $(inIdFormat).prepend("<option class='placeholder' selected disabled value=" + "'" + theLabel + "'" + ">" + theLabel + "</option>" );
            $('label[for=' + elementID + ']').hide();

       })
    });







};

$(document).ready(function(){
	gf_placeholder();
	$(document).bind('gform_post_render', gf_placeholder);
});

})(jQuery);
