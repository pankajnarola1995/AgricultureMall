define("sharing/openwindow",[],function(){return function(n,e,t,i){var r=screen.width/2-e/2,o=screen.height/2-t/2;return window.open(n,i,"width="+e+",height="+t+",left="+r+",top="+o)}}),function(n,e){n(document).ready(function(){n("a.etsy-tweet").live("click",function(){var t=n(this).attr("data-share-from"),i={php_event_name:"share_twitter",source:t};e.Context.data.listingId&&(i.listing_id=e.Context.data.listingId),t&&e.EventLogger.logEvent(i);var r=this.href;return require({paths:{"sharing/openwindow":"sharing/openwindow.20160108224608"}},["sharing/openwindow"],function(n){n(r,550,370,"etsy_tweet")}),!1})})}(jQuery,window.Etsy),define("share2",[],function(){});