jQuery(document).ready(function(){
	jQuery('body').on('submit', '.magic-action-box.mab-ajax form', function(event){

		var form = jQuery(this);

		form.trigger('mab_pre_process_optin');

		var formData = form.serialize() + '&action=' + MabAjax.action;

		jQuery.post(MabAjax.ajaxurl, formData, function(data){
			form.trigger('mab_process_optin', data);
		});

		event.preventDefault();
	});

	/** --------------------------------- **/

	/** pre-processing on form */
	jQuery('body').on('mab_pre_process_optin', '.magic-action-box.mab-ajax form', function(event){
		var form = jQuery(this);
		var msgDiv = form.find('.mab-form-msg');
		msgDiv.removeClass('mab-success').removeClass('mab-error').removeClass('mab-alert');
		msgDiv.html('<img src="' + MabAjax.spinner + '" alt="loading">').show();
	});

    /** post-processing on form */
    jQuery('body').on('mab_process_optin', '.magic-action-box.mab-ajax form', function(event, data){

        // redirect if set
        if(data.result.redirect){
            window.location = data.result.redirect;
        } else {
            var form = jQuery(this);
            var msgDiv = form.find('.mab-form-msg');
            msgDiv.addClass('mab-alert');

            if(data.result === false){
                msgDiv.addClass('mab-error');
            } else {
                form.children('.mab-field').hide();

                msgDiv.addClass('mab-success');
            }
            msgDiv.html(data.msgs);
        }

    });

	/** post-processing on postmatic form */
	jQuery('body').on('mab_process_optin', '.magic-action-box.mab-ajax form.mab-postmatic', function(event, data){
		var form = jQuery(this);
		var msgDiv = form.find('.mab-form-msg'); 
		msgDiv.addClass('mab-alert');

		if(data.result === false){
			msgDiv.addClass('mab-error');
		} else {
			form.children('.mab-field,.mab-small-link').hide();

			msgDiv.addClass('mab-success');
		}
		msgDiv.html(data.msgs);
	});

});