(function(a,b){"undefined"!==typeof module&&module.exports?module.exports=b():"function"===typeof define&&define.amd?define(b):a.rfqMiniList=b.call(a)})(this,function(){return{_order:0,_isFirst:!0,_autoPlayTimer:null,_data:[],_carrier:{headRfqList:".rfq-post-tip",headRfqListUl:".rfq-post-tip ul",headRfqLoad:"#head-rfq-load",listContent:'\x3cdiv class\x3d"rfq-post-tip" style\x3d"display:none"\x3e\x3cdiv class\x3d"rfq-post-tipcont"\x3e\x3ch3\x3ePost one request to compare multiple quotes!\x3c/h3\x3e\x3cdiv class\x3d"rfq-post-tiplist"\x3e\x3cul\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv\x3e\x3ca href\x3d"http://purchase.made-in-china.com/trade-service/quotation-request.html" target\x3d"_blank" class\x3d"btn btn-main"\x3ePost Sourcing Request\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-top"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e'},
_load:function(a){var b=this;$.ajax({url:"http://sourcing.made-in-china.com/ajax-head-rfq-list",cache:!1,dataType:"jsonp",jsonp:"jsoncallback",async:!0,type:"get",success:function(d){$(b._carrier.headRfqLoad).hide();b._data=d;0<d.length?a(!0):a(!1)},error:function(){$(b._carrier.headRfqLoad).hide()}})},_getItemHTML:function(a){return'\x3cli\x3e\x3cdiv class\x3d"des"\x3e\x3cp\x3e'+a.subject+"\x3c/p\x3e\x3cp\x3e\x3cspan\x3ePurchase Quantity\x3c/span\x3e:"+a.estimatedQuantity+" "+a.estimatedQuantityType+
'\x3c/p\x3e\x3cp class\x3d"green"\x3eThis request has just got '+a.receivedQuoteNum+' quotes for comparison.\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"country"\x3e\x3ci class\x3d"flag flag-'+a.countryCode+'"\x3e\x3c/i\x3e'+a.comCountry+"\x3c/div\x3e\x3c/li\x3e"},_addItem:function(){var a=$(this._carrier.headRfqListUl);this._order<this._data.length&&a.append(this._getItemHTML(this._data[this._order++]))},_clearItems:function(){$(this._carrier.headRfqListUl).empty()},_animate:function(){var a=this;a._autoPlayTimer&&
(clearInterval(a._autoPlayTimer),a._autoPlayTimer=null);a._autoPlayTimer=setInterval(function(){$(a._carrier.headRfqListUl).find("li:eq(0)").animate({marginLeft:392},1E3,function(){a._order==a._data.length&&(a._order=0);a._addItem()}).slideUp(1E3,function(){$(this).remove()})},5E3)},_init:function(){this._clearItems();for(var a=0;3>a;a++)this._addItem()},_startUp:function(){var a=this;$(a._carrier.headRfqList).show();0==a._data.length||a._isFirst?(a._load(function(b){b&&a._init()}),a._animate(),this._isFirst=
!1):this._animate()},_shutDown:function(){$(this._carrier.headRfqList).hide();clearInterval(this._autoPlayTimer);this._autoPlayTimer=null}}});
var wrap=function(){var a=document.createElement("div");return function(b,d){if(b&&d){var g="function"===typeof d;b="length"in b&&"function"!==typeof b?b:[b];for(var c,e=0;e<b.length;e++)if(c=b[e]){var f=c;c=g?d.call(c,e):d;a.innerHTML="";"string"===typeof c&&(a.innerHTML=c);(c=a.firstChild.cloneNode(!1))&&1===c.nodeType&&(f.parentNode&&f.parentNode.insertBefore(c,f),c.appendChild(f))}}}}.call(this);
(function(){if(document.getElementById("headRfqList")){if(!document.getElementById("rfqPostBox")){wrap(document.getElementById("headRfqList"),"\x3cdiv class\x3d'rfq-post-box' id\x3d'rfqPostBox'\x3e\x3c/div\x3e");document.getElementById("rfqPostBox").innerHTML=document.getElementById("rfqPostBox").innerHTML+rfqMiniList._carrier.listContent;var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.href="//www.micstatic.com/gb/js/business/showRfqList/rfq-post-dropmenu.css";document.getElementsByTagName("head")[0].appendChild(a)}document.getElementById("rfqPostBox").onmouseover=
function(){rfqMiniList._startUp()};document.getElementById("rfqPostBox").onmouseout=function(){rfqMiniList._shutDown()};$(".rfq-post-tipcont h3").html("Post one request to compare multiple quotes!")}})();