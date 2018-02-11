(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.V?a.V:a.V=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ga(a){return"number"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ka(a){return a[la]||(a[la]=++ma)}
var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return v.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;var qa;var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,Aa=/[\x00&<>"']/;function Ba(a){return-1!=a.indexOf("&")?"document"in m?Ca(a):Da(a):a}
function Ca(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ea,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Da(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ea=/&([^;\s<&]+);?/g,Fa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ga={"'":"\\'"};
function Ha(a,b){for(var c=0,d=sa(String(a)).split("."),e=sa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),G=RegExp("(\\d*)(\\D*)","g");do{var ca=n.exec(k)||["","",""],ra=G.exec(l)||["","",""];if(0==ca[0].length&&0==ra[0].length)break;c=Ia(0==ca[1].length?0:parseInt(ca[1],10),0==ra[1].length?0:parseInt(ra[1],10))||Ia(0==ca[2].length,0==ra[2].length)||Ia(ca[2],ra[2])}while(0==c)}return c}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;function Ka(){}
;var La=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},z=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Na=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Oa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Pa(a,b,c){b=Qa(a,b,c);return 0>b?null:u(a)?a.charAt(b):a[b]}
function Qa(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=La(a,b)}
function Ra(){var a=Sa;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Ta(a,b){A(a,b)||a.push(b)}
function Ua(a,b){var c=La(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a,b){var c=Qa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Wa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Za(a,b,c,d){return Array.prototype.splice.apply(a,$a(arguments,1))}
function $a(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ab(a,b,c){if(!fa(a)||!fa(b)||a.length!=b.length)return!1;var d=a.length;c=c||bb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function cb(a,b){return a>b?1:a<b?-1:0}
function bb(a,b){return a===b}
;function db(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function eb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function fb(a){var b=0,c;for(c in a)b++;return b}
function gb(a,b){return ib(a,b)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function lb(a){return null!==a&&"withCredentials"in a}
function ib(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){var b=da(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=tb(a[c]);return b}return a}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;a:{var xb=m.navigator;if(xb){var yb=xb.userAgent;if(yb){wb=yb;break a}}wb=""}function B(a){return-1!=wb.indexOf(a)}
;function zb(){return B("Opera")||B("OPR")}
function Ab(){return(B("Chrome")||B("CriOS"))&&!zb()&&!B("Edge")}
;function Bb(){this.f=""}
Bb.prototype.Tb=!0;Bb.prototype.Ob=function(){return this.f};
Bb.prototype.toString=function(){return"Const{"+this.f+"}"};
function Cb(a){var b=new Bb;b.f=a;return b}
;function Db(){this.f="";this.h=Eb}
Db.prototype.Tb=!0;Db.prototype.Ob=function(){return this.f};
function Fb(a){return a instanceof Db&&a.constructor===Db&&a.h===Eb?a.f:"type_error:SafeUrl"}
var Gb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof Db)return a;a=a.Tb?a.Ob():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return Ib(a)}
var Eb={};function Ib(a){var b=new Db;b.f=a;return b}
Ib("about:blank");function Jb(){this.f="";this.h=Kb;this.j=null}
Jb.prototype.Tb=!0;Jb.prototype.Ob=function(){return this.f};
function Lb(a){return a instanceof Jb&&a.constructor===Jb&&a.h===Kb?a.f:"type_error:SafeHtml"}
var Kb={};function Mb(a,b){var c=new Jb;c.f=a;c.j=b;return c}
Mb("<!DOCTYPE html>",0);Mb("",0);Mb("<br>",0);function Nb(a,b){var c;c=b instanceof Db?b:Hb(b);a.href=Fb(c)}
;function Ob(a,b,c){a&&(a.dataset?a.dataset[Pb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Pb(b)]:a.getAttribute("data-"+b):null}
function Qb(a,b){a&&(a.dataset?delete a.dataset[Pb(b)]:a.removeAttribute("data-"+b))}
var Rb={};function Pb(a){return Rb[a]||(Rb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Sb(a){m.setTimeout(function(){throw a;},0)}
var Tb;
function Ub(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.jc;c.jc=null;a()}};
return function(a){d.next={jc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Vb(a,b,c){this.o=c;this.j=a;this.l=b;this.h=0;this.f=null}
Vb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
Vb.prototype.put=function(a){this.l(a);this.h<this.o&&(this.h++,a.next=this.f,this.f=a)};function Wb(){this.h=this.f=null}
var Yb=new Vb(function(){return new Xb},function(a){a.reset()},100);
Wb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Xb(){this.next=this.scope=this.f=null}
Xb.prototype.reset=function(){this.next=this.scope=this.f=null};function Zb(a){$b||ac();bc||($b(),bc=!0);var b=cc,c=Yb.get();c.f=a;c.scope=void 0;c.next=null;b.h?b.h.next=c:b.f=c;b.h=c}
var $b;function ac(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);$b=function(){a.then(dc)}}else $b=function(){var a=dc;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Tb||(Tb=Ub()),Tb(a)):m.setImmediate(a)}}
var bc=!1,cc=new Wb;function dc(){for(var a=null;a=cc.remove();){try{a.f.call(a.scope)}catch(b){Sb(b)}Yb.put(a)}bc=!1}
;function D(){this.La=this.La;this.ga=this.ga}
D.prototype.La=!1;D.prototype.isDisposed=function(){return this.La};
D.prototype.dispose=function(){this.La||(this.La=!0,this.G())};
function ec(a,b){a.La?b.call(void 0):(a.ga||(a.ga=[]),a.ga.push(p(void 0)?v(b,void 0):b))}
D.prototype.G=function(){if(this.ga)for(;this.ga.length;)this.ga.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function fc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];fa(d)?fc.apply(null,d):E(d)}}
;function F(a){D.call(this);this.o=1;this.h=[];this.j=0;this.f=[];this.fa={};this.l=Boolean(a)}
x(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.fa[a];d||(d=this.fa[a]=[]);var e=this.o;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.o=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.fa[a]){var d=this.f;if(a=Pa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.qa(a)}return!1};
g.qa=function(a){var b=this.f[a];if(b){var c=this.fa[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.D=function(a,b){var c=this.fa[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var h=c[e];gc(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.qa(c)}}return 0!=e}return!1};
function gc(a,b,c){Zb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.fa[a];b&&(y(b,this.qa,this),delete this.fa[a])}else this.f.length=0,this.fa={}};
g.X=function(a){if(a){var b=this.fa[a];return b?b.length:0}a=0;for(b in this.fa)a+=this.X(b);return a};
g.G=function(){F.I.G.call(this);this.clear();this.h.length=0};var hc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",hc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var ic=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",ic,void 0);function jc(a){kc(hc,arguments)}
function H(a,b){return a in hc?hc[a]:b}
function I(a,b){ha(a)&&(a=lc(a));return window.setTimeout(a,b)}
function mc(a,b){ha(a)&&(a=lc(a));window.setInterval(a,b)}
function J(a){window.clearTimeout(a)}
function lc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw nc(b),b;}}:a}
function nc(a,b){var c=r("yt.logging.errors.log");c?c(a,b):(c=H("ERRORS",[]),c.push([a,b]),jc("ERRORS",c))}
function oc(){var a={},b="FLASH_UPGRADE"in ic?ic.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function kc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var pc="Microsoft Internet Explorer"==navigator.appName;var qc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.qa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",qc,void 0);var rc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",rc,void 0);var sc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",sc,void 0);var tc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",tc,void 0);
var uc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",uc,void 0);function vc(a,b,c){var d=wc();if(d){var e=d.subscribe(a,function(){if(!uc||uc!=e){var d=arguments,h=function(){rc[e]&&b.apply(c||window,d)};
try{tc[a]?h():I(h,0)}catch(k){nc(k)}}},c);
rc[e]=!0;sc[a]||(sc[a]=[]);sc[a].push(e);return e}return 0}
function xc(a){var b=wc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete rc[a]}))}
function K(a,b){var c=wc();return c?c.publish.apply(c,arguments):!1}
function yc(a,b){tc[a]=!0;var c=wc();c&&c.publish.apply(c,arguments);tc[a]=!1}
function zc(a){sc[a]&&(a=sc[a],y(a,function(a){rc[a]&&delete rc[a]}),a.length=0)}
function Ac(a){var b=wc();if(b)if(b.clear(a),a)zc(a);else for(var c in sc)zc(c)}
function wc(){return r("yt.pubsub.instance_")}
;function Bc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cc,""),c=c.replace(Dc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ec(a,b)}
function Ec(a,b){var c=Fc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=vc(c,b),h=""+ka(b);Gc[h]=e}f||(d=Hc(a,c,function(){C(d,"loaded")||(Ob(d,"loaded","true"),K(c),I(pa(Ac,c),0))}))}}
function Hc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ic(a,b){if(a&&b){var c=""+ka(b);(c=Gc[c])&&xc(c)}}
function Fc(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var Cc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Dc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Gc={};var Jc=null;function Kc(){var a=H("BG_I",null),b=H("BG_IU",null),c=H("BG_P",void 0);b?Bc(b,function(){Jc=new botguard.bg(c)}):a&&(eval(a),Jc=new botguard.bg(c))}
function Lc(){return null!=Jc}
function Mc(){return Jc?Jc.invoke():null}
;function Nc(a,b){return Mb(b,null)}
;var Oc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Pc(){}
Pc.prototype.next=function(){throw Oc;};
Pc.prototype.va=function(){return this};
function Qc(a){if(a instanceof Pc)return a;if("function"==typeof a.va)return a.va(!1);if(fa(a)){var b=0,c=new Pc;c.next=function(){for(;;){if(b>=a.length)throw Oc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Rc(a,b,c){if(fa(a))try{y(a,b,c)}catch(d){if(d!==Oc)throw d;}else{a=Qc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Oc)throw d;}}}
function Sc(a){if(fa(a))return Xa(a);a=Qc(a);var b=[];Rc(a,function(a){b.push(a)});
return b}
;function Tc(a,b){this.h={};this.f=[];this.Ea=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)Uc(this,arguments[d],arguments[d+1])}else if(a){a instanceof Tc?(c=a.ra(),d=a.U()):(c=kb(a),d=jb(a));for(var e=0;e<c.length;e++)Uc(this,c[e],d[e])}}
g=Tc.prototype;g.X=function(){return this.j};
g.U=function(){Vc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.ra=function(){Vc(this);return this.f.concat()};
g.Ya=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Wc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.X())return!1;var c=b||Xc;Vc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Xc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ea=this.j=this.f.length=0};
g.remove=function(a){return Wc(this.h,a)?(delete this.h[a],this.j--,this.Ea++,this.f.length>2*this.j&&Vc(this),!0):!1};
function Vc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Wc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Wc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Wc(this.h,a)?this.h[a]:b};
function Uc(a,b,c){Wc(a.h,b)||(a.j++,a.f.push(b),a.Ea++);a.h[b]=c}
g.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Tc(this)};
g.va=function(a){Vc(this);var b=0,c=this.Ea,d=this,e=new Pc;e.next=function(){if(c!=d.Ea)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Oc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Wc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Yc(a){return a.X&&"function"==typeof a.X?a.X():fa(a)||u(a)?a.length:fb(a)}
function Zc(a){if(a.U&&"function"==typeof a.U)return a.U();if(u(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return jb(a)}
function $c(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.U||"function"!=typeof a.U){if(fa(a)||u(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return kb(a)}}
function ad(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||u(a))y(a,b,void 0);else for(var c=$c(a),d=Zc(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}
function bd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(fa(a)||u(a))return Oa(a,b,void 0);for(var c=$c(a),d=Zc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function cd(a){this.f=new Tc;if(a){a=Zc(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];Uc(this.f,dd(d),d)}}}
function dd(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}
g=cd.prototype;g.X=function(){return this.f.X()};
g.removeAll=function(a){a=Zc(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(dd(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=dd(a);return Wc(this.f.h,a)};
g.U=function(){return this.f.U()};
g.clone=function(){return new cd(this)};
g.equals=function(a){return this.X()==Yc(a)&&ed(this,a)};
function ed(a,b){var c=Yc(b);if(a.X()>c)return!1;!(b instanceof cd)&&5<c&&(b=new cd(b));return bd(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Ya&&"function"==typeof c.Ya?c.Ya(a):fa(c)||u(c)?A(c,a):ib(c,a)})}
g.va=function(){return this.f.va(!1)};function fd(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var gd=zb(),L=B("Trident")||B("MSIE"),hd=B("Edge"),id=B("Gecko")&&!(-1!=wb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),jd=-1!=wb.toLowerCase().indexOf("webkit")&&!B("Edge"),kd=B("Macintosh"),ld=B("Windows");function md(){var a=wb;if(id)return/rv\:([^\);]+)(\)|;)/.exec(a);if(hd)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jd)return/WebKit\/(\S+)/.exec(a)}
function nd(){var a=m.document;return a?a.documentMode:void 0}
var od=function(){if(gd&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=md())&&(a=b?b[1]:"");return L&&(b=nd(),b>parseFloat(a))?String(b):a}(),pd={};
function qd(a){return pd[a]||(pd[a]=0<=Ha(od,a))}
function rd(a){return Number(sd)>=a}
var td=m.document,sd=td&&L?nd()||("CSS1Compat"==td.compatMode?parseInt(od,10):5):void 0;function ud(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function vd(a){return eval("("+a+")")}
function M(a){return wd(new xd(void 0),a)}
function xd(a){this.f=a}
function wd(a,b){var c=[];yd(a,b,c);return c.join("")}
function yd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],yd(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),zd(d,c),c.push(":"),yd(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":zd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ad={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function zd(a,b){b.push('"',a.replace(Bd,function(a){var b=Ad[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ad[a]=b);return b}),'"')}
;var Cd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Dd(a){return(a=a.match(Cd)[3]||null)?decodeURI(a):a}
function Ed(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ta(h):"")}}
function Fd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Gd(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)Gd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Hd(a,b,c){for(c=c||0;c<b.length;c+=2)Gd(b[c],b[c+1],a);return a}
function Id(a,b){for(var c in b)Gd(c,b[c],a);return a}
function Jd(a){a=Id([],a);a[0]="";return a.join("")}
function Kd(a,b){return Fd(2==arguments.length?Hd([a],arguments[1],0):Hd([a],arguments,1))}
function Ld(a,b){return Fd(Id([a],b))}
;function Md(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ta(e[0]||""),e=ta(e[1]||"");f in b?ea(b[f])?Ya(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Nd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Md(d[1]||""),e;for(e in b)d[e]=b[e];return Ld(a,d)+c}
function Od(a){a=Dd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Pd=null;"undefined"!=typeof XMLHttpRequest?Pd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Pd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Qd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&lc(b)(l)}
var l=Pd&&Pd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Rd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Rd(a,b){b=b||{};for(var c in Sd){var d=H(Sd[c]),e;if(e=d){e=a;var f=void 0;f=window.location.href;var h=e.match(Cd)[1]||null,k=Dd(e);h&&k?(e=e.match(Cd),f=f.match(Cd),e=e[3]==f[3]&&e[1]==f[1]&&e[4]==f[4]):e=k?Dd(f)==k&&(Number(f.match(Cd)[4]||null)||null)==(Number(e.match(Cd)[4]||null)||null):!0;e||(e=c,f=H("CORS_HEADER_WHITELIST")||{},e=(h=Dd(a))?(f=f[h])?A(f,e):!1:!0)}e&&(b[c]=d)}return b}
function Td(a,b){var c=H("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ef&&(!Dd(a)||b.withCredentials||Dd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.S&&b.S[c])}
function Ud(a,b){var c=b.format||"JSON";b.ff&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=H("XSRF_FIELD_NAME",void 0),e=H("XSRF_TOKEN",void 0),f=b.ac;f&&(f[d]&&delete f[d],a=Nd(a,f||{}));var h=b.postBody||"",f=b.S;Td(a,b)&&(f||(f={}),f[d]=e);f&&u(h)&&(d=Md(h),vb(d,f),h=Jd(d));var k=!1,l,n=Qd(a,function(a){if(!k){k=!0;l&&J(l);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Vd(c,a,b.df);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.aa&&b.aa.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Xb&&b.Xb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.ub&&0<b.timeout&&(l=I(function(){k||(k=!0,n.abort(),J(l),b.ub.call(b.context||m,n))},b.timeout));
return n}
function Vd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=vd(a));break;case "XML":if(b=(b=b.responseXML)?Wd(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=Xd(a)})}c&&Yd(d);
return d}
function Yd(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Nc(Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Yd(a[b])}}
function Wd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Xd(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Sd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Zd={},$d=0;function ae(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):I(a,b||0)}
function be(a){return ae(a,5E3)}
;var ce=[],de=!1;function ee(){function a(){de=!0;"google_ad_status"in window?jc("DCLKSTAT",1):jc("DCLKSTAT",2)}
Bc("//static.doubleclick.net/instream/ad_status.js",a);ce.push(be(function(){de||"google_ad_status"in window||(Ic("//static.doubleclick.net/instream/ad_status.js",a),jc("DCLKSTAT",3))}))}
function fe(){return parseInt(H("DCLKSTAT",0),10)}
;function ge(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function he(a,b){return a.classList?a.classList.contains(b):A(ge(a),b)}
function ie(a,b){a.classList?a.classList.add(b):he(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function je(a,b){a.classList?a.classList.remove(b):he(a,b)&&(a.className=Ma(ge(a),function(a){return a!=b}).join(" "))}
function ke(a,b,c){c?ie(a,b):je(a,b)}
;function le(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
le.prototype.clone=function(){return new le(this.x,this.y)};
le.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
le.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function me(a,b){this.width=a;this.height=b}
me.prototype.clone=function(){return new me(this.width,this.height)};
me.prototype.isEmpty=function(){return!(this.width*this.height)};
me.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
me.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!id&&!L||L&&rd(9)||id&&qd("1.9.1");var ne=L&&!qd("9");function oe(a){return a?new pe(qe(a)):qa||(qa=new pe)}
function re(a){return u(a)?document.getElementById(a):a}
function se(a){var b=document;return u(a)?b.getElementById(a):a}
function te(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ue(a,void 0)}
function ue(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&A(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function ve(a){var b=a.scrollingElement?a.scrollingElement:!jd&&we(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return L&&qd("10")&&a.pageYOffset!=b.scrollTop?new le(b.scrollLeft,b.scrollTop):new le(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function we(a){return"CSS1Compat"==a.compatMode}
function xe(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function ye(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function ze(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function qe(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ae(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{xe(a);var c=qe(a);a.appendChild(c.createTextNode(String(b)))}}
var Be={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ce={IMG:" ",BR:"\n"};function De(a){if(ne&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ee(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ne||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ee(a,b,c){if(!(a.nodeName in Be))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ce)b.push(Ce[a.nodeName]);else for(a=a.firstChild;a;)Ee(a,b,c),a=a.nextSibling}
function Fe(a){var b=Ge.bd;return b?He(a,function(a){return!b||u(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function He(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function pe(a){this.f=a||m.document||document}
pe.prototype.createElement=function(a){return this.f.createElement(a)};
pe.prototype.appendChild=function(a,b){a.appendChild(b)};
pe.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ie=jd?"webkit":id?"moz":L?"ms":gd?"o":"",Je=r("yt.dom.getNextId_");if(!Je){Je=function(){return++Ke};
q("yt.dom.getNextId_",Je,void 0);var Ke=0}function Le(){var a=document,b;Na(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Ie+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Me(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ne||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Me.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
var Ne={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ob=r("yt.events.listeners_")||{};q("yt.events.listeners_",ob,void 0);var Oe=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Oe,void 0);function Pe(a,b,c,d){return nb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Pe(a,b,c,d);if(e)return e;var e=++Oe.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Me(d);if(!He(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Me(b);
b.currentTarget=a;return c.call(a,b)};
h=lc(h);ob[e]=[a,b,c,h,d];a.addEventListener?"mouseenter"==b&&f?a.addEventListener("mouseover",h,d):"mouseleave"==b&&f?a.addEventListener("mouseout",h,d):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",h,d):a.addEventListener(b,h,d):a.attachEvent("on"+b,h);return e}
function Qe(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in ob){var c=ob[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[a]}}))}
;function Re(){if(null==r("_lact",window)){var a=parseInt(H("LACT"),10),a=isFinite(a)?w()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Se();N(document,"keydown",Se);N(document,"keyup",Se);N(document,"mousedown",Se);N(document,"mouseup",Se);vc("page-mouse",Se);vc("page-scroll",Se);vc("page-resize",Se)}}
function Se(){null==r("_lact",window)&&(Re(),r("_lact",window));var a=w();q("_lact",a,window);K("USER_ACTIVE")}
function Te(){var a=r("_lact",window);return null==a?-1:Math.max(w()-a,0)}
;function Ue(){}
;function Ve(a){this.f=a}
var We=/\s*;\s*/;g=Ve.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
function Xe(a,b,c,d,e,f){if(/[;=\s]/.test(b))throw Error('Invalid cookie name "'+b+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');p(d)||(d=-1);f=f?";domain="+f:"";e=e?";path="+e:"";d=0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*d)).toUTCString();a.f.cookie=b+"="+c+f+e+d+""}
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(We),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));Xe(this,a,"",0,b,c);return d};
g.ra=function(){return Ye(this).keys};
g.U=function(){return Ye(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.X=function(){return this.f.cookie?(this.f.cookie||"").split(We).length:0};
g.Ya=function(a){for(var b=Ye(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Ye(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ye(a){a=(a.f.cookie||"").split(We);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ze=new Ve(document);Ze.h=3950;function $e(a,b,c){Xe(Ze,""+a,b,c,"/","youtube.com")}
;function af(a,b,c){var d=H("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Dd(window.location.href);e&&d.push(e);e=Dd(a);if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Cd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d=H("SMALLER_SESSION_TEMPDATA_NAME")?"ST-"+Ja(d).toString(36):"s_tempdata-"+Ja(d),e=b?Jd(b):"",$e(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new Ue))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Ld(a,{})+"",a=a instanceof Db?a:Hb(a),c.href=Fb(a));return!0}
;function bf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||sb(cf);this.assets=a.assets||{};this.attrs=a.attrs||sb(df);this.params=a.params||sb(ef);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var cf={enablejsapi:1},df={},ef={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function ff(a){a instanceof bf||(a=new bf(a));return a}
bf.prototype.clone=function(){var a=new bf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=sb(c):a[b]=c}return a};function gf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
gf.prototype.clone=function(){return new gf(this.top,this.right,this.bottom,this.left)};
gf.prototype.contains=function(a){return this&&a?a instanceof gf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
gf.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
gf.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function hf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
hf.prototype.clone=function(){return new hf(this.left,this.top,this.width,this.height)};
hf.prototype.contains=function(a){return a instanceof hf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
hf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
hf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function jf(a){jf[" "](a);return a}
jf[" "]=t;function kf(a,b){var c=qe(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function lf(a,b){return kf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function mf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function nf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function of(a){var b=pf;if("none"!=lf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function pf(a){var b=a.offsetWidth,c=a.offsetHeight,d=jd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new me(b,c):(a=mf(a),new me(a.right-a.left,a.bottom-a.top))}
function qf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function rf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?qf(a,c):0}
var sf={thin:2,medium:4,thick:6};function tf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in sf?sf[c]:qf(a,c)}
;var uf=B("Firefox"),vf=fd()||B("iPod"),wf=B("iPad"),xf=B("Android")&&!(Ab()||B("Firefox")||zb()||B("Silk")),yf=Ab(),zf=B("Safari")&&!(Ab()||B("Coast")||zb()||B("Edge")||B("Silk")||B("Android"))&&!(fd()||B("iPad")||B("iPod"));function Af(){var a;if(a=Ze.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Bf[d]=c.toString())}}}
ba(Af);var Bf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Bf,void 0);function Cf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Df(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Ef(a){a=void 0!==Bf[a]?Bf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Af.prototype.get=function(a,b){Df(a);Cf(a);var c=void 0!==Bf[a]?Bf[a].toString():null;return null!=c?c:b?b:""};
function Ff(a,b){return!!((Ef("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Af.prototype.remove=function(a){Df(a);Cf(a);delete Bf[a]};
Af.prototype.clear=function(){Bf={}};function Gf(a,b){(a=re(a))&&a.style&&(a.style.display=b?"":"none",ke(a,"hid",!b))}
function Hf(a){y(arguments,function(a){!fa(a)||a instanceof Element?Gf(a,!0):y(a,function(a){Hf(a)})})}
function If(a){y(arguments,function(a){!fa(a)||a instanceof Element?Gf(a,!1):y(a,function(a){If(a)})})}
;function Jf(){this.j=this.h=this.f=0;this.o="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.o=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,n;if(pc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(G){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(G){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ba(Jf);function Kf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function Lf(a){return-1<a.o.indexOf("Gnash")&&-1==a.o.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function Mf(a){return ld?!Kf(a,11,2):kd?!Kf(a,11,3):!Lf(a)}
;function Nf(a,b,c){if(b){a=u(a)?se(a):a;var d=sb(c.attrs);d.tabindex=0;var e=sb(c.params);e.flashvars=Jd(c.args);if(pc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Of(a,b,c){if(a&&a.attrs&&a.attrs.id){a=ff(a);var d=!!b,e=re(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Od(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Jf.getInstance();if(Kf(h,a.minVersion)){var k=Pf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Nf(f,k,a);Mf(h)&&Qf()}else Rf(f,a,h);c&&c()}else I(function(){Of(a,b,c)},50)}}
function Rf(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+oc()+"</div>"}
function Pf(a,b){return Lf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Kf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Qf(){var a=re("flash10-promo-div"),b=Ff(Af.getInstance(),107);a&&!b&&Hf(a)}
;function Sf(a){if(window.spf){var b=a.match(Tf);spf.style.load(a,b?b[1]:"",void 0)}else Uf(a)}
function Uf(a){var b=Vf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=Wf(a,b,function(){C(c,"loaded")||(Ob(c,"loaded","true"),K(b),I(pa(Ac,b),0))}))}
function Wf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Nb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vf(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Tf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Xf;var Yf=wb,Yf=Yf.toLowerCase();if(-1!=Yf.indexOf("android")){var Zf=Yf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Zf)Xf=Number(Zf[1]);else{var $f={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},ag=Yf.match("("+kb($f).join("|")+")");Xf=ag?$f[ag[0]]:0}}else Xf=void 0;var bg=vf||wf;var cg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],dg=['audio/mp4; codecs="mp4a.40.2"'];function eg(a){D.call(this);this.f=[];this.h=a||this}
x(eg,D);function fg(a,b,c,d){d=lc(v(d,a.h));b.addEventListener(c,d);a.f.push({target:b,name:c,Ib:d})}
eg.prototype.zb=function(a){for(var b=0;b<this.f.length;b++)if(this.f[b]==a){this.f.splice(b,1);a.target.removeEventListener(a.name,a.Ib);break}};
function gg(a){for(;a.f.length;){var b=a.f.pop();b.target.removeEventListener(b.name,b.Ib)}}
eg.prototype.G=function(){gg(this);eg.I.G.call(this)};function hg(a,b){this.h=this.F=this.o="";this.B=null;this.l=this.f="";this.A=!1;var c;a instanceof hg?(this.A=p(b)?b:a.A,ig(this,a.o),this.F=a.F,jg(this,a.h),kg(this,a.B),this.f=a.f,lg(this,a.j.clone()),this.l=a.l):a&&(c=String(a).match(Cd))?(this.A=!!b,ig(this,c[1]||"",!0),this.F=mg(c[2]||""),jg(this,c[3]||"",!0),kg(this,c[4]),this.f=mg(c[5]||"",!0),lg(this,c[6]||"",!0),this.l=mg(c[7]||"")):(this.A=!!b,this.j=new ng(null,0,this.A))}
hg.prototype.toString=function(){var a=[],b=this.o;b&&a.push(og(b,pg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(og(b,pg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(og(c,"/"==c.charAt(0)?qg:rg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.l)&&a.push("#",og(c,sg));return a.join("")};
hg.prototype.resolve=function(a){var b=this.clone(),c=!!a.o;c?ig(b,a.o):c=!!a.F;c?b.F=a.F:c=!!a.h;c?jg(b,a.h):c=null!=a.B;var d=a.f;if(c)kg(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?lg(b,mg(a.j.toString())):c=!!a.l;c&&(b.l=a.l);return b};
hg.prototype.clone=function(){return new hg(this)};
function ig(a,b,c){a.o=c?mg(b,!0):b;a.o&&(a.o=a.o.replace(/:$/,""))}
function jg(a,b,c){a.h=c?mg(b,!0):b}
function kg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function lg(a,b,c){b instanceof ng?(a.j=b,tg(a.j,a.A)):(c||(b=og(b,ug)),a.j=new ng(b,0,a.A))}
function O(a,b,c){a=a.j;vg(a);a.j=null;b=wg(a,b);xg(a,b)&&(a.h=a.h-a.f.get(b).length);Uc(a.f,b,[c]);a.h=a.h+1}
function yg(a,b,c){ea(c)||(c=[String(c)]);zg(a.j,b,c)}
function Ag(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}
function Bg(a){return a instanceof hg?a.clone():new hg(a,void 0)}
function Cg(a,b,c,d){var e=new hg(null,void 0);a&&ig(e,a);b&&jg(e,b);c&&kg(e,c);d&&(e.f=d);return e}
function mg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function og(a,b,c){return u(a)?(a=encodeURI(a).replace(b,Dg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Dg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var pg=/[#\/\?@]/g,rg=/[\#\?:]/g,qg=/[\#\?]/g,ug=/[\#\?@]/g,sg=/#/g;function ng(a,b,c){this.h=this.f=null;this.j=a||null;this.o=!!c}
function vg(a){a.f||(a.f=new Tc,a.h=0,a.j&&Ed(a.j,function(b,c){var d=ta(b);vg(a);a.j=null;var d=wg(a,d),e=a.f.get(d);e||Uc(a.f,d,e=[]);e.push(c);a.h=a.h+1}))}
g=ng.prototype;g.X=function(){vg(this);return this.h};
g.remove=function(a){vg(this);a=wg(this,a);return Wc(this.f.h,a)?(this.j=null,this.h=this.h-this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){vg(this);return 0==this.h};
function xg(a,b){vg(a);b=wg(a,b);return Wc(a.f.h,b)}
g.Ya=function(a){var b=this.U();return A(b,a)};
g.ra=function(){vg(this);for(var a=this.f.U(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.U=function(a){vg(this);var b=[];if(u(a))xg(this,a)&&(b=Wa(b,this.f.get(wg(this,a))));else{a=this.f.U();for(var c=0;c<a.length;c++)b=Wa(b,a[c])}return b};
g.get=function(a,b){var c=a?this.U(a):[];return 0<c.length?String(c[0]):b};
function zg(a,b,c){a.remove(b);0<c.length&&(a.j=null,Uc(a.f,wg(a,b),Xa(c)),a.h=a.h+c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.U(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new ng;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function wg(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c}
function tg(a,b){b&&!a.o&&(vg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),zg(this,e,a))},a));
a.o=b}
;var Eg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Fg="";
function Gg(a){return a&&a==Fg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Eg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Fg=a,!0):!1}
;var Hg={},Ig=0,Jg=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Jg,void 0);function Kg(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Lg(a)}catch(b){a&&Lg(a)}}
function Lg(a){var b=new Image,c=""+Ig++;Hg[c]=b;b.onload=b.onerror=function(){delete Hg[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Mg(a){if(!a.Ea){var b={};a.call(b);a.Ea=b.version}return a.Ea}
function Ng(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Mg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.f=b}
Q.prototype.toString=function(){return this.topic};var Og=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.qa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Og,void 0);var Pg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Pg,void 0);var Qg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Qg,void 0);var Rg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Rg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Sg();c&&c.publish.call(c,a.toString(),a,b)}
function Tg(a,b,c){var d=Sg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Pg[e])try{if(h&&a instanceof Q&&a!=d)try{h=Ng(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){nc(k)}};
Rg[a.toString()]?r("yt.scheduler.instance")?ae(k,void 0):I(k,0):k()}});
Pg[e]=!0;Qg[a.toString()]||(Qg[a.toString()]=[]);Qg[a.toString()].push(e);return e}
function Ug(a){var b=Sg();b&&(ga(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete Pg[a]}))}
function Sg(){return r("yt.pubsub2.instance_")}
;function Vg(a){P.call(this,1,arguments)}
x(Vg,P);var Wg=new Q("timing-sent",Vg);var S=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},Xg=v(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||t,S),Yg=S.mark?function(a){S.mark(a)}:t;
function Zg(a){$g()[a]=w();Yg(a);var b=H("TIMING_ACTION",void 0);a=$g();if(r("yt.timing.ready_")&&b&&a._start&&ah()){var b=!0,c=H("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=$g(),a=bh().span,d=bh().info,b=r("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))ch(b),dh()}else{e=H("CSI_SERVICE_NAME","youtube");b={v:2,s:e,action:H("TIMING_ACTION",void 0)};if(S.now&&S.timing){var f=S.timing.navigationStart+S.now(),f=Math.round(w()-f);d.yt_hrd=f}var f=
H("TIMING_INFO",{}),h;for(h in f)d[h]=f[h];h=d.srt;delete d.srt;var k;h||0===h||(k=S.timing||{},h=Math.max(0,k.responseStart-k.navigationStart),isNaN(h)&&d.pt&&(h=d.pt));if(h||0===h)d.srt=h;d.h5jse&&(f=window.location.protocol+r("ytplayer.config.assets.js"),(f=S.getEntriesByName?S.getEntriesByName(f)[0]:null)?d.h5jse=Math.round(d.h5jse-f.responseEnd):delete d.h5jse);c.aft=ah();f=c._start;if("cold"==d.yt_lt){k||(k=S.timing||{});var l;a:if(l=k,l.msFirstPaint)l=Math.max(0,l.msFirstPaint);else{var n=
window.chrome;if(n&&(n=n.loadTimes,ha(n))){var n=n(),G=1E3*Math.min(n.requestTime||Infinity,n.startLoadTime||Infinity),G=Infinity===G?0:l.navigationStart-G;l=Math.max(0,Math.round(1E3*n.firstPaintTime+G)||0);break a}l=0}0<l&&l>f&&(c.fpt=l);l=a||bh().span;n=k.redirectEnd-k.redirectStart;0<n&&(l.rtime_=n);n=k.domainLookupEnd-k.domainLookupStart;0<n&&(l.dns_=n);n=k.connectEnd-k.connectStart;0<n&&(l.tcp_=n);n=k.connectEnd-k.secureConnectionStart;k.secureConnectionStart>=k.navigationStart&&0<n&&(l.stcp_=
n);n=k.responseStart-k.requestStart;0<n&&(l.req_=n);n=k.responseEnd-k.responseStart;0<n&&(l.rcv_=n);S.getEntriesByType&&eh(c)}n=$g();k=n.pbr;l=n.vc;n=n.pbs;k&&l&&n&&k<l&&l<n&&1==bh().info.yt_vis&&"youtube"==e&&(bh().info.yt_lt="hot_bg",k=c.vc,e=c.pbs,delete c.aft,a.aft=Math.round(e-k));(k=H("PREVIOUS_ACTION"))&&(d.pa=k);d.p=H("CLIENT_PROTOCOL")||"unknown";d.t=H("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var ca in d)"_"!=ca.charAt(0)&&(b[ca]=d[ca]);c.ps=
w();ca={};var d=[],ra;for(ra in c)"_"!=ra.charAt(0)&&(l=Math.max(Math.round(c[ra]-f),0),ca[ra]=l,d.push(ra+"."+l));b.rt=d.join(",");ra=b;var c=[],qb;for(qb in a)"_"!=qb.charAt(0)&&c.push(qb+"."+a[qb]);ra.it=c.join(",");(qb=r("ytdebug.logTiming"))&&qb(b,ca,a);dh();H("EXP_DEFER_CSI_PING")?(fh(),q("yt.timing.deferredPingArgs_",b,void 0),qb=I(fh,0),q("yt.timing.deferredPingTimer_",qb,void 0)):ch(b);R(Wg,new Vg(ca.aft+(h||0)))}}}
function dh(){gh();Xg();q("yt.timing.pingSent_",!1,void 0)}
function ah(){var a=$g();if(a.aft)return a.aft;for(var b=H("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function hh(a){return Math.round(S.timing.navigationStart+a)}
function eh(a){var b=window.location.protocol,c=S.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=hh(d.startTime),a.wfce=hh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=hh(c.startTime),a.wffe=hh(c.responseEnd))}
function ch(a){if(H("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}H("EXP_DEFER_CSI_PING")&&(J(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=H("CSI_LOG_WITH_YT")?"/csi_204?"+b.substring(1):null;window.navigator&&window.navigator.sendBeacon?
(Kg(a),b&&Kg(b)):(a&&Lg(a),b&&b&&Lg(b));q("yt.timing.pingSent_",!0,void 0)}
function fh(a){if(H("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),ch(b))}}
function $g(){return bh().tick}
function bh(){return r("ytcsi.data_")||gh()}
function gh(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var ih={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"drm.unavailable":5};function jh(a,b){D.call(this);this.A=this.l=a;this.ha=b;this.J=!1;this.h={};this.za=this.Y=null;this.ia=new F;ec(this,pa(E,this.ia));this.o={};this.B=this.Ma=this.j=this.Gb=this.f=null;this.sa=!1;this.K=this.F=this.P=this.R=null;this.Na={};this.Zc=["onReady"];this.ta=new eg(this);ec(this,pa(E,this.ta));this.Hb=null;this.gc=0;this.ua={};kh(this);this.wa("onDetailedError",v(this.Ud,this));this.wa("onTabOrderChange",v(this.md,this));this.wa("onTabAnnounce",v(this.hc,this));this.wa("WATCH_LATER_VIDEO_ADDED",
v(this.Vd,this));this.wa("WATCH_LATER_VIDEO_REMOVED",v(this.Wd,this));uf||(this.wa("onMouseWheelCapture",v(this.Rd,this)),this.wa("onMouseWheelRelease",v(this.Sd,this)));this.wa("onAdAnnounce",v(this.hc,this));this.N=new eg(this);ec(this,pa(E,this.N));this.Fb=!1;this.Eb=null}
x(jh,D);var lh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=jh.prototype;g.cc=function(a,b){this.isDisposed()||(mh(this,a),b||nh(this),oh(this,b),this.J&&ph(this))};
function mh(a,b){a.Gb=b;a.f=b.clone();a.j=a.f.attrs.id||a.j;"video-player"==a.j&&(a.j=a.ha,a.f.attrs.id=a.ha);a.A.id==a.j&&(a.j+="-player",a.f.attrs.id=a.j);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.ha;a.Ma||(a.Ma=qh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.A.style.width=nf(Number(c)||c,!0));if(c=a.f.attrs.height)a.A.style.height=nf(Number(c)||c,!0)}
g.wd=function(){return this.Gb};
function ph(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.h.loadVideoByPlayerVars(a.f.args):a.h.cueVideoByPlayerVars(a.f.args))}
function rh(a){if(!p(a.f.disable.flash)){var b=a.f.disable,c;c=Kf(Jf.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function nh(a){var b;if(!(b=!a.f.html5&&rh(a))){if(!p(a.f.disable.html5)){var c;b=!0;void 0!=a.f.args.deviceHasDisplay&&(b=a.f.args.deviceHasDisplay);if(2.2==Xf)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("video"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?cg:dg,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=sh(a)||a.f.assets.js);a.f.disable.html5=
!c;c||(a.f.args.html5_unavailable="1")}b=!!a.f.disable.html5}return b?rh(a)?"flash":"unsupported":"html5"}
function th(a,b){if(!b||(5!=(ih[b.errorCode]||5)?0:-1!=lh.indexOf(b.errorCode))){var c=uh(a);c&&c.stopVideo&&c.stopVideo();if(rh(a)){var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=ff(c));d.args.autoplay=1;d.args.html5_unavailable="1";mh(a,d);oh(a,"flash")}}}
function oh(a,b){a.isDisposed()||(b||(b=nh(a)),("flash"==b?a.Fe:"html5"==b?a.Ge:a.He).call(a))}
function sh(a){var b=!0,c=uh(a);c&&a.f&&(a=a.f,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Ge=function(){if(!this.sa){var a=sh(this);a&&"html5"==vh(this)?(this.B="html5",this.J||this.Ta()):(wh(this),this.B="html5",a&&this.P?(this.l.appendChild(this.P),this.Ta()):(this.f.loaded=!0,this.R=v(function(){var a=this.l,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Ta()},this),this.sa=!0,a?this.R():(Bc(this.f.assets.js,this.R),Sf(this.f.assets.css))))}};
g.Fe=function(){var a=this.f.clone();if(!this.F){var b=uh(this);b&&(this.F=document.createElement("span"),this.F.tabIndex=0,fg(this.ta,this.F,"focus",this.wc),this.K=document.createElement("span"),this.K.tabIndex=0,fg(this.ta,this.K,"focus",this.wc),b.parentNode&&b.parentNode.insertBefore(this.F,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==vh(this))this.B="flash",this.J||Of(a,!1,v(this.Ta,this));
else{wh(this);this.B="flash";this.f.loaded=!0;b=this.l;b=u(b)?se(b):b;a=ff(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Jf.getInstance();Kf(c,a.minVersion)?(c=Pf(a,c),Nf(b,c,a)):Rf(b,a,c);this.Ta()}};
g.wc=function(){uh(this).focus()};
function uh(a){var b=re(a.j);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.j));return b}
g.Ta=function(){if(!this.isDisposed()){var a=uh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.sa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))th(this);else{kh(this);this.J=!0;a=uh(this);a.addEventListener&&(this.Y=xh(this,a,"addEventListener"));a.removeEventListener&&(this.za=xh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.h[d]||(this.h[d]=xh(this,a,d))}for(var e in this.o)this.Y(e,
this.o[e]);ph(this);this.Ma&&this.Ma(this.h);this.ia.D("onReady",this.h)}else this.gc=I(v(this.Ta,this),50)}};
function xh(a,b,c){var d=b[c];return function(){try{return a.Hb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Hb=e,nc(e,"WARNING"))}}}
function kh(a){a.J=!1;if(a.za)for(var b in a.o)a.za(b,a.o[b]);for(var c in a.ua)J(parseInt(c,10));a.ua={};a.Y=null;a.za=null;for(var d in a.h)a.h[d]=null;a.h.addEventListener=v(a.wa,a);a.h.removeEventListener=v(a.qe,a);a.h.destroy=v(a.dispose,a);a.h.getLastError=v(a.xd,a);a.h.getPlayerType=v(a.yd,a);a.h.getCurrentVideoConfig=v(a.wd,a);a.h.loadNewVideoConfig=v(a.cc,a);a.h.isReady=v(a.Se,a)}
g.Se=function(){return this.J};
g.wa=function(a,b){if(!this.isDisposed()){var c=qh(this,b);if(c){if(!A(this.Zc,a)&&!this.o[a]){var d=yh(this,a);this.Y&&this.Y(a,d)}this.ia.subscribe(a,c);"onReady"==a&&this.J&&I(pa(c,this.h),0)}}};
g.qe=function(a,b){if(!this.isDisposed()){var c=qh(this,b);c&&this.ia.unsubscribe(a,c)}};
function qh(a,b){var c=b;if("string"==typeof b){if(a.Na[b])return a.Na[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Na[b]=c}return c?c:null}
function yh(a,b){var c="ytPlayer"+b+a.ha;a.o[b]=c;m[c]=function(c){var e=I(function(){if(!a.isDisposed()){a.ia.D(b,c);var f=a.ua,h=String(e);h in f&&delete f[h]}},0);
rb(a.ua,String(e))};
return c}
g.md=function(a){a=a?ze:ye;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.F||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
g.hc=function(a){K("a11y-announce",a)};
g.Ud=function(a){th(this,a)};
g.Vd=function(a){K("WATCH_LATER_VIDEO_ADDED",a)};
g.Wd=function(a){K("WATCH_LATER_VIDEO_REMOVED",a)};
g.Rd=function(){this.Fb||(yf?(this.Eb=ve(document),fg(this.N,window,"scroll",this.le),fg(this.N,this.l,"touchmove",this.fe)):(fg(this.N,this.l,"mousewheel",this.zc),fg(this.N,this.l,"wheel",this.zc)),this.Fb=!0)};
g.Sd=function(){gg(this.N);this.Fb=!1};
g.zc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.le=function(){window.scrollTo(this.Eb.x,this.Eb.y)};
g.fe=function(a){a.preventDefault()};
g.He=function(){wh(this);this.B="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.messages.player_fallback||a;a=re("player-unavailable");if(re("unavailable-submessage")&&a){re("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=ue("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Pb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=C(b,"icon"));a.style.display="";ie(re("player"),"off-screen-trigger")}};
g.yd=function(){return this.B||vh(this)};
g.xd=function(){return this.Hb};
function vh(a){return(a=uh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function wh(a){Zg("dcp");a.cancel();kh(a);a.B=null;a.f&&(a.f.loaded=!1);var b=uh(a);"html5"==vh(a)?a.P=b:b&&b.destroy&&b.destroy();xe(a.l);gg(a.ta);a.F=null;a.K=null}
g.cancel=function(){this.R&&Ic(this.f.assets.js,this.R);J(this.gc);this.sa=!1};
g.G=function(){wh(this);if(this.P&&this.f&&this.f.args.fflags&&-1!=this.f.args.fflags.indexOf("new_html5_dispose=true"))try{this.P.destroy()}catch(b){nc(b)}this.Na=null;for(var a in this.o)m[this.o[a]]=null;this.h=null;delete this.l;delete this.A;this.f&&(this.Gb=this.f=this.f.fallback=null);jh.I.G.call(this)};var zh={},Ah="player_uid_"+(1E9*Math.random()>>>0);function Bh(a,b){a=u(a)?se(a):a;b=ff(b);var c=Ah+"_"+ka(a),d=zh[c];if(d)return d.cc(b),d.h;d=new jh(a,c);zh[c]=d;K("player-added",d.h);ec(d,pa(Ch,d));I(function(){d.cc(b)},0);
return d.h}
function Ch(a){zh[a.ha]=null}
function Dh(a){a=re(a);if(!a)return null;var b=Ah+"_"+ka(a),c=zh[b];c||(c=new jh(a,b),zh[b]=c);return c.h}
;var Eh=r("yt.abuse.botguardInitialized")||Lc;q("yt.abuse.botguardInitialized",Eh,void 0);var Fh=r("yt.abuse.invokeBotguard")||Mc;q("yt.abuse.invokeBotguard",Fh,void 0);var Gh=r("yt.abuse.dclkstatus.checkDclkStatus")||fe;q("yt.abuse.dclkstatus.checkDclkStatus",Gh,void 0);var Hh=r("yt.player.exports.navigate")||af;q("yt.player.exports.navigate",Hh,void 0);var Ih=r("yt.player.embed")||Bh;q("yt.player.embed",Ih,void 0);var Jh=r("yt.player.getPlayerByElement")||Dh;q("yt.player.getPlayerByElement",Jh,void 0);
var Kh=r("yt.util.activity.init")||Re;q("yt.util.activity.init",Kh,void 0);var Lh=r("yt.util.activity.getTimeSinceActive")||Te;q("yt.util.activity.getTimeSinceActive",Lh,void 0);var Mh=r("yt.util.activity.setTimestamp")||Se;q("yt.util.activity.setTimestamp",Mh,void 0);function Nh(a){P.call(this,1,arguments);this.f=a}
x(Nh,P);function Oh(a){P.call(this,1,arguments);this.f=a}
x(Oh,P);function Ph(a,b){P.call(this,1,arguments);this.f=a;this.isEnabled=b}
x(Ph,P);function Qh(a,b,c,d,e){P.call(this,2,arguments);this.h=a;this.f=b;this.o=c||null;this.j=d||null;this.source=e||null}
x(Qh,P);function Rh(a,b,c){P.call(this,1,arguments);this.f=a;this.subscriptionId=b}
x(Rh,P);function Sh(a,b,c,d,e,f,h){P.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.l=d||null;this.o=e||null;this.j=f||null;this.source=h||null}
x(Sh,P);
var Th=new Q("subscription-batch-subscribe",Nh),Uh=new Q("subscription-batch-unsubscribe",Nh),Vh=new Q("subscription-pref-email",Ph),Wh=new Q("subscription-subscribe",Qh),Xh=new Q("subscription-subscribe-loading",Oh),Yh=new Q("subscription-subscribe-loaded",Oh),Zh=new Q("subscription-subscribe-success",Rh),$h=new Q("subscription-subscribe-external",Qh),ai=new Q("subscription-unsubscribe",Sh),bi=new Q("subscription-unsubscirbe-loading",Oh),ci=new Q("subscription-unsubscribe-loaded",Oh),di=new Q("subscription-unsubscribe-success",
Oh),ei=new Q("subscription-external-unsubscribe",Sh),fi=new Q("subscription-enable-ypc",Oh),gi=new Q("subscription-disable-ypc",Oh);function hi(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Kd(c,"mode",b));c=Kd("/signin?context=popup","next",c);c=Kd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=vc("LOGGED_IN",function(b){xc(H("LOGGED_IN_PUBSUB_KEY",void 0));jc("LOGGED_IN",!0);a(b)});
jc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",K,void 0);function ii(){var a=H("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!H("SESSION_INDEX")&&!H("LOGGED_IN"))}
;var ji={},ki="ontouchstart"in document;function li(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return He(c,function(a){return he(a,b)},!0,d)}
function mi(a){var b="mouseover"==a.type&&"mouseenter"in ji||"mouseout"==a.type&&"mouseleave"in ji,c=a.type in ji||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=ji[b],d;for(d in c.fa){var e=li(b,d,a.target);e&&!He(a.relatedTarget,function(a){return a==e},!0)&&c.D(d,e,b,a)}}if(b=ji[a.type])for(d in b.fa)(e=li(a.type,d,a.target))&&b.D(d,e,a.type,a)}}
N(document,"blur",mi,!0);N(document,"change",mi,!0);N(document,"click",mi);N(document,"focus",mi,!0);N(document,"mouseover",mi);N(document,"mouseout",mi);N(document,"mousedown",mi);N(document,"keydown",mi);N(document,"keyup",mi);N(document,"keypress",mi);N(document,"cut",mi);N(document,"paste",mi);ki&&(N(document,"touchstart",mi),N(document,"touchend",mi),N(document,"touchcancel",mi));function ni(a){this.j=a;this.o={};this.Jc=[];this.l=[]}
function oi(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
ni.prototype.init=t;ni.prototype.dispose=t;function pi(a,b,c){a.l.push(Tg(b,c,a))}
function qi(a,b,c){var d=oi(a,void 0),e=v(c,a);b in ji||(ji[b]=new F);ji[b].subscribe(d,e);a.o[c]=e}
function ri(a,b){Ob(a,"tooltip-text",b)}
;function si(){ni.call(this,"tooltip");this.f=0;this.h={}}
x(si,ni);ba(si);g=si.prototype;g.register=function(){qi(this,"mouseover",this.Wb);qi(this,"mouseout",this.eb);qi(this,"focus",this.vd);qi(this,"blur",this.ld);qi(this,"click",this.eb);qi(this,"touchstart",this.De);qi(this,"touchend",this.Rc);qi(this,"touchcancel",this.Rc)};
g.dispose=function(){for(var a in this.h)this.eb(this.h[a]);this.h={}};
g.Wb=function(a){if(!(this.f&&1E3>w()-this.f)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Qb(a,"tooltip-hide-timer"),J(b));var b=v(function(){ti(this,a);Qb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Ob(a,"tooltip-show-timer",b.toString());a.title&&(ri(a,ui(a)),a.title="");b=ka(a).toString();this.h[b]=a}};
g.eb=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(J(b),Qb(a,"tooltip-show-timer"));b=v(function(){if(a){var b=re(vi(this,a));b&&(wi(b),b&&b.parentNode&&b.parentNode.removeChild(b),Qb(a,"content-id"));(b=re(vi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Qb(a,"tooltip-hide-timer")},this);
b=I(b,50);Ob(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ka(a).toString();delete this.h[b]};
g.vd=function(a){this.f=0;this.Wb(a)};
g.ld=function(a){this.f=0;this.eb(a)};
g.De=function(a,b,c){c.changedTouches&&(this.f=0,a=li(b,oi(this),c.changedTouches[0].target),this.Wb(a))};
g.Rc=function(a,b,c){c.changedTouches&&(this.f=w(),a=li(b,oi(this),c.changedTouches[0].target),this.eb(a))};
function xi(a,b){ri(a,b);var c=C(a,"content-id");(c=re(c))&&Ae(c,b)}
function ui(a){return C(a,"tooltip-text")||a.title}
function ti(a,b){if(b){var c=ui(b);if(c){var d=re(vi(a,b));if(!d){d=document.createElement("div");d.id=vi(a,b);d.className=oi(a,"tip");var e=document.createElement("div");e.className=oi(a,"tip-body");var f=document.createElement("div");f.className=oi(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=oi(a,"tip-content");var k=yi(a,b),l=vi(a,b,"content");h.id=l;Ob(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var l=De(b),n=vi(a,b,"arialabel"),f=document.createElement("div");ie(f,oi(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?Ae(f,c+" "+l):Ae(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=Le()||document.body;l.appendChild(f);l.appendChild(d);xi(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ie(h,oi(a,"normal-wrap")));h=he(b,oi(a,"reverse"));zi(a,b,d,e,k,h)||zi(a,b,d,e,k,!h);var G=oi(a,"tip-visible");I(function(){ie(d,G)},0)}}}}
function zi(a,b,c,d,e,f){ke(c,oi(a,"tip-reverse"),f);var h=0;f&&(h=1);a=of(b);f=new le((a.width-10)/2,f?a.height:0);var k=qe(b),l=new le(0,0),n;n=k?qe(k):document;var G;(G=!L||rd(9))||(G=oe(n),G=we(G.f));b!=(G?n.documentElement:n.body)&&(n=mf(b),k=oe(k),k=ve(k.f),l.x=n.left+k.x,l.y=n.top+k.y);f=new le(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==lf(c,"direction")?h^4:h)&-9;h=of(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new hf(0,
0,0,0);f.left=n.x;f.top=n.y;f.width=k.width;f.height=k.height;k=new le(f.left,f.top);k instanceof le?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=nf(l,!1);c.style.top=nf(k,!1);k=new me(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=qe(c),f=oe(f),l=we(f.f),!L||qd("10")||l&&qd("8"))f=c.style,id?f.MozBoxSizing="border-box":jd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){L?
(l=rf(c,"paddingLeft"),k=rf(c,"paddingRight"),n=rf(c,"paddingTop"),G=rf(c,"paddingBottom"),l=new gf(n,k,G,l)):(l=kf(c,"paddingLeft"),k=kf(c,"paddingRight"),n=kf(c,"paddingTop"),G=kf(c,"paddingBottom"),l=new gf(parseFloat(n),parseFloat(k),parseFloat(G),parseFloat(l)));if(L&&!rd(9)){k=tf(c,"borderLeft");n=tf(c,"borderRight");G=tf(c,"borderTop");var ca=tf(c,"borderBottom"),k=new gf(G,n,ca,k)}else k=kf(c,"borderLeftWidth"),n=kf(c,"borderRightWidth"),G=kf(c,"borderTopWidth"),ca=kf(c,"borderBottomWidth"),
k=new gf(parseFloat(G),parseFloat(n),parseFloat(ca),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=we(h)?h.documentElement:h.body;f=new me(h.clientWidth,h.clientHeight);1==c.nodeType?(c=mf(c),k=new le(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new le(c.clientX,c.clientY));c=of(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);
l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function vi(a,b,c){a=oi(a);var d=b.__yt_uid_key;d||(d=Je(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function yi(a,b){var c=null;ld&&he(b,oi(a,"masked"))&&((c=re("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Hf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=oi(a,"tip-mask")));return c}
function wi(a){var b=re("yt-uix-tooltip-shared-mask"),c=b&&He(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),If(b),document.body.appendChild(b))}
;function Ai(){ni.call(this,"subscription-button")}
x(Ai,ni);ba(Ai);Ai.prototype.register=function(){qi(this,"click",this.nc);pi(this,Xh,this.yc);pi(this,Yh,this.xc);pi(this,Zh,this.de);pi(this,bi,this.yc);pi(this,ci,this.xc);pi(this,di,this.je);pi(this,fi,this.Qd);pi(this,gi,this.Pd)};
var Ge={dc:"hover-enabled",$c:"yt-uix-button-subscribe",ad:"yt-uix-button-subscribed",Ue:"ypc-enabled",bd:"yt-uix-button-subscription-container",cd:"yt-subscription-button-disabled-mask-container"},Bi={Ve:"channel-external-id",ed:"subscriber-count-show-when-subscribed",fd:"subscriber-count-tooltip",gd:"subscriber-count-title",We:"href",ec:"is-subscribed",Ye:"parent-url",$e:"clicktracking",hd:"style-type",fc:"subscription-id",cf:"target",jd:"ypc-enabled"};g=Ai.prototype;
g.nc=function(a){var b=C(a,"href"),c=ii();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");R(ai,new Sh(b,f,d,a,c,e))}else R(Wh,new Qh(b,d,c,e))}else Ci(this,a)};
g.yc=function(a){this.Oa(a.f,this.Oc,!0)};
g.xc=function(a){this.Oa(a.f,this.Oc,!1)};
g.de=function(a){this.Oa(a.f,this.Pc,!0,a.subscriptionId)};
g.je=function(a){this.Oa(a.f,this.Pc,!1)};
g.Qd=function(a){this.Oa(a.f,this.pd)};
g.Pd=function(a){this.Oa(a.f,this.od)};
g.Pc=function(a,b,c){b?(Ob(a,Bi.ec,"true"),c&&Ob(a,Bi.fc,c)):(Qb(a,Bi.ec),Qb(a,Bi.fc));Di(a)};
g.Oc=function(a,b){var c;c=Fe(a);ke(c,Ge.cd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Di(a){var b=C(a,Bi.hd),c=!!C(a,"is-subscribed"),b="-"+b,d=Ge.ad+b;ke(a,Ge.$c+b,!c);ke(a,d,c);C(a,Bi.fd)&&!C(a,Bi.ed)&&(b=oi(si.getInstance()),ke(a,b,!c),a.title=c?"":C(a,Bi.gd));c?I(function(){ie(a,Ge.dc)},1E3):je(a,Ge.dc)}
g.pd=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ie(a,"ypc-enabled"),Ob(a,Bi.jd,"true"))};
g.od=function(a){C(a,"ypc-enabled")&&(je(a,"ypc-enabled"),Qb(a,"ypc-enabled"))};
function Ei(a,b){var c=te(oi(a));return Ma(c,function(a){return b==C(a,"channel-external-id")},a)}
g.kd=function(a,b,c){var d=$a(arguments,2);y(a,function(a){b.apply(this,Wa(a,d))},this)};
g.Oa=function(a,b,c){var d=Ei(this,a),d=Wa([d],$a(arguments,1));this.kd.apply(this,d)};
function Ci(a,b){var c=v(function(a){a.discoverable_subscriptions&&jc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.nc(b)},a);
hi(c,"subscribe")}
;var Fi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Fi,void 0);function Gi(a,b){this.source=null;this.o=a||null;this.origin="*";this.B=window.document.location.protocol+"//"+window.document.location.hostname;this.l=b;this.j=this.f=this.h=this.sourceId=null;N(window,"message",v(this.A,this))}
Gi.prototype.A=function(a){var b=this.l||H("POST_MESSAGE_ORIGIN",void 0)||this.B;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.o||a.source==this.o)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,u(a)){try{a=ud(a)}catch(c){return}this.sourceId=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!A(this.j,a.func)||this.h(a.func,a.args))}}};
Gi.prototype.sendMessage=function(a){this.source&&(a.id=this.sourceId,a=M(a),this.source.postMessage(a,this.origin))};function Hi(){}
;function Ii(){}
x(Ii,Hi);Ii.prototype.X=function(){var a=0;Rc(this.va(!0),function(){a++});
return a};
Ii.prototype.clear=function(){var a=Sc(this.va(!0)),b=this;y(a,function(a){b.remove(a)})};function Ji(a){this.f=a}
x(Ji,Ii);g=Ji.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.zd=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.X=function(){return this.f.length};
g.va=function(a){var b=0,c=this.f,d=new Pc;d.next=function(){if(b>=c.length)throw Oc;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function Ki(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
x(Ki,Ji);function Li(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
x(Li,Ji);function Mi(a){this.f=a}
Mi.prototype.h=function(a,b){p(b)?this.f.zd(a,M(b)):this.f.remove(a)};
Mi.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return ud(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mi.prototype.remove=function(a){this.f.remove(a)};function Ni(a){this.f=a}
x(Ni,Mi);function Oi(a){this.data=a}
function Pi(a){return!p(a)||a instanceof Oi?a:new Oi(a)}
Ni.prototype.h=function(a,b){Ni.I.h.call(this,a,Pi(b))};
Ni.prototype.j=function(a){a=Ni.I.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ni.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qi(a){this.f=a}
x(Qi,Ni);function Ri(a){var b=a.creation;a=a.expiration;return!!a&&a<w()||!!b&&b>w()}
Qi.prototype.h=function(a,b,c){if(b=Pi(b)){if(c){if(c<w()){Qi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}Qi.I.h.call(this,a,b)};
Qi.prototype.j=function(a,b){var c=Qi.I.j.call(this,a);if(c)if(!b&&Ri(c))Qi.prototype.remove.call(this,a);else return c};function Si(a){this.f=a}
x(Si,Qi);function Ti(a,b){var c=[];Rc(b,function(a){var b;try{b=Si.prototype.j.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?Ri(b)&&c.push(a):c.push(a)},a);
return c}
function Ui(a,b){var c=Ti(a,b);y(c,function(a){Si.prototype.remove.call(this,a)},a)}
function Vi(){var a=Wi;Ui(a,a.f.va(!0))}
;function T(a,b,c){var d=c&&0<c?c:0;c=d?w()+1E3*d:0;if((d=d?Wi:Xi)&&window.JSON){u(b)||(b=JSON.stringify(b,void 0));try{d.h(a,b,c)}catch(e){d.remove(a)}}}
function U(a){if(!Xi&&!Wi||!window.JSON)return null;var b;try{b=Xi.get(a)}catch(c){}if(!u(b))try{b=Wi.get(a)}catch(c){}if(!u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function Yi(a){Xi&&Xi.remove(a);Wi&&Wi.remove(a)}
var Wi,Zi=new Ki;Wi=Zi.isAvailable()?new Si(Zi):null;var Xi,$i=new Li;Xi=$i.isAvailable()?new Si($i):null;function aj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function bj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return cj(a)}
function cj(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function dj(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function ej(a){var b=a.video_id||a.videoId;if(u(b)){var c=U("yt-player-two-stage-token")||{},d=U("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];T("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;var fj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",gj=0<window.location.hash.indexOf("__CastInternalExtensionIds__"),hj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm"],ij=["hfaagokkkhdbgiakmmlclaapfelnkoah","fmfcbgogabcbclcofgocippekhfcmgfj","enhhojjnijigcajfphajepfemndkmdlo","eojlgccfgnjlphjnlopmadngcgmmdgpk"],jj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],kj=["ekpaaapppgpmolpcldedioblbkmijaca",
"lhkfccafpkdlaodkicmokbmfapjadkij","ibiljbkambkbohapfhoonkcpcikdglop","enhhojjnijigcajfphajepfemndkmdlo"],lj=gj?hj.concat(ij):hj,mj=gj?kj.concat(jj):jj,nj=window.navigator.presentation?lj.concat(mj):lj;function oj(a){window.chrome?pj(0,a):a(null)}
function pj(a,b){a==nj.length?b(null):qj(nj[a],function(c){c?b(nj[a]):pj(a+1,b)})}
function qj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET","chrome-extension://"+a+fj,!0),c.send()}catch(d){b(!1)}}
function rj(a){var b=document.createElement("script");b.src=a;(document.head||document.documentElement).appendChild(b)}
function sj(){var a=window.navigator.userAgent;return 0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")}
function tj(){if(window.navigator.presentation&&sj())rj("//www.gstatic.com/eureka/clank"+fj);else{if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}oj(function(a){a?(window.chrome=window.chrome||{},window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=a,rj("chrome-extension://"+a+fj)):(a=window.__onGCastApiAvailable)&&"function"==typeof a&&a(!1,"No cast extension found")})}}
;var uj=w(),vj=null,wj=Array(50),xj=-1,yj=!1;function zj(a){Aj();vj.push(a);Bj(vj)}
function Cj(a){var b=r("yt.mdx.remote.debug.handlers_");Ua(b||[],a)}
function Dj(a,b){Aj();var c=vj,d=Ej(a,String(b));0==c.length?Fj(d):(Bj(c),y(c,function(a){a(d)}))}
function Aj(){vj||(vj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",vj,void 0))}
function Fj(a){var b=(xj+1)%50;xj=b;wj[b]=a;yj||(yj=49==b)}
function Bj(a){var b=wj;if(b[0]){var c=xj,d=yj?c:-1;do{var d=(d+1)%50,e=b[d];y(a,function(a){a(e)})}while(d!=c);
wj=Array(50);xj=-1;yj=!1}}
function Ej(a,b){var c=(w()-uj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Gj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.f=a.uuid||a.dialId||""}
function Hj(a,b){return!!b&&(a.id==b||a.f==b)}
function Ij(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function Jj(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.f==b.f:!0}
function Kj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.f}}
function Lj(a){return new Gj(a)}
function Mj(a){return ea(a)?z(a,Lj):[]}
function Nj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.f?".."+a.f.slice(-6):"-")+"}":"null"}
function Oj(a){return ea(a)?"["+z(a,Nj).join(",")+"]":"null"}
;var Pj={Te:"atp",bf:"ska",Ze:"que",Xe:"mus",af:"sus"};function Qj(a){this.o=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=Number(a.match(Cd)[4]||null)||null||"";b&&(this.o=":"+b);this.j=Dd(a)||"";a=wb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ha(a,"10.0")&&(this.h=!1))}
function Rj(a,b,c,d){var e=a.f;if(p(d)?d:a.h)e="https://"+a.j+a.o+a.f;return Ld(e+b,c||{})}
function Sj(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,aa:pa(a.A,d,!0),onError:pa(a.l,e),ub:pa(a.B,e)};c&&(a.S=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Ud(b,a)}
Qj.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Qj.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
Qj.prototype.B=function(a){a(Error("request timed out"))};function Tj(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function Uj(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
Tj.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function Vj(a){a=a||[];return"["+z(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function Wj(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function Xj(a,b){return Pa(a,function(a){return a.key==b})}
function Yj(a){return z(a,function(a){return{key:a.id,name:a.name}})}
function Zj(a){return z(a,function(a){return Uj(a)})}
function ak(a){return z(a,function(a){return new Tj(a)})}
function bk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function ck(a,b){return Pa(a,function(a){return a.id==b})}
function dk(a,b){return Pa(a,function(a){return Ij(a,b)})}
function ek(a,b){return Pa(a,function(a){return Hj(a,b)})}
;function V(){D.call(this);this.o=new F;ec(this,pa(E,this.o))}
x(V,D);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.o.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.o.unsubscribe(a,b,c)};
V.prototype.qa=function(a){return this.isDisposed()?!1:this.o.qa(a)};
V.prototype.D=function(a,b){return this.isDisposed()?!1:this.o.D.apply(this.o,arguments)};function fk(a){V.call(this);this.B=a;this.screens=[]}
x(fk,V);fk.prototype.Z=function(){return this.screens};
fk.prototype.contains=function(a){return!!dk(this.screens,a)};
fk.prototype.get=function(a){return a?ek(this.screens,a):null};
function gk(a,b){var c=a.get(b.f)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.f=b.f||c.f;return c.name!=d}a.screens.push(b);return!0}
function hk(a,b){var c=a.screens.length!=b.length;a.screens=Ma(a.screens,function(a){return!!dk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=gk(a,b[d])||c;return c}
function ik(a,b){var c=a.screens.length;a.screens=Ma(a.screens,function(a){return!Ij(a,b)});
return a.screens.length<c}
fk.prototype.info=function(a){Dj(this.B,a)};function jk(a,b,c,d){V.call(this);this.F=a;this.B=b;this.l=c;this.A=d;this.j=0;this.f=null;this.h=NaN}
x(jk,V);var kk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=jk.prototype;g.start=function(){!this.f&&isNaN(this.h)&&this.Ic()};
g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(J(this.h),this.h=NaN)};
g.G=function(){this.stop();jk.I.G.call(this)};
g.Ic=function(){this.h=NaN;this.f=Ud(Rj(this.F,"/pairing/get_screen"),{method:"POST",S:{pairing_code:this.B},timeout:5E3,aa:v(this.Ke,this),onError:v(this.Je,this),ub:v(this.Le,this)})};
g.Ke=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.l;c.name=this.A;this.D("pairingComplete",new Gj(c))};
g.Je=function(a){this.f=null;a.status&&404==a.status?this.j>=kk.length?this.D("pairingFailed",Error("DIAL polling timed out")):(a=kk[this.j],this.h=I(v(this.Ic,this),a),this.j++):this.D("pairingFailed",Error("Server error "+a.status))};
g.Le=function(){this.f=null;this.D("pairingFailed",Error("Server not responding"))};function lk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new cd;this.theme="u";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.theme=a.theme||"u",this.capabilities=new cd(Ma((a.capabilities||"").split(","),pa(gb,Pj))))}
lk.prototype.equals=function(a){return a?this.id==a.id:!1};var mk;function nk(){var a=ok(),b=pk();A(a,b);if(qk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=cb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Za(c,-(d+1),0,b)}a=rk(a);if(0==a.length)try{a="remote_sid",Ze.remove(""+a,"/","youtube.com")}catch(l){}else try{$e("remote_sid",a.join(","),-1)}catch(l){}}
function ok(){var a=U("yt-remote-connected-devices")||[];a.sort(cb);return a}
function rk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return z(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function sk(a){T("yt-remote-connected-devices",a,86400)}
function pk(){if(tk)return tk;var a=U("yt-remote-device-id");a||(a=Wj(),T("yt-remote-device-id",a,31536E3));for(var b=ok(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return tk=d}
function uk(){return U("yt-remote-session-browser-channel")}
function qk(){return U("yt-remote-session-screen-id")}
function vk(a){5<a.length&&(a=a.slice(a.length-5));var b=z(wk(),function(a){return a.loungeToken}),c=z(a,function(a){return a.loungeToken});
Oa(c,function(a){return!A(b,a)})&&xk();
T("yt-remote-local-screens",a,31536E3)}
function wk(){return U("yt-remote-local-screens")||[]}
function xk(){T("yt-remote-lounge-token-expiration",!0,86400)}
function yk(){return!U("yt-remote-lounge-token-expiration")}
function zk(a){T("yt-remote-online-screens",a,60)}
function Ak(){return U("yt-remote-online-screens")||[]}
function Bk(a){T("yt-remote-online-dial-devices",a,30)}
function Ck(){return U("yt-remote-online-dial-devices")||[]}
function Dk(a,b){T("yt-remote-session-browser-channel",a);T("yt-remote-session-screen-id",b);var c=ok(),d=pk();A(c,d)||c.push(d);sk(c);nk()}
function Ek(a){a||(Yi("yt-remote-session-screen-id"),Yi("yt-remote-session-video-id"));nk();a=ok();Ua(a,pk());sk(a)}
function Fk(){if(!mk){var a;a=new Ki;(a=a.isAvailable()?a:null)&&(mk=new Mi(a))}return mk?!!mk.get("yt-remote-use-staging-server"):!1}
var tk="";function Gk(a){fk.call(this,"LocalScreenService");this.h=a;this.f=NaN;Hk(this);this.info("Initializing with "+Oj(this.screens))}
x(Gk,fk);g=Gk.prototype;g.start=function(){Hk(this)&&this.D("screenChange");yk()&&Ik(this);J(this.f);this.f=I(v(this.start,this),1E4)};
g.Db=function(a,b){Hk(this);gk(this,a);Jk(this,!1);this.D("screenChange");b(a);a.token||Ik(this)};
g.remove=function(a,b){var c=Hk(this);ik(this,a)&&(Jk(this,!1),c=!0);b(a);c&&this.D("screenChange")};
g.Ab=function(a,b,c,d){var e=Hk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Jk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.D("screenChange")};
g.G=function(){J(this.f);Gk.I.G.call(this)};
function Ik(a){if(a.screens.length){var b=z(a.screens,function(a){return a.id}),c=Rj(a.h,"/pairing/get_lounge_token_batch");
Sj(a.h,c,{screen_ids:b.join(",")},v(a.Dd,a),v(a.Cd,a))}}
g.Dd=function(a){Hk(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Jk(this,!b);b&&Dj(this.B,"Missed "+b+" lounge tokens.")};
g.Cd=function(a){Dj(this.B,"Requesting lounge tokens failed: "+a)};
function Hk(a){var b=Mj(wk()),b=Ma(b,function(a){return!a.f});
return hk(a,b)}
function Jk(a,b){vk(z(a.screens,Kj));b&&xk()}
;function Kk(a,b){V.call(this);this.A=b;for(var c=U("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.A(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.f=d;this.B=a;this.j=this.l=NaN;this.h=null;Lk("Initialized with "+M(this.f))}
x(Kk,V);g=Kk.prototype;g.start=function(){var a=parseInt(U("yt-remote-fast-check-period")||"0",10);(this.l=w()-144E5<a?0:a)?Mk(this):(this.l=w()+3E5,T("yt-remote-fast-check-period",this.l),this.Yb())};
g.isEmpty=function(){return pb(this.f)};
g.update=function(){Lk("Updating availability on schedule.");var a=this.A(),b=eb(this.f,function(b,d){return b&&!!ek(a,d)},this);
Nk(this,b)};
function Ok(a,b,c){var d=Rj(a.B,"/pairing/get_screen_availability");Sj(a.B,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
g.G=function(){J(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);Kk.I.G.call(this)};
function Nk(a,b){var c;a:if(fb(b)!=fb(a.f))c=!1;else{c=kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Lk("Updated online screens: "+M(a.f)),a.f=b,a.D("screenChange"));Pk(a)}
function Mk(a){isNaN(a.j)||J(a.j);a.j=I(v(a.Yb,a),0<a.l&&a.l<w()?2E4:1E4)}
g.Yb=function(){J(this.j);this.j=NaN;this.h&&this.h.abort();var a=Qk(this);if(fb(a)){var b=Rj(this.B,"/pairing/get_screen_availability"),c={lounge_token:kb(a).join(",")};this.h=Sj(this.B,b,c,v(this.be,this,a),v(this.ae,this))}else Nk(this,{}),Mk(this)};
g.be=function(a,b){this.h=null;var c=kb(Qk(this));if(ab(c,kb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Nk(this,d);Mk(this)}else this.M("Changing Screen set during request."),this.Yb()};
g.ae=function(a){this.M("Screen availability failed: "+a);this.h=null;Mk(this)};
function Lk(a){Dj("OnlineScreenService",a)}
g.M=function(a){Dj("OnlineScreenService",a)};
function Qk(a){var b={};y(a.A(),function(a){a.token?b[a.token]=a.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function Pk(a){var b=kb(eb(a.f,function(a){return a}));
b.sort(cb);b.length?T("yt-remote-online-screen-ids",b.join(","),60):Yi("yt-remote-online-screen-ids");a=Ma(a.A(),function(a){return!!this.f[a.id]},a);
zk(z(a,Kj))}
;function W(a){fk.call(this,"ScreenService");this.A=a;this.f=this.h=null;this.j=[];this.l={};Rk(this)}
x(W,fk);g=W.prototype;g.start=function(){this.h.start();this.f.start();this.screens.length&&(this.D("screenChange"),this.f.isEmpty()||this.D("onlineScreenChange"))};
g.Db=function(a,b,c){this.h.Db(a,b,c)};
g.remove=function(a,b,c){this.h.remove(a,b,c);this.f.update()};
g.Ab=function(a,b,c,d){this.h.contains(a)?this.h.Ab(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Dj(this.B,a),d(Error(a)))};
g.Z=function(a){return a?this.screens:Wa(this.screens,Ma(this.j,function(a){return!this.contains(a)},this))};
g.Tc=function(){return Ma(this.Z(!0),function(a){return!!this.f.f[a.id]},this)};
function Sk(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.l[b]);var h=a.Z();if(h=(c?ek(h,c):null)||ek(h,b)){h.f=b;var k=Tk(a,h);Ok(a.f,k,function(a){e(a?k:null)})}else c?Uk(a,c,v(function(a){var f=Tk(this,new Gj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Ok(this.f,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Uc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new jk(this.A,a,b,c);f.subscribe("pairingComplete",v(function(a){E(f);d(Tk(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return v(f.stop,f)};
function Vk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.qc=function(a,b){for(var c=2,d=b(a,c);Vk(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Ne=function(a,b,c,d){Ud(Rj(this.A,"/pairing/get_screen"),{method:"POST",S:{pairing_code:a},timeout:5E3,aa:v(function(a,d){var h=new Gj(d.screen||{});if(!h.name||Vk(this,h.name))h.name=this.qc(h.name,b);c(Tk(this,h))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
ub:v(function(){d(Error("pairing request timed out."))},this)})};
g.G=function(){E(this.h);E(this.f);W.I.G.call(this)};
function Uk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={S:{screen_ids:b},method:"POST",context:a,aa:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Ud(Rj(a.A,"/pairing/get_lounge_token_batch"),e)}
function Wk(a){a.screens=a.h.Z();var b=a.l,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.f=c[e.id]||""}a.info("Updated manual screens: "+Oj(a.screens))}
g.Ed=function(){Wk(this);this.D("screenChange");this.f.update()};
function Rk(a){Xk(a);a.h=new Gk(a.A);a.h.subscribe("screenChange",v(a.Ed,a));Wk(a);a.j=Mj(U("yt-remote-automatic-screen-cache")||[]);Xk(a);a.info("Initializing automatic screens: "+Oj(a.j));a.f=new Kk(a.A,v(a.Z,a,!0));a.f.subscribe("screenChange",v(function(){this.D("onlineScreenChange")},a))}
function Tk(a,b){var c=a.get(b.id);c?(c.f=b.f,b=c):((c=ek(a.j,b.f))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),T("yt-remote-automatic-screen-cache",z(a.j,Kj)));Xk(a);a.l[b.f]=b.id;T("yt-remote-device-id-map",a.l,31536E3);return b}
function Xk(a){a.l=U("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function Yk(a,b,c){V.call(this);this.R=c;this.K=a;this.h=b;this.j=null}
x(Yk,V);g=Yk.prototype;g.tb=function(a){this.j=a;this.D("sessionScreen",this.j)};
g.$=function(a){this.isDisposed()||(a&&Zk(this,""+a),this.j=null,this.D("sessionScreen",null))};
g.info=function(a){Dj(this.R,a)};
function Zk(a,b){Dj(a.R,b)}
g.Wc=function(){return null};
g.$b=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){Zk(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.G=function(){this.$b("");Yk.I.G.call(this)};function $k(a,b){Yk.call(this,a,b,"CastSession");this.f=null;this.A=0;this.l=null;this.F=v(this.Oe,this);this.B=v(this.me,this);this.A=I(v(function(){al(this,null)},this),12E4)}
x($k,Yk);g=$k.prototype;g.Zb=function(a){if(this.f){if(this.f==a)return;Zk(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.F);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.f=a;this.f.addUpdateListener(this.F);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);this.l&&bl(this);cl(this,"getMdxSessionStatus")};
g.Sa=function(a){this.info("launchWithParams: "+M(a));this.l=a;this.f&&bl(this)};
g.stop=function(){this.f?this.f.stop(v(function(){this.$()},this),v(function(){this.$(Error("Failed to stop receiver app."))},this)):this.$(Error("Stopping cast device witout session."))};
g.$b=t;g.G=function(){this.info("disposeInternal");J(this.A);this.A=0;this.f&&(this.f.removeUpdateListener(this.F),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.f=null;$k.I.G.call(this)};
function bl(a){var b=a.l.videoId||a.l.videoIds[a.l.index];b&&cl(a,"flingVideo",{videoId:b,currentTime:a.l.currentTime||0});a.l=null}
function cl(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+M(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,v(function(){Zk(this,"Failed to send message: "+b+".")},a)):Zk(a,"Sending yt message without session: "+M(d))}
g.me=function(a,b){if(!this.isDisposed())if(b){var c=vd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+M(c));switch(d){case "mdxSessionStatus":al(this,c.screenId);break;default:Zk(this,"Unknown youtube message: "+d)}}else Zk(this,"Unable to parse message.")}else Zk(this,"No data in message.")};
function al(a,b){J(a.A);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=v(a.tb,a),d=v(a.$,a);a.pc(b,c,d,5)}}else a.$(Error("Waiting for session status timed out."))}
g.pc=function(a,b,c,d){Sk(this.K,this.h.label,a,this.h.friendlyName,v(function(e){e?b(e):0<=d?(Zk(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(v(this.pc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Wc=function(){return this.f};
g.Oe=function(a){this.isDisposed()||a||(Zk(this,"Cast session died."),this.$())};function dl(a,b){Yk.call(this,a,b,"DialSession");this.A=this.J=null;this.N="";this.l=null;this.F=t;this.B=NaN;this.P=v(this.Re,this);this.f=t}
x(dl,Yk);g=dl.prototype;g.Zb=function(a){this.A=a;this.A.addUpdateListener(this.P)};
g.Sa=function(a){this.l=a;this.F()};
g.stop=function(){this.f();this.f=t;J(this.B);this.A?this.A.stop(v(this.$,this,null),v(this.$,this,"Failed to stop DIAL device.")):this.$()};
g.G=function(){this.f();this.f=t;J(this.B);this.A&&this.A.removeUpdateListener(this.P);this.A=null;dl.I.G.call(this)};
function el(a){a.f=a.K.Uc(a.N,a.h.label,a.h.friendlyName,v(function(a){this.f=t;this.tb(a)},a),v(function(a){this.f=t;
this.$(a)},a))}
g.Re=function(a){this.isDisposed()||a||(Zk(this,"DIAL session died."),this.f(),this.f=t,this.$())};
function fl(a){var b={};b.pairingCode=a.N;if(a.l){var c=a.l.index||0,d=a.l.currentTime||0;b.v=a.l.videoId||a.l.videoIds[c];b.t=d}Fk()&&(b.env_useStageMdx=1);return Jd(b)}
g.Ub=function(a){this.N=Wj();if(this.l){var b=new chrome.cast.DialLaunchResponse(!0,fl(this));a(b);el(this)}else this.F=v(function(){J(this.B);this.F=t;this.B=NaN;var b=new chrome.cast.DialLaunchResponse(!0,fl(this));a(b);el(this)},this),this.B=I(v(function(){this.F()},this),100)};
g.Fd=function(a,b){Sk(this.K,this.J.receiver.label,a,this.h.friendlyName,v(function(a){a&&a.token?(this.tb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Ub(b)},this),v(function(a){Zk(this,"Failed to get DIAL screen: "+a);
this.Ub(b)},this))};function gl(a,b){Yk.call(this,a,b,"ManualSession");this.f=I(v(this.Sa,this,null),150)}
x(gl,Yk);gl.prototype.stop=function(){this.$()};
gl.prototype.Zb=t;gl.prototype.Sa=function(){J(this.f);this.f=NaN;var a=ek(this.K.Z(),this.h.label);a?this.tb(a):this.$(Error("No such screen"))};
gl.prototype.G=function(){J(this.f);this.f=NaN;gl.I.G.call(this)};function hl(a){V.call(this);this.h=a;this.f=null;this.A=!1;this.j=[];this.l=v(this.Zd,this)}
x(hl,V);g=hl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,v(this.Cc,this),v(this.$d,this),d,e);c.customDialLaunchCallback=v(this.Od,this);chrome.cast.initialize(c,v(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.l),
zj(il),this.h.subscribe("onlineScreenChange",v(this.Vc,this)),this.j=jl(this),chrome.cast.setCustomReceivers(this.j,t,v(function(a){this.M("Failed to set initial custom receivers: "+M(a))},this)),this.D("yt-remote-cast2-availability-change",kl(this)),b(!0))},this),v(function(a){this.M("Failed to initialize API: "+M(a));
b(!1)},this))};
g.ze=function(a,b){ll("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)ll("Unsetting old screen status: "+this.f.h.friendlyName),E(this.f),this.f=null}if(a&&b){if(!this.f){c=ek(this.h.Z(),a);if(!c){ll("setConnectedScreenStatus: Unknown screen.");return}var d=ml(this,c);d||(ll("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.f?c.f:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,v(function(a){this.M("Failed to set initial custom receivers: "+M(a))},this)));
ll("setConnectedScreenStatus: new active receiver: "+d.friendlyName);nl(this,new gl(this.h,d),!0)}this.f.$b(b)}else ll("setConnectedScreenStatus: no screen.")};
function ml(a,b){return b?Pa(a.j,function(a){return Hj(b,a.label)},a):null}
g.Ae=function(a){this.isDisposed()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Sa(a):this.M("Setting connection data without a session")};
g.Qe=function(){this.isDisposed()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),E(this.f),this.f=null):ll("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(v(this.Cc,this),v(this.ce,this))};
g.G=function(){this.h.unsubscribe("onlineScreenChange",v(this.Vc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.l);Cj(il);E(this.f);hl.I.G.call(this)};
function ll(a){Dj("Controller",a)}
g.M=function(a){Dj("Controller",a)};
function il(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function kl(a){return a.A||!!a.j.length||!!a.f}
function nl(a,b,c){E(a.f);(a.f=b)?(c?a.D("yt-remote-cast2-receiver-resumed",b.h):a.D("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",v(a.Dc,a,b)),b.j?a.D("yt-remote-cast2-session-change",b.j):c&&a.f.Sa(null)):a.D("yt-remote-cast2-session-change",null)}
g.Dc=function(a,b){this.f==a&&(b||nl(this,null),this.D("yt-remote-cast2-session-change",b))};
g.Zd=function(a,b){if(!this.isDisposed())if(a)switch(ll("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)ll("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{ll("onReceiverAction_: Casting to active receiver.");this.f.j&&this.D("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:nl(this,new gl(this.h,a));break;case chrome.cast.ReceiverType.DIAL:nl(this,
new dl(this.h,a));break;case chrome.cast.ReceiverType.CAST:nl(this,new $k(this.h,a));break;default:this.M("Unknown receiver type: "+a.receiverType);return}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
g.Od=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return ll("Reselecting dial screen."),
this.D("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);nl(this,new dl(this.h,b))}b=this.f;b.J=a;return b.J.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Fd,b,(b.J.extraData||{}).screenId||null)):new Promise(v(b.Ub,b))};
g.Cc=function(a){if(!this.isDisposed()){ll("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)ll("Got resumed cast session before resumed mdx connection."),nl(this,new $k(this.h,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=ek(this.h.Z(),c.label);d&&Hj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(ll("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.f),this.f=new $k(this.h,b),this.f.subscribe("sessionScreen",v(this.Dc,this,this.f)),this.f.Sa(null));this.f.Zb(a)}}};
g.Pe=function(){return this.f?this.f.Wc():null};
g.ce=function(a){this.isDisposed()||(this.M("Failed to estabilish a session: "+M(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&nl(this,null))};
g.$d=function(a){ll("Receiver availability updated: "+a);if(!this.isDisposed()){var b=kl(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;kl(this)!=b&&this.D("yt-remote-cast2-availability-change",kl(this))}};
function jl(a){var b=a.h.Tc(),c=a.f&&a.f.h;a=z(b,function(a){c&&Hj(a,c.label)&&(c=null);var b=a.f?a.f:a.id,f=ml(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Vc=function(){if(!this.isDisposed()){var a=kl(this);this.j=jl(this);ll("Updating custom receivers: "+M(this.j));chrome.cast.setCustomReceivers(this.j,t,v(function(){this.M("Failed to set custom receivers.")},this));
var b=kl(this);b!=a&&this.D("yt-remote-cast2-availability-change",b)}};
hl.prototype.setLaunchParams=hl.prototype.Ae;hl.prototype.setConnectedScreenStatus=hl.prototype.ze;hl.prototype.stopSession=hl.prototype.Qe;hl.prototype.getCastSession=hl.prototype.Pe;hl.prototype.requestSession=hl.prototype.requestSession;hl.prototype.init=hl.prototype.init;hl.prototype.dispose=hl.prototype.dispose;function ol(a,b,c){pl()?rl(a)&&(sl(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?tl(b):(window.__onGCastApiAvailable=function(a,c){a?tl(b):(ul("Failed to load cast API: "+c),vl(!1),sl(!1),Yi("yt-remote-cast-available"),Yi("yt-remote-cast-receiver"),wl(),b(!1))},c?Bc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):tj())):ql("Cannot initialize because not running Chrome")}
function wl(){ql("dispose");var a=xl();a&&a.dispose();yl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);zl(!1);xc(Al);Al.length=0}
function Bl(){return!!U("yt-remote-cast-installed")}
function Cl(){var a=U("yt-remote-cast-receiver");return a?Ba(a.friendlyName):null}
function Dl(){ql("clearCurrentReciever");Yi("yt-remote-cast-receiver")}
function El(){Bl()?xl()?Fl()?(ql("Requesting cast selector."),yl.requestSession()):(ql("Wait for cast API to be ready to request the session."),Al.push(vc("yt-remote-cast2-api-ready",El))):ul("requestCastSelector: Cast is not initialized."):ul("requestCastSelector: Cast API is not installed!")}
function Gl(a){Fl()?xl().setLaunchParams(a):ul("setLaunchParams called before ready.")}
function Hl(a,b){Fl()?xl().setConnectedScreenStatus(a,b):ul("setConnectedScreenStatus called before ready.")}
var yl=null;function pl(){var a;a=0<=wb.search(/\ (CrMo|Chrome|CriOS)\//);return yf||a}
function Il(a){yl.init(!0,a)}
function rl(a){var b=!1;if(!yl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new hl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){T("yt-remote-cast-available",a);K("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){ql("onReceiverSelected: "+a.friendlyName);
T("yt-remote-cast-receiver",a);K("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){ql("onReceiverResumed: "+a.friendlyName);
T("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){ql("onSessionChange: "+Nj(a));
a||Yi("yt-remote-cast-receiver");K("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
yl=c}ql("cloudview.createSingleton_: "+b);return b}
function xl(){yl||(yl=r("yt.mdx.remote.cloudview.instance_"));return yl}
function tl(a){vl(!0);sl(!1);Il(function(b){b?(zl(!0),K("yt-remote-cast2-api-ready")):(ul("Failed to initialize cast API."),vl(!1),Yi("yt-remote-cast-available"),Yi("yt-remote-cast-receiver"),wl());a(b)})}
function ql(a){Dj("cloudview",a)}
function ul(a){Dj("cloudview",a)}
function vl(a){ql("setCastInstalled_ "+a);T("yt-remote-cast-installed",a)}
function Fl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function zl(a){ql("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function sl(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Al=[];function Jl(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function Kl(a){Dj("CAST",a)}
function Ll(a){var b=Ml();b&&b.logMessage&&b.logMessage(a)}
function Nl(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;Ol.length;)Ol.shift()()}
function Pl(){if(!r("yt.mdx.remote.castv2_")&&!Ql&&(0==Sa.length&&Ya(Sa,Ck()),Jl())){var a=Ml();a?(a.removeReceiverListener("YouTube",Rl),a.addReceiverListener("YouTube",Rl),Kl("API initialized in the other binary")):(a=new cast.Api,Sl(a),a.addReceiverListener("YouTube",Rl),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){I(function(){window.location.reload(!0)},1E3)}),zj(Ll),Kl("API initialized"));
Ql=!0}}
function Tl(){var a=Ml();a&&(Kl("API disposed"),Cj(Ll),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",Rl),Sl(null));Ql=!1;Ol=null;(a=Pe(window,"message",Nl,!1))&&Qe(a)}
function Ul(a){var b=Qa(Sa,function(b){return b.id==a.id});
0<=b&&(Sa[b]=Uj(a))}
function Rl(a){a.length&&Kl("Updating receivers: "+M(a));Vl(a);K("yt-remote-cast-device-list-update");y(Wl(),function(a){Xl(a.id)});
y(a,function(a){if(a.isTabProjected){var c=Yl(a.id);Kl("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");I(function(){K("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function Zl(a,b){Kl("Updating "+a+" activity status: "+M(b));var c=Yl(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),Ul(c),K("yt-remote-cast-device-status-update",c)):Kl("Device not found")}
function Wl(){Pl();return ak(Sa)}
function Vl(a){a=z(a,function(a){var c={id:a.id,name:Ba(a.name)};if(a=Yl(a.id))c.activityId=a.f,c.status=a.status;return c});
Ra();Ya(Sa,a)}
function Yl(a){var b=Wl();return Pa(b,function(b){return b.id==a})||null}
function Xl(a){var b=Yl(a),c=Ml();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");Zl(a,b)})}
function $l(a){Pl();var b=Yl(a),c=Ml();c&&b&&b.f?(Kl("Stopping cast activity"),c.stopActivity(b.f,pa(Zl,a))):Kl("Dropping cast activity stop")}
function Ml(){return r("yt.mdx.remote.castapi.api_")}
function Sl(a){q("yt.mdx.remote.castapi.api_",a,void 0)}
var Ql=!1,Ol=null,Sa=r("yt.mdx.remote.castapi.devices_")||[];q("yt.mdx.remote.castapi.devices_",Sa,void 0);function am(a,b){this.action=a;this.params=b||null}
;function bm(){}
;function cm(){this.f=w()}
new cm;cm.prototype.reset=function(){this.f=w()};
cm.prototype.get=function(){return this.f};function dm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=!1;this.Mc=!0}
dm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Mc=!1};var em=!L||rd(9),fm=L&&!qd("9");!jd||qd("528");id&&qd("1.9b")||L&&qd("8")||gd&&qd("9.5")||jd&&qd("528");id&&!qd("8")||L&&qd("9");function gm(a,b){dm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
x(gm,dm);
gm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(id){var f;a:{try{jf(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
gm.prototype.preventDefault=function(){gm.I.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,fm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var hm="closure_listenable_"+(1E6*Math.random()|0),im=0;function jm(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.lb=!!d;this.qb=e;this.key=++im;this.Ua=this.kb=!1}
function km(a){a.Ua=!0;a.listener=null;a.f=null;a.src=null;a.qb=null}
;function lm(a){this.src=a;this.f={};this.h=0}
function mm(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=nm(b,c,d,e);-1<h?(a=b[h],a.kb=!1):(a=new jm(c,a.src,f,!!d,e),a.kb=!1,b.push(a));return a}
lm.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=nm(e,b,c,d);return-1<b?(km(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function om(a,b){var c=b.type;c in a.f&&Ua(a.f[c],b)&&(km(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
lm.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,km(d[e]);delete this.f[c];this.h--}return b};
function pm(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=nm(a,c,d,e));return-1<b?a[b]:null}
function nm(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ua&&f.listener==b&&f.lb==!!c&&f.qb==d)return e}return-1}
;var qm="closure_lm_"+(1E6*Math.random()|0),rm={},sm=0;
function tm(a,b,c,d,e){if(ea(b)){for(var f=0;f<b.length;f++)tm(a,b[f],c,d,e);return null}c=um(c);if(a&&a[hm])a=a.rb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=vm(a);h||(a[qm]=h=new lm(a));c=mm(h,b,c,d,e);if(!c.f){d=wm();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(xm(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");sm++}a=c}return a}
function wm(){var a=ym,b=em?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function zm(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)zm(a,b[f],c,d,e);else c=um(c),a&&a[hm]?a.zb(b,c,d,e):a&&(a=vm(a))&&(b=pm(a,b,c,!!d,e))&&Am(b)}
function Am(a){if(!ga(a)&&a&&!a.Ua){var b=a.src;if(b&&b[hm])om(b.j,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.lb):b.detachEvent&&b.detachEvent(xm(c),d);sm--;(c=vm(b))?(om(c,a),0==c.h&&(c.src=null,b[qm]=null)):km(a)}}}
function xm(a){return a in rm?rm[a]:rm[a]="on"+a}
function Bm(a,b,c,d){var e=!0;if(a=vm(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.lb==c&&!f.Ua&&(f=Cm(f,d),e=e&&!1!==f)}return e}
function Cm(a,b){var c=a.listener,d=a.qb||a.src;a.kb&&Am(a);return c.call(d,b)}
function ym(a,b){if(a.Ua)return!0;if(!em){var c=b||r("window.event"),d=new gm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.currentTarget=c[h];var k=Bm(c[h],f,!0,d),e=e&&k}for(h=0;h<c.length;h++)d.currentTarget=c[h],k=Bm(c[h],f,!1,d),e=e&&k}return e}return Cm(a,new gm(b,this))}
function vm(a){a=a[qm];return a instanceof lm?a:null}
var Dm="__closure_events_fn_"+(1E9*Math.random()>>>0);function um(a){if(ha(a))return a;a[Dm]||(a[Dm]=function(b){return a.handleEvent(b)});
return a[Dm]}
;function Em(){D.call(this);this.j=new lm(this);this.za=this;this.ia=null}
x(Em,D);Em.prototype[hm]=!0;g=Em.prototype;g.addEventListener=function(a,b,c,d){tm(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){zm(this,a,b,c,d)};
function Fm(a,b){var c,d=a.ia;if(d){c=[];for(var e=1;d;d=d.ia)c.push(d),++e}var d=a.za,e=b,f=e.type||e;if(u(e))e=new dm(e,d);else if(e instanceof dm)e.target=e.target||d;else{var h=e,e=new dm(f,d);vb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;0<=l;l--)k=e.currentTarget=c[l],h=Gm(k,f,!0,e)&&h;k=e.currentTarget=d;h=Gm(k,f,!0,e)&&h;h=Gm(k,f,!1,e)&&h;if(c)for(l=0;l<c.length;l++)k=e.currentTarget=c[l],h=Gm(k,f,!1,e)&&h}
g.G=function(){Em.I.G.call(this);this.removeAllListeners();this.ia=null};
g.rb=function(a,b,c,d){return mm(this.j,String(a),b,c,d)};
g.zb=function(a,b,c,d){return this.j.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.j?this.j.removeAll(a):0};
function Gm(a,b,c,d){b=a.j.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ua&&h.lb==c){var k=h.listener,l=h.qb||h.src;h.kb&&om(a.j,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Mc}
;function Hm(a,b){this.h=new xd(a);this.f=b?vd:ud}
Hm.prototype.stringify=function(a){return wd(this.h,a)};
Hm.prototype.parse=function(a){return this.f(a)};function Im(a,b){Em.call(this);this.f=a||1;this.h=b||m;this.o=v(this.Ce,this);this.l=w()}
x(Im,Em);g=Im.prototype;g.enabled=!1;g.da=null;function Jm(a,b){a.f=b;a.da&&a.enabled?(a.stop(),a.start()):a.da&&a.stop()}
g.Ce=function(){if(this.enabled){var a=w()-this.l;0<a&&a<.8*this.f?this.da=this.h.setTimeout(this.o,this.f-a):(this.da&&(this.h.clearTimeout(this.da),this.da=null),Fm(this,"tick"),this.enabled&&(this.da=this.h.setTimeout(this.o,this.f),this.l=w()))}};
g.start=function(){this.enabled=!0;this.da||(this.da=this.h.setTimeout(this.o,this.f),this.l=w())};
g.stop=function(){this.enabled=!1;this.da&&(this.h.clearTimeout(this.da),this.da=null)};
g.G=function(){Im.I.G.call(this);this.stop();delete this.h};
function Km(a,b,c){if(ha(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function Lm(a,b,c){D.call(this);this.o=null!=c?v(a,c):a;this.j=b;this.h=v(this.ee,this);this.f=[]}
x(Lm,D);g=Lm.prototype;g.yb=!1;g.Qa=null;g.sd=function(a){this.f=arguments;this.Qa?this.yb=!0:Mm(this)};
g.stop=function(){this.Qa&&(m.clearTimeout(this.Qa),this.Qa=null,this.yb=!1,this.f=[])};
g.G=function(){Lm.I.G.call(this);this.stop()};
g.ee=function(){this.Qa=null;this.yb&&(this.yb=!1,Mm(this))};
function Mm(a){a.Qa=Km(a.h,a.j);a.o.apply(null,a.f)}
;function Nm(a){D.call(this);this.h=a;this.f={}}
x(Nm,D);var Om=[];g=Nm.prototype;g.rb=function(a,b,c,d){ea(b)||(b&&(Om[0]=b.toString()),b=Om);for(var e=0;e<b.length;e++){var f=tm(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.zb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)this.zb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=um(c),d=!!d,b=a&&a[hm]?pm(a.j,String(b),c,d,e):a?(a=vm(a))?pm(a,b,c,d,e):null:null,b&&(Am(b),delete this.f[b.key]);return this};
g.removeAll=function(){db(this.f,function(a,b){this.f.hasOwnProperty(b)&&Am(a)},this);
this.f={}};
g.G=function(){Nm.I.G.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Pm(){}
Pm.prototype.f=null;function Qm(a){var b;(b=a.f)||(b={},Rm(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var Sm;function Tm(){}
x(Tm,Pm);function Um(a){return(a=Rm(a))?new ActiveXObject(a):new XMLHttpRequest}
function Rm(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
Sm=new Tm;function Vm(a,b,c,d,e){this.f=a;this.j=c;this.F=d;this.B=e||1;this.l=45E3;this.o=new Nm(this);this.h=new Im;Jm(this.h,250)}
g=Vm.prototype;g.Ia=null;g.na=!1;g.Wa=null;g.bc=null;g.gb=null;g.Va=null;g.Aa=null;g.Da=null;g.Ka=null;g.O=null;g.jb=0;g.oa=null;g.Cb=null;g.Ja=null;g.cb=-1;g.Nc=!0;g.Fa=!1;g.Sb=0;g.wb=null;var Wm={},Xm={};g=Vm.prototype;g.setTimeout=function(a){this.l=a};
function Ym(a,b,c){a.Va=1;a.Aa=Ag(b.clone());a.Ka=c;a.A=!0;Zm(a,null)}
function $m(a,b,c,d,e){a.Va=1;a.Aa=Ag(b.clone());a.Ka=null;a.A=c;e&&(a.Nc=!1);Zm(a,d)}
function Zm(a,b){a.gb=w();an(a);a.Da=a.Aa.clone();yg(a.Da,"t",a.B);a.jb=0;a.O=a.f.Lb(a.f.ib()?b:null);0<a.Sb&&(a.wb=new Lm(v(a.Sc,a,a.O),a.Sb));a.o.rb(a.O,"readystatechange",a.oe);var c=a.Ia?sb(a.Ia):{};a.Ka?(a.Cb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.O.send(a.Da,a.Cb,a.Ka,c)):(a.Cb="GET",a.Nc&&!jd&&(c.Connection="close"),a.O.send(a.Da,a.Cb,null,c));a.f.ma(1)}
g.oe=function(a){a=a.target;var b=this.wb;b&&3==bn(a)?b.sd():this.Sc(a)};
g.Sc=function(a){try{if(a==this.O)a:{var b=bn(this.O),c=this.O.l,d=this.O.getStatus();if(L&&!rd(10)||jd&&!qd("420+")){if(4>b)break a}else if(3>b||3==b&&!gd&&!cn(this.O))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.f.ma(3):this.f.ma(2));dn(this);var e=this.O.getStatus();this.cb=e;var f=cn(this.O);(this.na=200==e)?(4==b&&en(this),this.A?(fn(this,b,f),gd&&this.na&&3==b&&(this.o.rb(this.h,"tick",this.ne),this.h.start())):gn(this,f),this.na&&!this.Fa&&(4==b?this.f.sb(this):(this.na=!1,an(this)))):(this.Ja=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),en(this),hn(this))}}catch(h){this.O&&cn(this.O)}finally{}};
function fn(a,b,c){for(var d=!0;!a.Fa&&a.jb<c.length;){var e=jn(a,c);if(e==Xm){4==b&&(a.Ja=4,X(),d=!1);break}else if(e==Wm){a.Ja=4;X();d=!1;break}else gn(a,e)}4==b&&0==c.length&&(a.Ja=1,X(),d=!1);a.na=a.na&&d;d||(en(a),hn(a))}
g.ne=function(){var a=bn(this.O),b=cn(this.O);this.jb<b.length&&(dn(this),fn(this,a,b),this.na&&4!=a&&an(this))};
function jn(a,b){var c=a.jb,d=b.indexOf("\n",c);if(-1==d)return Xm;c=Number(b.substring(c,d));if(isNaN(c))return Wm;d+=1;if(d+c>b.length)return Xm;var e=b.substr(d,c);a.jb=d+c;return e}
function kn(a,b){a.gb=w();an(a);var c=b?window.location.hostname:"";a.Da=a.Aa.clone();O(a.Da,"DOMAIN",c);O(a.Da,"t",a.B);try{a.oa=new ActiveXObject("htmlfile")}catch(n){en(a);a.Ja=7;X();hn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e=e+"\\x3c";else if(">"==h)e=e+"\\x3e";else{if(h in Ga)h=Ga[h];else if(h in Fa)h=Ga[h]=Fa[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ga[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Nc(Cb("b/12014412"),d);a.oa.open();a.oa.write(Lb(c));a.oa.close();a.oa.parentWindow.m=v(a.ie,a);a.oa.parentWindow.d=v(a.Gc,a,!0);a.oa.parentWindow.rpcClose=v(a.Gc,a,!1);c=a.oa.createElement("DIV");a.oa.parentWindow.document.body.appendChild(c);d=Hb(a.Da.toString());d=Fb(d);Aa.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ua,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(va,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(wa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(xa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ya,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(za,"&#0;")));d=Nc(Cb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Lb(d);a.f.ma(1)}
g.ie=function(a){ln(v(this.he,this,a),0)};
g.he=function(a){this.Fa||(dn(this),gn(this,a),an(this))};
g.Gc=function(a){ln(v(this.ge,this,a),0)};
g.ge=function(a){this.Fa||(en(this),this.na=a,this.f.sb(this),this.f.ma(4))};
g.cancel=function(){this.Fa=!0;en(this)};
function an(a){a.bc=w()+a.l;mn(a,a.l)}
function mn(a,b){if(null!=a.Wa)throw Error("WatchDog timer not null");a.Wa=ln(v(a.ke,a),b)}
function dn(a){a.Wa&&(m.clearTimeout(a.Wa),a.Wa=null)}
g.ke=function(){this.Wa=null;var a=w();0<=a-this.bc?(2!=this.Va&&this.f.ma(3),en(this),this.Ja=2,X(),hn(this)):mn(this,this.bc-a)};
function hn(a){a.f.tc()||a.Fa||a.f.sb(a)}
function en(a){dn(a);E(a.wb);a.wb=null;a.h.stop();a.o.removeAll();if(a.O){var b=a.O;a.O=null;nn(b);b.dispose()}a.oa&&(a.oa=null)}
function gn(a,b){try{a.f.Bc(a,b),a.f.ma(4)}catch(c){}}
;function on(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;pn(a,b,function(e){e?c(!0):m.setTimeout(function(){on(a,b,c,d,f)},f)})}}
function pn(a,b,c){var d=new Image;d.onload=function(){try{qn(d),c(!0)}catch(a){}};
d.onerror=function(){try{qn(d),c(!1)}catch(a){}};
d.onabort=function(){try{qn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{qn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function qn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function rn(a){this.f=a;this.h=new Hm(null,!0)}
g=rn.prototype;g.Qb=null;g.ca=null;g.xb=!1;g.Qc=null;g.nb=null;g.Vb=null;g.Rb=null;g.ea=null;g.ya=-1;g.bb=null;g.Xa=null;g.connect=function(a){this.Rb=a;a=sn(this.f,null,this.Rb);X();this.Qc=w();var b=this.f.F;null!=b?(this.bb=b[0],(this.Xa=b[1])?(this.ea=1,tn(this)):(this.ea=2,un(this))):(yg(a,"MODE","init"),this.ca=new Vm(this,0,void 0,void 0,void 0),this.ca.Ia=this.Qb,$m(this.ca,a,!1,null,!0),this.ea=0)};
function tn(a){var b=sn(a.f,a.Xa,"/mail/images/cleardot.gif");Ag(b);on(b.toString(),5E3,v(a.nd,a),3,2E3);a.ma(1)}
g.nd=function(a){if(a)this.ea=2,un(this);else{X();var b=this.f;b.ka=b.Ba.ya;vn(b,9)}a&&this.ma(2)};
function un(a){var b=a.f.J;if(null!=b)X(),b?(X(),wn(a.f,a,!1)):(X(),wn(a.f,a,!0));else if(a.ca=new Vm(a,0,void 0,void 0,void 0),a.ca.Ia=a.Qb,b=a.f,b=sn(b,b.ib()?a.bb:null,a.Rb),X(),!L||rd(10))yg(b,"TYPE","xmlhttp"),$m(a.ca,b,!1,a.bb,!1);else{yg(b,"TYPE","html");var c=a.ca;a=Boolean(a.bb);c.Va=3;c.Aa=Ag(b.clone());kn(c,a)}}
g.Lb=function(a){return this.f.Lb(a)};
g.tc=function(){return!1};
g.Bc=function(a,b){this.ya=a.cb;if(0==this.ea)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ka=this.ya;vn(c,2);return}this.bb=c[0];this.Xa=c[1]}else c=this.f,c.ka=this.ya,vn(c,2);else if(2==this.ea)if(this.xb)X(),this.Vb=w();else if("11111"==b){if(X(),this.xb=!0,this.nb=w(),c=this.nb-this.Qc,!L||rd(10)||500>c)this.ya=200,this.ca.cancel(),X(),wn(this.f,this,!0)}else X(),this.nb=this.Vb=w(),this.xb=!1};
g.sb=function(){this.ya=this.ca.cb;if(this.ca.na)0==this.ea?this.Xa?(this.ea=1,tn(this)):(this.ea=2,un(this)):2==this.ea&&(a=!1,(a=!L||rd(10)?this.xb:200>this.Vb-this.nb?!1:!0)?(X(),wn(this.f,this,!0)):(X(),wn(this.f,this,!1)));else{0==this.ea?X():2==this.ea&&X();var a=this.f;a.ka=this.ya;vn(a,2)}};
g.ib=function(){return this.f.ib()};
g.isActive=function(){return this.f.isActive()};
g.ma=function(a){this.f.ma(a)};function xn(a){Em.call(this);this.headers=new Tc;this.R=a||null;this.h=!1;this.P=this.f=null;this.sa=this.J="";this.l=0;this.A="";this.o=this.ha=this.F=this.Y=!1;this.B=0;this.K=null;this.ta="";this.N=this.ua=!1}
x(xn,Em);var yn=/^https?$/i,zn=["POST","PUT"];g=xn.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.A="";this.l=0;this.sa=b;this.Y=!1;this.h=!0;this.f=this.R?Um(this.R):Um(Sm);this.P=this.R?Qm(this.R):Qm(Sm);this.f.onreadystatechange=v(this.Ac,this);try{bm(An(this,"Opening Xhr")),this.ha=!0,this.f.open(b,String(a),!0),this.ha=!1}catch(f){bm(An(this,"Error opening Xhr: "+f.message));Bn(this,f);return}a=c||"";var e=this.headers.clone();
d&&ad(d,function(a,b){Uc(e,b,a)});
d=Pa(e.ra(),Cn);c=m.FormData&&a instanceof m.FormData;!A(zn,b)||d||c||Uc(e,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.ta&&(this.f.responseType=this.ta);lb(this.f)&&(this.f.withCredentials=this.ua);try{Dn(this),0<this.B&&(this.N=En(this.f),bm(An(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.N)),this.N?(this.f.timeout=this.B,this.f.ontimeout=v(this.sc,this)):this.K=Km(this.sc,this.B,this)),bm(An(this,"Sending request")),this.F=!0,this.f.send(a),this.F=!1}catch(f){bm(An(this,"Send error: "+f.message)),Bn(this,f)}};
function En(a){return L&&qd(9)&&ga(a.timeout)&&p(a.ontimeout)}
function Cn(a){return"content-type"==a.toLowerCase()}
g.sc=function(){"undefined"!=typeof aa&&this.f&&(this.A="Timed out after "+this.B+"ms, aborting",this.l=8,An(this,this.A),Fm(this,"timeout"),nn(this,8))};
function Bn(a,b){a.h=!1;a.f&&(a.o=!0,a.f.abort(),a.o=!1);a.A=b;a.l=5;Fn(a);Gn(a)}
function Fn(a){a.Y||(a.Y=!0,Fm(a,"complete"),Fm(a,"error"))}
function nn(a,b){a.f&&a.h&&(An(a,"Aborting"),a.h=!1,a.o=!0,a.f.abort(),a.o=!1,a.l=b||7,Fm(a,"complete"),Fm(a,"abort"),Gn(a))}
g.G=function(){this.f&&(this.h&&(this.h=!1,this.o=!0,this.f.abort(),this.o=!1),Gn(this,!0));xn.I.G.call(this)};
g.Ac=function(){this.isDisposed()||(this.ha||this.F||this.o?Hn(this):this.Xd())};
g.Xd=function(){Hn(this)};
function Hn(a){if(a.h&&"undefined"!=typeof aa)if(a.P[1]&&4==bn(a)&&2==a.getStatus())An(a,"Local request error detected and ignored");else if(a.F&&4==bn(a))Km(a.Ac,0,a);else if(Fm(a,"readystatechange"),4==bn(a)){An(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.J).match(Cd)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!yn.test(f?f.toLowerCase():"")}d=e}if(d)Fm(a,"complete"),Fm(a,"success");else{a.l=6;var k;try{k=2<bn(a)?a.f.statusText:""}catch(l){k=""}a.A=k+" ["+a.getStatus()+"]";Fn(a)}}finally{Gn(a)}}}
function Gn(a,b){if(a.f){Dn(a);var c=a.f,d=a.P[0]?t:null;a.f=null;a.P=null;b||Fm(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Dn(a){a.f&&a.N&&(a.f.ontimeout=null);ga(a.K)&&(m.clearTimeout(a.K),a.K=null)}
g.isActive=function(){return!!this.f};
function bn(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<bn(this)?this.f.status:-1}catch(a){return-1}};
function cn(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function An(a,b){return b+" ["+a.sa+" "+a.J+" "+a.getStatus()+"]"}
;function In(a,b,c){this.B=a||null;this.f=1;this.h=[];this.o=[];this.l=new Hm(null,!0);this.F=b||null;this.J=null!=c?c:null}
function Jn(a,b){this.f=a;this.map=b;this.context=null}
g=In.prototype;g.$a=null;g.W=null;g.L=null;g.Pb=null;g.ob=null;g.ic=null;g.pb=null;g.fb=0;g.Hd=0;g.T=null;g.Ca=null;g.xa=null;g.Ha=null;g.Ba=null;g.Bb=null;g.Ra=-1;g.uc=-1;g.ka=-1;g.ab=0;g.Pa=0;g.Ga=8;var Kn=new Em;function Ln(a){dm.call(this,"statevent",a)}
x(Ln,dm);function Mn(a,b){dm.call(this,"timingevent",a);this.size=b}
x(Mn,dm);function Nn(a){dm.call(this,"serverreachability",a)}
x(Nn,dm);g=In.prototype;g.connect=function(a,b,c,d,e){X();this.Pb=b;this.$a=c||{};d&&p(e)&&(this.$a.OSID=d,this.$a.OAID=e);this.Ba=new rn(this);this.Ba.Qb=null;this.Ba.h=this.l;this.Ba.connect(a)};
function On(a){Pn(a);if(3==a.f){var b=a.fb++,c=a.ob.clone();O(c,"SID",a.j);O(c,"RID",b);O(c,"TYPE","terminate");Qn(a,c);b=new Vm(a,0,a.j,b,void 0);b.Va=2;b.Aa=Ag(c.clone());(new Image).src=b.Aa;b.gb=w();an(b)}Rn(a)}
function Pn(a){if(a.Ba){var b=a.Ba;b.ca&&(b.ca.cancel(),b.ca=null);b.ya=-1;a.Ba=null}a.L&&(a.L.cancel(),a.L=null);a.xa&&(m.clearTimeout(a.xa),a.xa=null);Sn(a);a.W&&(a.W.cancel(),a.W=null);a.Ca&&(m.clearTimeout(a.Ca),a.Ca=null)}
function Tn(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new Jn(a.Hd++,b));2!=a.f&&3!=a.f||Un(a)}
g.tc=function(){return 0==this.f};
function Un(a){a.W||a.Ca||(a.Ca=ln(v(a.Fc,a),0),a.ab=0)}
g.Fc=function(a){this.Ca=null;Vn(this,a)};
function Vn(a,b){if(1==a.f){if(!b){a.fb=Math.floor(1E5*Math.random());var c=a.fb++,d=new Vm(a,0,"",c,void 0);d.Ia=null;var e=Wn(a),f=a.ob.clone();O(f,"RID",c);a.B&&O(f,"CVER",a.B);Qn(a,f);Ym(d,f,e);a.W=d;a.f=2}}else 3==a.f&&(b?Xn(a,b):0!=a.h.length&&(a.W||Xn(a)))}
function Xn(a,b){var c,d;b?6<a.Ga?(a.h=a.o.concat(a.h),a.o.length=0,c=a.fb-1,d=Wn(a)):(c=b.F,d=b.Ka):(c=a.fb++,d=Wn(a));var e=a.ob.clone();O(e,"SID",a.j);O(e,"RID",c);O(e,"AID",a.Ra);Qn(a,e);c=new Vm(a,0,a.j,c,a.ab+1);c.Ia=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.W=c;Ym(c,e,d)}
function Qn(a,b){if(a.T){var c=a.T.oc(a);c&&db(c,function(a,c){O(b,c,a)})}}
function Wn(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ga&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ga?e:f-d;try{ad(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.h.splice(0,b));
return c.join("&")}
function Yn(a){a.L||a.xa||(a.A=1,a.xa=ln(v(a.Ec,a),0),a.Pa=0)}
function Zn(a){if(a.L||a.xa||3<=a.Pa)return!1;a.A++;a.xa=ln(v(a.Ec,a),$n(a,a.Pa));a.Pa++;return!0}
g.Ec=function(){this.xa=null;this.L=new Vm(this,0,this.j,"rpc",this.A);this.L.Ia=null;this.L.Sb=0;var a=this.ic.clone();O(a,"RID","rpc");O(a,"SID",this.j);O(a,"CI",this.Bb?"0":"1");O(a,"AID",this.Ra);Qn(this,a);if(!L||rd(10))O(a,"TYPE","xmlhttp"),$m(this.L,a,!0,this.pb,!1);else{O(a,"TYPE","html");var b=this.L,c=Boolean(this.pb);b.Va=3;b.Aa=Ag(a.clone());kn(b,c)}};
function wn(a,b,c){a.Bb=c;a.ka=b.ya;a.qd(1,0);a.ob=sn(a,null,a.Pb);Un(a)}
g.Bc=function(a,b){if(0!=this.f&&(this.L==a||this.W==a))if(this.ka=a.cb,this.W==a&&3==this.f)if(7<this.Ga){var c;try{c=this.l.parse(b)}catch(f){c=null}if(ea(c)&&3==c.length)if(0==c[0])a:{if(!this.xa){if(this.L)if(this.L.gb+3E3<this.W.gb)Sn(this),this.L.cancel(),this.L=null;else break a;Zn(this);X()}}else this.uc=c[1],0<this.uc-this.Ra&&37500>c[2]&&this.Bb&&0==this.Pa&&!this.Ha&&(this.Ha=ln(v(this.Id,this),6E3));else vn(this,11)}else"y2f%"!=b&&vn(this,11);else if(this.L==a&&Sn(this),!/^[\s\xa0]*$/.test(b)){c=
this.l.parse(b);ea(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ra=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.pb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.f=3,this.T&&this.T.mc(this),this.ic=sn(this,this.ib()?this.pb:null,this.Pb),Yn(this)):"stop"==e[0]&&vn(this,7):3==this.f&&("stop"==e[0]?vn(this,7):"noop"!=e[0]&&this.T&&this.T.lc(this,e),this.Pa=0)}}};
g.Id=function(){null!=this.Ha&&(this.Ha=null,this.L.cancel(),this.L=null,Zn(this),X())};
function Sn(a){null!=a.Ha&&(m.clearTimeout(a.Ha),a.Ha=null)}
g.sb=function(a){var b;if(this.L==a)Sn(this),this.L=null,b=2;else if(this.W==a)this.W=null,b=1;else return;this.ka=a.cb;if(0!=this.f)if(a.na)1==b?(w(),Fm(Kn,new Mn(Kn,a.Ka?a.Ka.length:0)),Un(this),this.o.length=0):Yn(this);else{var c=a.Ja,d;if(!(d=3==c||7==c||0==c&&0<this.ka)){if(d=1==b)this.W||this.Ca||1==this.f||2<=this.ab?d=!1:(this.Ca=ln(v(this.Fc,this,a),$n(this,this.ab)),this.ab++,d=!0);d=!(d||2==b&&Zn(this))}if(d)switch(c){case 1:vn(this,5);break;case 4:vn(this,10);break;case 3:vn(this,6);
break;case 7:vn(this,12);break;default:vn(this,2)}}};
function $n(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.qd=function(a){if(!A(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function vn(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.Be,a);c||(c=new hg("//www.google.com/images/cleardot.gif"),Ag(c));pn(c.toString(),1E4,d)}else X();ao(a,b)}
g.Be=function(a){a?X():(X(),ao(this,8))};
function ao(a,b){a.f=0;a.T&&a.T.kc(a,b);Rn(a);Pn(a)}
function Rn(a){a.f=0;a.ka=-1;if(a.T)if(0==a.o.length&&0==a.h.length)a.T.Jb(a);else{var b=Xa(a.o),c=Xa(a.h);a.o.length=0;a.h.length=0;a.T.Jb(a,b,c)}}
function sn(a,b,c){var d=Bg(c);if(""!=d.h)b&&jg(d,b+"."+d.h),kg(d,d.B);else var e=window.location,d=Cg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.$a&&db(a.$a,function(a,b){O(d,b,a)});
O(d,"VER",a.Ga);Qn(a,d);return d}
g.Lb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new xn;a.ua=!1;return a};
g.isActive=function(){return!!this.T&&this.T.isActive(this)};
function ln(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ma=function(){Fm(Kn,new Nn(Kn))};
function X(){Fm(Kn,new Ln(Kn))}
g.ib=function(){return!(!L||rd(10))};
function bo(){}
g=bo.prototype;g.mc=function(){};
g.lc=function(){};
g.kc=function(){};
g.Jb=function(){};
g.oc=function(){return{}};
g.isActive=function(){return!0};function co(a,b){Im.call(this);this.A=0;if(ha(a))b&&(a=v(a,b));else if(a&&ha(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.F=a;tm(this,"tick",v(this.B,this));this.stop();Jm(this,5E3+2E4*Math.random())}
x(co,Im);co.prototype.B=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);Jm(this,a)}this.F()};
co.prototype.start=function(){co.I.start.call(this);this.A=w()+this.f};
co.prototype.stop=function(){this.A=0;co.I.stop.call(this)};function eo(a,b){this.K=a;this.o=b;this.j=new F;this.h=new co(this.Ie,this);this.f=null;this.ga=!1;this.A=null;this.J="";this.F=this.l=0;this.B=[]}
x(eo,bo);g=eo.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.qa=function(a){return this.j.qa(a)};
g.D=function(a,b){return this.j.D.apply(this.j,arguments)};
g.dispose=function(){this.ga||(this.ga=!0,this.j.clear(),fo(this),E(this.j))};
g.isDisposed=function(){return this.ga};
function go(a){return{firstTestResults:[""],secondTestResults:!a.f.Bb,sessionId:a.f.j,arrayId:a.f.Ra}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.J="";this.h.stop();this.A=a||null;this.l=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new In("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.o,e.j,e.Ra):c?this.f.connect(a,b,this.o,c.sessionId,c.arrayId):this.f.connect(a,b,this.o)}};
function fo(a,b){a.F=b||0;a.h.stop();a.f&&(3==a.f.f&&Vn(a.f),On(a.f));a.F=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&vb(c,b);this.h.enabled||2==(this.f?this.f.f:0)?this.B.push(c):this.f&&3==this.f.f&&Tn(this.f,c)};
g.mc=function(){var a=this.h;a.stop();Jm(a,5E3+2E4*Math.random());this.A=null;this.l=0;if(this.B.length){a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)Tn(this.f,a[b])}this.D("handlerOpened")};
g.kc=function(a,b){var c=2==b&&401==this.f.ka;if(4!=b&&!c){if(6==b||410==this.f.ka)c=this.h,c.stop(),Jm(c,500);this.h.start()}this.D("handlerError",b)};
g.Jb=function(a,b,c){if(!this.h.enabled)this.D("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.B.push(d)}};
g.oc=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.l&&(a.ui=""+this.l);0!=this.F&&(a.ui=""+this.F);this.A&&vb(a,this.A);return a};
g.lc=function(a,b){if("S"==b[0])this.J=b[1];else if("gracefulReconnect"==b[0]){var c=this.h;c.stop();Jm(c,500);this.h.start();On(this.f)}else this.D("handlerMessage",new am(b[0],b[1]))};
function ho(a,b){(a.o.loungeIdToken=b)||a.h.stop()}
g.Ie=function(){this.h.stop();var a=this.f,b=0;a.L&&b++;a.W&&b++;0!=b?this.h.start():this.connect(this.A,this.l)};function io(a){this.videoIds=null;this.index=-1;this.videoId=this.f="";this.volume=this.h=-1;this.l=!1;this.audioTrackId=null;this.A=this.o=0;this.j=null;this.reset(a)}
function jo(a,b){if(a.f)throw Error(b+" is not allowed in V3.");}
function ko(a){a.audioTrackId=null;a.j=null;a.h=-1;a.o=0;a.A=w()}
io.prototype.reset=function(a){this.videoIds=[];this.f="";this.index=-1;this.videoId="";ko(this);this.volume=-1;this.l=!1;a&&(this.videoIds=a.videoIds,this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.h=a.playerState,this.volume=a.volume,this.l=a.muted,this.audioTrackId=a.audioTrackId,this.j=a.trackData,this.o=a.playerTime,this.A=a.playerTimeAt)};
function lo(a){return a.f?a.videoId:a.videoIds[a.index]}
function mo(a){switch(a.h){case 1:return(w()-a.A)/1E3+a.o;case -1E3:return 0}return a.o}
io.prototype.setVideoId=function(a){jo(this,"setVideoId");var b=this.index;this.index=La(this.videoIds,a);b!=this.index&&ko(this);return-1!=b};
function no(a,b,c){jo(a,"setPlaylist");c=c||lo(a);ab(a.videoIds,b)&&c==lo(a)||(a.videoIds=Xa(b),a.setVideoId(c))}
io.prototype.remove=function(a){jo(this,"remove");var b=lo(this);return Ua(this.videoIds,a)?(this.index=La(this.videoIds,b),!0):!1};
function oo(a){var b={};b.videoIds=Xa(a.videoIds);b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.h;b.volume=a.volume;b.muted=a.l;b.audioTrackId=a.audioTrackId;b.trackData=tb(a.j);b.playerTime=a.o;b.playerTimeAt=a.A;return b}
io.prototype.clone=function(){return new io(oo(this))};function Y(a,b,c){V.call(this);this.A=NaN;this.R=!1;this.J=this.F=this.P=this.K=NaN;this.Y=[];this.j=this.C=this.f=null;this.Ma=a;this.Y.push(N(window,"beforeunload",v(this.Bd,this)));this.h=[];this.C=new io;3==c["mdx-version"]&&(this.C.f="RQ"+b.token);this.ha=b.id;this.f=po(this,c);this.f.subscribe("handlerOpened",this.Nd,this);this.f.subscribe("handlerClosed",this.Jd,this);this.f.subscribe("handlerError",this.Kd,this);this.C.f?this.f.subscribe("handlerMessage",this.Ld,this):this.f.subscribe("handlerMessage",
this.Md,this);ho(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.C.videoId;qk()&&T("yt-remote-session-video-id",a)},this)}
x(Y,V);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.C.f){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.C.f=c);this.C.videoId=d;this.C.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.C.videoIds=[d];this.C.index=0}this.C.state=3;c=this.C;c.o=f;c.A=w();this.H("Connecting with setPlaylist and params: "+M(h));this.f.connect({method:"setPlaylist",params:M(h)},
a,uk())}else this.H("Connecting without params"),this.f.connect({},a,uk());qo(this)};
g.dispose=function(){this.isDisposed()||(this.D("beforeDispose"),ro(this,3));Y.I.dispose.call(this)};
g.G=function(){so(this);to(this);uo(this);J(this.F);this.F=NaN;J(this.J);this.J=NaN;this.j=null;Qe(this.Y);this.Y.length=0;this.f.dispose();Y.I.G.call(this);this.h=this.C=this.f=null};
g.H=function(a){Dj("conn",a)};
g.Bd=function(){this.l(2)};
function po(a,b){return new eo(Rj(a.Ma,"/bc",void 0,!1),b)}
function ro(a,b){a.D("proxyStateChange",b)}
function qo(a){a.A=I(v(function(){this.H("Connecting timeout");this.l(1)},a),2E4)}
function so(a){J(a.A);a.A=NaN}
function uo(a){J(a.K);a.K=NaN}
function vo(a){to(a);a.P=I(v(function(){wo(this,"getNowPlaying")},a),2E4)}
function to(a){J(a.P);a.P=NaN}
function xo(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.A)}
g.Nd=function(){this.H("Channel opened");this.R&&(this.R=!1,uo(this),this.K=I(v(function(){this.H("Timing out waiting for a screen.");this.l(1)},this),15E3));
Dk(go(this.f),this.ha)};
g.Jd=function(){this.H("Channel closed");isNaN(this.A)?Ek(!0):Ek();this.dispose()};
g.Kd=function(a){Ek();isNaN(this.B())?(this.H("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,this.H("Channel error: "+a+" with reconnection in "+this.B()+" ms"),ro(this,2))};
function yo(a,b){b&&(so(a),uo(a));b==xo(a)?b&&(ro(a,1),wo(a,"getSubtitlesTrack")):b?(a.N()&&a.C.reset(),ro(a,1),wo(a,"getNowPlaying"),zo(a)):a.l(1)}
function Ao(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.C.videoId&&(pb(b.params)?a.C.j=null:a.C.j=b.params,a.D("remotePlayerChange"))}
function Bo(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.C.f=b.params.listId||a.C.f;var e=a.C,f=e.videoId;e.videoId=c;e.index=d;c!=f&&ko(e);a.D("remoteQueueChange")}
function Co(a,b){b.params=b.params||{};Bo(a,b);Do(a,b)}
function Do(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.C;d.o=isNaN(c)?0:c;d.A=w();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.C.h&&(c=-1E3);a.C.h=c;1==a.C.h?vo(a):to(a);a.D("remotePlayerChange")}
function Eo(a,b){var c="true"==b.params.muted;a.C.volume=parseInt(b.params.volume,10);a.C.l=c;a.D("remotePlayerChange")}
g.Ld=function(a){a.params?this.H("Received: action="+a.action+", params="+M(a.params)):this.H("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=ud(a.params.devices);this.h=z(a,function(a){return new lk(a)});
a=!!Pa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
yo(this,a);break;case "loungeScreenConnected":yo(this,!0);break;case "loungeScreenDisconnected":Va(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
yo(this,!1);break;case "remoteConnected":var b=new lk(ud(a.params.device));Pa(this.h,function(a){return a.equals(b)})||Ta(this.h,b);
break;case "remoteDisconnected":b=new lk(ud(a.params.device));Va(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Bo(this,a);break;case "nowPlaying":Co(this,a);break;case "onStateChange":Do(this,a);break;case "onVolumeChanged":Eo(this,a);break;case "onSubtitlesTrackChanged":Ao(this,a);break;default:this.H("Unrecognized action: "+a.action)}};
g.Md=function(a){a.params?this.H("Received: action="+a.action+", params="+M(a.params)):this.H("Received: action="+a.action);Fo(this,a);Go(this,a);if(xo(this)){var b=this.C.clone(),c=!1,d,e,f,h,k,l;a.params&&(d=a.params.videoId||a.params.video_id,e=a.params.videoIds||a.params.video_ids,f=a.params.state,h=a.params.currentTime||a.params.current_time,k=a.params.volume,l=a.params.muted,p(a.params.currentError)&&ud(a.params.currentError));if("onSubtitlesTrackChanged"==a.action)d==lo(this.C)&&(delete a.params.videoId,
pb(a.params)?this.C.j=null:this.C.j=a.params,this.D("remotePlayerChange"));else if(lo(this.C)||"onStateChange"!=a.action){"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||e?(d||"nowPlaying"!=a.action&&"nowPlayingPlaylist"!=a.action?d||(d=lo(this.C)):this.C.setVideoId(""),e&&(e=e.split(","),no(this.C,e,d))):no(this.C,[]);e=this.C;var n=d;jo(e,"add");n&&!A(e.videoIds,n)?(e.videoIds.push(n),e=!0):e=!1;e&&wo(this,"getPlaylist");d&&this.C.setVideoId(d);b.index==this.C.index&&ab(b.videoIds,
this.C.videoIds)?"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||this.D("remoteQueueChange"):this.D("remoteQueueChange");p(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:a,-1==a&&-1E3==this.C.h&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.C.h,this.C.h=a,1==this.C.h?vo(this):to(this));h&&(a=parseInt(h,10),c=this.C,c.o=isNaN(a)?0:a,c.A=w(),c=!0);p(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.C.volume!=a,this.C.volume=a),p(l)&&(l="true"==l,c=c||this.C.l!=l,this.C.l=l));c&&this.D("remotePlayerChange")}}};
function Fo(a,b){switch(b.action){case "loungeStatus":var c=ud(b.params.devices);a.h=z(c,function(a){return new lk(a)});
break;case "loungeScreenDisconnected":Va(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new lk(ud(b.params.device));Pa(a.h,function(a){return a.equals(d)})||Ta(a.h,d);
break;case "remoteDisconnected":d=new lk(ud(b.params.device)),Va(a.h,function(a){return a.equals(d)})}}
function Go(a,b){var c=!1;if("loungeStatus"==b.action)c=!!Pa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.action)c=!0;else if("loungeScreenDisconnected"==b.action)c=!1;else return;if(!isNaN(a.K))if(c)uo(a);else return;c==xo(a)?c&&ro(a,1):c?(so(a),a.N()&&a.C.reset(),ro(a,1),wo(a,"getNowPlaying"),zo(a)):a.l(1)}
g.re=function(){if(this.j){var a=this.j;this.j=null;this.C.videoId!=a&&wo(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.qa;Y.prototype.ta=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.B())?xo(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ta;Y.prototype.l=function(a){this.H("Disconnecting with "+a);so(this);this.D("beforeDisconnect",a);1==a&&Ek();fo(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.l;Y.prototype.sa=function(){var a=this.C;if(this.j){var b=a=this.C.clone(),c=this.j,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&ko(b)}return oo(a)};
Y.prototype.getPlayerContextData=Y.prototype.sa;Y.prototype.za=function(a){var b=new io(a);b.videoId&&b.videoId!=this.C.videoId&&(this.j=b.videoId,J(this.F),this.F=I(v(this.re,this),5E3));var c=[];this.C.f==b.f&&this.C.videoId==b.videoId&&this.C.index==b.index&&ab(this.C.videoIds,b.videoIds)||c.push("remoteQueueChange");this.C.h==b.h&&this.C.volume==b.volume&&this.C.l==b.l&&mo(this.C)==mo(b)&&M(this.C.j)==M(b.j)||c.push("remotePlayerChange");this.C.reset(a);y(c,function(a){this.D(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.za;Y.prototype.ia=function(){return this.f.o.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.ia;Y.prototype.N=function(){var a=this.f.o.id,b=Pa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.N;Y.prototype.B=function(){var a=this.f;return a.h.enabled?a.h.A-w():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.B;Y.prototype.Na=function(){if(!isNaN(this.B())){var a=this.f.h;a.enabled&&(a.stop(),a.start(),a.B())}};
Y.prototype.reconnect=Y.prototype.Na;function zo(a){J(a.J);a.J=I(v(a.l,a,1),864E5)}
function wo(a,b,c){c?a.H("Sending: action="+b+", params="+M(c)):a.H("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.ua=function(a,b){wo(this,a,b);zo(this)};
Y.prototype.sendMessage=Y.prototype.ua;function Ho(a){V.call(this);this.l=0;this.la=Io();this.Za=NaN;this.vb="";this.A=a;this.H("Initializing local screens: "+Oj(this.la));this.j=Jo();this.H("Initializing account screens: "+Oj(this.j));this.Kb=null;this.f=[];this.h=[];Ko(this,Wl()||[]);this.H("Initializing DIAL devices: "+Vj(this.h));a=Mj(Ak());Lo(this,a);this.H("Initializing online screens: "+Oj(this.f));this.l=w()+3E5;Mo(this)}
x(Ho,V);var No=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Ho.prototype;g.H=function(a){Dj("RM",a)};
g.M=function(a){Dj("RM",a)};
function Jo(){var a=Io(),b=Mj(Ak());return Ma(b,function(b){return!dk(a,b)})}
function Io(){var a=Mj(wk());return Ma(a,function(a){return!a.f})}
function Mo(a){vc("yt-remote-cast-device-list-update",function(){var a=Wl();Ko(this,a||[])},a);
vc("yt-remote-cast-device-status-update",a.Ee,a);a.Lc();var b=w()>a.l?2E4:1E4;mc(v(a.Lc,a),b)}
g.D=function(a,b){if(this.isDisposed())return!1;this.H("Firing "+a);return this.o.D.apply(this.o,arguments)};
g.Lc=function(){var a=Wl()||[];0==a.length||Ko(this,a);a=Oo(this);0==a.length||(Na(a,function(a){return!dk(this.j,a)},this)&&yk()?Po(this):Qo(this,a))};
function Ro(a,b){var c=Oo(a);return Ma(b,function(a){return a.f?(a=ck(this.h,a.f),!!a&&"RUNNING"==a.status):!!dk(c,a)},a)}
function Ko(a,b){var c=!1;y(b,function(a){var b=ek(this.la,a.id);b&&b.name!=a.name&&(this.H("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.H("Renaming due to DIAL."),So(a));Bk(Zj(b));var d=!ab(a.h,b,bk);d&&a.H("Updating DIAL devices: "+Vj(a.h)+" to "+Vj(b));a.h=b;Lo(a,a.f);d&&a.D("onlineReceiverChange")}
g.Ee=function(a){var b=ck(this.h,a.id);b&&(this.H("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Bk(Zj(this.h)));Lo(this,this.f)};
function Lo(a,b,c){var d=Ro(a,b),e=!ab(a.f,d,Jj);if(e||c)0==b.length||zk(z(d,Kj));e&&(a.H("Updating online screens: "+Oj(a.f)+" -> "+Oj(d)),a.f=d,a.D("onlineReceiverChange"))}
function Qo(a,b){var c=[],d={};y(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",S:{lounge_token:c.join(",")},context:a,aa:function(a,b){var c=[];y(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Kb?To(this,this.Kb):null;e&&!dk(c,e)&&c.push(e);Lo(this,c,!0)}};
Ud(Rj(a.A,"/pairing/get_screen_availability"),e)}
function Po(a){var b=Oo(a),c=z(b,function(a){return a.id});
0!=c.length&&(a.H("Updating lounge tokens for: "+M(c)),Ud(Rj(a.A,"/pairing/get_lounge_token_batch"),{S:{screen_ids:c.join(",")},method:"POST",context:a,aa:function(a,c){Uo(this,c.screens||[]);this.la=Ma(this.la,function(a){return!!a.token});
So(this);Qo(this,b)}}))}
function Uo(a,b){y(Wa(a.la,a.j),function(a){var d=Pa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function So(a){var b=Io();ab(a.la,b,Jj)||(a.H("Saving local screens: "+Oj(b)+" to "+Oj(a.la)),vk(z(a.la,Kj)),Lo(a,a.f,!0),Ko(a,Wl()||[]),a.D("managedScreenChange",Oo(a)))}
function Vo(a,b,c){var d=Qa(b,function(a){return Ij(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;dk(a.f,c)||a.f.push(c);return e}
g.qc=function(a,b){for(var c=Oo(this),c=z(c,function(a){return a.name}),d=a,e=2;A(c,d);)d=b.call(m,e),e++;
return d};
g.Hc=function(a,b,c){var d=!1;b>=No.length&&(this.H("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=ck(this.h,a);if(!e)this.H("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.H("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(Wo(this),this.D("screenPair",null)):Ud(Rj(this.A,"/pairing/get_screen"),{method:"POST",S:{pairing_code:c},context:this,aa:function(a,b){if(c==this.vb){Wo(this);var d=
new Gj(b.screen);d.name=e.name;d.f=e.id;this.H("Pairing "+c+" succeeded.");var l=Vo(this,this.la,d);this.H("Paired with "+(l?"a new":"an old")+" local screen:"+Nj(d));So(this);this.D("screenPair",d)}},
onError:function(){c==this.vb&&(this.H("Polling pairing code: "+c),J(this.Za),this.Za=I(v(this.Hc,this,a,b+1,c),No[b]))}})};
function Xo(a,b,c){var d=Z,e="";Wo(d);if(ck(d.h,a)){if(!e){var f=e=Wj();Pl();var h=Yl(a),k=Ml();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",Ul(h),K("yt-remote-cast-device-status-update",h));
Kl("Sending a cast launch request with params: "+l.parameters);k.launch(l,pa(Zl,a))}else Kl("No cast API or no cast device. Dropping cast launch.")}d.vb=e;d.Za=I(v(d.Hc,d,a,0,e),No[0])}else d.H("No DIAL device with id: "+a)}
function Wo(a){J(a.Za);a.Za=NaN;a.vb=""}
function To(a,b){var c=ek(Oo(a),b);a.H("Found screen: "+Nj(c)+" with key: "+b);return c}
function Yo(a){var b=Z,c=ek(b.f,a);b.H("Found online screen: "+Nj(c)+" with key: "+a);return c}
function Zo(a){var b=Z,c=ck(b.h,a);if(!c){var d=ek(b.la,a);d&&(c=ck(b.h,d.f))}b.H("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function Oo(a){return Wa(a.j,Ma(a.la,function(a){return!dk(this.j,a)},a))}
;function $o(a){fk.call(this,"ScreenServiceProxy");this.V=a;this.f=[];this.f.push(this.V.$_s("screenChange",v(this.Me,this)));this.f.push(this.V.$_s("onlineScreenChange",v(this.Td,this)))}
x($o,fk);g=$o.prototype;g.Z=function(a){return this.V.$_gs(a)};
g.contains=function(a){return!!this.V.$_c(a)};
g.get=function(a){return this.V.$_g(a)};
g.start=function(){this.V.$_st()};
g.Db=function(a,b,c){this.V.$_a(a,b,c)};
g.remove=function(a,b,c){this.V.$_r(a,b,c)};
g.Ab=function(a,b,c,d){this.V.$_un(a,b,c,d)};
g.G=function(){for(var a=0,b=this.f.length;a<b;++a)this.V.$_ubk(this.f[a]);this.f.length=0;this.V=null;$o.I.G.call(this)};
g.Me=function(){this.D("screenChange")};
g.Td=function(){this.D("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ne;W.prototype.$_gsppc=W.prototype.Uc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.Db;W.prototype.$_un=W.prototype.Ab;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.Z;W.prototype.$_gos=W.prototype.Tc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.qa;function ap(){var a=!!H("MDX_ENABLE_CASTV2"),b=!!H("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?q("yt.mdx.remote.castv2_",!0,void 0):Pl();Wi&&Vi();nk();bp||(bp=new Qj,Fk()&&(bp.f="/api/loungedev"));Z||a||(Z=new Ho(bp),Z.subscribe("screenPair",cp),Z.subscribe("managedScreenChange",dp),Z.subscribe("onlineReceiverChange",function(){K("yt-remote-receiver-availability-change")}));
ep||(ep=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",ep,void 0));fp(b);b=gp();if(a&&!b){var d=new W(bp);q("yt.mdx.remote.screenService_",d,void 0);b=gp();ol(d,function(a){a?hp()&&Hl(hp(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){K("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",!0,void 0);
ip("Initializing: "+M(c));kp.push(vc("yt-remote-cast2-availability-change",function(){K("yt-remote-receiver-availability-change")}));
kp.push(vc("yt-remote-cast2-receiver-selected",function(){lp(null);K("yt-remote-auto-connect","cast-selector-receiver")}));
kp.push(vc("yt-remote-cast2-session-change",mp));kp.push(vc("yt-remote-connection-change",function(a){a?Hl(hp(),"YouTube TV"):np()||(Hl(null,null),Dl())}));
var e=op();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;ip(" -- with channel params: "+M(e));pp(e);a&&b.start();hp()||qp()}}
function rp(){xc(kp);kp.length=0;E(sp);sp=null;ep&&(y(ep,function(a){a(null)}),ep.length=0,ep=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(E(Z),Z=null);bp=null;Tl()}
function tp(){if(up()&&Bl()){var a=[];if(U("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||vp())a.push({key:"cast-selector-receiver",name:wp()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:xp()}
function xp(){var a=[],a=yp()?gp().V.$_gos():Mj(Ak()),b=zp();b&&vp()&&(dk(a,b)||a.push(b));yp()||(b=ak(Ck()),b=Ma(b,function(b){return!ek(a,b.id)}),a=Wa(a,b));
return Yj(a)}
function Ap(){if(up()&&Bl()){var a=Cl();return a?{key:"cast-selector-receiver",name:a}:null}return Bp()}
function Bp(){var a=xp(),b=Cp(),c=zp();c||(c=np());return Pa(a,function(a){return c&&Hj(c,a.key)||b&&(a=Zo(a.key))&&a.id==b?!0:!1})}
function wp(){if(up()&&Bl())return Cl();var a=zp();return a?a.name:null}
function zp(){var a=hp();if(!a)return null;if(!Z){var b=gp().Z();return ek(b,a)}return To(Z,a)}
function mp(a){ip("remote.onCastSessionChange_: "+Nj(a));if(a){var b=zp();b&&b.id==a.id?Hl(b.id,"YouTube TV"):(b&&Dp(),Ep(a,1))}else Dp()}
function Fp(a,b){ip("Connecting to: "+M(a));if("cast-selector-receiver"==a.key)lp(b||null),Gl(b||null);else{Dp();lp(b||null);var c=null;Z?c=Yo(a.key):(c=gp().Z(),c=ek(c,a.key));if(c)Ep(c,1);else{if(Z&&(c=Zo(a.key))){Gp(c);return}I(function(){Hp(null)},0)}}}
function Dp(){Z&&Wo(Z);a:{var a=vp();if(a&&(a=a.getOtherConnectedRemoteId())){ip("Do not stop DIAL due to "+a);Ip("");break a}(a=Cp())?(ip("Stopping DIAL: "+a),$l(a),Ip("")):(a=zp())&&a.f&&(ip("Stopping DIAL: "+a.f),$l(a.f))}Fl()?xl().stopSession():ul("stopSession called before API ready.");(a=vp())?a.disconnect(1):(yc("yt-remote-before-disconnect",1),yc("yt-remote-connection-change",!1));Hp(null)}
function ip(a){Dj("remote",a)}
function up(){return!!r("yt.mdx.remote.castv2_")}
function yp(){return r("yt.mdx.remote.screenService_")}
function gp(){if(!sp){var a=yp();sp=a?new $o(a):null}return sp}
function hp(){return r("yt.mdx.remote.currentScreenId_")}
function Jp(a){q("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.l=w()+3E5;if((b.Kb=a)&&(a=To(b,a))&&!dk(b.f,a)){var c=Xa(b.f);c.push(a);Lo(b,c,!0)}}}
function Cp(){return r("yt.mdx.remote.currentDialId_")}
function Ip(a){q("yt.mdx.remote.currentDialId_",a,void 0)}
function Kp(){return r("yt.mdx.remote.connectData_")}
function lp(a){q("yt.mdx.remote.connectData_",a,void 0)}
function vp(){return r("yt.mdx.remote.connection_")}
function Hp(a){var b=vp();lp(null);a?Ka(!vp()):(Jp(""),Ip(""));q("yt.mdx.remote.connection_",a,void 0);ep&&(y(ep,function(b){b(a)}),ep.length=0);
b&&!a?yc("yt-remote-connection-change",!1):!b&&a&&K("yt-remote-connection-change",!0)}
function np(){var a=qk();if(!a)return null;if(yp()){var b=gp().Z();return ek(b,a)}return Z?To(Z,a):null}
function Ep(a,b){Ka(!hp());Jp(a.id);var c=new Y(bp,a,op());c.connect(b,Kp());c.subscribe("beforeDisconnect",function(a){yc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){vp()&&(vp(),Hp(null))});
Hp(c)}
function Gp(a){Cp();ip("Connecting to: "+(a?a.toString():"null"));Ip(a.id);var b=Kp();b?Xo(a.id,b.videoIds[b.index],b.currentTime):Xo(a.id)}
function qp(){var a=np();a?(ip("Resume connection to: "+Nj(a)),Ep(a,0)):(Ek(),Dl(),ip("Skipping connecting because no session screen found."))}
function cp(a){ip("Paired with: "+Nj(a));a?Ep(a,1):Hp(null)}
function dp(){var a=hp();a&&!zp()&&(ip("Dropping current screen with id: "+a),Dp());np()||Ek()}
var bp=null,ep=null,sp=null,Z=null;function fp(a){var b=op();if(pb(b)){var b=pk(),c=U("yt-remote-session-name")||"",d=U("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);q("yt.mdx.remote.channelParams_",b,void 0)}}
function op(){return r("yt.mdx.remote.channelParams_")||{}}
function pp(a){a?(T("yt-remote-session-app",a.app),T("yt-remote-session-name",a.name)):(Yi("yt-remote-session-app"),Yi("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var kp=[];var Lp=null,Mp=[];function Np(){Op();if(Ap()){var a=Lp;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Pp(a){"cast-selector-receiver"==a?El():Qp(a)}
function Qp(a){var b=tp();if(a=Xj(b,a)){var c=Lp,d=c.getVideoData().video_id,e=c.getVideoData().list,f=c.getCurrentTime();Fp(a,{videoIds:[d],listId:e,videoId:d,index:0,currentTime:f});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function Op(){var a=Lp;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(tp(),Ap())}
;var Rp=null,Sp=[];function Tp(a){return{externalChannelId:a.externalChannelId,Gd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Up(a){Vp(Tp(a))}
function Vp(a){ii()?(R(Wh,new Qh(a.externalChannelId,a.Gd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Jd({event:"subscribe",source:a.source}))&&Lg(a)):Wp(a)}
function Wp(a){hi(function(b){b.subscription_ajax&&Vp(a)},null)}
function Xp(a){a=Tp(a);R(ai,new Sh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Jd({event:"unsubscribe",source:a.source}))&&Lg(a)}
function Yp(a){Rp&&Rp.channelSubscribed(a.f,a.subscriptionId)}
function Zp(a){Rp&&Rp.channelUnsubscribed(a.f)}
;function $p(a){D.call(this);this.h=a;this.h.subscribe("command",this.Kc,this);this.j={};this.o=!1}
x($p,D);g=$p.prototype;g.start=function(){this.o||this.isDisposed()||(this.o=!0,aq(this.h,"RECEIVING"))};
g.Kc=function(a,b){if(this.o&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.j))){var d=v(this.te,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&bq(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=cq(a,b||{}),c=this.f[a].apply(this.f,c),(c=dq(a,c))&&this.o&&!this.isDisposed()&&aq(this.h,a,c))}}};
g.te=function(a,b){this.o&&!this.isDisposed()&&aq(this.h,a,this.Mb(a,b))};
g.Mb=function(a,b){if(null!=b)return{value:b}};
function bq(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
g.G=function(){this.h.unsubscribe("command",this.Kc,this);this.h=null;for(var a in this.j)bq(this,a);$p.I.G.call(this)};function eq(a,b){$p.call(this,b);this.f=a;this.start()}
x(eq,$p);eq.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
eq.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function cq(a,b){switch(a){case "loadVideoById":return b=cj(b),ej(b),[b];case "cueVideoById":return b=cj(b),ej(b),[b];case "loadVideoByPlayerVars":return ej(b),[b];case "cueVideoByPlayerVars":return ej(b),[b];case "loadPlaylist":return b=dj(b),ej(b),[b];case "cuePlaylist":return b=dj(b),ej(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function dq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
eq.prototype.Mb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return eq.I.Mb.call(this,a,b)};
eq.prototype.G=function(){eq.I.G.call(this);delete this.f};function fq(){var a=this.h=new Gi,b=v(this.pe,this);a.h=b;a.j=null;this.o=[];this.B=!1;this.l=(a=H("POST_MESSAGE_ORIGIN",void 0))&&Gg(a)?a:null;this.A={}}
g=fq.prototype;g.pe=function(a,b){if(this.l&&this.l!=this.h.origin)this.dispose();else if("addEventListener"==a&&b){var c=b[0];this.A[c]||"onReady"==c||(this.addEventListener(c,gq(this,c)),this.A[c]=!0)}else this.Xc(a,b)};
g.Xc=function(){};
function gq(a,b){return v(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.ud=function(){this.B=!0;this.sendMessage("initialDelivery",this.Nb());this.sendMessage("onReady");y(this.o,this.Yc,this);this.o=[]};
g.Nb=function(){return null};
function hq(a,b){a.sendMessage("infoDelivery",b)}
g.Yc=function(a){this.B?this.h.sendMessage(a):this.o.push(a)};
g.sendMessage=function(a,b){this.Yc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function iq(a){fq.call(this);this.f=a;this.j=[];this.addEventListener("onReady",v(this.Yd,this));this.addEventListener("onVideoProgress",v(this.xe,this));this.addEventListener("onVolumeChange",v(this.ye,this));this.addEventListener("onApiChange",v(this.se,this));this.addEventListener("onPlaybackQualityChange",v(this.ue,this));this.addEventListener("onPlaybackRateChange",v(this.ve,this));this.addEventListener("onStateChange",v(this.we,this))}
x(iq,fq);g=iq.prototype;g.Xc=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&aj(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=cj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=bj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=dj.apply(window,c)}c=d}ej(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);aj(a)&&hq(this,this.Nb())}};
g.Yd=function(){var a=v(this.ud,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({rd:a,listener:b});this.f.addEventListener(a,b)};
g.Nb=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ua(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.we=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());hq(this,a)};
g.ue=function(a){hq(this,{playbackQuality:a})};
g.ve=function(a){hq(this,{playbackRate:a})};
g.se=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.f.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.ye=function(){hq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.xe=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());hq(this,a)};
g.dispose=function(){iq.I.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.rd,b.listener)}this.j=[]};function jq(a,b,c){V.call(this);this.f=a;this.h=b;this.j=c}
x(jq,V);function aq(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(M(b),d.j))}}
jq.prototype.G=function(){this.h=this.f=null;jq.I.G.call(this)};function kq(a,b,c){D.call(this);this.f=a;this.j=c;this.o=N(window,"message",v(this.l,this));this.h=new jq(this,a,b);ec(this,pa(E,this.h))}
x(kq,D);kq.prototype.l=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,u(c))){try{c=ud(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.D("command",b,c))}};
kq.prototype.G=function(){Qe(this.o);this.f=null;kq.I.G.call(this)};var lq=!1;function mq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(lq=!0,a.description)){mq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){lq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],lq=!!a&&a.enabledPlugin)){mq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");lq=!0;mq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");lq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),lq=!0,mq(b.GetVariable("$version"))}catch(c){}})();function nq(a){return(a=a.exec(wb))?a[1]:""}
(function(){if(uf)return nq(/Firefox\/([0-9.]+)/);if(L||hd||gd)return od;if(yf)return nq(/Chrome\/([0-9.]+)/);if(zf&&!(fd()||B("iPad")||B("iPod")))return nq(/Version\/([0-9.]+)/);if(vf||wf){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(wb))return a[1]+"."+a[2]}else if(xf)return(a=nq(/Android\s+([0-9.]+)/))?a:nq(/Version\/([0-9.]+)/);return""})();function oq(a){if(a=a.responseText)pq=(a=a.match(/{"id": "(.*)"}/))&&a[1]?a[1]:"",q("yt.www.ads.data.encryptedBiscottiId",pq,void 0)}
var pq="";function qq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Lg(c)}}
;function rq(a){P.call(this,1,arguments);this.Ib=a}
x(rq,P);function sq(a,b){P.call(this,2,arguments);this.h=a;this.f=b}
x(sq,P);function tq(a,b,c,d){P.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
x(tq,P);function uq(a,b){P.call(this,1,arguments);this.h=a;this.f=b||null}
x(uq,P);function vq(a){P.call(this,1,arguments)}
x(vq,P);var wq=new Q("ypc-core-load",rq),xq=new Q("ypc-guide-sync-success",sq),yq=new Q("ypc-purchase-success",tq),zq=new Q("ypc-subscription-cancel",vq),Aq=new Q("ypc-subscription-cancel-success",uq),Bq=new Q("ypc-init-subscription",vq);var Cq=!1,Dq=[],Eq=[];function Fq(a){a.f?Cq?R($h,a):R(wq,new rq(function(){R(Bq,new vq(a.f))})):Gq(a.h,a.o,a.j,a.source)}
function Hq(a){a.f?Cq?R(ei,a):R(wq,new rq(function(){R(zq,new vq(a.f))})):Iq(a.h,a.subscriptionId,a.o,a.j,a.source)}
function Jq(a){Kq(Xa(a.f))}
function Lq(a){Mq(Xa(a.f))}
function Nq(a){Oq(a.f,a.isEnabled,null)}
function Pq(a,b,c,d){Oq(a,b,c,d)}
function Qq(a){var b=a.h,c=a.f.subscriptionId;b&&c&&R(Zh,new Rh(b,c,a.f.channelInfo))}
function Rq(a){var b=a.f;db(a.h,function(a,d){R(Zh,new Rh(d,a,b[d]))})}
function Sq(a){R(di,new Oh(a.h.itemId));a.f&&a.f.length&&(Tq(a.f,di),Tq(a.f,fi))}
function Gq(a,b,c,d){var e=new Oh(a);R(Xh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=H("PLAYBACK_ID"))&&(c.plid=d);(d=H("EVENT_ID"))&&(c.ei=d);b&&Uq(b,c);Ud("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ac:f,S:c,aa:function(b,c){var d=c.response;R(Zh,new Rh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&K("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&qq(d.actions)},
Xb:function(){R(Yh,e)}})}
function Iq(a,b,c,d,e){var f=new Oh(a);R(bi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=H("PLAYBACK_ID"))&&(d.plid=a);(a=H("EVENT_ID"))&&(d.ei=a);c&&Uq(c,d);Ud("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ac:h,S:d,aa:function(a,b){var c=b.response;R(di,f);c.actions&&qq(c.actions)},
Xb:function(){R(ci,f)}})}
function Oq(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Ud("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",S:e,onError:function(){d&&d()}})}}
function Kq(a){if(a.length){var b=Za(a,0,40);R("subscription-batch-subscribe-loading");Tq(b,Xh);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");Tq(b,Yh)};
Ud("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",S:c,aa:function(c,f){d();var h=f.response,k=h.id;if(ea(k)&&k.length==b.length){var l=h.channel_info_map;y(k,function(a,c){var d=b[c];R(Zh,new Rh(d,a,l[d]))});
a.length?Kq(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function Mq(a){if(a.length){var b=Za(a,0,40);R("subscription-batch-unsubscribe-loading");Tq(b,bi);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");Tq(b,ci)};
Ud("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",S:c,aa:function(){d();Tq(b,di);a.length&&Mq(a)},
onError:function(){d()}})}}
function Tq(a,b){y(a,function(a){R(b,new Oh(a))})}
function Uq(a,b){var c=Md(a),d;for(d in c)b[d]=c[d]}
;var Vq,Wq=null,Xq=null,Yq=null,Zq=!1;
function $q(){var a=H("PLAYER_CONFIG",void 0),b=H("REVERSE_MOBIUS_PERCENT",void 0);if(bg&&100*Math.random()<b)try{Ud("//googleads.g.doubleclick.net/pagead/id",{format:"RAW",method:"GET",aa:oq,withCredentials:!0})}catch(e){}if(H("REQUEST_POST_MESSAGE_ORIGIN")){if(!Vq){Vq=new Gi;Vq.f=$q;return}Vq.origin&&"*"!=Vq.origin&&(a.args.post_message_origin=Vq.origin)}var c=document.referrer,b=H("POST_MESSAGE_ORIGIN"),d=!1;u(c)&&u(b)&&-1<c.indexOf(b)&&Gg(b)&&Gg(c)&&(d=!0);window!=window.top&&c&&c!=document.URL&&
(a.args.loaderUrl=c);H("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ej(a.args);Wq=Bh("player",a);c=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?Yq=new iq(Wq):H("ENABLE_POST_API")&&u(c)&&u(b)&&(Xq=new kq(window.parent,c,b),Yq=new eq(Wq,Xq.h));(Zq=d&&!H("ENABLE_CAST_API"))?a.args.disableCast="1":(a=Wq,ap(),Lp=a,Lp.addEventListener("onReady",Np),Lp.addEventListener("onRemoteReceiverSelected",Pp),Mp.push(vc("yt-remote-receiver-availability-change",Op)),Mp.push(vc("yt-remote-auto-connect",
Qp)));H("BG_P")&&(H("BG_I")||H("BG_IU"))&&Kc();ee();Rp=Wq;Rp.addEventListener("SUBSCRIBE",Up);Rp.addEventListener("UNSUBSCRIBE",Xp);Sp.push(Tg(Zh,Yp),Tg(di,Zp))}
;q("yt.setConfig",jc,void 0);q("yt.setMsg",function(a){kc(ic,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d){if(a&&window&&window.yterr&&!(5<=$d)){var e=a.stacktrace,f=a.columnNumber;var h=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var k,l,n=!1;try{k=a.lineNumber||a.line||"Not available"}catch(G){k="Not available",n=!0}try{l=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||h}catch(G){l="Not available",n=!0}a=!n&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?
a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;d=d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);k=a.lineNumber.toString();isNaN(k)||isNaN(f)||(k=k+":"+f);Zd[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")||(b={ac:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b||"ERROR"},S:{url:H("PAGE_NAME",window.location.href),file:a.fileName,"client.name":c||"WEB"},
method:"POST"},e&&(b.S.stack=e),d&&(b.S["client.version"]=d),Ud("/error_204",b),Zd[a.message]=!0,$d++)}},void 0);
q("writeEmbed",$q,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a=a+"mac_204?action_fcts=1")&&Lg(a);return!0},void 0);
var ar=lc(function(){Zg("ol");Cq=!0;Eq.push(Tg(Wh,Fq),Tg(ai,Hq));Cq||(Eq.push(Tg($h,Fq),Tg(ei,Hq),Tg(Th,Jq),Tg(Uh,Lq),Tg(Vh,Nq)),Dq.push(vc("subscription-prefs",Pq)),Eq.push(Tg(yq,Qq),Tg(Aq,Sq),Tg(xq,Rq)));Af.getInstance();var a=1<window.devicePixelRatio;if(Ff(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=Ef(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Bf[b]:(a=c.toString(16),Bf[b]=a.toString());var d,b=[];for(d in Bf)b.push(d+"="+escape(Bf[d]));d=b.join("&");$e("PREF",d,63072E3)}}),br=lc(function(){var a=
Wq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();H("PL_ATT")&&(Jc=null);for(var a=0,b=ce.length;a<b;a++){var c=ce[a],d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}ce.length=0;a=Fc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Ac(a),b.parentNode.removeChild(b);de=!1;jc("DCLKSTAT",0);xc(Dq);Dq.length=0;Ug(Eq);Eq.length=0;Cq=!1;Rp&&(Rp.removeEventListener("SUBSCRIBE",Vp),Rp.removeEventListener("UNSUBSCRIBE",Xp));Rp=null;Ug(Sp);Sp.length=0;Zq||(xc(Mp),Mp.length=
0,Lp&&(Lp.removeEventListener("onRemoteReceiverSelected",Pp),Lp.removeEventListener("onReady",Np),Lp=null),rp());fc(Yq,Xq);Wq&&Wq.destroy()});
window.addEventListener?(window.addEventListener("load",ar),window.addEventListener("unload",br)):window.attachEvent&&(window.attachEvent("onload",ar),window.attachEvent("onunload",br));var cr=Ai.getInstance(),dr=oi(cr);dr in Fi||(cr.register(),cr.Jc.push(vc("yt-uix-init-"+dr,cr.init,cr)),cr.Jc.push(vc("yt-uix-dispose-"+dr,cr.dispose,cr)),Fi[dr]=cr);})();
