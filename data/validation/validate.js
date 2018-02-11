//$(document).ready(function() {
        var namepattern = /^[A-Za-z][A-za-z ]+$/;
		 var toolnamepattern = /^[A-Za-z][A-za-z &]+$/;
		   var companypattern = /^[A-Za-z][A-za-z &0-9]+$/;
		  var fertilizernamepattern = /^[A-Za-z][A-za-z &-]+$/;
		   var seednamepattern = /^[A-Za-z][A-za-z &]+$/;
		 var alphanumpattern = /^[A-za-z0-9 ]+$/;
        var monopattern = /^[\d]+$/;
        var emailpattern = /^[a-zA-Z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,3})$/;
        var timepattern=/^([0-9]{2})\:([0-9]{2})$/;
        var numpattern = /^[0-9]+$/;
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
                        "box-shadow": ""
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
		function test_modelno(id,msgId)
        {
			
            var modelno = $(id).val();
            if (modelno != "")
            {
                if (!alphanumpattern.test(modelno))
                {
                    $(msgId).html('ModelNo Contains Only Letters And Numbers.');
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
					$(id).attr("placeholder","Model No is required");
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
		function test_casno(id,msgId)
        {
			
            var casno = $(id).val();
            if (casno != "")
            {
                if (!alphanumpattern.test(casno))
                {
                    $(msgId).html('CASNO Contains Only Letters And Numbers.');
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
					$(id).attr("placeholder","CAS No is required");
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
		function test_hscodeno(id,msgId)
        {
			
            var hscodeno = $(id).val();
            if (hscodeno != "")
            {
                if (!alphanumpattern.test(hscodeno))
                {
                    $(msgId).html('HS Code Contains Only Letters And Numbers.');
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
					$(id).attr("placeholder","HS Code is required");
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
                        "box-shadow": ""
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
		function test_seeddetailname(id,msgId)
        {
			
            var seeddetailname = $(id).val();
            if (seeddetailname != "")
            {
                if (!namepattern.test(seeddetailname))
                {
                    $(msgId).html('Seed Detail Name Contains Only Letters.');
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
				$(id).attr("placeholder","Seed Detail Name is required");
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
		function test_pesticidedetailname(id,msgId)
        {
			
            var pesticidedetailname = $(id).val();
            if (pesticidedetailname != "")
            {
                if (!namepattern.test(pesticidedetailname))
                {
                    $(msgId).html('Pesticide Detail Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Detail Name is required");
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
		
		function test_fertilizerdetailname(id,msgId)
        {
			
            var fertilizerdetailname = $(id).val();
            if (fertilizerdetailname != "")
            {
                if (!namepattern.test(fertilizerdetailname))
                {
                    $(msgId).html('Fertilizer Detail Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Detail Name is required");
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
		
		function test_toolsdetailname(id,msgId)
        {
			
            var toolsdetailname = $(id).val();
            if (toolsdetailname != "")
            {
                if (!namepattern.test(toolsdetailname))
                {
                    $(msgId).html('Tools Detail Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Detail Name is required");
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
		
		
		 function test_subject(id,msgId)
        {
			
            var name = $(id).val();
            if (name != "")
            {
                
                    $(msgId).html('');
                    $(id).css({
                        "border": "",
                        "box-shadow": ""
                    });
                    return true;
              
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
		
		 function test_fname(id,msgId)
        {
			
            var fname = $(id).val();
            if (fname != "")
            {
                if (!namepattern.test(fname))
                {
                    $(msgId).html('First Name Contains Only Letters.');
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
				//$(msgId).html('*First Name is required.');
					$(id).attr("placeholder","First Name is required");
					$(msgId).html('');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 ",
						
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_userfname(id,msgId)
        {
			
            var firstname = $(id).val();
            if (firstname != "")
            {
                if (!namepattern.test(firstname))
                {
                    $(id).val("");
                    $(id).attr("placeholder","First Name Contains Only Letters.");
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
					$(id).attr("placeholder","First Name is required");
					$(msgId).html('');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 ",     
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_userlname(id,msgId)
        {
			
            var lastname = $(id).val();
            if (lastname != "")
            {
                if (!namepattern.test(lastname))
                {
                    $(id).val("");
                    $(id).attr("placeholder","Last Name Contains Only Letters.");
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
					$(id).attr("placeholder","Last Name is required");
					$(msgId).html('');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 ",     
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_seedname(id,msgId)
        {
			
            var seedname = $(id).val();
            if (seedname != "")
            {
                if (!seednamepattern.test(seedname))
                {
                    $(msgId).html('Seed Name Contains Only Letters.');
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
				$(id).attr("placeholder","Seed Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* Seed Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_subseedname(id,msgId)
        {
			
            var subseedname = $(id).val();
            if (subseedname != "")
            {
                if (!seednamepattern.test(subseedname))
                {
                    $(msgId).html('Seed Sub Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Seed Sub Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* Seed Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_subcultivationname(id,msgId)
        {
			
            var subcultivationname = $(id).val();
            if (subcultivationname != "")
            {
                if (!seednamepattern.test(subcultivationname))
                {
                    $(msgId).html('Seed Cultivation Name Contains Only Letters.');
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
				$(id).attr("placeholder","Seed Cultivation Name is required");
				$(msgId).html('');
					//$(msgId).html('* Seed Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_submenuseedname(id,msgId)
        {
			
            var submenuseedname = $(id).val();
            if (submenuseedname != "")
            {
                if (!seednamepattern.test(submenuseedname))
                {
                    $(msgId).html('Seed Sub Menu Name Contains Only Letters.');
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
				$(id).attr("placeholder","Seed Sub Menu Name is required");
				$(msgId).html('');
					//$(msgId).html('* Seed Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_fertilizername(id,msgId)
        {
			
            var fertilizername = $(id).val();
            if (fertilizername != "")
            {
                if (!fertilizernamepattern.test(fertilizername))
                {
                    $(msgId).html('Fertilizer Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* fertilizer Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_subfertilizername(id,msgId)
        {
			
            var subfertilizername = $(id).val();
            if (subfertilizername != "")
            {
                if (!fertilizernamepattern.test(subfertilizername))
                {
                    $(msgId).html('Fertilizer Sub Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Sub Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* fertilizer Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }

		 function test_submenufertilizername(id,msgId)
        {
			
            var submenufertilizername = $(id).val();
            if (submenufertilizername != "")
            {
                if (!fertilizernamepattern.test(submenufertilizername))
                {
                    $(msgId).html('Fertilizer Sub Menu Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Sub Menu Name is required");
				$(msgId).html('');
					//$(msgId).html('* fertilizer Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_fertilizerappername(id,msgId)
        {
			
            var fertilizerappername = $(id).val();
            if (fertilizerappername != "")
            {
                if (!fertilizernamepattern.test(fertilizerappername))
                {
                    $(msgId).html('Fertilizer Appearance Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Appearance Name is required");
				$(msgId).html('');
					//$(msgId).html('* fertilizer Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }

		 function test_fertilizerclassificationname(id,msgId)
        {
			
            var fertilizerclassificationname = $(id).val();
            if (fertilizerclassificationname != "")
            {
                if (!fertilizernamepattern.test(fertilizerclassificationname))
                {
                    $(msgId).html('Fertilizer Classification Name Contains Only Letters.');
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
				$(id).attr("placeholder","Fertilizer Classification Name is required");
				$(msgId).html('');
					//$(msgId).html('* fertilizer Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		  function test_pesticideappername(id,msgId)
        {
			
            var pesticideappername = $(id).val();
            if (pesticideappername != "")
            {
                if (!pesticidenamepattern.test(pesticideappername))
                {
                    $(msgId).html('Pesticide Appearance Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Appearance Name is required");
				$(msgId).html('');
					//$(msgId).html('* pesticide Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_toolsdrivename(id,msgId)
        {
			
            var toolsdrivename = $(id).val();
            if (toolsdrivename != "")
            {
                if (!toolnamepattern.test(toolsdrivename))
                {
                    $(msgId).html('Tools Drive Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Drive Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }

		 function test_pesticideclassificationname(id,msgId)
        {
			
            var pesticideclassificationname = $(id).val();
            if (pesticideclassificationname != "")
            {
                if (!pesticidenamepattern.test(pesticideclassificationname))
                {
                    $(msgId).html('Pesticide Classification Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Classification Name is required");
				$(msgId).html('');
					//$(msgId).html('* pesticide Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_toolscolorname(id,msgId)
        {
			
            var toolscolorname = $(id).val();
            if (toolscolorname != "")
            {
                if (!toolnamepattern.test(toolscolorname))
                {
                    $(msgId).html('Tools Color Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Color Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_toolsenginname(id,msgId)
        {
			
            var toolsenginname = $(id).val();
            if (toolsenginname != "")
            {
                if (!alphanumpattern.test(toolsenginname))
                {
                    $(msgId).html('Tools Engine Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Engine Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_toolsfuelname(id,msgId)
        {
			
            var toolsfuelname = $(id).val();
            if (toolsfuelname != "")
            {
                if (!toolnamepattern.test(toolsfuelname))
                {
                    $(msgId).html('Tools Fuel Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Fuel Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_toolsdetailname(id,msgId)
        {
			
            var toolsdetailname = $(id).val();
            if (toolsdetailname != "")
            {
                if (!toolnamepattern.test(toolsdetailname))
                {
                    $(msgId).html('Tools Detail  Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Detail Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		
		
		 function test_toolsuses(id,msgId)
        {
			
            var testtoolsuses = $(id).val();
            if (testtoolsuses != "")
            {
                if (!toolnamepattern.test(testtoolsuses))
                {
                    $(msgId).html('Tools Uses Data Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Uses Data is required");
				$(msgId).html('');
					//$(msgId).html('* tools Uses Data is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_material(id,msgId)
        {
			
            var material = $(id).val();
            if (material != "")
            {
                if (!toolnamepattern.test(material))
                {
                    $(msgId).html('Tools Material Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Material Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Material Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_eye_shape(id,msgId)
        {
			
            var eye_shape = $(id).val();
            if (eye_shape != "")
            {
                if (!toolnamepattern.test(eye_shape))
                {
                    $(msgId).html('Tools Eye Shape Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Eye Shape Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools eye_shape Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_package_detail(id,msgId)
        {
			
            var package_detail = $(id).val();
            if (package_detail != "")
            {
                if (!toolnamepattern.test(package_detail))
                {
                    $(msgId).html('Tools Package Detail Data Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Package Detail Data is required");
				$(msgId).html('');
					//$(msgId).html('* tools package_detail Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_subtoolsname(id,msgId)
        {
			
            var subtoolsname = $(id).val();
            if (subtoolsname != "")
            {
                if (!toolnamepattern.test(subtoolsname))
                {
                    $(msgId).html('Tools Sub Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Tools Sub Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* tools Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
 function test_pesticidename(id,msgId)
        {
			
            var pesticidename = $(id).val();
            if (pesticidename != "")
            {
                if (!toolnamepattern.test(pesticidename))
                {
                    $(msgId).html('Pesticide Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* pesticide Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_subpesticidename(id,msgId)
        {
			
            var subpesticidename = $(id).val();
            if (subpesticidename != "")
            {
                if (!toolnamepattern.test(subpesticidename))
                {
                    $(msgId).html('Pesticide Sub Type Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Sub Type Name is required");
				$(msgId).html('');
					//$(msgId).html('* pesticide Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }

function test_countryname(id,msgId)
        {
			
            var countryname = $(id).val();
            if (countryname != "")
            {
                if (!namepattern.test(countryname))
                {
                    $(msgId).html('Country Name Contains Only Letters.');
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
				$(id).attr("placeholder","Country Name is required");
				$(msgId).html('');
					//$(msgId).html('* country Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_statename(id,msgId)
        {
			
            var statename = $(id).val();
            if (statename != "")
            {
                if (!namepattern.test(statename))
                {
                    $(msgId).html('State Name Contains Only Letters.');
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
				$(id).attr("placeholder","State Name is required");
				$(msgId).html('');
					//$(msgId).html('* state Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_cityname(id,msgId)
        {
			
            var cityname = $(id).val();
            if (cityname != "")
            {
                if (!namepattern.test(cityname))
                {
                    $(msgId).html('City Name Contains Only Letters.');
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
				$(id).attr("placeholder","City Name is required");
				$(msgId).html('');
					//$(msgId).html('* city Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_areaname(id,msgId)
        {
			
            var areaname = $(id).val();
            if (areaname != "")
            {
                if (!namepattern.test(areaname))
                {
                    $(msgId).html('Area Name Contains Only Letters.');
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
				$(id).attr("placeholder","Area Name is required");
				$(msgId).html('');
					//$(msgId).html('* area Type Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_lname(id,msgId)
        {
			
            var lname = $(id).val();
            if (lname != "")
            {
                if (!namepattern.test(lname))
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
                        "box-shadow": ""
                    });
                    return true;
                }
            }
            else
            {
				$(id).attr("placeholder","Last Name is required");
				$(msgId).html('');
					//$(msgId).html('*Last Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_companyname(id,msgId)
        {
			
            var companyname = $(id).val();
            if (companyname != "")
            {
                if (!companypattern.test(companyname))
                {
                    $(msgId).html('Enter Valid Company Name');
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
				$(id).attr("placeholder","Comapny Name is required");
				$(msgId).html('');
					//$(msgId).html('*Comapny Name is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		 function test_answer(id,msgId)
        {
			
            var answer = $(id).val();
            if (answer != "")
            {
                    $(msgId).html('');
                    $(id).css({
                        "border": "",
                        "box-shadow": ""
                    });
                    return true;
                
            }
            else
            {
				$(id).attr("placeholder","Answer is required");
				$(msgId).html('');
					//$(msgId).html('* Ansewer is required.');
					//$(msgId).slideDown(5000,function(){$(this).html("<span id='"+msgId+"'> * This field is required.</span>");});
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                       
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_mobno(id,msgId)
        {
            var mobno = $(id).val();
			var lenmob= mobno.length;
            if (mobno != "")
            {
                if (!monopattern.test(mobno))
                {
                    $(msgId).html(' Number Contains Only Digit.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
                }
				else if (lenmob != 10 || lenmob < 10)
                {
                    $(msgId).html('Mobile  Number Contains 10 Digit.');
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
				$(id).attr("placeholder","Mobile Number is required");
				$(msgId).html('');
                //$(msgId).html('* Mobile Number is required.');
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
					 //$(id).attr("value","");
                    $(id).val("");
                   $(id).attr("placeholder","Enter Valid Email Address.");
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
				$(id).attr("placeholder","Email Id required ");
				$(msgId).html('');
                //$(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_date(id,msgId)
        {
            var dob = $(id).val();
            if (dob != "")
            {
               
                    $(msgId).html('');
                    $(id).css({
                         "border": "",
                        "box-shadow": ""
                    });
					return true;
            }
            else
            {
				$(id).attr("placeholder","Date Of Birth is required");
				$(msgId).html('');
                //$(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		 function test_address(id,msgId)
        {
            var address = $(id).val();
           var len= address.length;
            if (address != "")
            {   
                if(len>=10)
                {
                     $(msgId).html('');
                        $(id).css({
                             "border": "",
                        "box-shadow": ""
                        });
						return true;
              
                }
                else
                {
                    $(msgId).html('Enter Address More Then 10 Character');
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
				$(id).attr("placeholder","Address is required");
				$(msgId).html('');
              //  $(msgId).html('* Address is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_description(id,msgId)
        {
            var description = $(id).val();
           var len= description.length;
            if (description != "")
            {   
                if(len>=10)
                {
                     $(msgId).html('');
                        $(id).css({
                             "border": "",
                        "box-shadow": ""
                        });
						return true;
              
                }
                else
                {
                    $(msgId).html('Enter Description More Then 10 Character');
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
				$(id).attr("placeholder","Description is required");
				$(msgId).html('');
              //  $(msgId).html('* Address is required.');
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
                   
                   $(msgId).html('*');
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
		   function test_sque(id,msgId)
           {
               var sque = $(id).val();
               if (sque == "Select here..")
               {
                   
                   $(msgId).html('*Select Security Question');
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
		   function test_city(id,msgId)
           {
               var city = $(id).val();
               if (city == "Select here..")
               {
                   
                   $(msgId).html('* Please Select City..');
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
		  function test_state(id,msgId)
           {
               var state = $(id).val();
               if (state == "Select here..")
               {
                   
                   $(msgId).html('* Please Select State..');
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
		  function test_country(id,msgId)
           {
               var country = $(id).val();
               if (country == "Select here..")
               {
                   
                   $(msgId).html('* Please Select Country..');
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
    	function test_radio(id,msgId)
           {
				if($(id+":checked").length <= 0)
				{
				   $(msgId).html('*');
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
				   $(msgId).html('*');
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
				   $(msgId).html('*');
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
                        "box-shadow": ""
                    });
                    return true;
                }
            }
            else
            {
				$(id).attr("placeholder","Enter valid Last Name");
                $(msgId).html('* This field is required.');
                    $(id).css({
                        "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
            }
        }
		function test_pesticidebrandname(id,msgId)
        {
			
            var pesticidebrandname = $(id).val();
            if (pesticidebrandname != "")
            {
                if (!namepattern.test(pesticidebrandname))
                {
                    $(msgId).html('Pesticide Brand Name Contains Only Letters.');
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
				$(id).attr("placeholder","Pesticide Brand Name is required");
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
                        "box-shadow": ""
                    });
                    return true;
                }
            }
            else
            {
				$(id).attr("placeholder","Number is required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		
		 function test_itemwight(id,msgId)
        {
            var itemwight = $(id).val();
            if (itemwight != "")
            {
                if (!numpattern.test(itemwight))
                {
                    $(msgId).html('Item Weight Contains Only Digit.');
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
				$(id).attr("placeholder","Item Weight is required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_seedprice(id,msgId)
        {
            var seedprice = $(id).val();
            if (seedprice != "")
            {
                if (!numpattern.test(seedprice))
                {
                    $(msgId).html(' Seed Price Contains Only Digit.');
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
				$(id).attr("placeholder","Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_pesticideprice(id,msgId)
        {
            var pesticideprice = $(id).val();
            if (pesticideprice != "")
            {
                if (!numpattern.test(pesticideprice))
                {
                    $(msgId).html('Pesticide Price Contains Only Digit.');
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
				$(id).attr("placeholder","Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_toolsprice(id,msgId)
        {
            var toolsprice = $(id).val();
            if (toolsprice != "")
            {
                if (!numpattern.test(toolsprice))
                {
                    $(msgId).html('  Tools Price Contains Only Digit.');
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
				$(id).attr("placeholder"," Price Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_pesticidetotalqty(id,msgId)
        {
            var pesticidetotalqty = $(id).val();
            if (pesticidetotalqty != "")
            {
                if (!numpattern.test(pesticidetotalqty))
                {
                    $(msgId).html('Pesticide Total Qty Contains Only Digit.');
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
				$(id).attr("placeholder","Total Qty Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_seedtotalqty(id,msgId)
        {
            var seedtotalqty = $(id).val();
            if (seedtotalqty != "")
            {
                if (!numpattern.test(seedtotalqty))
                {
                    $(msgId).html(' Seed Total Qty Contains Only Digit.');
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
				$(id).attr("placeholder","Total Qty Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_toolstotalqty(id,msgId)
        {
            var toolstotalqty = $(id).val();
            if (toolstotalqty != "")
            {
                if (!numpattern.test(toolstotalqty))
                {
                    $(msgId).html(' Tools Total Qty Contains Only Digit.');
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
				$(id).attr("placeholder","Total Qty Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_seedminorder(id,msgId)
        {
            var seedminorder = $(id).val();
            if (seedminorder != "")
            {
                if (!numpattern.test(seedminorder))
                {
                    $(msgId).html(' Seed Minimum Order Contains Only Digit.');
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
				$(id).attr("placeholder"," Minimum Order Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_pesticideminorder(id,msgId)
        {
            var pesticideminorder = $(id).val();
            if (pesticideminorder != "")
            {
                if (!numpattern.test(pesticideminorder))
                {
                    $(msgId).html('Pesticide Minimum Order Contains Only Digit.');
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
				$(id).attr("placeholder"," Minimum Order Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_shipp(id,msgId)
        {
            var shipp = $(id).val();
            if (shipp != "")
            {
                if (!numpattern.test(shipp))
                {
                    $(msgId).html('Shipping Weight Contains Only Digit.');
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
				$(id).attr("placeholder","Shipping Weight Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
			
        }function test_fertilizerprice(id,msgId)
        {
            var fertilizerprice = $(id).val();
            if (fertilizerprice != "")
            {
                if (!numpattern.test(fertilizerprice))
                {
                    $(msgId).html(' Fertilizer Price Contains Only Digit.');
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
				$(id).attr("placeholder","Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_fertilizertotalqty(id,msgId)
        {
            var fertilizertotalqty = $(id).val();
            if (fertilizertotalqty != "")
            {
                if (!numpattern.test(fertilizertotalqty))
                {
                    $(msgId).html(' Fertilizer Total Qty Contains Only Digit.');
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
				$(id).attr("placeholder","Total Qty Required");
              //  $(msgId).html('* This field is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
                    return false;
            }
        }
		function test_fertilizerminorder(id,msgId)
        {
            var fertilizerminorder = $(id).val();
            if (fertilizerminorder != "")
            {
                if (!numpattern.test(fertilizerminorder))
                {
                    $(msgId).html(' Fertilizer Minimum Order Contains Only Digit.');
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
				$(id).attr("placeholder"," Minimum Order Required");
              //  $(msgId).html('* This field is required.');
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
					$(msgId1).html('Password More Then 6 characters');
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
                        "box-shadow": ""
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
							$(msgId2).html(' Confirm Password Not Match ');
							$(id2).css({
								"border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
							});
							return false;
						}
					}
					else
					{
						$(id2).attr("placeholder","Confirm Password is Required");
						$(msgId2).html('');
						//$(msgId2).html('* Confirm Password is Required ');
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
				$(id1).attr("placeholder","Password is required");
				$(msgId1).html('');
               // $(msgId1).html('* Password is required.');
                    $(id1).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id1).focus();
                    return false;
            }
        }
		function test_oldpassword(id,msgId)
        {
            var oldpass = $(id).val();
			
			var leng= oldpass.length;
            if (oldpass != "" )
            {
				if(leng < 6)
				{
					$(msgId).html('Password More Then 6 characters');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    $(id).focus();
                    return false;
				}
				if (!passpattern.test(oldpass))
                {
                    $(msgId).html('Password Contains Only Alpha Numeric and $,#,&,*');
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
				$(id).attr("placeholder","Old Password is required");
				$(msgId).html('');
               // $(msgId1).html('* Password is required.');
                    $(id).css({
                       "border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                    });
                    
                    $(id).focus();
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
                        "box-shadow": ""
					});
					return true;
				}
				else
				{
					$(msgId).html('* It Contains Only Image.');
					$(id).css({
						"border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
					});
					return false;
				}
			}
			else
			{
				$(id).attr("placeholder","Select File Name");
				$(msgId).html('');
				//$(msgId).html('* This field is required.');
                $(id).css({
					"border": "1px solid #B94A48",
						"box-shadow":"1px 1px 1px  #B94A48 "
                });
                    
                $(id).focus();
                return false;
			}
		}
		
		
//});