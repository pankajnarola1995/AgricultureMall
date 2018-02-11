/*  function-min-prd */
/*Select supplier forcefully from 
the search dropdown on all pages 
Dir incase of back buuton from browser.*/

$(document).ready(function(){
//         $('#gridview').click(function(){
//                 if(ims.grid_view == 1) {
// 			if($('#sticky_bl_close').length == 0)
// 			$('#t7_head').prepend('<div id="sticky_bl_close" class="cls_div" style="margin: -18px -9px 0px;">X</div>');
//                         $('#sticky_bl_close').show();
// 			$('#eto_ofr_ftr_frm').hide();
//                 }
//                 else
//                 {
//                         $('#sticky_bl_close').hide();
// 			$('#eto_ofr_ftr_frm').show();
//                 }
//  		sticky_bl_visibility_check();
//         });
	$('#eto_ofr_ftr_frm').show();	
});

$(window).scroll(function(){
		var absolute_height = $(document).height() - $(window).height() - 520;
		if ($(window).scrollTop() >= absolute_height && (ims.grid_view == 1))
		{
			$('#eto_ofr_ftr_frm').hide();
		}
		else
		{
			$('#eto_ofr_ftr_frm').show();
		}
		});

function createCookieByHours(name,value,hours) {
        if (hours) {
                var date = new Date();
                date.setTime(date.getTime()+(hours*60*60*1000));
                var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        var hostname = location.hostname;
        document.cookie = name+"="+value+expires+"; domain="+hostname+";path=/";
}



function enableSupplier(){
if (document.searchForm.searchfor.value) document.searchForm.searchfor.value = 'product';
}


/*source-new-test-min.js */


var myWidth = 0, myHeight = 0;
function source() 
{

	try {
		if( typeof( window.innerWidth ) == 'number' ) {
			myWidth = window.innerWidth;
			myHeight = window.innerHeight;
		} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			myWidth = document.documentElement.clientWidth;
			myHeight = document.documentElement.clientHeight;
		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			myWidth = document.body.clientWidth;
			myHeight = document.body.clientHeight;
		}
		var h = window.pageYOffset ||
			document.body.scrollTop ||
			document.documentElement.scrollTop;
		var browserName=navigator.appName; 

		var intElemScrollHeight = document.getElementById('hdiv').scrollHeight;

		var abc = document.getElementsByTagName('body')[0].scrollHeight;
		var abc1 = abc-1000;

		var newh = intElemScrollHeight+135;
		var s = intElemScrollHeight+135+254;

		var newhn = intElemScrollHeight+135+h;

		try
		{
			if (document.getElementById('sourcediv').className=="w10 soff")
			{
				document.getElementById('sourcediv').style.top = newh+"px";
				document.getElementById('sourcediv').className="w10 bgs10";
			}
		}
		catch(err)
		{
		}

		if (newh < h || abc1 > h)
		{
			try{document.getElementById('sourcediv').style.top = h+"px";}catch(err){}

			if (abc1 < h)
			{
				try{document.getElementById('sourcediv').style.top = abc1+"px";}catch(err){}
			}

			if (newh > h)
			{
				try{document.getElementById('sourcediv').style.top = newh+"px";}catch(err){}

			}
		}
	} 
	catch(err)
	{
	}
}



function cls()
{
	try{document.getElementById('sourcediv').className="soff";}catch(err){}
}




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
addEvent(window, 'scroll', source);
addEvent(window, 'resize', source);

function openChildYouTube(url){
	alert(url);

	msgWindow=window.open(url,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=560,height=315');

}

/*Ajax request for the image call*/

function showImage(thisImg,divId,glUsrId,catId){
	var xmlhttp;
	var rP='';

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
			var rT = xmlhttp.responseText;
			if(rT){

				thisImg.src =  rT;
			}else{
				document.getElementById(divId).innerHTML = '';
			}	

		}else{
			thisImg.src = '//dir.imimg.com/gifs/loader-image.gif';
		}
	} 
	var url = "/cgi/dir-get-image.mp?div="+divId+"&glUsrId="+glUsrId+"&catId="+catId;
	xmlhttp.open("GET", url ,true);
	xmlhttp.send(null);
}

/*For showing the image on scroll of the page */

var Imgs=[];
function ImgLoad(cls){

	var as=zxcByClassName(cls);
	for (var z0=0;z0<as.length;z0++){
		if (as[z0].getAttribute('rel') && as[z0].getElementsByTagName('IMG')[0]){
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel'));
			Imgs.push(oop);
		}
	}
	CkTop();
}

function Fade(img,src){
	this.img=img;
	this.src=src;
	this.opc=0;
	zxcOpacity(this.img,0);
}

Fade.prototype.fade=function(){
	
	if (this.opc == 0) {
		var myString = this.src.split("||");
		showImage(this.img,myString[0],myString[1],myString[2]);
	}
	zxcOpacity(this.img,this.opc++);
	var oop=this;
	if (this.opc<101) setTimeout(function(){ oop.fade(); },10);
}

function CkTop(){

	for (var z0=0;z0<Imgs.length;z0++){
		if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0){
			Imgs[z0].fade();
			Imgs.splice(z0,1);
			z0--;
		}
	}
}

function zxcOpacity(obj,opc){
	if (opc<0||opc>100) return;
	obj.style.filter='alpha(opacity='+opc+')';
			obj.style.opacity=obj.style.MozOpacity=obj.style.KhtmlOpacity=opc/100-.001;
			}

			function zxcWWHS(){
			if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset];
			else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop];
			return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop];
			}

			function zxcPos(obj){
			var rtn=[0,0];
			while(obj){

			rtn[0]+=obj.offsetLeft;
			rtn[1]+=obj.offsetTop;
			obj=obj.offsetParent;
			}
			return rtn;
			}
			function zxcByClassName(nme,el,tag){

				if (typeof(el)=='string') el=document.getElementById(el);
				el=el||document;
				for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),ary=[],z0=0; z0<els.length;z0++){
					if(reg.test(els[z0].className)) ary.push(els[z0]);
				}
				return ary;
			}

/*End of the image code*/
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
			 document.getElementById(divId).className = "a2 wdt1 fm1 fb fc3";
			 document.getElementById(divId).innerHTML='<span><img src="//dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">Fetching more companies to show...</span><span> <img src="//dir.imimg.com/gifs/page.gif"/></span>';
			 document.getElementById(fetchId).innerHTML= '';
			 document.getElementById(fetchId).className = "";
		}
	}
	var url = "mcatName="+mcatName+"&mcatId="+mcatId+"&catId="+catId+"&searchCity="+searchCity+"&end="+end+"&rand="+rand+"&ctname="+ct_name;
	xmlhttp.open("POST", "/cgi/impcat-pagination.mp", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(url);
}
function showMoreProducts(divId,fetchId,mcatId,mcatName,catId,searchCity,end,rand,prod_serv,showkm){
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
			 var text_for_fetch = (prod_serv == 'S') ? 'Fetching more service providers...' : 'Fetching more products to show...';
			 document.getElementById(divId).className = "a2 wdt1 fm1 fb fc3";
			 document.getElementById(divId).innerHTML='<span><img src="//dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">'+text_for_fetch+'</span><span> <img src="//dir.imimg.com/gifs/page.gif"/></span>';
			 document.getElementById(fetchId).innerHTML= '';
			 document.getElementById(fetchId).className = "";
		}
	}
	var url = "mcatName="+mcatName+"&mcatId="+mcatId+"&catId="+catId+"&searchCity="+searchCity+"&end="+end+"&rand="+rand+"&prod_serv="+prod_serv+"&showkm="+showkm;

	xmlhttp.open("POST", "/cgi/impcat-pagination-products.mp", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(url);

}

/*
 *  * SimpleModal 1.4.1 - jQuery Plugin
 *   * http://www.ericmmartin.com/projects/simplemodal/
 *    * Copyright (c) 2010 Eric Martin (http://twitter.com/ericmmartin)
 *     * Dual licensed under the MIT and GPL licenses
 *      * Revision: $Id: jquery.simplemodal.js 261 2010-11-05 21:16:20Z emartin24 $
 *       */
(function(d){var k=d.browser.msie&&parseInt(d.browser.version)===6&&typeof window.XMLHttpRequest!=="object",m=d.browser.msie&&parseInt(d.browser.version)===7,l=null,f=[];d.modal=function(a,b){return d.modal.impl.init(a,b)};d.modal.close=function(){d.modal.impl.close()};d.modal.focus=function(a){d.modal.impl.focus(a)};d.modal.setContainerDimensions=function(){d.modal.impl.setContainerDimensions()};d.modal.setPosition=function(){d.modal.impl.setPosition()};d.modal.update=function(a,b){d.modal.impl.update(a,b)};d.fn.modal=function(a){return d.modal.impl.init(this,a)};d.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1E3,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,position:null,
 persist:false,modal:true,onOpen:null,onShow:null,onClose:null};d.modal.impl={d:{},init:function(a,b){var c=this;if(c.d.data)return false;l=d.browser.msie&&!d.boxModel;c.o=d.extend({},d.modal.defaults,b);c.zIndex=c.o.zIndex;c.occb=false;if(typeof a==="object"){a=a instanceof jQuery?a:d(a);c.d.placeholder=false;if(a.parent().parent().size()>0){a.before(d("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));c.d.placeholder=true;c.display=a.css("display");if(!c.o.persist)c.d.orig= a.clone(true)}}else if(typeof a==="string"||typeof a==="number")a=d("<div></div>").html(a);else{alert("SimpleModal Error: Unsupported data type: "+typeof a);return c}c.create(a);c.open();d.isFunction(c.o.onShow)&&c.o.onShow.apply(c,[c.d]);return c},create:function(a){var b=this;f=b.getDimensions();if(b.o.modal&&k)b.d.iframe=d('<iframe src="javascript:false;"></iframe>').css(d.extend(b.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:f[0],width:f[1],zIndex:b.o.zIndex,top:0,left:0})).appendTo(b.o.appendTo); b.d.overlay=d("<div></div>").attr("id",b.o.overlayId).addClass("simplemodal-overlay").css(d.extend(b.o.overlayCss,{display:"none",opacity:b.o.opacity/100,height:b.o.modal?f[0]:0,width:b.o.modal?f[1]:0,position:"fixed",left:0,top:0,zIndex:b.o.zIndex+1})).appendTo(b.o.appendTo);b.d.container=d("<div></div>").attr("id",b.o.containerId).addClass("simplemodal-container").css(d.extend(b.o.containerCss,{display:"none",position:"fixed",zIndex:b.o.zIndex+2})).append(b.o.close&&b.o.closeHTML?d(b.o.closeHTML).addClass(b.o.closeClass):"").appendTo(b.o.appendTo);b.d.wrap=d("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(b.d.container);b.d.data=a.attr("id",a.attr("id")||b.o.dataId).addClass("simplemodal-data").css(d.extend(b.o.dataCss,{display:"none"})).appendTo("body");b.setContainerDimensions();b.d.data.appendTo(b.d.wrap);if(k||l)b.fixIE()},bindEvents:function(){var a=this;d("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});d(document).bind("keydown.simplemodal",function(b){if(a.o.modal&&b.keyCode===9)a.watchTab(b);else if(a.o.close&&a.o.escClose&&b.keyCode===27){b.preventDefault();a.close()}});d(window).bind("resize.simplemodal",function(){f=a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();if(k||l)a.fixIE();else if(a.o.modal){a.d.iframe&&a.d.iframe.css({height:f[0],width:f[1]});a.d.overlay.css({height:f[0],width:f[1]})}})},unbindEvents:function(){d("."+this.o.closeClass).unbind("click.simplemodal");d(document).unbind("keydown.simplemodal");d(window).unbind("resize.simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this,b=a.o.position;d.each([a.d.iframe||null,!a.o.modal?null:a.d.overlay,a.d.container],function(c,h){if(h){var g=h[0].style;g.position="absolute";if(c<2){g.removeExpression("height");g.removeExpression("width");g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"');g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"')}else{var e;if(b&&b.constructor===Array){c=b[0]?typeof b[0]==="number"?b[0].toString():b[0].replace(/px/,""):h.css("top").replace(/px/,"");c=c.indexOf("%")===-1?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"': parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"';if(b[1]){e=typeof b[1]==="number"?b[1].toString():b[1].replace(/px/,"");e=e.indexOf("%")===-1?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'}}else{c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"';e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'}g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var b=this;a=a&&d.inArray(a,["first","last"])!==-1?a:"first";var c=d(":input:enabled:visible:"+a,b.d.wrap);setTimeout(function(){c.length>0?c.focus():b.d.wrap.focus()},10)},getDimensions:function(){var a=d(window);return[d.browser.opera&&d.browser.version>"9.5"&&d.fn.jquery<"1.3"||d.browser.opera&&d.browser.version<"9.5"&&d.fn.jquery>"1.2.6"?a[0].innerHeight:a.height(),a.width()]},getVal:function(a,b){return a?typeof a==="number"?a:a==="auto"?0:
 a.indexOf("%")>0?parseInt(a.replace(/%/,""))/100*(b==="h"?f[0]:f[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){var c=this;if(!c.d.data)return false;c.d.origHeight=c.getVal(a,"h");c.d.origWidth=c.getVal(b,"w");c.d.data.hide();a&&c.d.container.css("height",a);b&&c.d.container.css("width",b);c.setContainerDimensions();c.d.data.show();c.o.focus&&c.focus();c.unbindEvents();c.bindEvents()},setContainerDimensions:function(){var a=this,b=k||m,c=a.d.origHeight?a.d.origHeight:d.browser.opera?
 a.d.container.height():a.getVal(b?a.d.container[0].currentStyle.height:a.d.container.css("height"),"h");b=a.d.origWidth?a.d.origWidth:d.browser.opera?a.d.container.width():a.getVal(b?a.d.container[0].currentStyle.width:a.d.container.css("width"),"w");var h=a.d.data.outerHeight(true),g=a.d.data.outerWidth(true);a.d.origHeight=a.d.origHeight||c;a.d.origWidth=a.d.origWidth||b;var e=a.o.maxHeight?a.getVal(a.o.maxHeight,"h"):null,i=a.o.maxWidth?a.getVal(a.o.maxWidth,"w"):null;e=e&&e<f[0]?e:f[0];i=i&&i<
 f[1]?i:f[1];var j=a.o.minHeight?a.getVal(a.o.minHeight,"h"):"auto";c=c?a.o.autoResize&&c>e?e:c<j?j:c:h?h>e?e:a.o.minHeight&&j!=="auto"&&h<j?j:h:j;e=a.o.minWidth?a.getVal(a.o.minWidth,"w"):"auto";b=b?a.o.autoResize&&b>i?i:b<e?e:b:g?g>i?i:a.o.minWidth&&e!=="auto"&&g<e?e:g:e;a.d.container.css({height:c,width:b});a.d.wrap.css({overflow:h>c||g>b?"hidden":"hidden"});a.o.autoPosition&&a.setPosition()},setPosition:function(){var a=this,b,c;b=f[0]/2-a.d.container.outerHeight(true)/2;c=f[1]/2-a.d.container.outerWidth(true)/2;if(a.o.position&&Object.prototype.toString.call(a.o.position)==="[object Array]"){b=a.o.position[0]||b;c=a.o.position[1]||c}else{b=b;c=c}a.d.container.css({left:c,top:b})},watchTab:function(a){var b=this;if(d(a.target).parents(".simplemodal-container").length>0){b.inputs=d(":input:enabled:visible:first, :input:enabled:visible:last",b.d.data[0]);if(!a.shiftKey&&a.target===b.inputs[b.inputs.length-1]||a.shiftKey&&a.target===b.inputs[0]||b.inputs.length===0){a.preventDefault();b.focus(a.shiftKey?"last":"first")}}else{a.preventDefault();b.focus()}},open:function(){var a=this;a.d.iframe&&a.d.iframe.show();if(d.isFunction(a.o.onOpen))a.o.onOpen.apply(a,[a.d]);else{a.d.overlay.show();a.d.container.show();a.d.data.show()}a.o.focus&&a.focus();a.bindEvents()},close:function(){var a=this;if(!a.d.data)return false;a.unbindEvents();if(d.isFunction(a.o.onClose)&&!a.occb){a.occb=true;a.o.onClose.apply(a,[a.d])}else{if(a.d.placeholder){var b=d("#simplemodal-placeholder");if(a.o.persist)b.replaceWith(a.d.data.removeClass("simplemodal-data").css("display",a.display));else{a.d.data.hide().remove();b.replaceWith(a.d.orig)}}else a.d.data.hide().remove();a.d.container.hide().remove();a.d.overlay.hide();a.d.iframe&&a.d.iframe.hide().remove();setTimeout(function(){a.d.overlay.remove();a.d={}},10)}}}})(jQuery);


 function showresult()
{
	var search= '';
	search = document.getElementById('ss1').value;
	search = search.replace(/(^[\s]+|[\s]+$)/g, '');

	if (search.length < 3) {
		var blank = '';
		document.getElementById("searchlist").innerHTML= '';	
		return false;
	} else {
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
				document.getElementById("searchlist").innerHTML=xmlhttp.responseText;
			} 
		}
		var url = "/impcat-Search.pl?ss1="+search;

		xmlhttp.open("GET", url ,true);
		xmlhttp.send();
	}
}   

//New Video from youtube

function popVideo(a,b,c,d,e,f,g,h,i,j){     //new video implementation using YouTube.

	closeOpenedView(a);

	var path = '"http://www.youtube.com/v/'+b+'?rel=0&amp;fs=0&amp;showinfo=0&amp;autohide=1&amp;version=3&amp;autoplay=1" wmode="transparent" width="480px" height="360 px"/';
	if( j != ''){
		var contact = '<tr><td class="h_01" align="left" valign="TOP">Phone</td><td class="h_01" align="CENTER" valign="TOP">:</td><td class="h_02" align="left" valign="TOP">'+j+'</td></tr>'; 

	}else if( f != '' && j == '' ){

		var contact = '<tr><td class="h_01" align="left" valign="TOP">Mobile</td><td class="h_01" align="CENTER" valign="TOP">:</td><td class="h_02" align="left" valign="TOP">'+f+'</td></tr>'; 
	}else{

		var contact = '';
	}

	document.getElementById(a).innerHTML = '<!--[if IE 6]><style>.ab_i6{left:10%;top:20%;position:absolute;display:block;border:1px solid #000000;} .nm002{font-size:16px; font-weight:bold; color:#000; margin:0 0px 20px 10px; width:340px;}</style><![endif]--><div id="child"><div id="b" class="mn_i6 ab_i6 align_ie"><div class="nm001 c_bg_i6" style="width:855px; height:34px;">Video: <a target="_blank" style="color:#A20000;text-decoration: none;" href="'+g+'"> '+unescape(c)+'</a></div><table cellspacing="0" cellpadding="0" border="0" width="350px" height="411px"><tr><td class="padvi_i6"><embed class="cur" src= '+path+'></td><td valign="top" align="LEFT" width="100%"><div class="nm002 cur" onclick="popclose();" >Close X</div><div class="co_ov" align="justify">'+unescape(d)+'</div><div class="det_img_i6"><p class="co_hed">CONTACT DETAILS</p></div><div class="co2_hed"><table align="CENTER" border="0" cellpadding="0" cellspacing="0" width="90%"><tr><td class="h_01" align="left" valign="TOP" width="106">Contact Person</td><td class="h_01" align="CENTER" valign="TOP" width="2%">:</td><td class="h_02" align="left" valign="TOP">'+unescape(e)+'</td></tr><tr><td class="h_01" align="left" valign="TOP"><nobr>Company Name</nobr></td><td class="h_01" align="CENTER" valign="TOP">:</td><td class="h_02" align="left" valign="TOP">'+unescape(c)+'</td></tr>'+contact+'<tr><td class="h_01" align="left" valign="TOP">Address</td><td class="h_01" align="CENTER" valign="TOP">:</td><td class="h_02" align="left" valign="TOP"><p class="pwrap"> '+unescape(h)+'</p></td></tr><tr><td class="h_01" align="left" valign="TOP">Website</td><td class="h_01" align="CENTER" valign="TOP">:</td><td class="h_02" align="left" valign="TOP"><p class="pwrap"><a href='+g+' target="_blank">'+g+'</a></p></td></tr></table></div></td></tr></table></div></div>';
	show(a);	
	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){   //Made Compatible with IE6 and the dropdown	
		document.getElementById('b').className = "mn_i6 ab_i6 align_nie";

		if(document.getElementById('select').value=='product'){
			var selected_val = 'Products';
		}
		if(document.getElementById('select').value=='comp'){
			var selected_val = 'Suppliers';
		}
		if(document.getElementById('select').value=='offer'){
			var selected_val = 'Sell Offers';
		}
		if(document.getElementById('select').value=='leads'){
			var selected_val = 'Buy Leads';
		}
		if(document.getElementById('select').value=='tenders'){
			var selected_val = 'Tenders';
		}
		document.getElementById('text').value=    selected_val;
		document.getElementById('select').style.display="none";
		document.getElementById('text').style.display="block";
		document.getElementById('bottom_select').style.display="none";
		document.getElementById('bottom_text').style.display="block";

	}
}

function closep(url){
	recordOutboundLink(url , 'Trac-Send-Enquiry', 'videoPopup',0,0);
	popclose(1);
}

function show(a)
{
	$("#"+a).modal("slow");
}

var closeDid = '';
function closeOpenedView(vid) {      //take the backup of the previous DIV ID and close the parent video.
	if ( closeDid == '' ) {
		closeDid = vid;
	} else {
		if (closeDid != vid) {
			popclose(closeDid);
			closeDid = vid;
		} 
	}
}

function popclose(flag) {      //to close the video overlay
	if (flag == 1){
		document.getElementById('black').style.display="block";
	}
	$.modal.close();
	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
		document.getElementById('select').style.display="block";
		document.getElementById('text').style.display="none";
		document.getElementById('bottom_select').style.display="block";
		document.getElementById('bottom_text').style.display="none";
	}   
}

function makepopstatic(divId,disableId){
	changeColorEnquiryAlreadySent();
	show(divId);	
	if (document.getElementById(disableId).className == "bg enquiry-sent-disabled z1 hl a2 td f2 wdt bo td"){
		document.getElementById('disablediv').className = "snd-bg1";
	}
	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){   //Made Compatible with IE6 and the dropdown	

		if(document.getElementById('select').value=='product'){
			var selected_val = 'Products';
		}
		if(document.getElementById('select').value=='comp'){
			var selected_val = 'Suppliers';
		}
		if(document.getElementById('select').value=='offer'){
			var selected_val = 'Sell Offers';
		}
		if(document.getElementById('select').value=='leads'){
			var selected_val = 'Buy Leads';
		}
		if(document.getElementById('select').value=='tenders'){
			var selected_val = 'Tenders';
		}
		document.getElementById('text').value=    selected_val;
		document.getElementById('select').style.display="none";
		document.getElementById('text').style.display="block";
		document.getElementById('bottom_select').style.display="none";
		document.getElementById('bottom_text').style.display="block";

	}

}

function popVideo3(videoUrl,contactperson,country,phone,display_id,counter,enquiryId,modreftype){     
//new video implementation using YouTube.
	var xmlhttp;
	var disableId;
	
        var company = document.getElementById("company_name"+counter).innerHTML || '';
        var desc = document.getElementById("description"+counter).innerHTML || '';
        var website = document.getElementById("website"+counter).innerHTML || '';
        var tscert = document.getElementById("ts_cert"+counter).innerHTML || '';
        var city = document.getElementById("city"+counter).innerHTML || '';
        var tr_flag = (document.getElementById("tr_flag"+counter).innerHTML) ? 1 : 0;
        var enquiryString = document.getElementById(enquiryId).href || '';
	
	$.ajax({
                    url: "/cgi/show-video_new.pl", 
                    data: { 
                            "videourl": videoUrl,
                            "company": company,
                            "desc": desc,
                            "contactperson": contactperson,
                            "website": website,
                            "city": city,
                            "country": country,
                            "phone": phone,
                            "enquiryString": enquiryString,
                            "tr_flag": tr_flag,
                            "tscert": tscert,
                            "modreftype": modreftype,
                            "enquiryId": enquiryId,
                            "display_id": display_id},
                   // dataType: "json",
                    type: "POST",
                    success: function(jsonResult)
		    		{        
				document.getElementById('v').innerHTML = jsonResult
				makepopstatic('v',enquiryId);
		   		}
		});

}

function popVideo2(divId,videoUrl,comp,desc,contactperson,mobile,website,city,country,phone,enquiryString,tr_flag,tscert,glusr_id){     //new video implementation using YouTube.
	var xmlhttp;
	var disableId;
	mobile=mobile.replace(/\+/g,"plus");
	phone=phone.replace(/\+/g,"plus");
	desc =desc.replace(/'/g,"apos");
	desc =desc.replace(/"/g,"quot");
	desc =desc.replace(/&/g,"amper");
	desc =desc.replace(/;/g,"semi");
	comp =comp.replace(/'/g,"apos");
	comp =comp.replace(/&/g,"amper");
	
	enquiryString=enquiryString.replace(/'/g,"apos");
	enquiryString=enquiryString.replace(/"/g,"quot");
	enquiryString=enquiryString.replace(/&/g,"amper");
	enquiryString=enquiryString.replace(/;/g,"semi");
	enquiryString = enquiryString.replace(/\'s/g,"\\'s");
	enquiryString.match(/(?:.*apos)(.*)apos.*$/);
	disableId = (RegExp.$1);
	
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
			document.getElementById(divId).innerHTML=xmlhttp.responseText;
			makepopstatic(divId,disableId);
		} 
	}

	var url = '/cgi/show-video.pl?&videourl='+videoUrl+'&comp='+comp+'&desc='+desc+'&contactperson='+contactperson+'&mobile='+mobile+'&website='+website+'&city='+city+'&country='+country+'&phone='+phone+'&enquiryString='+enquiryString+'&tr_flag='+tr_flag+'&tscert='+tscert+'&glusr_id='+glusr_id;
	xmlhttp.open("GET", url ,true);
	xmlhttp.send();	
}

function feedback(){


	if(readCookie('imDirFb')) {
		createfeedbackcookie('imDirFb1',1,16);
		createfeedbackcookie('imDirFb','',-1);
	} 

	var feedback_string = '<div id="fixmetoo"><div style="display: none; position: absolute; margin-left: -620px; *margin-left: -620px;" id="feedback"><div style="border-bottom: 1px solid rgb(8, 156, 210); border-top: 1px solid rgb(8, 156, 210); background-color: rgb(100, 208, 237); font-family: arial; font-size: 15px; opacity: 0.95; border-radius: 10px 0px 0px 10px; border-left: 1px solid rgb(8, 156, 210); color: rgb(0, 0, 0); font-weight: bold; margin-top: 26px; height: 47px; text-align: left; float: left; padding: 4px 0px 4px 50px; width: 652px;">  <div style="padding: 0px; float: right; text-align: left; margin: 10px 25px 0px 0px; *margin: 10px 10px 0px 0px;">    <input type="button" onclick="userview(\'yes\');" value="Proceed" style="margin-left: 5px; cursor: pointer; width: 85px;">    <input type="button" onclick="userview(\'no\');" value="No" style="margin-left:5px; width:35px; cursor:pointer">    <input type="button" style="margin-left: 5px; cursor: pointer; width: 58px;" value="Later" onclick="userview(\'later\');">  </div><p style="color: rgb(161, 49, 0); font-weight: normal; font-size: 22px; width: 425px; margin: 0px; padding: 0px;">Help us to enhance your online experience.</p><p style="width: 405px; text-align: center;"> We would love to hear your views and expectations.</p></div></div><div style="float:right;" onmouseover="mouseover();"><img src="//dir.imimg.com/gifs/feedback.png" width="21" height="108"/></div></div><div id="form" class="overlay simplemodal-data" style="left:481px; top:793px; display:none;"></div>';
	
	var cookieData = (readCookie('imDirFb1')) ? readCookie('imDirFb1') : 'undef';

	if (cookieData != 1){
		document.getElementById('fix').innerHTML = feedback_string;
		if (screen.width <= 800 && screen.height <= 600	){
			document.getElementById('fixmetoo').style.marginLeft = '-16px';
			document.getElementById('fixmetoo').style.top = '70%';
		}
	}
	
}

function userview(userOptions){

	var flag = 0;

	if (userOptions == 'later'){
		document.getElementById('feedback').style.display = "none";
		window.setTimeout('mouseover()', 120000);
	}
	else if (userOptions == 'yes'){
		flag = 1;
		createfeedbackcookie('imDirFb1',flag,16);
		var curl = document.URL;

		if(document.URL.match(/catprdsearch/g)){
			
			document.getElementById('form').innerHTML = '<div style="padding-left:238px; padding-top:50px;"><div style="width:620px; background-color: rgb(204, 204, 204); text-align: right; background-image: url(//dir.imimg.com/gifs/cmpy-bg.png); padding: 5px 5px 0px 0px; height: 24px;"><span style="border: 2px solid rgb(131, 132, 133); border-radius: 12px 12px 12px 12px; color: rgb(131, 132, 133); cursor: pointer; font-size: 15px; text-align: center; padding: 0px 4px;" onclick="popclose();">X</span></div><iframe id="myiframe" src="//docs.google.com/spreadsheet/embeddedform?formkey=dGU5NDFIWEh3WjFSWEdCYTFyWVRKcFE6MQ" width="625px" height="475px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>';

		}else {
			document.getElementById('form').innerHTML = '<div><div style="width:620px; background-color: rgb(204, 204, 204); text-align: right; background-image: url(//dir.imimg.com/gifs/cmpy-bg.png); padding: 5px 5px 0px 0px; height: 24px;"><span style="border: 2px solid rgb(131, 132, 133); border-radius: 12px 12px 12px 12px; color: rgb(131, 132, 133); cursor: pointer; font-size: 15px; text-align: center; padding: 0px 4px;" onclick="popclose();">X</span></div><iframe id="myiframe" src="//docs.google.com/spreadsheet/embeddedform?formkey=dGU5NDFIWEh3WjFSWEdCYTFyWVRKcFE6MQ" width="625px" height="475px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>';

		}

		show('form');
		document.getElementById('fix').innerHTML = '';
	}
	else if (userOptions == 'no'){

		document.getElementById('fix').innerHTML = '';
		flag = 1;
		createfeedbackcookie('imDirFb1',flag,16);
	}
}

function mouseover(){
	document.getElementById('feedback').style.display = "block";
}


function createfeedbackcookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else {
		var expires = "";
	}
	if(name == "imDirFb"){
	document.cookie = name+"="+value+expires+"; domain="+location.hostname;
	}else{
	document.cookie = name+"="+value+expires+"; domain="+location.hostname+"; path=/;";
	}
}


function info(divId){

	document.getElementById(divId).style.display ='block';

}
function info1(divId){

	document.getElementById(divId).style.display ='none';

}
/*new auto suggest added*/
function auto_ready()
{
	$(document).ready(function() {
			$('#select').change(function(){
				if($('#select').val() == "comp") {
				sugg.changePlaceholder('Enter Product / Company Name to Search ...');

				}
				else if($('#select').val() == "product") {
				sugg.changePlaceholder('Enter Product / Company Name to Search ...');
				}
				else if($('#select').val() == "tenders") {
				sugg.changePlaceholder('Enter keyword / company name to search preferred tenders ...');
				}
				else if($('#select').val() == "offer") {
				sugg.changePlaceholder('Enter Product / Service Offers to Search ...');

				}
				else if($('#select').val() == "leads") {
				sugg.changePlaceholder('Enter Product / Service Buy Leads to Search ...');
				}
				})
			$('#bottom_select').change(function(){
				if($('#bottom_select').val() == "comp") {
				sugg_bottom.changePlaceholder('Enter Product / Company Name to Search ...');

				}
				else if($('#bottom_select').val() == "product") {
				sugg_bottom.changePlaceholder('Enter Product / Company Name to Search ...');
				}
				else if($('#bottom_select').val() == "tenders") {
				sugg_bottom.changePlaceholder('Enter keyword / company name to search preferred tenders ...');
				}
				else if($('#bottom_select').val() == "offer") {
				sugg_bottom.changePlaceholder('Enter Product / Service Offers to Search ...');

				}
				else if($('#bottom_select').val() == "leads") {
				sugg_bottom.changePlaceholder('Enter Product / Service Buy Leads to Search ...');
				}
				})

	});
}

/*auto update the javascript */
$(window).load(function(){
//enableSupplier();
		$.ajaxSetup({cache: false});
		$.get("//utils.imimg.com/imjsv/js/imjsv.js", {}, function(data){}, 'script');
		});

/*autosuggest end*/

/* to resolve onload */
$('.res').load(function() {
		resize_hw(this, 100, 100);
		});


function blowup_show(){document.getElementById('message2').className="don";bhw();}
function blowup_off(){document.getElementById('message2').className="soff";}
var path = '';
var imgid = "0";
function imageset(id,img_path)
{
var nAgt = navigator.userAgent;
var patt = /Opera/;
if(patt.test(nAgt))
{
document.getElementById('loadimg').className="soff";
document.getElementById('imagediv').className="don";
}
else
{
document.getElementById('loadimg').className="don";
document.getElementById('imagediv').className="soff";
}

path = img_path;
imgid = id;
var pic = document.getElementById(imgid);
productName =pic.alt;
productName = unescape(productName);
if(productName.length > 40)
{
var c = productName.substring(0,40);
c = c + "...";
productName = c;
}
document.getElementById('imagediv').innerHTML='<img src="'+path+'" onload="loadimg()" id="bigimg">';
document.getElementById('prname').innerHTML=productName;
document.getElementById('mx').className="don";
document.getElementById('mx1').className="soff";}
function bhw()
{if( typeof( window.innerWidth ) == 'number' ) {
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
myWidth = document.body.clientWidth;
myHeight = document.body.clientHeight;}
var h = window.pageYOffset ||
document.body.scrollTop ||
document.documentElement.scrollTop;
var browserName=navigator.appName;
var imagedivheight=myHeight-60;
var test = myWidth*24/100;
var divwidth = myWidth-test;
var widthformizilla = myWidth-538;
var mozillawidth = widthformizilla-divwidth;
var iewidth = myWidth-516;
var mozillawidth1 = mozillawidth/2;
var iewidth1 = iewidth/2;
var mtop = h+7;
var aboveheight = myHeight-584;
var aboveheight1 = aboveheight/2+h;
document.getElementById('divscroll').style.height="500px";
document.getElementById('divscroll').style.width="504px";
document.getElementById('blwtbl').style.height="478px";
document.getElementById('message2').style.top=aboveheight1+'px';
document.getElementById('message2').style.left=iewidth1+'px';
document.getElementById('divscroll').name="miniwin";
if (myHeight <= 586)
{
document.getElementById('divscroll').style.height=imagedivheight+'px';
document.getElementById('divscroll').style.width="522px";
document.getElementById('blwtbl').style.height=imagedivheight+'px';
document.getElementById('message2').style.top=mtop+'px';
}}
function loadimg()
{
document.getElementById('loadimg').className="soff";
document.getElementById('imagediv').className="don";}

function load_img()
{
document.getElementById('load_img').className="soff";
document.getElementById('image_div').className="don";}

var hostname= location.hostname.match(/dev/) ? "//dev-utils.imimg.com" : location.hostname.match(/stg/) ? "//stg-utils.imimg.com" : "//utils.imimg.com" ;

isIE=document.all;
isNN=!document.all&&document.getElementById;
isN4=document.layers;
isHot=false;
function ddInit(e){
	topDog=isIE ? "BODY" : "HTML";
	whichDog=isIE ? document.all.message2 : document.getElementById("message2");
	hotDog=isIE ? event.srcElement : e.target;
	while (hotDog.id!="titleBar"&&hotDog.tagName!=topDog){
		hotDog=isIE ? hotDog.parentElement : hotDog.parentNode;}
	if (hotDog.id=="titleBar"){
		offsetx=isIE ? event.clientX : e.clientX;
		offsety=isIE ? event.clientY : e.clientY;
		nowX=parseInt(whichDog.style.left);
		nowY=parseInt(whichDog.style.top);
		ddEnabled=true;
		document.onmousemove=dd;}}
		var flag1 = 1;
		var flag2 = 1;
		var flag3 = 1;
function setimg()
{
	if(document.getElementById('w0'))
	{
		var abc = myImg.length;
		var abcn = abc-21;
		var abc1, abc2;
		if (abc < 20)
		{
			abc2 = abc;
		}
		else
		{
			abc2 = 20;
		}
		if (abc < 10)
		{
			abc1 = abc;
		}
		else
		{
			abc1 = 10;
		}

		var hs = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		if(700 < hs && hs < 1400 && flag1 == 1)
		{
			var i=0;
			for (i=0;i<=abc1-1;i++)
			{
				document.getElementById("w"+i).innerHTML= unescape(myImg[i]);
			}
			flag1++;
		}
		else if(1400 < hs && hs < 2000 && flag2 == 1)
		{
			var i=abc1;
			for (i=abc1;i<=abc2-1;i++)
			{
				document.getElementById("w"+i).innerHTML= unescape(myImg[i]);
			}
			flag2++;
		}
		else if(2000 < hs  && flag3 == 1)
		{
			var i=abc2;
			for (i=abc2;i<=abc-1;i++)
			{
				document.getElementById("w"+i).innerHTML= unescape(myImg[i]);
			}

			for (i=0;i<=abc1-1;i++)
			{
				document.getElementById("w"+i).innerHTML=unescape(myImg[i]);
			}

			for (i=abc1;i<=abc2-1;i++)
			{
				document.getElementById("w"+i).innerHTML= unescape(myImg[i]);
			}
			flag3++;
		}
	}
}
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
function sticky_bl_visibility_check()
{
	ims.stickyBLTime = 30;
        ims.stickyBLTimeShow = 0;
        var feedStorageTime = getIMFormObject('imform','stickybl');
        if(typeof(feedStorageTime) != "undefined"){
                var currentTime = Math.floor((new Date).getTime()/1000);
                var timedifference = currentTime - feedStorageTime;
                if(timedifference > 180)
                {
                        ims.stickyBLTimeShow = 1;
                }
        }
        else
        {
                ims.stickyBLTimeShow = 1;
        }
        if(ims.stickyBLTimeShow == 1)
	{
        	$("#buy_lead_gen_form").show();
	}
	else
	{
		$("#buy_lead_gen_form").hide();
	}
}
if($('#t7_head'))
{
// 	if(ims.grid_view == 1) {
		$('#t7_head').prepend('<div id="sticky_bl_close" class="cls_div" style="margin: -18px -9px 0px;">X</div>');
// 	}
 	sticky_bl_visibility_check();
}

//FEEDBACK SEARCH JS START
function add_feedback_link(){
$(document).ready(function(){
ims.search_id = '';
ims.fdbkTime = 30;
ims.feedbackShow = 0;
ims.autoFdbkShow = 0;
var feedStorageTime = getIMFormObject('imform','fdbk');
if(typeof(feedStorageTime) != "undefined"){
	var currentTime = Math.floor((new Date).getTime()/1000);
	var timedifference = currentTime - feedStorageTime;
	if(timedifference > 180)
	{
		ims.feedbackShow = 1;
		page.notMeQ.push(feedback_reset);
	}
}
else
{
	ims.feedbackShow = 1;
	page.notMeQ.push(feedback_reset);
}


if($(document).height() > 1950 && ims.feedbackShow == 1)
{
      $('#hdiv').append('<div id="main_div_fdbk"><div class="st-fdbk st-top animated" onclick="sticky_feedback();"><span class="fd-ico"></span><span class="text bg"></span><div id="close-fd" class="cls_div" style="margin: -5px 30px 0px;">X</div></div><div class="st-cont st-bottom" id="fdbk_form"><div class="srch_feedback goff" name="srch_feedback" id="srch_feedback" style="display:block;margin:20px 0"><div class="feedback_blk" style="display:block"> <div class="fb_div" style="display:block;" id="thx_ms"><form style="padding:0 5px;" name="form1" method="post" action=""><div id="r0" onClick="show_satisfy()" class="lable-blk write-rsltBg"> <span class="smile"><svg xmlns="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 126 126"><path stroke="#6D6E70" stroke-width="0" d="M43.211 48.641 c0-3.423 2.777-6.201 6.201-6.201c3.423 0 6.2 2.777 6.2 6.201c0 3.426-2.777 6.203-6.2 6.203  C45.988 54.844 43.211 52.067 43.211 48.641z M71.328 48.641c0-3.423 2.78-6.201 6.203-6.201c3.423 0 6.201 2.777 6.201 6.201  c0 3.426-2.777 6.203-6.201 6.203C74.108 54.844 71.328 52.067 71.328 48.641z M85.988 74.039  c-3.843 8.887-12.843 14.629-22.928 14.629c-10.301 0-19.354-5.771-23.064-14.703c-0.636-1.53 0.089-3.286 1.62-3.921  c0.376-0.156 0.766-0.23 1.15-0.23c1.176 0 2.292 0.696 2.771 1.85c2.777 6.685 9.655 11.004 17.523 11.004  c7.69 0 14.528-4.322 17.421-11.011c0.658-1.521 2.424-2.222 3.944-1.563C85.946 70.752 86.646 72.518 85.988 74.039z"/></svg></span> <span style="padding-left:10px;">Satisfied with search results</span></div> <div id="r1" onClick="show_not_satisfy()" class="lable-blk wrong-rsltBg" style="padding: 5px 0px 7px 4px;"> <div id="lbl3" style="display: block;padding:2px 0;"> <span class="sad"><svg xmlns="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 126 126"><path stroke="#6D6E70" stroke-width="0" d="M86.988 83.971  c0.658 1.521-0.042 3.287-1.563 3.944c-1.521 0.66-3.286-0.042-3.944-1.563c-2.893-6.689-9.731-11.011-17.421-11.011  c-7.868 0-14.747 4.319-17.523 11.004c-0.479 1.154-1.596 1.85-2.771 1.85c-0.384 0-0.773-0.074-1.15-0.23  c-1.53-0.636-2.255-2.392-1.62-3.921c3.71-8.932 12.764-14.703 23.064-14.703C74.145 69.342 83.145 75.084 86.988 83.971z   M43.211 48.641c0-3.423 2.777-6.201 6.201-6.201c3.423 0 6.2 2.777 6.2 6.201c0 3.426-2.777 6.203-6.2 6.203  C45.988 54.844 43.211 52.067 43.211 48.641z M71.328 48.641c0-3.423 2.78-6.201 6.203-6.201c3.423 0 6.201 2.777 6.201 6.201  c0 3.426-2.777 6.203-6.201 6.203C74.108 54.844 71.328 52.067 71.328 48.641z"/></svg></span> <span style="padding-left:10px;">Not satisfied with search results</span></div> </div> <div id="option"> <div style="font-weight:bold;color:red;">Not satisfied as</div><div class="lable-blk" id="r11" onClick="product_msg()">Required product was not found</div> <div  class="lable-blk" id="r12" onClick="location_msg()">Results are not from required location</div> <div id="r13" class="lable-blk" onClick="contact_msg()">Supplier not responding</div> <div  class="lable-blk" id="r14" onClick="other_msg()">Any other reason</div> </div>' 
            + '<div id="sugdisplay" style="display:none;"><p class="txt-heading" id="suggestion">Thank You!! Any other Suggestions:</p> <textarea  class="tx_area" name="suggestion" id="r2" onKeyUp="chk_suggest(2)" tabindex="58" style="height:40px;min-height:0;"></textarea> <p style=" clear:both;"></p><input type="button" onClick="submit_comment_feedback();" value="Submit" style="margin:9px 0; float:right; padding:0 37px; height:33px" id="Submit" tabindex="60"><p class="txt-heading" style="margin-top:5px;" id="fd_mob">Mobile: <input type="text" name="mob" id="mob" onblur=checkmob("mob"); placeholder="98xxx" style="width:110px; padding:0 2px; margin-top:3px; display:block;" tabindex="59" value=""></p> </div> </form> <p style=" clear:both; padding:0; margin:0;"></p></div><div class="thx_mess" style="display:none;" id="thx_ms1"><span><svg viewBox="0 0 126 126" height="40px" width="40px" y="0px" x="0px"><path d="M100.517,25.488 C79.829,4.799,46.17,4.799,25.486,25.483C4.798,46.169,4.8,79.829,25.488,100.517c20.682,20.684,54.341,20.684,75.027-0.004 C121.201,79.829,121.199,46.171,100.517,25.488z M94.728,94.728c-17.494,17.494-45.961,17.496-63.455,0.002 c-17.498-17.497-17.496-45.966,0-63.46c17.494-17.493,45.959-17.495,63.457,0.002C112.224,48.766,112.222,77.235,94.728,94.728z M43.211,48.641c0-3.423,2.777-6.201,6.201-6.201c3.423,0,6.2,2.777,6.2,6.201c0,3.426-2.777,6.203-6.2,6.203 C45.988,54.844,43.211,52.067,43.211,48.641z M71.328,48.641c0-3.423,2.78-6.201,6.203-6.201c3.423,0,6.201,2.777,6.201,6.201 c0,3.426-2.777,6.203-6.201,6.203C74.108,54.844,71.328,52.067,71.328,48.641z M85.988,74.039 c-3.843,8.887-12.843,14.629-22.928,14.629c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.53,0.089-3.286,1.62-3.921 c0.376-0.156,0.766-0.23,1.15-0.23c1.176,0,2.292,0.696,2.771,1.85c2.777,6.685,9.655,11.004,17.523,11.004 c7.69,0,14.528-4.322,17.421-11.011c0.658-1.521,2.424-2.222,3.944-1.563C85.946,70.752,86.646,72.518,85.988,74.039z" stroke-linejoin="round" stroke-linecap="round" stroke-width="0" stroke="#6D6E70"></svg></span><p style="padding-top:10px;font-weight:bold;color:#000;">Thank You!</p><span class="get-q">Get Instant Quote Now!</span><p style=" clear:both; padding:0; margin:0;"></p></div></div></div></div></div>');
      $('.get-q').click(function(event){event.preventDefault();openOnClickBLForm(); $(this).css("cursor","pointer");});
      new BLForm({ tempID:9, customHeadline:"", mcatName:ims.ss, catID:"ims.catid",modID:"$modid",mcatID:"ims.mcatid",afflID:"-40" });
feedback_reset();
	$("#r1").click(function(){ 
		$("#option").slideDown("slow"); 
		}); 
	$("#r0").click(function(){ 
		$("#option").slideUp("slow"); 
	}); 

}
	$('.wl-list-main').prepend('<div id="scrollTop"><div class="top-block"><img width="44" height="44" border="0" alt="" src="//utils.imimg.com/imsrchui/imgs/z.gif" class="arrowbg nr top-img"><div class="top-txt">Top</div></div></div>');
 		
	$('.top-block').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
        	return false;
	});
	$('#close-fd').click(function(){
		$("#main_div_fdbk").hide();
		setIMFormObject('imform','fdbk');
        	return false;
	});
	$('#sticky_bl_close').click(function(){
		$("#buy_lead_gen_form").hide();
		setIMFormObject('imform','stickybl');
        	return false;
	});

	 $(window).scroll(function(){
		 if ($(this).scrollTop() > 300)
		 {
		 	$('.top-block').fadeIn();
		 }
		 else
		 {
		 	$('.top-block').fadeOut();
		 }
// 		blformfixdiv();
        });
	});
}
function show_satisfy()
{
       $("#r0").hide();
       $("#r1").hide();
       $("#sugdisplay").show();
       $("#r2").focus();
       ims.rating='y';
       Submit_Feedback_Category();
}
function show_not_satisfy()
{
       $("#r0").hide();
       $("#r1").hide();
       $("#option").show();
       $("#option").attr('checked', false);
       ims.rating='n';
       $('#srch_feedback').css('margin','3px 0');
       $('#sugdisplay').css('margin','10px 0 0 0');
       Submit_Feedback_Category();
}

function product_msg()
{
       ims.com_catgory='product not found';
       $("#option").hide();
       $("#sugdisplay").show();
       $("#suggestion").text('Thank You!! Any other Suggestions:');
       $("#r2").focus();
       update_feedback_category();
}
function location_msg()
{
       ims.com_catgory='location not match';
       $("#option").hide();
       $("#sugdisplay").show();
       $("#suggestion").text('Thank You!! Any other Suggestions:');
       $("#r2").focus();
      update_feedback_category();
}
function contact_msg()
{
       ims.com_catgory='supplier not responding';
       $("#option").hide();
       $("#sugdisplay").show();
       $("#suggestion").text('Thank You!! Any other Suggestions:');
       $("#r2").focus();
      update_feedback_category();
}
function other_msg()
{
       ims.com_catgory='others';
       $("#option").hide();
       $("#sugdisplay").show();
       $("#suggestion").text('Thank You!! Any other Suggestions:');
       $("#r2").focus();
      update_feedback_category();
}                             

// this function is used for making bl-form sticky 
// function blformfixdiv()
// {
// 	if(ims.grid_view==0)
// 	{
// 		if($(document).height() > 2000)
// 		{
// 			var absolute_height = $(document).height() - $(window).height() - 620;
// 			var toph = $(document).height() - $(window).height() - 600;
// 			var header_height = $("#header").height() + 10;
// 			var upper_div = $('#upper_div').height() + 150;
// 			var top_height = $('.recentSupplier').height() + $("#fixhd").height() + 20;
// 			// condition1
// 			if ($(window).scrollTop() >= top_height && ($('#srch_feedback').height() < 250 || ims.feedbackClicked  || ims.feedbackSubmitted))
// 			{
// 				$('#buy_lead_gen_form').css({position: 'fixed',top: header_height+'px' });
// 			}
// 
// 			// condition2
// 			if ($(window).scrollTop() >= absolute_height && ($('#srch_feedback').height() < 250 || ims.feedbackClicked  || ims.feedbackSubmitted))
// 			{
// 				$('#buy_lead_gen_form').css({position: 'absolute',top: toph+'px'});
// 			}
// 			// condition3
// 			if ($(window).scrollTop() < top_height)
// 			{
// 				$('#buy_lead_gen_form').removeAttr("style");
// 			}
// 		}
// 	}
// }

function chk_suggest(id)
{
	document.getElementById('Submit').disabled = false;
	if(document.getElementById('r11').checked == true || document.getElementById('r12').checked == true || document.getElementById('r13').checked == true)
	{
		document.getElementById('r2').focus();
                $("#r2").removeClass("invalid").addClass("valid");
	}
	if(document.getElementById('r13').checked == true)
	{
		$('#suggestion').html('Please enter the wrong contact number <span style="color:red">(*)</span>:');
		$('#any_othr_rsn').hide('10');
		document.getElementById('r2').focus();
		$("#r2").removeClass("invalid").addClass("valid");
	}
	else if($('#any_othr_rsn').is(':hidden'))
	{
		$('#suggestion').html('Thank You!! Any other Suggestions:');
		$('#any_othr_rsn').show('10');
	}
	if(document.getElementById('r0').checked == true)
	{
		$('#suggestion').html('Thank You!! Any other Suggestions:');
		$('#r11').removeAttr('checked');
		$('#r12').removeAttr('checked');
		$('#r13').removeAttr('checked');
		$('#r14').removeAttr('checked');
		document.getElementById('r15').value = '';
		document.getElementById('r2').focus();
	}
	else if(document.getElementById('r14').checked == true && id != 2)
	{
		document.getElementById('r15').focus();
	}
	else if(document.getElementById('r2').value.length == 0 && document.getElementById('r0').checked == false && document.getElementById('r1').checked == false)
	{	document.getElementById('r2').focus();
		document.getElementById('Submit').disabled = true;
	}
}

function Result()
{
	document.getElementById("thx_ms").style.display="none";
	document.getElementById("thx_ms1").style.display="block";
// 	$('#close-fd').hide();
// 	$('.st-fdbk').removeAttr("onclick");
	setTimeout(function(){searchFeedback(); $(".st-fdbk").hide('fast');},20000);   
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').  exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function Submit_Feedback_Category()
{
	var xmlhttp;
	var url = document.URL;
	var query = getURLParameter('ss') || getURLParameter('search');
	var page = getURLParameter('pg') || 1;
	var total_res = document.getElementById('totalresult').value;
	//to get comma saparated dids..
	var anchs = document.getElementsByTagName("a");
	var did_string = '';
	var didArr = new Array();
	for (var i = 0, len = anchs.length; i < len; i++)
	{
		if ( anchs[i].id && anchs[i].id.indexOf("dispid") != -1)
		{
                        var did_m = anchs[i].id;
                        var dir_pairs = did_m.split("dispid");
			didArr.push(dir_pairs[1]);
		}
	}
	// keep only last 15 dids from whole results set
	var didArrLimit = didArr.slice(didArr.length-15);
	for(i=0; i < didArrLimit.length; i++)
	{
		did_string += didArrLimit[i]+",";
	}
	did_string= did_string.replace(/.$/,'');
        var rating = ims.rating;
        var n_comment_category = ims.com_catgory;
	var comment = document.getElementById('r2').value || '';
	var mobile = document.getElementById('mob').value || ''; 
	var cookie = document.cookie || '';
	var local_storage = new IMStore();
	var searches = local_storage.getData('ims','searches');
	var cities = local_storage.getData('ims','cities');
	if(searches)
	cookie += ';searches='+searches;
	if(cities)
	{
		cookie += ';cities='+cities; 
		cookie += ';'; 
	}
	var city = '';
	if( (cookieVal = readCookie("xnHist")) != "") city = getparamVal(cookieVal, "city");	
	var email = '';
	var val_imesh = readCookie("ImeshVisitor");
	if( (cookieVal = val_imesh) != "") email = getparamVal(cookieVal, "em");	
	var scroll = $(document).scrollTop();
	var full_name = '';
	if(val_imesh != "")
        {
                var last_name = (getparamVal(val_imesh, "ln")) ? ' '+getparamVal(val_imesh, "ln"): '';
                full_name = getparamVal(val_imesh, "fn")+last_name;
	}
        if(ims.search_id=='')
	{
	$.ajax({
			url: "/insert_feedback_to_db.php", 
			data: { 
					"query" : query ,
					"page" : page,
					"url" : url,
					"total_res" : total_res,
					"did_string" : did_string,
					"rating" : rating,
					"comment" : comment,
					"cookie" : cookie, 
					"scroll" : scroll,
					"mobile" : mobile,
					"category" : n_comment_category,
					"city" : city,
					"email" : email,
					"name" : full_name
				},
			type: "POST",
			success: function(data){
                                        ims.search_id = data;           
					//ims.feedbackSubmitted = 1;
					setIMFormObject('imform','fdbk');
					
				}
		});
	}
}
// this function is used for updating search feedback
function submit_comment_feedback()
{

    if(checkmob('mob') == true)
    {
       Result();
       var comment = document.getElementById('r2').value || '';
       var mobile = document.getElementById('mob').value || '';
       $.trim(mobile);
           $.ajax({
                       url: "/insert_feedback_to_db.php", 
                       data: { 
                                       "search_id": ims.search_id,
                                        "comment" : comment,
                                        "mobile" : mobile
                             },
                        type: "POST",
                        success: function(){        
                                        ims.feedbackSubmitted = 1;
					setIMFormObject('imform','fdbk');
                                        getLoginStringv1();
                                        }
                });
     
     return true;
     }else
     {
     return false;
     }
 }
//FEEDBACK SEARCH JS END 

//IMSEARCH THROUGH POST METHOD

function imsrch_by_post(form,searchstr,city,page,city_srch,sugg_off)
{
	if(searchstr)
	{
		var inp_ss = document.createElement('INPUT');
		inp_ss.setAttribute('name', 'search');
		inp_ss.setAttribute('value', unescape(searchstr));
		inp_ss.setAttribute('type', 'hidden');
		form.appendChild(inp_ss);
	}
	if(city)
	{
		var inp_city = document.createElement('INPUT');
		inp_city.setAttribute('name', 'cq');
		inp_city.setAttribute('value', city);
		inp_city.setAttribute('type', 'hidden');
		form.appendChild(inp_city);
	}
	if(city_srch)
	{
		var inp_city = document.createElement('INPUT');
		inp_city.setAttribute('name', 'searchstr_city');
		inp_city.setAttribute('value', city_srch);
		inp_city.setAttribute('type', 'hidden');
		form.appendChild(inp_city);
	}
	
	if(page)
	{	
		var inp_page = document.createElement('INPUT');
		inp_page.setAttribute('name', 'pg');
		inp_page.setAttribute('value', page);
		inp_page.setAttribute('type', 'hidden');
		form.appendChild(inp_page);
	}
	if(sugg_off)
	{
		var inp_so = document.createElement('INPUT');
		inp_so.setAttribute('name', 'so');
		inp_so.setAttribute('value', sugg_off);
		inp_so.setAttribute('type', 'hidden');
		form.appendChild(inp_so);
	}

	form.action = "/search.mp?search="+searchstr;
	form.submit();
	return false;

}

function SpellAccept(linkhref, form, strSrchstr, Suggestlink_word, sugg_off)
{
	var SuggestSrch = Suggestlink_word;
	SuggestSrch = SuggestSrch.replace(/\+/ig," ");
	if(form)
	{
		_gaq.push(['_trackEvent', 'Trac-Search-SpellAccept' , strSrchstr, SuggestSrch, 0]);
		if(sugg_off == 1)
		{
			strSrchstr = strSrchstr.replace(/\s+/g,"+");
			imsrch_by_post(form,escape(strSrchstr),'','','',sugg_off);	//search original keyword iff suggestions are off
		}
		else
		{
			imsrch_by_post(form,escape(Suggestlink_word));
		}
	}
	else
	{
		_gaq.push(['_trackEvent', 'Trac-Search-SpellAccept' , strSrchstr, SuggestSrch, 0]);
		setTimeout('document.location = "' + linkHref + '"', 100);
	}
}

function get_glusrInfo(glusr_ids)
{
$.ajax({
		url: "//dev-dir.indiamart.com/cgi/imsrch_glusrInfo.mp",
		dataType: "json",
		data: { 
			"glusr_info": glusr_ids 
			},
		type: "POST",

		success: function(jsonResult)
		{
			for(var gluserid in jsonResult)
			{
				if (jsonResult[""+gluserid]["ms"]["sinceyear"])
				{
					$(".csp-mem1", "#"+gluserid).html(jsonResult[""+gluserid]["ms"]["sinceyear"]);
					$(".yrm", "#"+gluserid).html(jsonResult[""+gluserid]["ms"]["membersince"]);
					$("#"+gluserid).css("display","inline-block");
				}	
			}
		}
	});
}

/* overlay.js */
//dirQueryFormGlobalCookie-1.5.js started 
//standard function that understands only dataform & S_ field names
// To call the same cookie for non-standard forms call makecookie1(form_name, elementHash) function

function elementHash()
{
	this.length = 0;
	this.items = new Array();
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof(arguments[i + 1]) != 'undefined') {
			this.items[arguments[i]] = arguments[i + 1];
			this.length++;
		}
	}

   	this.get = function(in_key)//find in_key in the hash and return its in_value that was set using .put function (ie send the default key name)
	{
		return this.items[in_key];
	}
}

//JS hash with global name and actual field name in form respectively

var customElementNamesHash = new elementHash("S_name","S_first_name","S_lname","S_last_name", "S_email", "S_email", "S_organization", "S_organization", "country", "S_countryname", "S_country", "S_country", "S_phone_country_code", "S_ccode", "S_phone_area_code", "S_acode", "S_phone", "S_phone", "S_mobile", "S_mobile", "Website" , "S_website", "S_salute", "S_salute", "S_cmobile", "S_cmobile", "S_streetaddress", "S_streetaddress", "S_city", "S_city", "S_state", "S_state", "S_pin", "S_pin", "Is_Cc", "Is_Cc");
var myObj=customElementNamesHash;

function makeCookie(form_name)
{
	if (document.getElementById('Is_Cc').checked == true ) {
		document.getElementById('Is_Cc').value='yes';
	} else {
		document.getElementById('Is_Cc').value='no';
	}

	var newCookie='';

	if (eval("document."+form_name+"."+myObj.get('S_name')))
	{
		var usrfname = (eval("document."+form_name+"."+myObj.get('S_name')+".value") == 'First Name')
				? '' : eval("document."+form_name+"."+myObj.get('S_name')+".value");
		newCookie  = "|fn="+usrfname;
	}
	if (eval("document."+form_name+"."+myObj.get('S_lname')))
	{
		var usrlname = (eval("document."+form_name+"."+myObj.get('S_lname')+".value") == 'Last Name') 
				? '' : eval("document."+form_name+"."+myObj.get('S_lname')+".value");
		newCookie +="|ln="+usrlname;
	}
	if (eval("document."+form_name+"."+myObj.get('S_email')))
	{
		newCookie +="|em="+eval("document."+form_name+"."+myObj.get('S_email')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_organization')))
	{
		newCookie +="|co="+eval("document."+form_name+"."+myObj.get('S_organization')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('country')))
	{
		newCookie +="|cn="+eval("document."+form_name+"."+myObj.get('country')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_country')))
	{
		newCookie +="|iso="+eval("document."+form_name+"."+myObj.get('S_country')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_cmobile')))
	{
		newCookie +="|phcc="+eval("document."+form_name+"."+myObj.get('S_cmobile')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_phone_area_code')))
	{
		var usrphacode = (eval("document."+form_name+"."+myObj.get('S_phone_area_code')+".value") == 'Area Code') 
				  ? '' : eval("document."+form_name+"."+myObj.get('S_phone_area_code')+".value");
		newCookie +="|phac="+usrphacode;
	}
	if (eval("document."+form_name+"."+myObj.get('S_phone')))
	{
		var usrphone = (eval("document."+form_name+"."+myObj.get('S_phone')+".value") == 'Phone Number') 
				? '' : eval("document."+form_name+"."+myObj.get('S_phone')+".value")
		newCookie +="|ph1="+usrphone;
	}
	if (eval("document."+form_name+"."+myObj.get('S_mobile')))
	{
		var usrmobile = (eval("document."+form_name+"."+myObj.get('S_mobile')+".value") == 'Mobile Number' || eval("document."+form_name+"."+myObj.get('S_mobile')+".value") == 'Mobile / Cell Phone Number') ? '' : eval("document."+form_name+"."+myObj.get('S_mobile')+".value");
		newCookie +="|mb1="+usrmobile;
	}
	if (eval("document."+form_name+"."+myObj.get('Website')))
	{
		newCookie +="|url="+eval("document."+form_name+"."+myObj.get('Website')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_salute')))
	{
		newCookie +="|slt="+eval("document."+form_name+"."+myObj.get('S_salute')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_streetaddress')))
	{
		newCookie +="|ad="+eval("document."+form_name+"."+myObj.get('S_streetaddress')+".value");
	}
	if (eval("document."+form_name+"."+myObj.get('S_city')))
	{
		var usercity = (eval("document."+form_name+"."+myObj.get('S_city')+".value") == 'City') 
				? '' : eval("document."+form_name+"."+myObj.get('S_city')+".value") 
		newCookie +="|ct="+usercity;
	}
	if (eval("document."+form_name+"."+myObj.get('S_state')))
	{
		var usrstate = (eval("document."+form_name+"."+myObj.get('S_state')+".value") == 'State') 
				? '' : eval("document."+form_name+"."+myObj.get('S_state')+".value")
		newCookie +="|st="+usrstate;
	}
	if (eval("document."+form_name+"."+myObj.get('S_pin')))
	{
		var usrpipncode = (eval("document."+form_name+"."+myObj.get('S_pin')+".value") == 'Postal Code') 
				  ? '' : eval("document."+form_name+"."+myObj.get('S_pin')+".value")
		newCookie +="|zp="+usrpipncode;
	}
	if (document.getElementById('Is_Cc').value) {
		var isccVal = document.getElementById('Is_Cc').value; 
		newCookie +="|iscc="+isccVal;
	}

	newCookie +="|";

	return newCookie;
}

function setGlobalCookie(name, value)
{

	expires = new Date();
	expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);
	
	if (value.length > 0) 
	{
		document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";" + "domain=.indiamart.com;path=/;";
	}
}


function getCookieIsCc() {
	if( (cookie = readCookie("ImeshVisitor")) != "")	
	{
		if ( getparamVal(cookie, "iscc") == 'yes' ) {
			document.getElementById('Is_Cc').checked = true;
		}
	}
	
	return true;
}


function getCookieValues(form_name)
{
	if( (cookie = readCookie("ImeshVisitor")) != "")
	{
		if( getparamVal(cookie, "cnv") != "" )
		{
			document.cookie = "";
		}
	}

	if( (cookie = readCookie("ImeshVisitor")) != "")	
	{
		if( getparamVal(cookie, "slt") != "" )
		{
			var v_salute = myObj.get('S_salute');
			var sltVal = getparamVal(cookie, "slt");
			sltVal = getparamVal(cookie, "slt").replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');
			for (var i = eval("document."+form_name+"." + v_salute).options.length -1; i > -1; i--) 
			{
              			if ( eval("document."+form_name+"." + v_salute).options[i].value == sltVal) 
				{
					eval("document."+form_name+"." + v_salute).value = sltVal;
					break;
				}
            		}
		}
		if( getparamVal(cookie, "fn") != "" )
		{
			var sname = myObj.get('S_name');
			if(eval("document."+form_name+"." + sname)){
				eval("document."+form_name+"." + sname).value = getparamVal(cookie, "fn");
			}
		}
		if ( getparamVal(cookie, "ln") != "" )
		{
			var lname = myObj.get('S_lname');
			if(eval("document."+form_name+"." + lname)){
				eval("document."+form_name+"." + lname).value = getparamVal(cookie, "ln");
			}
		}
		if ( getparamVal(cookie, "em") != "" )
		{
			var email = myObj.get('S_email');
			if(eval("document."+form_name+"." + email)){
				eval("document."+form_name+"." + email).value = getparamVal(cookie, "em");
			}
		}
		if ( getparamVal(cookie, "co") != "" ) 
		{
			var company = myObj.get('S_organization');
			if(eval("document."+form_name+"." + company)){
				eval("document."+form_name+"." + company).value = getparamVal(cookie, "co");
			}
		}
		if ( getparamVal(cookie, "phcc") != "" ) 
		{
			var phcncode = myObj.get('S_phone_country_code');
			var mobileareacode = myObj.get('S_cmobile');

			if(!getparamVal(cookie, "phcc").match(/\+/))
			{
				if(eval("document."+form_name+"." + phcncode)){
					eval("document."+form_name+"." + phcncode).value =  '+' + getparamVal(cookie, "phcc");
				}
				if(eval("document."+form_name+"." + mobileareacode)){
					eval("document."+form_name+"." + mobileareacode).value = '+' + getparamVal(cookie, "phcc");
				}
			}
			else
			{
				if(eval("document."+form_name+"." + phcncode)){
					eval("document."+form_name+"." + phcncode).value =  getparamVal(cookie, "phcc");
				}
				if(eval("document."+form_name+"." + mobileareacode)){
					eval("document."+form_name+"." + mobileareacode).value = getparamVal(cookie, "phcc");
				}
			}
		}
		if ( getparamVal(cookie, "mb1") != "" ) 
		{
			var mobile1 = myObj.get('S_mobile');
			if(eval("document."+form_name+"." + mobile1)){
				eval("document."+form_name+"." + mobile1).value = getparamVal(cookie, "mb1");
			}	
		}
		if ( getparamVal(cookie, "url") != "" ) 
		{
			var website = myObj.get('Website');
			if(eval("document."+form_name+"." + website)){
				eval("document."+form_name+"." + website).value = getparamVal(cookie, "url");
			}
		}
		if ( getparamVal(cookie, "cn") != "" ) 
		{
			var country = myObj.get('country'); // country text value
			if(eval("document."+form_name+"." + country)){
				eval("document."+form_name+"." + country).value = getparamVal(cookie, "cn");
			}
		}
		if ( getparamVal(cookie, "iso") != "" || getparamVal(cookie, "cnv") != "" ) 
		{
			if (getparamVal(cookie, "iso")  == 'IN')
                        {
                               if(overlayFormTyp == 'imgZoomForm'){
				document.getElementById('citystate').style.display='inline';
				document.getElementById('citystate1').style.display='inline';
            			}else{
				document.getElementById('citystate').style.display='block';
				document.getElementById('citystate1').style.display='block';
            			}
                        }
                        else
                        {
				if(overlayFormTyp == 'imgZoomForm'){
					document.getElementById('S_countryname').style.width='';
				}
                                document.getElementById('citystate').style.display = 'none';
                                document.getElementById('citystate1').style.display = 'none';
                                document.getElementById('city_others').value='';
                                document.getElementById('state_others').value='';
                                document.getElementById('form_city').value='';
                                document.getElementById('form_state').value='';
                        }

			var countryVal = myObj.get('S_country'); // country value
			if(eval("document."+form_name+"." + countryVal)){
				eval("document."+form_name+"." + countryVal).value=getparamVal(cookie, "iso") || getparamVal(cookie, "cnv");
			}
		} else {
			// if iso OR cnv is blank then we need to put blank country field
			var country = myObj.get('country'); // country text value
			eval("document."+form_name+"." + country).value = "";
		}
		if ( getparamVal(cookie, "ad") != "" ) 
		{
			var address = myObj.get('S_streetaddress');
			if(eval("document."+form_name+"." + address)){
				eval("document."+form_name+"." + address).value = getparamVal(cookie, "ad");
			}
		}
		if ( getparamVal(cookie, "ct") != "" ) 
		{
			var city = myObj.get('S_city');
			if(eval("document."+form_name+"." + city)){
				eval("document."+form_name+"." + city).value = getparamVal(cookie, "ct");
			}
		}
		if ( getparamVal(cookie, "st") != "" ) 
		{
			var state = myObj.get('S_state');
			if(eval("document."+form_name+"." + state)){
				eval("document."+form_name+"." + state).value = getparamVal(cookie, "st");
			}
		}
		if ( getparamVal(cookie, "zp") != "" ) 
		{
			var zipcode = myObj.get('S_pin');
			if(eval("document."+form_name+"." + zipcode)){
				eval("document."+form_name+"." + zipcode).value = getparamVal(cookie, "zp");
			}
		}
	}

	return true;
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

/*
 * This cookie is for the send enquiry 
 * to store the gluserid to differentiate the users
 * between sent enquiry and not sent
*/



function eraseCookie(name) {
	createCookie(name,"undef",-1);
}


var hostname= location.hostname.match(/dev/) ? "//dev-utils.imimg.com" : location.hostname.match(/stg/) ? "//stg-utils.imimg.com" : "//utils.imimg.com" ;



var webAddress = location.hostname;
var mediaUrl = '';
if ( webAddress == 'dev-dir.indiamart.com' ) {
	mediaUrl = 'dev-dir.imimg.com';
} else if ( webAddress == 'stg-dir.indiamart.com' ) {
	mediaUrl = 'stg-dir.imimg.com';
} else {
	mediaUrl = 'dir.imimg.com';
}
mediaUrl = '//' + mediaUrl;


var overlaydivid = 'overlayhtml'; //-- overlay div id this is mentioned on the html page
var overlayFormTyp = '';

function myfocus(inputbox)
{
        if(document.getElementById('ex_act').style.display == 'block' && inputbox == 'button'){
            document.getElementById('button1').focus();
        }else{
            document.getElementById(inputbox).focus();
        }
        return false;
}

function onselect_county_enq(event, ui){
        this.value = ui.item.value;
        document.getElementById('S_country_name').value = ui.item.data.iso;
        if (ui.item.data.iso == 'IN')
        {

	 	if(overlayFormTyp == 'imgZoomForm'){
			document.getElementById('citystate').style.display='inline';
			document.getElementById('citystate1').style.display='inline';
			document.getElementById('S_countryname').style.width='114px';
            	}else{
			document.getElementById('citystate').style.display='block';
			document.getElementById('citystate1').style.display='block';
            	}
             document.getElementById("city_others").focus();
        }
        else
        {
		if(overlayFormTyp == 'imgZoomForm'){
			document.getElementById('S_countryname').style.width='';
		}
                document.getElementById('citystate').style.display = 'none';
                document.getElementById('citystate1').style.display = 'none';
                document.getElementById('city_others').value='';
                document.getElementById('state_others').value='';
                document.getElementById('form_city').value='';
                document.getElementById('form_state').value='';
                document.getElementById("S_mobile").focus();
        }
	  document.getElementById('S_cmobile').value = '+'+ui.item.data.isd;	
}

function onselect_city(event, ui){
			if(typeof(ui) != "undefined")
	{
		if(typeof(ui.item.data) != "undefined")
		{
			this.value = ui.item.value;
			document.getElementById('state_others').setAttribute('readonly', 'readonly');
			document.getElementById('state_others').value = ui.item.data.state;
			document.getElementById('form_city').value = ui.item.data.id;
			document.getElementById('form_state').value = ui.item.data.stateid;
			document.getElementById('S_mobile').focus();
		}
		else
		{
			document.getElementById('form_city').value = '';
			document.getElementById('form_state').value = '';
			document.getElementById('state_others').removeAttribute("readonly",0);
		}
	}
}


function onExplicitChangeCountryEnq(event, ui)
{
        if(ui.item)
        {
                this.value = ui.item.value;
                document.getElementById('S_country_name').value = ui.item.data.iso;
                document.getElementById('S_countryname').value = ui.item.value.substr(0,1).toUpperCase()+ui.item.value.substr(1);
                if (ui.item.data.iso == 'IN')
                {
                        if(overlayFormTyp == 'imgZoomForm'){
				document.getElementById('citystate').style.display='inline';
				document.getElementById('citystate1').style.display='inline';
				document.getElementById('S_countryname').style.width='114px';
            		}else{
				document.getElementById('citystate').style.display='block';
				document.getElementById('citystate1').style.display='block';
            		}
                       	if(document.getElementById('S_email').value != "")
			{
				document.getElementById('city_others').focus();
			}
                }
                else
                {
			if(overlayFormTyp == 'imgZoomForm')
			{
				document.getElementById('S_countryname').style.width='';
			}
                        document.getElementById('citystate').style.display = 'none';
                        document.getElementById('citystate1').style.display = 'none';
                        document.getElementById('city_others').value='';
                        document.getElementById('state_others').value='';
                        document.getElementById('form_city').value='';
                        document.getElementById('form_state').value='';
                       	if(document.getElementById('S_email').value != "")
			{
				document.getElementById('S_mobile').focus();
			}
                }
		  document.getElementById('S_cmobile').value = '+'+ui.item.data.isd;
        }
        else
        {
                document.getElementById("S_acode").value = '';
		document.getElementById('S_ccode').value = '';
		document.getElementById('S_cmobile').value ='';
        }
}

function onExplicitChangeCityEnq(event, ui)
{
	if(typeof(ui) != "undefined")
	{
		if(typeof(ui.item.data) != "undefined")
		{
			document.getElementById('state_others').setAttribute('readonly', 'readonly');
			document.getElementById('state_others').value = ui.item.data.state;
			document.getElementById('form_city').value = ui.item.data.id;
			document.getElementById('form_state').value = ui.item.data.stateid;
		}
		else
		{
			document.getElementById('form_city').value = '';
			document.getElementById('form_state').value = '';
			document.getElementById('state_others').removeAttribute("readonly",0);
		}
	}
}

function openOverlay(qstring, comp, posid, overlay_typ, zoom_title) {
	overlayReset();
	var value = readLoginCookie('v4iilex');
	var userStatus = '';

	if(value == null || value == "") {
	userStatus = '';
	} else {
	userStatus = 'login';
	}

	document.getElementById('black').style.display="block";
	document.getElementById('blacklayer').style.display="block";

	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
		if(document.getElementById('select').value=='product'){
		var selected_val = 'Products';
		}

		if(document.getElementById('select').value=='comp'){
		var selected_val = 'Suppliers';
		}

		if(document.getElementById('select').value=='offer'){
		var selected_val = 'Sell Offers';
		}

		if(document.getElementById('select').value=='leads'){
		var selected_val = 'Buy Leads';
		}

		if(document.getElementById('select').value=='tenders'){
		var selected_val = 'Tenders';
		}

		document.getElementById('text').value=    selected_val;
		document.getElementById('select').style.display="none";
		document.getElementById('text').style.display="block";
		document.getElementById('bottom_select').style.display="none";
		document.getElementById('bottom_text').style.display="block";
		//- stoping scroll in case of IE6
		if ((screen.width<=800) && (screen.height<=600)) {
			var scrolltop=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
			document.getElementById('layer').style.top=(scrolltop + 30) + 'px';
			document.getElementById('layer').style.left='60px';
			if(document.documentElement) {
				document.documentElement.style.overflow = "";
			} else if(document.body) {
				document.body.style.overflow = "";
			}
			document.getElementById('layer').style.position='absolute';
		} else {
			if(document.documentElement) {  
				document.documentElement.scroll = "no";
				document.documentElement.style.overflow = "hidden";
			} else if(document.body) {
				document.body.scroll = "no";
				document.body.style.overflow = "hidden";
			}
		}
	}

	scrolltop=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
	totalheight= document.body.scrollHeight;
	document.getElementById('black').style.height=totalheight+'px';

	var overlayHtml;
	if(overlay_typ == 'imgZoomForm')
	{
		document.getElementById("overlay_close").style.display="none";
		overlayFormTyp = overlay_typ;
		var objgetzoom = getzoomFormHtml(userStatus, qstring, comp, posid, zoom_title);
		var zoomEnqHtml = objgetzoom.enqHtml;
		var paramstring = objgetzoom.paramstr;
		document.getElementById(overlaydivid).innerHTML = zoomEnqHtml;

		$(".enter-submit" ).bind( "keydown", function(event) {
    	 	var codek = (event.keyCode ? event.keyCode : event.which);
   		if(codek == '13'){ clickedByUser('new', paramstring, posid);}});
			
	}else
	{	document.getElementById("overlay_close").style.display="block";
		overlayHtml = getEnquiryPageHtml(userStatus, qstring, comp, posid);
		overlayFormTyp = overlay_typ;
		document.getElementById(overlaydivid).innerHTML = overlayHtml;
	}

	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
		getTopLeftMarginIE6();
	} else {
		getTopMarginLayerHeight();
	}
	
	document.getElementById('Descriptions').focus();

	document.getElementById('loading').className="g9 bo off"; //-- loading message

	if(userStatus != 'login')
	{
		document.getElementById('which_submit').value = 'quick_visitor';
		getCookieValues('dataform'); // - to read cookie value if cookie is set before
		if(document.getElementById('S_email').value == "")
		{
			if(document.getElementById('S_country_name').value  == 'IN')
			{
				if(overlayFormTyp == 'imgZoomForm'){
				document.getElementById('citystate').style.display='inline';
				document.getElementById('citystate1').style.display='inline';
				}else{
				document.getElementById('citystate').style.display='block';
				document.getElementById('citystate1').style.display='block';
				}
			}
			else
			{
				if(overlayFormTyp == 'imgZoomForm'){
					document.getElementById('S_countryname').style.width='';
				}
				document.getElementById('citystate').style.display = 'none';
				document.getElementById('citystate1').style.display = 'none';
				document.getElementById('city_others').value='';
				document.getElementById('state_others').value='';
				document.getElementById('form_city').value='';
				document.getElementById('form_state').value='';
			}
		}

		try {
			document.getElementById('errmsg').style.display='none'; // -- if err msg exists
		} catch(e){
		}
	}

	
	 $('html').css({overflow:"hidden"});
   	 $('body').css({"overflow-y":"scroll","width":"100%"});
	
	
	var sugg_country = new Suggester({"element":"S_countryname", "onSelect":onselect_county_enq, "onExplicitChange":onExplicitChangeCountryEnq, fields: "isd,iso", "classPlaceholder":"1",minStringLengthToFetchSuggestion:1,rowsToDisplay:10, type: "country", minStringLengthToDisplaySuggestion:1, method: "beginWord",autocompleteClass:"cls-enq"});

	var sugg_city = new Suggester({"element":"city_others", "onSelect":onselect_city,
	"onExplicitChange":onExplicitChangeCityEnq, minStringLengthToFetchSuggestion:1, type: "city", fields: "state,id,stateid", minStringLengthToDisplaySuggestion:1,displaySeparator:" >> ",displayFields:"value,state", autocompleteClass:"cls-enq"});
	/* -- For New Overlay End -- */

	if(userStatus != 'login' && document.getElementById('S_email').value == "")
	{	
		$("#S_countryname").blur();
		
	}

	//-- GA code invoke start
	invokeRequestForGaCode('/cgi/enquiry-form.mp');	
	//-- GA code invoke end

	if ( userStatus == 'login' ) getLoginedUserContactInfo('yourcontactinfo');
	document.getElementById('Is_Cc').value='';

	try {
		getCookieIsCc(); // set is_cc value checked from cookie
	} catch (e){
	}

}

function hide_img(form){

	form.Descriptions.className='form-textarea bgNone';

}
function show_img(form){
	form.Descriptions.className='form-textarea bg';
}



function getzoomFormHtml ( userStatus, qstring, comp, posid, zoom_title ) 
{
	//var zoom_ttl = getQueryStringParsedData(qstring,"zoom_title");
	var zoom_image = getQueryStringParsedData(qstring, "zoom_img");
	var display_image = getQueryStringParsedData(qstring, "display_image");
	zoom_title = unescape(zoom_title);
	var enqHtml = '';
	var issetValue = ( userStatus == 'login' ) ? 'yes' : 'no';
	var hiddenQstr = getUlrQueryString(qstring, comp, issetValue);
	hiddenQstr = hiddenQstr.replace(/\'|%27/g, "\\'");

	 enqHtml = '<div align="center" class="don" style="top: 3%; z-index: 2000;"  id="message2"><table cellspacing="0" cellpadding="0" border="0" align="center" id="tableheight"><tbody><tr><td align="center"><table width="100%" cellspacing="0" cellpadding="0" border="0" class="bgclor"><tbody><tr><td align="center"><table width="100%" height="35" cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td style="cursor:move" id="titleBar"><ilayer onselectstart="return false" width="100%"></ilayer><layer onmouseout="isHot=false" onmouseover="isHot=true;if (isN4) ddN4(message2)" width="100%"><div class="pr-txt" id="prname">'+zoom_title+'</div></layer></td><td width="100" align="right" style="padding-right:7px;"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><div onclick="layerclose()"><span style="margin: 5px; position: relative; border: 2px solid rgb(204, 204, 204); color: rgb(68, 68, 68);" class="cls-img">X</span></div></td></tr></tbody></table></td></tr></tbody></table><div align="center" id="divscroll" class="image_div" style="width: 905px;"><table cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center" id="blwtbl"><tbody><tr><td width="58%" align="center"><div class="don" style="font-family: arial; font-size: 15px;" id="load_img"><div class="image-center"><img src="'+display_image+'"><br style="clear:both;"><br><img src="'+hostname+'/imsrchui/imgs/loader-progress-gray.gif"></div></div><div id="image_div" class="doff"><div class="image-center"><img id="big_img" onload="load_img();" src="'+zoom_image+'"></div></div></td><td align="left" style="vertical-align:top;">';
		
	if(userStatus == 'login')
	{ 
		enqHtml += '<!--form block starts here--><form name="dataform"><div class="form-container" name="highlight" align="left"><p class="form-caption">Send E-mail </p>';
		enqHtml +='<p class="err-msg-input" id="errmsg"></p>';

		enqHtml +='<div class="form-block"><p class="form-tagname" style="width:100%">Describe your requirement:</p><textarea  onkeydown="Javascript:if(event.shiftKey &amp;&amp; event.keyCode==9) {return myfocus(\'button\');} hide_img(document.dataform);" onkeypress="return charLimit(this,\'2000\')" onblur="Javascript:if(document.dataform.Descriptions.value==\'\'){show_img(document.dataform);}" onkeyup="Javascript:if(document.dataform.Descriptions.value==\'\'){show_img(document.dataform);} characterCount(this,\'2000\')" onpaste="hide_img(document.dataform);" id="Descriptions" name="Descriptions" style="resize: none;" class="bg form-textarea" tabindex="11"></textarea></div><input id="which_submit" type="hidden" value="submit_member" name="which_submit"><input type="hidden" name="Is_Cc" id="Is_Cc" value="">';

		enqHtml += '<div align="LEFT" class="loggedin-container"><div align="LEFT" class="contact-info"><b>Your contact information:</b></div><div id="yourcontactinfo"></div></div>';

		enqHtml +='<center><div id="b_sub" style="margin:15px 0 0px; display:block;">';
		//submit button
		enqHtml +='<input id="button" name="submit_member" value="Send Enquiry" class="button-position button2" type="button" style="width:182px;" tabindex="12" onkeydown="Javascript:if((!event.shiftKey) && event.keyCode==9) {return myfocus(\'Descriptions\');}"  onclick="return clickedByUser(\'logined\',\''+ hiddenQstr +'\',\''+ posid +'\');">';

		enqHtml +='</div><div id="loading" style="text-align:center;margin:14px 0;" class="bo"><img src="'+hostname+'/imsrchui/imgs/loading-small.gif" align="absmiddle"><b> Please Wait...</b></div></center></div></form>';

		enqHtml += '</td></tr></tbody></table></div><div id="comp_name" class="comp-nm"><i>By : '+comp+'</i></div></td></tr></tbody></table></td></tr></tbody></table></div>';

	}else
	{
		enqHtml += '<!--form block starts here--><form name="dataform"><div class="form-container" name="highlight" align="left"><p class="form-caption">Send E-mail </p>';
		enqHtml +='<p class="err-msg-input" id="errmsg"></p>';

		enqHtml += '<div class="form-block"><p class="form-tagname" style= "width:100%">Describe your requirement:</p><textarea  onkeydown="Javascript:if(event.shiftKey &amp;&amp; event.keyCode==9) {return myfocus(\'button\');} hide_img(document.dataform);" onkeypress="return charLimit(this,\'2000\')" onkeyup="Javascript:if(document.dataform.Descriptions.value==\'\'){show_img(document.dataform);} characterCount(this,\'2000\')" onpaste="hide_img(document.dataform);" onblur="Javascript:if(document.dataform.Descriptions.value==\'\'){show_img(document.dataform);}" id="Descriptions" name="Descriptions" style="resize: none;" class="bg form-textarea" tabindex="11"></textarea></div><div class="form-block"><p class="form-tagname"><span class="form-span">*</span>Name:</p><select gtbfieldid="103" tabindex="12" name="S_salute" id="S_salute" class="form-input enter-submit" style="width:50px; padding:3px 0"><option value="Mr.">Mr.</option><option value="Ms.">Ms.</option><option value="Mrs.">Mrs.</option><option value="Dr.">Dr.</option></select><input type="text" gtbfieldid="104" maxlength="20" id="S_first_name" name="S_first_name" class="form-input enter-submit" tabindex="13" placeholder="First name" style="width:101px;"> <input type="text" gtbfieldid="105" maxlength="20" id="S_last_name" name="S_last_name" tabindex="14" class="form-input enter-submit" value="" placeholder="Last name" style="width:73px;"></div><div class="form-block"><p class="form-tagname"><span class="form-span">*</span>Email:</p>';

		enqHtml +='<input gtbfieldid="106" maxlength="60" id="S_email" name="S_email" tabindex="15" type="text" class="form-input enter-submit" placeholder="Enter your Email id"></div><div class="form-block"><p class="form-tagname">Company:</p><input gtbfieldid="107" id="S_organization" name="S_organization" maxlength="60" tabindex="16" type="text" class="form-input enter-submit" placeholder="Company Name"> </div><div class="form-block"><p class="form-tagname">Website:</p><input gtbfieldid="108" maxlength="80" name="S_website" tabindex="17" id="S_website" type="text" class="form-input enter-submit" placeholder="Website Name"></div><div class="form-block"><p class="form-tagname"><span class="form-span">*</span>Country&nbsp;<span id="citystate">/<span class="form-span"></span>City:</span></p>';

		enqHtml +='<input type="text" maxlength="40" tabindex="18" value="'+ims.geo_cn+'" autocomplete="off" id="S_countryname" name="S_countryname" class="form-input" style="width: 114px;"><input id="S_country_name" type="hidden" value="'+ims.geo_cc+'" name="S_country">';

		enqHtml +='<div id="citystate1"><input type="text" style="width: 111px; margin-left:2px;" class="form-input" name="S_city" size="5" id="city_others" autocomplete="off" maxlength="30" tabindex="19" role="textbox" placeholder="City"><input type="hidden" placeholder="State" style="width: 138px; margin-left:2px;" class="form-input" readonly="readonly" name="S_state" size="4" id="state_others" autocomplete="off" maxlength="30" tabindex="20"></div>';

		enqHtml +='</div><div class="form-block"><p class="form-tagname"><span class="form-span">*</span>Mobile:</p>';

		enqHtml +='<input type="text" tabindex="21" readonly="readonly" id="S_cmobile" value="" name="S_cmobile" gtbfieldid="112" class="form-input enter-submit" style="width: 46px; background-color:#eee;text-align: center;" disabled="disabled">';

		enqHtml +='<input type="text" tabindex="22" maxlength="40" size="16" name="S_mobile" id="S_mobile" gtbfieldid="113"  class="form-input enter-submit" style="width: 180px;margin-left:2px;" placeholder="Mobile Number">';

		enqHtml +='</div>';

		//submit button
		enqHtml +='<center><div id="b_sub" style="margin:15px 0 0px"><input id="button" name="submit_quick_visitor" value="Send Enquiry" class="button-position button2" type="button" style="width:182px;" tabindex="23" onkeydown="Javascript:if((!event.shiftKey) && event.keyCode==9) {return myfocus(\'Descriptions\');}"  onclick="return clickedByUser(\'new\',\'' + hiddenQstr + "','" + posid + '\');">';

		enqHtml +='</div><div id="loading" style="text-align:center;margin:14px 0;" class="bo"><img src="' + hostname + '/imsrchui/imgs/loading-small.gif" align="absmiddle" alt="loading"><b> Please Wait...</b></div></center></div><div style="display:none"><input id="which_submit" type="hidden" value="quick_visitor" name="which_submit"><input type="hidden" name="Is_Cc" id="Is_Cc" value=""><input type="hidden" name="S_acode" id="S_acode" value=""><input type="hidden" name="S_ccode" id="S_ccode" value=""><input type="hidden" name="S_phone" id="S_phone" value=""><input type="hidden" name="form_city" id="form_city" value=""><input type="hidden" name="form_state" id="form_state" value=""></div></form>';

		enqHtml += '</td></tr></tbody></table></div><div id="comp_name" class="comp-nm"><i>By : '+comp+'</i></div></td></tr></tbody></table></td></tr></tbody></table></div>';
	
	}

return {'enqHtml':enqHtml, 'paramstr':hiddenQstr};
}

//-- this function to call at the time of submit button
function postEnquiry( queryString, posid ) {
	var url = '/cgi/query-automail-overlay-new.mp';
	postRequest(url, queryString, overlaydivid, posid);
}

function overlayReset () {
	document.getElementById(overlaydivid).innerHTML = '';
}


//-- ajax function to make calls for usrls
function postRequest ( url, queryString, divid, posid ) {
	//alert(url+"<br/>"+queryString+"<br/>"+divid+"<br/>"+posid);
	var xmlhttp;
	var htmlData = '';
	var responseCode = 0;
	
	if ( window.XMLHttpRequest ) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if ( url != '' && url != 'undefined' ) {
		var rand = Math.random();
		queryString = queryString;// + "&t=" + rand; 
		//xmlhttp.open("GET", postUrl, true);
		xmlhttp.open("POST", url, true);

		//Send the proper header information along with the request
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
			{ 
				try 
				{
					document.getElementById('loading').className="g9 bo off"; //-- loading message
					if(document.getElementById('loadinge')){ document.getElementById('loadinge').className="g9 bo off";} //-- loading message
					if(document.getElementById('button1')){ document.getElementById('button1').className="snd-enq off";}
					if(overlayFormTyp != 'imgZoomForm' ){
					document.getElementById('button').className="snd-enq off";
					}else{
						document.getElementById('button').style.display='none';
					}
				} catch(e) {
				
				}
				if ( xmlhttp.responseText != '' && xmlhttp.responseText != 'undefined' ) 
				{
					document.getElementById('loading').style.display='none';
					if(document.getElementById('loadinge')){
					document.getElementById('loadinge').style.display='none';
					}
					if (xmlhttp.responseText.match(/^Error/)) {
						document.getElementById('button').style.display="block";
						if(document.getElementById('button1')){
						document.getElementById('button1').style.display="block";}
						document.getElementById('errmsg').innerHTML = xmlhttp.responseText; //-'There is some problem please contact the right peron!';
						document.getElementById('errmsg').style.display='block'; //- captcha string did not matched;
						try{
							document.getElementById('S_username').value='';
							document.getElementById('S_password').value='';
						} catch (e) {
						}
					} else if ( xmlhttp.responseText == 0 ) {
						document.getElementById(divid).innerHTML = error(); //-'There is some problem please contact the right peron!';
					} else if ( xmlhttp.responseText.match(/Your are not authorized login user/) || xmlhttp.responseText.match(/id="disabled-user"/) ) {
						document.getElementById('overlayhtml').innerHTML = errorDisabledUser(); //-'There is some problem please contact the right peron!';
					} else {
						if(!!document.getElementById('ex_link')) document.getElementById('ex_link').removeAttribute("href");
						if(!!document.getElementById('nu_link')) document.getElementById('nu_link').removeAttribute("href");
					document.getElementById(divid).innerHTML = xmlhttp.responseText.replace(/Content-type: text\/html\n\n/ig, '');
						SendEnquiryChangeColor(posid);
						getLoginString();
						getNewContent();
						responseCode = 1;
						try {
							document.getElementById('overlay_close').style.display='block';
							overlayFormTyp = 'senEnqform';
							if (document.getElementById('successthanks')) {
								invokeRequestForGaCode('/cgi/query-automail-overlay-new.mp');
							} else {
								invokeRequestForGaCode('/cgi/additional-info-thankyou.mp');
							}
							if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
								getTopLeftMarginIE6();
							} else {
								getTopMarginLayerHeight();
							}
						} catch ( e ) {
						}
					}
				} else { 
					document.getElementById(divid).innerHTML = error(); //-'There is some problem please contact the right peron!';
					responseCode = 0;
				}
				
				if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
					getTopLeftMarginIE6();
				} else {
					getTopMarginLayerHeight();
				}
			} else 
			{
				try {
					document.getElementById('loading').style.visibility="visible"; //-- loading message
					document.getElementById('loading').className="g9 bo"; //-- loading message
					if(document.getElementById('loadinge')) document.getElementById('loadinge').style.visibility="visible";
					if(document.getElementById('loadinge')) document.getElementById('loadinge').className="g9 bo";
					if(document.getElementById('button1')) document.getElementById('button1').className="snd-enq off";
					if(overlayFormTyp != 'imgZoomForm' ){
					document.getElementById('button').className="snd-enq off";
					}else{
					 	document.getElementById('button').style.display='none';
					}
				} catch(e) {
				}
				try{
					//document.getElementById('errmsg').style.display='block';
				} catch (e) {
					}
			}
		}
	
		var checkIndia= (-(new Date).getTimezoneOffset()/60==5.5) ? 1 : 0;
                queryString += '&check_india='+checkIndia;
		xmlhttp.send(queryString);

	} else {
		//-- if there is no url found! 
		alert('Your Request Is Not Complted!');
	}
	//return responseCode;
}


function hideErrMsg() {
    try    {
        if ( document.getElementById('err-msg') != null ) {
            document.getElementById('err-msg').style.display='none';
        } else {
        }
    }catch(err){
    }
}

function SendEnquiryChangeColor( posid ){
	try{
		if (posid.match(/eid/gi)){
			var eid = posid.replace(/^d\d+eid/g, 'eid');
		}else{
			var eid = posid.replace(/^d\d+did/g, 'did');
		}
		var seids = document.getElementsByName(eid);
		for (var counter = 0; counter < seids.length; counter++ ) {
			var seidname = seids[counter];
			seidname.innerHTML ='Enquiry Sent';
			//seidname.className='bg enquiry-sent-disabled z1 e4 hl a2 td f2 wdt bo td';
			seidname.className='bg enquiry-sent-disabled z1 hl a2 td f2 wdt bo td';
			seidname.removeAttribute("href");
			seidname.style.cursor='default';
		}
		pushCookie(posid); //-- push into global gluser enquiry sent gluserids 
    	document.getElementById(posid).focus(); 
	} catch ( e ) {
	}
}

function layerclose(){
	$('html').css({overflow:"auto"});
	$('body').css({"overflow-y":"auto","width":"100%"});
    document.getElementById('black').style.display="none";
    document.getElementById('blacklayer').style.display="none";
    document.getElementById('overlayhtml').innerHTML='';

    if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
        document.getElementById('select').style.display="block";
        document.getElementById('text').style.display="none";
        document.getElementById('bottom_select').style.display="block";
        document.getElementById('bottom_text').style.display="none";
	
		if(document.documentElement) {
			document.documentElement.scroll = "yes";
			document.documentElement.style.overflow = "";
		} else if(document.body) {
			document.body.scroll = "yes";
			document.body.style.overflow = "";
		}
    }
}

function closeThanks () {
	$('html').css({overflow:"auto"});
	$('body').css({"overflow-y":"auto","width":"100%"});
    document.getElementById('black').style.display="none";
    document.getElementById('blacklayer').style.display="none";
    document.getElementById('layer').style.height= '322px';
    if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
        document.getElementById('select').style.display="block";
        document.getElementById('text').style.display="none";
        document.getElementById('bottom_select').style.display="block";
        document.getElementById('bottom_text').style.display="none";
		
		if(document.documentElement) {
			document.documentElement.scroll = "yes";
			document.documentElement.style.overflow = "";
		} else if(document.body) {
			document.body.scroll = "yes";
			document.body.style.overflow = "";
		}
    }
}

function newusr(get){


    scrolltop=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    
    if (get == "existing"){
        hideErrMsg();
		getCookieIsCc();
	document.getElementById('which_submit').value = 'submit_member';
		document.getElementById('e').className="enn7-nw";
		document.getElementById('new').className="enn7-nw off";
		document.getElementById('nu_act').className="bnor-nw";
		document.getElementById('bt_ln').innerHTML = '<img src="'+hostname+'/imsrchui/imgs/boo2.gif">';
		document.getElementById('b_snd').style.display="block";
		document.getElementById('b_sub').style.display="none";
		document.getElementById('nu_link').style.display="block";
		document.getElementById('nu_act').style.display="none";
		document.getElementById('ex_act').style.display="block";
		document.getElementById('ex_link').style.display="none";
		document.getElementById('loadinge').className="g9 bo off";

		if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
			getTopLeftMarginIE6();
		} else {
			getTopMarginLayerHeight();
		}
        
		document.getElementById('Descriptions').focus();
		try {
			document.getElementById('errmsg').style.display='none'; // -- if err msg exists
		} catch(e){
		}
    } else if (get == "new"){

		document.getElementById('which_submit').value = 'quick_visitor';
		getCookieValues('dataform'); // - to read cookie value if cookie is set before
		document.getElementById('new').className="enn7-nw";
		document.getElementById('ex_frm').style.property="display:none;"
		document.getElementById('e').className="enn7-nw off";
		document.getElementById('bt_ln').innerHTML = '<img src="'+hostname+'/imsrchui/imgs/boo1.gif">';
		document.getElementById('b_snd').style.display="none";
		document.getElementById('b_sub').style.display="block";
		document.getElementById('nu_frm').style.display="block";
		document.getElementById('nu_act').style.display="block";
		document.getElementById('nu_link').style.display="none";
		document.getElementById('ex_act').style.display="none";
		document.getElementById('ex_link').style.display="block"; 
		document.getElementById('nu_act').className="bact-nw";		
		if(navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0){
			getTopLeftMarginIE6();
		} else {
			getTopMarginLayerHeight();
		}

        document.getElementById('Descriptions').focus();
        
		S_countryname=document.getElementById('S_countryname').value;
	//comment as autocompelete js disabled
		//AutoComplete_Create('S_countryname', data);
		try {
			document.getElementById('errmsg').style.display='none'; // -- if err msg exists
		} catch(e){
		}
    }
}

//-- move box 
function move_box() {
	var iframeHeight = document.getElementById('overlayhtml').scrollHeight;
	
	var ht = ( -10 - document.getElementById('overlayhtml').offsetHeight + ( document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) );

	var hw = getWindowHeightWidth();
    var myHeight = hw[0];
	var layertopmargin = (myHeight-iframeHeight)/2;
	var offset = layertopmargin; // set offset (likely equal to your css top)
	var element = document.getElementById('layer');
	element.style.height = iframeHeight + 'px';
	element.style.top = '-' + ( document.documentElement.clientHeight - document.documentElement.scrollTop + offset) + 'px';
}


function fixLayerHeightWithOverlayWinHeight () {
	var overlayHeight='';
	if ( navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0 ) {
		overlayHeight = document.getElementById('overlayhtml').clientHeight;
	} else {
		overlayHeight = document.getElementById('overlayhtml').scrollHeight;
	}
	document.getElementById('layer').style.height=overlayHeight+'px';
}


function getTopLeftMarginIE6() {
	document.getElementById(overlaydivid).style.left = ( ( (screen.width - 680)/2 ) + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px';
	fixLayerHeightWithOverlayWinHeight();
	document.getElementById(overlaydivid).style.top = ( ( (screen.height - document.getElementById('layer').clientHeight)/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) -15 ) + 'px';
	if ((screen.width<=800) && (screen.height<=600)) {
		document.getElementById("black").style.width='1030px';
		document.getElementById('layer').style.left='60px';
		if(document.documentElement) {
			document.documentElement.style.overflow = "";
		} else if(document.body) {
		    document.body.style.overflow = "";
		}
	}
}


function getTopMarginLayerHeight () {
	//var marginLeft = ((screen.width - 680)/2);
	var scrolltop=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
	var pageHeight;
	var pageWidth;
	if ( navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0 ) {
		pageHeight = document.getElementById(overlaydivid).clientHeight;
		pageWidth = document.getElementById(overlaydivid).clientWidth; 
	} else {
		pageHeight = document.getElementById(overlaydivid).scrollHeight;
		pageWidth = document.getElementById(overlaydivid).scrollWidth;
	}

	pageWidth = ( pageWidth ) ? pageWidth : 680;
	var marginLeft = ((pageWidth)/2);
	var hw = getWindowHeightWidth();
	var screenHeight = hw[0];
	var layertopmargin = parseInt((pageHeight)/2);

	document.getElementById('layer').style.height= pageHeight + 'px';
	if (overlayFormTyp != 'imgZoomForm' )
	{
			
		if ( navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0 ) {
			layertopmargin = layertopmargin+scrolltop;
			document.getElementById('layer').style.position='absolute';
			pageHeight = 325;
			var tm=(((screen.width-pageHeight)/2) + scrolltop);
			if ((screen.width<=800) && (screen.height<=600)) {
				document.getElementById("black").style.width='1002px';
				document.getElementById('layer').style.top='0';
				document.getElementById('layer').style.left='0';
			} else {
				document.getElementById('layer').style.margin=tm +'px 0 0 -' + marginLeft + 'px';
			}
		} else {
			if ((screen.width<=800) && (screen.height<=600)) {
				document.body.scroll='no';
				document.getElementById("layer").style.position='absolute';
				layertopmargin = layertopmargin+scrolltop;
				document.getElementById("black").style.width='1002px';
				document.getElementById('layer').style.top=(layertopmargin-100) +'px';
				document.getElementById('layer').style.left='60px';
			} else {
				document.getElementById('layer').style.margin='-' + layertopmargin +'px 0 0 -' + marginLeft + 'px';
				//document.getElementById('layer').style.marginLeft='-' + marginLeft + 'px';
			}
		}
	}else
	{
		document.getElementById('layer').style.margin='-275px 0px 0px -453px';

	}
}


function getWindowHeightWidth () { 
	if( typeof( window.innerWidth ) == 'number' ) {
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}

	return [myHeight, myWidth];
}


//-- reading cookie for login users
function readLoginCookie(name){
	var search = name + "="
	if (document.cookie.length > 0){
		offset = document.cookie.indexOf(search)
		if (offset != -1){
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if (end == -1) end = document.cookie.length
				return unescape(document.cookie.substring(offset, end))
		}
	}
	if (name == 'v4iilex'){
		return readLoginCookie('v4iil');
	}
	return "";
}




//-- this function put all hidden data in query string of the url to post data by ajax
function getUlrQueryString( qstr, comp, issetValue ) {
	//var compParam = getQueryStringParsedData(qstr, "comp");
	ims.mcat_ids[0] = ims.mcat_ids[0] || 0;	
   	comp = escape(comp);
	var whichSubmitVal =  ( issetValue == 'yes' ) ? '&which_submit=submit_member' : ''; 

	var original_refer=window.location;

	var im_modid= location.hostname.match(/dir/) ? "DIR" : location.hostname.match(/trade/) ? "ETO" : '' ;
	var subject=comp + ' Business Enquiry Through IndiaMART.com';
	var title=comp + ' thanks you for sending the query';
	qstr = qstr + '&required=Description&isset='+ issetValue + whichSubmitVal + '&redirect_to=&sort=order:subject,Description&modid='+im_modid+'&grp=0&mcat='+ims.mcat_ids[0]+'&PRODUCTS=&original_refer='+original_refer+'&subject='+subject+'&title='+title;
	
	return qstr;	
}

//-- existing users param list 
function getLoginedUserParams (){
	var paramsList = new Array();
	
	paramsList[0]='Descriptions';	
	paramsList[1]='Is_Cc';	
	
	return paramsList;
}

//-- existing users param list 
function getExistingUserParams () {
	var paramsList = new Array();
	
	paramsList[0]='Descriptions';	
	paramsList[1]='S_username';	
	paramsList[2]='S_password';	
	paramsList[3]='which_submit';
	paramsList[4]='Is_Cc';	
	return paramsList;
}

//-- new users param list 
function getNewUserParams () {
	var paramsList = new Array();
	
	paramsList[0]='Descriptions'; 
	paramsList[1]='S_salute'; 
	paramsList[2]='S_first_name'; 
	paramsList[3]='S_last_name'; 
	paramsList[4]='S_organization'; 
	paramsList[5]='S_email'; 
	paramsList[6]='S_website'; 
	paramsList[7]='S_countryname'; 
	paramsList[8]='S_country_name'; 
	paramsList[9]='S_acode'; 
	paramsList[10]='S_ccode'; 
	paramsList[11]='S_phone'; 
	paramsList[12]='S_mobile'; 
	paramsList[13]='S_cmobile'; 
	paramsList[14]='which_submit'; 
	paramsList[15]='Is_Cc';
	paramsList[16]='city_others';
        paramsList[17]='state_others';
        paramsList[18]='form_city';
        paramsList[19]='form_state';
	return paramsList;
}


function getUlrQueryStringWithParams ( queryString, paramsArray ) {
	for (var i=0; i<paramsArray.length;i++) {
		var paramValue = eval("document.getElementById('" + paramsArray[i] + "').value");
	paramValue = paramValue.replace(/^\s*|\s*$/,"");
		if ( paramsArray[i] == 'S_country_name' ) {
			queryString += '&S_country=' + paramValue; 
		} else if ( paramsArray[i] == 'Descriptions' ) {
			paramValue = escape(paramValue);
			queryString += '&Description=' + paramValue; 
		} else if ( paramsArray[i] == 'S_organization' ) {
			//paramValue = paramValue.replace(" & "," %26 ");
			paramValue = paramValue.replace(/\+/g, '\\+');
			paramValue = escape(paramValue);
			queryString += '&' + paramsArray[i] + '=' + paramValue; 
		} else if ( paramsArray[i] == 'Is_Cc' ) {
			queryString += '&is_cc=' + paramValue; 
			queryString += '&' + paramsArray[i] + '=' + paramValue; 
		} else if(paramsArray[i] == 'city_others'){
			paramValue = escape(paramValue);
			queryString += '&city_others=' + paramValue; 
		} else if(paramsArray[i] == 'state_others'){
			paramValue = escape(paramValue);
			queryString += '&state_others=' + paramValue;
		} else { 
			queryString += '&' + paramsArray[i] + '=' + paramValue; 
		}
	}
	return queryString;
}

//-- login user contact information reading form the cookie
//-- call ajax to get user info
//-- place innerhtml in this divid
function getLoginedUserContactInfo( contactid ) {

	var loginInformation ='';

	if( (cookie = readCookie("ImeshVisitor")) != "") {
		if( getparamVal(cookie, "cnv") != "" ) {
			document.cookie = "";
		}
	}

	if( (cookie = readCookie("ImeshVisitor")) != ""){
		if( getparamVal(cookie, "slt") != "" ){
			var v_salute = myObj.get('S_salute');
			var sltVal = getparamVal(cookie, "slt");
			loginInformation += getparamVal(cookie, "slt").replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');
		}
		if( getparamVal(cookie, "fn") != "" ){
			loginInformation += ' ' + getparamVal(cookie, "fn");
		}
		if ( getparamVal(cookie, "ln") != "" ){
			loginInformation += ' ' + getparamVal(cookie, "ln");
		}
		if ( getparamVal(cookie, "co") != "" ) {
			loginInformation += '<br>' + getparamVal(cookie, "co");
		}
		if ( getparamVal(cookie, "ad") != "" ) {
			loginInformation += '<br>' + getparamVal(cookie, "ad");
		}
		if ( getparamVal(cookie, "ct") != "" ) {
			loginInformation += '<br>' + getparamVal(cookie, "ct");
			if ( getparamVal(cookie, "zp") != "" ) {
				loginInformation += ' - ' + getparamVal(cookie, "zp");
			}
		}
		if ( getparamVal(cookie, "st") != "" ) {
			loginInformation += ', ' + getparamVal(cookie, "st");
		}
		if ( getparamVal(cookie, "cn") != "" ) {
			loginInformation += ', ' + getparamVal(cookie, "cn");
		}
		if ( getparamVal(cookie, "em") != "" ){
			loginInformation += '<br>Email: ' + getparamVal(cookie, "em");
		}
		var CountryCode ='';		
		if ( getparamVal(cookie, "phcc") != "" ) {
			if(!getparamVal(cookie, "phcc").match(/\+/)){
				CountryCode = '+(' + getparamVal(cookie, "phcc") + ')-';
			} else {
				CountryCode = '(' + getparamVal(cookie, "phcc") + ')-';
			}
		}

		if ( getparamVal(cookie, "ph1") != "" ) {
			var areaCode = '';
			if ( getparamVal(cookie, "phac") != "" ) {
				areaCode = '(' + getparamVal(cookie, "phac") + ')-';
			}
			loginInformation += '<br>Phone: ' + CountryCode + areaCode + getparamVal(cookie, "ph1");
		}
		if ( getparamVal(cookie, "mb1") != "" ) {
			loginInformation += '<br>Mobile / Cell Phone: ' + CountryCode + getparamVal(cookie, "mb1");
		}
		if ( getparamVal(cookie, "url") != "" ) {
			loginInformation += '<br>Website: ' + getparamVal(cookie, "url");
		}
	}
	if(overlayFormTyp =='imgZoomForm')
	{
		document.getElementById(contactid).innerHTML = '<DIV ALIGN="LEFT" class="contactperson-info">' + loginInformation + '</div>';
	}else
	{
		document.getElementById(contactid).innerHTML = '<DIV ALIGN="LEFT" CLASS="text" STYLE="padding-top:5px;">' + loginInformation + '</div>';

	}
}


function getXMLHttpRequestObject() {
	var XMLHttpRequestObject = false;

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
  		XMLHttpRequestObject=new XMLHttpRequest();
  	} else {// code for IE6, IE5
  		XMLHttpRequestObject=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	
	if (!XMLHttpRequestObject) {
		alert('Your browser does not support Ajax.');
		return false;
	}

	return XMLHttpRequestObject;
}


function sleep(milliseconds) {
	var start = new Date().getTime();
	while ((new Date().getTime() - start) < milliseconds){
		// Do nothing
	}
}

//-- parsing query string
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


function errorDisabledUser () {
	
	var errHtml = '<div style="background-color:#ffffff;margin-top:13px;height:80px;"><table cellspacing="0" cellpadding="0" bordercolor="#86cdfd" border="1" align="CENTER" width="675" style="border-collapse: collapse;"><tbody><tr><td bgcolor="#e1f0ff"><div class="glthankscathead" style="height: 22px;padding-left:10px;padding-top:3px;"><b>Dear User</b></div></td></tr></tbody></table><br><table cellspacing="0" cellpadding="5" border="0" align="CENTER" width="675"><tr><td width="100%"><ul style="margin-bottom: 0px; margin-left: 30px;"><li class="glthanksmsg">Your account has been <font color="#ff0000"><b>de-activated</b></font>.You will not be able to use our services to the fullest extent.</li><li class="glthanksmsg">For further information, kindly contact our <a href="mailto:useradmin@indiamart.com?subject=Account Disabled">administrator</a></li></ul></td></tr></table></div><div align="center"><br><br><br></div>';


	return errHtml;

}


function error() {
	
	var errHtml = '<div class="ov_f"> <div class="ov_t bo f2" id="sbet"><span class="z1 bg" title="close"></span><p class="a1 bg"></p>SEND BUSINESS ENQUIRY TO: </div> <div class="ov_s w1"> <FORM NAME="dataform"> <div class="ov_b bo a1" id="compname"></div> <div class="m2" style="position:relative;"></div><div class="w1 ov_tx p2 prl"><div class="z1 info p4 w1 l1"><b>Please describe your requirement with details like:</b><br>&#8226; Product name<br>&#8226; Specifications<br> &#8226; Features etc.</div><span class="z1 bg"></span><P style="color:red;"><br><br>There is some technical problem encountered. We regret for your inconvenience! <br><br><br>Please close the current window and try again.<br><p><div class="m2"></div><div class="m2"></div></div></FORM><DIV><IMG SRC="/gifs/zero.gif" WIDTH="1" HEIGHT="12"></DIV></div>';
	return errHtml;
}

function loadingHtml() {
	var loadingHtml ='<img class="loading" src="' + hostname + '/imsrchui/imgs/loading-small.gif" width="16" height="16" alt="loading"><b> Please Wait...</b>';
	return loadingHtml;
}

function charLimit(el,maxLength) {
    if (el.value.length > maxLength) return false;
    return true;
}

function characterCount(el,maxLength) {
    var charCount = document.getElementById('charCount');
    if (el.value.length > maxLength) el.value = el.value.substring(0,maxLength);
    if (charCount) charCount.innerHTML = maxLength - el.value.length;
    return true;
}

function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

var ver = getInternetExplorerVersion();
var fieldset = '';
//alert("version: "+ver);
if (ver > -1 && ver == 8.0) {
	fieldset = '<FIELDSET style="BORDER-BOTTOM: rgb(134,182,217) 1px solid; BORDER-LEFT: rgb(134,182,217) 1px solid; MARGIN-TOP: 2px; WIDTH:190px; HEIGHT: 120px; BORDER-TOP: rgb(134,182,217) 1px solid; BORDER-RIGHT: rgb(134,182,217) 1px solid"><LEGEND style="TEXT-ALIGN: center; COLOR: #017bbc; MARGIN-LEFT: 10px; FONT-SIZE: 13px"><STRONG>Describe your requirement</STRONG> </LEGEND><DIV style="COLOR: #055985" class=f1-nw><UL><LI class=" li-1">Product requirement</LI><LI class=li-1>Specifications needed</LI><LI class=li-1>Packaging &amp; delivery</LI><LI class=li-1>Your company details etc.</LI></UL></DIV></FIELDSET>';
} else {
	fieldset = '<fieldset style="height: 108px; border: 1px solid rgb(134, 182, 217); margin-top: 2px; width:178px; *width=190px"><legend style="font-size: 13px;color:#017BBC; text-align: center;"><strong>Describe your requirement</strong> </legend>    <div class="f1-nw" style=" color:#055985;"><ul><li class=" li-1"> Product requirement</li><li class="li-1"> Specifications needed</li><li class="li-1"> Packaging &amp; delivery</li><li class="li-1"> Your company details etc.</li></ul></div></fieldset>';
}


//-- on first page when click on the submit enquiry - we call this function to decide html (login / without login)
function getEnquiryPageHtml ( userStatus, qstring, comp, posid ) {
	var enqHtml = '';
	var issetValue = ( userStatus == 'login' ) ? 'yes' : 'no';

	if ( userStatus == 'login' ) {
		var hiddenQstr = getUlrQueryString(qstring, comp, issetValue);
		hiddenQstr = hiddenQstr.replace(/\'|%27/g, "\\'");
		enqHtml = '<div class="ov-base"> <div class="neff2-nw"><p style="width: 635px;">Send Enquiry:<span class="co-name">'+ comp +'</span> </p></div><div class="bo k9 err-msg" id="errmsg" style="display: none;"></div><form name="dataform" class="mp0-nw">    <div class="enn1-nw nef4-nw">    <textarea onkeyup="return characterCount(this,\'2000\')" onkeypress="return charLimit(this,\'2000\')" onkeydown="Javascript:if(event.shiftKey && event.keyCode==9) {return myfocus(\'button\');}" id="Descriptions" name="Descriptions" style="resize: none;" class="nef10-nw" tabindex="11"></textarea>    <div class="nef9-nw nef12-nw"><input align="BOTTOM" type="hidden" name="Is_Cc" id="Is_Cc" style="margin: 0px; padding: 0px;" tabindex="12" value=""><!-- Send me a copy of this Enquiry--></div><input id="which_submit" type="hidden" value="submit_member" name="which_submit"><div class="nef9-nw nef12-nw" style="text-align:right;width:99%;" id="Description-status">Remaining Characters:&nbsp;<strong id="charCount"><b>2000</b></strong><div class="m2"></div></div></div>'+ fieldset +'<div class="clr-nw"  style="margin-bottom:2px"></div><div><div align="LEFT" class=" f1 bo w12" style="padding: 5px; border-bottom: 1px solid rgb(134, 182, 217); margin: 5px; width:658px; color: rgb(15, 84, 135); background-color: rgb(241, 241, 241);float:left;"><b>Your contact information:</b></div><div align="LEFT" class="text" style="padding-top: 5px; border: 4px double rgb(134, 182, 217); padding-bottom: 10px; padding-left: 10px; background-color: rgb(241, 241, 241);">  <div style="clear:both"></div><div id="yourcontactinfo"></div></div><div align="LEFT" style="font-size: 12px; margin-left: 0px; padding: 0px 0pt 10px 15px;"><br> <table><tbody><tr><td><a href="http://my.indiamart.com/cgi/my-contactdetail.mp?modid=MY" target="_new"><b>Update Contact Details</b></a></td><td>&nbsp;&nbsp;&nbsp;<a href="http://my.indiamart.com/cgi/glusr-modifyreg2.mp?action=modifyreg2&amp;modid=MY" target="_new"><b>Update Business Profile</b></a></td></tr></tbody></table></div></div><div class="clr-nw"></div><div id="nu_frm"><div align="center" class="nef4-nw"><div style="display: block;" id="b_sub"><INPUT NAME="submit_member" id="button" TYPE="button" VALUE="Send Enquiry" class="snd-enq" style="box-shadow: 0pt 1px 5px rgb(170, 170, 170); font-family: Arial,Helvetica,sans-serif; font-size: 16px; font-weight: bold; text-align: center; color: rgb(255, 255, 255); border: 1px solid rgb(24, 143, 205);border-radius:6px; _border-radius: 0px; padding:5px 20px; cursor:pointer;" onclick="return clickedByUser(\'logined\',\''+ hiddenQstr +'\',\''+ posid +'\');" onkeydown="Javascript:if(event.keyCode==9) {return myfocus(\'Descriptions\');}" ><span id="loading" style="visibility:hidden;padding-left:5px;color:#1045B0;" class="g9 bo"><img class="loading" src="' + hostname + '/imsrchui/imgs/loading-small.gif" width="16" height="16" alt="loading"><b> Please Wait...</b></span></div></div></div></form><div class="clr-nw"></div>';
} else{
		var hiddenQstr = getUlrQueryString(qstring, comp, issetValue);
		hiddenQstr = hiddenQstr.replace(/\'|%27/g, "\\'");
enqHtml='<div class="ov-base"><div class="neff2-nw"><p style="width: 635px;">Send Enquiry:<span class="co-name">'+ comp +'</span> </p></div><div class="bo k9 err-msg" id="errmsg" style="display: none;"></div><form class="mp0-nw" name="dataform">    <div class="enn1-nw nef4-nw">    <textarea tabindex="11" class="nef10-nw" style="resize: none;" name="Descriptions" id="Descriptions" onKeyPress="return charLimit(this,\'2000\')" onKeyUp="return characterCount(this,\'2000\')" onkeydown="Javascript:if(event.shiftKey && event.keyCode==9) {return myfocus(\'button\');}"></textarea>    <div class="nef9-nw nef12-nw"><input type="hidden" align="BOTTOM" tabindex="12" style="margin: 0px; padding: 0px;" id="Is_Cc" name="Is_Cc"><!-- Send me a copy of this Enquiry--></div> <input id="which_submit" type="hidden" value="submit_member" name="which_submit"><div id="Description-status" style="text-align:right;width:99%;" class="nef9-nw nef12-nw">Remaining Characters:&nbsp;<strong id="charCount"><b>2000</b></strong><div class="m2"></div></div>    </div> '+ fieldset +'<div class="clr-nw"  style="margin-bottom:2px"></div><div style="width:683px;"> \<div class="f1-nw"><div style="display: block;" id="nu_act" class="bact-nw"><strong>Please fill your contact information</strong></div><a style="display:none;text-decoration:none;" id="nu_link" class="bnor-nw snd-enq-n" href="javascript:newusr(\'new\');"><strong>New to IndiaMART?</strong></a></div> \<div class="f2-nw"><a style="text-decoration: none; display: block;" id="ex_link" class="bnor-nw snd-enq-n" href="javascript:newusr(\'existing\');"><strong>Have IndiaMART Username &amp; Password?</strong></a><div style="display: none;" id="ex_act" class="bact-nw"><strong>Enter your IndiaMART Username &amp; Password</strong></div></div> \</div><div class="clr-nw"></div> \ <!--New user form:start--><div style="display: block;" id="nu_frm">   <!--For the customization just change the VALUES of the following fields, Also change the subject value above--><!-- End of Customization--><div id="bt_ln" class="f1-nw"><img src="'+hostname+'/imsrchui/imgs/boo1.gif"></div><div ID="new" class="enn7-nw" style="padding:5px; width:664px;"><table width="664" cellspacing="0" cellpadding="0" align="left"><tbody><tr><td valign="top" colspan="2"><table cellspacing="0" cellpadding="0" border="0">  <tbody><tr>    <td valign="middle" align="right" class="ftd-nw"><span class="red">*</span>&nbsp;Contact Person&nbsp;&nbsp;</td>    <td align="left"><table cellspacing="0" cellpadding="0"><tbody><tr><td><select class="nef13-nw" id="S_salute" name="S_salute" style="margin:0;padding:2px;" tabindex="13" gtbfieldid="103"><option value="Mr.">Mr.</option><option value="Ms.">Ms.</option><option value="Mrs.">Mrs.</option><option value="Dr.">Dr.</option></select></td><td>&nbsp;      <input type="text" tabindex="14" class="nef13-nw" name="S_first_name" id="S_first_name" maxlength="20" style="width: 75px; height: 15px;" gtbfieldid="104"></td>    <td>&nbsp;<input type="text" tabindex="15" class="nef13-nw" style="width: 75px; height: 15px;" name="S_last_name" id="S_last_name" maxlength="20" gtbfieldid="105"></td></tr></tbody></table></td>  </tr>  <tr>    <td valign="middle" align="right" class="ftd-nw"><span class="red">*</span>&nbsp;Email&nbsp;&nbsp;</td>    <td><input tabindex="16" class="nef13-nw" style="width: 220px;" name="S_email" id="S_email" maxlength="60" gtbfieldid="106"></td>  </tr>  <tr>    <td valign="middle" align="right" class="ftd-nw">Company&nbsp;&nbsp;</td>    <td><input tabindex="17" class="nef13-nw" style="width: 220px;"  maxlength="60" name="S_organization" id="S_organization" gtbfieldid="107"></td></tr>  <tr>    <td valign="middle" align="right" class="ftd-nw">Website&nbsp;&nbsp;</td>    <td><input id="S_website" tabindex="18" class="nef13-nw" style="width: 220px;" name="S_website" maxlength="80" gtbfieldid="108"></td>  </tr></tbody></table></td><td style="padding-top: 4px;" colspan="2"><table cellspacing="0" cellpadding="0" border="0">  <tbody><tr>    <td valign="top" align="right" class="ftd-nw"><div style="margin-top: 6px;"><span class="red">*</span>&nbsp;Country&nbsp;&nbsp;</div><div style="margin-top:18px; display:block;" id="citystate"><span class="red"> </span>&nbsp;City&nbsp;&nbsp;</div></td><td valign="top" align="left"> \ <div><input id="S_country_name" type="hidden" value="'+ims.geo_cc+'" name="S_country"> \ <div style="left: 609px; padding-right: 0px; margin-top: 25px; width: 209px; z-index: 99; display: none;" class="autocomplete"></div> \ <input type="text" name="S_countryname" id="S_countryname" autocomplete="off"  class="nef13-nw" style="width: 201px;" value="'+ims.geo_cn+'" tabindex="19" role="textbox" aria-autocomplete="list" aria-haspopup="true"> \</div> \ <div style="padding:9px 0;display:block;" id="citystate1"> \ <table cellspacing="0" cellpadding="0"><tbody><tr><td align="left"><input type="text" name="S_city" size="5" id="city_others" style="width: 201px; height: 15px;" autocomplete="off" class="nef13" maxlength="30" tabindex="20" role="textbox" aria-autocomplete="list" aria-haspopup="true"><input type="hidden" name="form_city" id="form_city" value=""></td><td style="display:none;">&nbsp;  <input type="text" name="S_state" size="4" id="state_others" autocomplete="off" style="width: 92px; height: 15px;" class="nef13" maxlength="30" tabindex="21" readonly="readonly"><input type="hidden" name="form_state" id="form_state" value=""></td></tr></tbody></table> \ </div></td></tr>  <tr style="display:none">    <td valign="top" align="right" class="ftd-nw"> \<div style="margin-top:6px"><span class="red">*</span>&nbsp;Telephone&nbsp;&nbsp;</div></td>    <td valign="top" align="left"><table cellspacing="0" cellpadding="0"><tbody><tr><td><input type="TEXT" gtbfieldid="109" class="nef13-nw" name="S_ccode" id="S_ccode" readonly="readonly" style="width: 30px;" tabindex="22" value=""></td><td>&nbsp;<input type="text" gtbfieldid="110" style="width: 58px; height: 15px;" name="S_acode" id="S_acode" class="nef13-nw" tabindex="23" maxlength="6"></td><td>&nbsp;<input type="text" gtbfieldid="111" style="width: 87px; height: 15px;" name="S_phone" id="S_phone" maxlength="35" class="nef13-nw" tabindex="24"></td></tr></tbody></table></td>  </tr>  <tr>    <td valign="top" align="right" class="ftd-nw"><div style="margin-top:6px"><span class="red">*</span>&nbsp;Mobile&nbsp;&nbsp;</div></td>    <td valign="top" align="left"><table cellspacing="0" cellpadding="0"><tbody><tr><td><input type="text" gtbfieldid="112" name="S_cmobile" value="+91" id="S_cmobile" class="nef13-nw" style="width: 40px;" readonly="readonly" tabindex="25"></td><td>&nbsp;<input type="text" gtbfieldid="113" style="width: 148px; height: 14px;" id="S_mobile" name="S_mobile" size="16" maxlength="40" class="nef13-nw" tabindex="26"></td></tr></tbody></table></td>  </tr> <tr style="display: table-row;"><td valign="top" align="right" class="ftd-nw"></td><td valign="top" align="left"></td></tr></tbody></table></td></tr></tbody></table>    <div class="clr-nw"></div></div> \<div id="ex_frm" style="display: block;"><input type="HIDDEN" name="original_refer" value="http://www.indiamart.com/company/"><!--<div class="f1-nw"><img src="'+hostname+'/imsrchui/imgs/boo2.gif"></div>--><div id="e" class="enn7-nw off" style="width:674px;padding-top:10px"><div class="nef7-nw pta-nw" style="margin-right:0;width:265px;"><span class="red">*</span> Username / E-mail</div>    <div class="nef8-nw" style="width:400px"><input type="text" gtbfieldid="15" id="S_username" name="S_username" class="nef13-nw" size="35" tabindex="12"></div><div style="clear:both"></div><div class="nef7-nw nef4-nw" style="padding-top:4px;width:263px"><span class="red">*</span> Password</div>    <div class="nef8-nw nef4-nw" style="width:400px"><input type="password" id="S_password" name="S_password" class="nef13-nw" size="35" onKeydown="Javascript:if(event.keyCode==13) return clickedByUser(\'existing\',\'' + hiddenQstr + '\',\'' + posid + '\');" tabindex="13"></div><div class="nef7-nw nef4-nw" style="padding-top:8px;width:200px">&nbsp;</div>    <div class="nef8-nw nef4-nw" style="font-size:11px;width:400px;margin-bottom:10px;"><a href="http://my.indiamart.com/cgi/glusr-check.mp?action=forgotpass&modid=MY&redirect=http://dir.indiamart.com" style="color:#0000ff" tabindex="14" target="_new">Forgot Password?</a></div><div style="clear:both"></div></div><div class="clr-nw"></div>  <input type="HIDDEN" name="from" value="search"><input type="HIDDEN" name="ss" value=""><input type="HIDDEN" name="kc" value="k"></div><div class="clr-nw"></div> \<div align="center" class="nef4-nw"> \<div id="b_sub" style="display: block;"><input type="button" value="Submit Enquiry" name="submit_quick_visitor" id="button" onclick="return clickedByUser(\'new\', \''+ hiddenQstr +'\',\''+ posid +'\');" onkeydown="Javascript:if((!event.shiftKey) && event.keyCode==9) {return myfocus(\'Descriptions\');}" class="snd-enq" style="box-shadow: 0pt 1px 5px rgb(170, 170, 170); font-family: Arial,Helvetica,sans-serif; font-size: 16px; font-weight: bold; text-align: center; color: rgb(255, 255, 255); border: 1px solid rgb(24, 143, 205);border-radius:6px; _border-radius: 0px; padding:5px 20px; cursor:pointer;" tabindex="27" /><span id="loading" style="visibility:hidden;padding-left:5px;color:#1045B0;" class="g9 bo"><img class="loading" src="' + hostname + '/imsrchui/imgs/loading-small.gif" width="16" height="16" alt="loading"><b> Please Wait...</b></span></div> \<div id="b_snd" style="display: none;"><input type="button" value="Send Enquiry" NAME="submit_member" id="button1" onclick="return clickedByUser(\'existing\',\'' + hiddenQstr + '\',\'' + posid + '\');" onkeydown="Javascript:if((!event.shiftKey) && event.keyCode==9) {return myfocus(\'Descriptions\');}" class="snd-enq" style="box-shadow: 0pt 1px 5px rgb(170, 170, 170); font-family: Arial,Helvetica,sans-serif; font-size: 16px; font-weight: bold; text-align: center; color: rgb(255, 255, 255); border: 1px solid rgb(24, 143, 205);border-radius:6px; _border-radius: 0px; padding:5px 20px; cursor:pointer;" tabindex="28" /><br /><span id="loadinge" style="visibility:hidden;padding-left:5px;color:#1045B0;" class="g9 bo"><img class="loading" src="' + hostname + '/imsrchui/imgs/loading-small.gif" width="16" height="16" alt="loading"><b> Please Wait...</b></span></div> \</div>    </form>    </div>    <!--New user form:ends-->    <div class="clr-nw"></div></div>';

}
	//getLoginedUserContactInfo('yourcontactinfo'); //-- in case user is login, this will fetch the users data
	return enqHtml;
}

//-- this function validate ad post request to the posting Enquiry function to proceede the 
//-- send enquiry
function clickedByUser ( userType, queryString, posid ) {
	document.getElementById('errmsg').style.display='none'; 
	if(document.dataform.S_city){
		if(document.dataform.S_city.value == 'City'){
			document.dataform.S_city.value = '';
		};
	}
	var paramsArray = new Array();
	var val = false;
	if ( userType == 'logined' ) {
		val = setlogin();
		if ( val ) {
			document.getElementById('button').style.display='none';
			document.getElementById('loading').style.display='block';
			document.getElementById('loading').style.visibility="visible";
			paramsArray = getLoginedUserParams(); 
			processData( paramsArray, queryString, posid );
		}
	} else if ( userType == 'existing' ) { 
		val = set();
		if ( val ) {
			document.getElementById('button1').style.display='none';
			document.getElementById('loadinge').style.display='block';
			document.getElementById('loadinge').style.visibility="visible"; //-- loading message
			//document.getElementById('loadinge').style.display="block"; //-- loading message
			//document.getElementById('b_snd').childNodes[0].style.display = 'none';
			//$('#b_snd button').attr('style','display:none');
			paramsArray = getExistingUserParams(); 
			processData( paramsArray, queryString, posid );
		}
	} else if ( userType == 'new' ) {
		val = set_quick_visitor();
		if ( val ) {
			paramsArray = getNewUserParams();
			processData(paramsArray, queryString, posid);
		}
	} else {
		alert('Thers is some problem! Eqnuiry could not be sent!');
		val = false;
	}
	
	if (document.getElementById('Is_Cc').checked == true ) {
		document.getElementById('Is_Cc').value='yes';
	} else {
		document.getElementById('Is_Cc').value='no';
	}

	return val;
}


function processData( paramsArray, queryString, posid ) {
	queryString = getUlrQueryStringWithParams(queryString, paramsArray); //-- put all the params in query string according to the user type	
	//alert('ajax');
	postEnquiry( queryString, posid );	

}



// - validation ----------------------------------
function setlogin(){
	
	if(document.getElementById('Descriptions').value == "") {
		alert ("Kindly describe your requirement.");
		document.getElementById('Descriptions').focus();
		return false;
	} else {
		var val = document.getElementById('Descriptions').value;
		val = val.replace(/\s/g, "");
		if (val.length == 0) {
			alert("Kindly describe your requirement.");
			document.getElementById('Descriptions').focus();
			return false;
		}
		if (document.getElementById('Descriptions').value.length > 2000) {
			alert("Kindly describe your requirement within the limit of 2000 characters.");
			document.getElementById('Descriptions').focus();
			return false;
		}
	}
	var isccValue = 'no';

//commented as per the request to remove Is_cc check box. 
//By jatin.

	//-- update cookie imshvisitor with is_cc value
	updateGlobalCookie('ImeshVisitor', isccValue );

	return true;
}


//-- update ImeshVisitor cookie according to the is_cc checked or not
function updateGlobalCookie ( cookieName, newValue ) {
	var cookieDataOld = readCookie( cookieName );
	var cookieDataArr = cookieDataOld.split("|");
	var cookieDataNew = '';
	for ( i=0; i<cookieDataArr.length; i++) {
		cookiePairedData = cookieDataArr[i];
		if ( cookiePairedData.match('iscc') ) {
			cookieDataNew += '|iscc=' + newValue;
		} else {
			if ( cookieDataNew == '' ) {
				cookieDataNew = cookiePairedData;
			} else {
				cookieDataNew += '|' + cookiePairedData;
			}
		}
	}

	setGlobalCookie(cookieName, cookieDataNew);
}


expires = new Date();
expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);

function set(){
	//document.dataform1.Description.value = document.dataform.Description.value;
	if(document.getElementById('Descriptions').value == "") {
		alert ("Kindly describe your requirement.");
		document.getElementById('Descriptions').focus();
		return false;
	} else {
		var val = document.getElementById('Descriptions').value;
		val = val.replace(/\s/g, "");
		if (val.length <= 0) {
			alert("Kindly describe your requirement.");
			document.getElementById('Descriptions').focus();
			return false;
		}
		if (document.getElementById('Descriptions').value.length > 2000) {
			alert("Kindly describe your requirement within the limit of 2000 characters.");
			document.getElementById('Descriptions').focus();
			return false;
		}
	}


	if (document.getElementById('S_username').value == "") {
		alert ("Kindly enter the E-mail Id");
		document.getElementById('S_username').focus();
		return false;
	} else {
		if (document.getElementById('S_username').value.length < 4) {
			alert ("Kindly enter the E-mail ID of at least 4 characters.");
			document.getElementById('S_username').focus();
			return false;
		}
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById('S_username').value))) {
			alert("Invalid Email ID. Kindly enter the correct Email ID.");
			document.getElementById('S_username').focus();
			return false;
		}
	}

	if (document.getElementById('S_password').value == "") {
		alert ("Kindly enter the password");
		document.getElementById('S_password').focus();
		return false;
	}
	if (document.getElementById('S_password').value.length < 4) {
		alert ("Kindly enter the password  of at least 4 characters.");
		document.getElementById('S_password').focus();
		return false;
	}

	if ( document.getElementById('Is_Cc').checked == true ) {
		document.getElementById('Is_Cc').value='yes';
	} else {
		document.getElementById('Is_Cc').value='no';
	}

	return true;
} // end set


function set_desc_cookie() {
	if (document.dataform.Description.value.length > 0) {
		document.cookie = "NewDescCookie" + "=" + escape(document.dataform.Description.value) + ";" + "domain=.indiamart.com;path=/;";
	}
}

function set_quick_visitor(){
	var tt = "*Aceh*,*Afghanistan*,*Aland*,*Albania*,*Algeria*,*America*,*American Samoa*,*Andorra*,*Angola*,*Anguilla*,*Antarctica*,*Antigua And Barbuda*,*Argentina*,*Armenia*,*Aruba*,*Aryavarta*,*Aussi*,*Australia*,*Austria*,*Azerbaijan*,*BRD*,*Bahamas*,*Bahrain*,*Bangladesh*,*Barbados*,*Basutoland*,*Batavian Republic*,*Bechuanaland*,*Belarus*,*Belau*,*Belgian Congo*,*Belgium*,*Belize*,*Benin*,*Bermuda*,*Bharat*,*Bhutan*,*Bolivia*,*Bosnia And Herzegovina*,*Botswana*,*Bourkina-Fasso*,*Brazil*,*Britain*,*British Indian Ocean Territory*,*Brunei*,*Bulgaria*,*Burkina Faso*,*Burma*,*Burundi*,*Cambodia*,*Cameroon*,*Canada*,*Cape Verde*,*Catalonia*,*Cayman Islands*,*Central African Republic*,*Cesko*,*Ceylon*,*Chad*,*Chechnya*,*Chile*,*Chili*,*Chilli*,*China*,*China (Hong Kong S.A.R.)*,*China (Macau S.A.R.)*,*Christmas Island*,*Cocos Islands*,*Colchis*,*Colombia*,*Commonwealth of Australia*,*Comoros*,*Congo*,*Congo Belge*,*Congo Brazzaville*,*Congo Kinshasa*,*Cook Islands*,*Costa Rica*,*Cote D Ivoire*,*Crna Gora*,*Croatia*,*Cuba*,*Cyprus*,*Czech Republic*,*Czechia*,*DRC*,*Dahomey*,*Democratic Republic Of Congo*,*Denmark*,*Deutschland*,*Djibouti*,*Dominica*,*Dominican Republic*,*Dominion of Canada*,*Down Under*,*Dutch Guiana*,*Dutch Republic*,*East Bengal*,*East Timor*,*Easter Island*,*Ecuador*,*Egypt*,*Eire*,*El Salvador*,*Ellice Islands*,*England*,*Equatorial Guinea*,*Eritrea*,*Espana*,*Estonia*,*Ethiopia*,*Faroe Islands*,*Falkland Islands*,*Federal Republic of Germany*,*Federative Republic of Brazil*,*Fiji Islands*,*Finland*,*France*,*French Congo*,*French Guiana*,*French Polynesia*,*French Republic*,*French Somaliland*,*French Southern Territories*,*Gabon*,*Gambia*,*Gandhar*,*Gaul*,*Georgia*,*Germany*,*Ghana*,*Gibraltar*,*Great Britain*,*Greece*,*Greenland*,*Grenada*,*Guadeloupe*,*Guam*,*Guatemala*,*Guinea*,*Guinea-Bissau*,*Guyana*,*Haiti*,*Haute-Volta*,*Heard And Mcdonald Islands*,*Hellas*,*Hellenic Republic*,*Hind*,*Hindustan*,*Holland*,*Holy See*,*Honduras*,*Hong Kong*,*Hrvatska*,*Hungary*,*Iberia*,*Iceland*,*India*,*Indonesia*,*Iran*,*Iraq*,*Ireland*,*Islamic Republic of Pakistan*,*Island*,*Islas Malvin*,*Israel*,*Italy*,*Iveria*,*Ivory Coast*,*Jamaica*,*Japan*,*Jordan*,*KSA*,*Kampuchea*,*Kazakhstan*,*Keeling Islands*,*Kenya*,*Khmer*,*Khmer Republic*,*Kingdom of Cambodia*,*Kingdom of Lesotho*,*Kingdom of Romania*,*Kingdom of Saudi Arabia*,*Kingdom of Thailand*,*Kiribati*,*Kiwi*,*Korea*,*Korea, North*,*Kroatien*,*Kuwait*,*Kyrgyzstan*,*Lao*,*Lao People's Democratic Republic*,*Laos*,*Latvia*,*Lebanon*,*Lesotho*,*Liberia*,*Libya*,*Liechtenstein*,*Lithuania*,*Luxembourg*,*MEX*,*MX*,*Macau*,*Macedonia*,*Madagascar*,*Mainland China*,*Malawi*,*Malaysia*,*Maldives*,*Mali*,*Malta*,*Marshall Islands*,*Martinique*,*Mauritania*,*Mauritius*,*Mayotte*,*Mesopotamia*,*Mexico*,*Micronesia*,*Moldova*,*Monaco*,*Mongolia*,*Montenegro*,*Montserrat*,*Morocco*,*Mount Athos*,*Mozambique*,*Myanmar*,*Namibia*,*Nauru*,*Nepal*,*Netherlands*,*Netherlands Antilles*,*Netherlands Guiana*,*New Caledonia*,*New Zealand*,*Nicaragua*,*Niger*,*Nigeria*,*Niue*,*Norfolk Island*,*North Korea*,*Northern Ireland*,*Northern Mariana Islands*,*Northern Rhodesia*,*Norway*,*Nyasaland*,*Oman*,*Oubangui-Chari*,*Oz*,*PRC*,*Pakistan*,*Palau*,*Palestinian National Authority*,*Panama*,*Papua New Guinea*,*Paraguay*,*People's Republic of Bangladesh*,*People's Republic of China*,*People's Republic of Kampuchea*,*Persia*,*Peru*,*Philippines*,*Pindorama*,*Pitcairn Island*,*Poland*,*Polska*,*Porto Rico*,*Portugal*,*Portugese Guinea*,*Puerto Rico*,*Qatar*,*Qazaqstan*,*RF*,*Republic of Benin*,*Republic of Botswana*,*Republic of Dijbouti*,*Republic of Hungry*,*Republic of India*,*Republic of Ireland*,*Republic of Kazakhstan*,*Republic of Malawi*,*Republic of Moldova*,*Republic of Palau*,*Republic of Poland*,*Republic of Rwanda*,*Republic of Serbia*,*Republic of Singapore*,*Republic of Sudan*,*Reunion*,*Rhodesia*,*Romania*,*Roos*,*Rumania*,*Russia*,*Russian Federation*,*Rwanda*,*SGSSI*,*Saint Helena*,*Saint Kitts And Nevis*,*Saint Lucia*,*Saint Pierre And Miquelon*,*Saint Vincent And The Grenadines*,*Samoa*,*San Marino*,*Sao Tome And Principe*,*Saudi Arabia*,*Saudia*,*Scotland*,*Senegal*,*Serbia*,*Serbia And Montenegro*,*Seychelles*,*Shqiperia*,*Shri Vijaya*,*Siam*,*Sierra Leone*,*Singapore*,*Slovakia*,*Slovenia*,*Solomon Islands*,*Somalia*,*South Africa*,*South Georgia*,*South Korea*,*South Sandwich Islands*,*Spain*,*Sri Lanka*,*St Helena*,*St Kitts And Nevis*,*St Lucia*,*St Pierre And Miquelon*,*St Vincent And The Grenadin*,*St. Helena*,*St. Kitts And Nevis*,*St. Lucia*,*St. Pierre And Miquelon*,*St. Vincent And The Grenadin*,*Sudan*,*Suriname*,*Svalbard And Jan Mayen Islands*,*Swaziland*,*Sweden*,*Swiss Confederation*,*Switzerland*,*Syria*,*Taiwan*,*Tajikistan*,*Tanganyika and Zanzibar*,*Tanzania*,*Thailand*,*The Bahamas*,*The Gambia*,*The Netherlands*,*The States*,*Tibet*,*Togo*,*Tokelau*,*Tonga*,*Trinidad And Tobago*,*Tunisia*,*Turkey*,*Turkmenistan*,*Turks And Caicos Islands*,*Tuvalu*,*UAE*,*UK*,*US*,*USA*,*Ubangi-Shari*,*Uganda*,*Ukraine*,*Ungarn*,*United Arab Emirates*,*United Kingdom*,*United Mexican States*,*United States*,*United States Minor Outlying Islands*,*United States Of America*,*United States of Brazil*,*Upper Volta*,*Uruguay*,*Uzbekistan*,*Vanuatu*,*Vatican City*,*Venezuela*,*Vietnam*,*Virgin Islands (British)*,*Virgin Islands (Us)*,*Wales*,*Wallis And Futuna Islands*,*West Germany*,*Western Sahara*,*Xile*,*Yemen*,*Yugoslavia*,*Zaire*,*Zambia*,*Zanzibar*,*Zimbabwe*,*South Sudan*";

	tt=tt.replace(/\*/g,"");
	var data = new Array();
	data=tt.split(/\,/g);

	//-- validate the description
	if(document.getElementById('Descriptions').value == "") {
		alert ("Kindly describe your requirement.");
		document.getElementById('Descriptions').focus();
		return false;
	} else {
		var val = document.getElementById('Descriptions').value;
		val = val.replace(/\s/g, "");
		if (val.length == 0) {
			alert("Kindly describe your requirement.");
			document.getElementById('Descriptions').focus();
			return false;
		}
		if (document.getElementById('Descriptions').value.length > 2000) {
			alert("Kindly describe your requirement within the limit of 2000 characters.");
			document.getElementById('Descriptions').focus();
			return false;
		}
	}

	if ( document.getElementById('S_first_name').value == '' || document.getElementById('S_first_name').value.length == 0 )   {
		alert ("Kindly enter your name.");
		document.getElementById('S_first_name').focus();
		return false;
	} else {
		var val = document.getElementById('S_first_name').value;
		val = val.replace(/\s/g, "");
		if (val.length == 0) {
			alert("Kindly enter your name.");
			document.getElementById('S_first_name').focus();
			return false;
		}
	}

	if (document.getElementById('S_first_name').value != '' && document.getElementById('S_first_name').value.length > 0  || document.getElementById('S_last_name').value != '' && document.getElementById('S_last_name').value.length > 0)
	{
                if(!(/^[a-zA-Z. ]*$/.test(document.getElementById('S_first_name').value))){
                        alert ("Kindly enter the correct First Name");
                        document.getElementById('S_first_name').focus();
                        return false;
                }

                if(!(/^[a-zA-Z. ]*$/.test(document.getElementById('S_last_name').value))){
                        alert ("Kindly enter the correct Last Name");
                        document.getElementById('S_last_name').focus();
                        return false;
                }
	}

	if(document.getElementById('S_email').value == "") {
		alert ("Kindly enter your email-id.");
		document.getElementById('S_email').focus();
		return false;
	}
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById('S_email').value))) {
		alert("Invalid Email ID. Kindly enter the correct Email ID.");
		document.getElementById('S_email').focus();
		return (false);
	}

	if(document.getElementById('S_countryname').value == "") {
		alert ("Kindly select your country name.");
		document.getElementById('S_countryname').focus();
		return false;
	}
	var len=data.length;
	len=len+1;
	var display = new Array();
	var dth = '';
	for(i=0;i<=len;i++) {
			if(data[i] == document.getElementById("S_countryname").value) {
				display[display.length] = data[i];
			}	
	}
	if(display.length == 0){
		alert ("Kindly enter correct country name.");
		document.getElementById('S_countryname').focus();
		return false;
	}

	if (document.getElementById('S_cmobile').value.length == 0)  {
		alert ("Kindly enter your country code.");
		document.getElementById('S_cmobile').focus();
		return false;
	}
	if ( ((document.getElementById('S_mobile').value == '') || (document.getElementById('S_mobile').value.length == 0))) {
		alert ("Kindly enter Mobile Number");
		document.getElementById('S_mobile').focus();
		return false;
	}
	else if ( document.getElementById('S_mobile').value != '' && document.getElementById('S_mobile').value.length > 0 ) {
		if(!(/^\d+$/.test(document.getElementById('S_mobile').value))) {
			alert ("Kindly enter correct Mobile Number");
			document.getElementById('S_mobile').focus();
			return false;
		}
		if(document.getElementById('S_cmobile').value == '+91' && document.getElementById('S_mobile').value.length != 10){
			alert("Kindly enter 10 digits Mobile Number");
			document.getElementById('S_mobile').focus();
			return false;	
		}	
	}

	if (document.getElementById('S_website').value.length != 0) {
		if(document.getElementById('S_website').value.indexOf(" ") != -1)	{
			alert("Kindly enter correct URL without any spaces in it.");
			document.getElementById('S_website').focus();
			return false;
		}
		if(document.getElementById('S_website').value.indexOf("@") != -1)	{
			alert("Invalid Website address. Kindly enter correct website address.");
			document.getElementById('S_website').focus();
			return false;
		}
		if(document.getElementById('S_website').value.indexOf(".") == -1)	{
			alert("Invalid Website address. Kindly enter correct website address.");
			document.getElementById('S_website').focus();
			return false;
		}

		validarr = document.getElementById('S_website').value.split(".");

		if(validarr[0].length<2)   	{
			alert("Invalid Website address. Kindly enter correct website address.");
			document.getLementById('S_website').focus();
			return false;
		}
		if(validarr[1].length<2)   	{
			alert("Invalid Website address. Kindly enter correct website address.");
			document.getElementById('S_website').focus();
			return false;
		}
	}

	// new global cookie generation
	setGlobalCookie('ImeshVisitor', makeCookie('dataform'));

	// Expire desc cookie if exists
	if( (desccookie = getCookie("NewDescCookievisitor")) > "") {
		document.cookie = "NewDescCookievisitor" + "=" + "" + ";" + "domain=.indiamart.com;path=/;";
	} 	
	return true;
}
function setCookie(name, value) {
	if (value.length > 0) {
		document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";" +"domain=.indiamart.com;path=/;";
	}
}

function get_ccode() {
	document.dataform.S_ccode_fax.value = document.dataform.S_ccode.value;
}

function get_acode() {
	document.dataform.S_acode_fax.value = document.dataform.S_acode.value;
}


function createRequestObject() {

	var req;

	if(window.XMLHttpRequest){
		// Firefox, Safari, Opera...
		req = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		// Internet Explorer 5+
		req = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		// There is an error creating the object,
		// just as an old browser is being used.
		alert('Problem creating the XMLHttpRequest object');
	}

	return req;

}

// Make the XMLHttpRequest object
var http = createRequestObject();

function sendRequest(q) {

	// Open perl script for requests

	http.open('GET', '/cgi/suggest.cgi?q='+q);
	http.onreadystatechange = handleResponse;
	http.send(null);

}

function handleResponse() {

	if(http.readyState == 4 && http.status == 200){

		// Text returned FROM the perl script
		var response = http.responseText;

		if(response) {
			// UPDATE ajaxTest content
			document.getElementById("searchResults").innerHTML = response;
		}

	}

}



function updateprofile() {

	// Open perl script for requests
	var email = document.getElementById('email').value;
	var action = document.getElementById('action').value;
	var subject = document.getElementById('subject').value;
	var host = document.getElementById('host').value;
	var referer_url = document.getElementById('referer_url').value;
	var S_name = document.getElementById('S_name').value;

	var glusr_id= document.getElementById('glusr_id').value;
	if(action == 'update_email')
	{
		var S_email = document.getElementById('S_email').value;
		if(document.getElementById('email').value == '')
		{
			alert("Kindly fill your email-id");
			document.getElementById('email').focus();
			return (false);
		}
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById('email').value))) {
			alert("Invalid Email ID. Kindly enter the correct ID.");
			document.getElementById('email').focus();
			return (false);
		}
		if(email == S_email)
		{
			alert("Kindly change your email-id");
			document.getElementById('email').focus();
			return (false);
		}
		var modid=document.getElementById('modid').value;
		document.body.style.cursor = 'wait';
		http.open('GET', '/cgi/updateprofile.cgi?glusr_id='+escape(glusr_id)+'&S_email='+escape(email)+'&action='+escape(action)+'&subject='+escape(subject)+'&host='+escape(host)+'&S_name='+escape(S_name)+'&modid='+escape(modid)+'&referer_url='+escape(referer_url));
	}
	else if(action == 'update_email_pass')
	{
		var S_email = document.getElementById('S_email').value;
		var S_pass = document.getElementById('S_pass').value;
		var modid=document.getElementById('modid').value;
		if(document.getElementById('email').value == '')
		{
			alert("Kindly fill your email-id");
			document.getElementById('email').focus();
			return (false);
		}
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById('email').value))) {
			alert("Invalid Email ID. Kindly enter the correct ID.");
			document.getElementById('email').focus();
			return (false);
		}
		if(email == S_email)
		{
			alert("Kindly change your email-id");
			document.getElementById('email').focus();
			return (false);
		}
		if(S_pass == "" ) {
			alert("Kindly enter your Password.");
			document.getElementById('S_pass').focus();
			return false;
		}
		else if(S_pass.length < 4) {
			alert("The Password should be atleast 4 characters long.");
			document.getElementById('S_pass').focus();
			return false;
		}
		else if(S_pass.indexOf(" ") != -1) {
			alert("Kindly enter your Password without any spaces in it.");
			document.getElementById('S_pass').focus();
			return false;
		}
		document.body.style.cursor = 'wait';
		http.open('GET', '/cgi/updateprofile.cgi?glusr_id='+escape(glusr_id)+'&S_email='+escape(email)+'&S_pass='+escape(S_pass)+'&action='+escape(action)+'&subject='+escape(subject)+'&host='+escape(host)+'&S_name='+escape(S_name)+'&email='+escape(S_email)+'&modid='+escape(modid)+'&referer_url='+escape(referer_url));
	}
	else
	{
		var S_acode = '';
		var S_phone = '';
		var S_mobile = '';
		var S_cmobile = '';
		var S_pass = document.getElementById('S_pass').value;
		var S_organization = document.getElementById('S_organization').value;
		var S_website = document.getElementById('S_website').value;
		var S_streetaddress= document.getElementById('S_streetaddress').value;
		var S_city= document.getElementById('S_city').value;
		var S_state= document.getElementById('S_state').value;
		var S_pin= document.getElementById('S_pin').value;
		var S_ccode_fax= document.getElementById('S_ccode_fax').value;
		var S_acode_fax= document.getElementById('S_acode_fax').value;
		var S_fax= document.getElementById('S_fax').value;
		if(document.getElementById('S_mobile'))
		{
			S_mobile= document.getElementById('S_mobile').value;
		}
		var modid=document.getElementById('modid').value;
		if(document.getElementById('S_acode'))
		{
			S_acode= document.getElementById('S_acode').value;
		}
		if(document.getElementById('S_phone'))
		{
			S_phone= document.getElementById('S_phone').value;
		}
		if(document.getElementById('S_cmobile'))
		{
			S_cmobile=document.getElementById('S_cmobile').value;
		}
		S_organization=escape(S_organization);

		if (document.getElementById('S_website').value.length != 0) 
		{
			if(document.getElementById('S_website').value.indexOf(" ") != -1)       
			{
				alert("Kindly enter correct URL without any spaces in it.");
				document.getElementById('S_website').focus();
				return false;
			}

			if(document.getElementById('S_website').value.indexOf("@") != -1)       
			{
				alert("Invalid Website address. Kindly enter correct website address.");
				document.getElementById('S_website').focus();
				return false;
			}

			if(document.getElementById('S_website').value.indexOf(".") == -1)       
			{	alert("Invalid Website address. Kindly enter correct website address.");
				document.getElementById('S_website').focus();
				return false;
			}

			validarr = document.getElementById('S_website').value.split(".");
			if(validarr[0].length<2)        
			{
				alert("Invalid Website address. Kindly enter correct website address.");
				document.getLementById('S_website').focus();
				return false;
			}
	
			if(validarr[1].length<2)        
			{
				alert("Invalid Website address. Kindly enter correct website address.");
				document.getElementById('S_website').focus();
				return false;
			}
        	}

		if(document.getElementById('S_acode_fax').value != '' && document.getElementById('S_acode_fax').value.length > 0)
		{
                        if(!(/^\d+$/.test(document.getElementById('S_acode_fax').value))) 
			{
				alert ("Kindly enter correct Area Fax Code.");
				document.getElementById('S_acode_fax').focus();
				return false;
			}
		}

		if ( document.getElementById('S_fax').value != '' && document.getElementById('S_fax').value.length > 0)
		{
                        if(!(/^\d+$/.test(document.getElementById('S_fax').value))) 
			{
				alert ("Kindly enter correct Fax No.");
				document.getElementById('S_fax').focus();
				return false;
			}
		}

		if(document.getElementById('S_acode').value != '' && document.getElementById('S_acode').value.length > 0)
		{
                        if(!(/^\d+$/.test(document.getElementById('S_acode').value))) 
			{
				alert ("Kindly enter correct Area Phone Code.");
				document.getElementById('S_acode').focus();
				return false;
			}
		}

		if(document.getElementById('S_phone').value != '' && document.getElementById('S_phone').value.length > 0)
		{
                        if(!(/^\d+$/.test(document.getElementById('S_phone').value))) 
			{
				alert ("Kindly enter correct Phone No.");
				document.getElementById('S_phone').focus();
				return false;
                        }
		}

		if(S_pass == "" ) {
			alert("Kindly enter your Password.");
			document.getElementById('S_pass').focus();
			return false;
		}
		else if(S_pass.length < 4) {
			alert("The Password should be atleast 4 characters long.");
			document.getElementById('S_pass').focus();
			return false;
		}
		else if(S_pass.indexOf(" ") != -1) {
			alert("Kindly enter your Password without any spaces in it.");
			document.getElementById('S_pass').focus();
			return false;
		}
		//if(email == S_pass)
		//{
		//	alert("The Password is same as your email-id. Kindly change your password for security reasons.");
		//document.getElementById('S_pass').focus();
		//return false;
		//}
		document.body.style.cursor = 'wait';
		http.open('GET', '/cgi/updateprofile.cgi?S_pass='+escape(S_pass)+'&S_organization='+escape(S_organization)+'&S_website='+escape(S_website)+'&S_streetaddress='+escape(S_streetaddress)+'&S_city='+escape(S_city)+'&S_state='+escape(S_state)+'&S_pin='+escape(S_pin)+'&S_ccode_fax='+escape(S_ccode_fax)+'&S_acode_fax='+escape(S_acode_fax)+'&S_fax='+escape(S_fax)+'&S_mobile='+escape(S_mobile)+'&glusr_id='+escape(glusr_id)+'&S_email='+escape(email)+'&subject='+escape(subject)+'&host='+escape(host)+'&S_name='+escape(S_name)+'&modid='+escape(modid)+'&S_acode='+escape(S_acode)+'&S_phone='+escape(S_phone)+'&S_cmobile='+escape(S_cmobile)+'&referer_url='+escape(referer_url));
	}
	http.onreadystatechange = handleResponse;
	http.send(null);
}

function handleResponse() {

	if(http.readyState == 4 && http.status == 200){
		// Text returned FROM the perl script
		var response = http.responseText;

		if(response > 0) {
			// UPDATE ajaxTest content
			//var el = document.getElementById('sub1');
			var action = document.getElementById('action').value;
			if(action == 'update_email_pass' || action == 'update_email')
			{
				document.body.style.cursor = 'default';
				var ar = document.getElementById("master").getElementsByTagName("tr");
				ar[0].style.display = "none";
				ar[1].style.display = "none";
				ar[2].style.display = "block";

			}
			else if(action == 'login')
			{
				document.body.style.cursor = 'default';
				var ar = document.getElementById("master").getElementsByTagName("tr");
				ar[0].style.display = "block";
				ar[1].style.display = "none";
				ar[2].style.display = "none";
				getLoginString();
			}
			else
			{
				if(response ==2)
				{
					var ar = document.getElementById("master").getElementsByTagName("tr");

					ar[0].style.display = "none";
					ar[1].style.display = "none";
					ar[16].style.display = "block";
				}
				else
				{
					var ar = document.getElementById("master").getElementsByTagName("tr");
					ar[0].style.display = "none";
					ar[1].style.display = "none";
					ar[15].style.display = "block";
				}
				document.body.style.cursor = 'default';
			}
			//eval(response);
			if (( navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0 )) {
				//document.documentElement.style.overflow = "hidden";
				getTopLeftMarginIE6();
			} else {
				fixLayerHeightWithOverlayWinHeight();
			}
		}
		else
		{
			var action = document.getElementById('action').value;
			if(action == 'update_email_pass' || action == 'update_email')
			{
				if(response < 0)
				{
					var ar = document.getElementById("master").getElementsByTagName("tr");
					ar[0].style.display = "none";
					ar[1].style.display = "none";
					ar[2].style.display = "none";
					ar[3].style.display = "block";
				}
				else
				{
					var ar = document.getElementById("master").getElementsByTagName("tr");
					ar[0].style.display = "block";
					ar[1].style.display = "block";
					ar[2].style.display = "none";
				}
			}
			else if(action == 'login')
			{
				document.getElementById("S_pass").value="";
				var ar = document.getElementById("master").getElementsByTagName("tr");
				ar[1].style.display = "block";
				document.getElementById("user").style.display="none";
				document.getElementById("try_again").style.display="block";
				document.getElementById("sub1").style.display="block";
				ar[2].style.display = "block";
			}
			document.body.style.cursor = 'default';
			if (( navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/ [\d.]+/) == 6.0 )) {
				//document.documentElement.style.overflow = "hidden";
				getTopLeftMarginIE6();
			} else {
				fixLayerHeightWithOverlayWinHeight();
			}
		}
	}
}

//-- send request to the make the user login
function checklogin() {
	var S_email = document.getElementById('S_email').value;
	var S_pass = document.getElementById('S_pass').value;
	var action=document.getElementById('action').value;
	var host = document.getElementById('host').value;
	var S_name=document.getElementById('S_name').value;
	if(document.getElementById('S_email').value == '')
	{
		alert("Kindly fill your email-id");
		document.getElementById('S_email').focus();
		return (false);
	}
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById('S_email').value))) {
		alert("Invalid Email ID. Kindly enter the correct ID.");
		document.getElementById('S_email').focus();
		return (false);
	}
	if(S_pass == "" ) {
		alert("Kindly enter your Password.");
		document.getElementById('S_pass').focus();
		return false;
	}
	else if(S_pass.length < 4) {
		alert("The Password should be atleast 4 characters long.");
		document.getElementById('S_pass').focus();
		return false;
	}
	else if(S_pass.indexOf(" ") != -1) {
		alert("Kindly enter your Password without any spaces in it.");
		document.getElementById('S_pass').focus();
		return false;
	}
	document.body.style.cursor = 'wait';
	http.open('GET', '/cgi/updateprofile.cgi?S_email='+escape(S_email)+'&action='+escape(action)+'&S_pass='+escape(S_pass)+'&host='+escape(host)+'&S_name='+escape(S_name));
	http.onreadystatechange = handleResponse;
	http.send(null);
}


var xmlhttp = createRequestObject();

function createRequestObject() {

	var xmlHttpObj;
	if ( window.XMLHttpRequest ) {
		xmlHttpObj = new XMLHttpRequest();
	} else {
		xmlHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
	}

	return xmlHttpObj;
}

function getNewContent () {

	var page = "/cgi/dir-conversion-codes.mp"; 
	var rand = Math.random(); 
	var url = page + "?t=" + rand;
	xmlhttp.open("GET",url);
	xmlhttp.onreadystatechange = updateNewContent;
	xmlhttp.send(null);

	return false;
}

function updateNewContent(){
	if (xmlhttp.readyState == 4 ) { //&& xmlhttp.status==200) {
		try {
			document.getElementById('conversioncodes').innerHTML = xmlhttp.responseText;
		} catch ( e ) {
		}
	}
}

//-- google tarcking code
function invokeRequestForGaCode( trackScript ){
	//<!--google analytics async code start-->
	var script = trackScript;
	_gaq.push(['_trackPageview', script]);
	//<!--google analytics async code end-->
}

function show_dfp(chn_id)
{
	var cnt_ad= document.getElementById(chn_id);
	var cnt_timer = setInterval(function(){Timeinterval()},1000);
	setTimeout(function(){clearInterval(cnt_timer)},300000);
	function Timeinterval()
	{
		if((document.getElementById('google_ads_iframe_/3047175/DIR-Search_0').contentWindow.document.body.getElementsByTagName("IMG").length > 0) || (document.getElementById('google_ads_iframe_/3047175/Trade-Search_0').contentWindow.document.body.getElementsByTagName("IMG").length > 0))
		{
			cnt_ad.className = 'on dfp-ad';
			clearInterval(cnt_timer);
		}
	}
}
/*	Scrolling	*/
function scrollResults()
{
	ims.loading = false;
	$(window).scroll(function()
	{       
		if(!ims.loading && ims.r > ((ims.pg-1)*20) && ims.pg <= 10 && ($(window).scrollTop() >= $(document).height()-$(window).height()-2000))
		{	//ims.npFlag = 1;
			ims.loading = true;
			bringData(ims.ss, ims.pg, ims.cq, ims.c, ims.sDivId, ims.r, ims.modid, ims.biz);
		}
//		event tracking		
		for(var index=0; index<ims.scroll.length; index++)
		{
			if($(window).scrollTop() >= ims.scroll[index].pos && typeof(ims.scroll[index].track) != "undefined" && !ims.scroll[index].track && ims.pg <= 4)
			{
				recordOutboundLink(ims.ss, 'IMS', 'Page-Scrolled-'+ims.scroll[index].pg, 0, 0, true); 
				ims.scroll[index].track = true;
			}
		}
		if(ims.pageResult >= 20 && ims.pg >= 2 && ($(window).scrollTop()>=3430) && $('#fdbk_form').css('display') != 'block' && ims.autoFdbkShow == 0 && ims.feedbackShow == 1)
		{
		      sticky_feedback();
		}
	});
}
/* ss:search str, pg:page no, cq:city filter, c:country code, sDivId:scroll div, r:result count, modid, biz:biz filter*/
function bringData(ss, pg, cq, c, sDivId, r, modid, biz)
{
	var urlv = '';
	var d = {};
	if(modid == 'DIR')
	{
		urlv = "/search.mp";
		d.ss = ss;
	}
	else
	{
		urlv = "/search.mp";
		d.search = ss;
	}
	if(cq) d.cq = cq;	
	if(biz) d.biz = biz;	
	d.pg = pg;
	d.c = c;
	d.scroll = 1;
	if(ims.pr)d.pr = ims.pr;
//      frsc repesents the first result count beacuse in case of kwpl, generally service return more than 20 results
	if(typeof(ims.firstResultCount) != 'undefined')
	d.frsc = ims.firstResultCount;
	$('.wl-list-main').append('<div id='+sDivId+' class="fm2 p8 cur maia-button2" onclick="javascript:displayResults()"> Display More Results </div>');
	
	$.ajax({
		    url: urlv, 
		    data: d, 
		    success: function(jsonResult)
				{       
					var jsonData = $.parseJSON(jsonResult);
					displayListingData(jsonData, sDivId);
					$("img").lazyload({ threshold : 5000 });
				}
		});
 		if(ims.gAdFetch === 0)
 		{
		      (adsbygoogle = window.adsbygoogle || []).push({});
		      (adsbygoogle = window.adsbygoogle || []).push({});
// 		      ims.gAdFetch++;
		}
}

function displayResults()
{
	$('#'+ims.sDivId).hide();
	if(typeof ims.show != "undefined") {
	      var sDivId = ims.sDivId;
	      sDivId = sDivId.replace ( /[^\d.]/g, '' );
	      $("#scroll"+sDivId).before('<div class="m2 extra"></div>');
	      $('.wl-list-main').append('<div id=sc'+ims.pg+' class="a2 wdt1 fm1 fb fc3 p8"><span><img src="//dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">Fetching Results...</span><span> <img src="//dir.imimg.com/gifs/page.gif"/></span></div>');
	}
	var timerId = setInterval(function()
	{
		if(typeof ims.show != "undefined" && !ims.show)
		{
			if(typeof 'sc'+ims.pg != "undefined") 
			{
				$('#sc'+ims.pg).hide();
				if( $('.extra').length > 0)
        			$('.extra').remove();
			}
			$('.zigZac').show();
			$('.listing').show();
			$('.listing-divider').show();
// 			if(ims.grid_view == 0)
// 			{
// 			$('.distant-msg').hide();
// 			}
			changeColorEnquiryAlreadySent();
			if(ims.pg > 3 || (typeof(ims.manualTrack) != "undefined" && ims.manualTrack)) recordOutboundLink(ims.ss, 'IMS', 'Page-Scrolled-'+ims.pg, 0, 0, true); 
			ims.pg++;
			ims.sDivId = 'scroll'+ims.pg;
			ims.loading = false;
			ims.show = true;
			$("img").lazyload({ threshold : 5000 });
			clearInterval(timerId);
		}
	}, 100);	
}
function displayListingData(data, sDivId)
{
	ims.show = false;
	ims.manualTrack = true;
	var trackInfo = {"pos":$(document).height()-600, "pg":ims.pg};
	//$('#m').append('<div class="zigZac zigBg" style="display:none"><p class="Zigimg"></p></div>');
	for(var index=0; index<data.length; index++)
	{
		var unitHtml = getUnitHtml(data[index]);
		$('.wl-list-main').append(unitHtml);
	}
	ims.pageResult = parseInt(ims.pageResult)+ data.length;
// 	auto fetch begin
	if(!ims.show && ims.pg <= 3 && $(document).height()-$(window).scrollTop() >= $(window).height()+600)
	{
		$('#'+sDivId).hide();
		$('.zigZac').show();
		$('.listing').show();
		$('.listing-divider').show();
// 		if(ims.grid_view == 0)
// 		$('.distant-msg').hide();
		changeColorEnquiryAlreadySent();
		trackInfo.track = false;
		ims.manualTrack = false;
		ims.pg++;
		ims.sDivId = 'scroll'+ims.pg;
		ims.loading = false;
		ims.show = true;
	}
	//insta effect
	if (ims.modid=='ETO')
        {
            var img_results = (ims.pageResult-20)+1;
            for(var j=img_results; j<=ims.pageResult; j++) 
            {
                    $('#'+j+'imgenq').append('<div class="hidden-b"><div class="blur"><img src="//utils.imimg.com/imsrchui/imgs/z.gif" data-original="//utils.imimg.com/imsrchui/imgs/z.gif"></div></div>'); 
                    $('#'+j+'imgenq'+' '+'.hidden-b img').each(function(i,el){ 
                    el.id = 'img'+j;
                    $('#img'+j).attr("data-original",$('#i'+j).attr('data-original'));
                    });
            }
        }
// 	auto fetch end
	ims.scroll.push(trackInfo); //data info for event tracking
}
function getUnitHtml(unitData)
{
	//	listing div starts here
	var city_with_duplicate = unitData.city_with_duplicate;
	var displayid = unitData.displayid;
	var datatype = unitData.datatype;
	var image_to_display = unitData.image_to_display;
	var modreftype = unitData.modreftype;
	var cust_wt = unitData.cust_wt;
	var prod_desc = unitData.prod_desc;
	var query_href = unitData.query_href;
	var prd_flname = unitData.prd_flname;
	var complink = unitData.complink;
        var enq_click = unitData.enq_click;
	var price_click= unitData.price_click;
	var title_click = unitData.title_click;
        var img_click = unitData.img_click;
	var weblink = unitData.weblink;
	var glusr_id = unitData.glusr_id;
	var address = unitData.address;
	var contact_no = unitData.contact_no;
	var disp_forgeincountry = unitData.disp_forgeincountry;
	var count = unitData.count;
	var countryiso = unitData.countryiso;
	var large_image = unitData.large_image;
	var image = unitData.image;
	var img_hw = unitData.img_hw;
	var img_alt = unitData.img_alt;
	var moreLink = unitData.more_link;
	var comp = unitData.comp;
        var list_feedback = unitData.list_feedback; 
        var btn_color = unitData.btn_color;  
	var enquiryDivId = unitData.enquiryDivId;
	var enquiryDivName = unitData.enquiryDivName;
	var pos = unitData.pos;
	var ga_trk = unitData.ga_trk;
	var trust_seal = unitData.trust_seal;
	var title_zoomForm = unitData.title_zoomForm;
	var verfied_supplier = unitData.verfied_supplier || '';
        var prd_fllink = unitData.prd_fllink;
        var cust_nm = unitData.cust_nm;
	var type_of_form = 'senEnqform';
	var unit_html = '';
	var comp_detail = '';
//	var display_location_message='';
	var itemprice = unitData.itemprice || 0;
        var itemcurrency = unitData.itemcurrency || '';
	var nob = unitData.nob || '';	
	var moq_type = unitData.moq_type || '';
	var moq_typ_tooltip = unitData.moq_typ_tooltip;
	var button_url = unitData.button_url;
        var ecom_url = unitData.ecom_url;
	var tool_price = unitData.tool_price || '';
	var actual_price = unitData.actual_price || 0;
	var get_intent = unitData.get_intent;
	var supplier_city = unitData.city;
	var buy_nowbutton = unitData.buy_nowbutton;
	var locality = unitData.locality;
/*	if(ims.display_distant_location == 'yes' && ims.cq_all && unitData.d_in_range == 0)
	{
		display_location_message = '<div class="distant-msg" style="display:none">Showing relevant results from all India</div>';
		ims.display_distant_location = 'no';
	}
    unit_html = display_location_message;*/
    unit_html += unitStart;
    	
    if(large_image !== '' || image !==''){
	    unit_html += unitImage;
    }
    if(large_image === '' && image === '' )
    {
	    unit_html +=unitnoImage;
    }
    unit_html += unitDesc;
    unit_html += unitEnd;
    var even_class = '';
    if (count % 2 == 0) {even_class = 'mleft';}
    unit_html = unit_html.replace(/\[LS_CLS\]/, even_class);
    var cust_css = (cust_wt == 149) ? 'leader' : (cust_wt == 179) ?'star' :'normal';
    var img_class = cust_css+'-image';
    var supplier_type = (cust_wt == 149) ? 'Leading Supplier' : (cust_wt == 179) ?'Star Supplier' :'Normal Supplier';
    try{
    if (large_image === ''){
        unit_html = unit_html.replace(/listing-wdt/,'listing-wdt');// CSS customization

    }   
    var position = pos.replace ( /[^\d.]/g, '' ); 
    position = parseInt(position);
    var margin_class='nbrd';
    if((position)%4 == 0)
    {
	    unit_html = unit_html.replace(/\[MRG_CLS\]/,margin_class);
	    unit_html = unit_html.replace(/box/,'box nbrd');
    }
    if((position+3)%4 == 0)
    {
	unit_html = unit_html.replace(/box/,'box b1');
    }		
    var template_image = '';
    if(large_image !== ''){
	    template_image = large_image;
    } else if(image !==''){ 
	    template_image = image;
    }
    
    pos_ecom_price = '';
    if(ecom_url)
    {
	pos_ecom_price = '-ECOM';
    }
    else if(itemprice > 0)
    {
	pos_ecom_price = '-PRC';
    }

    
    unit_html = unit_html.replace(/\[CUST_CSS\]/,'off '+cust_css);// CSS customization
    unit_html = unit_html.replace(/\[NOB\]/,nob);// CSS customization
    unit_html = unit_html.replace(/\[CUST_TYPE\]/g,cust_nm);
    unit_html = unit_html.replace(/\[IMG_CLASS\]/,img_class);
    unit_html = unit_html.replace(/\[IMG_PATH\]/,template_image);
    unit_html = unit_html.replace(/\[IMG_ALT\]/,img_alt);
    unit_html = unit_html.replace(/\[IMG_HW\]/g,img_hw);
    unit_html = unit_html.replace(/\[PRODUCT_LINK\]/,prd_fllink);
    unit_html = unit_html.replace(/\[ENQDID_ID\]/g,enquiryDivId);
    unit_html = unit_html.replace(/\[EnqClass\]/g,enquiryDivId);
    unit_html = unit_html.replace(/\[ENQDID_NAME\]/,enquiryDivName);
//     unit_html = unit_html.replace(/button2/,btn_color);
    unit_html = unit_html.replace(/\[FEEDBACK_BLOCK\]/,list_feedback)
    unit_html = unit_html.replace(/\[SUPPLIER_TYPE\]/,supplier_type);
    unit_html = unit_html.replace(/\[PRODUCT_NAME\]/,prd_flname);
    unit_html = unit_html.replace(/\[LINK_TARGET\]/,unitData.link_target);
    unit_html = unit_html.replace(/\[DESCRIPTION\]/,prod_desc);
    unit_html = unit_html.replace(/\[MORE\]/,moreLink);
    unit_html = unit_html.replace(/\[COMPANY_NAME\]/,comp);
    unit_html = unit_html.replace(/\[TYPE_OF_SUPPLIER\]/,trust_seal);
    unit_html = unit_html.replace(/\[COMPANY_ADDRESS\]/,address);
    unit_html = unit_html.replace(/\[ENQ_OR_LINK\]/,weblink);
    unit_html = unit_html.replace(/\[CONTACT\]/,contact_no);
    if(ims.modid=='ETO')
    {
        var img_size = unitData.img_size;
        unit_html = unit_html.replace(/\[IMG_SIZE\]/,img_size);
    }
    
    if(actual_price > 0)
    {
	    unit_html = unit_html.replace(/\[UNIT_PRICE\]/,unitPrice);
	    unit_html = unit_html.replace(/\[CR_CLS\]/,'Rupeesym-red');
	    unit_html = unit_html.replace(/\[PR_CLS\]/,'price-wdt');
	    unit_html = unit_html.replace(/\[PRICE\]/,itemprice);
	    unit_html = unit_html.replace(/\[QUANT\]/,moq_type);
//	    var per_moq_type = (moq_typ_tooltip) ? ' per'+ ' '+moq_typ_tooltip : '';
//	    var tool_price = 'Approximate Price - Rs '+itemprice+per_moq_type;
	    unit_html = unit_html.replace(/\[TLTPRICE\]/,tool_price);
	    var price_onclick_enq = 'onclick = "imgset('+count+');recordOutboundLink(this, \''+cust_nm+'\', \'Pos'+count+'-Prclbl\',0,0);callUntillDefined(\'showEnquiryForm\','+ ims.attemptCounter+','+ims.time+','+'['+unitData.enquiry_param_price+']);"';
	    unit_html = unit_html.replace(/\[ENQ_EVENT\]/,price_onclick_enq);
    }
    else {
	    unit_html = unit_html.replace(/\[UNIT_PRICE\]/,'');
	    unit_html = unit_html.replace(/\[QUANT\]/,'');
	    unit_html = unit_html.replace(/\[TLTPRICE\]/,'');
	    unit_html = unit_html.replace(/\[ENQ_EVENT\]/,'');
    }
    
    unit_html = unit_html.replace(/\[POS\]/g,count);
    unit_html = unit_html.replace(/\[POS_TRK\]/g,pos+pos_ecom_price);
    unit_html = unit_html.replace(/\[ENQUIPARAM\]/g,'imgset('+count+');callUntillDefined(\'showEnquiryForm\', ims.attemptCounter, ims.time, ['+unitData.enquiry_param+']);');
    if(ecom_url)
    {
	  unit_html = unit_html.replace(/\[ENQUIPARAM_IMG\]/g,'');
    }else{
	  unit_html = unit_html.replace(/\[ENQUIPARAM_IMG\]/g,'imgset('+count+');callUntillDefined(\'showEnquiryForm\', ims.attemptCounter, ims.time, ['+unitData.enquiry_param+']);');
    }
    unit_html = unit_html.replace(/\[ENQUIPARAMPRI\]/g,'imgset('+count+');callUntillDefined(\'showEnquiryForm\', ims.attemptCounter, ims.time, ['+unitData.enquiry_param_price+']);');

    unit_html = unit_html.replace(/\[SAVE_TCLICK\]/g,title_click);
    unit_html = unit_html.replace(/\[SAVE_ECLICK\]/g,enq_click);
    unit_html = unit_html.replace(/\[SAVE_PCLICK\]/g,price_click);
    unit_html = unit_html.replace(/\[SAVE_ICLICK\]/g,img_click);

    if(modreftype ===1){
        unit_html = unit_html.replace(/\[INTEREST_ENQ\]/g,'');
    }else{
        unit_html = unit_html.replace(/\[INTEREST_ENQ\]/g,'');
    }
    if(ims.modid=='DIR')
    {
    $('.ask-p').remove();
    }   
    unit_html = unit_html.replace(/"listing-divider"/,'"listing-divider off"');
    
    if(ecom_url)
    {
      	unit_html = unit_html.replace(/\[ECOM-DISP\]/, 'ecom-container on');
	unit_html = unit_html.replace(/\[ENQ_DISP\]/, 'off');
	unit_html = unit_html.replace(/\[ECOM-LINK\]/, ecom_url+'?utm_source=buy-on-'+ims.modid+'-search&utm_medium=imreferral&utm_campaign=im-buy');
	unit_html = unit_html.replace(/\[ECOM-BTN\]/, button_url);
	unit_html = unit_html.replace(/-Title/, '-Title-ECOM');
	unit_html = unit_html.replace(/\-MainImg/, '-MainImg-ECOM');
	unit_html = unit_html.replace(/\[INT_REC\]/, 'getInterestRecord('+get_intent+')');
	unit_html = unit_html.replace(/\[BUY_NOW\]/, buy_nowbutton);
    }else{
	unit_html = unit_html.replace(/\[ECOM-DISP\]/, 'ecom-container off');
	unit_html = unit_html.replace(/\[ENQ_DISP\]/,'on');
	unit_html = unit_html.replace(/\[ECOM-LINK\]/, '');
	unit_html = unit_html.replace(/\[ECOM-BTN\]/, '//utils.imimg.com/imsrchui/imgs/z.gif');
	unit_html = unit_html.replace(/\[INT_REC\]/, '');
    }

	if(locality){
		locality = locality+', '+supplier_city;
	        unit_html = unit_html.replace(/\[CityLocationGrid\]/, locality);
	}
	else{
		unit_html = unit_html.replace(/\[CityLocationGrid\]/, supplier_city);
	}
        
    }catch(e){
//     alert(e);
    }
	return unit_html;
    }

function feedback_reset()
{
    var val_imesh = readCookie("ImeshVisitor");
    if(val_imesh != "")
    {
        var mobile = getparamVal(val_imesh, "mb1");
        if(mobile)
        {
            $('#fd_mob').hide();
            $('#mob').val(mobile);
        }
        else
        {
            $('#fd_mob').show();
        }
    }
    else
    {
        $('#fd_mob').show();
    }
    if(document.getElementById('r1').checked == true)
    {
        $('#suggestion').html('Thank You!! Any other Suggestions:');
        $('#any_othr_rsn').show('10');
    }
}

/* BL Form on Centralized header thru Jquery*/
$(document).ready(function(){
	$('#ch_post_buy').click(function(){
		$(this).removeAttr("href");
		display_bl_OverlayForm();
		$(this).css("cursor","pointer");
	});
});

function checkmob(id)
{
      var input_val = document.getElementById(id);
//       if(isNaN(input_val.value) == false)
      if((/^\s*([0-9]{0,15})\s*$/).test(input_val.value))
      {
	  input_val.style.border = "1px solid #CCCCCC";
	  return true;
      }else{
	  input_val.style.border = "1px solid #FF0000";
	  return false;
      }
}

$(window).mousemove(function(e) {
    var IsBlFormOpen = '';
    var session_storage_name = "IsBlFormOpen"+ims.modid;
    if (sessionStorage.getItem(session_storage_name)) {
        IsBlFormOpen = sessionStorage.getItem(session_storage_name);
    }
    
    if(IsBlFormOpen == 'YES' && (document.referrer && !document.referrer.match(/search.mp\?ss=/)) && ims.is_opened_mmForm != 'y' )
    {
	sessionStorage.removeItem(session_storage_name);
    }
    if (e.pageY < 1) {
        if ((IsBlFormOpen == 'YES' && ims.is_opened_mmForm == 'y') || (($('#blk_overlay1').length) && (($('#blk_overlay1').css('display')) == 'block')) || (($('#contentWrap').length) && (($('#contentWrap').css('display')) == 'block')) || (($('#form_s').length) && (($('#form_s').css('display')) == 'block')) || (($('#bl_overlay_layer_v2').length) && (($('#bl_overlay_layer_v2').css('display')) == 'block')) || (($('#enquiry').length) && (($('#enquiry').css('display')) == 'block'))) {} else {
//             if (typeof(open_bl_overlay_form) != "undefined") {
                if (blStop == 0) {
                     open_bl_page();
		     sessionStorage.setItem(session_storage_name, "YES");
                     ims.is_opened_mmForm = 'y';
                }
//             }
        }
    }
    var topPos = $(document).scrollTop();
    if (topPos > 0) {
        if (e.pageY <= topPos) {
            if ((IsBlFormOpen == 'YES') || (($('#blk_overlay1').length) && (($('#blk_overlay1').css('display')) == 'block')) || (($('#contentWrap').length) && (($('#contentWrap').css('display')) == 'block')) || (($('#form_s').length) && (($('#form_s').css('display')) == 'block')) || (($('#bl_overlay_layer_v2').length) && (($('#bl_overlay_layer_v2').css('display')) == 'block')) || (($('#enquiry').length) && (($('#enquiry').css('display')) == 'block'))) {} else {
//                 if (typeof(open_bl_overlay_form) != "undefined") {
                    if (blStop == 0) {
                        open_bl_page();
                        sessionStorage.setItem(session_storage_name, "YES");
                        ims.is_opened_mmForm = 'y';
                    }
//                 }
            }
        }
    }
});

// call me back functionality implementation start
$(document).ready(function(){
		page.notMeQ.push(call_me_back_notme);
		var val_imesh= readCookie('ImeshVisitor');
		var mobile = getparamVal(val_imesh, "mb1") || '';
		$('#cm_mobile').val(mobile);
		if(mobile)
		{
		$('#cm_mobile').hide();
		}
		$('.sticky-fd').click(function(){
			callme();
			if ($('.st-cont').css('display') === 'block') {
			searchFeedback();
			}
			});

		$('body').keypress(function(e){
			if(e.which == 27){
			// Close call me form
			callme();
			}
			});

});

function sticky_feedback() {
	ims.autoFdbkShow = 1;
	searchFeedback();
	if ($('#eto_footer_form').css('display') === 'block') {
	  $("#eto_footer_form").slideToggle();
	}
	if ($('.sticky').css('display') === 'block') {
		callme();
		$("#eto_footer_form").slideToggle();
	}
	setTimeout(track_enquiry, 2000);
}

function searchFeedback() {
	$('.st-cont').animate({
		width: "toggle"
	});
	$('.st-fdbk').toggleClass('aleft-fd');
	$('.st-fdbk').css('transition', '.50s');
}

$(window).scroll(function() {
	$('.st-fdbk').css('transition', '');
	//var top_call_back = ($('.sky-banner').css('display') == "none") ?  '110px' : '1100px';
	var scroll = $(window).scrollTop();
	if (scroll >= 1000) {
		$(".st-fdbk, .st-cont").css('top', '190px');
		$(".st-fdbk, .st-cont").css('position', 'fixed');
	} else {
		$(".st-fdbk, .st-cont").css('top', '1100px');
		$(".st-fdbk, .st-cont").css('position', 'absolute');
	}
});


function callme() {
    $('.sticky').animate({ width: "toggle"});
    $('.sticky-fd').toggleClass('aleft');
    $('.sticky-fd').css('transition', '.50s');
    $('#close').toggle();
}

function submit_call_me(callData) 
{
	callData.mobile = $('#cm_mobile').val(); 
	var val_imesh= readCookie('ImeshVisitor');
	var glid = getparamVal(val_imesh, "glid") || '';
	var mobile = getparamVal(val_imesh, "mb1") || $('#cm_mobile').val();
	if(mobile)
	{
		$('#cm_mobile').val(mobile);
	}
	var mob_val = mobile_validation(mobile,callData.iso);
	if(!mob_val)
	{
		$('#cm_mobile').show();
		return false;
	} 
	var url_request = callData.path || '/data/call-back-buy-lead-generation.php';
	var params_request = {};
	params_request  = {   
		"CAT_ID": callData.CAT_ID,
		"KW": callData.KW,
		"MODID": callData.MODID,
		"PROD_SERV": callData.PROD_SERV,
		"ISO": callData.iso,
		"mobile": mobile,
		"GLID" : glid
	}
	if($('#cm_mobile').val())
	{
		$.ajax({
url:url_request,
data:params_request,
type:"POST",
success: function(response)
{
$('#cm_p').hide();	
$('#cm_form').hide();
$('#cm_thx_mess').show();
setTimeout(function(){callme()}, 1500);	
}
});	
}
}

function mobile_validation(mobile,iso)
{
	var alert_msg = "Invalid mobile number.";
	var regex = /^[0-9-+()./ ]*$/;
	if (regex.test(mobile))
	{
		var count = (mobile.match(/[0-9]/g) || []).length;
		if(iso == 'IN') {
			if(count==10 || count==11 || count==12)
			{
				var rex=/[^0-9]/g;
				var rex1=/^0+/g;
				mobile = mobile.replace(rex,"");
				mobile = mobile.replace(rex1,"");
				var count = (mobile.match(/[0-9]/g) || []).length;
				var temp = new Array();
				temp = mobile.split("");
				var thirdnum=temp[2];
				var firstnum=temp[0];
				if(mobile == '')
				{
					alert("Please enter mobile number");
					document.getElementById('cm_mobile').focus();
					return false;
				}
				if((/^91/).test(mobile) && count>=12){
					if(!(/[789]/).test(thirdnum)){
						alert("Mobile number should start from 7,8,9.");
						document.getElementById('cm_mobile').focus();
						return false;	
					}

					if(count!=12|| count>12 ){
						alert("Please enter valid mobile number");
						document.getElementById('cm_mobile').focus();
						return false;	
					}
				}
				else if((/^91/).test(mobile) && (count==10 || count==11)){
					if(count!=10|| count>10 ){
						alert("Please enter valid mobile number");
						document.getElementById('cm_mobile').focus();
						return false;	
					}
				}
				else if(!(/^91/).test(mobile)){
					if(!(/[789]/).test(firstnum)){
						alert("Mobile number should start from 7,8,9.");
						document.getElementById('cm_mobile').focus();
						return false;	
					}
					if(count!=10|| count>10){
						alert("Please enter valid mobile number");
						document.getElementById('cm_mobile').focus();
						return false;	
					}
				}
			}
			else
			{
				alert(alert_msg);
				return false;
			}
		} 
		else
		{
			if(mobile.match(/0{4}/)){
				alert("Invalid mobile number.");
				document.getElementById('cm_mobile').focus();
				return false;
			}
			if(mobile/1==0){
				alert("Invalid mobile number.");
				document.getElementById('cm_mobile').focus();
				return false;
			}
		}
	} else {
		alert(alert_msg);
		return false;
	}
	return true;
}

function call_me_back_notme()
{
	var val_imesh= readCookie('ImeshVisitor');
	var mobile = getparamVal(val_imesh, "mb1") || '';
	if(mobile)
	{
		$('#cm_mobile').hide();
	}
	else
	{
		$('#cm_mobile').show();
	}
}

// call me back functionality implementation end

// bl form and feedback form implementation
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

function track_enquiry()
{
	if($('#fdbk_form').is(":visible"))
	{
		recordOutboundLink(this, 'FDBK-OPEN','1',0,0);
	}
}

function update_feedback_category()
{
	if(ims.com_catgory)
	{
	    $.ajax({
			url: "/insert_feedback_to_db.php", 
			data: { 
					  "search_id": ims.search_id,
					  "category" :ims.com_catgory
			      },
			  type: "POST",
			  success: function(){        
					  ims.feedbackSubmitted = 1;
					  setIMFormObject('imform','fdbk');
					  }
		  });
		  
      return true;
      }else{
      return false;
      }
 } 
 // code for bl form scroll up
var lastScrollTop =0;
$(window).scroll(function(event){
var st = $(window).scrollTop();
if(st==0){
 $('.open-bl').css({position: 'static',padding:'0 0 10px 0px' })
}
else if(st > lastScrollTop){
    $('.open-bl').css({top: '-18px' })
   } else {
    $('.open-bl').css({top: '78px', position: 'fixed' })
   }
   lastScrollTop = st;
});