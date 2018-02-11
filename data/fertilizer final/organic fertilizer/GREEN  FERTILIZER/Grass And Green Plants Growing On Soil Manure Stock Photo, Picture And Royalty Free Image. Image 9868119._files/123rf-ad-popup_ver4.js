Event.observe(window, 'load', function() {
	var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 3600*24*3;
    futdate.setTime(expdate);
	if(getCookie('searchcounter')==null){
	    setCookie('searchcounter', 1, futdate, '/', '.123rf.com');
	}else{
		if(getCookie('searchcounter') >= 3)
		{
			var sub_banner = 1;
			setCookie('searchcounter', 1, futdate, '/', '.123rf.com');
		}
		else
		{
			var counterup = parseInt(getCookie('searchcounter')) + 1;
			setCookie('searchcounter', counterup, futdate, '/', '.123rf.com');
		}
	}
	
	if(sub_banner!=null && sub_banner==1 && getCookie('xbenefit')!=1){
		var urlbanner = '/123rf-popup-ad2.php';
			
		new Ajax.Request(urlbanner, {
		method: 'get',
		parameters: {
            randnum: sub_banner
        },
        contentType: 'text/html',
		onSuccess: function(transport) {
			$('testReg').setStyle({display:'block'});
			$('testReg2').innerHTML = transport.responseText;
			newpopupAd();
		}
		});
	}
});
function newpopupAd(){
	if(getCookie('xbenefit')!=1 && ($('testReg').getStyle('display')!='none')){
		$('testReg').setStyle({
			position:'fixed',
			width:document.viewport.getDimensions().width+'px',
			height:document.viewport.getDimensions().height+'px',
			opacity:'0.6',
			zIndex:'5060',
			margin:'0 auto',
			top:'0',
			left:'0',
			textAlign:'center',
			paddingTop:'15%',
			background:'#000',
			color:'#fff',
			display:'block'
		});
		$('testReg2').setStyle({
	    	width:'690px',
	    	margin:'0 auto'
		});
		$('adRegForm').setStyle({
			position:'fixed',
			opacity:'1',
			width:'650px',
			height:'345px',
			textAlign:'center',
			display:'block',
			top:'22%',
			zIndex:'5065',
			border:'5px solid #aaa',
			color:'gray',
			background:'#fff',
			padding:'10px'
		});
	}
}
if(getCookie('xbenefit')!=1 && ($('testReg').getStyle('display')!='none')){
	Event.observe(window, 'resize', function() { 
		$('testReg').setStyle({
			width:document.viewport.getDimensions().width+'px',
			height:document.viewport.getDimensions().height+'px'
		});
	});
}
function closeTestReg(url){
	$('testReg').setStyle({display:'none'});
	$('adRegForm').setStyle({display:'none'});
	xBenefits(url);
}
function xBenefits(cDom){
		var futdate = new Date();
		var expdate = futdate.getTime();
		//expdate += 14 * 24 * 3600 * 1000; // expires in 30 days (milliseconds)
		expdate += 1 * 24 * 60 * 60 * 1000; // expires in 1 day (milliseconds)
		futdate.setTime(expdate);
		setCookie('xbenefit', '1', futdate, '/', cDom);
		$('testReg').setStyle({display:'none'});
		$('adRegForm').setStyle({display:'none'});
}