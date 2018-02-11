var cef_EMFDownloadHtml = '';
var imesh_cookie_obj = {}; 
if(typeof(cimjsv) === "undefined")
cimjsv = new Object();
cimjsv['utils.imimg.com/enquiry/js/serveEnquiry.js']=117;

/*var abtest_split;
var utma_val=readCookie('__utma');
if(typeof(utma_val) != "undefined" && utma_val!=''){
utma_val=utma_val.split('.');
var visitor_id=utma_val[1];
abtest_split=visitor_id%2;
}*/
function loadBackupScript(callback){
	if (typeof callback !== 'function') {
		throw 'Not a valid callback';
	}
	if(typeof(jQuery) === "function")
	{
		callback.apply();
	}
	else
	{
		var js_script = document.createElement('script');
		js_script.onload = callback;
		js_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
		js_script.type = 'text/javascript';
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(js_script);
	}
}
loadBackupScript(function() { scriptLoadHandler(); });
function scriptLoadHandler()
{
	var utils_host_nm =getUtilsURL();
        var cssType='enquiry-v28.css';
        var urlType = "//"+utils_host_nm+"/enquiry/js/serveEnquiryHtml-v38.js?callback=serveEnqHtml";
        if(glmodid == 'IMOB')
        {       
             urlType = "//"+utils_host_nm+"/enquiry/js/mobile_enrich-v4.js?callback=mobileEnrichFormHtml";
             cssType = 'mobile_enquiry-v6.css';
        }    
	$('<link rel="stylesheet" type="text/css" href="//'+utils_host_nm+'/enquiry/css/'+cssType+'" rel="stylesheet" type="text/css"/>').appendTo("head");	
	$.ajax({
	url: urlType,
	jsonp : false,
	dataType: "jsonp",
	jsonCallback: "jsonp",
	cache: true
	});
}
function serveEnqHtml(response)
{       
	var utils_host_nm =getUtilsURL();
	var jsType = 'enquiryMultiForm-v49.js';	  
	var enquiry = document.createElement("div");
	var divId = 'enquiry';
	enquiry.setAttribute("id", divId);
	document.body.appendChild(enquiry);
	$("#"+divId).hide();
	document.getElementById('enquiry').innerHTML = response;
// 	if(imesh_cook_val != "") 
// 	{
	      scriptLoadHandlerEnrichForm();
// 	}
	var head = document.getElementsByTagName('head')[0];
	if(typeof(Suggester) === 'undefined'){  
	    var script2 = document.createElement('script');
	    script2.type = 'text/javascript';
	    script2.src = "//"+utils_host_nm+"/suggest/js/jq-ac-ui.js";
	    head.appendChild(script2);
	}
	var script1 = document.createElement('script');
	script1.type = 'text/javascript';
	script1.src = "//"+utils_host_nm+"/enquiry/js/"+jsType+"";
	head.appendChild(script1);	
}
function scriptLoadHandlerEnrichForm()
{
	      var host_nm =getUtilsURL();
              var loadurl="//"+host_nm+"/enquiry/js/secondEnquiryForm-v26.js?callback=serveEnrichFormHtml";
//               if(glmodid == 'FCP'){
// 		    loadurl = "http://"+host_nm+"/enquiry/js/secondEnquiryFormfcp_abtest-v2.js?callback=serveEnrichFormHtml";
// 	      }
	      $.ajax({
	      url:loadurl,
	      jsonp : false,
	      dataType: "jsonp",
	      jsonCallback: "jsonp",
	      cache: true
	      });
}
function serveEnrichFormHtml(response)
{
	cef_EMFDownloadHtml = response;
}
function getUtilsURL()
{
	var utils_host_nm = 'utils.imimg.com';
	if(window.location.href.match(/(\/\/dev-|\/\/dev.|file:\/\/)/ig))
	{
	  utils_host_nm = 'dev-utils.imimg.com';
	}else if(window.location.href.match(/(\/\/stg-|\/\/stg.|file:\/\/)/ig))
	{
	  utils_host_nm = 'stg-utils.imimg.com';
	}
	return utils_host_nm;
}
function mobileEnrichFormHtml(response)
{
    var head = document.getElementsByTagName('head')[0];
    var utils_host_nm =getUtilsURL();
	var jsType = 'mobile_enquiry-v6.js';
var script1 = document.createElement('script');
	script1.type = 'text/javascript';
	script1.src = "//"+utils_host_nm+"/enquiry/js/"+jsType+"";
	head.appendChild(script1);		  
	get_mobile_enquiry = response;
var enquiry = document.createElement("div");
	var divId = 'enquiry';
	enquiry.setAttribute("id", divId);
	document.body.appendChild(enquiry);
	$("#"+divId).hide();
	document.getElementById('enquiry').innerHTML = response;
}
