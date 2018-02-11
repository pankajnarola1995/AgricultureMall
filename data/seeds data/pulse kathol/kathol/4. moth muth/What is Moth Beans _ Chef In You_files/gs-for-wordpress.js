jQuery(document).ready(function() {
	jQuery('#gigya-socialize-update').submit(function(event) {
		event.preventDefault();
		if( jQuery('#gigya-socialize-update-text').val() != '' ) {
			if( typeof( gigya ) != 'undefined' ) {
				var theStatus = jQuery('#gigya-socialize-update-text').val();
				var via = jQuery('#gigya-socialize-update-via').val();
				if( via != '' ) {
					theStatus += ' via ' + via;
				}
				gigya.services.socialize.setStatus(gsConf, {status:theStatus});
			}
			jQuery('#gigya-socialize-update-text').val('What are you doing now?' );
		}
	});
	jQuery('#gigya-socialize-update-text').click(function(event) {
		if( jQuery(this).val() == 'What are you doing now?' ) {
			jQuery(this).val('');
		}
	});
	jQuery('#gigya-socialize-update-text').blur(function(event) {
		if( jQuery(this).val() == '' ) {
			jQuery(this).val('What are you doing now?' );
		}
	});
});


// Used to process login by doing authentication and checking to see what should
// happen next via returned JSON
function processLogin(eventObject) {
	jQuery('.login #login #nav,.gs-for-wordpress-login-widget').after('<div id="gs-for-wordpress-login-message-container"><p id="gs-for-wordpress-login-message" class="message">Please wait &mdash; logging in...</p></div>')
	var url = jQuery('#gs-for-wordpress-redirect-url').attr('href');
	if(url!=undefined)
	{
		url = encodeURI(url);
	}
	jQuery.post(
		'index.php',
		{
			'gigya-authenticate':1,
			'gigya-timestamp':eventObject.timestamp,
			'gigya-uid':eventObject.UID,
			'gigya-signature':eventObject.signature,
			'gigya-is-site-user':eventObject.user.isSiteUser,
			'gigya-is-log-in-identity':eventObject.user.isLogInIdentity,
			'gigya-is-connected':eventObject.user.isConnected,
			'gigya-nickname':eventObject.user.nickname,
			'gigya-login-provider':eventObject.user.loginProvider,
			'gigya-photo-url':eventObject.user.photoURL,
			'gigya-thumbnail-url':eventObject.user.thumbnailURL,
			'gigya-first-name':eventObject.user.firstName,
			'gigya-last-name':eventObject.user.lastName,
			'gigya-gender':eventObject.user.gender,
			'gigya-age':eventObject.user.age,
			'gigya-birth-day':eventObject.user.birthDay,
			'gigya-birth-month':eventObject.user.birthMonth,
			'gigya-birth-year':eventObject.user.birthYear,
			'gigya-email':eventObject.user.email,
			'gigya-country':eventObject.user.country,
			'gigya-state':eventObject.user.state,
			'gigya-city':eventObject.user.city,
			'gigya-zip':eventObject.user.zip,
			'gigya-profile-url':eventObject.user.profileURL,
			'redirect-url': url
		},
		function(data, textStatus) {
			jQuery('#gs-for-wordpress-login-message').html(data.message);
			if( '' != data.redirect ) {
				setTimeout( 'window.document.location.href = "' + data.redirect + '";', 150 );
			}
		},
		'json'
	);
}

