/*
 *  (c) 2000-2015 deviantART, Inc. All rights reserved.
 */
(function(){function e(t){a.cp_logid||(logid=t&&t.data&&((t.data+"").match(/^dapxadr:(\d+)/)||[]).pop())&&(a.cp_logid=logid,window.removeEventListener?window.removeEventListener("message",e):window.detachEvent&&window.detachEvent("onmessage",e))}var t=(new Date).getTime(),a={},n=function(){for(var e={},t=0;arguments.length>t;++t)for(var a in arguments[t])arguments[t].hasOwnProperty(a)&&(e[a]=arguments[t][a]);return e};window.llogma=function(e,d){switch(e){case"register":top.postMessage("dapxadr","*");case"define":return"object"==typeof d&&(a=n(a,d)),void 0}top.postMessage("dapxad:"+JSON.stringify(n(a,d,{adts:(new Date).getTime()-t})),"*")},window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e)})(),window.DWait&&DWait.run("jms/thirdparty/lib/dapx/dapx.llogma-ads.js");if(window.DWait){DWait.count()}