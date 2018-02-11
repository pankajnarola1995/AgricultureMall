function gt(protocol, page, para)
{
	if (para)
	{
		para = "?" + para;
	}
	else
	{
		para = '';
	}
	
	window.location = protocol + "/" + page + para;
}


function gtx(protocol, page, para)
{
	if (para)
	{
		para = "?" + para;
	}
	else
	{
		para = '';
	}
	
	if(page == "stock-footage") window.location = protocol + "/" + page+"/";
	else
	window.location = protocol + "/" + page + ".php" + para;
}

if(window.location.hash)
{
	if(window.location.hash != '#_=_')
	{
		var srce = window.location.hash;
		srce = srce.substr(1);
		page_ref = document.referrer;
		
		var url = "/refer_ajax.php";
		var param = "src="+srce+"&pageref="+page_ref;
		new Ajax.Request(
			url,
			{
				method:'get',
				parameters: param
			}
		);
	}
}

function setViewMode(token)
{
	if(token == 'm')
	{
		var expires = 7 * 24 * 60 * 60 * 1000;
		var today = new Date();
		today.setTime( today.getTime() );
		
		var expiry = new Date(today.getTime() + expires);
		
		cookieText = "viewmode="+escape(token)+";expiry="+expiry+";domain=.123rf.com";
		document.cookie = cookieText;
	}
}

function jsHREF(protocol, page, para, shorten)
{
	if(protocol!='' && protocol!=undefined){
		var isPara = (para!='' && para!=undefined)?((shorten=='')?"?"+para:para):'';
		if(shorten!=undefined){
			if(shorten=='1') var isShort = "";
			else if(shorten=='2') var isShort = ".html";
			else var isShort = ".php";
		}else if(page==undefined || page=='') var isShort = "";
		else var isShort = ".php";
			
		var isPage = (page!='' && page!=undefined)?page:'';
		window.location = protocol + "/" + isPage + isShort + isPara;
	}
} 

function switchPerPage(site_http,url,current,shortlong,topbtm,bypass)
{
	var itmPage = (topbtm==1)?$('selectPerPg').value:$('selectPerPg2').value;
	remember_perpage(itmPage);
	jsHREF(site_http,url,current,shortlong);
}


function show_search_popup()
{
	document.getElementById('search_popup').style.display = "";
}

function show_filetype_popup()
{
	if(document.getElementById('filetype_popup').style.display == "none")
	{
		document.getElementById('filetype_popup').style.display = "block";
	}
	else
	{
		document.getElementById('filetype_popup').style.display = "none";
	}
}

function check(e)
{
	var tabopts = document.getElementById("search_popup");
	var tabopts2 = document.getElementById("filetype_popup");
	var tabopts3 = document.getElementById("prefSrchCont");
	var tabopts4 = document.getElementById("contributorInfo");
	var tabopts5 = document.getElementById("filetype_popup2");
	var tabopts6 = document.getElementById("userMenu");
	var tabopts7 = document.getElementById("dl_sub_sh");
	var tabopts8 = document.getElementById("dl_sub_dd");
	
	var target = (e && e.target) || (event && event.srcElement); 

	if(checkParent(target))
	{
		if(tabopts!=null)
			tabopts.style.display='none';

		if(tabopts2!=null)
			tabopts2.style.display='none';
		
		if(tabopts3!=null)
			tabopts3.style.display='none';

		if(tabopts4!=null)
			tabopts4.style.display='none';
		
		if(tabopts5!=null)
			tabopts5.style.display='none';

		if(tabopts6!=null)
			tabopts6.style.display='none';

		if(tabopts7!=null)
			tabopts7.style.display='none';

		if(tabopts8!=null)
			tabopts8.style.display='none';
	}
	else
	{null;}
	
} 
function checkParent(t)
{ 
	var elementParams = [
	"search_popup",
	"searchtext",
	"search_popup2",
	"searchtext2",
	"typedisplay",
	"dsp_child",
	"dsp_filetype",
	"prefSrchToggler",
	"prefSrchCont",
	"contributorInfo",
	"contributorNameInfo",
	"filetype_popup2",
	"dsp_filetype2",
	"typedisplay2",
	"dsp_user_menu",
	"dl_sub_sh",
	"shareLB",
	"downloadLB"
	];
	while(t.parentNode){
		for(var ep=0; ep < elementParams.length;ep++){
			if(t==document.getElementById(elementParams[ep])){
				return false;
			}
		}
		t=t.parentNode 
	} 
	return true 
} 

function hide_search_popup()
{
	document.getElementById('search_popup').style.display = "none";
}

function hide_filetype_popup()
{
	document.getElementById('filetype_popup').style.display = "none";
}
function exclusiveSelect(which)
{
	var choose = which.value;
	var nonechosen = true;
	
	for(var i = 0;i<filetypes.length; i++)
	{
		var idname = "imgtype"+filetypes[i];
		if(document.getElementById(idname).value != choose) document.getElementById(idname).checked = false;
	}
	
	//START check if no checkboxes checked, if true force select "all"
	
	//start by checking images (photo & vectors)
	for(var i = 0;i<3; i++)
	{
		//var elemname = "label_imgtype_"+i;
		var idname = "imgtype"+i;
		if(document.getElementById(idname).checked == true)
		{
			nonechosen = false;
		}
	}
	
	if(nonechosen == true)
	{
		//so far, if image & vector not chosen, last check to see if footage is selected
		if(document.getElementById('imgtype6').checked == true) nonechosen = false;
		else if(document.getElementById('imgtype7').checked == true) nonechosen = false;
		else
		{
			document.getElementById('imgtype0').checked = true;
			document.getElementById('label_imgtype_0').style.fontWeight = "bold";
		}
	}
	//END check if no checkboxes checked, if true force select "all"
	
	for(var i = 0;i<filetypes.length; i++)
	{
		var elemname = "label_imgtype_"+filetypes[i];
		var idname = "imgtype"+filetypes[i];
		
		//alert(document.getElementById(idname).checked);
		if(document.getElementById(idname).checked == true)
		{	
			document.getElementById(elemname).style.fontWeight = "bold";
			document.getElementById(elemname).style.backgroundColor = "#e5e5e5";
			document.getElementById(elemname).style.padding = "5px";
			document.getElementById(elemname).style.cursor = "pointer";
		}
		else
		{
			document.getElementById(elemname).style.fontWeight = "";
			document.getElementById(elemname).style.backgroundColor = "";
			document.getElementById(elemname).style.cursor = "pointer";
		}
			
	}
	hide_filetype_popup();
	fillValue(choose);
	
}

//updated on 2011/03/09 to fill in imgtype box value
function fillValue(val)
{
	for(var i=0;i<filetypes.length;i++)
	{
		if(val == filetypes[i])
		{
			document.getElementById('dsp_child').innerHTML = typenames[i];
			break;
		}
		else;
	}
	
	document.getElementById("filetypechkbox").value = val;
	//document.searchform.imgtype.value = val;
	//document.searchform2.imgtype.value = val;
}

//clear textbox
function clearText()
{
	document.getElementById("searchtext").value = "";
}

function popupGoogleBanner(){
	var docref = document.referrer;
	        	
	if(docref!='' && (docref.indexOf('imgres')>-1 || docref.indexOf('imglanding')>-1 || docref.indexOf('image.google')>-1 || docref.indexOf('bing.com')>-1 || docref.indexOf('images.search.yahoo')>-1))
	{
		$('ggBanner').innerHTML = "<a href='/freeimages.php' style='border:none;' target='_blank'><img src='//d3klshmqqidl5x.cloudfront.net/images/freeimages.jpg' style='border:none;'></a>";
	}
}

function runDomainChecker(){
	var currentDomain = document.location.hostname;
	var domains = new Array();
	domains['es.123rf.com'] 	= "es";
	domains['de.123rf.com'] 	= "de";
	domains['it.123rf.com'] 	= "it";
	domains['fr.123rf.com'] 	= "fr";
	domains['pl.123rf.com'] 	= "pl";
	domains['ru.123rf.com'] 	= "ru";
	domains['tw.123rf.com'] 	= "tw";
	domains['jp.123rf.com'] 	= "jp";
	domains['gb.123rf.com']		= "gb";
	domains['nl.123rf.com']		= "nl";
	domains['kr.123rf.com'] 	= "kr";
	domains['cz.123rf.com'] 	= "cz";
	domains['www.123rf.co.kr']	= "kr";
	domains['123rf.co.kr']	 	= "kr";
	domains['www.123rf.kr'] 	= "kr";
	domains['123rf.kr'] 		= "kr";
	domains['www.123rf.net']	= "gb";
	domains['cn.123rf.net']		= "gb";
	domains['pt.123rf.com']		= "pt";
	domains['tr.123rf.com']		= "tr";
	domains['br.123rf.com']		= "br";	
	domains['se.123rf.com']		= "se";	
	domains['hu.123rf.com']		= "hu";	
	domains['vn.123rf.com']		= "vn";
	
	if(domains[currentDomain]!=undefined){
		if(domains[currentDomain]!=getCookie('global_lang')){
			var futdate = new Date();
		    var expdate = futdate.getTime();
		    expdate += 3600*24*30;
		    futdate.setTime(expdate);
		    
		    if(currentDomain =='www.123rf.co.kr'){
		    	var cDomain = '.123rf.co.kr';
		    }else if(currentDomain =='www.123rf.kr'){
		    	var cDomain = '.123rf.kr';
		    }else if(domains[currentDomain]=='gb'){
		    	var cDomain = '.123rf.net';
		    }else{
		    	var cDomain = '.123rf.com';
		    }
		    	
		    setCookie('global_lang', domains[currentDomain], futdate, '/', cDomain);
		}
	}else{
			if(getCookie('global_lang')==''){
				var futdate = new Date();
			    var expdate = futdate.getTime();
			    expdate += 3600*24*30;
			    futdate.setTime(expdate);
			    setCookie('global_lang', 'en', futdate, '/', '.123rf.com');
		    }
	}
}

function bhChecker(){
	var currentDomain = document.location.hostname;
	var domains = new Array();
	domains['es.123rf.com'] 	= "es";
	domains['de.123rf.com'] 	= "de";
	domains['it.123rf.com'] 	= "it";
	domains['fr.123rf.com'] 	= "fr";
	domains['pl.123rf.com'] 	= "pl";
	domains['ru.123rf.com'] 	= "ru";
	domains['tw.123rf.com'] 	= "tw";
	domains['jp.123rf.com'] 	= "jp";
	domains['gb.123rf.com']		= "gb";
	domains['nl.123rf.com']		= "nl";
	domains['kr.123rf.com'] 	= "kr";
	domains['cz.123rf.com'] 	= "cz";
	domains['www.123rf.co.kr']	= "kr";
	domains['123rf.co.kr']	 	= "kr";
	domains['www.123rf.kr'] 	= "kr";
	domains['123rf.kr'] 		= "kr";
	domains['www.123rf.net']	= "gb";
	domains['cn.123rf.net']		= "gb";
	domains['pt.123rf.com']		= "pt";
	domains['tr.123rf.com']		= "tr";
	domains['br.123rf.com']		= "br";	
	domains['se.123rf.com']		= "se";	
	domains['hu.123rf.com']		= "hu";	
	domains['vn.123rf.com']		= "vn";	
	
	if(currentDomain =='www.123rf.co.kr'){
    	var cDomain = '.123rf.co.kr';
    }else if(currentDomain =='www.123rf.kr'){
    	var cDomain = '.123rf.kr';
    }else if(domains[currentDomain]=='gb'){
    	var cDomain = '.123rf.net';
    }else{
    	var cDomain = '.123rf.com';
    }
		    
	var bH = getCookie('bh');
	if (bH == null){
		setCookie("bh", "1", "", "/", cDomain);
	}else if (bH == "1"){
		setCookie("bh", "2", "", "/", cDomain);
	}
}

/* begin browse by category */
jQuery( document ).ready(function() {
	var browse_cat_state = 0,
		mpos_t,
		mpos_x = 0,
		mpos_y = 0,
		prev_mpos_y = 0,
		prev_mpos_x = 0;

	function activateBrowseCatLink(id){
		clearTimeout(mpos_t);

		jQuery(".gallery-ul-cat").each(function() {
			jQuery(this).css('display','none');
		});

		jQuery(".arrow-handler").each(function() {
			jQuery(this).removeClass('yellow-arrow-right');
			jQuery(this).css('display','none');
		});

		jQuery(".popup-fallback").each(function() {
			jQuery(this).css('display','none');
		});

		jQuery(".browse-cat-link").each(function() {
			jQuery(this).css('font-weight','normal');
		});
		jQuery("#"+id).css('font-weight','bold');

		unique_id = "#gallery-ul-" + id;
		jQuery(unique_id).css('display','block');

		unique_id2 = "#arrow-ul-" + id;
		jQuery(unique_id2).addClass('yellow-arrow-right');
		jQuery(unique_id2).css('display','block');

		unique_id3 = "#fallback2-ul-" + id;
		jQuery(unique_id3).css('display','block');

		jQuery('.arrow-Nav').css('display','block');
	}

	jQuery('.browse-cat').hoverIntent(function () {
		jQuery('#nav-cover').css('display','block');
		jQuery('#yellow-arrow-up').css('display','block');
		
		jQuery(this).find(".fallback").stop().slideToggle(function(){
			jQuery(this).is(':hidden') ? jQuery('#nav-cover').css('display','none') : 'visible';
			jQuery(this).is(':hidden') ? jQuery('#yellow-arrow-up').css('display','none') : 'visible';

			if(browse_cat_state){
				browse_cat_state = 0;
				jQuery('.arrow-Nav').css('display','none');
			}else{
				browse_cat_state = 1;
			}
		});
	});
	
	jQuery("#browser-link").on("mouseenter", function() {
		clearTimeout(mpos_t);
		jQuery('.gallery-ul-cat').css('display','none');
		jQuery('.arrow-handler').css('display','none');
		jQuery('.fallback2').css('display','none');
		jQuery('.arrow-Nav').css('display','none');
	});

	jQuery(".browse-cat-link").on("mouseenter", function(e){
		var id = jQuery(this).attr('id');
		mpos_x = e.pageX;
		mpos_y = e.pageY;

		if(prev_mpos_x == 0 && prev_mpos_y == 0){
			prev_mpos_x = mpos_x;
			prev_mpos_y = mpos_y;
		}else if(mpos_x <= (prev_mpos_x + 5)){
			activateBrowseCatLink(id);
		}

		prev_mpos_x = mpos_x;
		prev_mpos_y = mpos_y;
	}).on("mouseout", function(e){
	});

	jQuery(".browse-cat-link").on("mousemove", function(e){
		var id = jQuery(this).attr('id');
		mpos_x = e.pageX;
		mpos_y = e.pageY;

		if(mpos_x < prev_mpos_x){
			activateBrowseCatLink(id);
			prev_mpos_x = mpos_x;
			prev_mpos_y = mpos_y;
		}else{
			clearTimeout(mpos_t);
			mpos_t = setTimeout(function(){ activateBrowseCatLink(id); }, 120);
		}
	});

	jQuery(".fallback2, .gallery-ul-cat").on("mouseenter", function(e){
		mpos_x = 0;
		mpos_y = 0;
		prev_mpos_x = 0;
		prev_mpos_y = 0;
		clearTimeout(mpos_t);
	});
});

(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:350};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);
/* exit browse by category */