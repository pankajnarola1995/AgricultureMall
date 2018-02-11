function licensePopUp(){
	var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 30 * 24 * 3600 * 1000;
    futdate.setTime(expdate);

	setCookie('elnote1', 1, futdate, '/','.123rf.com');
	$('licensePop').hide();
}
function popupNote(notetxt,width,margin,elid){
	
	var notePop = '';
	var classClose = '';

	if (BrowserDetect.browser=='Explorer' && BrowserDetect.version=='7'){
		classClose = 'closeButtonPopIE7';
	}else{
		classClose = 'closeButtonPop';
	}
	var lang = getCookie('global_lang');

	if(lang!=null && lang =='gb')
		notePop ='<div class="triangle-isosceles-cn" id="licensePop" style="margin-bottom:'+margin+'px;">';
	else
		notePop ='<div class="triangle-isosceles" id="licensePop" style="margin-bottom:'+margin+'px;">';
	
	notePop +='<div class=\'left\' style="width:'+width+'px;">'+notetxt+'</div>';
	notePop +='<div class="'+classClose+'" onclick="licensePopUp();"><img src="//d3fqh47ho4rujh.cloudfront.net/images/cancel_btn.png"></div>';
	notePop +='<div class=\'clear\'></div>';
	notePop +='</div>';
	$(elid).innerHTML = notePop;
}
function popupShare(){
	if($('popShare1').getStyle('display')=='block'){
		$('popShare2').setStyle({
		  display: 'block'
		});
		$('popShare1').setStyle({
		  display: 'none'
		});
	}else{
		$('popShare2').setStyle({
		  display: 'none'
		});
		$('popShare1').setStyle({
		  display: 'block'
		});
	}
}