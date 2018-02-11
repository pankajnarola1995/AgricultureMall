// make sure jQuery and SimpleModal are loaded
if (typeof jQuery !== "undefined" && typeof jQuery.modal !== "undefined") {
	jQuery(function ($) {
		$('.smcf_link, .smcf-link').click(function (e) { // added .smcf_link for previous version
			e.preventDefault();
			// display the contact form
			$('#smcf-content').modal({
				closeHTML: "<a href='#' title='Close' class='modalCloseX simplemodal-close'>x</a>",
				position: ["15%",],
				overlayId: 'smcf-overlay',
				containerId: 'smcf-container',
				onOpen: contact.open,
				onShow: contact.show,
				onClose: contact.close
			});
		});

		// preload images
		var img = ['cancel.png','form_bottom.gif','form_top.gif','loading.gif','send.png'];
		if ($('#smcf-content form').length > 0) {
			var url = $('#smcf-content form').attr('action').replace(/smcf_data\.php/, 'img/');
			$(img).each(function () {
				var i = new Image();
				i.src = url + this;
			});
		}

		var contact = {
			message: null,
			open: function (d) {
				// dynamically determine height
				var h = 280;
				if ($('#smcf-subject').length) {
					h += 26;
				}
				if ($('#smcf-cc').length) {
					h += 22;
				}
	
				// resize the textarea for safari
				if ($.browser.safari) {
					$('#smcf-container .smcf-input').css({
						'font-size': '.9em'
					});
				}
	
				// add padding to the buttons in firefox/mozilla
				if ($.browser.mozilla) {
					$('#smcf-container .smcf-button').css({
						'padding-bottom': '2px'
					});
				}
	
				var title = $('#smcf-container .smcf-title').html();
				$('#smcf-container .smcf-title').html(smcf_messages.loading);
				d.overlay.fadeIn(200, function () {
					d.container.fadeIn(200, function () {
						d.data.fadeIn(200, function () {
							$('#smcf-container .smcf-content').animate({
								height: h
							}, function () {
								$('#smcf-container .smcf-title').html(title);
								$('#smcf-container form').fadeIn(200, function () {
									$('#smcf-container #smcf-name').focus();
	
									$('#smcf-container .smcf-cc').click(function () {
										var cc = $('#smcf-container #smcf-cc');
										cc.is(':checked') ? cc.attr('checked', '') : cc.attr('checked', 'checked');
									});
	
									// fix png's for IE 6
									if ($.browser.msie && $.browser.version < 7) {
										$('#smcf-container .smcf-button').each(function () {
											if ($(this).css('backgroundImage').match(/^url[("']+(.*\.png)[)"']+$/i)) {
												var src = RegExp.$1;
												$(this).css({
													backgroundImage: 'none',
													filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +  src + '", sizingMethod="crop")'
												});
											}
										});
									}
								});
							});
						});
					});
				});
			},
			show: function (d) {
				$('#smcf-container .smcf-send').click(function (e) {
					e.preventDefault();
					// validate form
					if (contact.validate()) {
						$('#smcf-container .smcf-message').fadeOut(function () {
							$('#smcf-container .smcf-message').removeClass('smcf-error').empty();
						});
						$('#smcf-container .smcf-title').html(smcf_messages.sending);
						$('#smcf-container form').fadeOut(200);
						$('#smcf-container .smcf-content').animate({
							height: '90px'
						}, function () {
							$('#smcf-container .smcf-loading').fadeIn(200, function () {
								$.ajax({
									url: $('#smcf-content form').attr('action'),
									data: $('#smcf-container form').serialize() + '&action=send',
									type: 'post',
									cache: false,
									dataType: 'html',
									success: function (data) {
										$('#smcf-container .smcf-loading').fadeOut(200, function () {
											$('#smcf-container .smcf-title').html(smcf_messages.thankyou);
											$('#smcf-container .smcf-message').html(data).fadeIn(200);
										});
									},
									error: function (xhr) {
										$('#smcf-container .smcf-loading').fadeOut(200, function () {
											$('#smcf-container .smcf-title').html(smcf_messages.error);
											$('#smcf-container .smcf-message').html(xhr.status + ': ' + xhr.statusText).fadeIn(200);
										});
									}
								});
							});
						});
					}
					else {
						if ($('#smcf-container .smcf-message:visible').length > 0) {
						var msg = $('#smcf-container .smcf-message div');
							msg.fadeOut(200, function () {
								msg.empty();
								contact.showError();
								msg.fadeIn(200);
							});
						}
						else {
							$('#smcf-container .smcf-message').animate({
								height: '30px'
							}, contact.showError);
						}
					}
				});
			},
			close: function (d) {
				$('#smcf-container .smcf-message').fadeOut();
				$('#smcf-container .smcf-title').html(smcf_messages.goodbye);
				$('#smcf-container form').fadeOut(200);
				$('#smcf-container .smcf-content').animate({
					height: '40px'
				}, function () {
					d.data.fadeOut(200, function () {
						d.container.fadeOut(200, function () {
							d.overlay.fadeOut(200, function () {
								$.modal.close();
							});
						});
					});
				});
			},
			validate: function () {
				contact.message = '';
				var req = [],
					invalid = "";
	
				if (!$('#smcf-container #smcf-name').val()) {
					req.push(smcf_messages.name);
				}
	
				var email = $('#smcf-container #smcf-email').val();
				if (!email) {
					req.push(smcf_messages.email);
				}
				else {
					if (!contact.validateEmail(email)) {
						invalid = smcf_messages.emailinvalid;
					}
				}
	
				if (!$('#smcf-container #smcf-message').val()) {
					req.push(smcf_messages.message);
				}
	
				if (req.length > 0) {
					var fields = req.join(', ');
					contact.message += req.length > 1 ?
						fields.replace(/(.*),/,'$1 ' + smcf_messages.and) + ' ' + smcf_messages.are :
						fields + ' ' + smcf_messages.is;
					contact.message += ' ' + smcf_messages.required;
				}
	
				if (invalid.length > 0) {
					contact.message += (req.length > 0 ? ' ' : '') + smcf_messages.emailinvalid;
				}
	
				if (contact.message.length > 0) {
					return false;
				}
				else {
					return true;
				}
			},
			validateEmail: function (email) {
				var at = email.lastIndexOf("@");
	
				// Make sure the at (@) sybmol exists and  
				// it is not the first or last character
				if (at < 1 || (at + 1) === email.length)
					return false;
	
				// Make sure there aren't multiple periods together
				if (/(\.{2,})/.test(email))
					return false;
	
				// Break up the local and domain portions
				var local = email.substring(0, at);
				var domain = email.substring(at + 1);
	
				// Check lengths
				if (local.length < 1 || local.length > 64 || domain.length < 4 || domain.length > 255)
					return false;
	
				// Make sure local and domain don't start with or end with a period
				if (/(^\.|\.$)/.test(local) || /(^\.|\.$)/.test(domain))
					return false;
	
				// Check for quoted-string addresses
				// Since almost anything is allowed in a quoted-string address,
				// we're just going to let them go through
				if (!/^"(.+)"$/.test(local)) {
					// It's a dot-string address...check for valid characters
					if (!/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(local))
						return false;
				}
	
				// Make sure domain contains only valid characters and at least one period
				if (!/^[-a-zA-Z0-9\.]*$/.test(domain) || domain.indexOf(".") === -1)
					return false;	
	
				return true;
			},
			showError: function () {
				$('#smcf-container .smcf-message')
					.html($('<div/>').addClass('smcf-error').append(contact.message))
					.fadeIn(200);
			}
		};
	});
}