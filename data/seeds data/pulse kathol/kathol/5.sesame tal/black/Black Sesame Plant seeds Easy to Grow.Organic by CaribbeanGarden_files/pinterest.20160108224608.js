define("sharing/openwindow",[],function(){return function(n,t,e,i){var r=screen.width/2-t/2,a=screen.height/2-e/2;return window.open(n,i,"width="+t+",height="+e+",left="+r+",top="+a)}}),function(n,t){n(document).ready(function(){n("a.etsy-pin-it").click(function(){var e=n(this).attr("data-share-from"),i={php_event_name:"share_pinterest",source:e};t.Context.data.listingId&&(i.listing_id=t.Context.data.listingId),e&&t.EventLogger.logEvent(i);var r=this.href;return require({paths:{"sharing/openwindow":"sharing/openwindow.20160108224608"}},["sharing/openwindow"],function(n){n(r,665,520,"etsy_pin_it")}),!1}),t&&n(t).bind("listing-image-change",function(t,e){var i=n("a.etsy-pin-it").attr("href").replace(/(&image=)([^&]*)/,"$1"+encodeURIComponent(e));n("a.etsy-pin-it").attr("href",i)})})}(jQuery,window.Etsy);