$(document).ready(function(){
	ims.grid_view = 1;
        $('#gridview').click(function(){
                if(ims.grid_view == 1) {
                        if($('#sticky_bl_close').length == 0)
                        $('#eto_ofr_ftr_frm').prepend('<div id="sticky_bl_close" class="cls_div" style="margin: -5px -5px 0px;z-index: 5;position: relative;">X</div>');
                        $('#sticky_bl_close').show();
			$('#eto_ofr_ftr_frm').hide();
                }
                else
                {
                        $('#sticky_bl_close').hide();
		        $('#eto_ofr_ftr_frm').show();
                }
                sticky_bl_visibility_check();
        });

	if(ims.grid_view == 1) {
	$('#eto_ofr_ftr_frm').show();
	} else
	{
	$('#eto_ofr_ftr_frm').show();
	}
});
// purpose of this function is to show bl form on after 1150 px from scroll top
$(window).scroll(function(){
                if((ims.grid_view == 1))
                {
		    $('#eto_ofr_ftr_frm').show();
                }
                else
                {
                     $('#eto_ofr_ftr_frm').show();   
                }
                var absolute_height = $(document).height() - $(window).height() - 520;
                if ($(window).scrollTop() >= absolute_height && (ims.grid_view == 1))
                {
                        $('#eto_ofr_ftr_frm').hide();
                }
                });

function sticky_bl_visibility_check()
{
	ims.stickyBLTime = 30;
	ims.stickyBLTimeShow = 0;
	var feedStorageTime = getIMFormObject('imform','stickybl');
	if(typeof(feedStorageTime) != "undefined"){
		var currentTime = Math.floor((new Date).getTime()/1000);
		var timedifference = currentTime - feedStorageTime;
		if(timedifference > 1800)
		{
			ims.stickyBLTimeShow = 1;
		}
	}
	else
	{
		ims.stickyBLTimeShow = 1;
	}
	if(ims.stickyBLTimeShow == 1 || ims.grid_view == 0)
	{
		$("#buy_lead_gen_form_rhs").show();
	}
	else
	{
		$("#buy_lead_gen_form_rhs").hide();
	}
}
if($('#eto_ofr_ftr_frm'))
{
	if(ims.grid_view == 1) {
		$('#eto_ofr_ftr_frm').prepend('<div id="sticky_bl_close" class="cls_div" style="margin: -5px -5px 0px;z-index: 5;position: relative;">X</div>');
	}
	sticky_bl_visibility_check();
}


function showMore(divId,fetchId,mcatId,mcatName,catId,searchCity,end,rand,ct_name){
	var xmlhttp;
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById(divId).className = "";
			document.getElementById(divId).innerHTML=xmlhttp.responseText;

		}else{
			 document.getElementById(divId).className = "a2 wdt1 fm1 fb fc3 p8";
			 document.getElementById(divId).innerHTML='<span><img src="//dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">Fetching more companies to show...</span><span> <img src="//dir.imimg.com/gifs/page.gif"/></span>';
			 document.getElementById(fetchId).innerHTML= '';
			 document.getElementById(fetchId).className = "";
		}
	}
	var url = "mcatName="+mcatName+"&mcatId="+mcatId+"&catId="+catId+"&searchCity="+searchCity+"&end="+end+"&rand="+rand+"&ctname="+ct_name;
	xmlhttp.open("POST", "../impcatPagination.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(url);
}
// function showMoreProducts(divId,fetchId,mcatId,mcatName,catId,searchCity,end,rand,prod_serv,showkm,debug_mod,biz){
// 	var xmlhttp;
// 	
// 	if (window.XMLHttpRequest)
// 	{// code for IE7+, Firefox, Chrome, Opera, Safari
// 		xmlhttp=new XMLHttpRequest();
// 	}
// 	else
// 	{// code for IE6, IE5
// 		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xmlhttp.onreadystatechange=function()
// 	{
// 		if (xmlhttp.readyState==4 && xmlhttp.status==200)
// 		{
// 			document.getElementById(divId).className = "";
// 			if( $('.extra').length > 0)
// 			$('.extra').remove();
// 			document.getElementById(divId).innerHTML=xmlhttp.responseText;
// 
// 		}else{
// 			 var text_for_fetch = (prod_serv == 'S') ? 'Fetching more service providers...' : ((prod_serv == 'P') ? 'Fetching more suppliers...' : 'Fetching more products to show...');
// 			 document.getElementById(divId).className = "a2 wdt1 fm1 fb fc3 p8";
// 			$("#"+divId).before('<div class="m2 extra"></div>');
// 			 document.getElementById(divId).innerHTML='<span><img src="http://dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">'+text_for_fetch+'</span><span> <img src="http://dir.imimg.com/gifs/page.gif"/></span>';
// 			 document.getElementById(fetchId).innerHTML= '';
// 			 document.getElementById(fetchId).className = "";
// 		}
// 	}
// 	var url = "mcatName="+mcatName+"&mcatId="+mcatId+"&catId="+catId+"&searchCity="+searchCity+"&end="+end+"&rand="+rand+"&prod_serv="+prod_serv+"&showkm="+showkm+"&debug_mod="+debug_mod+"&biz="+biz;
// 
// 	xmlhttp.open("POST", "../impcatProductPagination.php", true);
// 	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	xmlhttp.send(url);
// 
// }
var myWidth = 0, myHeight = 0;
function cls()
{try{document.getElementById('sourcediv').className="soff";}catch(err){}}
function info(divId){
	document.getElementById(divId).style.display ='block';}
function info1(divId){
	document.getElementById(divId).style.display ='none';
}
/*
Input: File name of the Mcat page
Outout: Redirection to impcat city page.
*/
function cityRedirectToImpcat(Form,urlname,biz_val){

    var string=Form.city_ss.value;
    var biz_url = '';
    if(biz_val > 0)
    {
	biz_url = '?biz='+biz_val;
    }
    if(string != 'Enter city...')
    {
        string = string.replace(/[^a-zA-Z0-9\.\- ]/g, '');

        string = string.replace(/(^\s+)/,'') ;
        string = string.replace(/(\s+$)/,'') ;
        string = string.replace(/(\.)/g,'-') ;
        string = string.replace(/\s+/g,'-') ;
        string = string.replace(/--/g,'-') ;
        string = string.replace(/-+$/,'') ;
        string = string.toLowerCase() ;
        if (urlname){
            if (string.length < 1){
                alert("Please enter city of your choice...");
            }else{
                /*removing space/newline and coverting to lower case .*/
                window.location = (urlname.match(/ss=/g)) ? urlname+'&cq='+string : 'http://'+location.hostname+'/'+string+'/'+urlname+'.html'+biz_url;
		}
        }else{
            window.location = 'http://'+location.hostname+'/impcat/';
	    }
        return false;
    }
}
/* to resolve onload*/ 
$('.res').load(function() {
		resize_hw(this, 100, 100);
		});

// Google Custom Code Start
var google_adnum = 0; /* only insert this line for your first ad unit */
function google_ad_request_done(google_ads)
{
	if(position=="impcat_bottom")
	{
		//bottom ads channel id
		google_ad_channel = '1657834257';

		var s = '';
		var i;
		if (google_ads.length == 0) 
		{
		    return;
		}
		if (google_ads[0].type == "html")
		{
		    s += google_ads[0].snippet;
		}
		else
		{
		    if (google_ads.length == 1)
		    {

			s += '<SPAN CLASS="pl2 a1 w3 w1"><a class="cb td" href=\"' + google_info.feedback_url + '\" TARGET="_blank">Ads by Google</a></SPAN><DIV CLASS="m2"></DIV><P CLASS="a1 pl2" STYLE="width:220px"><a target="_blank" style="text-decoration:underline" href="' + google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[0].visible_url + '\';return true" CLASS="f1 bo">' + google_ads[0].line1 + '<br></a><a target="_blank" style="text-decoration:none" href="' + google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[0].visible_url + '\';return true" CLASS="td">' + google_ads[0].visible_url + '</a><br/>' + google_ads[0].line2 + '<br>' + google_ads[0].line3 + '</p>';
			
		    }
		    else if(google_ads.length > 1)
		    {
			per = 100/google_ads.length;
			per= parseInt(per-1);
			s +='<SPAN CLASS="pl2 a1 w3 w1"><a class="cb td" href=\"' + google_info.feedback_url + '\" TARGET="_blank">Ads by Google</a></SPAN><DIV CLASS="m2"></DIV>';
			for(i = 0; i < google_ads.length; ++i)
			{
			    s += '<P CLASS="a1 pl2" STYLE="width:'+per+'%;word-wrap:break-word;"><a target="_blank" style="text-decoration:underline" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\';return true" CLASS="f1 bo">' + google_ads[i].line1 + '<br></a><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\';return true" CLASS="td">' + google_ads[i].visible_url + '</a><br/>' + google_ads[i].line2 + '<br>' + google_ads[i].line3 + '</p>';
			}
		    }
		}
		if (google_ads[0].bidtype == "CPC") 
		{
		    google_adnum = google_adnum + google_ads.length;
	    
		}
		if(document.getElementById('GoogleBottomAd'))
		{
			$('#goohorz').removeClass("addByGogl_im bg-white bx-shdw off").addClass("addByGogl_im bg-white bx-shdw on");
			document.getElementById('GoogleBottomAd').innerHTML = '<DIV><DIV class="g3 g4 g9 pd1">'+s+'</DIV></div><P CLASS="m2"></P>';
			if(imd.unq_list_count > 5)
			{
			    loadRightAd();
			}
		}
		else
		{
			document.write(s);
		}
		return;
	}
	if (position == "impcat_middle")
	{
		//right ads channel id
		google_ad_channel = '4362426460';
		var s = '';
		var i;
		if (google_ads.length == 0) 
		{
		    return;
		}
		if (google_ads[0].type == "html")
		{
		    s += google_ads[0].snippet;
		}
		else
		{
		    if (google_ads.length == 1)
		    {
			s += '<SPAN CLASS="pl2 a1 w3 w1"><a class="cb td" href=\"' + google_info.feedback_url + '\" TARGET="_blank">Ads by Google</a></SPAN><DIV CLASS="m2"></DIV><P CLASS="a1 pl2" STYLE="width:220px"><a target="_blank" style="text-decoration:underline" href="' + google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[0].visible_url + '\';return true" CLASS="f1 bo">' + google_ads[0].line1 + '<br></a><a target="_blank" style="text-decoration:none" href="' + google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[0].visible_url + '\';return true" CLASS="td">' + google_ads[0].visible_url + '</a><br/>' + google_ads[0].line2 + '<br>' + google_ads[0].line3 + '</p>'; 

		    }
		    else if(google_ads.length > 1)
		    {
			s +='<SPAN CLASS="pl2 a1 w3 w1"><a class="cb td" href=\"' + google_info.feedback_url + '\" TARGET="_blank">Ads by Google</a></SPAN><DIV CLASS="m2"></DIV>';
			
			for(i = 0; i < google_ads.length; ++i)
			{
			    per = 100/google_ads.length;
			    per= parseInt(per-1);
			    s +='<P CLASS="a1 pl2" STYLE="width:'+per+'%;word-wrap:break-word;"><a target="_blank" style="text-decoration:underline" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\';return true" CLASS="f1 bo">' + google_ads[i].line1 + '<br></a><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\';return true" CLASS="td">' + google_ads[i].visible_url + '</a><br/>' + google_ads[i].line2 + '<br>' + google_ads[i].line3 + '</p>'; 
			}
		    }
		}
		if (google_ads[0].bidtype == "CPC") 
		{
		    google_adnum = google_adnum + google_ads.length;
		}
		if(document.getElementById('GoogleMiddleAd'))
		{
			document.getElementById('GoogleMiddleAd').innerHTML = '<div class="bg-white bx-shdw p8" style="padding:10px;margin-bottom: -10px;margin-top: 0px;"><DIV><DIV class="g3 g4 g9 pd1">'+s+'</DIV></div><P CLASS="m2"></P></div>';	      
		}
		else
		{
			document.write(s);
		}
		return;
	}

}
function loadGoogleAdScript(label){
document.write = function(text)
{
	$('#'+label).append(text);
};
$.getScript("//pagead2.googlesyndication.com/pagead/show_ads.js");	
}
// Google Custom Code End

/*City-Detail MCAT Scroll Function */
$(document).ready(function(){
                $(".show-all").click(function(){
                        $(".moreBuisness").slideDown("slow");
                        $(this).hide();
                        $("#Relgn").css("margin-top","0px")
                        });
                });
		$('#sticky_bl_close').click(function(){
		$("#buy_lead_gen_form_rhs").hide();
		setIMFormObject('imform','stickybl');
		return false;
		});
/*City Detail - Replace Big image path with blank src */
function zoomimg(imageNm)
{
	var changepath = document.getElementById('imgzoom'); 
	changepath.src = imageNm;

}

/* City Detail Page - Visit Place Zoom-up Image*/
$(document).ready(function(){
                $(".closeZoomIcon").click(function(){
                        $("#close-zoom-img").fadeOut("fast");
			$("#imgzoom").attr({src: ""});
                        });
                $(".place img").click(function(){
                        $("#close-zoom-img").fadeIn("fast");
                        });
                document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (evt.keyCode == 27) {
                $("#close-zoom-img").fadeOut("fast");
		$("#imgzoom").attr({src: ""});
                }
                };
                });
function show_dfp_ad_md()
        {
                if(typeof(adsbygoogle)!="undefined")
                {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                }
                else
                {
                        setTimeout(function(){show_dfp_ad_md()}, 50);
                }
        }
        head.js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
        head.ready("adsbygoogle.js", function(){
        show_dfp_ad_md();
        });

//$(window).scroll(function(){
//if($(document).height() > 1600) {
//var bl_form_html = $('#buy_lead_gen_form_btlst_V2').html() || $('#buy_lead_gen_form_foot').html();
// if ($(this).scrollTop() > 1200)
// {
//        $('#buy_lead_gen_form_foot').html(bl_form_html);
//        $('#buy_lead_gen_form_btlst_V2').html('');
// }
// else
// {
//        $('#buy_lead_gen_form_btlst_V2').html(bl_form_html);
//        $('#buy_lead_gen_form_foot').html('');
// }
//}
// });

// bl form form implementation
function setIMFormObject(imform,key)
{
        var storageTime = Math.floor((new Date).getTime()/1000);
        var formObject = parseFormJson(localStorage[imform.toLowerCase()] || "{}");
        formObject[key] = storageTime;
        // Put the object into storage
        localStorage.setItem(imform, JSON.stringify(formObject));
}

function getIMFormObject(imform,key)
{
        // Retrieve the object from storage
        return $.parseJSON(localStorage[imform.toLowerCase()]||'{}')[key.toLowerCase()];
}

function parseFormJson(data) {
    return JSON ? JSON.parse(data) : eval("(" + data + ")")
}

function getInterestRecord(item_object)
{
    var item_obj={}; item_obj = item_object;
    if(typeof(item_object) === 'string')
    item_obj = $.parseJSON(item_object);
    var value_v4iilex= readCookie('v4iilex');
    var is_admin_login = getparamVal(value_v4iilex, "admln") || '';
    var imesh_object = new userDataCookie();
    var value_imesh = imesh_object.get();
    var sender_glusr_id = (value_imesh.glid != "undefined") ? (value_imesh.glid) : '';
    if(is_admin_login === 1 || (value_imesh == undefined || value_imesh == -1 || value_imesh=="") || (sender_glusr_id == item_obj['R_glusr_id'])){
        return false;
    }
    var params_request = {
    "interest_current_url":window.location.href,
    "interest_modreftype":item_obj['modreftypflag'],
    "interest_sender_email_id":value_imesh.em,
    "interest_modrefid":item_obj['displayId'],
    "interest_sender_ip":page.country_ip,
    "interest_mail_send":"0",
    "interest_sender_glusr_id":sender_glusr_id,
    "interest_sender_ip_country":page.country,
    "interest_sender_ip_country_iso":page.countryCode,
    "interest_modid":item_obj['modid'],
    "interest_rcv_glusr_id":item_obj['R_glusr_id']};
    params_request.request_type = 'iminterested';
    var url_request = "/recordUserInterest.php";
    $.ajax({
        url: url_request,
        data: params_request,
        type: "POST",
        dataType: "json",
        success: function(response){
//             console.log(response['Interest_id']);
        }
     });
}

