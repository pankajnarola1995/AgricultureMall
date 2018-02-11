/**
* Rubicon Project: Solutions Engineering
* Client:          10617/GourmetAds
* Name:            rp-gads-clk.js
* Author:          Martin Hill
* Version:         1.1
* Description:     Custom tracking script for click tracking
**/

// default initialisation object:
var rpx_defaults = {
	clk : false,  // click tracking:  true = enabled, false = disabled, default = false
	dck : '',
	eck : '',
	dbg : false
}

// initialisation object allowed keys
var keys = ['clk','dck','eck','dbg'];

// check for initialisation object & sanitise keys
if (typeof rpx_init === 'object') {
	for (var key in rpx_init) {
		if (rpx_init.hasOwnProperty(key)) {
			if (keys.indexOf(key) < 0) {
				delete rpx_init[key];
			}
		}
	}
}

// initialise variables
var rpx_clk = (typeof rpx_init.clk === 'boolean' && rpx_init.clk) ? rpx_init.clk : rpx_defaults.clk;
var rpx_pck = (typeof rpx_init.dck === 'string' && rpx_init.dck.indexOf('http://') >= 0 ) ? rpx_init.dck : rpx_defaults.dck;
var rpx_eck = (typeof rpx_init.eck === 'string' && rpx_init.eck.indexOf('http://') >= 0 ) ? rpx_init.eck : rpx_defaults.eck;
var rpx_dbg = (typeof rpx_init.dbg === 'boolean' && rpx_init.dbg) ? rpx_init.dbg : rpx_defaults.dbg;

// click tracking functions
var clk = function(id)
{
	var oif = false;
	var m_out = function() { oif = false; self.blur(); window.focus(); if (rpx_dbg) { console.log('clk.m_out.focus'); }; }
	var m_over = function() { oif = true; if (rpx_dbg) { console.log('clk.m_over.focus'); }; }
	var if_clk = function() {
		if(oif) {
			var adm  = '';
			adm = (typeof rpx_response !== 'undefined');
			if (adm) {
				var a = rpx_response.account;
				var s = rpx_response.site;
				var z = rpx_response.zone;
				var e = rpx_response.size;
				var d = rpx_response.ad;
				var c = rpx_response.creative;
                var i = rpx_response.imp_id;
				var u = 'http://optimized-by.rubiconproject.com/t/'+a+'/'+s+'/'+z+'-'+e+'.'+d+'.'+c+'?url=0';
				var b = 'http://beacon.rubiconproject.com/beacon/t/'+i+'?url=0';
			}
			if (typeof u === 'string') { var ct = new Image(); ct.src = u; console.log(u); }
			if (typeof b === 'string') { var bc = new Image(); bc.src = b; console.log(b); }
			if (rpx_pck !== '') { var pc = new Image(); pc.src = rpx_pck; console.log(rpx_pck); }
			if (rpx_eck !== '') { var ec = new Image(); ec.src = rpx_eck; console.log(rpx_eck); }
			if (rpx_dbg) { console.log('clk.if_click') };
		}
	}

	var init = function() {
		var element = document.getElementById(id);
		element.onmouseover = m_over;
		element.onmouseout = m_out;
	
		if (typeof window.attachEvent !== 'undefined') {
			attachEvent('onblur', if_clk);
			if (rpx_dbg) { console.log('clk.attachEvent.onblur') };
		} else if (typeof window.addEventListener !== 'undefined') {
			addEventListener('blur', if_clk, false);
			if (rpx_dbg) { console.log('clk.addEventListener.onblur') };
		}
	}
	if (rpx_clk) { init(); if (rpx_dbg) { console.log('clk.init') }; }
}

