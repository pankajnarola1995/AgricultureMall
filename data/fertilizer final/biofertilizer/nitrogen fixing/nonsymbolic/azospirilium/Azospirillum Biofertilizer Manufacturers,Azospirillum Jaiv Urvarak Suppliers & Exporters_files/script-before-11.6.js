/***
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96
    http://headjs.com
*/
browserName=navigator.appName;browserVer=parseInt(navigator.appVersion); condition=!(browserName.indexOf("Explorer")>=0&&browserVer<4||browserName.indexOf("Netscape")>=0&&browserVer<2);CanAnimate=condition==!0?!0:!1;
version = parseFloat(navigator.appVersion.split("MSIE")[1]);
if (version == "6"){
var fnt = "13px";
}
else
{
var fnt = "14px";
}
var value="",value=readLoginCookie("v4iilex"),url=document.URL,redirect="",redirect=url.match("/cgi/")?"/":url.match("signout.html")?"/":escape(url);
function getparam(key)
{
	if( (cookie = readLoginCookie("v4iilex")) > "")	
	{
		var val = "|"+cookie+"|";
		var pattern = new RegExp(".*?\\|"+key+"=([^|]*).*|.*");
		return val.replace(pattern, "$1");
	}
}
//  JS FOR DIR PAGES //
//$(document).on('click', '.wh', function(i) 
//{
//      var theID = $(this).attr('id');
//      $("#description"+theID).fadeIn("fast");
//      $(this).css({"display":"none"});
//});
function inreplc(idd,textt)
{
      textt=textt.replace(/&li;/g,'<');
      textt=textt.replace(/&gt;/g,'>');
      document.getElementById(idd).innerHTML=textt;
}
function showMoreProducts(divId,fetchId,mcatId,mcatName,catId,searchCity,end,rand,prod_serv,showkm,debug_mod,biz,cntAll){
	var xmlhttp; 
        ims.end = parseInt(ims.end) + 20;
       // var img_results = (ims.end-20)+1;
        //var end_result = ims.end;
        
	
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
			if( $('.extra').length > 0)
			$('.extra').remove();
			document.getElementById(divId).innerHTML=xmlhttp.responseText;
		}else{
			 var text_for_fetch = (prod_serv == 'S') ? 'Fetching more service providers...' : ((prod_serv == 'P') ? 'Fetching more products...' : 'Fetching more companies to show...');
			 document.getElementById(divId).className = "a2 wdt1 fm1 fb fc3 p8";
			$("#"+divId).before('<div class="m2 extra"></div>');
			 document.getElementById(divId).innerHTML='<span><img src="//dir.imimg.com/gifs/page.gif"/></span><span style="padding: 0pt 72px;" class="bo fs">'+text_for_fetch+'</span><span> <img src="//dir.imimg.com/gifs/page.gif"/></span>';
			 document.getElementById(fetchId).innerHTML= '';
			 document.getElementById(fetchId).className = "";
		}
	} 
	var pricecheck=0;
if(document.getElementById('pcheck') && (document.getElementById('pcheck').checked==true)){
  pricecheck='2';  // add it in url at end +"&price="+pricecheck
} 
	var url = "mcatName="+mcatName+"&mcatId="+mcatId+"&catId="+catId+"&searchCity="+searchCity+"&end="+end+"&rand="+rand+"&prod_serv="+prod_serv+"&showkm="+showkm+"&debug_mod="+debug_mod+"&biz="+biz+"&price="+pricecheck+"&cntAll="+cntAll;

	xmlhttp.open("POST", "../impcatProductPagination.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(url);
	//setTimeout(function(){ listingspacehide(); },1000); 
}

var count_autofetch = 0;
function autoFetchMore(listType,arg)
{  
    fetchcnt = 0;
    loading = false;
//     if((fetchcnt ==0) && (ims.mcat_ids == 37335))
    if(fetchcnt ==0){
      $(window).load(function(){ 
	 loading = true;
	  setTimeout(function(){
	  loading = false
	    var pfc = 'pagination'+fetchcnt;
            var fc = 'fetch'+fetchcnt;
            var  rand_number = Math.floor((Math.random()*5)+1);
            arg.fch_end_count = (fetchcnt ===0 ) ?arg.fch_end_count : parseInt(arg.fch_end_count) + 21;
            arg.fch_end_count = (fetchcnt ===1 ) ?(parseInt(arg.fch_end_count) + 7) :arg.fch_end_count ;
            if(listType == 'prd')
            {
            showMoreProducts(pfc,fc, arg.fch_mcatID,arg.fch_mcatName,arg.fch_catID,arg.fch_searchCityId,arg.fch_end_count,rand_number,arg.fch_prod_serv,arg.fch_showkm,arg.fch_debug_mod,arg.fch_biz,arg.cntAll);
            recordOutboundLink(document.URL, 'Trac-Fetch-More', 'Fetch-'+fetchcnt,0, 0);
            }
             fetchcnt++;
	},3); //to load js file 
      });
    }
    $(window).scroll(function(){
            if(fetchcnt < 2 && !loading && ($(window).scrollTop() >= $(document).height()-$(window).height()-600) && count_autofetch< 2)
            {
            count_autofetch++;
            loading = true;
            var pfc = 'pagination'+fetchcnt;
            var fc = 'fetch'+fetchcnt;
            var  rand_number = Math.floor((Math.random()*5)+1);
            arg.fch_end_count = (fetchcnt ===0 ) ?arg.fch_end_count : parseInt(arg.fch_end_count) + 20;
            arg.fch_end_count = (fetchcnt ===1 ) ?(parseInt(arg.fch_end_count) + 8) :arg.fch_end_count ; 
            if(listType == 'prd')
            { 
	    if(document.getElementById('cntlv')){arg.cntAll = document.getElementById('cntlv').value;}
            showMoreProducts(pfc,fc, arg.fch_mcatID,arg.fch_mcatName,arg.fch_catID,arg.fch_searchCityId,arg.fch_end_count,rand_number,arg.fch_prod_serv,arg.fch_showkm,arg.fch_debug_mod,arg.fch_biz,arg.cntAll);
            recordOutboundLink(document.URL, 'Trac-Fetch-More', 'Fetch-'+fetchcnt,0, 0);
            }
            else if(listType == 'comp')
            {
            showMore(pfc,fc,arg.fch_mcatID,arg.fch_mcatName,arg.fch_catID,arg.fch_searchCityId,arg.fch_end_count,rand_number,arg.fch_ct_name);
            recordOutboundLink(document.URL, 'Trac-Fetch-More', 'Fetch-'+fetchcnt,0, 0);
            }
            fetchcnt++;
            setTimeout(function(){loading = false},3000);
            }
    });
    //setTimeout(function(){ listingspacehide(); },1000);
}
function getblank(a){if(a.value=="Your Email here.")a.value="";return!0}
var isIndia= (-(new Date).getTimezoneOffset()/60==5.5) ? 1 : 0;

function DecidePnsNew(divId){try{var ids=divId; var ids=ids.replace("pns","pnsh"); var valpns=document.getElementById(ids).value; var lnk0='0'+valpns; var lnk91='+91-'+valpns; document.getElementById(divId).innerHTML = (isIndia) ? lnk0 : lnk91;}catch(e){} }
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

function showTTip(Id){
	document.getElementById(Id).style.display ='inline-block';
}
function hideTTip(Id){
	document.getElementById(Id).style.display ='none';
} 
function showTTipYear(Id,year,counter){
	document.getElementById(Id).style.display ='inline-block';
	document.getElementById('yr_mem'+counter).innerHTML=year+' year of Membership';

}
function myReplace(str, a, b) {
		var re = new RegExp(a, "g");
		var ret = str.replace(re,b);
		return ret;
	}

//resize the image on 29/06/15 by leena
function resizehw(Obj,h,w)
{
      myImage = new Image();
      myImage.onload = function()
      {
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
    Obj.height= height;
    Obj.width = width;
  }
myImage.src = Obj.src;
}

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2012 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.1-dev
 *
 */
(function(a,b){var c=a(b);a.fn.lazyload=function(d){function h(){var b=0;e.each(function(){var c=a(this);if(g.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,g)&&!a.leftofbegin(this,g))if(!a.belowthefold(this,g)&&!a.rightoffold(this,g))c.trigger("appear"),b=0;else if(++b>g.failure_limit)return!1})}var e=this,f,g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return d&&(undefined!==d.failurelimit&&(d.failure_limit=d.failurelimit,delete d.failurelimit),undefined!==d.effectspeed&&(d.effect_speed=d.effectspeed,delete d.effectspeed),a.extend(g,d)),f=g.container===undefined||g.container===b?c:a(g.container),0===g.event.indexOf("scroll")&&f.bind(g.event,function(a){return h()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(g.appear){var d=e.length;g.appear.call(b,d,g)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(g.data_attribute))[g.effect](g.effect_speed),b.loaded=!0;var d=a.grep(e,function(a){return!a.loaded});e=a(d);if(g.load){var f=e.length;g.load.call(b,f,g)}}).attr("src",c.data(g.data_attribute))}}),0!==g.event.indexOf("scroll")&&c.bind(g.event,function(a){b.loaded||c.trigger("appear")})}),c.bind("resize",function(a){h()}),a(document).ready(function(){h()}),this},a.belowthefold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.height()+c.scrollTop():f=a(e.container).offset().top+a(e.container).height(),f<=a(d).offset().top-e.threshold},a.rightoffold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.width()+c.scrollLeft():f=a(e.container).offset().left+a(e.container).width(),f<=a(d).offset().left-e.threshold},a.abovethetop=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollTop():f=a(e.container).offset().top,f>=a(d).offset().top+e.threshold+a(d).height()},a.leftofbegin=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollLeft():f=a(e.container).offset().left,f>=a(d).offset().left+e.threshold+a(d).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return!a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window)

function selecttext(event, ui){
	this.value = ui.item.value;
	if(typeof( ui.item.data) != 'undefined' && typeof( ui.item.data.catid) != 'undefined'  && ui.item.data.catid != ''){
		$('#hdr_frm').append( "<input type='hidden' name='catid' id='catid' value='"+ui.item.data.catid+"' >" );
	}
	if(event.keyCode == 13 || event.handleObj.origType=="click"){
	recordOutboundLink(this.value, 'Trac-AutoSuggest', 'Search-Top',0,0);
	document.getElementById('btnSearch').click();
    	}
}
function selecttext_bottom(event, ui){
	this.value = ui.item.value;
	if(event.keyCode == 13 || event.handleObj.origType=="click"){
	recordOutboundLink(this.value, 'Trac-AutoSuggest', 'Search-Bottom',0,0);
	document.getElementById('btnSearch1').click();
	}
}
function selecttext_city(event, ui){
	this.value = ui.item.value;
	if(event.keyCode == 13 || event.handleObj.origType=="click"){
	recordOutboundLink(this.value, 'Trac-AutoSuggest', 'Search-Bottom',0,0);
	document.getElementById('city_sugg').click();
	}
}
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
		if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest();} 
		else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("searchlist").innerHTML=xmlhttp.responseText;
			} 
		}
		var url = "ss1="+search;
		xmlhttp.open("POST", "../impcat-search.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");				
		xmlhttp.send(url);
		}	
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
// Google Remarketing Group IDS
function activateRemarketingTag(m_id, pagetype) 
{
  //alert(m_id+' mid'+pagetype);
	    var img = document.createElement("img");
	    img.onload = function() { return; };
	    var data = "dynx_itemid="+m_id+";dynx_pagetype="+pagetype;
	    data = encodeURIComponent(data);
	    img.src = src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1067418746/?value=0&guid=ON&script=0&data="+data+"&random=" + new Date().getTime();	
}
function google_remarketing_ids(id)
{
    var grp_ID = [5,7,13,14,34,29,30,42,45,41,37,38,25];
    //var li_tag = document.getElementById('sell_offers').getElementsByTagName('A');
	for(i=0;i < grp_ID.length; i++)
	{
		if(( grp_ID[i] === id )) 
		{
			return id;
		}
	}
	return 0;
}
function rightBanner()
{
      var other_pamtr = document.getElementById('rm4t_add_opamtr').value;
      mediaserver_width="242";
      mediaserver_height="204";
      mediaserver_location="TOP1RIGHT";
      mediaserver_contenttype="prdbanner";
      mediaserver_otherparam=other_pamtr;
      serve_ad("",M4Tprd);
}
var sky_ban = 0;
function afterPageLoad()
{
  //alert(m4tCatID+'  m4tCatID  '+catID+'  catID  '+mcatID+'   mcatID  ');
    function rightM4TBanner()
    {
      
	    if(typeof(rightBanner) != "undefined")
	    {
		    rightBanner();
	    }
	    else
	    {
		    setTimeout(function(){rightM4TBanner()}, 50);
	    }
    }
    function M4TBanner(banner1,target_url1,size1,location1,banner2,target_url2,size2,location2,banner3,target_url3,size3,location3,banner4,target_url4,size4,location4)
    {
      //alert(banner1+' ban1  '+target_url1+' turl1  '+size1+' size1  '+location1+' loc1 ');
//       	    var sky_ban = 0;
	    if(((size1 == '970x90') && (size1 !='')) || ((size2 == '970x90') && (size2 !='')) || ((size3 == '970x90') && (size3 !='')) || ((size4 == '970x90') && (size4 !='')))
	    {
		  sky_ban = 1;
	    }
	    else if(((size1 == '468x60') && (size1 !='')) || ((size2 == '468x60') && (size2 !='')) || ((size3 == '468x60') && (size3 !='')) || ((size4 == '468x60') && (size4 !='')))
	    {
		  sky_ban = 2;
	    }
	    else if(((banner1 == 'parsererror') && (banner1 !='')) || ((banner2 == 'parsererror') && (banner2 !='')) || ((banner3 == 'parsererror') && (banner3 !='')) || ((banner4 == 'parsererror') && (banner4 !='')))
	    {
		  sky_ban = 3;
	    }
	    if(sky_ban == 1)
	    {
		  var ext1 = banner1.substr(banner1.lastIndexOf('.')+1);
		  var ext2 = banner2.substr(banner2.lastIndexOf('.')+1);
		  var ext3 = banner3.substr(banner3.lastIndexOf('.')+1);
		  var ext4 = banner4.substr(banner4.lastIndexOf('.')+1);
		  
		  if(((ext1 != 'swf') && (ext1 != '')) || ((ext2 != 'swf') && (ext2 != '')) || ((ext3 != 'swf') && (ext3 != '')) || ((ext4 != 'swf') && (ext4 != '')))
		  {
			if(banner1)
			{
			      var ban_size1 = size1.split('x');
			      if(location1 == 'TOP1' && size1 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a id="test_m4ttop" target="_blank" href="'+target_url1+'"><img width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" border="0" vspace="0" hspace="0" src="'+banner1+'" /></a>';
			      }
			      else if(location1 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url1+'"><img width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" border="0" vspace="0" hspace="0" src="'+banner1+'" /></a>';
			      }
			      else if(location1 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url1+'"><img width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" border="0" vspace="0" hspace="0" src="'+banner1+'" /></a>';
			      }
			}
			if(banner2)
			{
			      var ban_size2 = size2.split('x');
			      if(location2 == 'TOP1' && size2 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a id="test_m4ttop" target="_blank" href="'+target_url2+'"><img width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" border="0" vspace="0" hspace="0" src="'+banner2+'" /></a>';
			      }
			      else if(location2 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url2+'"><img width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" border="0" vspace="0" hspace="0" src="'+banner2+'" /></a>';
			      }
			      else if(location2 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url2+'"><img width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" border="0" vspace="0" hspace="0" src="'+banner2+'" /></a>';
			      }
			}
			if(banner3)
			{
			      var ban_size3 = size3.split('x');
			      if(location3 == 'TOP1' && size3 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a id="test_m4ttop" target="_blank" href="'+target_url3+'"><img width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" border="0" vspace="0" hspace="0" src="'+banner3+'" /></a>';
			      }
			      else if(location3 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url3+'"><img width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" border="0" vspace="0" hspace="0" src="'+banner3+'" /></a>';
			      }
			      else if(location3 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url3+'"><img width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" border="0" vspace="0" hspace="0" src="'+banner3+'" /></a>';
			      }
			}
			if(banner4)
			{
			      var ban_size4 = size4.split('x');
			      if(location4 == 'TOP1' && size4 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a id="test_m4ttop" target="_blank" href="'+target_url4+'"><img width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" border="0" vspace="0" hspace="0" src="'+banner4+'" /></a>';
			      }
			      else if(location4 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url4+'"><img width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" border="0" vspace="0" hspace="0" src="'+banner4+'" /></a>';
			      }
			      else if(location4 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url4+'"><img width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" border="0" vspace="0" hspace="0" src="'+banner4+'" /></a>';
			      }
			}
		  }
		  else
		  {
			if(banner1)
			{
			      var ban_size1 = size1.split('x');
			      if(location1 == 'TOP1' && size1 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a target="_blank" href="'+target_url1+'"><embed width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner1+'"></a></embed>';
			      }
			      else if(location1 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url1+'"><embed width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner1+'"></a></embed>';
			      }
			      else if(location1 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url1+'"><embed width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner1+'"></a></embed>';
			      }
			}
			if(banner2)
			{
			      var ban_size2 = size2.split('x');
			      if(location2 == 'TOP1' && size2 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a target="_blank" href="'+target_url2+'"><embed width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner2+'"></a></embed>';
			      }
			      else if(location2 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url2+'"><embed width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner2+'"></a></embed>';
			      }
			      else if(location2 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url2+'"><embed width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner2+'"></a></embed>';
			      }
			}
			if(banner3)
			{
			      var ban_size3 = size3.split('x');
			      if(location3 == 'TOP1' && size3 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a target="_blank" href="'+target_url3+'"><embed width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner3+'"></a></embed>';
			      }
			      else if(location3 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url3+'"><embed width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner3+'"></a></embed>';
			      }
			      else if(location3 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url3+'"><embed width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner3+'"></a></embed>';
			      }
			}
			if(banner4)
			{
			      var ban_size4 = size4.split('x');
			      if(location4 == 'TOP1' && size4 == '970x90')
			      {
				      document.getElementById('m4tTOP').innerHTML='<a target="_blank" href="'+target_url4+'"><embed width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner4+'"></a></embed>';
			      }
			      else if(location4 == 'TOP1LEFT')
			      {
				      document.getElementById('TOP1LEFT').innerHTML='<a target="_blank" href="'+target_url4+'"><embed width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner4+'"></a></embed>';
			      }
			      else if(location4 == 'TOP1RIGHT')
			      {
				      document.getElementById('TOP1RIGHT').innerHTML='<a target="_blank" href="'+target_url4+'"><embed width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner4+'"></a></embed>';
			      }
			}
		  }
	    }
	    else if(sky_ban == 2)
	    {
		  var ext1 = banner1.substr(banner1.lastIndexOf('.')+1);
		  var ext2 = banner2.substr(banner2.lastIndexOf('.')+1);
		  var ext3 = banner3.substr(banner3.lastIndexOf('.')+1);
		  var ext4 = banner4.substr(banner4.lastIndexOf('.')+1);
		  if(((ext1 != 'swf') && (ext1 != '')) || ((ext2 != 'swf') && (ext2 != '')) || ((ext3 != 'swf') && (ext3 != '')) || ((ext4 != 'swf') && (ext4 != '')))
		  {
			if(banner1)
			{
			      var ban_size1 = size1.split('x');
			      if(location1 == 'TOP1' && size1 == '468x60')
			      {
			      	      
			      	      
				      $('#m4top1').removeClass("off").addClass("on");

				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url1+'"><img width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" border="0" vspace="0" hspace="0" src="'+banner1+'" /></a>';
			      }
			}
			if(banner2)
			{
			      var ban_size2 = size2.split('x');
			      if(location2 == 'TOP1' && size2 == '468x60')
			      {
			      	      
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url2+'"><img width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" border="0" vspace="0" hspace="0" src="'+banner2+'" /></a>';
			      }
			}
			if(banner3)
			{
			      var ban_size3 = size3.split('x');
			      if(location3 == 'TOP1' && size3 == '468x60')
			      {
				      				      
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url3+'"><img width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" border="0" vspace="0" hspace="0" src="'+banner3+'" /></a>';
			      }
			}
			if(banner4)
			{
			      var ban_size4 = size4.split('x');
			      if(location4 == 'TOP1' && size4 == '468x60')
			      {
			      				      
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url4+'"><img width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" border="0" vspace="0" hspace="0" src="'+banner4+'" /></a>';
			      }
			 }
		  }
		  else
		  {
			if(banner1)
			{
			      var ban_size1 = size1.split('x');
			      if(location1 == 'TOP1' && size1 == '468x60')
			      {
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url1+'"><embed width ="'+ban_size1[0]+'" height = "'+ban_size1[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner1+'"></a></embed>';
			      }			      
			}
			if(banner2)
			{
			      var ban_size2 = size2.split('x');
			      if(location2 == 'TOP1' && size2 == '468x60')
			      {
				    				      
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url2+'"><embed width ="'+ban_size2[0]+'" height = "'+ban_size2[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner2+'"></a></embed>';
			      }			      
			}
			if(banner3)
			{
			      var ban_size3 = size3.split('x');
			      if(location3 == 'TOP1' && size3 == '468x60')
			      {
				       $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url3+'"><embed width ="'+ban_size3[0]+'" height = "'+ban_size3[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner3+'"></a></embed>';
			      }
			}
			if(banner4)
			{
			      var ban_size4 = size4.split('x');
			      if(location4 == 'TOP1' && size4 == '468x60')
			      {
				      				      
				      $('#m4top1').removeClass("off").addClass("on");
				      $('#m4tgap').removeClass("listing-divider on").addClass("listing-divider off");
				      document.getElementById('m4tTOP1').innerHTML='<a target="_blank" href="'+target_url4+'"><embed width ="'+ban_size4[0]+'" height = "'+ban_size4[1]+'" wmode="opaque" border="0" vspace="0" hspace="0" src="'+banner4+'"></a></embed>';
			      }
			}
		  }
	    }
 	     var win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	    if((sky_ban == 2 || sky_ban == 3) && (adult_flag == 0))
	    {
		  var sky_banner = document.getElementById('div-gpt-ad-1381316735441-0');
		  if (win_width>=1280)
		  {
			  sky_banner.className = 'on sky-banner';
			  sky_banner.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		  }		  
	    }
	    else if(sky_ban == 1)
	    {
		  var sky_banner_m4tl = document.getElementById('top1left_m4t');
		  var sky_banner_m4tr = document.getElementById('top1rgt_m4t');		  
		  if (win_width>=1280)
		  {
			  sky_banner_m4tl.className = 'on sky-banner';
			  sky_banner_m4tl.style.marginRight =  (win_width>=1366) ? '310px' : '';
			  sky_banner_m4tr.className = 'on sky-banner';
			  sky_banner_m4tr.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		  }
	    }
    }    
    var page_url=document.URL;
    var url_patt=/indianexporters|indianservices/gi;
    var glID = getparamVal(readCookie("v4iilex"),"id");
    if(page_url.match(url_patt) || imd.dir_page == 'impcat')
    {
   	  head.js("//cdn.media4trade.com/js/mediaserver-dir.js");
//   	  head.js("http://dev-m4t.media4trade.com/js/mediaserver-dir.js");
	  head.ready("mediaserver-dir.js", function(){
	      mediaserver_size1 = "970x90";
	      mediaserver_size2 = "468x60";
	      mediaserver_size3 = "120x600";
	      mediaserver_size4 = "120x600";
	      mediaserver_location1 = "TOP1";
	      mediaserver_location2 = "TOP1";
	      mediaserver_location3 = "TOP1RIGHT";
	      mediaserver_location4 = "TOP1LEFT";
	      //mediaserver_cat = catID;
	      if(m4tCatID > 0) 
	      { 
		    mediaserver_cat = m4tCatID;
	      }
	      else if(mcatID > 0) 
	      { 
		    mediaserver_mcat = mcatID;
	      }
	      if(glID > 0) 
	      { 
		    mediaserver_gluserid = glID;
	      }
	      serve_ad("",M4TBanner);
	      rightM4TBanner();
	  });
    }
    else if(page_url.match(/industry/ig))
    {
		  var sky_banner = document.getElementById('div-gpt-ad-1381316735441-0');
		  if (screen.width>=1280)
		  {
			  sky_banner.className = 'on sky-banner';
			  sky_banner.style.marginLeft =  (screen.width>=1366) ? '310px' : '';
		  }
    }
    
      //DFP ads implementation
      function show_dfp_ad_sky()
      {
	      if(typeof(googletag)!="undefined") 
	      {
		      googletag.cmd.push(function() {
		      googletag.defineSlot('/3047175/DIR-IM-MCAT-Skyscraper', [120, 600], 'div-gpt-ad-1381316735441-0').addService(googletag.pubads());
		      
		      googletag.defineSlot('/3047175/DIR_Bottom_Image_Ad_Unit_Footer', [300, 250], 'div-gpt-ad-1398939762198-0').addService(googletag.pubads());
		      googletag.pubads().enableSingleRequest();
		      googletag.enableServices();
		      });		      
		      googletag.cmd.push(function() {			
		      googletag.display('div-gpt-ad-1381316735441-0');		      
		      googletag.display('div-gpt-ad-1398939762198-0');
		      });
	      }	
	      else
	      {
		      setTimeout(function(){show_dfp_ad_sky()}, 50);
	      }
      }
      head.js("//www.googletagservices.com/tag/js/gpt.js");
      head.ready("gpt.js", function(){
	      setTimeout(function(){show_dfp_ad_sky()}, 5);	
      });
    
//      function show_afc_ad()
//      {
//	    if(typeof(adsbygoogle)!="undefined") 
//	    {
//		    document.getElementById('afc_rgt_mdl_add').style.display = 'block';
//		    (adsbygoogle = window.adsbygoogle || []).push({});
//	    }
//	    else
//	    {
//		    setTimeout(function(){show_afc_ad()}, 50);
//	    }
//     }
//    if((adult_flag == 0 && imd.dir_page == 'impcat'))
//    {
//	    head.js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
//	    head.ready("adsbygoogle.js", function(){
//		    setTimeout(function(){show_afc_ad()}, 5);
//	    });
//    }
//    else if(page_url.match(url_patt))
//    {
//	    head.js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
//	    head.ready("adsbygoogle.js", function(){
//		    setTimeout(function(){show_afc_ad()}, 5);
//	    });			
//    }
}
var product='';
$(window).load(function(){
  	if((imd.unq_list_count != 0) || imd.dir_page == 'generated')
	{
		if(imd.dir_page == 'impcat')
		{
			$("img").lazyload({ threshold : 5000 });
			product = {identifier: mcatID};
			(function(){
				    var s   = document.createElement('script');
				    var x   = document.getElementsByTagName('script')[0];
				    s.type  = 'text/javascript';
				    s.async = true;
				    s.src   = ('https:'==document.location.protocol?'https://':'http://')
					    + 'ap-sonar.sociomantic.com/js/2010-07-01/adpan/indiamart-in';
				    x.parentNode.insertBefore( s, x );
			    })();
// 			    This code used for SilverPush
// 			    var _spp = _spp || []; _spp.push(['SP-dir_indiamart_com']); _spp.push(['trackAll']); (function() { window._spp = _spp; var sp = document.createElement('script'); sp.type = 'text/javascript'; sp.async = true; sp.src = ('https:' == document.location.protocol ? 'https://pix' : 'http://pix') + '.SilverPush.co/pixel.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sp, s); })();
		}
		if(adult_flag == 0 && imd.dir_page == 'impcat')
		{
			loadScript(imd.scriptafter,
			function() {
			//	loadBottomAd(); //not in use
			});
			
			var getID = google_remarketing_ids(grpID);
			if(getID > 0)
			{
			    setTimeout(function(){activateRemarketingTag(mcatID,'mcat')}, 5);
			}
		}
		else if((adult_flag != 0 && adult_flag != '') && (imd.dir_page == 'impcat'))
		{
			loadScriptnotfound(imd.scriptafter);
		}
		setTimeout('afterPageLoad()',5);
	}
	else if(imd.dir_page == 'City Not Found')
	{
	        loadScriptnotfound(imd.scriptafter);
	}
	else
	{
 	      setTimeout("head.js('//cdn.media4trade.com/js/mediaserver-dir.js')",1);
	}			    
})
function notme()
{
	try{
        eraseCookie('ImeshVisitor');
        eraseCookie('v4iilex');
	getLoginStringv1();
	showEnqExpFormAfterNotMe();
	}catch(e){
	}

}
//Function added to adopt centralized Enq form ///////
//function notMeP(){ eraseCookie('ImeshVisitor'); getLoginString(); }  
function getLoginString() { getLoginStringv1(); }
try{page.notMeQ.push(notme);}catch(e){}
//////////////////////////////////////////////////////

function showEnqExpFormAfterNotMe()
{
	$("#new").fadeIn("fast");
    $("#identified-container").css("display", "none"); 
    try{//This part will work only for send Enq Button
        $("#nu_frm").fadeIn("fast"); 
        $("#enq-frm-tab").fadeIn("fast"); 
    }catch(e){
    }
    try {

        // setTimeout(function(){newusr('new');}, 50);
        paramsArray = getNewUserParams();
        for (var i=0; i<paramsArray.length;i++) {
            try{
                if ( paramsArray[i] == 'S_salute' || paramsArray[i] == 'S_countryname' ||  paramsArray[i] == 'S_cmobile'  ||  paramsArray[i] == 'which_submit' || paramsArray[i] == 'S_country_name'){
                    continue;
                }
                document.getElementById(paramsArray[i]).value = '';
            }catch(e){
            }
        }

        document.getElementById('S_salute').value = 'Mr.';
        checkIpCountry();
    } catch (e){
    }
}
function callUntillDefined(fnstring, attemptCounter, time, fnparams)
{
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
var lead='';
function socio_success()
{
  	var rand_number = (Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10);
	sociomantic.sonar.adv['indiamart-in'].clear();
	window.lead = { products: [
            { identifier: mcatID, amount: 1.00, currency: 'INR', quantity: 1 }
        ],
        transaction : rand_number,
        amount: 1.00,
        currency: 'INR'
    };
    sociomantic.sonar.adv['indiamart-in'].track();
    //     for vizury
    pixel.parse(true);
}
$(document).ready(function(){
//Suggested MCAT's More logic starts here
$(".mcat-more").click(function(){
   $(".cat-hide").slideToggle();
$(".recentSupplier").toggleClass('rc-mor');
});    
//Suggested MCAT's More logic ends here    
$(window).resize(function(){
    var win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    win_resize(win_width,sky_ban);
    });
});
function win_resize(win_width,sky_ban)
{
	  var sky_banner_m4tl = '';
	  var sky_banner_m4tr = '';
	  var sky_banner='';
	  if(win_width>=1280)
	  {
		if(sky_ban == 2 || sky_ban == 3)
		{
			      sky_banner = document.getElementById('div-gpt-ad-1381316735441-0');
			      sky_banner.className = 'on sky-banner';
			      sky_banner.style.marginLeft =  (win_width>=1366) ? '310px' : '';
      
		}
		else if(sky_ban == 1)
		{
			      sky_banner_m4tl = document.getElementById('top1left_m4t');
			      sky_banner_m4tr = document.getElementById('top1rgt_m4t');
			      sky_banner_m4tl.className = 'on sky-banner';
			      sky_banner_m4tl.style.marginRight =  (win_width>=1366) ? '310px' : '';
			      sky_banner_m4tr.className = 'on sky-banner';
			      sky_banner_m4tr.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		}
	  }
	  else
	  {
		if(sky_ban == 2 || sky_ban == 3)
		{
			      sky_banner = document.getElementById('div-gpt-ad-1381316735441-0');
			      sky_banner.className = 'off sky-banner';
			      sky_banner.style.marginLeft =  (win_width>=1366) ? '310px' : '';
      
		}
		else if(sky_ban == 1)
		{
		  	      sky_banner_m4tl = document.getElementById('top1left_m4t');
			      sky_banner_m4tr = document.getElementById('top1rgt_m4t');
			      sky_banner_m4tl.className = 'off sky-banner';
			      sky_banner_m4tl.style.marginRight =  (win_width>=1366) ? '310px' : '';
			      sky_banner_m4tr.className = 'off sky-banner';
			      sky_banner_m4tr.style.marginLeft =  (win_width>=1366) ? '310px' : '';
		}
	  }
}
/*This function is use for xnHist Cookie value blank thru JS */
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

function loadScript(url, callback) {

                var script = document.createElement("script")
                script.type = "text/javascript";

                if (script.readyState) {  //IE
                    script.onreadystatechange = function() {
                        if (script.readyState == "loaded" ||
                                script.readyState == "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {  //Others
                    script.onload = function() {
                        callback();
                    };
                }

                script.src = url;
                document.body.appendChild(script);
            }
            
function loadScriptnotfound(url) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
	script.onreadystatechange = function() {
	    if (script.readyState == "loaded" ||
		    script.readyState == "complete") {
		script.onreadystatechange = null;
// 		callback();
	    }
	};
    } else {  //Others
	script.onload = function() {
// 	    callback();
	};
    }

    script.src = url;
    document.body.appendChild(script);
}
/* Scroll to TOP JS */
$(document).ready(function()
{
if(imd.unq_list_count != 0)
{
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
		$('.top-block').fadeIn();
		} else {
		$('.top-block').fadeOut();
		}
		//blformfixdiv(); /* Function for sticky RHS Form on List MCAT Page */
		});
	$('.top-block').click(function()
		{
		recordOutboundLink('top-block','Track-scroll-top','topcount',0,0);
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
		});
}
});
function listing_feedback(fcounter,counter,phone,gid,prod_id,page,mid)
{
  //alert(fcounter+' z '+counter);
$('#fedbak-container'+counter).toggle();
if($('#fedbak-cross'+counter).length == 0){
  	$('#'+fcounter).after('<div class="fedbak-cross" id="fedbak-cross'+counter+'" onclick="feedback_close('+counter+',\''+fcounter+'\');"> x </div><div class="fedbak-container fedbak-option off" id="fedbak-container'+counter+'"> <div class="fdborder"> <div id="phissue'+counter+'" class="tab sv" style="display: block;" onclick="phone_issue('+counter+',\''+fcounter+'\');"> <span> <svg viewbox="0 0 126 126" height="126px" width="126px" y="0px" x="0px" id="Layer_1" version="1.1" class="sv" style="height:16px;width:16px;margin-left:-2px;"> <path d="M86.685,12.926H39.315c-2.178,0-3.949,1.772-3.949,3.95v93.1c0,2.178,1.771,3.95,3.949,3.95h47.369 c2.178,0,3.949-1.772,3.949-3.95v-93.1C90.634,14.698,88.862,12.926,86.685,12.926z M59.127,105.426c0-2.14,1.732-3.875,3.873-3.875 c2.143,0,3.873,1.735,3.873,3.875s-1.73,3.875-3.873,3.875C60.859,109.301,59.127,107.566,59.127,105.426z M38.366,98.785V25.207 h49.268v73.578H38.366z"/> </svg> </span>Issue with Phone Number </div> <div id="phnoption'+counter+'" class="option" style="display:none;"> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',1,'+counter+',\''+fcounter+'\');"> No one picked up the call </div> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',2,'+counter+',\''+fcounter+'\');"> Incorrect Phone number </div> <div class="tab" onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',3,'+counter+',\''+fcounter+'\');"> Call Disconected </div> </div> <div id="prodissue'+counter+'" class="tab sv" style="display: block;"  onclick="product_issue(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',4,'+counter+',\''+fcounter+'\');"> <span> <svg style="margin-top:-4px;padding-right:3px;" viewbox="0 0 87.606 86.559" height="20px" width="20px" y="0px" x="0px" class="sv"> <g id="Gift"> <g> <path d="M84.299,21.678H60.246l5.496-2.723c0.323-0.154,0.617-0.368,0.874-0.625c2.024-2.026,3.139-4.727,3.139-7.593 c0-2.872-1.114-5.566-3.139-7.599c-4.182-4.182-10.978-4.182-15.159,0c-0.227,0.23-0.419,0.492-0.571,0.775L43.23,18.155 L35.574,3.914c-0.152-0.283-0.345-0.545-0.572-0.77c-4.179-4.192-10.978-4.192-15.156,0c-4.179,4.187-4.179,10.999,0,15.186 c0.254,0.257,0.551,0.471,0.871,0.625l5.496,2.723H3.307C1.481,21.678,0,23.164,0,24.992v19.672c0,1.829,1.481,3.311,3.307,3.311 h3.821v35.274c0,1.829,1.48,3.31,3.307,3.31h66.943c1.825,0,3.307-1.48,3.307-3.31V47.975h3.614c1.826,0,3.308-1.481,3.308-3.311 V24.992C87.606,23.164,86.125,21.678,84.299,21.678z M40.264,79.934V47.975h7.162v31.959H40.264z M47.487,41.35h-7.16V28.308h7.16 V41.35z M56.44,7.545c1.612-1.315,3.997-1.225,5.5,0.283c0.775,0.775,1.203,1.808,1.203,2.909c0,0.94-0.312,1.834-0.893,2.562 l-12.128,6.004L56.44,7.545z M24.521,7.828c1.449-1.454,3.928-1.566,5.497-0.283l6.317,11.758l-12.127-6.004 C22.928,11.684,23.032,9.32,24.521,7.828z M6.611,28.308h27.102V41.35H6.611V28.308z M13.739,47.975h23.22v31.959h-23.22V47.975z M74.073,79.934H50.73V47.975h23.343V79.934z M80.995,41.35H54.099V28.308h26.896V41.35z"/> </g></g></svg> </span>The product is not relevant </div> <div id="detailissue'+counter+'" class="tab sv" style="display: block;" onclick="product_details_issue('+counter+',\''+fcounter+'\');"> <span> <svg style="width:19px;height:19px;margin-left:-2px" viewbox="0 0 26 26" height="26px" width="26px" y="0px" x="0px"> <g> <rect x="7.61" y="8.281" width="8.23" height="1.334"/> <path d="M19.871,18.311c0.638-1.127,0.453-2.563-0.475-3.49c-0.549-0.549-1.279-0.852-2.058-0.852c-0.779,0-1.51,0.303-2.059,0.852 s-0.852,1.279-0.852,2.059c0,0.777,0.303,1.508,0.852,2.059c0.549,0.547,1.279,0.85,2.057,0.85c0.507,0,0.998-0.129,1.434-0.375 l3.262,3.262l1.101-1.102L19.871,18.311z M18.563,18.104c-0.652,0.652-1.796,0.652-2.448,0c-0.675-0.676-0.675-1.773,0-2.449 c0.326-0.326,0.762-0.506,1.225-0.506s0.897,0.18,1.224,0.506c0.327,0.326,0.507,0.762,0.507,1.225S18.89,17.777,18.563,18.104z"/> <path d="M18.231,20.523H6.756c-0.182,0-0.329-0.148-0.329-0.328V5.861c0-0.182,0.147-0.329,0.329-0.329h11.475 c0.182,0,0.328,0.147,0.328,0.329v7.312c0.475,0.104,0.918,0.307,1.31,0.597V5.861c0-0.903-0.734-1.638-1.638-1.638H6.756 c-0.903,0-1.638,0.735-1.638,1.638v14.334c0,0.902,0.735,1.637,1.638,1.637h11.475c0.685,0,1.009-0.162,1.253-0.76l-0.594-0.594 C18.671,20.57,18.325,20.523,18.231,20.523z"/> <rect x="7.61" y="12.041" width="8.23" height="1.334"/> </g> </svg> </span> Report Wrong Details </div> <div id="detailoption'+counter+'" class="option" style="display:none;"> <div class="tab"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',5,'+counter+',\''+fcounter+'\');"> Incorrect Product Details </div> <div class="tab"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',6,'+counter+',\''+fcounter+'\');"> This supplier is spammer </div><div class="tab" style="line-height:15px"  onclick="submit_feedback(\''+phone+'\','+gid+','+prod_id+',\''+page+'\','+mid+',9,'+counter+',\''+fcounter+'\');"> Supplier does not deal in this &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; product </div> </div> <div class="fed_thx_msg" id="thx_msg'+counter+'" style="display:none;"> <span><svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 126 126"> <path stroke="#6D6E70" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" d="M100.517,25.488  C79.829,4.799,46.17,4.799,25.486,25.483C4.798,46.169,4.8,79.829,25.488,100.517c20.682,20.684,54.341,20.684,75.027-0.004  C121.201,79.829,121.199,46.171,100.517,25.488z M94.728,94.728c-17.494,17.494-45.961,17.496-63.455,0.002  c-17.498-17.497-17.496-45.966,0-63.46c17.494-17.493,45.959-17.495,63.457,0.002C112.224,48.766,112.222,77.235,94.728,94.728z   M43.211,48.641c0-3.423,2.777-6.201,6.201-6.201c3.423,0,6.2,2.777,6.2,6.201c0,3.426-2.777,6.203-6.2,6.203  C45.988,54.844,43.211,52.067,43.211,48.641z M71.328,48.641c0-3.423,2.78-6.201,6.203-6.201c3.423,0,6.201,2.777,6.201,6.201  c0,3.426-2.777,6.203-6.201,6.203C74.108,54.844,71.328,52.067,71.328,48.641z M85.988,74.039  c-3.843,8.887-12.843,14.629-22.928,14.629c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.53,0.089-3.286,1.62-3.921  c0.376-0.156,0.766-0.23,1.15-0.23c1.176,0,2.292,0.696,2.771,1.85c2.777,6.685,9.655,11.004,17.523,11.004  c7.69,0,14.528-4.322,17.421-11.011c0.658-1.521,2.424-2.222,3.944-1.563C85.946,70.752,86.646,72.518,85.988,74.039z"/> </svg></span><p style="padding-top:10px;font-weight:bold;color:#000;">Thank You!</p></div></div> <p class="clear1"> </p> <p class="clear1"> </p> </div>');
$('#fedbak-container'+counter).show();	
	}
	else{
		$('#phissue'+counter).show();
		$('#prodissue'+counter).show();
		$('#detailissue'+counter).show();
		$('#thx_msg'+counter).hide();
	}
	
	$('#fedbak-cross'+counter).hide();
	$(document).mouseup(function (e)
	{
            var target_id=e.target.id;
	    var container = $('#fedbak-container'+counter);
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
		var url = "phone="+phone+"&gid="+gid+"&prod_id="+prod_id+"&page="+page+"&mid="+mid+"&feedback="+feedback;
		xmlhttp.open("POST", "../listing_feedback.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");				
		xmlhttp.send(url);
		if((feedback) && (feedback < 4))
		{
		    phn_option(counter,icon_counter);
		}
		else if((feedback) && (feedback > 4))
		{
		    details_option(counter,icon_counter);
		}
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

/* Sticky RHS Form for MCAT Page */
function blformfixdiv()
{
	if(ims.grid_view==0)
	{
	var absolute_height = $(document).height() - $(window).height() - 620;
	var toph = $(document).height() - $(window).height() - 600;
	var header_height = $("#header").height() + 10;
	var upper_div = $("#hdiv").height();
	var topoffset = (document.getElementById('m4t2')) ? $(window).scrollTop() - 916 : $(window).scrollTop() - 600;
	// condition1
	if ($(window).scrollTop() >= $("#hdiv").height() && $(document).height() > 2000)
	{
		$('#eto_ofr_ftr_frm').css({position: 'fixed',top: header_height+'px' });

	}
	// condition2
	if ($(window).scrollTop() >= absolute_height && $(document).height() > 2000)
	{
		$('#eto_ofr_ftr_frm').css({position: 'absolute',top: toph+'px'});
				
	}
	// condition3
	if (topoffset < $(window).height() && $(document).height() > 2000)
	{
		$('#eto_ofr_ftr_frm').removeAttr("style");
		
	}
	}
}
/*Feedback Pop-UP mouse-hover movement effect on Grid View */                                                                                                                                                                   
$(window).load(function(){
$('.box').hover(
       function(){
$('.fedbak-container').hide()
          $('.fedbak-cross').hide()
          $('.tab sv').hide()
          $('.option').hide()
          $('.fedbak-Arrow').show()
});
});

$(window).mousemove(function(e) {  
var IsBlFormOpenDIR='';
if(sessionStorage.getItem("IsBlFormOpenDIR")){
  IsBlFormOpenDIR=sessionStorage.getItem("IsBlFormOpenDIR");
}
if(e.pageY < 1) {
    if((IsBlFormOpenDIR=='YES') || (($('#blk_overlay1').length) && (($('#blk_overlay1').css('display')) == 'block')) || (($('#contentWrap').length) && (($('#contentWrap').css('display')) == 'block')) || (($('#form_s').length) && (($('#form_s').css('display')) == 'block')) || (($('#bl_overlay_layer_v2').length) && (($('#bl_overlay_layer_v2').css('display')) == 'block')) || (($('#enquiry').length) && (($('#enquiry').css('display')) == 'block'))) 
    {}
    else
    {
        if(typeof(open_bl_page)!="undefined")
        {
            if(blStop==0)
            {
            open_bl_page();
            sessionStorage.setItem("IsBlFormOpenDIR", "YES");
            }
         }
    }
}
var topPos = $(document).scrollTop();
if(topPos > 0) {
if(e.pageY <= topPos ) {
    if((IsBlFormOpenDIR=='YES')|| (($('#blk_overlay1').length) && (($('#blk_overlay1').css('display')) == 'block')) || (($('#contentWrap').length) && (($('#contentWrap').css('display')) == 'block')) || (($('#form_s').length) && (($('#form_s').css('display')) == 'block')) || (($('#bl_overlay_layer_v2').length) && (($('#bl_overlay_layer_v2').css('display')) == 'block')) || (($('#enquiry').length) && (($('#enquiry').css('display')) == 'block')))
    {}
    else
    {
        if(typeof(open_bl_page)!="undefined")
        {
            if(blStop==0)
            {
            open_bl_page();
            sessionStorage.setItem("IsBlFormOpenDIR", "YES");
            }
         }
    }
}
}
});

$(window).load(function(){  //native ads
  head.js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
}); 
$(window).load(function(){ //Sticky BL form on Grid View
$("#t7_head").click(function()
{
ims.grid_view = 1;
if(ims.grid_view==1)
{
  var activeCls = document.activeElement.className;
  if(( activeCls=='') || (activeCls=='t7_form_area'))
  {
      $("#eto_footer_form").slideToggle();
  }
}
});
});
function title_show(obj)
{
        var title_len=obj.text;
	if($('.stitle').length>0 && (title_len.length>24))
		$(obj).attr('title',obj.text);
	else
		$(obj).attr('title','');
}
    
 var item_no = '0';
 function nextimg()
 {
 var img_id = parseInt(item_no);
 var end_count = parseInt(ims.end);
 var first_page_result = parseInt(ims.first_page_result);
 var fetch_count = (end_count - first_page_result)/20;
 var end_counter = end_count;
    if(fetch_count == 0)
     {
       end_counter = first_page_result -2;
     }else
     {
        end_counter = end_counter -2;
     }
   
       if(img_id < end_counter)
       {
          img_id++;
          item_no= img_id;
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
       }else
       {
          if (img_id == end_counter){
            if(fetch_count < 2){
              $('#NPfetch'+fetch_count).click();
            }else{
              $('#fetch'+fetch_count).click();
            }
              img_id++;
              item_no= img_id;  
          } else if (img_id == end_count && fetch_count > 1){
            $('#fetch'+fetch_count).click();
            img_id++;
            item_no= img_id;   
          }
           
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
 
 
 function previousimg()
 {
 var img_id = parseInt(item_no);
     if(img_id > 1)
     {
         img_id--;
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
// function nextimg()
// {
// var img_id = parseInt(item_no);
// var end_count = parseInt(ims.end);
// var first_page_result = parseInt(ims.first_page_result);
// var fetch_count = (end_count - first_page_result)/20;
// var end_counter = end_count;
//    if(fetch_count == 0)
//     {
//       end_counter = first_page_result -2;
//     }else
//     {
//        end_counter = end_counter -2;
//     }
//     
//       if(img_id < end_counter)
//       {
//         img_id++;
//        item_no= img_id;
//         if($('.'+'NP-'+img_id).length)
//        {  
//             $('.'+'NP-'+img_id).click();
//         }
//      
//       }else 
//       {  
//           if (img_id == end_counter){
//               if(fetch_count < 2)
//               {
//                 $('#NPfetch'+fetch_count).click();
//               }else
//               {
//                 $('#fetch'+fetch_count).click();
//               }
//          img_id++;
//          item_no= img_id;    
//          } else if (img_id == end_count && fetch_count > 1){
//               $('#fetch'+fetch_count).click();
//          img_id++;
//          item_no= img_id;     
//          }
//            
//          if($('.'+'NP-'+img_id).length)
//           {   
//               $('.'+'NP-'+img_id).click();
//           }
//     }  
// }
// 
// 
// function previousimg()
// {
// var img_id = parseInt(item_no);
//     if(img_id > 1)
//     {
//         img_id--;
//         if($('.'+'NP-'+img_id).length)
//         {
//             item_no = img_id;
//             $('.'+'NP-'+img_id).click();
//         }
//    } 
//}


 
 
function imgset(imageid)
 {
     item_no = imageid;
    return true;
 } 
    
function autoFetchMore1(listType,arg)
{    var fetchcnt = 0;  
    loading = false;
   
            if(fetchcnt < 2 && !loading && count_autofetch < 2)
            {
            loading = true;
            var pfc = 'pagination'+fetchcnt;
            var fc = 'fetch'+fetchcnt;
            var  rand_number = Math.floor((Math.random()*5)+1);
            arg.fch_end_count = (fetchcnt ===0 ) ?arg.fch_end_count : parseInt(arg.fch_end_count) + 20;
            if(listType == 'prd')
            {
            showMoreProducts(pfc,fc, arg.fch_mcatID,arg.fch_mcatName,arg.fch_catID,arg.fch_searchCityId,arg.fch_end_count,rand_number,arg.fch_prod_serv,arg.fch_showkm,arg.fch_debug_mod,arg.fch_biz,arg.cntAll);
            recordOutboundLink(document.URL, 'Trac-Fetch-More', 'Fetch-'+fetchcnt,0, 0);
            count_autofetch++; 
            }
            else if(listType == 'comp')
            {
            showMore(pfc,fc,arg.fch_mcatID,arg.fch_mcatName,arg.fch_catID,arg.fch_searchCityId,arg.fch_end_count,rand_number,arg.fch_ct_name);
            recordOutboundLink(document.URL, 'Trac-Fetch-More', 'Fetch-'+fetchcnt,0, 0);
             
            }
            fetchcnt++;
            setTimeout(function(){loading = false},3000);
            }
	   // setTimeout(function(){ listingspacehide(); },1000);          
}    
   
   
function listingspacehide(){
  setTimeout(function(){
	    //alert('testing2...');
	    var lstcnt=0; var lstall=0; var lstmod=0;
	    if($('.star-listing-color').length > 0){ lstcnt= $('.star-listing-color').length; }
	    if($('.normal-listing-color ').length > 0){ lstcnt =lstcnt+ $('.normal-listing-color').length; }
	    if($('.listing').length > 0){ lstall=$('.listing').length; }
// 	    if($('.im-msg').length > 0 ){ // topsupplier msg
// 	    lstcnt=lstcnt+(($('.im-msg').length)*2);
// 	    }
//  	    if($('#t19_bl_hdng').length > 0 ){ // bl form
//  	     lstcnt=lstcnt + (($('#t19_bl_hdng').length)*2);
//  	    }
	    
	    if($('#ssbl').length > 0 ){ // bl form
	     lstcnt=lstcnt + (($('#ssbl').length)*2);
	    }
	    if($('#ssu').length > 0 ){ // bl form
	     lstcnt=lstcnt + (($('#ssu').length)*2);
	    }
	    if($('.leader-listing-color.grd').length > 0 )
	    {
    		lstcnt=lstcnt + ($('.leader-listing-color.grd').length);
   	    }		 
	    if($('.ls-ads').length > 0){ //1 mcat unit
	    lstall=lstall-$('.ls-ads').length;
	    lstcnt=lstcnt+$('.ls-ads').length;
	    }
	    var bizid='';
	    if(document.getElementById('bizid')){
	      bizid =document.getElementById('bizid').value;
	    }
	     if((city_nm == '') && (ims.grid_view == 1) &&(bizid =='')){
		    //lstcnt=lstcnt + $('.leader-listing-color').length; 
		  
		    
		  lstmod=lstcnt % 4;
		// // alert(lstall+' mod '+lstmod);
		  var lstcntall=$('.listing').length;
		  for(i=1;i<= lstcntall; i++){
		    var lst="LST"+i;
		    if(document.getElementById(lst)){ document.getElementById(lst).style.display = 'block'; }
		  }
		  var prdcnt=0
		  if(document.getElementById('prdcnt')){
		    prdcnt=document.getElementById('prdcnt').value;
		    var m=prdcnt % 4;
		    prdcnt =prdcnt - m;
		  }
		  if((lstmod >0) &&(prdcnt > lstall)){
		      lstall=lstall - lstmod;
		      for(i=1;i<= lstmod; i++){
			lstall++;
			var lst="LST"+lstall;
			if(document.getElementById(lst)){ document.getElementById(lst).style.display = 'none'; }

		      }
		  }
	    }
	},500);              
}    
$(window).load(function(){  
 // listingspacehide(); 
var divheight=0;
var divheight2=0
setInterval(function(){ 
        var divheight2=$(".wl-list-main").height();
	if(divheight < divheight2){
	//listingspacehide(); 
	} 
	divheight=$(".wl-list-main").height();

}, 500);
}); 
function showcityTTip(Id){
$("#"+Id).addClass('ctton');
}
function hidecityTTip(Id){
$("#"+Id).removeClass('ctton');
}

function setimgM()
{
var cur_posM = 8;
var j = 0;
if ( myImg1.length > 0) {
		var img_arr_len = myImg1.length;
		for (i = cur_posM; i <= cur_posM + 4; i++)
		{
			try {	
				document.getElementById('imgcat' + i).src = unescape(myImg1[j]);
				cur_posM = i; 
				j++;
			} 
			catch (e) {}
		}
	}	
}

// code for bl form scroll up
var lastScrollTop =0;
$(window).scroll(function(event){
var st = $(window).scrollTop();
if(st==0){
 $('.open-bl').css({position: 'static',padding:'0 0 15px 0px' })
}
else if(st > lastScrollTop){
    $('.open-bl').css({top: '-18px' })
   } else {   
    $('.open-bl').css({top: '86px', position: 'fixed' })
   }
   lastScrollTop = st;
});