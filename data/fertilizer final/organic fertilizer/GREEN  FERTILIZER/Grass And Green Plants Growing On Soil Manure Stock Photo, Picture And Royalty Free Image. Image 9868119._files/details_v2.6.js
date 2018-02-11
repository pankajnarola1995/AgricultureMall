function popupnr(mylink, windowname, refocus)
{
	var mywin, href;

	if (typeof(mylink) == 'string')
			href=mylink;
	else
			href=mylink.href;
	
	mywin = window.open(href, windowname, 'width=450,height=600,scrollbars=yes');

	return false;
}

function downloading() {
	if (document.getElementById("downloadlink1") != null) document.getElementById("downloadlink1").innerHTML = "Downloading...";
	if (document.getElementById("downloadlink2") != null) document.getElementById("downloadlink2").innerHTML = "Downloading...";
	if (document.getElementById("downloadlink3") != null) document.getElementById("downloadlink3").innerHTML = "Downloading...";
	if (document.getElementById("downloadlink4") != null) document.getElementById("downloadlink4").innerHTML = "Downloading...";
	if (document.getElementById("downloadlink5") != null) document.getElementById("downloadlink5").innerHTML = "Downloading...";
	if (document.getElementById("downloadlink6") != null) document.getElementById("downloadlink6").innerHTML = "Downloading...";
}


var loading1 = function(container)
{
	$(container).innerHTML = "<div style='padding:20px 40px;'>Loading..</div>";
}

var showlicensetab = function(filename,sect,lang,raw)
{
	if(sect == "standard_tab_2010"){
			showtab = "standard";
	}
	else if(sect == "extended_tab_2010"){
			showtab = "extended";
	}
	else if(sect == "multiseat_tab_2010"){
			showtab = "multiseat";
	}
	var nowtime =  new  Date();
	var secondsnow = nowtime.getSeconds();
	var url = js_licensetab;
	var params = "action=showtab&filename="+filename+"&showtab="+showtab+"&nocache="+secondsnow+"&lang="+lang+"&raw="+raw;
	var ajax = new Ajax.Updater("p_imagescontainer",url,{method:"get", parameters: params, onLoading: loading1("p_imagescontainer"),evalScripts: true});
}

var switchtab = function(sect)
{
	if(sect=="standard_tab")
	{
		 document.getElementById('standard_tab1').className	='srchtab2009_header_selected';
		 document.getElementById('extended_tab1').className	='srchtab2009_header';
		 document.getElementById('multiseat_tab1').className ='srchtab2009_header';
	}
	else if(sect=="extended_tab")
	{
		 document.getElementById('standard_tab1').className	='srchtab2009_header';
		 document.getElementById('extended_tab1').className	='srchtab2009_header_selected';
		 document.getElementById('multiseat_tab1').className ='srchtab2009_header';
	}
	else if(sect=="multiseat_tab")
	{
		 document.getElementById('standard_tab1').className	='srchtab2009_header';
		 document.getElementById('extended_tab1').className	='srchtab2009_header';
		 document.getElementById('multiseat_tab1').className ='srchtab2009_header_selected';
	}
 
	$(sect).style.background = '#FFFFFF';
	$(sect).style.borderBottom = '0px';
	
	showlicensetab(js_filename,sect,js_lang);
}

var toggleraw = function()
{
	alert($('.Raw').style.display);
}

var switchtab_2010 = function(sect, fn, raw)
{
	
	if(sect=="standard_tab_2010")
	{
		 document.getElementById('standard_tab1_2010').className	='srchtab2010_header_selected';
		 document.getElementById('extended_tab1_2010').className	='srchtab2010_header';
		 document.getElementById('multiseat_tab1_2010').className ='srchtab2010_header';
	}
	else if(sect=="extended_tab_2010")
	{
		 document.getElementById('standard_tab1_2010').className	='srchtab2010_header';
		 document.getElementById('extended_tab1_2010').className	='srchtab2010_header_selected';
		 document.getElementById('multiseat_tab1_2010').className ='srchtab2010_header';
	}
	else if(sect=="multiseat_tab_2010")
	{
		 document.getElementById('standard_tab1_2010').className	='srchtab2010_header';
		 document.getElementById('extended_tab1_2010').className	='srchtab2010_header';
		 document.getElementById('multiseat_tab1_2010').className ='srchtab2010_header_selected';
	}
 
	$(sect).style.background = '#FFFFFF';
	$(sect).style.height = '31px';
	$(sect).style.borderBottom = '0px';
	
	showlicensetab(js_filename,sect,js_lang,raw);
}

var buttonover = function(butt)
{
	$(butt).style.background = '#555555';
}

var buttonout = function(butt)
{
	$(butt).style.background = '#ffffff';
}

var favephotog = function(userid)
{
	new Ajax.Request(js_licensetab, 
	{   method:'get',   
		requestHeaders: 
		{
			Accept: 'application/json'
		},
		parameters:
		{
			action: 'addfave',
			pid: userid
		},   
		onSuccess: function(transport)
		{     
			var json = transport.responseText.evalJSON(true);
			
			if(json.stat == 'ok')
			{
				$('addfave').update('Faved');
				$('addfave').onclick = '';
			}
				 
		} 
	}); 
}

function toggleSize(sizestate)
{
	if(sizestate == 0)
	{
		var action1 = "none";
		var action2 = "block";
	}
	else
	{
		var action1 = "block";
		var action2 = "none";
	}
	
	for(var i=1; i<=17; i++)
	{
		if($("id_output"+i))
		{
			document.getElementById("id_output"+i).style.display = action1;
		}
		if($("id_raw"+i))
		{
			document.getElementById("id_raw"+i).style.display = action2;
		}
	}
}

function genwatermark(){
	var width = 0,
		height = 0;

	if(image_true_width>0 && image_true_height>0){
		if(image_true_width>image_true_height){
			width = 450;
			height = Math.round(image_true_height / image_true_width * width);
		}else{
			height = 450;
			width = Math.round(image_true_width / image_true_height * height);
		}
		width += 2;
		height += 2;
		
		document.getElementById("compImg_wrapper").style.width = width+"px";
		document.getElementById("compImg_wrapper").style.height = height+"px";
		document.getElementById("img_watermark").style.display = "block";
	}
	document.getElementById("compImg_wrapper").style.display = "block";
}

document.observe("dom:loaded", function() {
	if(watermark_layer){
		genwatermark();
	}
});