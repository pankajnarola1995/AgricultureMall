(function(){var g,k=this;function l(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function p(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function q(a){return"string"==typeof a}
function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var r="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return t.apply(null,arguments)}
function u(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.base=function(a,c,f){for(var h=Array(arguments.length-2),m=2;m<arguments.length;m++)h[m-2]=arguments[m];return b.prototype[c].apply(a,h)}}
;var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function w(a,b){return a<b?-1:a>b?1:0}
;var ga=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ha(a,b){var c;a:{c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function ia(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function y(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function ka(a){var b=z,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;var A;a:{var la=k.navigator;if(la){var ma=la.userAgent;if(ma){A=ma;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;var na=B("Opera")||B("OPR"),C=B("Trident")||B("MSIE"),oa=B("Edge"),D=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),pa=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge");function qa(){var a=A;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(oa)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pa)return/WebKit\/(\S+)/.exec(a)}
function ra(){var a=k.document;return a?a.documentMode:void 0}
var sa=function(){if(na&&k.opera){var a;var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=qa())&&(a=b?b[1]:"");return C&&(b=ra(),b>parseFloat(a))?String(b):a}(),ta={};
function ua(a){if(!ta[a]){for(var b=0,c=fa(String(sa)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"",eb=RegExp("(\\d*)(\\D*)","g"),fb=RegExp("(\\d*)(\\D*)","g");do{var I=eb.exec(h)||["","",""],J=fb.exec(m)||["","",""];if(0==I[0].length&&0==J[0].length)break;b=w(0==I[1].length?0:parseInt(I[1],10),0==J[1].length?0:parseInt(J[1],10))||w(0==I[2].length,0==J[2].length)||w(I[2],J[2])}while(0==b)}ta[a]=0<=b}}
var va=k.document,wa=va&&C?ra()||("CSS1Compat"==va.compatMode?parseInt(sa,10):5):void 0;var E;if(!(E=!D&&!C)){var F;if(F=C)F=9<=Number(wa);E=F}E||D&&ua("1.9.1");C&&ua("9");function xa(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className,m;if(m="function"==typeof h.split)m=0<=ga(h.split(/\s+/),a);m&&(e[d++]=b)}e.length=d;return e}return f}
function ya(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var za=k.JSON.parse,Aa=k.JSON.stringify;function Ba(a){k.setTimeout(function(){throw a;},0)}
var Ca;
function Da(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.O;c.O=null;a()}};
return function(a){d.next={O:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function Ea(a,b,c){this.l=c;this.j=a;this.m=b;this.h=0;this.f=null}
Ea.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
Ea.prototype.put=function(a){this.m(a);this.h<this.l&&(this.h++,a.next=this.f,this.f=a)};function Fa(){this.h=this.f=null}
var Ha=new Ea(function(){return new Ga},function(a){a.reset()},100);
Fa.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Ga(){this.next=this.scope=this.f=null}
Ga.prototype.reset=function(){this.next=this.scope=this.f=null};function Ia(a){G||Ja();Ka||(G(),Ka=!0);var b=La,c=Ha.get();c.f=a;c.scope=void 0;c.next=null;b.h?b.h.next=c:b.f=c;b.h=c}
var G;function Ja(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);G=function(){a.then(Ma)}}else G=function(){var a=Ma;
"function"!=n(k.setImmediate)||k.Window&&k.Window.prototype&&!B("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Ca||(Ca=Da()),Ca(a)):k.setImmediate(a)}}
var Ka=!1,La=new Fa;function Ma(){for(var a=null;a=La.remove();){try{a.f.call(a.scope)}catch(b){Ba(b)}Ha.put(a)}Ka=!1}
;function H(){this.j=this.j;this.l=this.l}
H.prototype.j=!1;H.prototype.isDisposed=function(){return this.j};
H.prototype.dispose=function(){this.j||(this.j=!0,this.J())};
H.prototype.J=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function K(a){H.call(this);this.C=1;this.m=[];this.v=0;this.f=[];this.h={};this.D=Boolean(a)}
v(K,H);g=K.prototype;g.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.C;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.C=e+3;d.push(e);return e};
function Na(a,b,c){var d=L;if(a=d.h[a]){var e=d.f;(a=ha(a,function(a){return e[a+1]==b&&e[a+2]==c}))&&d.N(a)}}
g.N=function(a){var b=this.f[a];if(b){var c=this.h[b];if(0!=this.v)this.m.push(a),this.f[a+1]=aa;else{if(c){var d=ga(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
g.R=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var h=c[e];Oa(this.f[h+1],this.f[h+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.v--,0<this.m.length&&0==this.v)for(;c=this.m.pop();)this.N(c)}}return 0!=e}return!1};
function Oa(a,b,c){Ia(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.h[a];b&&(x(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
g.J=function(){K.M.J.call(this);this.clear();this.m.length=0};var Pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Qa(a,b,c){if("array"==n(b))for(var d=0;d<b.length;d++)Qa(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ra(a){var b=[],c;for(c in a)Qa(c,a[c],b);b[0]="";return b.join("")}
var Sa=/#|$/;var Ta=l("yt.dom.getNextId_");if(!Ta){Ta=function(){return++Ua};
u("yt.dom.getNextId_",Ta);var Ua=0};var M=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",M);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Va=window.yt&&window.yt.msgs_||l("window.ytcfg.msgs")||{};u("yt.msgs_",Va);function Wa(a){var b=arguments;if(1<b.length){var c=b[0];M[c]=b[1]}else for(c in b=b[0],b)M[c]=b[c]}
function Xa(a){"function"==n(a)&&(a=Ya(a));return window.setInterval(a,250)}
function Ya(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Za(b),b;}}:a}
function Za(a,b){var c=l("yt.logging.errors.log");c?c(a,b):(c=[],c="ERRORS"in M?M.ERRORS:c,c.push([a,b]),Wa("ERRORS",c))}
;function $a(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;if(a=a||window.event){this.event=a;for(var b in a)b in ab||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);
this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
var ab={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var z=l("yt.events.listeners_")||{};u("yt.events.listeners_",z);var bb=l("yt.events.counter_")||{count:0};u("yt.events.counter_",bb);function cb(a,b,c){return ka(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function db(a,b,c){if(a&&(a.addEventListener||a.attachEvent)){var d=cb(a,b,c);if(!d){var d=++bb.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new $a(d);if(!ya(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new $a(b);
b.currentTarget=a;return c.call(a,b)};
f=Ya(f);z[d]=[a,b,c,f,!1];a.addEventListener?"mouseenter"==b&&e?a.addEventListener("mouseover",f,!1):"mouseleave"==b&&e?a.addEventListener("mouseout",f,!1):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",f,!1):a.addEventListener(b,f,!1):a.attachEvent("on"+b,f)}}}
function gb(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in z){var c=z[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete z[a]}}))}
;var ib={};function jb(a){return ib[a]||(ib[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var N={},kb=[],L=new K,lb={};function nb(){x(kb,function(a){a()})}
function ob(a){var b=y(document.getElementsByTagName("yt:"+a));a="yt-"+a;var c=document;a=c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):xa(a);a=y(a);return ia(b,a)}
function O(a,b){return"yt:"==a.tagName.toLowerCase().substr(0,3)?a.getAttribute(b):a?a.dataset?a.dataset[jb(b)]:a.getAttribute("data-"+b):null}
function pb(a,b){L.R.apply(L,arguments)}
;function P(a,b,c){this.h=b;this.m=this.f=null;this.v=this[r]||(this[r]=++ca);this.j=0;this.K=!1;this.H=[];this.l=null;this.C=c;this.D={};b=document;if(a=q(a)?b.getElementById(a):a)if("iframe"!=a.tagName.toLowerCase()&&(b=qb(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(b=a=this.f,b=b[r]||(b[r]=++ca),a.id="widget"+b),N[this.f.id]=this,window.postMessage){this.l=new K;rb(this);a=Q(this.h,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in lb)sb(this,
e)}}
g=P.prototype;g.$=function(a,b){this.f.width=a;this.f.height=b;return this};
g.Z=function(){return this.f};
g.S=function(a){this.A(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
this.l.subscribe(a,c);tb(this,a);return this};
function sb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.C==c[0]&&tb(a,d)}}
g.Y=function(){this.f.id&&(N[this.f.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){var a=this.f,b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);R&&(R[this.v]=null);this.h=null;var a=this.f,c;for(c in z)z[c][0]==a&&gb(c);this.m=this.f=null};
g.G=function(){return{}};
function S(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.K?a.L(b):a.H.push(b)}
g.A=function(a,b){if(!this.l.isDisposed()){var c={target:this,data:b};this.l.R(a,c);pb(this.C+"."+a,c)}};
function qb(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var h=d[e].value;null!=h&&""!=h&&"null"!=h&&c.setAttribute(d[e].name,h)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+Q(a.h,"title"));(d=Q(a.h,"width"))&&c.setAttribute("width",d);(d=Q(a.h,"height"))&&c.setAttribute("height",d);var m=a.G();m.enablejsapi=window.postMessage?1:0;window.location.host&&(m.origin=window.location.protocol+"//"+window.location.host);
window.location.href&&x(["debugjs","debugcss"],function(a){var b;b=window.location.href;var c=b.search(Sa),d;b:{d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break b;d+=e+1}d=-1}if(0>d)b=null;else{e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b=decodeURIComponent(b.substr(d,e-d).replace(/\+/g," "))}null===b||(m[a]=b)});
c.src=Q(a.h,"host")+a.I()+"?"+Ra(m);return c}
g.P=function(){this.f&&this.f.contentWindow?this.L({event:"listening"}):window.clearInterval(this.j)};
function rb(a){ub(a.h,a,a.v);a.j=Xa(t(a.P,a));db(a.f,"load",t(function(){window.clearInterval(this.j);this.j=Xa(t(this.P,this))},a))}
function tb(a,b){a.D[b]||(a.D[b]=!0,S(a,"addEventListener",[b]))}
g.L=function(a){a.id=this.v;a=Aa(a);var b;b=this.h;var c,d=this.f.src.match(Pa);c=d[1];var e=d[2],f=d[3],d=d[4],h="";c&&(h+=c+":");f&&(h+="//",e&&(h+=e+"@"),h+=f,d&&(h+=":"+d));c=h;b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(m){if(m.name&&"SyntaxError"==m.name)Za(m,"WARNING");else throw m;}};var T="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function U(){}
U.prototype.next=function(){throw T;};
U.prototype.F=function(){return this};
function vb(a){if(a instanceof U)return a;if("function"==typeof a.F)return a.F(!1);if(p(a)){var b=0,c=new U;c.next=function(){for(;;){if(b>=a.length)throw T;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function wb(a,b){if(p(a))try{x(a,b,void 0)}catch(c){if(c!==T)throw c;}else{a=vb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==T)throw c;}}}
function xb(a){if(p(a))return y(a);a=vb(a);var b=[];wb(a,function(a){b.push(a)});
return b}
;function yb(){}
;function zb(){}
v(zb,yb);zb.prototype.clear=function(){var a=xb(this.F(!0)),b=this;x(a,function(a){b.remove(a)})};function V(a){this.f=a}
v(V,zb);g=V.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.get=function(a){a=this.f.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.F=function(a){var b=0,c=this.f,d=new U;d.next=function(){if(b>=c.length)throw T;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function Ab(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
v(Ab,V);function Bb(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
v(Bb,V);(new Ab).isAvailable();(new Bb).isAvailable();function Cb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Db(a){return 0==a.search("get")||0==a.search("is")}
;var Eb="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Fb="";function W(a){this.h=a||{};this.defaults={};this.defaults.host="http://www.youtube.com";this.defaults.title="";this.j=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.h,window.YTConfig||{},this.defaults];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var R=null;function Q(a,b){for(var c=[a.h,window.YTConfig||{},a.defaults],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function ub(a,b,c){R||(R={},db(window,"message",t(a.l,a)));R[c]=b}
W.prototype.l=function(a){var b;(b=a.origin==Q(this,"host"))||((b=a.origin)&&b==Fb?b=!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Eb.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(b)?(Fb=b,b=!0):b=!1);if(b){var c;try{c=za(a.data)}catch(d){return}this.j=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=R[c.id])a.K=!0,a.K&&(x(a.H,a.L,a),a.H.length=0),a.S(c)}};function Gb(a){W.call(this,a);this.defaults.title="video player";this.defaults.videoId="";this.defaults.width=640;this.defaults.height=360}
v(Gb,W);function X(a,b){var c=new Gb(b);P.call(this,a,c,"player");this.o={};this.B={}}
v(X,P);function Hb(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");if(b){var c=O(a,"width"),d=O(a,"height");new X(a,{videoId:b,width:c,height:d})}}}
g=X.prototype;g.I=function(){return"/embed/"+Q(this.h,"videoId")};
g.G=function(){var a=Q(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};a.widget_referrer=document.referrer;return a};
g.S=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(ba(a))for(var c in a)this.o[c]=a[c];break;case "infoDelivery":Ib(this,a);break;case "initialDelivery":window.clearInterval(this.j);this.B={};this.o={};Jb(this,a.apiInterface);Ib(this,a);break;default:this.A(b,a)}};
function Ib(a,b){if(ba(b))for(var c in b)a.B[c]=b[c]}
function Jb(a,b){x(b,function(a){this[a]||(Cb(a)?this[a]=function(){this.B={};this.o={};S(this,a,arguments);return this}:Db(a)?this[a]=function(){var b=0;
0==a.search("get")?b=3:0==a.search("is")&&(b=2);return this.B[a.charAt(b).toLowerCase()+a.substr(b+1)]}:this[a]=function(){S(this,a,arguments);
return this})},a)}
g.ca=function(){var a=this.f.cloneNode(!1),b=this.B.videoData,c=Q(this.h,"host");a.src=b&&b.video_id?c+"/embed/"+b.video_id:a.src;b=document.createElement("div");b.appendChild(a);return b.innerHTML};
g.ba=function(a){return this.o.namespaces?a?this.o[a].options||[]:this.o.namespaces||[]:[]};
g.aa=function(a,b){if(this.o.namespaces&&a&&b)return this.o[a][b]};function Kb(a){W.call(this,a);this.defaults.title="Thumbnail";this.defaults.videoId="";this.defaults.width=120;this.defaults.height=68}
v(Kb,W);function Y(a,b){var c=new Kb(b);P.call(this,a,c,"thumbnail")}
v(Y,P);function Lb(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");if(b){b={videoId:b,events:{}};b.width=O(a,"width");b.height=O(a,"height");b.thumbWidth=O(a,"thumb-width");b.thumbHeight=O(a,"thumb-height");b.thumbAlign=O(a,"thumb-align");var c=O(a,"onclick");c&&(b.events.onClick=c);new Y(a,b)}}}
Y.prototype.I=function(){return"/embed/"+Q(this.h,"videoId")};
Y.prototype.G=function(){return{player:0,thumb_width:Q(this.h,"thumbWidth"),thumb_height:Q(this.h,"thumbHeight"),thumb_align:Q(this.h,"thumbAlign")}};
Y.prototype.A=function(a,b){Y.M.A.call(this,a,b?b.info:void 0)};function Mb(a){W.call(this,a);this.defaults.host="https://www.youtube.com";this.defaults.title="upload widget";this.defaults.width=640;this.defaults.height=.67*Q(this,"width")}
v(Mb,W);function Z(a,b){var c=new Mb(b);P.call(this,a,c,"upload")}
v(Z,P);g=Z.prototype;g.I=function(){return"/upload_embed"};
g.G=function(){var a={},b=Q(this.h,"webcamOnly");null!=b&&(a.webcam_only=b);return a};
g.A=function(a,b){Z.M.A.call(this,a,b);"onApiReady"==a&&S(this,"hostWindowReady")};
g.T=function(a){S(this,"setVideoDescription",arguments)};
g.V=function(a){S(this,"setVideoKeywords",arguments)};
g.W=function(a){S(this,"setVideoPrivacy",arguments)};
g.U=function(a){S(this,"setVideoDraftPrivacy",arguments)};
g.X=function(a){S(this,"setVideoTitle",arguments)};u("YT.PlayerState.UNSTARTED",-1);u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.UploadWidgetEvent.API_READY","onApiReady");u("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");u("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");u("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");u("YT.UploadWidgetState.IDLE",0);u("YT.UploadWidgetState.PENDING",1);
u("YT.UploadWidgetState.ERROR",2);u("YT.UploadWidgetState.PLAYBACK",3);u("YT.UploadWidgetState.RECORDING",4);u("YT.UploadWidgetState.STOPPED",5);u("YT.get",function(a){return N[a]});
u("YT.scan",nb);u("YT.subscribe",function(a,b,c){L.subscribe(a,b,c);lb[a]=!0;for(var d in N)sb(N[d],a)});
u("YT.unsubscribe",function(a,b,c){Na(a,b,c)});
u("YT.Player",X);u("YT.Thumbnail",Y);u("YT.UploadWidget",Z);P.prototype.destroy=P.prototype.Y;P.prototype.setSize=P.prototype.$;P.prototype.getIframe=P.prototype.Z;P.prototype.addEventListener=P.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.ca;X.prototype.getOptions=X.prototype.ba;X.prototype.getOption=X.prototype.aa;Z.prototype.setVideoDescription=Z.prototype.T;Z.prototype.setVideoKeywords=Z.prototype.V;Z.prototype.setVideoPrivacy=Z.prototype.W;Z.prototype.setVideoTitle=Z.prototype.X;
Z.prototype.setVideoDraftPrivacy=Z.prototype.U;kb.push(function(){var a=ob("player");x(a,Hb)});
kb.push(function(){var a=ob("thumbnail");x(a,Lb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||nb();var Nb=l("onYTReady");Nb&&Nb();var Ob=l("onYouTubeIframeAPIReady");Ob&&Ob();var Pb=l("onYouTubePlayerAPIReady");Pb&&Pb();})();
