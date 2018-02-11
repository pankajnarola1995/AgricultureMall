var enq = {};
var imesh_obj = {}; 
imesh_obj = new userDataCookie();
var cefChkUserFlag = 0;
var cefImIntFlag = 0;
var check_price=0;
var industry_ques={};
var industry_html='';
var industry_questions_found=0;
var first_time_call=0;
function notMeE(){
	if($('#'+enq.CEF_img_process).css('display') == 'block')
	{
	     $('#'+enq.CEF_img_process).hide();
         $('#'+enq.CEF_sub_btn).show();   
	}
        cefImIntFlag = 0;
	if($('#queryID').length > 0 && $('#queryID').val() != "")
	{
		$('#queryID').val('');
	}
	$("#CEF_EMFHtmlID").html('');
		$("#CEF_EMFHtmlID").css("display", "none");
		$("#CEF_EnqPart").css("display", "block");
		cefSetProdCompName(enq,'C_Prodname','C_Compname');
		$("#"+enq.CEF_EnqDescDisplay).hide();
	$(".usr_with_ph").css("display", "none");
	$("#"+enq.CEF_S_mobile_field).fadeIn("fast"); 
        $("#C_S_mobile").removeAttr("readonly");
        $('#C_country_dropdown').removeAttr('disabled');  
       titlemobilescreen();
	eraseCookieEnq("ImeshVisitor");
	if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
	{	
		$("#"+enq.CEF_form_id).trigger('reset');
	}
	else
	{
                $('#CEF_IdentifiedInfo').hide();
		$("#"+enq.CEF_form_id).trigger('reset');
	}
	checkCCnCN();
	if((typeof(page.country) != 'undefined' && page.country != "") && (typeof(page.countryCode) != 'undefined' && page.countryCode != ""))
	{
		$("#"+enq.CEF_S_countryname_enq).val(page.country);
		$("#"+enq.CEF_S_country_iso).val(page.countryCode);
	}	
	$("#"+enq.CEF_S_other_fields).hide();
	selectDataListEle(enq.CEF_country_dropdown,page.country);
	$("#"+enq.CEF_chk_usr).val('');
	if(typeof(enq.R_title) === 'undefined' && enq.R_title == "")
	{
		cefFormElementBlur();
	}
}
page.notMeQ.push(notMeE);
function loadImg()
{
	document.getElementById('q-load_img').className="q-soff q-image-container";
	document.getElementById('q-image_div').className="q-don q-image-container";
}
function checkCCnCN()
{
	try{
		if(!(page.country && page.countryCode)){
			var enq_isIndia= (-(new Date).getTimezoneOffset()/60==5.5) ? 1 : 0;
			if(enq_isIndia){
				page.country = 'India';   
				page.countryCode = 'IN';
			}
		}
	}catch(e){
	}
}
var did = {};
var img_form = 0;
function showEnquiryForm(rData)
{
	if($('#queryID').length > 0 && $('#queryID').val() != "")
	{
		$('#queryID').val('');
	}
	if($("#C_Thank_msg").css("display","block") || $("#CEF_EnqThnx").css("display","block") || $("#CEF_OthThank_msg").css("display","block"))
	{
		if($('#'+enq.CEF_EnrichMentFormId).html() != ''){
			$('#'+enq.CEF_EnrichMentFormId).html('');	      
		}
		$('#CEF_EnqThnx').css("display", "none");
		$('#C_Thank_msg').css("display", "none");
		$('#CEF_OthThank_msg').css("display", "none");
		$('#CEF_Enrich_Forsecond').css("display", "none");
		$('#CEF_EnqForm').show();
		$("#enq_form_enrichmt").trigger('reset');               
	}
$('#isImage').show();
$("#blacklayer").css({
    width:"890px"
});
centerEnqDiv();  
formvalidationreset();	
	enq = rData;
	var qstring = rData.query;
	var category = getQueryStringParsedData(qstring, "ctg");
	enq.category = category;
	cefSetFormIDS(enq);	
	checkCCnCN();
	if((typeof(did.lastDid) === 'undefined'))
	{
		did.lastDid = rData.displayId;
		document.getElementById('C_S_countryname_enq').value = page.country;
		document.getElementById('C_S_country_iso').value = page.countryCode;
		cefCountrySuggester();            
	}
	if(industry_questions_found==1)
	{
	enq.industry_ques='|ISQ';
	imInvokeRequestForGaCode('/cgi/enquiry-industry-ques-avail.mp');
	}
else{
	enq.industry_ques='';
}
	var desc_prefilled = 'Please send us details & quotations for \''+rData.titleZoomForm+'\'.';
	if($("#C_S_description").val() == '' ||  (typeof(did.lastDid) != 'undefined' && did.lastDid != rData.displayId))
	{
		$("#C_S_description").val(desc_prefilled);$("#C_S_descriptionVal").val(desc_prefilled);
	}
	did.lastDid = rData.displayId;	
	$('html').css({overflow:"hidden"});
	$('body').css({"overflow-y":"scroll","width":"100%"});
	$('#C_ProdPrice').hide();	
	var zoom_image = getQueryStringParsedData(qstring, "zoom_img");
	var display_image = getQueryStringParsedData(qstring, "display_image");
	var modid = getQueryStringParsedData(qstring, "did");
	var ss = getQueryStringParsedData(qstring, "ss");	
	var R_modref_type = getQueryStringParsedData(qstring, "modreftype");
	var val_imesh = imesh_obj.get();
	var S_glusr_id = "";
	var val_v4iilex= readCookie('v4iilex');
	var is_admin = getparamVal(val_v4iilex, "admln") || '';
	var glid_v4cookie = getparamVal(val_v4iilex, "id") || '';	
	document.getElementById('cefPopup').className="q-don";
	enq.ss = ss;
	enq.R_modref_type = R_modref_type;
	enq.is_admin = is_admin;
	if(val_v4iilex != "" && val_imesh != "" && glid_v4cookie != "")
	{
	    enq.userStatus = 1;
	}
	else if((val_imesh != "") && (typeof(val_imesh.glid) != 'undefined' && val_imesh.glid != ''))
	{
	    enq.userStatus = 2;
	}	
	if(val_imesh != "") 
	{	
		if((typeof(val_imesh.glid) === 'undefined' || val_imesh.glid == '') && (typeof(val_imesh.mb1) != 'undefined' && val_imesh.mb1 !=''))
		{
			cefUserIdentified(val_imesh.mb1);
		}
		imInvokeRequestForGaCode('/cgi/enquiry-form.mp');
		try{
			if((typeof(rData.int_rec != 'undefined') && rData.int_rec == '1') && (typeof(rData.R_title) != 'undefined' && rData.R_title != ""))
			{
				if(cefImIntFlag == 0)
				{		    getInterestRecordId({'R_glusr_id':rData.R_glusr_id,'displayId':rData.displayId,'modreftypflag':R_modref_type,'modid':rData.modid, 'is_admin':is_admin});
				}	
			}
		}catch(e){}
		var full_name = (typeof(val_imesh.fn) != 'undefined' && val_imesh.fn != 'undefined') ? val_imesh.nm : '' ;
		var email = (typeof(val_imesh.em) != 'undefined' && val_imesh.em != 'undefined') ? val_imesh.em : '' ;
		var country = (typeof(val_imesh.cn) != 'undefined' && val_imesh.cn != 'undefined') ? val_imesh.cn : '';
		var city = (typeof(val_imesh.ct) != 'undefined' && val_imesh.ct != 'undefined') ? val_imesh.ct : '';
		var company = (typeof(val_imesh.co) != 'undefined' && val_imesh.co != 'undefined') ? val_imesh.co : '';
		var isd =  (typeof(val_imesh.phcc) != 'undefined' && val_imesh.phcc != 'undefined') ? val_imesh.phcc : '';
		var ph_area = (typeof(val_imesh.phac) != 'undefined' && val_imesh.phac != 'undefined') ? val_imesh.phac : '';		
		var mobile = (typeof(val_imesh.mb1) != 'undefined' && val_imesh.mb1 != 'undefined') ? val_imesh.mb1 : '';
		var phone = (typeof(val_imesh.ph1) != 'undefined' && val_imesh.ph1 != 'undefined') ? val_imesh.ph1 : '';
		var state = (typeof (val_imesh.st) != 'undefined' && val_imesh.st != 'undefined') ? val_imesh.st : '';
		var country_iso = (typeof (val_imesh.iso) != 'undefined' && val_imesh.iso != 'undefined') ? val_imesh.iso : '' ;
		isd = isd.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\+/,'');
		document.getElementById('C_S_email').value = email || "";
		document.getElementById('C_S_name').value = full_name || "";
		document.getElementById('C_S_countryname_enq').value = country || page.country;
		document.getElementById('C_S_country_iso').value = country_iso || page.countryCode;
		document.getElementById('C_S_city_enq').value = city || "";
		document.getElementById('C_S_organization').value = company ||  "";
		document.getElementById('C_S_cmobile_enq').value = '+'+isd ||  "";
		document.getElementById('C_S_ccode').value = isd ||  "";
		document.getElementById('C_S_mobile').value = mobile ||  "";
		document.getElementById('C_S_state_enq').value = state ||  "";
		S_glusr_id = getparamVal(val_v4iilex, "id");
		enq.S_glusr_id = S_glusr_id;
		$("#q-new-usr").hide();
		$("#remain_info").hide();
		$(".usr_with_ph").html('');
		if(mobile == '' && phone != '') 
		{
			cefSetProdCompName(enq,'C_Prodname','C_Compname');
			$("#q-new-usr").show();
			titlemobilescreen();
                        $("#CEF_EnqPart").show();
		}
		else if(mobile != '' && (full_name == '' || email == ''))
		{
			cefSetProdCompName(enq,'C_Prodname','C_Compname');
			$("#q-new-usr").hide();
			$("#remain_info").show();
			titleemailscreen();       		
			$("#CEF_EnqPart").show();
		}
		else
		{
            cefSetProdCompName(enq,'C_Prodname','C_Compname');
			if((cef_EMFDownloadHtml != '') && ($('#CEF_EMFHtmlID').html() == ''))
			{
				$('#CEF_EMFHtmlID').html(cef_EMFDownloadHtml);
				$('#CEF_EMFHtmlID').html($('#CEF_EnrichSection').html());
			}				
			$("#CEF_EnqPart").hide();
			htmlDecideForUser(isd,country,country_iso);
			$("#CEF_EMFHtmlID").css("display", "block");
                        $(".cenq-bar-line").css({
    width:"50%" });
			enquiry_handling();
                             $('#q-second').css("display", "block");
                             if(glmodid=='FCP'){
                            	 $('#industry_ques').html('');
                            	 industry_html='';
                            	 if(enq.CEF_mcat_id!==''){	
                    				 getindustry_specific_ques(enq.CEF_mcat_id,'3'); } 
                             }
                             else{
                             if(first_time_call==0 && enq.CEF_mcat_id!==''){
                				 getindustry_specific_ques(enq.CEF_mcat_id,'3');
                				 setTimeout(function() 
                             			{
                             				if(industry_questions_found==0){
                             					getindustry_specific_ques(enq.CEF_cat_id,'2');
                             					}
                             					  }, 1000);	 
                             }
                			
                             }
		}
		cefNotMe();		
	} 
	else 
	{
		cefSetProdCompName(enq,'C_Prodname','C_Compname');
		imInvokeRequestForGaCode('/cgi/enquiry-form-new.mp');
		selectDataListEle('C_country_dropdown',page.country);
		if(($('#cefChkUser').val() == 'Not Exist') || ($("#cefChkUser").val() == 'Exist'))
		{
			$("#remain_info").show();
                         titleemailscreen();
		}
		else
		{
			$("#CEF_EnqPart").show();
			$("#q-new-usr").show();
                     titlemobilescreen();
			$("#remain_info").hide();
		}
	}
	$("#CEF_NoImg").removeClass("q-don").addClass("q-soff");
	if(display_image || zoom_image)
	{
		document.getElementById('small_image').src =  display_image;
		document.getElementById('big_img').src =  zoom_image;
		img_form = 1;
	} 
	else 
	{	img_form = 0;
		$("#q-load_img").removeClass("q-don").addClass("q-soff");
		$("#q-image_div").removeClass("q-don").addClass("q-soff");
		$("#CEF_NoImg").removeClass("q-soff").addClass("q-don");
	}
	try{
		if(typeof(enq.enq_item_price) != "undefined" && enq.enq_item_price != '')
		{
                        
			$('#C_ProdPrice').show();
                         changeFontSize();
			$('#C_PriceVal').html(enq.enq_item_price);
		}
	}catch(e){}
	try{
		if(typeof(enq.prev) != "undefined" && typeof(enq.prev) === "function")
		{
			$('#qpre').show();				
		}
		else
		{
			$('#qpre').hide();
		}
		if(typeof(enq.next) != "undefined" && typeof(enq.next) === "function")
		{
			$('#qnext').show();
                        $('#view_next').removeClass('doff').addClass('don');			
		}
		else
		{
			$('#qnext').hide();
                        $('#view_next').removeClass('don').addClass('doff');	
		}
	}catch(e){
	}
	$("#"+enq.CEF_OverlayId).css("display", "block");
	$("#enquiry").show();
	$('#cefPopup').show();
	try{
		if(typeof(enq.enq_mob_app) != 'undefined' && enq.enq_mob_app > '0')
		{
			if(readCookie('enqMobBnr') == '')
			{
				showMobileBanner();
			}
			document.getElementById('mob_app_banner').style.display='none';
		}
	}catch(e){}
if(typeof(enq.R_title) == 'undefined' || enq.R_title == "")
{
$('#CEF_IdentifiedInfo').hide();
$('#isImage').hide();
$("#blacklayer").css({
    width:"390px"
});
$('.enqFormConatiner').css({"margin-left":"0px"});
centerEnqDiv();   
}
$('#'+enq.CEF_img_process).hide();
	    $('#'+enq.CEF_sub_btn).show();
	centerEnqDiv();
$('#C_Est_Qty').focus();
}
function cenqPreProd()
{
	cefImIntFlag = 1;
	enq.prev.apply();
	imInvokeRequestForGaCode('/cgi/enquiry-form-pre.mp');
}
function cenqNxtProd()
{
	cefImIntFlag = 1;
	enq.next.apply();
	imInvokeRequestForGaCode('/cgi/enquiry-form-nxt.mp');
}
function getUtilsDomainURL()
{
	var utils_host_nm = 'utils.imimg.com';
	var mapi_host_nm = 'mapi.indiamart.com';
	if(window.location.href.match(/(\/\/dev-|\/\/dev.|file:\/\/)/ig))
	{
		utils_host_nm = 'dev-utils.imimg.com';
		mapi_host_nm = 'dev-mapi.indiamart.com';
	}else if(window.location.href.match(/(\/\/stg-|\/\/stg.|file:\/\/)/ig))
	{
		utils_host_nm = 'stg-utils.imimg.com';
		mapi_host_nm = 'stg-mapi.indiamart.com';
	}
	return [utils_host_nm,mapi_host_nm];
}
function cefSetProdCompName(data,CEF_Prodname,CEF_Compname)
{
	$("#"+CEF_Prodname).html('');
	$("#"+CEF_Compname).html('');
	if(data.R_data_type == 'company')
	{
		$("#"+CEF_Prodname).html(data.company);
		$("#"+CEF_Compname).html('');
	}else if(typeof(data.R_title != undefined) && data.R_title != "")
	{	
		$("#"+CEF_Prodname).html(data.R_title);
                $("#"+CEF_Prodname).show();
		$("#"+CEF_Compname).html('By: '+data.company);
	}
	else if(data.R_title == "" && data.company !='')
	{	
		$("#"+CEF_Prodname).hide();
		$("#"+CEF_Compname).removeClass().addClass($("#"+CEF_Prodname).attr('class'));
		$("#"+CEF_Compname).html(data.company);
	}
}
function htmlDecideForUser(isdCode,countryName,countryISO)
{
	//$("#cef_vd3").css("display", "none");	
	if((isdCode == '+91' || isdCode == '91') && (countryName == 'India' || countryISO == 'IN'))
	{
		$('#q_in_units').show();
		$('#q_fr_units').hide();
		$("#C_Approx_Order_Val").empty();
		$("#C_Approx_Order_Val").html('<option value="">Approximate order value</option><option value="100">Upto 1,000</option><option value="200">1,000 to 3,000</option><option value="300">3,000 to 10,000</option><option value="400">10,000 to 20,000</option><option value="500">20,000 to 50,000</option><option value="600">50,000 to 1 Lakh</option><option value="700">1 to 2 Lakh</option><option value="800">2 to 5 Lakh</option><option value="900">5 to 10 Lakh</option><option value="1000">10 to 20 Lakh</option><option value="1100">20 to 50 Lakh</option><option value="1200">50 Lakh to 1 Crore</option><option value="1300">More than 1 Crore</option>');
		$("#C_india_loc").css("display", "block");
		$('#C_Spec_Loc1_id').val('');
	}
	else
	{
		$("#C_india_loc").css("display", "none");
		$('#q_in_units').hide();
		$('#q_fr_units').show();
		$("#C_Approx_Order_Val").empty();
		$("#C_Approx_Order_Val").html('<option value="">Approximate order value</option><option value="100">Upto 1000</option><option value="200">1000 to 3000</option><option value="300">3000 to 10000</option><option value="400">10000 to 20000</option><option value="500">20000 to 50000</option><option value="600">50000 to 0.1 Million</option><option value="700">0.1 to 0.2 Million</option><option value="800">0.2 to 0.5 Million</option><option value="900">0.5 to 1 Million</option><option value="1000">1 to 2 Million</option><option value="1100">2 to 5 Million</option><option value="1200">5 to 10 Million</option><option value="1300">More than 10 Million</option>');
		$("#C_foreign_loc").css("display", "block");	
                $("#q_country_span").text("In "+countryName+ " only");   
	}
	$("#C_Desc_Prod").attr("placeholder", "Please provide product details like Size, Color, Type, Material, Pattern, Variant, Model,  Packaging Details etc");
	$("#C_Desc_Prod2").attr("placeholder", "Please provide Product Usage/ Application in detail");
}
function hideEnquiryForm()
{
	$('#small_image').attr('src', '');$('#big_img').attr('src', '');
	document.getElementById('cefPopup').className="q-soff";
	document.getElementById('q-load_img').className="q-don q-image-container";
	document.getElementById('q-image_div').className="q-soff q-image-container";
	$('#'+enq.CEF_OverlayId).css("display","none");
	$('#enquiry').hide();
	$('#CEF_EMFHtmlID').html('');
	$('html').css({overflow:"auto"});
	$('body').css({"overflow-y":"auto","width":"100%"}); 
	//  	clearTimeout(enq.close_mob_banner);
}
function descriptionV() 
{
	var descr = $("#"+enq.CEF_EnqDesc).val();
	$("#"+enq.CEF_S_description_errMsg).html('');
	var val = descr;
	val = val.replace(/\s/g, "");
	if(val!="")
	{
		if(descr.match(/\S+/g).length < 3)
		{
			$("#"+enq.CEF_S_description_errMsg).html('Please enter atleast 3 words in requirement.');
			$("#"+enq.CEF_EnqDesc).removeClass("valid").addClass("invalid");
			return false;
		}

		if($("#"+enq.CEF_EnqDesc).val().length > 2000) {
			$("#"+enq.CEF_S_description_errMsg).html('You can not type more than 2000 characters.');
			return false;
		}
	}
	else
	{
		$("#"+enq.CEF_S_description_errMsg).html('Please enter atleast 3 words in requirement.');
		$("#"+enq.CEF_EnqDesc).removeClass("valid").addClass("invalid");
		return false;
	}
	$("#"+enq.CEF_S_description_errMsg).html('');
	$("#"+enq.CEF_EnqDesc).removeClass("invalid").addClass("valid");
	return true;
}
function mobileV()
{	
	var mobVal = $("#"+enq.CEF_S_mobile).val();
	mobVal = mobVal.replace(/^\s*|\s*$/g,'');
	var mobrRegex = /^[0-9-+()./ ]*$/;
	$("#"+enq.CEF_S_mobile_errMsg).html('');
	if (((mobVal == '') || (mobVal.length == 0))) 
	{
		$("#"+enq.CEF_S_mobile_errMsg).html('Please enter your mobile number.');
		$("#"+enq.CEF_S_mobile).removeClass("valid").addClass("invalid");
		return false;
	}
	else if (mobrRegex.test(mobVal))
	{
		mobVal = mobVal.replace(/[() .-]/g,''); 	//Replace special characters i.e (, ), -, . with spaces
		mobVal = mobVal.replace(/[+]/g, '');
		if($("#"+enq.CEF_S_cmobile_enq).val() == '+91' || $("#"+enq.CEF_S_cmobile_enq).val() == '91' || $("#"+enq.CEF_S_country_iso).val() == 'IN')
		{
			mobVal = mobVal.replace(/^[0]+/g,'');
			var mobCnt = (mobVal.match(/[0-9]/g) || []).length;
			if(mobCnt > 10)
			{
			      mobVal = mobVal.replace(/^((91){0,1}0{0,})/g,'');		      
			}
			
			var mobCount = (mobVal.match(/[0-9]/g) || []).length;
			if(mobCount != 10) 
			{
			      $("#"+enq.CEF_S_mobile_errMsg).html('Please enter 10 digit mobile number.');
			      $("#"+enq.CEF_S_mobile).removeClass("valid").addClass("invalid");
			      $("#"+enq.CEF_S_mobile).val(mobVal);
			      return false;		      
			}
			
			var mobValFilter = /^(?:(?:\+|0{0,2})(91|910)(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
			if (mobValFilter.test(mobVal))
			{ 
			      $("#"+enq.CEF_S_mobile_errMsg).html('');
			      $("#"+enq.CEF_S_mobile).removeClass("invalid").addClass("valid");
			      $("#"+enq.CEF_S_mobile).val(mobVal);
			      return true;		      
			}	//Success
			else 
			{
			      $("#"+enq.CEF_S_mobile_errMsg).html('Please enter correct mobile number.');
			      $("#"+enq.CEF_S_mobile).removeClass("valid").addClass("invalid");
			      return false; 		      
			}
		}
		return true;
	} 
	else {
		$("#"+enq.CEF_S_mobile_errMsg).html('Please enter correct mobile number.');
		$("#"+enq.CEF_S_mobile).removeClass("valid").addClass("invalid");
		return false;
	}	
}
function nameV()
{
	$("#"+enq.CEF_S_name_errMsg).html('');
	var name = $("#"+enq.CEF_S_name).val();
	name = name.replace(/\s/g, "");
	$("#"+enq.CEF_S_name).removeClass("invalid").addClass("valid");
	if(name == '' ){
		$("#"+enq.CEF_S_name_errMsg).html('Please enter your name.');
		$("#"+enq.CEF_S_name).removeClass("valid").addClass("invalid");
		return false;
	}
	else
	{
		$("#"+enq.CEF_S_name_errMsg).html('');
		$("#"+enq.CEF_S_name).removeClass("invalid").addClass("valid");
		return true;
	}
}
function emailV()
{
	$("#"+enq.CEF_S_email_errMsg).html('');
	if($('#'+enq.CEF_S_email).val() == ''){
		$("#"+enq.CEF_S_email_errMsg).html('Please enter your Email.');
		$("#"+enq.CEF_S_email).removeClass("valid").addClass("invalid");
		return false;
	}
	else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test($('#'+enq.CEF_S_email).val()))) {
		$("#"+enq.CEF_S_email_errMsg).html('Invalid Email ID. Please enter the correct Email ID.');
		$("#"+enq.CEF_S_email).removeClass("valid").addClass("invalid");
		return false;
	}
	else
	{
		$("#"+enq.CEF_S_email_errMsg).html('');
		$("#"+enq.CEF_S_email).removeClass("invalid").addClass("valid");
		centerEnqDiv();
		return true;
	}
}
function cefValidate()
{
	var mobile_val='';
	if($('#'+enq.CEF_form_id+' #'+enq.CEF_S_mobile).length > 0)
	{
		mobile_val = $("#"+enq.CEF_S_mobile).val();
	}
	else
	{
		mobile_val=$("#C_S_mobile").val();
	}
	var sbmt = false;
	var imesh_cook_val = imesh_obj.get();
	if(imesh_cook_val != "") 
	{
		if((typeof(imesh_cook_val.ph1) != 'undefined' && imesh_cook_val.ph1 != '') && (typeof(imesh_cook_val.mb1) === 'undefined' || imesh_cook_val.mb1 == ''))
		{
			sbmt = mobileV();
			if(sbmt)
			{
				$('#C_ProcessImg').show();
				$('#b_sub').hide();
				cefUserUpdateService();
			}
		}
		else if((typeof(imesh_cook_val.nm) === 'undefined' || imesh_cook_val.nm == '') || (typeof(imesh_cook_val.em) === 'undefined' || imesh_cook_val.em == ''))
		{
			sbmt = nameV() & emailV();
			if(sbmt)
			{
				$('#C_ProcessImg').show();
				$('#b_sub').hide();
				cefUserUpdateService();
			}
		}
		else
		{
			sbmt = descriptionV();
			if(sbmt)
			{
				$('#C_ProcessImg').show();
				$('#b_sub').hide();
				cefUserUpdateService();
			}
		}
	}
	else
	{
		sbmt = mobileV();
		if(sbmt)
		{
			$('#C_ProcessImg').show();
			$('#b_sub').hide();
			userDetailsAutoFetch(mobile_val);		      
		}
	}		
}
function cefFormValidate(formData)
{
	cefSetFormIDS(formData);	
	var sbmt = false;
	var imesh_cook_val = imesh_obj.get();
	if(imesh_cook_val != "") 
	{
		if((typeof(imesh_cook_val.ph1) != 'undefined' && imesh_cook_val.ph1 != '') && (typeof(imesh_cook_val.mb1) === 'undefined' || imesh_cook_val.mb1 == ''))
		{
			sbmt = descriptionV() & mobileV();
			if(sbmt)
			{
				$('#'+enq.CEF_img_process).show();
				$('#'+enq.CEF_sub_btn).hide();
				cefUserUpdateService();
			}
		}
		else if((typeof(imesh_cook_val.nm) === 'undefined' || imesh_cook_val.nm == '') || (typeof(imesh_cook_val.em) === 'undefined' || imesh_cook_val.em == ''))
		{
			sbmt = descriptionV() & nameV() & emailV();
			if(sbmt)
			{
				$('#'+enq.CEF_img_process).show();
				$('#'+enq.CEF_sub_btn).hide();
				cefUserUpdateService();
			}
		}
		else
		{
			sbmt = descriptionV();
			if(sbmt)
			{
				$('#'+enq.CEF_img_process).show();
				$('#'+enq.CEF_sub_btn).hide();
				cefGetUserInfo();
				cefShowEnqEMTForm();
				cefEnqBtnDisable();
				processSendEnquiry();			
			}
		}
	}
	else
	{
		sbmt = descriptionV() & mobileV();
		if(sbmt)
		{
			$('#'+enq.CEF_img_process).show();
			$('#'+enq.CEF_sub_btn).hide();
			userDetailsAutoFetch($('#'+enq.CEF_S_mobile).val());      
		}
		
	}	
}
function getQueryStringParsedData ( qstr, key ) {
	var queryStringDictionary = {};
	var querystring = unescape(qstr);
	if (!querystring) { return {}; }
	var pairs = querystring.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var keyValuePair = pairs[i].split("=");
		queryStringDictionary[keyValuePair[0]] = keyValuePair[1];
	}
	if ( queryStringDictionary[key] != 'undefined' ) {
		return queryStringDictionary[key];
	} else {
		return '';
	}
}
function getparamVal(cookieStr, key)
{
	if( cookieStr > "")	
	{
		var val = "|"+cookieStr+"|";
		var pattern = new RegExp(".*?\\|"+key+"=([^|]*).*|.*");
		return val.replace(pattern, "$1");
	}
	else 
	{
		return "";
	}
}
function replaceClass(id,rClass,nClass)
{
	document.getElementById(id).classList.remove(nClass);
	document.getElementById(id).classList.add(nClass);
}
function onfocusErrMsg(Id) 
{
	$("#"+Id+"_errMsg").html('');
	$("#"+Id).removeClass("invalid").addClass("valid");
}
function getFirstLastName()
{
	var name_string = document.CEF_EnqForm.C_S_name.value;
	name_string = $.trim(name_string);
	var name_array = name_string.split(/\s+/);
	if(name_array.length == 1) {
		var first_name = name_array[0];
		var last_name = "";
	} 
	else 
	{
		var last_name = name_array.pop();
		var first_name = name_array.join(" ");
	}
	return {'first_name':first_name, 'last_name':last_name};
}
function charLimit(el, maxLength) {
	if (el.value.length > maxLength) return false;
	return true;
}
function onSelectCityEnq(event, ui) {
	if (typeof (ui) != "undefined") {
		if (typeof (ui.item.data) != "undefined") {
			this.value = ui.item.value;
			$('#'+enq.CEF_S_state_enq).val(ui.item.data.state);
			$('#'+enq.CEF_S_city_id).val(ui.item.data.id);
			$('#'+enq.CEF_S_state_id).val(ui.item.data.stateid);
			//$('#C_EnqBtn').focus();
		}
	}
}
function onExplicitChangeCityEnq(event, ui) {
	if (typeof (ui) != "undefined") {
		if (typeof (ui.item.data) != "undefined") {
			$('#'+enq.CEF_S_state_enq).val(ui.item.data.state);
			// 	document.getElementById('C_S_state_enq').value = ui.item.data.state;
		}
	}
}
function cefSetFormIDS(enqData)
{
	enq = enqData;
	enq.CEF_OverlayId = $('#'+enq.CEF_OverlayId).length > 0 ? enq.CEF_OverlayId : '';
	enq.CEF_form_id = $('#'+enq.CEF_form_id).length > 0 ? enq.CEF_form_id : 'CEF_EnqForm';
	enq.CEF_country_dropdown = $('#'+enq.CEF_form_id+' #'+enq.CEF_country_dropdown).length > 0 ? enq.CEF_country_dropdown :'C_country_dropdown';
	enq.CEF_EnqDesc = $('#'+enq.CEF_form_id+' #'+enq.CEF_EnqDesc).length > 0 ? enq.CEF_EnqDesc :'C_S_description';      
	enq.CEF_S_cmobile_enq = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_cmobile_enq).length > 0 ? enq.CEF_S_cmobile_enq : 'C_S_cmobile_enq';
	enq.CEF_S_ccode = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_ccode).length > 0 ? enq.CEF_S_ccode : 'C_S_ccode';
	enq.CEF_S_mobile = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_mobile).length > 0 ? enq.CEF_S_mobile : 'C_S_mobile';
	enq.CEF_S_name = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_name).length > 0 ? enq.CEF_S_name : 'C_S_name';
	enq.CEF_S_email = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_email).length > 0 ? enq.CEF_S_email : 'C_S_email';
	enq.CEF_S_city_enq = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_city_enq).length > 0 ? enq.CEF_S_city_enq : 'C_S_city_enq';
	enq.CEF_S_state_enq = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_state_enq).length > 0 ? enq.CEF_S_state_enq : 'C_S_state_enq';
	enq.CEF_S_city_id = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_city_id).length > 0 ? enq.CEF_S_city_id : 'C_S_city_id';
	enq.CEF_S_state_id = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_state_id).length > 0 ? enq.CEF_S_state_id : 'C_S_state_id';
	enq.CEF_S_organization = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_organization).length > 0 ? enq.CEF_S_organization : 'C_S_organization';
	enq.CEF_S_countryname_enq = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_countryname_enq).length > 0 ? enq.CEF_S_countryname_enq : 'C_S_countryname_enq';
	enq.CEF_S_country_iso = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_country_iso).length > 0 ? enq.CEF_S_country_iso : 'C_S_country_iso';
	enq.CEF_S_description_errMsg = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_description_errMsg).length > 0 ? enq.CEF_S_description_errMsg : 'C_S_description_errMsg';
	enq.CEF_S_mobile_errMsg = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_mobile_errMsg).length > 0 ? enq.CEF_S_mobile_errMsg : 'C_S_mobile_errMsg';
	enq.CEF_S_name_errMsg = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_name_errMsg).length > 0 ? enq.CEF_S_name_errMsg : 'C_S_name_errMsg';
	enq.CEF_S_email_errMsg = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_email_errMsg).length > 0 ? enq.CEF_S_email_errMsg : 'C_S_email_errMsg';
	enq.CEF_img_process = $('#'+enq.CEF_form_id+' #'+enq.CEF_img_process).length > 0 ? enq.CEF_img_process : 'C_ProcessImg';
	enq.CEF_sub_btn = $('#'+enq.CEF_form_id+' #'+enq.CEF_sub_btn).length > 0 ? enq.CEF_sub_btn : 'b_sub';
	enq.CEF_chk_usr = $('#'+enq.CEF_form_id+' #'+enq.CEF_chk_usr).length > 0 ? enq.CEF_chk_usr : 'cefChkUser';
	enq.CEF_S_other_fields = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_other_fields).length > 0 ? enq.CEF_S_other_fields : 'remain_info';
	enq.CEF_S_mobile_field = $('#'+enq.CEF_form_id+' #'+enq.CEF_S_mobile_field).length > 0 ? enq.CEF_S_mobile_field : 'q-new-usr';
	enq.CEF_identified_info = $('#'+enq.CEF_form_id+' #'+enq.CEF_identified_info).length > 0 ? enq.CEF_identified_info : '';
	enq.CEF_EnqDescDisplay = 'C_EnqDesc';
	enq.CEF_form_disp_id = $('#'+enq.CEF_form_disp_id).length > 0 ? enq.CEF_form_disp_id : 'CEF_EnqForm';
	if(glmodid=='FCP'){
	enq.CEF_form_type = enq.CEF_form_type.length > 0 ? enq.CEF_form_type : '';}
	enq.CEF_EnrichMentFormId = $('#'+enq.CEF_EnrichMentFormId).length > 0 ? enq.CEF_EnrichMentFormId : 'CEF_EMFHtmlID';
	enq.CEF_Thnx_msg = $('#'+enq.CEF_Thnx_msg).length > 0 ? enq.CEF_Thnx_msg : 'C_Thank_msg';
	enq.CEF_mcat_id = (typeof(enq.enq_mcat_id) != 'undefined' && enq.enq_mcat_id != '') ? enq.enq_mcat_id : (typeof(page.mcatIds) != 'undefined' && page.mcatIds[0] != '' ? page.mcatIds[0] : '');
	enq.CEF_cat_id = (typeof(enq.enq_cat_id) != 'undefined' && enq.enq_cat_id != '') ? enq.enq_cat_id : (typeof(enq.category) != 'undefined' && enq.category != '' ? enq.category : '');
}
function cefFormElementBlur()
{
	$('#'+enq.CEF_EnqDesc).attr("onblur","descriptionV()");
	$('#'+enq.CEF_S_mobile).attr("onblur","mobileV()");
	$('#'+enq.CEF_S_name).attr("onblur","nameV()");
	$('#'+enq.CEF_S_email).attr("onblur","emailV()");
}
function cefCountrySuggester()
{
	var userCountryISO = page.countryCode;
	if(typeof(imesh_obj.get().iso) != 'undefined' && imesh_obj.get().iso != '')
	{
	    userCountryISO = imesh_obj.get().iso;
	}
	var sugg_isd = new Suggester({"type":"isd","element":enq.CEF_country_dropdown,"onSelect":cefSelectCountry, fields: "cname,iso,icon_order",displayFields:"cname,value",displaySeparator:'  +','defaultValue':userCountryISO});
}
function cefSelectCountry(event, ob)
{
	var imesh_cook_val = imesh_obj.get();
        if(imesh_cook_val != "") 
	{
		if((typeof(imesh_cook_val.ph1) != 'undefined' && imesh_cook_val.ph1 != '') && (typeof(imesh_cook_val.mb1) === 'undefined' || imesh_cook_val.mb1 == '') && (typeof(imesh_cook_val.iso) != 'undefined' || imesh_cook_val.iso != page.countryCode))
		{
			$("#"+enq.CEF_country_dropdown+" dt a span").attr('style','background-position:0px -'+ob.data.icon_order*11+'px');
			$("#"+enq.CEF_country_dropdown+" dt span.value").html('+'+ob.value);
			$('#'+enq.CEF_S_countryname_enq).val(ob.data.cname);
			$('#'+enq.CEF_S_country_iso).val(ob.data.iso);
			$('#'+enq.CEF_S_cmobile_enq).val('+' + ob.value);
			$('#'+enq.CEF_S_ccode).val(ob.value);
		}
	}
	else
	{
		$("#"+enq.CEF_country_dropdown+" dt a span").attr('style','background-position:0px -'+ob.data.icon_order*11+'px');
		$("#"+enq.CEF_country_dropdown+" dt span.value").html('+'+ob.value);
		$('#'+enq.CEF_S_countryname_enq).val(ob.data.cname);
		$('#'+enq.CEF_S_country_iso).val(ob.data.iso);
		$('#'+enq.CEF_S_cmobile_enq).val('+' + ob.value);
		$('#'+enq.CEF_S_ccode).val(ob.value);
	}
	var q_sugg_city = new Suggester({
			"element": enq.CEF_S_city_enq,
			"onSelect": onSelectCityEnq,
			"onExplicitChange": onExplicitChangeCityEnq,
			minStringLengthToFetchSuggestion: 1,
			type: "city",
			fields: "state,id,stateid",
			minStringLengthToDisplaySuggestion: 1,
			displaySeparator: " >> ",
			displayFields: "value,state",
			autocompleteClass: "",
			filters: "iso:" + ob.data.iso,
			recentData:"false"
			});
}
$(".q-enter-submit").bind("keydown",function(event){var code_event=(event.keyCode?event.keyCode:event.which);if(code_event=='13'){
		if(enq.CEF_form_id == 'CEF_EnqForm')
		{
		cefValidate();
		}
		else
		{
		cefFormValidate();
		}  
		}})
$(document).keydown(function(e) {
		if(e.keyCode == 27 )
		{
		cefImIntFlag = 0;
		if($('#queryID').length > 0 && $('#queryID').val() != "")
		{
		$('#queryID').val('');
		}
		var cef_esc_flag = 0;
		if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
		{
		if($('#'+enq.CEF_form_disp_id).css('display') == 'block' && $('#CEF_EMFHtmlID').css('display') == 'none')
		{
		cef_esc_flag = 1;
		imInvokeRequestForGaCode('/cgi/enquiry-escape.mp');
		hideEnquiryForm();
		}
		else if($('#'+enq.CEF_Thnx_msg).css('display') == 'block')
		{
		cef_esc_flag = 1;
		imInvokeRequestForGaCode('/cgi/enquiry-close-thnx.mp');
		hideEnquiryForm();
		}
		else if(($('#'+enq.CEF_form_disp_id).css('display') == 'block') && ($('#CEF_EMFHtmlID').css('display') == 'block' && $('#CEF_Enrich_Forsecond').css('display') == 'none'))
		{
			cef_esc_flag = 1;
			imInvokeRequestForGaCode('/cgi/enquiry-escape-second.mp');
			hideEnquiryForm();    
		}
		else if($('#CEF_Enrich_Forsecond').css('display') == 'block')
		{
			cef_esc_flag = 1;
			imInvokeRequestForGaCode('/cgi/enquiry-escape-third.mp');
			hideEnquiryForm();
		}	      	      
		}
		else
		{
			if(($('#'+enq.CEF_form_disp_id).css('display') == 'block') && ($('#'+enq.CEF_EnrichMentFormId).css('display') == 'none') && (enq.CEF_form_type == ''))
			{
				cef_esc_flag = 1;
				imInvokeRequestForGaCode('/cgi/enquiry-escape.mp');
				hideEnquiryForm();
			}
			else if($('#CEF_OthThank_msg').css('display') == 'block')
			{
				cef_esc_flag = 1;
				imInvokeRequestForGaCode('/cgi/enquiry-close-thnx.mp');
				$('#'+enq.CEF_EnrichMentFormId).hide();
			}
			else if($('#'+enq.CEF_EnrichMentFormId).css('display') == 'block' && $('#CEF_Enrich_Forsecond').css('display') == 'none')
			{
				cef_esc_flag = 1;
				imInvokeRequestForGaCode('/cgi/enquiry-escape-second.mp');
				if(typeof(enq.CEF_form_type) === 'undefined' || enq.CEF_form_type == "")
				{
					$('#'+enq.CEF_EnrichMentFormId).hide();
                                        hideEnquiryForm();
				}
			}
			else if($('#CEF_Enrich_Forsecond').css('display') == 'block')
			{
				cef_esc_flag = 1;
				imInvokeRequestForGaCode('/cgi/enquiry-escape-third.mp');
				$('#'+enq.CEF_EnrichMentFormId).hide();
			}
		}
		if(cef_esc_flag == 1)
		{
			if((typeof(enq.CEF_enrichFormAction) != "undefined") && (typeof(enq.CEF_enrichFormAction) === "function"))
			{
				enq.CEF_enrichFormAction.apply();				
			}
		}      
		}

});
$('#CEF_EnqForm input').on('keydown', function(event) 
		{
		var code_event=(event.keyCode?event.keyCode:event.which);
		if( code_event == 9 ) {
		// "last" button got focus: set focus to the first field
		}
		if (code_event == 13) {
		cefValidate();
		}
		});
function eraseCookieEnq(name) {
	createCookieEnq(name,"undef",-1);
}
function centerEnqDiv()
{
	var top_h = ($(window).height() - $('.qv_pane').height()) / 2;
	var left_l = ($(window).width() - $('.qv_pane').width()) / 2;
	$('.qv_pane').css({"left": left_l + "px", "top": top_h + "px"});
}
$(window).resize(function(){
		centerEnqDiv();
		});
function onResizeIe8FormPosition(enqID, imgEnq)
{
	var ub = $.browser;
	if(ub.msie && ub.version.slice(0,1) == "8")
	{
		if(imgEnq)
		{
			$('#'+enqID).css({"left":"20%","top":"5%"});
		}else 
		{
			$('#'+enqID).css({"left":"35%","top":"5%"});
		}
	}
}
function activateEnqConversionTracking(){
	var img1 = document.createElement("img");
	var img2 = document.createElement("img");
	img1.onload = function() { return; };
	img2.onload = function() { return; };

	img1.src = "//www.googleadservices.com/pagead/conversion/1067418746/?value=1.00&label=qPViCN7MqQkQ-oj-_AM&guid=ON&script=0";
	img2.src = "//www.googleadservices.com/pagead/conversion/975765630/?value=1.00&label=RDmqCJq2uAkQ_oCk0QM&guid=ON&script=0";
}
function imInvokeRequestForGaCode( trackScript ){
	//<!--google analytics async code start-->
	var script = trackScript;
	_gaq.push(['_trackPageview', script]);
	//<!--google analytics async code end-->
}
function processSendEnquiry()
{  
	//var user_location =cefGetUserLocation();
      var cef_user_IP = '';
      var host_nm =getUtilsDomainURL();
      if((typeof(enq.country_iso) != 'undefined' && enq.country_iso != "" && enq.country_iso.length > 2) || (typeof(enq.C_S_country) != 'undefined' && enq.C_S_country != "" && enq.C_S_country == 'Asia/Pacific Region'))
      {
	    enq.country_iso = 'IN';
	    enq.C_S_country = 'India';
	    cef_user_IP = 'India';
      }
      var params_request = {};
	params_request  = {   
		"S_name": enq.C_S_name,
		"S_mobile":enq.C_S_mobile,
		"remote_host":page.countryIp,
		"S_pin":"",
		"S_glusr_id":enq.S_glusr_id,
		"S_fax":"",
		"S_organization":enq.C_S_organization,
		"s_ip_country":cef_user_IP || page.country,
		"S_salute":'',
		"S_designation":"",
		"country_name":page.country,
		"S_acode":"",
		"S_referrer": enq.query_ref_cur_url,
		"Send_mail_to_receiver":"defer",
		"S_Query_Modid":enq.modid,
		"S_city": enq.C_S_city,
		"S_state_id":enq.C_S_state_id,
		"S_streetaddress":"",
		"S_state":enq.C_S_state,
		"gluser_id":enq.R_glusr_id,
		"S_city_id":enq.C_S_city_id,
		"S_last_name":enq.S_last_name,
		"token":"imartenquiryprovider",
		"S_first_name":enq.S_first_name,
		"query_ref_text":"",
		"S_phone":"",
		"recipient":"qhhome@indiamart.com",
		"S_country": enq.C_S_country,
		"S_ccode":enq.C_S_cmobile,
		"S_email":enq.C_S_email,
		"country_iso":enq.C_S_country_iso,
		"S_username":enq.C_S_name,
		"modrefid":enq.displayId,
		"S_subject":"",
		"Description":enq.C_S_description,
		"S_website":"",
		"mcat":enq.CEF_mcat_id,
		"IamInterested_id":enq.interestId,
		"modreftype":enq.R_modref_type,
		"in_force_destination":"",
		"usr_login_mode":"",
		"query_actual_url":"",
		"query_ref_current_url":enq.query_ref_cur_url,
		"query_ref_url":document.referrer,
		"ss":"",
		"ctg":enq.CEF_cat_id,
		"grp":"",
		"from_refer":"search",  
		"S_lat":"",
		"S_long":""
	};
	if(enq.R_modref_type != 1)
	{
		params_request.product_name = enq.R_title;
	}	
	var custtyp_paid = {1399:0, 1299:-1, 1879:0, 1890:0, 1999:0, 4299:0, 149:-1, 2199:-1, 199:-1, 1199:-1, 1899:0, 3299:0, 699:-1, 1499:-1, 2399:-1, 1869:0, 179:-1, 700:-1, 750:-1 };
	var category_type = 'p';	
	if(typeof(custtyp_paid[enq.R_custtype_weight]) != "undefined" )
	{
		if(custtyp_paid[enq.R_custtype_weight] == 0)
		{
			category_type = "f";
		} else 
		{
			category_type = "p";
		}
	}	
	params_request.category_type = category_type;	
	params_request.query_ref_text = enq.query_text+enq.industry_ques;
	var usr_login_mode=0;
	var imesh_cookie_val = imesh_obj.get();
	if(typeof(enq.userStatus) != 'undefined' && enq.userStatus == 1)
	{
		usr_login_mode=1;
		imInvokeRequestForGaCode('/cgi/enquiry-sent.mp');
	}
	else if(typeof(enq.userStatus) != 'undefined' && enq.userStatus == 2)
	{
		usr_login_mode=2;
		imInvokeRequestForGaCode('/cgi/enquiry-sent-identify.mp');
	}
	else if(typeof(enq.userStatus) != 'undefined' && enq.userStatus == 3)
	{
	      usr_login_mode=3;
	      imInvokeRequestForGaCode('/cgi/enquiry-sent-new.mp');
	}
	if(typeof(params_request.S_glusr_id) === 'undefined' || params_request.S_glusr_id == '')
	{
		params_request.S_glusr_id = imesh_cookie_val.glid;
	}	
	params_request.usr_login_mode = usr_login_mode;	
	var cookie_site_entry_page = readCookie('site-entry-page');
	var entrypagecookie = (cookie_site_entry_page) ? cookie_site_entry_page.substr(0, 500) : '';
	params_request.query_actual_url = cookie_site_entry_page;	
	params_request.ss = enq.ss;	
	var imEqGlCookie_value = readCookie('imEqGl');
	var imEqGlCookie_flag = (!imEqGlCookie_value) ? 1 : 0;
	var in_force_destination = '';
	if(imEqGlCookie_flag){
		in_force_destination = 2;
	}	
// 	params_request.in_force_destination = in_force_destination;	
	$.ajax({	  
	    url:'//'+host_nm[1]+'/wservce/enquiry/index.php/enquiry/saveenquiry/',
	    data:params_request,
	    type:"POST",
	    dataType:"json",
	    crossDomain: true,
	    success: function(response)
	    {
		  response.S_mobile = enq.C_S_mobile;
		  response.modid = enq.modid;
		  response.country= enq.C_S_country;
		  if(response.queryid != '' )
		  {
			$('#queryID').val(response.queryid);
			$('#query_type').val(response.query_destination);
			$('#modid').val(response.modid);
			if((typeof(enq.R_title) != 'undefined' && enq.R_title != "") && (cefChkUserFlag == 0))
			{
				cefCallFirstEMTFormService();
			}			    
		  }
		  else
		  {
			cefServiceError(response,params_request);
		  }
	    },
          error: function(message)
         {
imInvokeRequestForGaCode('/cgi/enquiry-enquiry-error.mp');
}
      });
} 

function userDetailsAutoFetch(mobile_no)
{
	var isd_code = $('#'+enq.CEF_S_cmobile_enq).val().replace(/\+/,'');
	var cefCountryName = $('#'+enq.CEF_S_countryname_enq).val();
	var cefCountryISO = $('#'+enq.CEF_S_country_iso).val();	
	var host_nm =getUtilsDomainURL();
	var params_request = {  
		'user_name':mobile_no,
		'country_iso':cefCountryISO,
		'identified':1,
		'modid':glmodid,
		'token':'imobile@15061981',
		'format':'JSON',
		'cu':1,
		'original_referer':window.location.href,
		'updated_using':'Enquiry Form on '+glmodid
	};
	$.ajax({
	url: '//'+host_nm[1]+'/wservce/users/login/',	
	data: params_request,
	type: 'POST',
	dataType: "json",
	crossDomain: true,
success: function(jsonResult)
{
	  if(jsonResult != undefined && jsonResult["code"] == '200')
	  {		    
		    $("#"+enq.CEF_S_mobile_errMsg).html('');
		    var resultSet = jsonResult.DataCookie;
		    var v4iilFlag = 0;
		    var imeshVisrFlag = 0;
		    if((jsonResult.LoginCookie !=undefined) && (jsonResult.LoginCookie !=''))
		    {
			  v4iilFlag=1;
			  var cookie_data_string = '';
			  var login_cookie = jsonResult.LoginCookie;
			  for(var key1 in login_cookie)
			  {
				cookie_data_string += key1+'='+login_cookie[key1]+'|';
			  }
			  createCookieEnq('v4iilex',escape(cookie_data_string),'180');
			  createCookieEnq('IsGlMember',1,'730');
		    }			  
		    if((resultSet != undefined) && (resultSet !=''))
		    {
			    imeshVisrFlag = 1;
			    imesh_obj.set(resultSet);
		    }
		    if(v4iilFlag == 1 && imeshVisrFlag == 1)
		    {
			  if(typeof(enq.R_title) === 'undefined' || enq.R_title == "")
			  {
				enq.other_form = 1;
			  }
			  enq.userStatus = 3;
			  imInvokeRequestForGaCode('/cgi/enquiry-newuser.mp');
		    }
		    else if(v4iilFlag == 0 && imeshVisrFlag == 1)
		    {
                          if(typeof(enq.R_title) === 'undefined' || enq.R_title == "")
			  {
				enq.other_form = 1;
			  }
			  enq.userStatus = 2;
			   imInvokeRequestForGaCode('/cgi/enquiry-existuser-uniden.mp');
		    }
		    if(glmodid=='FCP')
		    	{
		    page.login();	
		    	}
		    else
		    	{
		    	page.Identified();	
		    	}
		    var name = '';
		    if(typeof(resultSet.fn) != 'undefined' && resultSet.fn != null  && resultSet.fn != 'null'  && resultSet.fn != '')
		    {
			name = typeof(resultSet.ln) === "undefined" || resultSet.ln === null  ? resultSet.fn : resultSet.fn+' '+resultSet.ln ;
		    }						
		    typeof(resultSet.fn) === 'undefined' || resultSet.fn === null || resultSet.fn === 'null' ? $('#'+enq.CEF_S_name).val('') : $('#'+enq.CEF_S_name).val(name);					
		    typeof(resultSet.em) === 'undefined' || resultSet.em === null || resultSet.em === 'null' ? $('#'+enq.CEF_S_email).val('') : $('#'+enq.CEF_S_email).val(resultSet.em);				
		    typeof(resultSet.co) === 'undefined' || resultSet.co === null ? $('#'+enq.CEF_S_organization).val('') : $('#'+enq.CEF_S_organization).val(resultSet.co);					
		    typeof(resultSet.cn) === 'undefined' || resultSet.cn === null ? $('#'+enq.CEF_S_countryname_enq).val() : $('#'+enq.CEF_S_countryname_enq).val(resultSet.cn);					
		    typeof(resultSet.ct) === 'undefined' || resultSet.ct === null ? $('#'+enq.CEF_S_city_enq).val('') :
		    $('#'+enq.CEF_S_city_enq).val(resultSet.ct);
		    typeof(resultSet.ctid) === 'undefined' || resultSet.ctid === null ? $('#'+enq.CEF_S_city_id).val('') :
		    $('#'+enq.CEF_S_city_id).val(resultSet.ctid);						
		    if (typeof(resultSet.mb1) != 'undefined' && (/\d+?/ig).test(resultSet.mb1))
		    {
			    if(resultSet.mb1.match(/\-/))
			    {
				    var ccode_mobile = resultSet.mb1.split(/-/);
				    var S_mob = ccode_mobile.pop();
				    var S_country_code = ccode_mobile.join("-");
				    S_country_code = S_country_code.replace(/[^\w-]/ig, '');
				    $('#'+enq.CEF_S_cmobile_enq).val('+'+S_country_code);
				    $('#'+enq.CEF_S_ccode).val(S_country_code);
			    }
		    }						
		    typeof(resultSet.st) === 'undefined' || resultSet.st === null ? $('#'+enq.CEF_S_state_enq).val('') : $('#'+enq.CEF_S_state_enq).val(resultSet.st);
		    enq.user_glid = resultSet.glid;
		    enq.imurl = typeof(resultSet.imurl) === 'undefined' || resultSet.imurl === null ? '' : resultSet.imurl;
		    enq.utyp = typeof(resultSet.utyp) === 'undefined' || resultSet.utyp === null ? '' : resultSet.utyp;
		    if(($.trim(name).length == 0 && $('#'+enq.CEF_S_email).val() == '') || ($.trim(name).length != 0 && $('#'+enq.CEF_S_email).val() == '') || ($.trim(name).length == 0 && $('#'+enq.CEF_S_email).val() != ''))  
		    {
			    $('#'+enq.CEF_S_other_fields).show();
			    titlemobilescreen();
			    $('#'+enq.CEF_img_process).hide();
			    $('#'+enq.CEF_sub_btn).show();
			    $('#'+enq.CEF_chk_usr).val('Exist');
		    }
		    else
		    {
			    $('#'+enq.CEF_S_other_fields).hide();
			    $('#'+enq.CEF_chk_usr).val('');
			    cefShowEnqEMTForm();			    
		    }
		    cefIminterestRequest();
		    $(".q-errorMsg >p").html('');
	  }
	  else
	  {
		  $("#"+enq.CEF_S_mobile_errMsg).html('Some error occurred. Please try after some time.');
		  $('#'+enq.CEF_S_name).val("");
		  $('#'+enq.CEF_S_email).val("");
		  $('#'+enq.CEF_S_organization).val("");
		  $('#'+enq.CEF_S_countryname_enq).val();
		  $('#'+enq.CEF_S_city_enq).val("");
		  $('#'+enq.CEF_S_cmobile_enq).val();
		  $('#'+enq.CEF_S_state_enq).val("");
		  $('#'+enq.CEF_S_country_iso).val();	  
		  $('#'+enq.CEF_img_process).hide();
		  $('#'+enq.CEF_sub_btn).show();
		  $('#'+enq.CEF_chk_usr).val('Not Exist');
		  cefServiceError(jsonResult,params_request);		  
	  }
	  },
	  error: function(message)
	  {
		  imInvokeRequestForGaCode('/cgi/enquiry-userlogin-service-error.mp');
	  }
	  });	
} 
function getInterestRecordId(imi_obj)
{
	var host_nm =getUtilsDomainURL();
	var val_imesh = imesh_obj.get();
	var sender_glusr_id = (val_imesh.glid != "undefined") ? (val_imesh.glid) : '';
	if(imi_obj.is_admin == 1 || (val_imesh == undefined || val_imesh == -1 || val_imesh=="") || (sender_glusr_id == imi_obj.R_glusr_id))
	{
		return false;
	}
	var sender_email = val_imesh.em;
	var params_request = {
		"interest_sender_mobile":val_imesh.mb1,
		"interest_sender_first_name":val_imesh.fn,
		"interest_product_name":enq.R_title,
		"interest_current_url":window.location.href,
		"interest_modreftype":imi_obj.modreftypflag,
		"interest_sender_email_id":sender_email,
		"interest_modrefid":imi_obj.displayId,
		"interest_sender_ip":page.countryIp,
		"interest_mail_send":"0",
		"interest_sender_glusr_id":sender_glusr_id,
		"interest_sender_ip_country":page.country,
		"interest_sender_ip_country_iso":page.countryCode,
		"interest_modid":imi_obj.modid,
		"interest_rcv_glusr_id":imi_obj.R_glusr_id};
$.ajax({
url: '//'+host_nm[1]+'/wservce/enquiry/iminterest/',
data: params_request,
type: "POST",
dataType: "json",
crossDomain: true,
success: function(response)
{
enq.interestId = response.Interest_id;
}
});
}
function setAsEnqSent ( value ) {
	var cookieData = (readCookie('imEqGl')) ? readCookie('imEqGl') : '';
	var cookieDataArray = new Array();
	var cookieDataArrayNew = new Array();
	var cookieDataStr = '';
	if ( cookieData ) {
		cookieDataArray = cookieData.split(",");
		if ( cookieDataArray[0] == 'undef' ) {
			cookieDataArray.pop();
		} else if ( cookieDataArray.length >= 30 ) {
			//cookieDataArray.shift();
			cookieDataArray.pop();
		}
		cookieDataArray.unshift( value );
		cookieDataArrayNew = getUniqueEnq(cookieDataArray);
		cookieDataStr = cookieDataArrayNew.toString();
	} else {
		cookieDataStr = value;
	}    
	createCookieEnq('imEqGl',cookieDataStr,1);
}
function getUniqueEnq( data ) {
	var u = {}, a = [];
	for(var i = 0, l = data.length; i < l; ++i){
		if(data[i] in u)
			continue;
		a.push(data[i]);
		u[data[i]] = 1;
	}
	return a;
}
function createCookieEnq(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; domain=.indiamart.com;path=/";
}
if ( readCookie('imEqGl') == null ) {
	createCookieEnq('imEqGl','undef',1);
}
function showMobileBanner()
{
	var host_nm =getUtilsDomainURL();
	var banner = document.getElementById('mobile_banner');
	var att = document.createAttribute("src");
	att.value = "//"+host_nm[0]+"/imsrchui/imgs/mob_app_banner.png";
	banner.setAttributeNode(att);
}
function sendSecFormEnq()
{
	var val_imesh= readCookie('ImeshVisitor');
	var coun_iso = getparamVal(val_imesh, "iso") || '';
		$("#q-second").css("display", "none");		  
                $('#notme').hide();
                if($('#industry_ques').html()=='' || $('#industry_ques').html()==null)
             		$('#industry_ques').append(industry_html);
             		if(industry_questions_found==1 && industry_html!==''){
                             $('#industry_ques').show();
                             var form_div=$('#form_div').height();  
            			     if(form_div>360) {      $('#form_div').css({ 'width':'370px' , 'height':'360px',     'overflow': 'auto',     'overflow-x': 'hidden' });   }
                             $('#CEF_IdentifiedInfo').hide();
                             $(".cenq-bar-line").css({
                            	    width:"60%" });
                             imInvokeRequestForGaCode('/cgi/enquiry-industry-ques-show.mp');
                             }
             		else{
		$('#CEF_Enrich_Forsecond').show();
                 $(".cenq-bar-line").css({
    width:"80%" });
                $('#C_Desc_Prod2').focus();}
                if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
            	{
		if($("#queryID").val() != '')
		{
			cefCallFirstEMTFormService();
		}
	}
	else
	{
		if($("#queryID").val() == '')
		{
		      var cefQueryFlag = 0;
		      cefGetUserValues(cefQueryFlag,cefCallFirstEMTFormService);
		}
		else
		{
		      cefCallFirstEMTFormService();
		}
	}      
}
function cefCallFirstEMTFormService()
{
	var host_nm =getUtilsDomainURL();
	var val_imesh= readCookie('ImeshVisitor');
	var coun_iso = getparamVal(val_imesh, "iso") || '';
	var apprx_order_value = '';      
	var estimate_qty = '';
        if($('#C_Est_Qty_List').val()!=''){
	$('#C_Est_Qty_List').val().replace(/\\/g, "");}
	if ($('#C_Est_Qty_List').val() != '' && $('#C_Est_Qty').val() != '')
	{
		estimate_qty = $('#C_Est_Qty').val() + " " + $('#C_Est_Qty_List').val(); 
	}
	var geo_id = $('input:radio[name=C_Pref_Supp_loc]:checked').val();
	var city_id='';
        if(typeof(geo_id)!='undefined' && geo_id!='' && geo_id=="1")
	{
	      city_id=$('#C_Spec_Loc1_id').val();
	}
	var params_request = {  
		'enquiry_id':$('#queryID').val(),
		'Description':$('#C_Desc_Prod').val(),
		'geo_id':geo_id,
		'geo_city1':city_id,
		'estimate_qty':estimate_qty,
		'queryDestination':$('#query_type').val(),
		'S_Query_Modid':enq.modid,
		'enrich':1,
		'token':'imartenquiryprovider'
	};
	setHiddenParameter(params_request);
	if((params_request.Description !='') || ((typeof(params_request.geo_id) !='undefined')  && (params_request.geo_id !='')) || (params_request.estimate_qty !=''))
	{
		$.ajax({
url: '//'+host_nm[1]+'/wservce/enquiry/index.php/enquiry/saveenquiry/',
data:params_request,
type:"POST",
dataType:"json",
crossDomain: true,
success: function(response)
{
},
error: function(message)
{
imInvokeRequestForGaCode('/cgi/enquiry-enrich-error.mp');
}
});
}
try{
	/*if((typeof(enq.CEF_enrichFormAction) != "undefined") && (typeof(enq.CEF_enrichFormAction) === "function") && (typeof(enq.CEF_form_type) != "undefined") && (enq.CEF_form_type != ''))
	  {
	  enq.CEF_enrichFormAction.apply();				
	  }*/
}catch(e){
}
}
function setHiddenParameter(secondFormValues)
{
	$('#CEF_Enrich_Desc').val(secondFormValues.Description);
	$('#geo_id').val(secondFormValues.geo_id);
	$('#geo_city1').val(secondFormValues.geo_city1);
	$('#estimate_quantity').val(secondFormValues.estimate_qty);
}
function sendThirdFormEnq()
{
var host_nm =getUtilsDomainURL();
var currency_index=document.getElementById('CEF_Select_Currency').selectedIndex;
var currency_val=document.getElementById('CEF_Select_Currency').options[currency_index].value;
var freq_index=document.getElementById('CEF_Freq_Period').selectedIndex;
var freq_val=document.getElementById('CEF_Freq_Period').options[freq_index].value;
if(($("#C_Approx_Order_Val").val() != '') && ((currency_index==0) && ($('#q_fr_units').css('display') == 'block')))
	  {
          $("#C_S_ordercurr_errMsg").html('Please select currency');
          $("#CEF_Select_Currency").addClass("invalid");
	  return false;
	  }
	  if(($("#C_Approx_Order_Val").val() == '') && (currency_index!=0))
	  {
          $("#C_S_orderval_errMsg").html('Please select order value');
          $("#C_Approx_Order_Val").addClass("invalid");
	  return false;
}
	if(($('input:radio[name=time_period]:checked').val() == 2) && ((freq_index==0) && ($('#CEF_Freq_Period').css('display') == 'block')))
	{
	      $("#C_S_freq_errMsg").html('Please select Frequency');
	      $("#CEF_Freq_Period").addClass("invalid");
	      return false;
	} 
	$('#bar-line').hide();
    $('.cenq-bar-line').hide();
  $('#new-usr-msg').hide();
   $('#bar-line-enrich').hide();
  $('#enrich-msg').hide();	
	if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
	{
		$("#CEF_EMFHtmlID").hide();
		$('#CEF_Enrich_Forsecond').hide();
		$("#CEF_EnqPart").show();
		cefSetProdCompName(enq,'C_Prodname','C_Compname');
		$('#'+enq.CEF_form_disp_id).hide();
		$('#'+enq.CEF_Thnx_msg).show();	  
		$('#thank-msg').append('Your Enquiry has been sent successfully');
                //imInvokeRequestForGaCode('/cgi/enquiry-submit-enrich-second.mp');
	}
	else
	{
		if(typeof(enq.CEF_form_type) === 'undefined' || enq.CEF_form_type == "")
		{
			$('#'+enq.CEF_EnrichMentFormId).show();
			cefSetProdCompName(enq,'C_Prodname','C_Compname');
			$('#enq_form_enrichmt').hide();
			$('#CEF_OthThank_msg').append(enq.enq_thnx_msg);
			$('#CEF_OthThank_msg').show();			
                        //imInvokeRequestForGaCode('/cgi/enquiry-submit-enrich-second.mp');
		}

	}
	var apprx_order_value = '';      
	if (($("#C_Approx_Order_Val").val() != '') && ($('input:radio[name=C_Approx_Currency]:checked').val() == '1' && $('#q_in_units').css('display') == 'block'))
	{
		apprx_order_value = $("#C_Approx_Order_Val option:selected").text() + " INR"; 
	}
	else if (($("#C_Approx_Order_Val").val() != '') && ($('#CEF_Select_Currency').val() != '' && $('#q_fr_units').css('display') == 'block'))
	{
		apprx_order_value = $("#C_Approx_Order_Val option:selected").text() + " "+$('#CEF_Select_Currency').val();
	}
	var freq_val='';
	if($('input:radio[name=time_period]:checked').val() != '' && $('input:radio[name=time_period]:checked').val() == 2)
	{
	      freq_val = $("#CEF_Freq_Period option:selected").val();
	}
	else
	{
	      freq_val = $('input:radio[name=time_period]:checked').val();
	}
	var params_request = {  
		'enquiry_id':$('#queryID').val(),
		'apprx_order_value':apprx_order_value,
		'Description':$('#C_Desc_Prod').val(),
		'geo_id':$('#geo_id').val(),
		'geo_city1':$('#geo_city1').val(),
		'estimate_qty':$('#estimate_quantity').val(),
		'req_usage':$('#C_Desc_Prod2').val(),
		'req_frequency':freq_val,
		'req_purspose':$('input:radio[name=q_why_do_you_need]:checked').val(),
		'queryDestination':$('#query_type').val(),
		'req_currency_other':$('#req_currency_other1').val(),
		'S_Query_Modid':enq.modid,
		'enrich':1,
		'token':'imartenquiryprovider'
	};
	if((params_request.apprx_order_value !='') || (params_request.req_usage !='') || (typeof(params_request.req_frequency) !='undefined') || (typeof(params_request.req_purspose) !='undefined'))
	{
		$.ajax({
url: '//'+host_nm[1]+'/wservce/enquiry/index.php/enquiry/saveenquiry/',
data:params_request,
type:"POST",
dataType:"json",
crossDomain: true,
success: function(response)
{
$('#queryID').val('');
},
error: function(message)
{
imInvokeRequestForGaCode('/cgi/enquiry-enrich-error.mp');
}
});
}
try{
	if((typeof(enq.CEF_enrichFormAction) != "undefined") && (typeof(enq.CEF_enrichFormAction) === "function") && (typeof(enq.CEF_form_type) != "undefined") && (enq.CEF_form_type != ''))
	{
		enq.CEF_enrichFormAction.apply();				
	}
}catch(e){
}
}
function enq_City_Sugg(obj)
{
	var Id  = $(obj).attr('id');
	var sugg_city_1 = new Suggester({"element":Id,"onSelect":enq_city_enrich,"onExplicitChange":enq_onExplicitChangeCity_enrich,"type":"city",fields: "std,state,id,stateid", "minStringLengthToDisplaySuggestion":1,"autocompleteClass":"",displayFields:"value,state",displaySeparator:" >> ",filters:"iso:IN","recentData":false});
}
function enq_city_enrich(event, ui) 
{
	this.value = ui.item.value;
	var cityid = this.id;
	document.getElementById(cityid+"_id").value=ui.item.data.id;
}
function enq_onExplicitChangeCity_enrich(event, ui) {
	if (ui.item) {
		this.value = ui.item.value;
	}
	else{}
}
function cefEMFormvalidation()
{
	var qty_index=document.getElementById('C_Est_Qty_List').selectedIndex;
	var qty_val=document.getElementById('C_Est_Qty_List').options[qty_index].value;
	var est_qty = $("#C_Est_Qty").val();
	est_qty = est_qty.replace(/\s/g, "");
        var city_name=$('#C_Spec_Loc1').val();
        city_name=city_name.replace(/\s/g, "");
	if(est_qty != '' && qty_index==0)
	{
                $("#C_Est_Qty_List_errMsg").html('Please select unit of quantity');
                $("#C_Est_Qty_List").addClass("invalid"); 
		return false;
	}
	if(((qty_val!='Other' && est_qty =='' && qty_index!=0) || (qty_val=='Other' && est_qty =='')) && check_price!=1)
	{
                $("#C_Est_Qty_errMsg").html('Please provide estimated quantity');
		$("#C_Est_Qty").addClass("invalid");
		return false;
	}
    var val_imesh= readCookie('ImeshVisitor');
	var coun_iso = getparamVal(val_imesh, "iso") || '';
	for (counter = 0; counter < document.enq_form_enrichmt.C_Pref_Supp_loc.length; counter++)
	{
		if (document.enq_form_enrichmt.C_Pref_Supp_loc[counter].checked)
		{
			var loc_val=document.enq_form_enrichmt.C_Pref_Supp_loc[counter].value;
			if((loc_val==1) && (coun_iso=='IN') && (city_name==''))
			{
                                $("#C_S_city_errMsg").html('Please provide preferred city or select "Across India"');
                                $("#C_Spec_Loc1").addClass("invalid");
				return false;
			}
		}
	}
document.getElementById('C_Desc_Prod').value = document.getElementById('C_Desc_Prod').value.trim();
if(typeof(enq.R_title) == 'undefined' || enq.R_title == "")
{
if(document.getElementById('C_Desc_Prod').value==''){
$("#C_Desc_Prod_errMsg").html('Please provide the specifications of your requirement');
$("#C_Desc_Prod").addClass("invalid");
return false;
}
else if(document.getElementById('C_Desc_Prod').value.match(/\S+/g).length < 3){
$("#C_Desc_Prod_errMsg").html('Please elaborate your description to more than 3 words');
$("#C_Desc_Prod").addClass("invalid");
return false;
}
}
	if(document.getElementById('C_Desc_Prod').value.length > 2000) {
		alert("Describe product application/ usage should not be more than 2000 characters.");
		document.getElementById('C_Desc_Prod').focus();
		return false;
	}
	cefGetUserInfo();    	
	if(enq.CEF_form_type=='' || (typeof(enq.R_title) != 'undefined' && enq.R_title != ""))
	{              
		cefEnqBtnDisable();
		processSendEnquiry();
        }
	else if(typeof(enq.other_form) != 'undefined' && enq.other_form == 1)
	{
		cefEnqBtnDisable();
		processSendEnquiry();
	}
	sendSecFormEnq();
}
function enqClose()
{
	cefImIntFlag = 0;
	if($('#queryID').length > 0 && $('#queryID').val() != "")
	{
		$('#queryID').val('');
	}
	if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
	{
		if($('#'+enq.CEF_form_disp_id).css('display') == 'block' && $('#CEF_EMFHtmlID').css('display') == 'none')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close.mp');
		}
		else if(($('#'+enq.CEF_form_disp_id).css('display') == 'block') && ($('#CEF_EMFHtmlID').css('display') == 'block' && $('#CEF_Enrich_Forsecond').css('display') == 'none'))
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close-second.mp');	    
		}
		else if($('#CEF_Enrich_Forsecond').css('display') == 'block')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close-third.mp');
		}	      	      
	}
	else
	{
		if($('#'+enq.CEF_form_disp_id).css('display') == 'block' && $('#'+enq.CEF_EnrichMentFormId).css('display') == 'none')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close.mp');
		}
		else if($('#CEF_OthThank_msg').css('display') == 'block')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close-thnx.mp');
			$('#'+enq.CEF_EnrichMentFormId).hide();
		}
		else if($('#'+enq.CEF_EnrichMentFormId).css('display') == 'block' && $('#CEF_Enrich_Forsecond').css('display') == 'none')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close-second.mp');
			//if(typeof(enq.CEF_form_type) === 'undefined' || enq.CEF_form_type == "")
			//{
				$('#'+enq.CEF_EnrichMentFormId).hide();
			//}		    
		}
		else if($('#CEF_Enrich_Forsecond').css('display') == 'block')
		{
			imInvokeRequestForGaCode('/cgi/enquiry-close-third.mp');
			$('#'+enq.CEF_EnrichMentFormId).hide();
		}
	}
	if(typeof(enq.CEF_enrichFormAction) != "undefined" && typeof(enq.CEF_enrichFormAction) === "function")
	{
		enq.CEF_enrichFormAction.apply();				
	}	  
}
function enquiry_handling()
{
$("#C_Spec_Loc1").focus(function(){
			$("#C_Pref_Supp_loc0").prop("checked", true);
                        $("#C_Spec_Loc1").css({
    width:"250px"
});
});
if($("#"+enq.CEF_S_cmobile_enq).val() == '+91' || $("#"+enq.CEF_S_cmobile_enq).val() == '91' || $("#"+enq.CEF_S_country_iso).val() == 'IN'){

	if($('#'+enq.CEF_S_city_enq).val()!=''){	
		$('#C_Spec_Loc1').val($('#'+enq.CEF_S_city_enq).val());
}
		if($('#'+enq.CEF_S_city_id).val()!=''){
			$('#C_Spec_Loc1_id').val($('#'+enq.CEF_S_city_id).val());}
		else
		{
			var val_imesh= readCookie('ImeshVisitor');
			var cityid = getparamVal(val_imesh, "ctid") || '';
			$('#C_Spec_Loc1_id').val(cityid);
		}

             }		
	if(typeof(enq.enq_item_price)!='undefined' && enq.enq_item_price!=''){
		var pric=enq.enq_item_price;
		var s=pric.match('/');
		if(s!=null){
			var get_unit=pric.split("/");
			get_unit[1]=get_unit[1].trim();
			$("#C_Est_Qty_List").val(get_unit[1]);
			check_price=1;
			$("#C_Est_Qty_List").css("color","black");
		}
		else{check_price=0;}
	}
	else{check_price=0;}
if($('#CEF_EMFHtmlID').css('display') == 'block')
{
$('#C_Est_Qty').focus();
}
}
function cefNotMe()
{
	$("#CEF_IdentifiedInfo").show();
	var val_v4iilex= readCookie('v4iilex');
	var val_imesh = imesh_obj.get();
	var notme = '';
	if(val_imesh != '')
	{
		if(typeof(val_v4iilex == undefined) && val_v4iilex == "")
		{
			notme = '&nbsp;<span class="q-notme-msg" id="notme" onclick="page.notMe();">(Not Me)</span>';
		}
		else 
		{
			$("#which_submit").val("submit_member");

		}	
		var full_name = (typeof(val_imesh.fn) != 'undefined' && val_imesh.fn != 'undefined') ? val_imesh.nm : '' ;
		var isd =  (typeof(val_imesh.phcc) != 'undefined' && val_imesh.phcc != 'undefined') ? val_imesh.phcc : '';
		var mobile = (typeof(val_imesh.mb1) != 'undefined' && val_imesh.mb1 != 'undefined') ? val_imesh.mb1 : '';
		isd = isd.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\+/,'');
	}
	info = '<p class="q-loggedInfo-col2"> <span class="f12">From:</span> <br> <strong>'+full_name+'</strong>'+notme+'</p> <p class="q-loggedInfo-col3"> '+'+'+isd+'-'+mobile+'</p>';
	$("#CEF_IdentifiedInfo").html(info);
}
function changeFontSize() {
$("#C_ProdPrice").css({
    fontSize:"22px"
});
     var price_len=enq.enq_item_price.length;
      if(price_len>37)
{
var len_diff=price_len-37;
var inc=Math.ceil(len_diff/2);
var size=parseInt($("#C_ProdPrice").css("font-size"));
var final_size=size-inc;
$("#C_ProdPrice").css({
    fontSize: final_size+"px"
});
}   
}
function cefGetUserValues(cefFlag,cefFn)
{
    if($("#queryID").val() != '')
    {
	  cefFn.apply();
    }
    else
    {
	cefFlag = cefFlag +1;
	setTimeout(function(){cefGetUserValues(cefFlag,cefFn)},50);
    }
}

function cefIminterestRequest()
{
      try{
	  if((typeof(enq.int_rec != 'undefined') && enq.int_rec == '1') && (typeof(enq.R_title) != 'undefined' && enq.R_title != ""))
	  {
		      getInterestRecordId({'R_glusr_id':enq.R_glusr_id,'displayId':enq.displayId,'modreftypflag':enq.R_modref_type,'modid':enq.modid, 'is_admin':enq.is_admin});
	  }
  }catch(e){}
}

function cefUserIdentified(mobile_no)
{
	var isd_code = $('#'+enq.CEF_S_cmobile_enq).val().replace(/\+/,'');
	var host_nm =getUtilsDomainURL();
	$.ajax({
		url: '//'+host_nm[1]+'/wservce/users/login/',	
		data: { user_name: mobile_no, token:'imobile@15061981', ph_country: isd_code, modid:glmodid, format: "JSON", identified:1 },
		type: 'GET',
		dataType: "jsonp",
		success: function(jsonResult)
		{
		      if(jsonResult["code"] == '200')
		      {
			    var resultSet=jsonResult.DataCookie;
			    if (typeof(resultSet.glid) != 'undefined' && resultSet.glid != '')
			    {
				  var cookie_obj = {};
				  cookie_obj={'glid':resultSet.glid};
				  imesh_obj.set(cookie_obj);
			    }

		      }
		      else if(jsonResult["code"] == '204')
		      {
			      imInvokeRequestForGaCode('/cgi/enquiry-try.mp');
			      
		      }
		},
		error: function(message)
		{
			imInvokeRequestForGaCode('/cgi/mapi-usercheck-service-error.mp');	
		}
	});	
}

function cefUserUpdateService()
{
      cefGetUserInfo();
      cefCookieUpdate();
      cefShowEnqEMTForm();
      var host_nm =getUtilsDomainURL();
      var getGlusr_ID = enq.user_glid || imesh_obj.get().glid;
      var params_request = {
		"VALIDATION_KEY":'e27d039e38ae7b3d439e8d1fe870fc68',
		"USR_ID":getGlusr_ID,
		"UPDATEDBY":'User',
		"UPDATEDUSING":'Enquiry Form on '+glmodid,
		"MODID":glmodid,
		"FIRSTNAME":enq.C_S_name,
		"EMAIL":enq.C_S_email,
		"CITY":enq.C_S_city,
		"FK_GL_CITY_ID":enq.C_S_city_id,
		"STATE":enq.C_S_state,
		"FK_GL_STATE_ID":enq.C_S_state_id	
      };
		$.ajax({
			url: '//'+host_nm[1]+'/wservce/users/edit/',
			data: params_request,
			type: "POST",
			dataType: "json",
			crossDomain: true,
			success: function(response)
			{
			      if(response.RESPONSE.CODE == '200' && response.RESPONSE.STATUS == 'SUCCESSFUL')
			      {
				    imInvokeRequestForGaCode('/cgi/enquiry-user-update.mp');
				    if(glmodid=='FCP')
				    	{
				    page.login();
				    	}
				    else
				    	{
				    	page.Identified();
				    	}
			      }
			      else
			      {
				    cefServiceError(response,params_request);
			      }			      
			},
			error: function(message)
			{
				imInvokeRequestForGaCode('/cgi/enquiry-user-update-err.mp');
			      
			}
		});
}

function cefServiceError(errResponse,send_param)
{
      var params_request = {
		"ServiceError":errResponse,
		"Param":send_param
      };
		params_request.request_type = 'ServiceError';
		var url_request = "/serveEnquiry.php";
		$.ajax({
			url: url_request,
			data: params_request,
			type: "POST",
			dataType: "json",
			success: function(response)
			{
			      	//console.log('Service Error');	      
			}
		});
}

function cefCookieUpdate()
{
	var val_v4iilex= readCookie('v4iilex');
	var val_imesh = imesh_obj.get();
	if(val_imesh != "")
	{
	      var cookie_obj = {};
	      cookie_obj={ 'em':enq.C_S_email, 'ct':enq.C_S_city, 'ctid':enq.C_S_city_id, 'st':enq.C_S_state, 'stid':enq.C_S_state_id, 'nm':enq.C_S_name};
	      imesh_obj.set(cookie_obj);
	}
}
function cefGetUserInfo()
{
	var name_obj = getFirstLastName();
	enq.C_S_description = $('#'+enq.CEF_EnqDesc).val() || $('#C_S_descriptionVal').val();
	enq.C_S_email = $('#'+enq.CEF_S_email).val();
	enq.C_S_name =  $('#'+enq.CEF_S_name).val();
	enq.C_S_name =  $.trim(enq.C_S_name);
	enq.C_S_name = enq.C_S_name.replace(/\s+/ig,' ');
	enq.C_S_city =  $('#'+enq.CEF_S_city_enq).val();
	enq.C_S_mobile = $('#'+enq.CEF_S_mobile).val();
	enq.C_S_organization = $('#'+enq.CEF_S_organization).val();
	enq.C_S_country = $('#'+enq.CEF_S_countryname_enq).val();
	enq.C_S_state = $('#'+enq.CEF_S_state_enq).val();
	enq.which_submit = $('#which_submit').val();
	enq.C_S_cmobile = $('#'+enq.CEF_S_ccode).val();
	enq.C_S_country_iso = $('#'+enq.CEF_S_country_iso).val();
	enq.query_ref_cur_url = window.location.href;
	enq.C_S_city_id  = $('#'+enq.CEF_S_city_id).val();
	enq.C_S_state_id  = $('#'+enq.CEF_S_state_id).val();
	enq.S_first_name = name_obj.first_name;
	enq.S_last_name = name_obj.last_name;
	enq.IamInterested_id = '';
	enq.user_glusrid = '';
	if(typeof(enq.interestId) != 'undefined')
	{
		enq.IamInterested_id = enq.interestId;
	}
	if(typeof(enq.user_glid) != 'undefined')
	{
		enq.user_glusrid = enq.user_glid;
	}
}

function cefShowEnqEMTForm()
{
	var val_imesh = imesh_obj.get();
	$("#"+enq.CEF_OverlayId).css("display", "block");
	if((typeof(enq.R_title) != 'undefined' && enq.R_title != "") && (typeof(val_imesh) != 'undefined' && val_imesh != ""))
	{        
		if((cef_EMFDownloadHtml != '') && ($('#CEF_EMFHtmlID').html() == ''))
		{
			$('#CEF_EMFHtmlID').html(cef_EMFDownloadHtml);
			$('#CEF_EMFHtmlID').html($('#CEF_EnrichSection').html());
		}
		$("#CEF_EnqPart").hide();
		htmlDecideForUser($('#'+enq.CEF_S_cmobile_enq).val(),$('#'+enq.CEF_S_countryname_enq).val(),$('#'+enq.CEF_S_country_iso).val());
		$('#'+enq.CEF_img_process).hide();
		$('#'+enq.CEF_sub_btn).show();
		$("#CEF_EMFHtmlID").css("display", "block");
		$("#enq_form_enrichmt").css("display", "block");
		$('#q-second').css("display", "block");
                $('#table_nxt').hide();                
		
	}
	else
	{               
		$('#CEF_EMFHtmlID').html('');
		$('#'+enq.CEF_EnrichMentFormId).html(cef_EMFDownloadHtml);
		cefSetProdCompName(enq,'C_Prodname','C_Compname');
                $("#CEF_EnqPart").hide();
		htmlDecideForUser($('#'+enq.CEF_S_cmobile_enq).val(),$('#'+enq.CEF_S_countryname_enq).val(),$('#'+enq.CEF_S_country_iso).val());
		if(typeof(enq.CEF_form_type) === 'undefined' || enq.CEF_form_type == "")
		{
			$('#'+enq.CEF_form_disp_id).hide();
		}	      
		$('#CEF_EnqThnx').append(enq.company);
		$('#CEF_EnqThnx').css("display", "block");
		$('#'+enq.CEF_EnrichMentFormId).show();
                if(enq.CEF_form_type!=''){
                $('#C_Desc_Prod').val($('#'+enq.CEF_EnqDesc).val());}
                $('#enquiry').hide();              
                $('#table_nxt').hide();
	}
	$(".cenq-bar-line").css({width:"50%"});
	enquiry_handling();
	cefNotMe();
        if((typeof(enq.R_title) == 'undefined') || enq.R_title == ""){
        $('#CEF_IdentifiedInfo').hide();}
        if(glmodid=='FCP'){
        	$('#industry_ques').html('');
        	industry_html='';
       	 if(enq.CEF_mcat_id!==''){
				 getindustry_specific_ques(enq.CEF_mcat_id,'3'); } 
        }
        else{
        if(first_time_call==0 && enq.CEF_mcat_id!==''){
			 getindustry_specific_ques(enq.CEF_mcat_id,'3');
			 setTimeout(function() 
						{
							if(industry_questions_found==0){
								getindustry_specific_ques(enq.CEF_cat_id,'2');
								}
								  }, 1000);	 
        }
		}
}
function cefEnqBtnDisable()
{
	if(typeof(enq.R_title) != 'undefined' && enq.R_title != "")
	{
		$('#'+enq.CEF_EnqDesc).val("");
	}	
	try{
		if(typeof(enq.enquiryDivId != 'undefined'))
		{
			setAsEnqSent(enq.enquiryDivId);
			if(typeof enq.enq_sent_color === "function")
			{
				enq.enq_sent_color.apply(null, [enq.enquiryDivId]);
			}	
			try{
				if (typeof(enq.success) != 'undefined')
				{
					eval(enq.success + "("+enq.displayId+")");
				}
			}catch(e){
			}
		}
	}catch(e){}	
	try{
		if(typeof(enq.enqConv != 'undefined') && enq.enqConv == 'on')
		{
			activateEnqConversionTracking();
		}
	}catch(e){
	}	
}
cef_freq_dropdown = function (elementId) {
    var dropdown = document.getElementById(elementId);
    try {
        cefShowFreqDropdown(dropdown);
    } catch(e) {

    }
    return false;
};

cefShowFreqDropdown = function (element) {
    var event;
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    element.dispatchEvent(event);
};

function cefSelectRadioBtn()
{
      var freq_index=document.getElementById('CEF_Freq_Period').selectedIndex;
      var freq_val=document.getElementById('CEF_Freq_Period').options[freq_index].value;
      if(freq_val)
      {
	  $("#t9_q_uneed3").attr('checked', 'true');
      }
}
function cefSendFormInfo(formData)
{
	enq = formData;
	cefSetFormIDS(formData);
	checkCCnCN();
	cefFormElementBlur();
	cefCountrySuggester();
	var qstring = enq.query;
 	qstring = qstring.replace(/&amp;/g, '&');
	var modid = getQueryStringParsedData(qstring, "did");
	var ss = getQueryStringParsedData(qstring, "ss");	
	var category = getQueryStringParsedData(qstring, "ctg");
	var R_modref_type = getQueryStringParsedData(qstring, "modreftype");
	var val_imesh = imesh_obj.get();
	var S_glusr_id = "";
	var val_v4iilex= readCookie('v4iilex');
	var is_admin = getparamVal(val_v4iilex, "admln") || '';	
	var glid_v4cookie = getparamVal(val_v4iilex, "id") || '';
	enq.ss = ss;
	enq.category = category;
	enq.R_modref_type = R_modref_type;
	enq.is_admin = is_admin;
	if(val_v4iilex != "" && val_imesh != "" && glid_v4cookie != "")
	{
	    enq.userStatus = 1;
	}
	else if((val_imesh != "") && (typeof(val_imesh.glid) != 'undefined' && val_imesh.glid != ''))
	{
	    enq.userStatus = 2;
	}
}
function formvalidationreset()
{
	$('#bar-line').show();
	$('.cenq-bar-line').show();
	$('#new-usr-msg').show();
	$('#bar-line-enrich').show();
	$('#enrich-msg').show();	
	$('#table_nxt').show();
	$("#C_S_city_errMsg").html('');
	$("#C_S_quantity_errMsg").html('');
	$("#C_S_quantityunit_errMsg").html('');
    $("#C_Desc_errMsg").html('');
	$("#C_S_orderval_errMsg").html('');
	$("#C_S_email_errMsg").html('');
	$("#C_S_name_errMsg").html('');
	$("#C_S_mobile_errMsg").html('');
	$("#C_S_ordercurr_errMsg").html('');
	$("#C_Est_Qty_List").removeClass("invalid");
	$("#C_Est_Qty").removeClass("invalid");
    $("#C_Desc_Prod").removeClass("invalid");
	$("#C_Spec_Loc1").removeClass("invalid");
	$("#C_S_email").removeClass("invalid");
	$("#C_S_name").removeClass("invalid");
	$("#C_S_mobile").removeClass("invalid");
	$("#C_Approx_Order_Val").removeClass("invalid");
	$("#CEF_Select_Currency").removeClass("invalid");
	$("#CEF_Freq_Period").removeClass("invalid");
	}
function titlemobilescreen()
{
	$("#C_S_mobile").removeAttr("readonly");
    $('#C_country_dropdown').removeAttr('disabled');
	 $(".cenq-bar-line").css({
         width:"0%" });
        $('#new-usr-msg').text('Please help us identify you');
        $('#new-usrmsg').text('Fill in your contact number.');	
}
function titleemailscreen()
{
	$("#C_S_mobile").attr("readonly","readonly");
    $('#C_country_dropdown').attr('disabled','disabled');
	 $(".cenq-bar-line").css({
		    width:"30%" });
		                        $('#new-usr-msg').text('Supplier can reach you at?');
		                        $('#new-usrmsg').text('Please provide your details.');	
}
//industry specific questions functions
function getindustry_specific_ques(mcat_id,cat_type)
{
	first_time_call=1;
var ques_arr = [];	
var prev_val='';
var host_nm =getUtilsDomainURL();
$.ajax({
type: 'POST',
            url:'//'+host_nm[1]+'/wservce/buyleads/getISQ/',
            data: {"modid":glmodid,"token":"imobile@15061981","mcatid":mcat_id,"cat_type":cat_type},
            dataType: 'json',
            crossDomain: true,
success: 
            function(json_obj) {
if(json_obj != undefined && json_obj.CODE == '200')
	  {
	industry_questions_found=1;
	questions_found=1;
var len = json_obj.DATA.length;
for (var i = 0; i < len; i++) {
var s;
if(prev_val=='')
{
s=0;
var option_arr=[];
option_arr.length = 0;
option_arr.push(json_obj.DATA[i].IM_SPEC_OPTIONS_DESC);
ques_arr.push({
        'question_id': json_obj.DATA[i].IM_SPEC_MASTER_ID,
        'title': json_obj.DATA[i].IM_SPEC_MASTER_DESC,
        'ques_type':json_obj.DATA[i].IM_SPEC_MASTER_TYPE,
        'options':option_arr
    });
}
else if(prev_val!='' && json_obj.DATA[i].IM_SPEC_MASTER_ID!=prev_val){
s=s+1;
var option_arr=[];
option_arr.length = 0;
option_arr.push(json_obj.DATA[i].IM_SPEC_OPTIONS_DESC);
ques_arr.push({
        'question_id': json_obj.DATA[i].IM_SPEC_MASTER_ID,
        'title': json_obj.DATA[i].IM_SPEC_MASTER_DESC,
        'ques_type':json_obj.DATA[i].IM_SPEC_MASTER_TYPE,
        'options':option_arr
    });
}
else{
option_arr.push(json_obj.DATA[i].IM_SPEC_OPTIONS_DESC);
ques_arr[s].options=option_arr;
}
prev_val=json_obj.DATA[i].IM_SPEC_MASTER_ID;
}
var len_array=ques_arr.length;
var len_diff=len_array-5;
if(len_diff>0){
for(i=0;i<len_diff;i++)
	{
	ques_arr.pop();
	}
	}
industry_ques["questions"]=ques_arr;
createQuestions(industry_ques);
imInvokeRequestForGaCode('/cgi/enquiry-industry-ques-avail.mp');
enq.industry_ques='|ISQ';
}          
}  
});
}
function createQuestions(questObj) {
	$('#industry_ques').html('');
	var text_count=0;
	var radio_count=0;
	var sel_count=0;
	var check_count=0;
var mndiv = document.getElementById('industry_ques');
var second_div=document.createElement("div");
second_div.id="form_div";
mndiv.appendChild(second_div);
var mainform = document.createElement("form");
mainform.id="industry_form";
var maindiv=second_div.appendChild(mainform);
        for (var k = 0; k < questObj['questions'].length; k++) {
            switch (questObj['questions'][k]['ques_type']) {
                                    
                case '1'://input text
                    {                                        
                	    text_count++;
                        var elementP = document.createElement("p");
                        elementP.textContent = questObj['questions'][k]['title'];
                        var inputbox = document.createElement("input");
                        inputbox.setAttribute('type', 'text');
                        inputbox.setAttribute('id','option_text'+text_count);
                        maindiv.appendChild(elementP);
                        maindiv.appendChild(inputbox);
                        setquestionparam(questObj['questions'][k]['question_id'],questObj['questions'][k]['title'],'text_ques_id'+text_count,'text_ques_title'+text_count,maindiv); 
                        break;
                    }
                case '3'://select
                    {
                	    sel_count++;
                        var elementP = document.createElement("p");
                        elementP.textContent = questObj['questions'][k]['title'];
                        var select = document.createElement("select");
                        select.id='option_select'+sel_count;
                        var fi_option = document.createElement("option");
                        fi_option.text='--Select--';
                        fi_option.value='';
                        select.appendChild(fi_option);
                        for (var b = 0; b < questObj['questions'][k]['options'].length; b++) {
                            var option = document.createElement("option");
                            option.value = questObj['questions'][k]['options'][b];
                            option.text = questObj['questions'][k]['options'][b];
                            select.appendChild(option);
                        }
                        maindiv.appendChild(elementP);
                        maindiv.appendChild(select);
                        setquestionparam(questObj['questions'][k]['question_id'],questObj['questions'][k]['title'],'select_ques_id'+sel_count,'select_ques_title'+sel_count,maindiv);    
                        break;
                   }
case '2'://radio
                    {
	radio_count++;
	var elementP = document.createElement("p");
    elementP.textContent = questObj['questions'][k]['title'];
    maindiv.appendChild(elementP);
    var arrayInner = questObj['questions'][k]['options'];   
    
    for (var z = 0; z < arrayInner.length; z++) {
    	var inputlbl = document.createElement("label");
        var inputRd = document.createElement("input");
        inputRd.name=questObj['questions'][k]['question_id'];
        inputRd.setAttribute('type', 'radio');
        inputRd.setAttribute('name', 'option_radio'+radio_count);
        inputRd.setAttribute('value', questObj['questions'][k]['options'][z]);       
        maindiv.appendChild(inputlbl);      
        inputlbl.appendChild(inputRd);
        var element = document.createTextNode(textContent1 = questObj['questions'][k]['options'][z]);
        inputlbl.appendChild(element);
        }
    setquestionparam(questObj['questions'][k]['question_id'],questObj['questions'][k]['title'],'radio_ques_id'+radio_count,'radio_ques_title'+radio_count,maindiv);
    break;
                    }

                case '4'://checkbox
                    {
                	    check_count++;
                        var elementP = document.createElement("p");
                        elementP.textContent = questObj['questions'][k]['title'];
                        maindiv.appendChild(elementP);
                        var arrayInner = questObj['questions'][k]['options'];
                        for (var z = 0; z < arrayInner.length; z++) {
                        	var inputlbl = document.createElement("label");
                            var inputchk = document.createElement("input");
                            inputchk.setAttribute('type', 'checkbox');
                            inputchk.setAttribute('name', 'option_checkbox'+check_count);
                           inputchk.setAttribute('value',questObj['questions'][k]['options'][z]);
                           maindiv.appendChild(inputlbl);                          
                           inputlbl.appendChild(inputchk);
                           var element = document.createTextNode(textContent1 = questObj['questions'][k]['options'][z]);
                           inputlbl.appendChild(element);      
                          
                        }
                        setquestionparam(questObj['questions'][k]['question_id'],questObj['questions'][k]['title'],'check_ques_id'+check_count,'check_ques_title'+check_count,maindiv);
                        break;
                    }

            }
        }
 var inputRd1 = document.createElement("input");
                            inputRd1.setAttribute('type', 'button');
                             inputRd1.setAttribute('value', 'Proceed');
 inputRd1.setAttribute('onclick', 'industry_ques_response();');
 mndiv.appendChild(inputRd1);
 industry_html=$('#industry_ques').html();
$('#industry_ques').hide();
    }
function industry_ques_response()
{
	var ques_id=new Array();
	var b_response=new Array();
	var ques_desc=new Array();
	imInvokeRequestForGaCode('/cgi/enquiry-industry-ques-submit.mp');
	var radio=0;
	var select=0;
	var text=0;
	var checkbox=0;
	var q_name='';
	
	$('#industry_ques').hide();
	$('#CEF_Enrich_Forsecond').show();
	$(".cenq-bar-line").css({width:"80%"});	
var host_nm =getUtilsDomainURL();
var query_id=$('#queryID').val();
$('#industry_form').find('input[type=text],select,input[type=radio],input[type=checkbox]:checked').each(function(){
	var type= $(this).attr('type'); 
	var response='';
if(typeof(type)!=='undefined' && type=='radio')
	{	
       if(q_name!==$(this).attr('name')){
    	   radio++;
    	
	    q_name=$(this).attr('name'); 
	response=$('input[name=' + q_name + ']:radio:checked').val();	 
	if(typeof(response)!=='undefined' && response!=='')
		{
		ques_id.push($("#radio_ques_id"+radio).val());   
    	ques_desc.push($("#radio_ques_title"+radio).val()); 
    	b_response.push(response);
		}
        }
         else{return;}
	}
else if(typeof(type)!=='undefined' && type=='checkbox')
{
	    if(q_name!==$(this).attr('name')){
	    	checkbox++;  
	    }
	    q_name=$(this).attr('name'); 
		ques_id.push($("#check_ques_id"+checkbox).val());   
		ques_desc.push($("#check_ques_title"+checkbox).val());    
	    b_response.push($(this).val());
	    
}
else if(typeof(type)==='undefined')
	{
	select++;
	 q_id=$(this).attr('id'); 
	response=$('#'+q_id).val();
	if(typeof(response)!=='undefined' && response!==''){
	 ques_id.push($("#select_ques_id"+select).val());   
 	ques_desc.push($("#select_ques_title"+select).val()); 
 	b_response.push(response);
	}
 	
	}
else if(typeof(type)!=='undefined' && type=='text'){
	text++;
	 q_id=$(this).attr('id'); 
response=$('#'+q_id).val();
	if(typeof(response)!=='undefined' && response!==''){
		ques_id.push($("#text_ques_id"+text).val()); 
		ques_desc.push($("#text_ques_title"+text).val()); 
		b_response.push(response);
	}
}
});
if(typeof(b_response)!=='undefined' && b_response!=''){
$.ajax({
	type: 'POST',
	            url:'//'+host_nm[1]+'/wservce/buyleads/setISQ/',
	            data: {"modid":glmodid,"token":"imobile@15061981","ofr_id":query_id,"q_id":ques_id,"b_response":b_response,"q_desc":ques_desc,"enq":"1","format":"1"},
	            dataType: 'json',
	            crossDomain: true,
	success: 
	            function(json_obj) {		

	}});
}
}
function setquestionparam(ques_id,description,input_id,input_id_desc,maindiv)
{
	 var inputbox_hi = document.createElement("input");
     inputbox_hi.setAttribute('type', 'hidden');
     inputbox_hi.setAttribute('id',input_id);
     inputbox_hi.setAttribute('value',ques_id);
     maindiv.appendChild(inputbox_hi);
     var inputbox_title = document.createElement("input");
     inputbox_title.setAttribute('type', 'hidden');
     inputbox_title.setAttribute('id',input_id_desc);
     inputbox_title.setAttribute('value',description);
     maindiv.appendChild(inputbox_title);	
}