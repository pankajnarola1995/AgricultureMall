//$(document).ready(function() {
        var namepattern = /^[A-Za-z][A-za-z ]+$/;
		 var alphanumpattern = /^[A-za-z0-9]+$/;
        var monopattern = /^[\d]+$/;
        var addpattern = /^[\w-,]*$/;
        var emailpattern = /^[a-zA-Z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,3})$/;
        var timepattern=/^([0-9]{2})\:([0-9]{2})$/;
        var numpattern = /^[\d]+$/;
		var passpattern = /^[@#$%&?_]*[\w]+[@#$%&?_]*$/;
	
	 function test_alphnum(id,msgId)
        {
			
            var name = $(id).val();
            if (name != "")
            {
                if (!alphanumpattern.test(name))
                {
                    $(msgId).html('Field Contains Only Letters And Numbers.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
					$(msgId).html('* Field is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }	
        function test_name(id,msgId)
        {
			
            var name = $(id).val();
            if (name != "")
            {
                if (!namepattern.test(name))
                {
                    $(msgId).html('Name Contains Only Letters.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
					$(msgId).html('* Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
        function test_no(id,msgId)
        {
            var no = $(id).val();
			var len= no.length;
            if (no != "")
            {
                if (!monopattern.test(no))
                {
                    $(msgId).html(' Number Contains Only Digit.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
                }
				else if (len != 10 || len < 10)
                {
                    $(msgId).html(' Number Contains 10 Digit.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
                $(msgId).html('* This field is required.');
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
        function test_email(id,msgId)
        {
            var email = $(id).val();
            if (email != "")
            {
                if (!emailpattern.test(email))
                {
                    
                    $(msgId).html('Enter Valid Email.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
                $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
        function test_add(id,msgId)
        {
            var add = $(id).val();
           var len= add.length;
            if (add != "")
            {   
                if(len>=6)
                {
                    if (!addpattern.test(add))
                    {
                        $(msgId).html(' Enter valid Address.');
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
                            "background": ""
                        });
                        return true;
                    }
                }
                else
                {
                    $(msgId).html(' Address to Short.');
                        $(id).css({
                           "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                        });
                        $(id).focus();
                        return false;
                }
            }
            else
            {
                $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
        function test_drop(id,msgId)
           {
               var dropval = $(id).val();
               if (dropval == "Select here..")
               {
                   
                   $(msgId).html('* Please Select Value..');
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
                   "background": ""
                   });
				   return true;
                }
          }
    	function test_radio(id,msgId)
           {
				if($(id+":checked").length <= 0)
				{
				   $(msgId).html('* Please Select gender..');
               		return false;
				}
				else
				{
					$(msgId).html('');
                	return true;
				}
          }
		  function test_ptype(id,msgId)
           {
				if($(id+":checked").length <= 0)
				{
				   $(msgId).html('* Please Select Price Type..');
               		return false;
				}
				else
				{
					$(msgId).html('');
                	return true;
				}
          }
		  function test_check(id,msgId)
           {
			   	if($(id+":checked").length <= 0)
				{
				   $(msgId).html('* Please Check this..');
               		return false;
				}
				else
				{
					$(msgId).html(' ');
                	return true;
				}
          }
        
        function test_time(id,msgId)
        {
            var t = $(id).val();
            if (t != "")
            {
                if (!timepattern.test(t))
                {
                    alert("email");
                    $(msgId).html(' Enater Valid Time.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
                $(msgId).html('* This field is required.');
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
            }
        }
        function test_num(id,msgId)
        {
            var num = $(id).val();
            if (num != "")
            {
                if (!numpattern.test(num))
                {
                    $(msgId).html(' Contains Only Digit.');
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
                        "background": ""
                    });
                    return true;
                }
            }
            else
            {
                $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		
		function test_match(id1,id2,msgId1,msgId2)
        {
            var pass1 = $(id1).val();
			var pass2 = $(id2).val();
			var len= pass1.length;
            if (pass1 != "" )
            {
				if(len < 6)
				{
					$(msgId1).html(' Password should be 6 characters');
                    $(id1).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id1).focus();
                    return false;
				}
				if (!passpattern.test(pass1))
                {
                    $(msgId1).html('Password Contains Only Alpha Numeric and $,#,&,*');
                    $(id1).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id1).focus();
                    return false;
                }
                else
                {
					$(msgId1).html('');
					$(id1).css({
						"border": "",
						"background": ""
					});
                    if(pass2 != "")
					{
						if(pass1 == pass2)
						{
							$(msgId2).html('');
							$(id2).css({
								"border": "",
								"background": ""
							});
							return true;
						}
						else
						{
							$(msgId2).html(' Conform Password Not Match ');
							$(id2).css({
								"border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
							});
							return false;
						}
					}
					else
					{
						
						$(msgId2).html('* This field is Required ');
						$(id2).css({
							"border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
						});
						return false;
					}
                }
            }
            else
            {
                $(msgId1).html('* This field is required.');
                    $(id1).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id1).focus();
                    return false;
            }
        }
		function test_file(id,msgId)
		{
			var file = $(id).val();

			if(file != "")
			{
				var ext = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
				//alert(file);
				//return false;
				if(ext == 'gif' || ext == 'jpg' || ext == 'png' || ext == 'jpeg' || ext == 'bmp')
				{
					$(msgId).html('');
					$(id).css({
						"border": "",
						"background": ""
					});
					return true;
				}
				else
				{
					$(msgId).html('* It Contains Only Image.');
					$(id).css({
						"border": "1px solid #FFFFFF",
						"box-shadow":"1px 1px 1px  #FFFFFF "
					});
					return false;
				}
			}
			else
			{
				$(msgId).html('* This field is required.');
                $(id).css({
					"border": "1px solid #FFFFFF",
						"box-shadow":"1px 1px 1px  #FFFFFF "
                });
                    
                $(id).focus();
                return false;
			}
		}
		
		
//});