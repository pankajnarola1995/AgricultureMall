/*
 *  (c) 2000-2014 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/jquery/jquery.current.js"],function(){(function(e){function t(e){return"object"==typeof e?e:{top:e,left:e}}var n=e.scrollTo=function(t,n,o){e(window).scrollTo(t,n,o)};n.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!n)return t;var o=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==o.compatMode?o.body:o.documentElement})},e.fn.scrollTo=function(o,r,i){return"object"==typeof r&&(i=r,r=0),"function"==typeof i&&(i={onAfter:i}),"max"==o&&(o=9e9),i=e.extend({},n.defaults,i),r=r||i.duration,i.queue=i.queue&&i.axis.length>1,i.queue&&(r/=2),i.offset=t(i.offset),i.over=t(i.over),this._scrollable().each(function(){function a(e){c.animate(f,r,i.easing,e&&function(){e.call(this,o,i)})}if(null!=o){var s,u=this,c=e(u),l=o,f={},d=c.is("html,body");switch(typeof l){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)){l=t(l);break}if(l=e(l,this),!l.length)return;case"object":(l.is||l.style)&&(s=(l=e(l)).offset())}e.each(i.axis.split(""),function(e,t){var o="x"==t?"Left":"Top",r=o.toLowerCase(),m="scroll"+o,h=u[m],y=n.max(u,t);if(s)f[m]=s[r]+(d?0:h-c.offset()[r]),i.margin&&(f[m]-=parseInt(l.css("margin"+o))||0,f[m]-=parseInt(l.css("border"+o+"Width"))||0),f[m]+=i.offset[r]||0,i.over[r]&&(f[m]+=l["x"==t?"width":"height"]()*i.over[r]);else{var w=l[r];f[m]=w.slice&&"%"==w.slice(-1)?parseFloat(w)/100*y:w}i.limit&&/^\d+$/.test(f[m])&&(f[m]=0>=f[m]?0:Math.min(f[m],y)),!e&&i.queue&&(h!=f[m]&&a(i.onAfterFirst),delete f[m])}),a(i.onAfter)}}).end()},n.max=function(t,n){var o="x"==n?"Width":"Height",r="scroll"+o;if(!e(t).is("html,body"))return t[r]-e(t)[o.toLowerCase()]();var i="client"+o,a=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(a[r],s[r])-Math.min(a[i],s[i])}})(jQuery),window.DWait&&DWait.run("jms/lib/jquery/plugins/jquery.scrollto.js")});if(window.DWait){DWait.count()}