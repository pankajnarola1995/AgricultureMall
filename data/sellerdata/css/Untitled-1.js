function test_confirm_code(id,msgId)
        {
			
            var confirm_code = $(id).val();
			var lenconfirm_code= confirm_code.length;
            if (confirm_code != "")
            {
                if (!alphanumpattern.test(confirm_code))
                {
                    $(msgId).html('Confirm Code Contains Only Digit.');
                    $(id).css({
                      "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
                }
				else if (lenconfirm_code != 6 || lenconfirm_code < 6)
                {
                    $(msgId).html('Confirm Code Contains 6 Digit.');
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
                }
                else
                {
                    $(msgId).html('');
                    $(id).css({
                        "border": "",
                        "box-shadow": ""
                    });
                    return true;
                }
            }
            else
            {
					$(id).attr("placeholder","Confirm is required");
					$(msgId).html('');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }	