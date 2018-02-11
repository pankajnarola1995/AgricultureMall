//Copyright (c) 2011-2012 Connexity, Inc.  All rights reserved.
//A2 v.1.1.1
CxTmp=document.getElementsByTagName('body')[0];if(CxTmp){CxTn=CxTmp}var _CxTy=_CxTy||function(){var bCse=CxTp+'//connexity.net/c/cse';var CXTpp;var CXTrp;try{CXTpp=window.location.href;CXTrp=window.referrer}
catch(e){}
function murl(p){var pp=(CXTpp)?encodeURIComponent(CXTpp):'';var rp=(CXTrp)?encodeURIComponent(CXTrp):'';var d=new Date();var r='';try{r=screen.width+'x'+screen.height+'c'+screen.colorDepth+''}
catch(e){}
return bCse+'?a='+p.oper+'&A='+p.aid+(p.cid?('&C='+p.cid):'')+'&D='+p.xid+'&V='+p.ver+'&R='+r+'&T='+(d.getDay()*24+d.getHours()).toString(16)+p.i+(pp?('&J='+pp):'')+(rp?('&L='+rp):'')+'&b='+Math.floor(Math.random()*9999)+''}
function cifr(par){var ifr=document.createElement('iframe');ifr.id='Cpxfr';ifr.src=murl(par);ifr.scrolling='no';ifr.width=0;ifr.height=0;ifr.frameBorder=0;ifr.style.border=0;ifr.style.display='none';ifr.allowtransparency='true';ifr.hspace=0;ifr.vspace=0;CxTn.appendChild(ifr)}return{i:function(p){var z={};var ud='undefined';z.aid=((typeof(p.A)==ud)?'':p.A);z.cid=((typeof(p.C)==ud)?'':p.C);z.xid=((typeof(p.X)==ud)?'':p.X);z.ver=((typeof(p.Ve)==ud)?'0':p.Ve);if(typeof(p.Op)==ud){p.Op='r'}if(p.Op=='r'){z.oper='S'}else if(p.Op=='a'){z.oper='B'}else{z.oper='L'}var ar=[];var i=0;E=encodeURIComponent;for(var k in p.i){ar.push((i==0?'&':'')+'I'+i+'k='+E(k)+'&I'+i+'v='+E(p.i[k]));i++;if(i>9)break}z.i=ar.join('&');cifr(z)}}}();window.setTimeout(function(){_CxTy.i(CxTv)},0);

