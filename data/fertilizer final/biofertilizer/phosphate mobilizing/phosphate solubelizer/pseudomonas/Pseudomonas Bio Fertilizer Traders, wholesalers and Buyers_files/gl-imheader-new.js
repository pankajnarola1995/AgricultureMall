var cimjsv;
if(typeof(cimjsv) === "undefined")
	cimjsv = new Object();
cimjsv['http://utils.imimg.com/globalhf/gl-imheader-new.js']=14;

var windowopen = false;
var userType;
var page = {};page.notMeQ = new Array();
page.notMe = function () {for (var j=0; j< page.notMeQ.length; j++){page.notMeQ[j].apply();}}

var GLIMHeader='YES';
var bl_log_link = 0;
var webAddress=location.hostname;
var UrlPri =webAddress.match(/^dev/)?"dev-":(webAddress.match(/^stg/))?"stg-":"";
var UrlPri2 =webAddress.match(/^dev/)?"dev.":(webAddress.match(/^stg/))?"stg.":""; 
var flag=1;
var domin="my.indiamart.com";
var v4 = readCookie('v4iilex');

var imesh_obj={};
imesh_obj=new userDataCookie();




function ch_setCookie_mob(cname, cvalue, cexpire) {
document.cookie = cname + '=' + escape(cvalue) + (typeof cexpire == 'date' ? 'expires=' + cexpire.toGMTString() : '') + ';'+  'domain=.indiamart.com;path=/;'}

function ch_setCookie(key, value) {
var date = new Date();var hours = date.getHours();var minutes = date.getMinutes();var seconds = date.getSeconds();var total_sec_in_a_day = 24*60*60;var current_sec = (hours*60*60)+(minutes*60)+seconds;var rest_sec = total_sec_in_a_day-current_sec;var expire1 = new Date();expire1.setTime(date.getTime() + rest_sec * 1000);
document.cookie = key + '=' + value + ';domain=.indiamart.com;expires=' + expire1.toGMTString()+';path=/';
}

function ch_setCookie1(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";domain=.indiamart.com;" + expires+";path=/";
}

function ch_srchdd()
    {
      var pos=$('#search_string').position();
      $('.im-gl-header').css("left",pos.left+"px");
    }



/*update on 8thFeb*/
function ch_FormAction(h)
{
    if(typeof(sugg) !== 'undefined'){
        document.getElementById('hold').innerHTML=h;
        var selectd=document.getElementById('select-search');
        if(h == "Products"){sugg.changePlaceholder('Enter product / service to search');$("#hdr_frm").attr("action","http://"+UrlPri+"dir.indiamart.com/search.mp?");selectd.value="Products";}
        if(h == "Buy Leads"){sugg.changePlaceholder('Enter product / service to search');$("#hdr_frm").attr("action","http://"+UrlPri+"trade.indiamart.com/buyersearch.mp?");selectd.value="Buy Leads";}
        if(h== "Tenders"){sugg.changePlaceholder('Enter product / service to search');$("#hdr_frm").attr("action","http://"+UrlPri+"tenders.indiamart.com/search.cgi?");selectd.value="Tenders";}

    }else{
        setTimeout(function(){ch_FormAction(h)}, 500);
    }

	

}
/*update on 8thFeb*/

function gaTrack(value) {
	if(typeof _gaq !== 'undefined'){_gaq.push(['_trackEvent', 'IM Global Header '+userType, window.location.host, value, 0]); }}
function ch_srh_action(h)
{
if(h == "Products"){$("#hdr_frm").attr("action","http://"+UrlPri+"dir.indiamart.com/search.mp?");}
if(h == "Buy Leads"){$("#hdr_frm").attr("action","http://"+UrlPri+"trade.indiamart.com/buyersearch.mp?")}
if(h== "Tenders"){$("#hdr_frm").attr("action","http://"+UrlPri+"tenders.indiamart.com/search.cgi?")}
}

function ch_DevStgDecider()
 {
			
			var fcp_imurl = getparamVal(decodeURIComponent(cookie),'imurl');
			if(fcp_imurl != "")
			{
				
				var domin ='seller.indiamart.com';
				$('#ch_sell').attr('href','http://www.indiamart.com/seller/');
				$('.ch_lst_tend').attr('href','http://'+UrlPri+''+domin+'/tenders/tender?modid='+glmodid);
				$('.ch_free_web').attr('href','http://indiamart.com/free-website/');
				$('.ch_dis_pro').attr('href','http://'+UrlPri+''+domin+'/product/manageproduct/addnew/');
				$('#ch_mang_buy_req').attr('href','http://'+UrlPri+''+domin+'/blgen/managebl/');
				$('#ch_upg_mem').attr('href','http://indiamart.com/seller/?services=paid');
				$('#ch_paid_mem').attr('href','http://indiamart.com/seller/?services=paid');
				$('.ch_my_dash').attr('href','http://'+UrlPri+''+domin);
				$('.ch_my_enq').attr('href','http://'+UrlPri+''+domin+'/enquiry/inbox/');
				$('.mang_pro').attr('href','http://'+UrlPri+''+domin+'/companyprofile/myproductbuy/?modid='+glmodid);
				$('.ch_post_buy').attr('href','http://'+UrlPri+''+domin+'/blgen/postbl?modid='+glmodid);
				$('#ch_mng_pro').attr('href','http://'+UrlPri+''+domin+'/cgi/eto-alerts-new.mp?modid='+glmodid);	
				//$('.ch_supplier_head').attr('href','http://'+UrlPri+''+domin+'/blgen/postbl?modid='+glmodid);
				$('.ch_buyers_head').attr('href','http://'+UrlPri+''+domin+'/blgen/postbl?modid='+glmodid);
				
			}
			else{
				var nwdomin ='my.indiamart.com';
				var selldomin = 'seller.indiamart.com';
					$('#ch_sell').attr('href','http://www.indiamart.com/seller/');
					$('.ch_lst_tend').attr('href','http://'+UrlPri+''+selldomin+'/tenders/tender?modid='+glmodid);
					$('.ch_free_web').attr('href','http://indiamart.com/free-website/');
					$('.ch_dis_pro').attr('href','http://'+UrlPri+''+selldomin+'/product/manageproduct/addnew/');
					$('#ch_mang_buy_req').attr('href','http://'+UrlPri+''+nwdomin+'/buyertools/managebl/');
					$('#ch_upg_mem').attr('href','http://indiamart.com/seller/?services=paid');
					$('#ch_paid_mem').attr('href','http://indiamart.com/seller/?services=paid');
					$('.ch_my_dash').attr('href','http://'+UrlPri+''+selldomin);
					$('.ch_my_enq').attr('href','http://'+UrlPri+''+selldomin+'/enquiry/inbox/');
					$('.mang_pro').attr('href','http://'+UrlPri+'my.indiamart.com/buyertools/myproductbuy/?modid='+glmodid);
					$('.ch_post_buy').attr('href','http://'+UrlPri+'my.indiamart.com/buyertools/postbl?modid='+glmodid);
					$('#ch_mng_pro').attr('href','http://'+UrlPri+''+nwdomin+'/cgi/eto-alerts-new.mp?modid='+glmodid);
                    //$('.ch_supplier_head').attr('href','http://'+UrlPri+''+selldomin+'/blgen/postbl?modid='+glmodid);
				    $('.ch_buyers_head').attr('href','http://'+UrlPri+''+nwdomin+'/buyertools/postbl?modid='+glmodid);					
			
			}
 }

function domainHolderFinder() 
{
	var locurl = location.href;
	var hostname = locurl.substring(0, locurl.indexOf('.'));
	var domainId=1;
	if (hostname.indexOf('trade') != -1) {var domainId=2;
		if (locurl.indexOf('trade.indiamart.com/details.mp?offer=') != -1) {
			var ofr_id = locurl.substring(('trade.indiamart.com/details.mp?offer=').length + locurl.indexOf('trade.indiamart.com/details.mp?offer='));
			var ofr_type = ofr_id.substring(ofr_id.length - 2);
			if (ofr_type == '12' || ofr_type == '30' || ofr_type == '33' || ofr_type == '48' || ofr_type == '55' || ofr_type == '62' || ofr_type == '73' || ofr_type == '88' || ofr_type == '91' || ofr_type == '97')
			{ domainId = 1; 
			}
		}
	}
	else if (hostname.indexOf('tenders') != -1) {
		domainId = 3;}
	else if (hostname.indexOf('my') != -1) {
		if (locurl.indexOf('my.indiamart.com/tenders/') != -1)
		{ domainId = 3; }
		else if ((locurl.indexOf('my.indiamart.com/bltxn/') != -1) || (locurl.indexOf('my.indiamart.com/blproduct/mypurchasedbl/') != -1))
		{ domainId = 2; }
	}
	else if (locurl.indexOf('indiamart.com/bigbuyer/') != -1) {
	 domainId = 2; }
	return domainId;
}
function holder_setter(id)
{//1,2,3 for products,buyleads and tender respectively
$('#select-search:nth-child('+id+')').prop('selected', true);
if(id==1){ch_FormAction("Products");}
if(id==2){ch_FormAction("Buy Leads");}
if(id==3){ch_FormAction("Tenders");}
}

function PluginLoadEvent(func){var oldOnLoad = window.onload;
if (typeof window.onload != 'function') {window.onload =function(){func(domainHolderFinder())}} else {window.onload = function () {oldOnLoad();
func(domainHolderFinder());}}}

$(window).resize(function()
 { var w=$(window).width();
if(w<=1000)
	{
	window.scrollTo(0,0);	
	GLIMHeader='NO';
	$('#header').css({'top':'0px','position':''});
	$('.fxmn').css({'margin-top':'96px'});
	$("#header").css('position','absolute');
	}
else
   {if(flag==1)
   {GLIMHeader='YES';}
   $("#header").css('position','fixed');
   }
$('.im-gl-header').hide();
$(".rgt_mst").css('width',($(window).width()-1001)/2);
if (w>=1061){$(".rgt_mst").css("display","block");}else {$(".rgt_mst").css("display","none");} 
$(".ui-autocomplete").css("display","none");
});

function readCookie(name)
{var search = name + "="
if (document.cookie.length > 0)
{offset = document.cookie.indexOf(search)
if (offset != -1) 
{offset += search.length
end = document.cookie.indexOf(";", offset)	
if (end == -1) end = document.cookie.length	
return unescape(document.cookie.substring(offset, end))}}
if (name == 'v4iilex')
{return readCookie('v4iil');}
return "";}


function getparam(key){if( (cookie = readCookie("v4iilex") || readCookie("ImeshVisitor"))  > ""){var val = "|"+cookie+"|";var pattern = new RegExp(".*?\\|"+key+"=([^|]*).*|.*");return val.replace(pattern, "$1");}}
function getparamVal(cookieStr, key){if( cookieStr > ""){var val = "|"+cookieStr+"|";var pattern = new RegExp(".*?\\\|"+key+"=([^|]*).*|.*");return val.replace(pattern, '\$1');}else {return "";}
}


function deleteCookie(name) {
if(name=='myoption')
{
document.cookie = name+"=;expires=;domain=."+UrlPri+"seller.indiamart.com;path=/;";
}
else
{
document.cookie = name+"=;expires=;domain=.indiamart.com;path=/;";
}
}

// To read user type ex- S, B, SB,NA start
function user_intent(){
userType = 'un';
cookie = readCookie("ImeshVisitor");
if( cookie!= "" && cookie!=null) 
{userType=getparamVal(cookie, "int");
	if(userType!='s'&&userType!='sb'&&userType!='b'&&userType!='na'){userType='na';}
}
}

// To read user type ex- S, B, SB,NA end

function notmep()
{deleteCookie('ImeshVisitor');deleteCookie('v4iilex');deleteCookie('xnHist');getLoginStringv1();user_intent();document.app_rgt.txtmobileno.value="";gaTrack('IM_Not Me');deleteCookie('myoption');}
page.notMeQ.push(notmep);
// --------------need to remove--------------------------------
function header_dropdown() { $('.ih-tnb ul li').hover( function () { $('.ih-sub-menu', this).stop(true, true).slideDown(0); if($.browser.msie && $.browser.version=="6.0"){$('.ih-sub-menu', this).css('top', '25')} }, function () { $('.ih-sub-menu', this).stop(true, true).slideUp(50); });}
// ------------------------------------------------------------
/*------Function added -08-12------- */
 page.IdentifiedQ = new Array(); 
 page.Identified = function() { for (var j=0; j< page.IdentifiedQ.length; j++) { if(typeof page.IdentifiedQ[j] === "function") { page.IdentifiedQ[j].apply(); } } }  


function getLoginStringv1(){
var value = "";value = readCookie('v4iilex');var logdata = readCookie('ImeshVisitor');var emplogin = "";emplogin =readCookie('adminiil');
 //domin="my.indiamart.com";
 bl_log_link = 0;
if((logdata!='')&&(logdata!=null)){$('#slMtp').removeClass("hov_eff");$('#lshead').addClass("hov_eff last");$('#lshead').addClass("last");}else{$('#slMtp').addClass("hov_eff");$('#lshead').removeClass("hov_eff last");}

if( ((cookie = logdata) != "") && ((cookie = logdata) != null) ){var fullname='&lt;span class="ih-pp1 lgn1 nme" &gt;Hi '+getparamVal(decodeURIComponent(cookie),'fn')+' &#9662;';$('#joinf').css('display','none');
}else{fullname = '&lt;LI&gt;&lt;b&gt;&lt;span class="ih-pp1"&gt;&lt;span class="ih-tlc"&gt;Hi &lt;/span&gt;Guest&lt;/span&gt;&lt;/b&gt;&lt;/LI&gt;';}
var url = document.URL;var redirect = "";
var ref_url=document.referrer;
var rd='';
if((url.match('/cgi/')) && (glmodid =='FCP'))
{redirect=escape(ref_url);rd="window.location=document.referrer;";}
else if(url.match('/cgi/')){redirect = document.URL;}else{if(url.match('signout.html'))
{redirect = document.URL;}else{redirect = escape(url);}}

if((value == "" || value == null) && (logdata != "" && logdata!=null)){var notme_name = '&lt;span id="wel_name" style="border:0;"  &gt;&lt;span class="ih-pp1 lgn1 nme" style="cursor: auto;" &gt;Hi '+getparamVal(decodeURIComponent(cookie),'fn')+' &#9662;&lt;/span&gt;';fullname = '';
var notme='&lt;li class="signout last" &gt; &lt;a onclick="gaTrack(\'Not Me\');page.notMe();" rel="nofollow" class="cpo" &gt;Not Me &lt;/a&gt;&lt;/li&gt;'; }else{var notme_name = '';var notme='';}
		
if((emplogin!="")&&(emplogin!=null)){var signout = '&lt;li class="signout last cpo" &gt; &lt;A onclick="gaTrack(\'Sign Out\');deleteCookie(\'v4iilex\');deleteCookie(\'adminiil\');deleteCookie(\'myoption\');deleteCookie(\'ImeshVisitor\');deleteCookie(\'xnHist\');location.reload();"  rel="nofollow"&gt;Sign Out&lt;/A&gt;&lt;/li&gt;';bl_log_link=1;}

else if((value!='')&&(value!=null)){var signout = '&lt;li class="signout last cpo" &gt; &lt;A onclick="gaTrack(\'Sign Out\');deleteCookie(\'v4iilex\');location.reload();'+rd+'"  rel="nofollow"&gt;Sign Out&lt;/A&gt;&lt;/li&gt;';bl_log_link=1;}else{signout = '';bl_log_link=0;}

var upg_mem='&lt;li&gt;&lt;a id="ch_upg_mem" href="http://www.indiamart.com/seller/?services=paid" onclick="gaTrack(\'Upgrade Your Membership\');" rel="nofollow"&gt;Upgrade Your Membership&lt;/a&gt;&lt;/li&gt;';

var pro_buy='&lt;li&gt;&lt;a onclick="gaTrack(\'Products We Buy\');" class="mang_pro" href="http://my.indiamart.com/buyertools/myproductbuy/" rel="nofollow"&gt;Products We Buy&lt;/a&gt;&lt;/li&gt;';

var sell='<span id="selld" ><a href="http://www.indiamart.com/seller/" id="ch_sell" onclick="gaTrack(\'Sell\');" class="cpo" onmouseover="sell_sear_cnfl();"><span class="ih-pp1 lgn1"> Sell On IndiaMART';

var selld=' &#9662;</span></a><ul class="selldw"><li><a rel="nofollow" href="http://indiamart.com/free-website/" onclick="gaTrack(\'Sell_Create Free Website\');"class="ch_free_web" >Create Free Website</a></li><li><a rel="nofollow" href="http://my.indiamart.com/product/manageproduct/addnew/" onclick="gaTrack(\'Sell_Display Free Products\');" class="ch_dis_pro">Display Free Products</a></li><li class="last"><a rel="nofollow" href="http://www.indiamart.com/seller/?services=paid" onclick="gaTrack(\'View Paid Memberships\');" id="ch_paid_mem">View Paid Memberships</a></li></ul></span>';

var comn_links='&lt;li&gt;&lt;A HREF="http://my.indiamart.com/" onclick="gaTrack(\'My Dashboard\');"class="ch_my_dash"&gt;My Dashboard&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="http://my.indiamart.com/enquiry/inbox/" onclick="gaTrack(\'My Enquiries\');" class="ch_my_enq" rel="nofollow"&gt;My Enquiries &lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="http://my.indiamart.com/bltxn/latestbl/" onclick="gaTrack(\'Latest Buy Leads for Me\');"class="bl_log_link" rel="nofollow"&gt;Latest Buy leads For Me&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="http://my.indiamart.com/tenders/tender" rel="nofollow" onclick="gaTrack(\'Latest Tenders For Me\');" class="ch_lst_tend"&gt;Latest Tenders For Me&lt;/a&gt;&lt;/li&gt;';

var sign_wot_fcp='&lt;ul class="snt" id="sntid"&gt;&lt;li class="hd_hdr"&gt; &lt;b&gt;Buy&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;a id="ch_mang_buy_req" onclick="gaTrack(\'Manage Buy Requirements\');" class="pdl" href=" http://my.indiamart.com/buyertools/managebl/" rel="nofollow"&gt;Manage Buy Requirements&lt;/a&gt;&lt;/li&gt;'+pro_buy+'&lt;li class="hd_hdr"&gt; &lt;b&gt;Sell&lt;/b&gt;&lt;/li&gt;'+comn_links+'&lt;li&gt;&lt;a class="ch_free_web pdl" onclick="gaTrack(\'Sign_Create Free Website\');" href="http://indiamart.com/free-website/"&gt;Create Free Website &lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a class="pdl ch_dis_pro" href="http://my.indiamart.com/product/manageproduct/addnew/" onclick="gaTrack(\'Display Free Products\');" rel="nofollow"&gt;Display Free Products&lt;/a&gt;&lt;/li&gt;'+signout+notme+'&lt;/ul&gt;';

var sign_w_fcp='&lt;ul class="snt wfcp" id="sntid"&gt;'+comn_links+'&lt;/li&gt;'+pro_buy+upg_mem+signout+notme+'&lt;/ul&gt;';

var fcp_imurl = getparamVal(decodeURIComponent(cookie),'imurl');
if(fcp_imurl != ""){sign_wot_fcp='';}else{sign_w_fcp='';}

if((value == "" || value == null) && (logdata == "" || logdata == null)){var newuser = '&lt;span class="nme"&gt; &lt;A onclick="user_signIn(); gaTrack(\'Sign In\');" target="_top" class="ih-zz cpo" rel="nofollow"&gt;Sign In&lt;/A&gt;&lt;/span&gt;';fullname = '';$('#joinf').css('display','block');$('#notification').css('display','none');sign_w_fcp='';
$('.bl_log_link').attr('href','http://'+UrlPri+'trade.indiamart.com/buy.html?modid='+glmodid);
}else{newuser= '';selld='';$('.bl_log_link').attr('href','http://'+UrlPri+''+domin+'/cgi/eto-myportal-enqalert.mp?modid='+glmodid);}

//if(mob_link==''){mob_link="http://"+UrlPri+"m.indiamart.com/";}
if(fcp_imurl != ""){var loginhtml= '<li>'+fullname+''+newuser+''+notme_name+''+sign_w_fcp+'&lt;/li&gt;';}
else if((fcp_imurl == "") && (logdata != "" && logdata!=null)){var loginhtml= '<li>'+fullname+''+newuser+''+notme_name+''+sign_wot_fcp+'&lt;/li&gt;';}
else{var loginhtml= '<li>'+fullname+''+newuser+''+notme_name+'&lt;/li&gt;';}

loginhtml = $('<div />').html(loginhtml).text();
$('#lshead').html(loginhtml).text();
$('#slMtp').html(''+sell+selld+'');
ch_DevStgDecider();
//header_dropdown();
$('#joinf').html('<span class="nme"><a onclick="user_register();gaTrack(\'Join Free\');" style="display:block" class="cpo">Join FREE</a></span>');
if((value == "" || value == null) && (logdata == "" || logdata == null)){$('.bl_log_link').attr('href','http://'+UrlPri+'trade.indiamart.com/buy.html?modid='+glmodid);}else if(fcp_imurl != ""){$('.bl_log_link').attr('href','http://'+UrlPri+'seller.indiamart.com/bltxn/latestbl?modid='+glmodid);}else {$('.bl_log_link').attr('href','http://'+UrlPri+'seller.indiamart.com/bltxn/latestbl?modid='+glmodid);}} 

page.IdentifiedQ.push(getLoginStringv1);


function hd_tollFree(){var toll_free='';var myDate = new Date();var gmt = -myDate.getTimezoneOffset()/60;if(gmt == 5.5){
toll_free = '096-9696-9696';$("#dwnappp").css("display","block");}else{toll_free = '+91-96-9696-9696';$("#appicns").css("display","block");}
toll_free = $('<div />').html(toll_free).text();$('#hd_tollFree').html(toll_free).text();$('#hd_tollFree1').html(toll_free).text();}
 

$(document).ready(function(){
/*add on 23rdFeb*/
var previousval;
previousval=$(".cst-select").val();
/*add on 23rdFeb end*/
$(".cst-select").change(function(){var selectedOption = $(this).find(":selected").text();$(this).next(".holder").text(selectedOption);}).trigger('change');
var c = $('#select-search').val();ch_srh_action(c);
$('#select-search').on('change', function(){
ch_FormAction($(this).val());
/*add on 23rdFeb*/
gaTrack(previousval+' to '+$(this).val());
previousval = this.value;
/*add on 23rdFeb end*/
});
})


$(function () { $('#hdr_frm').attr('autocomplete', 'off');});
$(window).scroll(function(){ch_srchdd(); });

function def_search()
{
	document.getElementById('hold').innerHTML="Products";
var selectd=document.getElementById('select-search');
$("#hdr_frm").attr("action","http://"+UrlPri+"dir.indiamart.com/search.mp?");
selectd.value="Products";
}
// for post requirement popup start
FORM_EXPLICIT = 1;
function display_bl_OverlayForm()
{
	if(typeof(open_bl_overlay_form)!="undefined")
	{open_bl_overlay_form(glmodid);}
	else
	{setTimeout(function(){display_bl_OverlayForm()}, 100);}
}
// for post requirement popup end

// Notification
function notification_onload(){

var logdata = readCookie('ImeshVisitor');
var emplogin=readCookie('adminiil');
if( (logdata!= "") && (logdata!= null) && ((emplogin==null)||(emplogin==""))){$.ajaxSetup({ cache: true });
   $.getScript( "http://notify.indiamart.com/js/pushstream.js" )
		   .done(function( script, textStatus ) {
			   getcustomnotifyjs();
   })
		   .fail(function( jqxhr, settings, exception ) {                            
   });
   function getcustomnotifyjs(){$.ajaxSetup({ cache: true });
	   $.getScript( "http://notify.indiamart.com/js/PushNotification.js" )
				.done(function( script, textStatus ) {
		})
				.fail(function( jqxhr, settings, exception ) {
					                            
		});
   }            
}					
}
// Notification end	

$(window).load(function() {
var usr = new userDataCookie().get();
if (usr){diffDays = ((new Date())-(new Date(usr.cd))) / (1000 * 60 * 60 * 24);
if (diffDays >=7){$.ajax({url:"http://"+UrlPri+"login.indiamart.com/id.pl",dataType: "jsonp"});}};
var gllid="";
	if( (cookie = readCookie("ImeshVisitor")) != ""){
	   gllid=getparamVal(decodeURIComponent(cookie),'glid');
	if ((gllid=="")||(Number(gllid)=="NaN"))
	{$.ajax({url:"http://"+UrlPri+"login.indiamart.com/id.pl",dataType: "jsonp"});
	}}	

 if(window.location.href.indexOf("seller")===-1) {
  setTimeout(function(){notification_onload()}, 50);      
 }

$(".hd_body_pop").load(function() {}).css('background-image', 'url(http://utils.imimg.com/globalhf/iphone_6.png)');
$(".hd_app_icn1").load(function() {}).css('background-image', 'url(http://utils.imimg.com/globalhf/mobile_icon.gif)');

if(location.href.indexOf('\&swg=1')>-1){user_register();}
// imlogin.js ondemand
if(typeof(_Login_initial) === "undefined")
{ _Login_initial = true;$.ajaxSetup({ cache: true }); $.getScript('http://'+UrlPri+'utils.imimg.com/header/js/imlogin.js', function() { FreeWebPopup();});}
});	

function user_signIn(emId,redUrl,flag,type)
{if(type==null){type=="";}
if(typeof(_Login_initial) === "undefined"){
	  _Login_initial = true;$.ajaxSetup({ cache: true });$.getScript('http://'+UrlPri+'utils.imimg.com/header/js/imlogin.js', function()
	  {signIn(emId,redUrl,flag,type);FreeWebPopup();});} else { signIn(emId,redUrl,flag,type); }}
	  
function user_register()
{if(typeof(_Login_initial) === "undefined"){ _Login_initial = true; $.ajaxSetup({ cache: true }); $.getScript('http://'+UrlPri+'utils.imimg.com/header/js/imlogin.js', function(){
register();FreeWebPopup();});}else{ register();}}

var app_installed=false;
var logdata = readCookie('ImeshVisitor');
var glid=getparamVal(logdata,'glid');
/*if(logdata!="")
{
	var xnh = readCookie('xnHist');	
	var inst=getparamVal(decodeURIComponent(xnh),'install');
	if (inst=="undefined" || inst=="")
		{
		$.ajax(
				{
					url: "http://mapi.indiamart.com/wservce/AppTrack/Checkappuser/gluserid/"+glid+"/token/imobile@15061981/",
					data: {modid: "IMHOME"},
					type: 'POST',
					dataType: "jsonp",
					jsonpCallback:'app_install'});
		
		}
	else if(inst=="true")
		{
		app_installed=true;
		}
	}
else
	{
	var glid=getparamVal(decodeURIComponent(logdata),'glid');
	$.ajax(
			{
			url: "http://mapi.indiamart.com/wservce/AppTrack/Checkappuser/gluserid/"+glid+"/token/imobile@15061981/",
			data: {modid: "IMHOME"},
			type: 'POST',
			dataType: "jsonp",
			jsonpCallback:'app_install'});
	}

	function app_install(data1)
	{
		if(data1==1)
			{
			app_installed=true;
			}
		else{app_installed=false;}
		if(logdata!="")
			{
			var new_cook=new userDataCookie();
			var getCook = new_cook.get('xnHist');
			new_cook.set({'install': app_installed}, 'xnHist');
	}
	}*/





//below section

$(document).keyup(function(e){if (e.keyCode === 27) {$("#dw_app-content,#dw_back-layer,#hd_container1,#hd_container2,#hd_container3,#hd_container4,#hd_container5,#hd_container6,#dialog,#mask1").css("display","none");
document.app_rgt1.txtmobileno1.value="";$("#msg_cont1").empty();$("#msg_cont1").css("display","none");}});
function validator(Form){
if(Form.ss.value.length==0)
{
 alert("Please enter text to search.");
	Form.ss.focus();
	return false;
}
var re = /(Enter\s+.*?Search)/i;
if (Form.ss.value.match( re ))
{	Form.ss.value=Form.ss.value.replace(/\s+/,' ');
	alert("Please enter a valid text to search.");
	Form.ss.focus();
	return false;
}
while(Form.ss.value.indexOf('  ')>0){
Form.ss.value = Form.ss.value.replace('  ',' ');
}
if (Form.ss.value.replace(/\s/g, '').match(/^[^0-9a-zA-Z ]+$/)){
	alert("Enter at least one alphanumeric characters for search.");
	Form.ss.focus();
	return false;
}
var temp=Form.ss.value.replace(/\s/g, '');
if (temp.length < 1){
	Form.ss.value=Form.ss.value.replace(/\s+/,'');
	alert("Please enter a valid text to search.");
	Form.ss.focus();
	return false;
}
else if (Form.ss.value.replace(/\s/g, '').length > 119){
		alert("Enter less than 120 characters for search.");
		Form.ss.focus();
		return false;
}

if(typeof _gaq !== 'undefined'){_gaq.push(['_trackEvent', 'IM Global Header '+userType, window.location.host, "Search", 0]);}
return true;
}
function userDataCookie(){
this.get = function(name) {
        name = name || 'ImeshVisitor';
        var iMesh;
        var ca = new Array();
        ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var item = ca[i];
            if (item.replace(/^\s+|\s+$/g, "")
                .split('=')[0] == name) {
               item = unescape(item);
				var pos = item.indexOf('ImeshVisitor=');
				iMesh = item.substring(pos+13);
            };
        }
        if (iMesh) {
            return strToObj(iMesh);
        } else {
            return "";
        }
    }
    this.set = function(userObj, name) {
        name = name || 'ImeshVisitor';
        var cookObj;
        var myObj;
        if (name == 'xnHist') {
            cookObj = {
                pv: '1',
                city: '1',
                cvstate:'1',
                popupshown: '1',
                install: '1',
				ss : '1',
            };
            myObj = new userDataCookie().get(name);
            for (var key in cookObj) {
                if (cookObj[key] && userObj[key] != '' && userObj[key] != 0) 
                cookObj[key] = (userObj[key] || myObj[key]);
                else 
                cookObj[key] = userObj[key];
            }
        } else if (name == 'ImeshVisitor') {
            cookObj = {fn: '1',ln: '1',em: '1',ph1: '1',ph2: '1',phcc: '1',phac: '1',co: '1',url: '1',cn: '1',iso: '1',
mb1: '1',mb2: '1',ad: '1', ct: '1',ctid: '1',st: '1',stid: '1',zp: '1',glid: '1', nm: '1',int: '1',cd: '1',utyp: '1',imurl: '1'};
            myObj = new userDataCookie().get();
            for (var key in cookObj) { if (cookObj[key])   cookObj[key] = (userObj[key] || myObj[key]) || ''; }
            if (cookObj.nm) {
                var flname = new Array();
                var str = new Array();
                str = cookObj.nm.split(/\s+/);
                flname.push(str.shift());
                flname.push(str.join(' '));
                if (!cookObj.fn) {
                    cookObj['fn'] = flname[0];
                }
                if (!cookObj.ln) {
                    cookObj['ln'] = flname[1];
                }
            } else {
                if (cookObj['fn'] && cookObj['ln']) 
                cookObj['nm'] = cookObj['fn'] + ' ' + cookObj['ln'];
                else {
                    if (!cookObj['ln']) cookObj['nm'] = cookObj['fn'];
                    else cookObj['nm'] = cookObj['ln'];
                }
            }
            //cookObj['cd'] = new Date();
			var d = new Date().toString();
			cookObj['cd'] = d.substr(8,2)+"/"+(d.substr(4,3)).toUpperCase()+"/"+d.substr(11,4);
        }
        newCookie = objToStr(cookObj);
        expires = new Date();
        expires.setTime(expires.getTime() + 24 * 60 * 60 * 180 * 1000);
        document.cookie = "" + name + "=" + escape(newCookie) + ";" + "expires=" + expires.toGMTString() + ";" + "domain=.indiamart.com;path=/;";
    }
    function objToStr(userObj) {
        var newCookie = new Array();
        for (var key in userObj) {
            newCookie.push(key + '=' + userObj[key]);
        }
        newCookie = newCookie.join('|');
        return newCookie;
    }
    function strToObj(str) {
        var arr = new Array();
        arr = str.split('|');
        var obj = {};
        for (i = 0; i < arr.length; i++) {
            var item = arr[i];
            obj[item.split('=')[0]] = item.split('=')[1];
        }
        return obj;
    }
    this.remove = function() {
        document.cookie = "ImeshVisitor=;expires=;domain=.indiamart.com;path=/;";
        document.cookie = "v4iilex=;expires=;domain=.indiamart.com;path=/;";
    }
}

$(function(){
$(document).ready(function(){
$(".rgt_mst").css('width',($(window).width()-1001)/2);
if (screen.width>=1061){$(".rgt_mst").css("display","block");}else {$(".rgt_mst").css("display","none");}
window.scrollTo("0px","0px");
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   $(".ui-autocomplete").css("display","none");
   if (st > lastScrollTop){
		$("#header").addClass("bShd");
		$(".hd_top_strp").addClass("hidden");
		$('.im-gl-header').removeClass("sugdd1");
		$('.im-gl-header').addClass("sugdd");
		$("#slMtp").addClass("slMtp");
		$(".suggestion_list").css("display","none");
		$(".nwHdr").css("padding-top","8px");
		$(".srchB").css("padding-top","8px");
		$(".rgt_mst").css("margin-top","-47px");
		$(".hd_app_icn1").css("margin-top","9px");
		$(".hd_app_icn1").css("padding-bottom","9px");
   } else {
		$("#header").removeClass("bShd");
		$(".hd_top_strp").removeClass("hidden");
		$('.im-gl-header').addClass("sugdd1");
		$('.im-gl-header').removeClass("sugdd");
		$("#slMtp").removeClass("slMtp");
		$(".nwHdr").css("padding-top","0px");
		$(".srchB").css("padding-top","8px");
		$(".rgt_mst").css("margin-top","-58px");
        $(".hd_app_icn1").css("padding-bottom","17px");
   }
   lastScrollTop = st;
});
user_intent();

$('#mlink').bind("DOMSubtreeModified",function(){$("#notification").show();});
$(document).click(function (e) {if(e.target.id=='search_string')return;$(".ui-autocomplete").css("display","none");});
//for menu
var menu = $('#cssmenu');var menuList = menu.find('ul:first');var listItems = menu.find('li').not('#responsive-tab');menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');menu.on('click', '#responsive-tab', function(){listItems.slideToggle('fast');listItems.addClass('collapsed');});
			
}); 
});

$('.ih-pbr').click(function(){ $(this).removeAttr("href");display_bl_OverlayForm(); $(this).css("cursor","pointer");});
function FreeWebPopup(){var newCook = new userDataCookie(); var getCook = newCook.get('xnHist'); pv = getCook.pv || 0; var xnHistCity = getCook.city || '';cvstate=getCook.cvstate||'';popupshown=getCook.popupshown||''; if (!readCookie('ImeshVisitor')) { pv++; if (pv >= 7) { } } else { pv = '0'; } var setObj = {'pv': pv, 'city':xnHistCity }; newCook.set(setObj, 'xnHist');getLoginStringv1();}


// function for sell dropdown and autosuggest confliction
function sell_sear_cnfl(){if(($("#cssmenu > ul li.has-sub:hover ul").css("display") == "block") ){$(".ui-widget-content").css("display","none");}}


function SMS_Status(data2){ 
if(data2.delivery_status=='SMS Triggered')
		{
			$("#hd_container1,#hd_container2,#hd_container4,#hd_container5,#hd_container6,#callus_pop").css("display","none");
			$("#dw_app-content,#hd_container3,#dw_back-layer").css("display","block");
		}
 else{
		if(data2.reason=='SMS not sent due to DND')
		{
			$("#hd_container1,#hd_container3,#hd_container4,#hd_container5,#hd_container6,#callus_pop").css("display","none");
			$("#dw_app-content,#hd_container2,#dw_back-layer").css("display","block");
		}
		else if(data2.reason=='Sms Sent Attempted Within 30 Minutes')
		{
			$("#hd_container1,#hd_container3,#hd_container2,#hd_container5,#hd_container6,#callus_pop").css("display","none");
			$("#dw_app-content,#hd_container4,#dw_back-layer").css("display","block");
		}
		else
		{
			$("#hd_container1,#hd_container3,#hd_container2,#hd_container4,#hd_container6,#callus_pop").css("display","none");
			$("#dw_app-content,#hd_container5,#dw_back-layer").css("display","block");
		}
 }
}
function Download_indiamart_app(mob){
	
	if(mob==null)
	{
	if( (cookie = readCookie("ImeshVisitor")) != ""){
	   name=getparamVal(decodeURIComponent(cookie),'fn');
	   mob=getparamVal(decodeURIComponent(cookie),'mb1');
	}
	else if($("#dw_app-content").css("display") == "block")
	{		
	  mob=$("#app_mobile").val(); name="";
$("#dw_app-content,#dw_back-layer").css("display","none");
	}
}
$("#dw_app-content,#hd_container6,#dw_back-layer").css("display","block");  
$("#hd_container3,#hd_container2,#hd_container4,#hd_container5,#hd_container1,#callus_pop").css("display","none");  
var cookie=readCookie('ImeshVisitor');
if(cookie!="" && cookie!=null)
	{
	var name=getparamVal("nm");
	var glid=getparamVal("glid");
	$.ajax(
			{
			url: "http://mapi.indiamart.com/wservce/apps/sendmsg/source/ClickLogIn/subsource//v//",
			data: {modid: "IMHOME", token: "imobile@15061981", glusrid:glid,mobile:mob,receiverName:name},
			type: 'POST',
			dataType: "jsonp",
			jsonpCallback:'SMS_Status'}); 
	}
else{
$.ajax(
		{
			url: "http://mapi.indiamart.com/wservce/apps/sendmsg/source/click/",
		data: {modid: "", token: "imobile@15061981", glusrid:"",mobile:mob,receiverName:name},
		type: 'POST',
		dataType: "jsonp",
		jsonpCallback:'SMS_Status'}); 
$.ajax({
				url: 'http://mapi.indiamart.com/wservce/users/login/',	
				data: {'user_name':mob,
				'identified':1,
				'modid':'IMHOME',
				'token':'imobile@15061981',
				'format':'JSON'},
				type: 'GET',
				dataType: "jsonp",
				success: function(jsonResult)
				{
					
					 if(jsonResult != undefined && jsonResult["code"] == '200'){
					     var resultSet=jsonResult.DataCookie; 
						if((resultSet != undefined) && (resultSet !='')){
							imesh_obj.set(resultSet);
						}
					   
				   }
				   login_callback();
				   
				}
				}); 
}
}

$( ".hd_app_icn1" ).mouseover(function() {$('#txtmobileno').focus();});	


   function invalidmsg(phnum, err_msg, err)
{
	phnum.style.borderColor="red";
	err.innerHTML="<div class='arrow-up1'></div>"+err_msg;
	err.style.display="block";
}
	function validateForm(mbox,errdiv) {
	var err_div=document.getElementById(errdiv);
    var x = mbox.value;
    if (x == null || x == "") {
    	invalidmsg(mbox,"Required",err_div);
        return false;
    }
	else
	{
		if(!RegExp("([6-9]{1})[0-9]{9}").test(x) || x.length!=10)
		{
			invalidmsg(mbox,"Enter 10 digit valid mobile number starting with 9,8,7 or 6",err_div);
		 	return false; 
		}
		else
		{
			mbox.style.borderColor="green";
			err_div.style.display="none";
			err_div.innerHTML="";
        	return true;
		}
	}
}


function App_Promo()
{
	var id = '#dialog';var winH = $(window).height();var winW = $(window).width();
	$(id).css('top',  winH/2-$(id).height()/2);$(id).css('left', winW/2-$(id).width()/2);$(id).fadeIn();
	$("#dialog").load(function() {}).css('background', '#fff url("http://utils.imimg.com/globalhf/app_bnr_5.jpg") no-repeat scroll 0 0');
	$('.window .closeb').click(function (e) {e.preventDefault();
	$('#mask1').hide();$('.window').hide();document.app_rgt1.txtmobileno1.value="";
	$("#msg_cont1").empty();$("#msg_cont1").css("display","none");$("#err3").css("display","none");});		
	$('#mask1').click(function () {$(this).hide();$('.window').hide();$("#err3").css("display","none");});$('#txtmobileno1').focus();
	if ($('#dialog').css('display') == 'block'){$("#mask1").css("display","block");}else {$("#mask1").css("display","none");}
}

$(function(){
$(".ppppp").click(function(){$("#dw_app-content,#callus_pop,#dw_back-layer").css("display","block");});

$(".hd-dw-apps").click(function(){
	gaTrack('App_top');
var cookie = readCookie('ImeshVisitor');	
var mob=getparamVal(decodeURIComponent(cookie),'mb1');		
if((cookie = readCookie("ImeshVisitor")) != "")
{
	name=getparamVal(decodeURIComponent(cookie),'fn');
		document.app_rgt1.txtmobileno1.value=mob;
}
App_Promo();
   }); 
$(".app_cl,#dw_back-layer").click(function(){$("#dw_back-layer,#dw_app-content,#hd_container1").hide(); });	   
});
   
function app_sms_status(data3){
	var html="";
	if(data3.delivery_status=='SMS Triggered')
			{
				html="<b>App download link is sent to "+data3.mobile+"</b>.";
			}
	 else{
			if(data3.reason=='SMS not sent due to DND')
			{
				html="Oops! "+data3.mobile+" is in <b style=\"color: white;\">DND</b>.<br/> Please give a <b>Missed call</b> on <b>1800-200-1848</b> to install the app.";
			}
			else if(data3.reason=='Sms Sent Attempted Within 30 Minutes')
			{
				html="App Install Link already sent to "+data3.mobile+".<br/> To get instant link, give a <b>Missed call</b> at <b>1800-200-1848</b>.";
			}
			else
			{
				html="Oops! We can't reach you at "+data3.mobile+". <br/> To install the app, give a <b>Missed call</b> on <b>1800-200-1848</b>.";
			}}
			$("#msg_cont1").html(html);
			$("#msg_cont1").css("display","block");			
	} 
function login_callback(data9){getLoginStringv1();FreeWebPopup();setMobilevalue();}
function promo_sms_status(mobi){
	
	var cookie=readCookie('ImeshVisitor'); 
	if(cookie!="" && cookie!=null)
		{
		var name=getparamVal("nm");
		var glid=getparamVal("glid");
		
		$.ajax(
				{
				url: "http://mapi.indiamart.com/wservce/apps/sendmsg/mobile/"+mobi+"/gluser/"+glid+"/source/ClickLogIn/subsource//modid/"+glmodid+"/v//receiverName/"+name+"/token/imobile@15061981/",
				type: 'POST',
				dataType: "jsonp",
				jsonpCallback:'app_sms_status'}); 
		}
	else{
		
	$.ajax(
			{
			url: "http://mapi.indiamart.com/wservce/apps/sendmsg/mobile/"+mobi+"/gluser/0/source/click/subsource//modid/"+glmodid+"/v//receiverName//token/imobile@15061981/",
			type: 'POST',
			dataType: "jsonp",
			jsonpCallback:'app_sms_status'}); 
			
			$.ajax({
				url: 'http://mapi.indiamart.com/wservce/users/login/',	
				data: {'user_name':mobi,
				'identified':1,
				'modid':'IMHOME',
				'token':'imobile@15061981',
				'format':'JSON'},
				type: 'GET',
				dataType: "jsonp",
				success: function(jsonResult)
				{
					
					 if(jsonResult != undefined && jsonResult["code"] == '200'){
					     var resultSet=jsonResult.DataCookie; 
						 
					    if((resultSet != undefined) && (resultSet !='')){
							imesh_obj.set(resultSet);
						}
					   
				   }
				   login_callback();
				   
				}
				}); 
			}
	}
	
$(window).load(function(){
 setMobilevalue();
});
var a=0;
$('#notification').bind("DOMSubtreeModified",function(){if(a!=1){a=1;
	$('#mlink').children().children().click(function(){gaTrack('Notify')});}
});

var b=0;$('.rgt_mst').bind("DOMSubtreeModified",function(){if(b!=1){b=1;$(".rgt_mst").css("display","block");}});
$(document).ready(function(){
	hd_tollFree();def_search();PluginLoadEvent(holder_setter);getLoginStringv1(lshead);
	
});

function setMobilevalue(){
	document.getElementById('txtmobileno').onblur = function (event) { var blurEl = this; setTimeout(function() {blurEl.focus()},10) };
var pref_mob="";pref_mob=getparamVal(decodeURIComponent(cookie),'mb1');
document.app_rgt.txtmobileno.value=pref_mob;
}

//custom js convert html to js
	
//$('<link rel="stylesheet" href="http://dev.indiamart.com/gl-include/gl-imheader-new.css" type="text/css"/>').appendTo('head');

$('<style>.hd_logo,.hd_mob,.hd_mob1,.hd_mob2,.hd_mob3,.hd_lgnSct,.hd_tollFree,.select-wrapper,.hd_app_icn,#not_icn,#hdr_opt,.hd_srBtn,.dwnapp,.hd_ic1,.hd_ic2,.hd_ic3,.hd_ic4,.hov_eff:hover #not_icn,#not_icn{background-image:url(http://utils.imimg.com/globalhf/hrd-sp-v7.png);background-repeat:no-repeat}.cpo,.hd_app_icn1{cursor:pointer}.flL,.hd_mob,.hd_mob1,.hd_mob2,.hd_mob3,.hd_logo,.hdlfr li,#hd_nav ul li,#hd_nav ul li a,.hd_srch,.pstBuy,.srchB,.hd_tollFree,.tllFr,.imByr,.imSlp,.ch_flt,.pstBuy a{float:left}.ch_clb{clear:both}.ch_fr{float:right}#hdn,.hd_logo,.srchB,#hd_nav ul,#hd_nav ul ul,.hd_lgnSct,#header,.imByr,.imSlp,.dwnapp_sc,.hd_top_strp,.nwHdr,.hd_app_icn1,.rgt_mst,.rgt_mst1,.nwHdr{transition:all .4s ease-out 0}.hd_top_strp{height:27px}.dwnapp{background-position:-3px -59px;padding-left:22px!important}.rgt_mst,.rgt_mst1{margin-top:-58px;float:right;text-align:center}.bShd{box-shadow:0 0 10px rgba(0,0,0,.7);height:55px!important}.hidden{margin-top:-33px}#header{font-size:14px;color:#fff!important;position:fixed;top:0;min-width:100%;z-index:3;background:#2e3192;height:78px;font-family:arial}#header .nwHdr{width:1001px;margin:0 auto;display:block}#header ul,li,p,form{padding:0;margin:0}#header a{text-decoration:none;outline:none;-webkit-backface-visibility:hidden}.hdlft{width:225px}.hd_mob{width:21px;height:25px;background-position:-146px 0;margin:-4px 0 0}#header #header ul,li,p,form{padding:0;margin:0}#header a{text-decoration:none;outline:none;-webkit-backface-visibility:hidden}.hd_mob{width:21px;height:25px;background-position:-146px 0;margin:-4px 0 0}.hd_mob1{width:21px;height:25px;background-position:-171px 0;margin:-4px 0 0}.hd_mob2{width:21px;height:25px;background-position:-149px -23px;margin:-4px 0 0}.hd_mob3{width:23px;height:23px;background-position:-169px -23px;margin:-4px 0 0}.hdlfr{width:1000px;padding:0;font-size:13px;position:relative;margin:0 auto}.hd_logo{width:206px;height:48px;background-position:0 2px;margin:0 5px 0 0;text-indent:-99999px;display:inline-block}#hdr_opt{width:25px;height:19px;background-position:0 -48px;border-ristyleght:0!important}#hd_tollFree,#hd_tollFree1{letter-spacing:1px;font-size:13px;color:#fff}.aa{float:right;color:#fff}#cssmenu > ul li#responsive-tab{display:none}#cssmenu > ul li li{margin-left:0}#cssmenu > ul li{display:inline-block;*display:inline;zoom:1;line-height:22px;margin-left:10px}#cssmenu > ul li li.last{border-bottom:0!important}#cssmenu > ul li.right{float:right}#cssmenu > ul li.has-sub{position:relative}#cssmenu > ul li.has-sub:hover ul{display:block}#cssmenu > ul li.has-sub ul{display:none;width:210px;position:absolute;margin:0;padding:0;list-style-type:none;border-top:0 none;top:22px;right:0;z-index:2;box-shadow:0 2px 3px rgba(0,0,0,0.2);border-bottom:#2e3192 solid 5px}#cssmenu > ul li.has-sub ul li{display:block;clear:both;float:none;border-bottom:1px solid #ededed;background:#fff}#cssmenu > ul li.has-sub ul li a{padding-left:15px}#cssmenu > ul li li a,#selld ul li a{display:block;float:none}#cssmenu > ul li li a.active,#cssmenu > ul li li a:hover{background:#2e3192;color:#fff}.hd_hdr{padding-left:5px!important;color:#2c2f8c!important;background-color:#efefef!important;cursor:auto;font-size:13px}.signout a,.wfcp li a,.selldw li a{padding-left:8px!important}#cssmenu li a{color:#fff}#cssmenu li li a{color:#333}.selldw{width:190px!important}.hov_eff{padding:0 5px}.hov_eff:hover{background:#fff}.hov_eff span{color:#fff!important}.hov_eff:hover span{color:#2c2f8c!important}.hgtb{border-right:1px solid #666!important;margin-top:3px!important;line-height:22px!important;padding-right:10px}.hgtb span:hover,.hgtb a:hover,#joinf a:hover,#lshead span a:hover{text-decoration:underline!important}#selld a span:hover,#lshead span:hover,#sntid li a:hover,.selldw li a:hover,#lshead li a:hover{text-decoration:none!important}#selld li,#lshead li{line-height:33px!important}li.hov_eff.last{border-right:0!important}.wd{width:1001px;margin:0 auto}.lgn{display:none}.lgn1{display:block}.pstBuy{margin:0 0 0 20px;cursor:pointer}.pstBuy a{display:block;width:160px;height:35px;text-align:center;color:#000;line-height:35px;font-size:15px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fec900),color-stop(1,#fdb300));background-image:-o-linear-gradient(bottom,#fec900 0%,#fdb300 100%);background-image:-moz-linear-gradient(bottom,#fec900 0%,#fdb300 100%);background-image:-webkit-linear-gradient(bottom,#fec900 0%,#fdb300 100%);background-image:-ms-linear-gradient(bottom,#fec900 0%,#fdb300 100%);background-image:linear-gradient(to bottom,#fec900 0%,#fdb300 100%);border-radius:3px;background-color:#fec900}.pstBuy a:hover{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fdb300),color-stop(1,#fdb300));background-image:-o-linear-gradient(bottom,#fdb300 0%,#fdb300 100%);background-image:-moz-linear-gradient(bottom,#fdb300 0%,#fdb300 100%);background-image:-webkit-linear-gradient(bottom,#fdb300 0%,#fdb300 100%);background-image:-ms-linear-gradient(bottom,#fdb300 0%,#fdb300 100%);background-image:linear-gradient(to bottom,#fdb300 0%,#fdb300 100%);background-color:#fdb300}.hd_srBtn{width:105px;height:35px;cursor:pointer;border:0;color:#fff;border-top-right-radius:3px;border-bottom-right-radius:3px;font-size:15px;background-color:#4cb748;background-position:-217px -55px;padding-left:25px}.hd_srBtn:hover{background-color:#45a241}.srchB{display:inline-block;padding-top:8px}.hd_srch{width:592px;margin:0 0 0 4px;background:#fff;height:35px;border-radius:3px}.hd_srch:hover{box-shadow:0 0 5px rgba(1,89,186,0.75)}.hd_srch input{outline:none}.hd_txt{border:none;width:383px;font-size:15px;padding:9px 5px 6px 2px;float:left}.hd_srch form{height:0;margin:0}.hdWth{width:400px!important}.hdWth input{width:320px!important}.ui-placeholder-input{color:#8d8d8d}.ul{width:250px}.fxmn{margin-top:96px  ;padding-top:0}.pd5{padding:5px}#lshead ul.snt{margin-top:-10px}.ch_mt10{margin-top:13px}.nme{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px;ms-text-overflow:ellipsis}.lgnSct1 .hdn{margin-top:0!important}.arwd{padding-left:2px}.sugdd1{position:fixed!important}.im-gl-header{z-index:3!important}.sugdd{position:fixed!important}.select-wrapper{background-position:-250px -2px;color:#333;cursor:pointer;display:inline-block;float:left;height:35px;position:relative;width:97px;font-size:14px}.select-wrapper select{cursor:pointer;margin:0;opacity:0;outline:medium none;padding:4px;position:absolute;z-index:2;height:35px;width:97px}.cst-select{left:0;position:absolute}.select-wrapper .holder{cursor:pointer;display:block;padding:10px 0 0 7px;position:relative;z-index:1;font-size:14px}::-moz-placeholder{color:#acacac;opacity:1}.hd_mob,.hd_mob1{font-size:0}#counter{background:#c11c23;color:#fff;font-size:9px;padding:2px;border-radius:3px}.chmt{margin-top:5px}.hd_cp{cursor:pointer}.hd_num{color:#017ac9;display:block;margin:.3em 0;font-size:45px}.hd_dwntxt{background:#017ac9;color:#fff;padding:14px;font-size:30px;margin-bottom:1em;border-top-left-radius:6px;border-top-right-radius:6px}.black_overlay1{position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;background:#000;z-index:1001;-moz-opacity:.7;opacity:.7;filter:alpha(opacity=70);overflow:hidden}.hd_app_icn1 img{height:64px\9}.app-inner-content{z-index:1002;background:#fff;margin-left:-17em;padding:0 0 1.5em;width:32em;position:fixed;left:50%;top:25%;box-shadow:2px 2px 15px #000;text-align:center;font-size:23px;border-radius:8px;color:#000}.text_mapp{line-height:52px;height:52px;border:none;outline:none;width:283px;border-right:none;font-size:21px;font-weight:400}.bdr_2px{border:2px #017ac9 solid;margin:0 auto 1em;width:469px;height:55px}.snd_link{padding:0 26px;background:#017ac9;border:none;border-bottom:2px solid #017ac9!important;color:#fff;font-weight:400;font-size:25px;cursor:pointer;line-height:53px;text-shadow:1px 1px 2px rgba(0,0,0,0.3);float:right}.closetext{position:absolute;right:0;background:#000;cursor:pointer;color:#fff;font-size:12px;padding:6px;border-top-right-radius:6px;border-bottom-left-radius:6px}.hd_db{display:block}@media screen and (min-width:641px) and (max-width:980px){.app-inner-content{width:32em;font-size:23px}}.hd_app_icn1{margin-top:10px;color:#fff;font-size:12px;background-size:50px;background-repeat:no-repeat;background-position:68px -4px;text-align:left;min-height:39px}.hd_app_icn1:hover{color:#fff}.hd_app_icn1 span{text-align:center;padding-top:5px;float:left}.wrap-pop{display:inline-block}.wrap-pop li{list-style:none;display:inline-block;position:relative;width:111px}.wrap-pop li a{display:block;padding-bottom:17px}.hd_head_pop{background-color:#2e3192;padding:15px 20px;position:relative}.hd_h4{color:#000;font-size:23px;margin:30px 0 0 11px;text-align:center;padding-bottom:10px}.hd_head_pop h3{color:#fff;text-align:center;font-weight:100;margin:0}@media \0screen{.hd_body_pop{border:1px solid #ccc}}.hd_body_pop{text-align:center;padding:56px;background-position:center;background-size:100% 100%;background-repeat:no-repeat;height:320px;margin:-5px 0 10px}.frm-cntrl{padding:10px 15px;width:83%;margin:0 auto;border:solid 1px #2e3192;font-size:16px}.hd_body_pop p{font-size:16px;color:#999;font-weight:400}.head{background-color:#2e3192}.hd_sub_menu{box-shadow:0 0 20px 0 gray;preserve:3d;width:300px;position:absolute;opacity:0;visibility:hidden;margin:auto;right:10px;transform:rotateX(-90deg);transform-origin:top center;transition:all .5s ease-in-out;background-color:#fff}.wrap-pop li:hover .hd_sub_menu{visibility:visible;opacity:1;transform:rotateX(0deg)}.arrow-up{width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #2e3192;position:absolute;top:-10px;right:20px}.appicons{margin:15px 0 0!important;padding:0;text-align:center;width:100%}.appicons li{list-style:none;display:inline-block;margin-bottom:10px}.appicons li a:hover img{opacity:.5}.hd_ic1,.hd_ic2,.hd_ic3,.hd_ic4{width:91px;height:34px;padding-bottom:0!important}.appicons li{width:92px}.hd_ic1{background-position:0 -102px}.hd_ic2{background-position:-104px -102px}.hd_ic3{background-position:0 -145px}.hd_ic4{background-position:-104px -145px}.arrow-up1{border-bottom:7px solid #999;border-left:7px solid transparent;border-right:7px solid transparent;height:0;left:10px;position:absolute;top:-7px;width:0}.err{background-color:#efefef;border:1px solid #999;padding:8px;position:absolute;border-radius:7px;border:solid 1px #999;font-size:14px;text-align:left;color:#000;margin-top:5px;display:none;font-size:14px}#not_icn{padding:1px}#notification ul li a{padding:5px!important;text-decoration:none!important}#notification{padding-left:2px;height:22px}.hov_eff:hover #counter{color:#fff!important;text-decoration:none!important}#mlink::-webkit-scrollbar{width:12px;background:#fff}#mlink::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px}#mlink::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}#not_icn{width:16px;height:16px;background-position:-232px -100px}.hov_eff:hover #not_icn{background-position:-259px -100px}#mlink{font-size:12px;margin:0 0 0 -214px !important;max-height:400px;min-height:0;overflow-x:hidden;overflow-y:auto;width:255px!important;top:33px!important}#mlink li#nolead_li{color:#000;padding:0 5px!important}#notification ul{padding:0!important;border-top-left-radius:0!important;border-top-right-radius:0!important;margin-top:-11px!important}#notification ul li{border-bottom:1px solid #E3E3E3;padding:0!important}#counter{background:none repeat scroll 0 0 #C11C23;border-radius:4px!important;color:#FFF;float:left!important;font-size:9px;margin:1px 0 0 -10px !important;padding:2px 4px!important;line-height:8px!important;box-shadow:0 0 0 0}#boxes #dialog{width:800px;height:400px}#mask1{background:#000;position:fixed;opacity:.7;filter:alpha(opacity=50);-ms-filter:alpha(Opacity=50);top:0;bottom:0;left:0;right:0;z-index:1000}#boxes .window{position:fixed;left:0;top:0;display:none;z-index:2000;box-shadow:0 4px 16px #000}.closeb{background:#000 none repeat scroll 0 0;color:#fff;cursor:pointer;font-size:12px;padding:4px;position:absolute;right:0;top:0}#iph61{position:absolute;top:190px;right:5px}.frm-cntr2{padding:10px 15px;margin:0 auto;border:solid 1px #999;font-size:16px;width:200px}.btn-pop{padding:10px 14px;background-color:#4cb748;color:#fff;border:none;cursor:pointer;font-size:17px;font-weight:700;margin-left:12px}.btn-pop:hover{background-color:#3a9c36}#err3{padding:8px;position:absolute;border-radius:7px;border:solid 1px #434144;font-size:14px;text-align:left;color:#000;margin-top:5px;display:none;font-size:14px;background:none}.arrow-up1{width:0;height:0;position:absolute;left:10px;top:-7px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #434144}#msg_cont1{position:absolute;top:240px;right:36px;width:331px;color:#434144;font-size:13px}.pstBuy a:hover{color:#000;}</style>').appendTo('head');
	
var html_static='<div id="header" ><div class="nwHdr">'+'<div class="hd_top_strp">'+
	'<div class="hdlfr" id="hd_nav">'+
	'<div class="help right" id="chkout-help" style="display:none"> Need help?  <span class="style1">0 99 10 294 838</span> </div>'+
	'<div id="cssmenu" class="ch_fr">'+
	'<ul>'+
	'<li class="hd-dw-apps cpo dwnapp hgtb" id="dwnappp" style="display:none;"><span>Download App</span></li>'+
	'<li id="appicns" class="hgtb dwnapp" style="display:none;"><a href="http://www.indiamart.com/mobile" target="_blank">Download App</a></li>'+
	'<li class="hgtb"><a href="http://help.indiamart.com/" onclick="gaTrack(\'Help\');" id="help-header-link">Help</a></li>'+
	'<li id="hd_tollFree" class="hgtb">Call Us: 0-96-9696-9696</li>'+
	'<li class="has-sub hov_eff hgtb" id="slMtp"></li>'+
	'<li id="notification" style="display:none" class="has-sub hov_eff hgtb" onmouseover="sell_sear_cnfl();"'+ 'onclick="gaTrack(\'Notification icon\');"><span class="flL" id="not_icn" ></span><span id="counter"'+' style="display:none"></span><ul id ="mlink"></ul>'+
	'</li>'+
	'<li class="has-sub hgtb" id="lshead"></li>'+
	'<li class="has-sub" id="joinf" style="margin-top:3px"></li>'+
	'</ul>'+
	'</div>'+
	'</div>'+
'</div>'+'<div class="hdLk">'+
'<div class="hdlft"><a href="http://www.indiamart.com/" onclick="gaTrack(\'IndiaMART Logo\');"'+'class="hd_logo">IndiaMART</a></div>'+'<div class="srchB ch_fr"><div class="hd_srch" id="hdSrh">'+
'<span class="select-wrapper"><select id="select-search" class="cst-select" name="select-search">'+
'<option value="Products">Products</option>'+
'<option value="Buy Leads">Buy Leads</option>'+'<option value="Tenders">Tenders</option></select><span id="hold" class="holder"></span></span>'+'<form name="searform" method="get" onsubmit="return validator(document.searform);" id="hdr_frm" action="http://dir.indiamart.com/search.mp?ss=">'+'<input type="submit" id="btnSearch" class="hd_srBtn ch_fr" value="Search">'+'<input placeholder="Enter product / service to search" id="search_string" name="ss" class="hd_txt ch_fr" >'+
'</form>'+
'</div><div class="pstBuy ch_flt lgn1" id="pstBuy"><a href="http://my.indiamart.com/blgen/postbl?modid=IMHOME"'+' onclick="gaTrack(\'Get Quotes Now\');" class="ih-pbr ch_post_buy">Get Quotes Now</a></div></div>'+
 '</div>'+'</div>'+
'<div class="rgt_mst" style="display:none"><ul class="wrap-pop"><li>'+
'<a class="hd_app_icn1"><span style=" margin-left: -17px;">Win<br>Jabong Coupon</span></a>'+
'<div class="hd_sub_menu">'+
        	'<div class="hd_head_pop">'+
            	'<h3>Download IndiaMART App & <span style="color:#fec900;font-weight:bold">Win Jabong Coupon*</span></h3>'+
                '<div class="arrow-up"></div>'+
            '</div>'+
            '<br />'+'<div class="hd_body_pop">'+
		'<h4 class="hd_h4">Enter Mobile Number</h4>'+
		'<form action="#" name="app_rgt" onsubmit="if(validateForm(document.getElementById(\'txtmobileno\'),\'err1\')) {Download_indiamart_app(document.app_rgt.txtmobileno.value);} return false;">'+
			'<input type="text" id="txtmobileno" name="txtmobileno" onkeyup="document.getElementById(\'err1\').style.display=\'none\';" placeholder="e.g. 98XXXXXXXX" class="frm-cntrl" value="" autocomplete="off" />'+
			'<br/><div id="err1" class="err"></div><br/>'+
			'<input type="submit" class="btn-pop" onclick="gaTrack(\'App_Right\');" id="rgt_snd_lnk" value="Send Link">'+
'</form>'+'<ul class="appicons">'+
		'<li class="ch_flt"><a href="https://play.google.com/store/apps/details?id=com.indiamart.m&amp;utm_source=Desktop&amp;utm_medium=Central_Header&amp;utm_campaign=Header_icon" onclick="gaTrack(\'Android\');" class="hd_ic1" target="_blank"></a></li>'+
		'<li class="ch_fr"><a href="https://appworld.blackberry.com/webstore/content/59948771/?countrycode=IN%26lang=en" onclick="gaTrack(\'BlackBerry\');" class="hd_ic2" target="_blank"></a></li>'+
		'<li class="ch_flt"><a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=668561641&amp;mt=8" onclick="gaTrack(\'Apple\');" class="hd_ic3" target="_blank"></a></li>'+
		'<li class="ch_fr"><a href="https://www.windowsphone.com/en-in/store/app/indiamart/72a8f9b4-0c7a-4b49-b383-a48b1bf6ed02" onclick="gaTrack(\'Windows\');" class="hd_ic4" target="_blank"></a></li>'+
	'</ul>'+'<br/>'+
'<span class="ch_fr"><a style="font-size:11px;color:#333" href="http://www.indiamart.com/mobile/appcontest/" target="_blank">*T & C</a></span>'+
	'</div>'+
'</div>'+
'</li></ul>'+
'</div>'+
 '<div class="ch_clb"></div></div>'+
 '<div id="sign_in"></div>'+
'<div id="bl_overlay_layer_v2" style="display:none;height:100%;left:0px;position:fixed;top:0px;width:100%;z-index:1004"></div>'+
'<div id="dw_back-layer" class="black_overlay1" style="display: none;"></div>'+
'<div id="dw_app-content" class="app-inner-content" style="display: none;"><p class="closetext cpo app_cl">X</p>'+
'<div class="hdlh22" id="hd_container1" style="display:none"><span class="hd_dwntxt hd_db">To get Free App download link</span>'+
'<div class="bdr_2px hd_bdr4 hd_d_ilb">'+
'<form onsubmit="if(validateForm(document.getElementById(\'app_mobile\'),\'err2\')){ Download_indiamart_app();} return false;" name="sms_pop" id="sms_pop" action="#"><input type="text" Placeholder="Enter Mobile No." onkeyup="document.getElementById(\'err2\').style.display=\'none\';"  autocomplete="off" class="text_mapp" name="mobile_num" id="app_mobile" autofocus><input type="submit" value="Send Link" class="snd_link" id="snd_link"> <br /><div id="err2" class="err"></div><br /></form>'+
'</div><p class="hd_mt18 hd_clr4 hd_fn">Now 15 Lac Suppliers are JUST 1 click Away!</p></div>'+
'<div class="hd_f22 hd_mt10 hd_mb10 txtcolor1 hd_lh30" id="hd_container2" style="display:none"><span class="hd_dwntxt hd_db">Oops! Your number is in DND.</span>You can get link to App by giving a Missed Call on<br /><span class="hd_num">1800-200-1848</span></div>'+
'<div class="" id="hd_container3" style="display:none"><span class="hd_dwntxt hd_db">Thank you!</span>'+
'Message has been sent to you successfully.</div>'+
'<div class="" id="hd_container4" style="display:none"><span class="hd_dwntxt hd_db">A message has been already sent.</span>Give a Missed Call on<br />'+
'<span class="hd_num">1800-200-1848</span>to download IndiaMART FREE Mobile App</div>'+
'<div class="" id="hd_container5" style="display:none"><span class="hd_dwntxt hd_db">Didn\'t receive a message?</span>'+
 'You can give a Missed Call on<br><span class="hd_num">1800-200-1848</span>to get App link via SMS</div>'+
'<div class="" id="hd_container6" style="display:none"><span class="hd_dwntxt hd_db">Thank you!</span>You will receive an SMS with download link shortly.</div>'+
'<div id="callus_pop" style="display:none"><span class="hd_dwntxt hd_db">Need Assistance?</span>Call Us at: 0-96-9696-9696</div>'+
'</div>'+'<div id="boxes"><div style="top:101px;left: 551.5px;display:none" id="dialog" class="window"><p class="closeb">X</p>'+
'<form action="#" name="app_rgt1"  id="iph61" onsubmit="$(\'#msg_cont1\').empty();$(\'#msg_cont1\').css(\'display\',\'none\');if(validateForm(document.getElementById(\'txtmobileno1\'),\'err3\')) {promo_sms_status(document.app_rgt1.txtmobileno1.value);} return false;">'+
			'<input type="text" id="txtmobileno1" name="txtmobileno1" onkeyup="if(event.keyCode!=13){document.getElementById(\'err3\').style.display=\'none\';}$(\'#msg_cont\').html(\'\');" placeholder="e.g. 98XXXXXXXX" class="frm-cntr2" value="" autocomplete="off"> <input type="submit" class="btn-pop" id="rgt_snd_lnk1" value="Send Link" onclick="gaTrack(\'banner\');"><br><div id="err3" class="err"></div></form>'+
'<div id="msg_cont1" style="display:none"></div></div> '+
'<div id="mask1" style="display:none"></div></div>';



function headerStContent(){
	
$('body').prepend(html_static);
} 


headerStContent();


$(window).on('load',function(){
	
	 if(window.location.href.indexOf("seller") > -1) {
		 
	 $('#help-header-link').attr('href','http://sellerhelp.indiamart.com/');
     
    }
	else{
		
		$('#help-header-link').attr('href','http://help.indiamart.com/');
	}

});




