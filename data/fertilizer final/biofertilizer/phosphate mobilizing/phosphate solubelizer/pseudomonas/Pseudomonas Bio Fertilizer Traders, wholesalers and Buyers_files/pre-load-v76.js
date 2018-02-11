// This function is used for scrolling at given id 
 $.fn.scrollView = function () {
   return this.each(function () {
       $('html, body').animate({
           scrollTop: $(this).offset().top
       }, 500); 
     });
    } 

// this function is used for common user not me event
var page = {};
page.notMeQ = new Array();
page.notMe = function () {
        for (var j=0; j< page.notMeQ.length; j++)
        {
                page.notMeQ[j].apply();
        }
}
var trackSuggest = 0;
var webAddress = location.hostname;
webAddress = 'http://'+webAddress;

var isIndia= (-(new Date).getTimezoneOffset()/60==5.5) ? 1 : 0;


function DecidePns(divId){ document.getElementById(divId).innerHTML = (isIndia) ? '0' : '+91-' ;}
function DecidePnsV1(divId)
{                                          
	if(document.getElementById(divId).innerHTML.length === 0 ){       
		document.getElementById(divId).innerHTML = (isIndia) ? '0' : '+91-';
	}                                                                 
}

/* * Lazy Load - jQuery plugin for lazy loading images * * Copyright (c) 2007-2012 Mika Tuupola * * Licensed under the MIT license: *   http://www.opensource.org/licenses/mit-license.php * * Project home: *   http://www.appelsiini.net/projects/lazyload * * Version:  1.8.1-dev * */

(function(a,b){var c=a(b);a.fn.lazyload=function(d){function h(){var b=0;e.each(function(){var c=a(this);if(g.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,g)&&!a.leftofbegin(this,g))if(!a.belowthefold(this,g)&&!a.rightoffold(this,g))c.trigger("appear"),b=0;else if(++b>g.failure_limit)return!1})}var e=this,f,g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return d&&(undefined!==d.failurelimit&&(d.failure_limit=d.failurelimit,delete d.failurelimit),undefined!==d.effectspeed&&(d.effect_speed=d.effectspeed,delete d.effectspeed),a.extend(g,d)),f=g.container===undefined||g.container===b?c:a(g.container),0===g.event.indexOf("scroll")&&f.bind(g.event,function(a){return h()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(g.appear){var d=e.length;g.appear.call(b,d,g)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(g.data_attribute))[g.effect](g.effect_speed),b.loaded=!0;var d=a.grep(e,function(a){return!a.loaded});e=a(d);if(g.load){var f=e.length;g.load.call(b,f,g)}}).attr("src",c.data(g.data_attribute))}}),0!==g.event.indexOf("scroll")&&c.bind(g.event,function(a){b.loaded||c.trigger("appear")})}),c.bind("resize",function(a){h()}),a(document).ready(function(){h()}),this},a.belowthefold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.height()+c.scrollTop():f=a(e.container).offset().top+a(e.container).height(),f<=a(d).offset().top-e.threshold},a.rightoffold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.width()+c.scrollLeft():f=a(e.container).offset().left+a(e.container).width(),f<=a(d).offset().left-e.threshold},a.abovethetop=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollTop():f=a(e.container).offset().top,f>=a(d).offset().top+e.threshold+a(d).height()},a.leftofbegin=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollLeft():f=a(e.container).offset().left,f>=a(d).offset().left+e.threshold+a(d).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return!a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window)

// lazyload function to load the images visible in view port.
$(window).load(function(){
	$("img").lazyload({ threshold : 5000 });
	$(".t7_head_text").click(function(){
// 	      if(ims.grid_view==1){
		    var activeCls = document.activeElement.className;
		    if(( activeCls=='') || (activeCls=='t7_form_area')){
			$("#eto_footer_form").slideToggle();
			if ($('#fdbk_form').is(":visible")) {
			  searchFeedback();
			}
// 		    }
	      }
	});
});

$(document).ready(function(){
// if(ims.grid_view==1)
// {
//        $('.distant-msg').hide();
// }
//Suggested MCAT's More logic starts here
$(".mcat-more").click(function(){
   $(".cat-hide").slideToggle();
$(".recentSupplier").toggleClass('rc-mor');
});    
//Suggested MCAT's More logic ends here
$(window).resize(function(){
    var win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    win_resize(win_width,'div-gpt-ad-1423639941635-0');
    win_resize(win_width,'div-gpt-ad-1423904465661-0');
    });

//       $("#gridview").click(function(){
// 		$(".mainSection").toggleClass("grid");
//                 $(".product-name").toggleClass("stitle");
// 		$(this).toggleClass('listIcon gridIcon');
// 		$('#grid-list').toggleClass('txt-list txt-grid');
// 		if($('.grid').length>0)
// 		{
// 			$('.addByGogl1').css("display", "none");
// 			$('.addByGogl2').css("display", "none");
// 			ims.grid_view=1;
// 			ims.grid_text='Grid View';
//                         ims.curr_state='grv';
//                          var new_Cookie = new userDataCookie();
//                          var pv = new_Cookie.get('xnHist').pv || 0;
//                          var cty= new_Cookie.get('xnHist').city || '';
//                          var set_obj = {
//                         'city': cty,
//                         'pv' : pv,
//                         'cvstate' : ims.curr_state 
//                         };
//                new_Cookie.set(set_obj, 'xnHist');
// 			$('.distant-msg').hide();
// 			recordOutboundLink(document.URL,'gridview', 'IMS', 0, 0, 1);
// 			document.getElementById('eto_footer_form').style.display = 'none';
// 		}
// 		else
// 		{
// 			$('.addByGogl1').css("display", "block");
// 			$('.addByGogl2').css("display", "block");
// 		         ims.grid_view=0;
// 		       	ims.grid_text='List View';
//                         ims.curr_state='lsv';
//                          var new_Cookie = new userDataCookie();
//                          var pv = new_Cookie.get('xnHist').pv || 0;
//                          var cty= new_Cookie.get('xnHist').city || '';
//                          var set_obj = {
//                         'city': cty,
//                         'pv' : pv,
//                         'cvstate' : ims.curr_state
//                         };
//                new_Cookie.set(set_obj, 'xnHist');
// 			$('.distant-msg').hide();
// 			recordOutboundLink(document.URL,'listview', 'IMS', 0, 0, 1);
// 			document.getElementById('eto_footer_form').style.display = 'block';
// 		}
// 	});  
			
});

function title_show(obj)
{
        var title_len=obj.text;
	if($('.stitle').length>0 && (title_len.length>24))
		$(obj).attr('title',obj.text);
	else
		$(obj).attr('title','');
}

function win_resize(win_width,add_id)
{
	var sky_banner = document.getElementById(add_id);
	if(sky_banner)
	{
		if(win_width>=1280)
		{
			sky_banner.className = 'sky-banner on';
			sky_banner.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		}
		else
		{
			sky_banner.className = 'sky-banner off';
			sky_banner.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		}
	}
}

function updateCookie(cookie_name, set_obj)
{ 
	var new_cook = new userDataCookie();
	var get_cook = new_cook.get(cookie_name);
	if(cookie_name == 'xnHist')
	{
	  pv = get_cook.pv || 0;
	  set_obj.pv=pv;
	}  
	new_cook.set(set_obj, cookie_name);
}

// for search
function myReplace(str, a, b) {
	var re = new RegExp(a, "g");
	var ret = str.replace(re,b);
	return ret;
}

function openchild_nl(a){browserName=navigator.appName;browserVer=parseInt(navigator.appVersion);condition=!(browserName.indexOf("Explorer")>=0&&browserVer<4||browserName.indexOf("Netscape")>=0&&browserVer<2);CanAnimate=condition==!0?!0:!1;a=a+"?email="+document.theForm.email.value+"&from_site="+document.theForm.from_site.value+"&is_window="+document.theForm.is_window.value+"&org_referer="+document.location;CanAnimate?(msgWindow=window.open("","subwindow","toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=550,height=240"), msgWindow.focus(),msgWindow.location.href=a):msgWindow=window.open(a,"subwindow","toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=550,height=240")}function validateit(a){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(a.email.value))return alert("Invalid Email ID. Kindly enter the correct ID."),a.email.focus(),!1}function getblank(a){if(a.value=="Your Email here.")a.value="";return!0}browserName=navigator.appName;browserVer=parseInt(navigator.appVersion); condition=!(browserName.indexOf("Explorer")>=0&&browserVer<4||browserName.indexOf("Netscape")>=0&&browserVer<2);CanAnimate=condition==!0?!0:!1; 

function openchild(thisurl){ browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
CanAnimate = true;
else
CanAnimate = false;
if ( CanAnimate ) {
var windowHeight; var windowWidth; var windowTop; var windowLeft;
if (browserName == 'Microsoft Internet Explorer')
{
        windowWidth="550px";
}
else
{
        windowWidth="553px";
//      windowWidth=(screen.width*(57/100)-200);
}
windowHeight=(screen.height*(80/100))*0.85;
windowTop=(screen.height*(20/100))*0.8; windowLeft=screen.width*(40.2/100);
msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);
msgWindow.focus(); msgWindow.location.href = thisurl; }
else {
msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420'); }   };

version = parseFloat(navigator.appVersion.split("MSIE")[1]);
if (version == "6"){var fnt = "13px";}
else{var fnt = "14px";
}

function ucwords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function checkHide(){
	if(document.getElementById('autosuggest_head') || document.getElementById('autosuggest')){
		var disp_head;
		var disp;

		if(document.getElementById('autosuggest_head'))
		{
			disp_head = document.getElementById('autosuggest_head');
		}
		if(document.getElementById('autosuggest'))
		{
			disp = document.getElementById('autosuggest');
		}
		//var disp = document.getElementById(suggestion_div).style.display;

		if(disp_head && disp_head.style.display)
		{
			if(disp_head.style.display == 'block'){
				disp_head.style.display = 'none';
				disp_head.highlighted = -1;
			}
		}
		if(disp && disp.style.display)
		{
			if(disp.style.display == 'block'){
				disp.style.display = 'none';
				disp.highlighted = -1;
			}
		}
	}
}

function checkLength(){
	var myElement = '';
	myElement = document.getElementById('ss1').value;
	if (myElement.length < 3) {
		alert("Enter at least three characters for search.");
		return false;
	} else {
		return true;
	}
}

$(function () { $('.tnb ul li').hover( function () {$('.sub_menu1', this).stop(true, true).slideDown(0); if($.browser.msie && $.browser.version=="6.0"){$('.sub_menu1', this).css('top', '25')} }, function () { $('.sub_menu1', this).stop(true, true).slideUp(50); });});

var flag1 = 1;var flag2 = 1;var flag3 = 1;function setimg(){try{if(document.getElementById('dimg0')){var abc = myImg.length;var abcn = abc-21;var abc1, abc2;if (abc < 20){abc2 = abc;}else{abc2 = 20;}if (abc < 10){abc1 = abc;}else{abc1 = 10;}var hs = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;if(700 < hs && hs < 1400 && flag1 == 1){var i=0;for (i=0;i<=abc1-1;i++){document.getElementById("dimg"+i).innerHTML= unescape(myImg[i]);}flag1++;}else if(1400 < hs && hs < 2000 && flag2 == 1){var i=abc1;for (i=abc1;i<=abc2-1;i++){document.getElementById("dimg"+i).innerHTML= unescape(myImg[i]);}flag2++;}else if(2000 < hs  && flag3 == 1){var i=abc2;for (i=abc2;i<=abc-1;i++){document.getElementById("dimg"+i).innerHTML= unescape(myImg[i]);}for (i=0;i<=abc1-1;i++){document.getElementById("dimg"+i).innerHTML=unescape(myImg[i]);}for (i=abc1;i<=abc2-1;i++){document.getElementById("dimg"+i).innerHTML= unescape(myImg[i]);}flag3++;}}}catch(e){}}
function addEvent( obj, type, fn ){
    if (obj.addEventListener){
        obj.addEventListener( type, fn, false );
    }
    else if (obj.attachEvent){
        obj["e"+type+fn] = fn;
        obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); }
        obj.attachEvent( "on"+type, obj[type+fn] );
    }
}
addEvent(window, 'scroll', setimg);

$(function() {
	var words = ['IndiaMART Mobile Site', 'm.indiamart.com'],
	index = 0,
	$el = $('#rotate')
	setInterval(function() {
		index++ < words.length - 1 || (index = 0);
		$el.fadeOut(function() {
			$el.text(words[index]).fadeIn();
		});
	}, 3000); 
});
////Tool tip On Icon Start////
function showTTip(Id){
	document.getElementById(Id).style.display ='inline-block';
}
function hideTTip(Id){
	document.getElementById(Id).style.display ='none';
} 
//////////////////Tool tip On Icon End////////////

$(document).ready(function() { $("#dd dt").click(function() { $("#dd dd ul").toggle(); $("#dd dt").toggleClass('act'); return false }); $("#dd dd ul li a").click(function() { var text = $(this).html(); $("#dd dt").html(text); $("#hdr_frm input[name=txv]").val(text);$("#dd dd ul").hide(); $("#dd dt").removeClass('act'); $("#search_string").focus(); }); $("#dd").mouseleave(function() { $("#dd dd ul").hide(); $("#dd dt").removeClass('act'); }); });

$(function () { $('#hdr_frm, #hdr_frm1').attr('autocomplete', 'off');});

$(function() {
    var words = ['IndiaMART Mobile Site', 'm.indiamart.com'],
        index = 0,
        $el = $('#rotate')
    setInterval(function() {
        index++ < words.length - 1 || (index = 0);
        $el.fadeOut(function() {
            $el.text(words[index]).fadeIn();
        });
    }, 3000); 
});

//resize the image
function resize_hw(Obj,h,w)
{
	myImage = new Image();
	myImage.onload = function(){
		var height = this.height;
		var width  = this.width;
		if(height < h || width < w)
		{
			if(height < h && width < w)
			{
				height = height;
				width = width;
			}
			else if(height < width)
			{
				var temp = h/width;
				var new_height = height * temp;
				new_height = Math.round(new_height);
				width = w;
				height = new_height;
			}
			else
			{
				var temp = w/height;
				var new_width = width * temp;
				new_width = Math.round(new_width);
				height = h;
				width = new_width;
			}
		}
		else
		{
			if(height < width)
			{
				var temp = width/h;
				var new_height = height/temp;
				new_height = Math.round(new_height);
				width = w;
				height = new_height;
			}
			else
			{
				var temp = height/w;
				var new_width = width / temp;
				new_width = Math.round(new_width);
				height = h;
				width = new_width;
			}
		}
		Obj.height = height;
		Obj.width = width;
	}
	myImage.src = Obj.src;
}
/* functions from imsearch.js(functions-min-prd,overlay) */
var city_autosuggest = 0;
function selecttext(event, ui){
	this.value = ui.item.value;
        this.pos = ui.item.pos;
        this.cls = ui.item.cls;
 	 if (typeof( ui.item.data) != 'undefined' && typeof( ui.item.data.catid) != 'undefined'  && ui.item.data.catid != ''){ 
           $('#hdr_frm').append( "<input type='hidden' name='catid' id='catid' value='"+ui.item.data.catid+"' >" );
    	 }
        if(event.keyCode == 13 || event.handleObj.origType=="click"){
                var action = (this.cls == 'recent') ? 'Top:Pos'+this.pos+':Recent' : 'Top:Pos'+this.pos;
                recordOutboundLink(this.value, 'Trac-AutoSuggest', action , this.pos ,0);
                document.getElementById('btnSearch').click();
        }
}

function select_city(event, ui){
	this.value = ui.item.value;
	if(event.keyCode == 13 || event.handleObj.origType=="click")
	{
		var action = (city_search) ? 'city-changed' : 'city-selected';
		var label = (city_search) ? city_search+'=>'+this.value : this.value;
		recordOutboundLink(label, 'IMS', action, 0, 0);
		city_autosuggest = 1;
		document.getElementById('city_sugg').click();
	}
}
/*
Input: File name of the Mcat page
Outout: Redirection to impcat city page.
*/
function cityRedirectToImpcat(Form,urlname,srch_str){
	var string=Form.city_ss.value;
	string = escape(string.replace(/(\s+|%20+|%2B+)/ig,'+'));
	if(string != 'Enter city...')
	{
		if (urlname)
		{
			if (string.length < 1 || string == '+')
			{
				alert("Please enter city of your choice...");	
			}else{
				if(!city_autosuggest)
				{
					var action = (city_search) ? 'city-changed' : 'city-typed';
					var label = (city_search) ? city_search+'=>'+string : string;
					recordOutboundLink(label, 'IMS', action, 0, 0);
				}
				/*removing space/newline and coverting to lower case .*/
			/*	window.location = (urlname.match(/ss=/g)) ? urlname+'&cq='+string : 'http://'+location.hostname+urlname;*/
				if(urlname.match(/ss=/g))
				{
					window.location =urlname+'&cq='+string;	
				}
				else
				{
					imsrch_by_post(document.searchKey,srch_str,string,'');
				}
			}
		}
		return false;
	}
}

/* click on more functionality*/
// $(document).on('click', '.moreLink', function(i)
// {
// 	var theID = $(this).attr('id');
// 	$("#description"+theID).fadeIn("fast");
// 	$(this).text('');
// 	$(this).css({"text-decoration":"none"});
// }); 
// function to call (recursive) a named function untill it gets defined
// maxAttempt is set to 10
function callUntillDefined(fnstring, attemptCounter, time, fnparams)
{
	if (typeof(fnparams) === 'undefined')
	{
		fnparams = [];
	}
	var fn = window[fnstring];
	if(typeof fn === "function")
	{
		fn.apply(null, fnparams);
	} 
	else if(attemptCounter <= ims.maxAttempt)
	{
		setTimeout(function(){callUntillDefined(fnstring, ++attemptCounter, time*2, fnparams)}, time);
	}
};

function capitaliseFirstLetter(x)
{      var dataArr = x.split(' '); 
  for(i=0; i<dataArr.length; i++)
  dataArr[i] = dataArr[i].charAt(0).toUpperCase() + dataArr[i].slice(1)
  return dataArr.join(' ');
}

function listing_feedback(fcounter,counter,phone,gid,prod_id,page,mid)
{ 
$('.box').hover(
       function(){
$('.fedbak-container').hide()
          $('.fedbak-cross').hide()
          $('.tab sv').hide()
          $('.option').hide()
          $('.fedbak-Arrow').show()

});
$('#fedbak-container'+counter).toggle();	
if($('#fedbak-cross'+counter).length == 0){
		$('#'+fcounter).after('<div class="fedbak-cross" id="fedbak-cross'+counter+'" onclick="feedback_close('+counter+',\''+fcounter+'\');"> x </div><div class="fedbak-container fedbak-option off" id="fedbak-container'+counter+'"> <div class="fdborder"> <div id="phissue'+counter+'" class="tab sv" style="display:block;" onclick="phone_issue('+counter+',\''+fcounter+'\');"> <span> <svg viewbox="0 0 126 126" height="126px" width="126px" y="0px" x="0px" id="Layer_1" version="1.1" class="sv" style="height:16px;width:16px;margin-left:-2px;"> <path d="M86.685,12.926H39.315c-2.178,0-3.949,1.772-3.949,3.95v93.1c0,2.178,1.771,3.95,3.949,3.95h47.369 c2.178,0,3.949-1.772,3.949-3.95v-93.1C90.634,14.698,88.862,12.926,86.685,12.926z M59.127,105.426c0-2.14,1.732-3.875,3.873-3.875 c2.143,0,3.873,1.735,3.873,3.875s-1.73,3.875-3.873,3.875C60.859,109.301,59.127,107.566,59.127,105.426z M38.366,98.785V25.207 h49.268v73.578H38.366z"/> </svg> </span>Issue with Phone Number </div> <div id="phnoption'+counter+'" class="option" style="display:none;"> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',1,'+counter+',\''+fcounter+'\');"> No one picked up the call </div> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',2,'+counter+',\''+fcounter+'\');"> Incorrect Phone number </div> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',3,'+counter+',\''+fcounter+'\');"> Call Disconected </div> </div> <div id="prodissue'+counter+'" class="tab sv" style="display: block;"  onclick="product_issue(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',4,'+counter+',\''+fcounter+'\');"> <span> <svg style="margin-top:-4px;padding-right:3px;" viewbox="0 0 87.606 86.559" height="20px" width="20px" y="0px" x="0px" class="sv"> <g id="Gift"> <g> <path d="M84.299,21.678H60.246l5.496-2.723c0.323-0.154,0.617-0.368,0.874-0.625c2.024-2.026,3.139-4.727,3.139-7.593 c0-2.872-1.114-5.566-3.139-7.599c-4.182-4.182-10.978-4.182-15.159,0c-0.227,0.23-0.419,0.492-0.571,0.775L43.23,18.155 L35.574,3.914c-0.152-0.283-0.345-0.545-0.572-0.77c-4.179-4.192-10.978-4.192-15.156,0c-4.179,4.187-4.179,10.999,0,15.186 c0.254,0.257,0.551,0.471,0.871,0.625l5.496,2.723H3.307C1.481,21.678,0,23.164,0,24.992v19.672c0,1.829,1.481,3.311,3.307,3.311 h3.821v35.274c0,1.829,1.48,3.31,3.307,3.31h66.943c1.825,0,3.307-1.48,3.307-3.31V47.975h3.614c1.826,0,3.308-1.481,3.308-3.311 V24.992C87.606,23.164,86.125,21.678,84.299,21.678z M40.264,79.934V47.975h7.162v31.959H40.264z M47.487,41.35h-7.16V28.308h7.16 V41.35z M56.44,7.545c1.612-1.315,3.997-1.225,5.5,0.283c0.775,0.775,1.203,1.808,1.203,2.909c0,0.94-0.312,1.834-0.893,2.562 l-12.128,6.004L56.44,7.545z M24.521,7.828c1.449-1.454,3.928-1.566,5.497-0.283l6.317,11.758l-12.127-6.004 C22.928,11.684,23.032,9.32,24.521,7.828z M6.611,28.308h27.102V41.35H6.611V28.308z M13.739,47.975h23.22v31.959h-23.22V47.975z M74.073,79.934H50.73V47.975h23.343V79.934z M80.995,41.35H54.099V28.308h26.896V41.35z"/> </g></g></svg> </span>The product is not relevant </div> <div id="detailissue'+counter+'" class="tab sv" style="display: block;" onclick="product_details_issue('+counter+',\''+fcounter+'\');"> <span> <svg style="width:19px;height:19px;margin-left:-2px" viewbox="0 0 26 26" height="26px" width="26px" y="0px" x="0px"> <g> <rect x="7.61" y="8.281" width="8.23" height="1.334"/> <path d="M19.871,18.311c0.638-1.127,0.453-2.563-0.475-3.49c-0.549-0.549-1.279-0.852-2.058-0.852c-0.779,0-1.51,0.303-2.059,0.852 s-0.852,1.279-0.852,2.059c0,0.777,0.303,1.508,0.852,2.059c0.549,0.547,1.279,0.85,2.057,0.85c0.507,0,0.998-0.129,1.434-0.375 l3.262,3.262l1.101-1.102L19.871,18.311z M18.563,18.104c-0.652,0.652-1.796,0.652-2.448,0c-0.675-0.676-0.675-1.773,0-2.449 c0.326-0.326,0.762-0.506,1.225-0.506s0.897,0.18,1.224,0.506c0.327,0.326,0.507,0.762,0.507,1.225S18.89,17.777,18.563,18.104z"/> <path d="M18.231,20.523H6.756c-0.182,0-0.329-0.148-0.329-0.328V5.861c0-0.182,0.147-0.329,0.329-0.329h11.475 c0.182,0,0.328,0.147,0.328,0.329v7.312c0.475,0.104,0.918,0.307,1.31,0.597V5.861c0-0.903-0.734-1.638-1.638-1.638H6.756 c-0.903,0-1.638,0.735-1.638,1.638v14.334c0,0.902,0.735,1.637,1.638,1.637h11.475c0.685,0,1.009-0.162,1.253-0.76l-0.594-0.594 C18.671,20.57,18.325,20.523,18.231,20.523z"/> <rect x="7.61" y="12.041" width="8.23" height="1.334"/> </g> </svg> </span> Report Wrong Details </div> <div id="detailoption'+counter+'" class="option" style="display:none;"> <div class="tab"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',5,'+counter+',\''+fcounter+'\');"> Incorrect Product Details </div> <div class="tab"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',6,'+counter+',\''+fcounter+'\');"> This supplier is spammer </div> <div class="tab" style="line-height:15px"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',9,'+counter+',\''+fcounter+'\');"> Supplier does not deal in this &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; product </div> </div> <div class="fed_thx_msg" id="thx_msg'+counter+'" style="display:none;"> <span><svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 126 126"> <path stroke="#6D6E70" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" d="M100.517,25.488  C79.829,4.799,46.17,4.799,25.486,25.483C4.798,46.169,4.8,79.829,25.488,100.517c20.682,20.684,54.341,20.684,75.027-0.004  C121.201,79.829,121.199,46.171,100.517,25.488z M94.728,94.728c-17.494,17.494-45.961,17.496-63.455,0.002  c-17.498-17.497-17.496-45.966,0-63.46c17.494-17.493,45.959-17.495,63.457,0.002C112.224,48.766,112.222,77.235,94.728,94.728z   M43.211,48.641c0-3.423,2.777-6.201,6.201-6.201c3.423,0,6.2,2.777,6.2,6.201c0,3.426-2.777,6.203-6.2,6.203  C45.988,54.844,43.211,52.067,43.211,48.641z M71.328,48.641c0-3.423,2.78-6.201,6.203-6.201c3.423,0,6.201,2.777,6.201,6.201  c0,3.426-2.777,6.203-6.201,6.203C74.108,54.844,71.328,52.067,71.328,48.641z M85.988,74.039  c-3.843,8.887-12.843,14.629-22.928,14.629c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.53,0.089-3.286,1.62-3.921  c0.376-0.156,0.766-0.23,1.15-0.23c1.176,0,2.292,0.696,2.771,1.85c2.777,6.685,9.655,11.004,17.523,11.004  c7.69,0,14.528-4.322,17.421-11.011c0.658-1.521,2.424-2.222,3.944-1.563C85.946,70.752,86.646,72.518,85.988,74.039z"/> </svg></span><p style="padding-top:10px;font-weight:bold;color:#000;">Thank You!</p></div></div> <p class="clear1"> </p> <p class="clear1"> </p> </div>');
           $('#fedbak-container'+counter).show();	
	}else
	{
		$('#phissue'+counter).show();
		$('#prodissue'+counter).show();
		$('#detailissue'+counter).show();
		$('#thx_msg'+counter).hide();
	} 
	$('#fedbak-cross'+counter).hide();
	$(document).mouseup(function (e)
	{
		var container = $('#fedbak-container'+counter);
                var target_id=e.target.id;
		if (!container.is(e.target) 
			&& container.has(e.target).length === 0)
		{
                       if(target_id!=='feedback'+counter)
			{
			container.hide();
			$('#'+fcounter).show();
			$('#fedbak-cross'+counter).hide();
			$('#phissue'+counter).show();
			$('#prodissue'+counter).show();
			$('#detailissue'+counter).show();
			$('#phnoption'+counter).hide();
			$('#detailoption'+counter).hide();
			$('#thx_msg'+counter).hide();
			$('#fedbak-container'+counter).hide();
			}
		}
	});
}

function list_feedback_reset(counter,fcounter)
{
        $('#'+fcounter).show();
        $('#fedbak-cross'+counter).hide();
        $('#phissue'+counter).show();
        $('#prodissue'+counter).show();
        $('#detailissue'+counter).show();
        $('#phnoption'+counter).hide();
        $('#detailoption'+counter).hide();
        $('#thx_msg'+counter).hide();
        $('#fedbak-container'+counter).hide();
}

function phone_issue(counter,icon_counter)
{
      $('#'+icon_counter).hide();
      $('#phissue'+counter).hide();
      $('#prodissue'+counter).hide();
      $('#detailissue'+counter).hide();
      $('#phnoption'+counter).show();      
      $('#fedbak-cross'+counter).show();
}

function product_issue(phone,gid,prod_id,page,mid,feedback,counter,icon_counter)
{
	$('#prodissue'+counter).hide();
	$('#phissue'+counter).hide();
	$('#'+icon_counter).hide();
	$('#phnoption'+counter).hide();
	$('#detailissue'+counter).hide();
	$('#fedbak-cross'+counter).show();	
	$('#thx_msg'+counter).show();
	setTimeout(function() { $('#thx_msg'+counter) && $('#fedbak-container'+counter).hide();$('#fedbak-cross'+counter).hide();
	$('#'+icon_counter).show(); }, 1000);
	submit_feedback(phone,gid,prod_id,page,mid,feedback,counter,icon_counter);
}

function product_details_issue(counter,icon_counter)
{
	$('#detailissue'+counter).hide();
	$('#phissue'+counter).hide();
	$('#phnoption'+counter).hide();
	$('#prodissue'+counter).hide();
	$('#'+icon_counter).hide();	
	$('#fedbak-cross'+counter).show();
	$('#detailoption'+counter).show();
}

function feedback_close(counter,icon_counter)
{
	$('#fedbak-cross'+counter).hide();
	$('#fedbak-container'+counter).hide();
	$('#'+icon_counter).show();  
	$('#phissue'+counter).hide();
	$('#prodissue'+counter).hide();
	$('#detailissue'+counter).hide();
	$('#phnoption'+counter).hide();
	$('#detailoption'+counter).hide();
}
function submit_feedback(phone,gid,prod_id,page,mid,feedback,counter,icon_counter)
{
		var xmlhttp; 
		if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest();} 
		else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
		var request_file = "../listing_feedback.php";
		var url = "phone="+phone+"&gid="+gid+"&prod_id="+prod_id+"&page="+page+"&mid="+mid+"&feedback="+feedback;
		xmlhttp.open("POST", request_file, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");				
		xmlhttp.send(url);
		if((feedback) && (feedback < 4)) { phn_option(counter,icon_counter); } else if((feedback) && (feedback > 4)) { details_option(counter,icon_counter); }            
}

function phn_option(counter,icon_counter)
{
      $('#phnoption'+counter).hide();
      $('#thx_msg'+counter).show();
      setTimeout(function() { $('#thx_msg'+counter) && $('#fedbak-container'+counter).hide();$('#fedbak-cross'+counter).hide();
      $('#'+icon_counter).show(); }, 1000);
}

function details_option(counter,icon_counter)
{
      $('#detailoption'+counter).hide();
      $('#thx_msg'+counter).show();
      setTimeout(function() { $('#thx_msg'+counter) && $('#fedbak-container'+counter).hide();$('#fedbak-cross'+counter).hide();
      $('#'+icon_counter).show(); }, 1000);
}


var item_no = '0';
function imgset(imageid)
{
    item_no = imageid;
    return true;
} 

function showcityTTip(Id){
$("#"+Id).addClass('ctton');
}
function hidecityTTip(Id){

$("#"+Id).removeClass('ctton');
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
// 			console.log(response['Interest_id']);
		}
	 });
}

function nextimgReq()
{
	var disp_data = 0;
	var img_id = parseInt(item_no);
	var page_result = parseInt(ims.pageResult);
	var page_display_result = parseInt(ims.pageDisplayResult);
	var total_result = parseInt(ims.r);
	//$('#'+ims.sDivId).hide();
	if(img_id%10==0 && (typeof(ims.npFlag) == 'undefined' || ims.npFlag == 0)){
	    //ims.npFlag = 1;
	    $("#"+img_id+'imgenq').scrollView();
	    if(page_result > 60){
		$('#scroll'+ims.pg).click();
	    }
	}
	if(img_id <= page_result){
	    img_id++;  
	    if($('[id^="'+img_id+'dispid"]').length && ($('[id^="'+img_id+'dispid"]').attr("onClick") != undefined && $('[id^="'+img_id+'dispid"]').attr("onClick") != '' ))
	    {
		  $('[id^="'+img_id+'dispid"]').click();
		  item_no= img_id;
	    }else if($('[id^="'+img_id+'imgenq"]').length && ($('[id^="'+img_id+'imgenq"]').attr("onClick") != undefined && $('[id^="'+img_id+'imgenq"]').attr("onClick") != '' ))
	    {
		  $('[id^="'+img_id+'imgenq"]').click();
		  item_no= img_id;
	    }else if($('[id^="'+img_id+'prcenq"]').length && ($('[id^="'+img_id+'prcenq"]').attr("onClick") != undefined && $('[id^="'+img_id+'prcenq"]').attr("onClick") != '' ))
	    {
		  $('[id^="'+img_id+'prcenq"]').click();
		  item_no= img_id;
	    }else{ item_no = img_id;
	    }
	}
 }

function previousimgReq()
{
var img_id = parseInt(item_no);
    if(img_id > 1)
    {
	img_id--;
	item_no = img_id;
// 	if($('.'+'NP-'+img_id).length)
// 	{
// 	    $('.'+'NP-'+img_id).click();
// 	}
	if($('[id^="'+img_id+'dispid"]').length && ($('[id^="'+img_id+'dispid"]').attr("onClick") != undefined && $('[id^="'+img_id+'dispid"]').attr("onClick") != '' ))
	{
	      $('[id^="'+img_id+'dispid"]').click();
		
	}else if($('[id^="'+img_id+'imgenq"]').length && ($('[id^="'+img_id+'imgenq"]').attr("onClick") != undefined && $('[id^="'+img_id+'imgenq"]').attr("onClick") != '' ))
	{
	      $('[id^="'+img_id+'imgenq"]').click();
		
	}else if($('[id^="'+img_id+'prcenq"]').length && ($('[id^="'+img_id+'prcenq"]').attr("onClick") != undefined && $('[id^="'+img_id+'prcenq"]').attr("onClick") != '' ))
	{
	      $('[id^="'+img_id+'prcenq"]').click();
	}else{ item_no = img_id; }

    } 
}

//insta effect
$(document).ready(function(){
    if (ims.modid=='ETO')
    {
        $('.image-wdt222').after('<div class="hidden-b"><div class="blur"><img src="http://utils.imimg.com/imsrchui/imgs/z.gif" data-original="http://utils.imimg.com/imsrchui/imgs/z.gif"></div></div>'); 
            $('.hidden-b img').each(function(i,el){ 
        el.id = 'img'+(i+1); 
        }); 
        
        for(var j=1; j<=20; j++) 
        {
            if(j<=4)
            {
                    $('#img'+j).removeAttr('data-original');
                    $('#img'+j).attr("src",$('#i'+j).attr('src'));
            }
            else
            {
                $('#img'+j).attr("data-original",$('#i'+j).attr('data-original'));
                
            } 
        }
    }    
  });