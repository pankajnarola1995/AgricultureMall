"use strict";function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _get=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;h=j=i=void 0,d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;return void 0===i?void 0:i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return void 0;a=j,b=f,c=g,d=!0}},_createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();__define("pages/gallerywidget/gallerywidget",["lib/da/dapi","lib/promise","lib/tp/superagent","lib/tp/superagent-deps/emitter","lib/tp/superagent-deps/reduce","lib/da/dapx","lib/data/meta","pageload","lib/da/vms","lib/da/deviantart-object","lib/data/init","lib/dom/sigil","lib/data/meta","lib/dom/sigil","lib/da/torpedo/torpedo","lib/tp/throttle","lib/tp/debounce","lib/tp/isObject","lib/data/extend","lib/tp/eventemitter3","lib/data/cookie","lib/da/torpedo/default-options/base","lib/da/torpedo/torpedo-gallection","lib/dom/event-listener","lib/dom/event-wrapper","lib/da/gallection","lib/tp/alt","lib/da/torpedo/gallection/actions/thumb-class","lib/da/cache/deviation","lib/da/cache/base","lib/da/torpedo/gallection/stores/thumb-class","lib/da/torpedo/gallection/constants/thumb-class","lib/da/toast","lib/tp/react","lib/da/toast/components/toast-container","lib/tp/react-base","lib/tp/deep-equal","lib/tp/deep-equal/keys","lib/tp/deep-equal/is_arguments","lib/tp/classnames/classnames","lib/da/toast/components/message","lib/da/toast/components/base","lib/da/toast/components/error","lib/da/toast/components/fave","lib/da/torpedo/infinite-torpedo","lib/da/torpedo/loading","lib/da/torpedo/end-of-results","lib/da/torpedo/default-options/infinite","lib/da/peek/peek","lib/da/modal","lib/da/popup/popup","lib/da/popup/components/global-container","lib/da/popup/actions/global-container","lib/da/popup/stores/global-container","lib/da/popup/components/popup-container","lib/da/popup/components/backdrop","lib/da/hotkeys","lib/da/peek/components/container","lib/da/peek/actions/container","lib/da/peek/stores/container","lib/da/peek/components/paddle-left","lib/da/peek/components/paddle-right","lib/da/peek/components/paddle-loading","lib/da/peek/components/slide","lib/da/peek/constants/deviation-types","lib/da/peek/actions/slide","lib/da/comments","lib/da/toast/components/save","lib/da/toast/components/watch","lib/da/toast/components/collect","lib/da/cache/status","lib/da/poll","lib/data/emit","lib/da/peek/stores/slide","lib/da/peek/constants/gallection-types","lib/da/date-formatter","lib/da/peek/components/deviation","lib/da/mature","lib/da/peek/components/types/mature","lib/da/peek/components/types/image","lib/da/peek/components/loading","lib/da/peek/components/types/freeform","lib/da/peek/components/types/flash","lib/da/peek/components/types/madefire","lib/da/peek/components/collection","lib/da/user/components/user-link","lib/da/peek/components/poll","lib/da/user/components/user-icon","lib/da/peek/components/status","lib/da/peek/components/info","lib/da/peek/components/info/status","lib/da/peek/components/info/base","lib/da/peek/components/who","lib/da/popup","lib/da/peek/components/report","lib/da/peek/components/share","lib/da/peek/components/share/note-popup","lib/da/peek/actions/share-popup","lib/da/peek/actions/note-popup","lib/da/cache/watch","lib/da/peek/stores/note-popup","lib/da/peek/components/share/popup-container","lib/da/peek/components/share/info","lib/da/peek/components/share/to-input","lib/da/peek/components/share/autocomplete-suggestion","lib/da/peek/components/share/close-x","lib/da/peek/components/share/status-popup","lib/da/peek/actions/status-popup","lib/da/peek/stores/status-popup","lib/da/peek/components/share/icons/status","lib/da/peek/components/share/icons/note","lib/da/peek/components/share/icons/facebook","lib/da/peek/components/share/icons/twitter","lib/da/peek/components/share/icons/tumblr","lib/da/peek/components/share/icons/pinterest","lib/da/peek/components/share/icons/reddit","lib/da/peek/components/share-button","lib/da/peek/components/tab-links-container","lib/da/peek/components/tab-link","lib/da/peek/components/copy-input","lib/da/peek/components/related-art","lib/da/peek/components/info/collection","lib/da/peek/components/info/deviation","lib/da/peek/components/fave-button","lib/da/peek/components/save-button","lib/da/peek/components/download-button","lib/da/peek/components/fave-dropdown","lib/da/components/scroll-stopper","lib/dom/scroll-stopper","lib/da/peek/components/fave-new-collection","lib/da/peek/components/fave-dropdown-item","lib/da/peek/components/category","lib/da/peek/components/tags","lib/da/peek/components/info/poll","lib/da/peek/components/comments","lib/da/components/paginator","lib/da/peek/components/comment","lib/da/peek/components/commentbox","lib/da/peek/components/dds","lib/da/peek/components/contest","lib/da/peek/components/challenge","lib/da/peek/components/campaignBanner","lib/da/peek/components/campaigns/metropolis","lib/da/tabs/tabs","lib/dom/font-loaded","lib/da/tabs/actions/tabs","lib/da/tabs/stores/tabs","lib/da/view","lib/tp/throttle","lib/data/extend","lib/da/view","pages/gallerywidget/view","pages/gallerywidget/actions/gallerywidget"],function(a,b,c,d){var e=a("lib/da/dapi"),f=a("lib/data/meta"),g=a("lib/dom/sigil"),h=a("lib/da/torpedo/torpedo"),i=a("lib/da/torpedo/infinite-torpedo"),j=a("lib/da/peek/peek"),k=a("lib/da/tabs/tabs"),l=a("lib/tp/throttle"),m=a("lib/data/extend"),n=a("lib/da/view"),o=(n.View,n.registerView),p=a("pages/gallerywidget/view"),q=60,r=function(){function a(b){if(_classCallCheck(this,a),f.getCachedMetadata(),this.tabs={},this.container=b,this.containerMetadata=f.getGlobal(g.first(this.container,"tab-container-gallerywidget")),this.view=o(p,b),this.tabLinkContainer=g.first(this.container,"tab-link-container"),k.init(g.find(this.container,"tab-link-container")),k.on("after-show",this.activateTab.bind(this)),this.isDeviationPage()){var c=this.tabLinkContainer.getBoundingClientRect(),d=document.body.classList&&document.body.classList.contains("tall-head")?q:0;this.tabOffset=c.top+this.getScrollY()-d,window.addEventListener("scroll",l(this.onScroll.bind(this),100))}this.activateTab("preview")}return _createClass(a,[{key:"activateTab",value:function(a){this.activeTab=a;for(var b in this.tabs)this.tabs[b].torpedo&&this.tabs[b].torpedo.deactivate();if(this.tabs.hasOwnProperty(a))return void(this.tabs[a].torpedo&&this.tabs[a].torpedo.activate());if("preview"===a)this.tabs[a]={};else{var c=g.first(this.container,"tab-link-"+a),d=f.getGlobal(c);this.tabs[a]={nextOffset:0,hasMore:!0,username:d.username,gallectionid:d.gallectionid,gallectionType:d.gallectionType}}this.tabs[a].torpedo=this.createTorpedo(a)}},{key:"createTorpedo",value:function(a){var b=this,c=void 0,d=g.first(this.container,"tab-"+a),k=g.first(this.container,"tab-link-"+a),l=g.first(d,"journal-inline-torpedo"),n=f.getGlobal(k),o=this.tabs[a],p={insertBands:!0,shouldDisplayBand:function(a){return n.ad&&3===a},getDisplayBand:function(){var a=document.createElement("div");return a.classList.add("gallery-widget","band"),a.style.backgroundImage='url("'+n.ad.src+'")',n.ad.peekable?(a.classList.add("peekable"),g.add(a,"band peekable"),f.setAdPeekMetadata(a,{id:n.ad.id,author:n.ad.author,type:"freeform"})):g.add(a,"band"),{node:a,height:121}}};if("preview"===a)c=new h(l,p);else{var q=m(p,{hasMore:function(){return o.hasMore},prune:!1,fetchMore:function(){var a={username:o.username,offset:o.nextOffset,limit:24},b=void 0;b="gallery"==o.gallectionType?"gallery":"collection";var c=e.request("/"+b+"/"+o.gallectionid+"/",a).then(function(a){return o.nextOffset=a.next_offset,o.hasMore=a.has_more,a});return e.send(),c}});c=new i(l,q)}c.on("endOfStream",function(){l.classList.add("show-orphans")}),c.on("resetStream",function(){l.classList.remove("show-orphans")}),c.generate();var r=f.getGlobal(this.container),s=r.disablePeek,t=r.printMode;if(g.first(d,"journal-inline-torpedo").classList.add("show-thumbs"),!s&&!Browser.isMobile){var u={hideSaveButton:!0,takeover:this.containerMetadata.takeover,campaignKey:this.containerMetadata.campaignKey,campaignJournalId:this.containerMetadata.campaignJournalId,addSaveButton:!1};o.peek=j.create(d,"peekable",u);var v=function(){window.requestAnimationFrame(function(){o.peek.updateNodes()})};c.on("resultsAppended",v),c.on("bandInserted",v)}var w=g.find(l,"torpedo-thumb");return w.length?(this.initDuperbrowse(d),t&&this.attachPrintModeToThumbs(w),o.peek&&window.requestAnimationFrame(function(){o.peek.updateNodes()})):(c.fetchMore(),c.EE.on("fetchingDone",function(){w=g.find(l,"torpedo-thumb"),t&&b.attachPrintModeToThumbs(w),b.initDuperbrowse(d)})),c}},{key:"initDuperbrowse",value:function(a){null==a.getAttribute("gmindex")&&(a.setAttribute("data-gmiclass","DuperbrowseFreeformCustomStream"),$(a).gmi1())}},{key:"attachPrintModeToThumbs",value:function(a){a.forEach(function(a){a.setAttribute("data-view_mode","print"),-1==a.href.indexOf("purchase=print")&&(a.href=a.href+"?purchase=print")})}},{key:"onScroll",value:function(a){var b=this.getScrollY(),c=this.container.offsetHeight;b>=this.tabOffset?this.tabLinkContainer.classList.add("fixed"):this.tabLinkContainer.classList.remove("fixed"),b>=this.tabOffset+c?this.tabLinkContainer.classList.add("fixed-stop"):this.tabLinkContainer.classList.remove("fixed-stop")}},{key:"getScrollY",value:function(){return void 0!==window.scrollY?window.scrollY:window.pageYOffset}},{key:"isDeviationPage",value:function(){for(var a=this.container.parentNode;a;){if(a.classList){if(a.classList.contains("dev-view-deviation"))return!0}else if(a.className&&a.className.match(/(^| )dev-view-deviation( |$)/gi))return!0;a=a.parentNode}return!1}}]),a}();g.find("gallery-list-widget").forEach(function(a){new r(a)})}),__define("pages/gallerywidget/view",["lib/da/dapx","lib/data/meta","pageload","lib/da/vms","lib/da/deviantart-object","lib/data/init","lib/dom/sigil","pages/gallerywidget/actions/gallerywidget","lib/da/view","lib/dom/event-listener","lib/dom/event-wrapper","lib/tp/alt","lib/tp/eventemitter3"],function(a,b,c,d){var e=a("lib/da/dapx"),f=a("lib/data/meta"),g=a("pages/gallerywidget/actions/gallerywidget"),h=a("lib/da/view"),i=h.View,j=(h.registerView,function(a){function b(a){_classCallCheck(this,b),_get(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.containerMetadata=f.getGlobal(a),this.registerAction(g),this.registerEvent("click","torpedo-thumb",a)}return _inherits(b,a),_createClass(b,[{key:"onTorpedoThumbClick",value:function(a){var b=f.getGlobal(a.node);if(b.type){var c={context:this.containerMetadata.journalid,devid:b.id,artist:b.author.userid},d={view:"journal-gallery-widget",element:b.type+"_thumb",section:"gallery_tabs",action:"click"};e.sendStandardizedPayload(d,c)}}}]),b}(i));b.exports=j}),__define("pages/gallerywidget/actions/gallerywidget",[],function(a,b,c,d){var e=function f(){_classCallCheck(this,f),this.generateActions("torpedoThumbClick")};b.exports=e}),__define("lib/da/peek/components/campaigns/metropolis",["lib/tp/react-base","lib/tp/react","lib/tp/deep-equal","lib/tp/deep-equal/keys","lib/tp/deep-equal/is_arguments","lib/da/dapx"],function(a,b,c,d){var e=a("lib/tp/react-base"),f=e.React,g=e.ReactBase,h=a("lib/da/dapx"),i=function(a){function b(){_classCallCheck(this,b),_get(Object.getPrototypeOf(b.prototype),"constructor",this).apply(this,arguments)}return _inherits(b,a),_createClass(b,[{key:"trackClick",value:function(){h.sendStandardizedPayload({view:"peek",element:"metropolis_btn",section:"left_column",component:"peek_banner",action:"click"},this.props.getDapxExtraData())}},{key:"render",value:function(){return f.createElement("div",{className:"campaign"},f.createElement("i",{className:"icon",style:{background:"#181A1B url(http://www.da-files.com/creative/sony/img/camera-a7r.png) 50% 50%/70% auto no-repeat"}}),f.createElement("div",{className:"title"},f.createElement("h1",null,"Capturing Change"),f.createElement("h2",null,"Presented by Sony")),f.createElement("div",{className:"btnWrapper"},f.createElement("a",{href:"https://alphauniverse.com",className:"campaignBTN",onClick:this.trackClick,target:"_blank"},"EXPLORE ALPHA UNIVERSE")),f.createElement("style",null,"                .peek-main-component .campaign:before { left: -37px; }                .peek-main-component .campaign .icon:after { border: 0px; }                .peek-main-component .campaign .title { width: 240px; }                .peek-main-component .campaign .campaignBTN { width: 180px; border: 1px solid #7d8080; padding: 12px 28px; }                .peek-main-component .campaign .campaignBTN:hover { background: #000; color: #05cc47; border-color: #05cc47; }                "))}}]),b}(g);b.exports=i});