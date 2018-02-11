	
	var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
	var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
	var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
	var domainKeyArr = domainKey.split(";");
	var nuseId = ["","1265013280997","1274144854011","1267680128703","1265347589466","1267594191523","1274840743634",
	              "1265013632825","1267594191523","1266893500746","1269923128271","1268037391764","1299638187408","1274840743000",
	              "1308624274390","1350267405063"];
	
	var __tracking = {
		_servername : document.location.protocol+"//logsys.adgather.net",	
		head : document.getElementsByTagName('head')[0],
		body : document.getElementsByTagName('body'),
		_paramsDatas : [],
		_req : false,
		_uuid : "",
		_newconn : false, 
		_upframeProc : false,
		
		_init : function() {			
			//
		},
		_start : function() {
			if(navigator.cookieEnabled) {					
				this._init();
				this._mc();
			}
		},
		
		_getUsed : function(siteid) {
			for(var i = 0; i < nuseId.length; i++) {
				if(nuseId[i]==siteid) {
					return false;
				}
			}
			return true;
		},

		_mc : function() {
			this.SetSInfo();
			this.SetEInfo();			
			__tracking.ExecuteLog();
		},	

		_getCookies : function(_cv) {
			var _all_cookies = document.cookie.split(";");
			var _temp_cookie = "";
			var _cookie_name = "";
			var _cookie_value = "";
			for ( i = 0; i < _all_cookies.length; i++ )
			{			
				_temp_cookie = _all_cookies[i].replace(/^\s+|\s+$/g, '').split("=");
				_cookie_name = _temp_cookie[0];	
				_cookie_value = _temp_cookie[1];

				if(_cookie_name==_cv) {
					return _cookie_value;
				}
			}
		},
		
		_isnew : function(referer) {
			var r = "Y";			
			if(window.name=="") {
				if(window.name!="adgatherlog") {					
					var jd = this._paramsDatas.join("&");	
					var url = window.location.href;
					if(this.GetParamValue(url,"ovraw")!=""||this.GetParamValue(url,"gclid")!=""||this.GetParamValue(url,"nvadkwd")!=""||this.GetParamValue(url,"slid")!=""||this.GetParamValue(url,"dmcol")!="") {
						if(referer!="bookmark") {
							r = "S";
						}
					} else { r = "Y"; }
					window.name = "adgatherlog";
				} else { r = "Y"; }
			} else { if(window.name!="adgatherlog") { r = "Y"; } else {r = "N";} }		
			this._newconn = r;
			return r;
		},

		SetEInfo : function() {
			
			var _Tmprefererp = "";
			if(typeof(_refererp)!="undefined") {
				_Tmprefererp = _refererp
			}

			var _Tmplocalp = "";
			if(typeof(_localp)!="undefined") {
				_Tmplocalp = _localp
			}
			var url = window.location.href;
			var referer;
			if(this.GetParamValue(url, "adgather_ref") != "") {
				referer = this.GetParamValue(url, "adgather_ref");
				if(referer.indexOf("%25") > -1) {
					referer = decodeURIComponent(referer);
				}
			} else {
				referer = document.referrer=="" ? "bookmark" : document.referrer;
			}
			if (_Tmprefererp!="") referer = _Tmprefererp; 
			var local = _Tmplocalp=="" ? location.href : _Tmplocalp;
			var section = document.domain;
			var tmpdomainKey = this.GetParamValue(url, "siteid");
			if(tmpdomainKey!="") domainKey = tmpdomainKey;
			var newid = String(new Date().getTime()) + String(Math.floor(Math.random() * 10000000));			
			//this._paramsDatas.push("siteId="+domainKey);
			this._paramsDatas.push("localpage="+escape(local));			
			var nvadkwd = this.GetParamValue(url, "nvadkwd");
			var navervar = this.GetParamValue(url, "nvar");
			this._paramsDatas.push("refererpage="+escape(referer));
			this._paramsDatas.push("ovraw="+escape(this.GetParamValue(url, "ovraw")));
			this._paramsDatas.push("ysmwa="+escape(this.GetParamValue(url, "ysmwa")));
			this._paramsDatas.push("nvadkwd="+escape(nvadkwd));
			this._paramsDatas.push("navervar="+escape(navervar));
			this._paramsDatas.push("slid="+escape(this.GetParamValue(url, "slid")));
			this._paramsDatas.push("gclid="+escape(this.GetParamValue(url, "gclid")));
			this._paramsDatas.push("dmkw="+escape(this.GetParamValue(url, "dmkw")));
			this._paramsDatas.push("dmcol="+escape(this.GetParamValue(url, "dmcol")));
			this._paramsDatas.push("isnew="+this._isnew(referer));
			this._paramsDatas.push("chainid="+newid);
			return;
		},

		GetParamValue : function(url, key) {
			key = key + "="
			var iof = url.toLowerCase().indexOf(key)
			var tempStr = "";
			if(iof > 0) {
				var url = url.substring(iof)
				var len = url.length;				
				for(var i = key.length; i < len; i++) {
					if(url.substring(i, i+1)=="&") {
						break;
					} 
					tempStr += url.substring(i, i+1);
				}
			} else {
				tempStr = "";
			}					
			return tempStr;
		},

		SetSInfo : function() {			
			var _ua = navigator.userAgent;var _bN = "";var _oN = "";var _sC = screen.width+"_"+screen.height;var _cE = navigator.cookieEnabled == true ? "1" : "2";	var _cC = isIE?navigator.cpuClass:"x"; var _Cd = screen.colorDepth; var _lG = isIE ? navigator.browserLanguage : navigator.language;var jV=parseInt(navigator.appVersion);			
			if(_ua.indexOf("MSIE")!=-1) {if(_ua.match(/Trident\/(\d.\d)/i)[1] == '4.0') { _bN = "IE8" } else if(_ua.match(/Trident\/(\d.\d)/i)[1] == '5.0') {	_bN = "IE9" } else if(_ua.match(/Trident\/(\d.\d)/i)[1] == '6.0') { _bN = "IE10" } else if (_ua.indexOf("MSIE 7.0b")!=-1) {_bN = "IE7B";} else if (_ua.indexOf("MSIE 7.0")!=-1) {_bN = "IE7";} else if (_ua.indexOf("MSIE 6.0b")!=-1) {_bN = "IE6B";} else if (_ua.indexOf("MSIE 6.0")!=-1) {_bN = "IE6";} else if (_ua.indexOf("MSIE 5.5")!=-1) {_bN = "IE55";	} else if (_ua.indexOf("MSIE 5.01")!=-1) {_bN = "IE501";} else if (_ua.indexOf("MSIE 5.0")!=-1) {_bN = "IE5";} else if (_ua.indexOf("MSIE 5.0b1")!=-1) {_bN = "IE5B";} else if (_ua.indexOf("MSIE 4.0")!=-1) {_bN = "IE4";} else {_bN = "IEN";}} else if(_ua.indexOf("Chrome")!=-1) {_bN = "Chrome";} else if(_ua.indexOf("Netscape")!=-1) { if(_ua.indexOf("Netscape/6")!=-1) {_bN = "NS6";} else if(_ua.indexOf("Netscape/7")!=-1) {_bN = "NS7";}} else if(_ua.indexOf("Firefox")!=-1) {if(_ua.indexOf("Firefox/0")!=-1) {_bN = "FF";} else if(_ua.indexOf("Firefox/10")!=-1) {_bN = "FF10";} else if(_ua.indexOf("Firefox/2")!=-1) {_bN = "FF2";} else if(_ua.indexOf("Firefox/3")!=-1) {_bN = "FF3";} else if(_ua.indexOf("Firefox/4")!=-1) {_bN = "FF4";} else if(_ua.indexOf("Firefox/5")!=-1) {_bN = "FF5";} else if(_ua.indexOf("Firefox/6")!=-1) {_bN = "FF6";} else {_bN = "FF";}} else if(_ua.indexOf("Safari")!=-1) {_bN ="Safari"} else {_bN = "none";}
			if(_ua.indexOf("Windows")!=-1) {if(_ua.indexOf("Windows NT 6.3")!=-1) {_oN="W81"} else if(_ua.indexOf("Windows NT 6.2")!=-1) {_oN="W8"} else if(_ua.indexOf("Windows NT 6.1")!=-1) {_oN="W7"} else if(_ua.indexOf("Windows NT 6.0")!=-1) {_oN = "WB";} else if (_ua.indexOf("Windows NT 5.2")!=-1) {_oN = "WS200364";} else if (_ua.indexOf("Windows NT 5.1")!=-1) {	_oN = "WX";} else if (_ua.indexOf("Windows NT 5.01")!=-1) {_oN = "W2000SP1";} else if (_ua.indexOf("Windows NT 5.0")!=-1) {_oN = "W2000";} else if (_ua.indexOf("Windows NT 4.0")!=-1) {_oN = "WNT4";} else if (_ua.indexOf("Windows 98; Win 9x 4.90")!=-1) {_oN = "WME";} else if (_ua.indexOf("Windows 98")!=-1) {_oN = "W98";} else if (_ua.indexOf("Windows 95")!=-1) {_oN = "W95";} else if (_ua.indexOf("Windows CE")!=-1) {_oN = "WCE";} else if(_ua.indexOf("Windows Phone")!=-1) {_oN = "Wphone";} else {_oN = "WNone";}} else if(_ua.indexOf("Mac")!=-1) {if(_ua.indexOf("iPhone")!=-1 || _ua.indexOf("iPad")!=-1 || _ua.indexOf("iPod")!=-1) {_oN = "iPhone";} else {_oN = "Mac";}} else if(_ua.indexOf("SymbianOS")!=-1) {_oN = "SymbianOS";} else if(_ua.indexOf("BlackBerry")!=-1) {_oN = "BlackBerry";} else if(_ua.indexOf("Android")!=-1) {_oN = "Android";} else if(_ua.indexOf("Linux")!=-1) {_oN = "Linux";} else {_oN = "none";}			
			this._paramsDatas.push("jt=aa");
			this._paramsDatas.push("on="+_oN);
			this._paramsDatas.push("bn="+_bN);
			this._paramsDatas.push("lg="+_lG);
			this._paramsDatas.push("cc="+_cE);
			this._paramsDatas.push("px="+_sC);
			this._paramsDatas.push("cl="+_cC);
			this._paramsDatas.push("cd="+_Cd);
			this._paramsDatas.push("jv="+jV);
		},
		
		ExecuteLog : function() {			
			var sImg=new Image()
			var _datas = __tracking._paramsDatas.join("&");
			if(domainKey.indexOf(";") != -1) {
				for(var i = 0; i < domainKeyArr.length; i++) {					
					sImg.src = __tracking._servername + "/log?" + _datas+"&siteId="+domainKeyArr[i];
					for(var j = 0; j <= 100000; j++) {
						//
					}
				}
				domainKey = domainKeyArr[0];
			} else {
				sImg.src = __tracking._servername + "/log?" + _datas+"&siteId="+domainKey;
			}
		}
	}

	__tracking.flash = {
		_swfw : "0",
		_swfh : "0",
		_version : "",
		_axo : "",
		_e : "",
		
		ExecuteSwf : function() {	
			
			var _datas = __tracking._paramsDatas.join("&");
			var _embedAttrs = new Object();			
			var _params = new Object();
			var _objAttrs = new Object();
			
			_objAttrs["classid"] = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
			_objAttrs["codebase"] = document.location.protocol+"//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0";
			_objAttrs["width"] = __tracking.flash._swfw; _objAttrs["height"] = __tracking.flash._swfh;	_objAttrs["id"] = "adgatherT";			
			
			_params["movie"] = __tracking._servername + "/sharedobj.swf?" + _datas + "&siteId=" + domainKey;
			_params["allowScriptAccess"] = "always";
			_params["quality"] = "high";  
			_params["bgcolor"] = "#FFFFFF";	_params["wmode"] = "transparent";
			
			_embedAttrs["src"] = __tracking._servername + "/sharedobj.swf?" + _datas + "&siteId=" + domainKey;
			_embedAttrs["quality"] = "high"; _embedAttrs["bgcolor"] = "#FFFFFF";
			_embedAttrs["width"] = __tracking.flash._swfw;  _embedAttrs["height"] = __tracking.flash._swfh; _embedAttrs["name"] = "adgatherT";
			_embedAttrs["allowScriptAccess"] = "always";  _embedAttrs["wmode"] = "transparent"; _embedAttrs["type"] = "application/x-shockwave-flash";
			_embedAttrs["pluginspage"] = document.location.protocol+"//www.macromedia.com/go/getflashplayer";			

			var str = '<object ';
			
			for(var param in _objAttrs) {
				str += param + '="' + _objAttrs[param] + '" ';
			}
			str += '>';
			for (var i in _params) {
				str += '<param name="' + i + '" value="' + _params[i] + '" /> ';
			}

			str += '<embed ';
			for (var i in _embedAttrs) {
				str += i + '="' + _embedAttrs[i] + '" ';
			}
			str += '> </embed></object>';	
			
			var el = document.getElementById("fl");
			if(!el) {
				el = document.createElement("div")
 			    el.id="fl";
				el.width=0;
				el.height=0;
				el.style.left="0";
				el.style.top="0";
				el.style.position="absolute";	
			}			
			
			if(document.body) {
				document.body.appendChild(el);
				document.getElementById("fl").innerHTML = str;
			} else {
				if(document.all["HTML"]) {
					document.all["HTML"].appendChild(el);						
					document.getElementById("fl").innerHTML = str;						
				} else {	
					if(window.attachEvent){			
						window.attachEvent('onload',initFlash)
					} else {					
						document.addEventListener('DOMContentLoaded',initFlash,false);
					}
				}
			}
		}
	}
	
	function hideHonestyDialog() {
		document.getElementById("adgatherHonestyBox").style.display="none"
	}
	function favoriteHonesty() {
		var domain = location.href.substring(location.href.lastIndexOf("//")+2);
		domain = location.protocol + "//" + domain.substring(0, domain.indexOf("/"))
		window.external.AddFavorite(location.href,document.title)
	}
	
	function NoticeHosnesty(hdata, hello, etc, totalCnt) {		
		if(!document.getElementById("adgatherHonestyBox")) {
			
			var etcArr = etc.split("/");
			var honestyHistory = hdata	
			var honestyArr = honestyHistory.split("!@#");		
			var hosnestyHtml = "<div id='containt' style='width:400px'><div id='header'><img src='"+document.location.protocol+"//logsys.adgather.net/images/header.jpg' /></div><div style='height:116px;background:url("+document.location.protocol+"//logsys.adgather.net/images/description.jpg)' id='description'><div style='width:350px; height:80px;border:1px solid;padding:10px 0 0 20px;border:0px solid;font-face:돋움;font-size:9pt;'>"+hello+"</div></div><div style='height:47px;background:url("+document.location.protocol+"//logsys.adgather.net/images/category.jpg);text-align:right' id='category'><a href='javascript:favoriteHonesty();'><img src='"+document.location.protocol+"//logsys.adgather.net/images/btn_favorite.jpg' style='margin:13px 15px;' border='0'/></a></div><div style='height:167px;background:url("+document.location.protocol+"//logsys.adgather.net/images/table_bg.jpg);padding:0 15px 0 15px;' id='table' align='center'><table align='center' width='100%' cellspacing='0' border='0' style='font-face:돋움;font-size:9pt;border-top:2px solid #5b7c9b;border-bottom:2px solid #5b7c9b;border-left:1px solid #6f73a2;border-right:1px solid #6f73a2;'><tr align='center' bgcolor='#e4eaf8'><td style='border-bottom:2px solid #6f7c8d;padding:3px;border-right:1px solid #6f73a2'>"+etcArr[0]+"</td><td style='border-bottom:2px solid #6f7c8d;border-right:1px solid #6f73a2'>"+etcArr[1]+"</td></tr>@@@<tr align='center' bgcolor='#e4eaf8'><td style='padding:3px;border-right:1px solid #6f73a2'>"+etcArr[2]+"</td><td style='border-right:1px solid #6f73a2'>totalLength"+etcArr[3]+"</td></tr></table></div><div id='footer' style='height:35px;background:#839bc1;padding-top:10px;padding-bottom:-15px;text-align:center'><a href='javascript:hideHonestyDialog();'><img src='"+document.location.protocol+"//logsys.adgather.net/images/btn_close.jpg' border='0'/></a></div></div>"	
			var pasteHtml = "";
			var loopLength = honestyArr.length > 4 ? 4 : honestyArr.length;
			for(var i = 0; i < loopLength; i++) {
				var dataArr = honestyArr[i].split("^")
				pasteHtml += "<tr align='center'>"
				pasteHtml += "<td style='padding:3px;border-bottom:1px solid #737a84;border-right:1px solid #6f73a2'>"+dataArr[0]+"</td>"
				pasteHtml += "<td style='padding:3px;border-bottom:1px solid #737a84;border-right:1px solid #6f73a2'>"+dataArr[1].substring(0,dataArr[1].indexOf("."))+"</td>"		
				pasteHtml += "</tr>"
			}			
			hosnestyHtml = hosnestyHtml.replace("totalLength", honestyArr.length);
			hosnestyHtml = hosnestyHtml.replace("@@@", pasteHtml)
			var box = document.createElement("div")
			box.id="adgatherHonestyBox";
			box.style.left="0";
			box.style.top="0";
			box.style.position="absolute";
			box.style.zIndex = 1000000000;
			box.innerHTML = hosnestyHtml;
			if(typeof(_fname)!="undefined") {
				if(_fname=="") {
					document.body.appendChild(box);
				} else {
					try {
						document.frames[_fname].document.body.appendChild(box);
					} catch(e) {

					}								
				}
			} else {
				document.body.appendChild(box);
			}
		}
	}
	
	function initFlash() {	
		
		if(__tracking._getUsed(domainKeyArr[0])) {			
			if(__tracking._newconn=="S") {
				__tracking.flash.ExecuteSwf();
			}
		}
	}
	
	
	if(__tracking._getUsed(domainKeyArr[0])) {		
		//상위프레임이 존재할때
		//if(typeof(top.document.body)=="object") {
		//	if(typeof(top.domainKey)!="undefined") {	//도메인키 존재시
				//
		//	}
		//}
		__tracking._start();
		initFlash();
	}

	function test(msg) {
		//alert(msg)
	}
