/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.21",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;case e.CONTROL:break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").css("position","absolute").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this.active = this.active || $( event.target ).closest( ".ui-menu-item" ); this._trigger("selected",a,{item:this.active})}})}(jQuery);;

var cimjsv;
if(typeof(cimjsv) === "undefined")
	cimjsv = new Object();
cimjsv['//utils.imimg.com/suggest/js/jq-ac-ui.js']=164;


if(typeof(asgv) === "undefined"){
    var asgv = {};
    asgv.data = {};
    asgv.isd = {iconHeight : 11, iconWidth : 0, maxData:500, return_all_allowed:true};
    asgv.data.topCountry = ['in','us','ae','bd', 'sa'];
    asgv.data.isd = [{"value":"91","label":"India  +91","data":{"cname":"India","iso":"IN","icon_order":"154"}},{"value":"1","label":"United States Of America  +1","data":{"cname":"United States Of America","iso":"US","icon_order":"4"}},{"value":"971","label":"United Arab Emirates  +971","data":{"cname":"United Arab Emirates","iso":"AE","icon_order":"202"}},{"value":"880","label":"Bangladesh  +880","data":{"cname":"Bangladesh","iso":"BD","icon_order":"161"}},{"value":"996","label":"Saudi Arabia  +996","data":{"cname":"Saudi Arabia","iso":"SA","icon_order":"3"}}]; asgv.reqBoosters = "";
    asgv.gid; asgv.vid; asgv.userData = false; asgv.getQ= false;asgv.blJsLoaded=false; asgv.getQAllowLen = 35; asgv.type = "product,mcat";
    asgv.domain = ((window.location.host.indexOf("stg") >-1)? (location.protocol+"//utils.imimg.com/") : ((window.location.host.indexOf("dev") >-1) ? (location.protocol+"//dev-utils.imimg.com/") : (location.protocol+"//utils.imimg.com/")));

    //Set GA account and domain, if not set in HTML.
    asgv.gaAcId = 'UA-10312824-1';
}
asgv.topSearches = ["led bulb", "bags", "shoes", "cctv camera", "saree", "solar panel", "mobile phone"];

function checkIfAnalyticsLoaded() 
{
	if(typeof(_gaq) != "undefined")
	{	
		if(typeof(_gaq._getAsyncTracker) == "function" && _gaq._getAsyncTracker()._getAccount() == asgv.gaAcId)
		{
			_gaq.push(['_setAccount', asgv.gaAcId]);
			_gaq.push(['_setDomainName', '.indiamart.com']);
		}

    }else {
        setTimeout('checkIfAnalyticsLoaded()', 1000);
    }
}
checkIfAnalyticsLoaded();
// event tracking for auto suggest
function eventTrack(category, action, label, value, noninteraction)
{
	try
	{
	    if(typeof(_gaq) != "undefined" && typeof(_gaq._getAsyncTracker) == "function" && _gaq._getAsyncTracker()._getAccount() == asgv.gaAcId)
		{
			_gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
		}
	}
	catch(e)
	{
	//	if(console && console.log)
	//		console.log(e);
	}
}
// the suggestion object. it contains meta data of suggestions besides the suggestions
function Suggestions(list, type)
{
	// available types of suggestion
	// DIRECT means - suggestions are fetched for the mentioned term from server
	this.DIRECT = 1;
	// FILTERED means - suggestions are extracted from a superset of cache and more can be fetched from the server
	this.FILTERED = 2;
	// COMPLETE means - all suggestions are fetched for the mentioned term from server and ***NO MORE*** suggestions will come if we append any character on it
	this.COMPLETE = 3;

	this._list = null;
	this.list(list, type);

	return this;
}

Suggestions.prototype.list = function(list, type)
{
	// set list if provided
	if(list != null)
	{
		this._list = list;
		this.type = type || this.DIRECT;
	}

	return this._list;
}

// the cache object. it manages setting and getting from cache
function SuggestionCache(opt)
{
	// this object will keep the keys and sugestion lists for those
	// e.g. { pri: ["printer", "prickly heat powder", "price tags"]};
	this._cache = new Object();
	this.match = opt.match;
	return this;
}

function cleanString(strVal,csopt)
{	
	if (typeof(csopt) == "undefined")
	{ 
        strVal = strVal.replace(/\W+/g, '');
	}
	else
	{
		strVal = strVal.replace(/[^a-zA-Z0-9\& ]+/g, ' ');
   		strVal = strVal.replace(/^\s+/g, '');
		strVal = strVal.replace(/\s\s+/g, ' ');
	}
	return strVal;
}

//this will perform spellcheck and give suggestion for similar terms
function spellCheck(strVal)
{
		if (strVal.length < 4)
			return strVal;

		if ((strVal.replace(/[^a-zA-Z]/g, '')).replace(/[aeiou\& ]+/g, '').length < 3)
			return strVal;
		var tempStrVal = strVal.replace(/[^0-9a-zA-Z]/g, '');
		tempStrVal = tempStrVal.replace(/(.)(?=\1)/gi,'');
		tempStrVal = tempStrVal.substring(0,2).concat(tempStrVal.substring(2).replace(/[aeiou\& ]+/g, ''));
		if (/[aeiou]/.test(tempStrVal.charAt(1)) === true)
			tempStrVal = (/[aeiou]/.test(tempStrVal.charAt(0)) === true) ? (tempStrVal.charAt(0).concat(tempStrVal.charAt(0))).concat(tempStrVal.slice(2)) : tempStrVal;
		tempStrVal = tempStrVal.replace(/([^aeiou])[yh]/i, '$1');
		tempStrVal = tempStrVal.replace(/[yh]([^aeiou])/i, '$1');
		tempStrVal = tempStrVal.replace(/z/gi,'j');
		tempStrVal = tempStrVal.replace(/ck/gi,'k');
		return tempStrVal;
}

// sets cache if list is provided as Suggestions object. returns object of Suggestions if cache found, null otherwise
SuggestionCache.prototype.cache = function(key, options, list)
{
	// set cache only if provided
	if(list != null)
	{
		// setting cache is easy. no extra work
		if(key != ""){
			this._cache[""+cleanString(key)] = list;
		}
	}

	// getting cache is slightly tricky. if we are looking for suggestion for "pri" but we have suggestions only for "pr" and not for "pri", we will try to find those suggestions which have a word starting from "pri" among available suggestions.

	// return if found
	if(cleanString(key) in this._cache)
	{
		if(typeof(this._cache[""+cleanString(key)]) === 'object')
		{
			return this._cache[""+cleanString(key)];
		}
	}

	// check for cache of superset, till there IS a superset
	if(cleanString(key).length > 0)
	{
		var superCache = this.cache(key.substr(0, key.length - 1), options);
		if(superCache != null)
		{
			var filteredCache = new Suggestions();
			var filteredList = {};var tempList = {};
			data = superCache.list();
			// checking the fuzzy match allow and super cache complete
			key = cleanString(key,1);
			$.each(data, function(dType,values){
			        filteredList[dType] = previouskeyCache(key, values, dType, tempList, options)[dType].concat(tempList["spck"+dType]);
                	});
			if(superCache.type == superCache.COMPLETE)
				filteredCache.list(filteredList, filteredCache.COMPLETE);
			else
				filteredCache.list(filteredList, filteredCache.FILTERED);
			return filteredCache;
		}
	}
	return null;
}

function previouskeyCache(key, values, dType, filteredList, options)
{
    filteredList[dType]= []; filteredList["spck"+dType]= [];
    var patt=new RegExp("\\b("+key+")","i");
    if(options.match === "fuzzy")
    {
		key = cleanString(key);
		var splPatt = (dType === "city" || dType === "unit") ? new RegExp("("+removeVowels(key)+")","i") :((spellCheck(key) !== key) ? new RegExp("("+spellCheck(key)+")","i") : "");
    }
    for(var term in values)
    {
        if(values[term].value !=null){
            var cTerm = values[term].value;
	    if(cleanString(cTerm,1).match(patt))
			filteredList[dType].push(values[term]);
            if(splPatt !== '' && typeof(splPatt) !== 'undefined'){
                cTerm = (dType === "city" || dType === "unit") ? cleanString(removeVowels(cTerm)) : cleanString(spellCheck(cTerm));
            	if(cTerm.match(splPatt))
                	filteredList["spck"+dType].push(values[term]);
		}
        }
    }
    return filteredList;
}

// this function is used for remove vowels and removing repition of string
function removeVowels(string)
{
    string = string.replace(/(.)(?=\1)/gi,'');
    string = string.replace(/[aeiou]+/gi,'');
    return string;
}

//This fucntion will drop the BUy Lead form
function getQ(blFrmDisp)
{
    if(typeof(openOnClickBLForm) === 'function' || cimjsv.hasOwnProperty("//apps.imimg.com/blform/BL_Form.js") == true){
        if(typeof(blFrmDisp) != 'undefined' && blFrmDisp === true){
            if(typeof(openOnClickBLForm) !== 'function')	 display_bl_OverlayForm();
            asgv.getQ= true;
        }
        asgv.blJsLoaded=true;
    }
}

function selectDataListEle(id,c){$("#"+id+" dd ul li a:contains('"+c+"')").click()}
function addScrollingInDd(id)
{
    var chosen = "";
    $(document).keydown(function(e){ // 38-up, 40-down
        if($("#"+id+" dd ul").is(':visible')){

            if (e.keyCode == 13){             
                $("#"+id+" dd ul li.selected a").click();
                return false;
            }var a = 0;
            if (e.keyCode == 40 || e.keyCode == 38) { 
                if(chosen === "") {
                    chosen = 0;
                } else if(chosen < $("#"+id+" dd ul li").length && chosen >=0 ) {
                    if (e.keyCode == 40 && chosen < $("#"+id+" dd ul li").length-1) { 
                       chosen++; a++;
                    }else if (e.keyCode == 38 && chosen > 0) { 
                        chosen--; a++;
                    }
                }
	 }if(e.keyCode >=65 && e.keyCode <=90){
			$.each($("dd ul li"),function(i,v){
				if((v.textContent.substring(0,1)) == (String.fromCharCode(e.keyCode)) && i > 2)
				{	chosen = i;a++;
					return false;}
			});	
	}if(a>0){
                $("#"+id+" dd ul li").removeClass('selected');
                $("#"+id+' dd ul li:eq('+chosen+')').addClass('selected');
                $("#"+id+" dd ul").scrollTop( 26*chosen );
            }
            return false;
        }
    });
   $("#"+id+" dd ul li").click(function() {
       chosen =  $( "#"+id+" dd ul li" ).index(this);
       $("#"+id+" dd ul li").removeClass('selected');
       $("#"+id+' dd ul li:eq('+chosen+')').addClass('selected');
       if(this.textContent !== 'Show More'){ 
           $("#"+id+" dd ul").hide();
       }else{
            this.innerHTML = 'Loading...';
		$( this ).css({"padding": "3px"}); return false;
       }
   });
}

function activateDropDown(id)
{
    $("#"+id+" dt a").click(function() {
        if(!document.getElementById(id).getAttribute('disabled')){
		$("#"+id+" dd ul").toggle();
        $("#"+id+" dd ul li:first-child").focus();
        }
    });
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $("#"+id+" dd ul").hide();
    });
    addScrollingInDd(id);
}

function renderIsd(data, options, mySuggester, request, response)
{
    if(data !== ''){
        var html='';
        var countrySelected = 0;
        var name = ( /function\s([^(]{1,})\(/).exec((options.onSelect).toString());
        var countryExists = jQuery.inArray( options.defaultValue.toLowerCase(),asgv.data.topCountry );
        if(typeof(options.defaultValue) === 'undefined' || options.defaultValue === '') options.defaultValue = 'IN';
        if( countryExists > -1){
            asgv.data.topCountry.splice(jQuery.inArray( options.defaultValue.toLowerCase(),asgv.data.topCountry ),1 );
        }
        if(options.showmore === 'true' && countryExists === -1 )
            data.isd = asgv.data.isd.concat(data.isd);
        asgv.data.topCountry.unshift(options.defaultValue.toLowerCase());
        if($('#'+options.element+" dt a").length === 0){
            html = '<dt><a><span></span><div class="as_arrow"></div></a><span class="value" ></span></dt>';
            html += '<dd> <ul class="country_list"></ul></dd> ';
            $('#'+options.element).append(html);
        }

        $.each(data.isd,function(ob){
            if(typeof(options.defaultValue) != 'undefined' && typeof(data.isd[ob].data.iso) != 'undefined' && data.isd[ob].data.iso.toLowerCase() === options.defaultValue.toLowerCase()  ){
                options.onSelect.call(this,request.event,data.isd[ob]);
                countrySelected = 1;
            }
            if(data.isd[ob].data.iso.toLowerCase() === 'in' && countrySelected === 0){
                options.onSelect.call(this,request.event,data.isd[ob]);
            }
            html='<li class="country_list_item" onclick=\'javascript:'+name[1]+'(event,'+JSON.stringify(data.isd[ob]).replace(/'/g, "’")+')'+'\'><span style="background-position:0px -'+data.isd[ob].data.icon_order*11+'px"></span>'
            html +='<a>'+data.isd[ob].label+'</a></li>';

            if(options.showmore === 'true'){
                if(data.isd[ob].data.iso.toLowerCase() != options.defaultValue.toLowerCase() && (!countryExists > -1))
                $('#'+options.element+' ul').append(html);
            }else{
                $('#'+options.element+' ul').append(html);
            }

            if(options.showmore === 'true' && data.isd[ob].data.iso.toLowerCase() === options.defaultValue.toLowerCase())
                $('#'+options.element+' ul').prepend(html);
        });
        if(options.showmore === 'true'){
            if(countryExists > -1) 
                $('#'+options.element+' ul').append('<li class="showmore"><a onclick=\'Suggester({\"type\":\"isd\",\"element\":\"'+options.element+'\",fields: \"cname,iso,icon_order\",displayFields:\"cname,value\",displaySeparator:\"  +\",\"defaultValue\":\"'+options.defaultValue+'\",\"showmore\" : \"false\",\"onSelect\":'+name[1]+'});return;\'>Show More</a></li>');
            activateDropDown(options.element);
        }else{
	    $('#'+options.element+' ul li:nth-child(5)').append("<li style='border-bottom:1px solid #cccccc;'></li>");
            $('#'+options.element+' ul li.showmore').remove();
            addScrollingInDd(options.element);
        }
    }
}

if(asgv.userData == false)
{
	asgv.store = new IMStore();
	getGidVidUserData();
}

function Suggester(options)
{
	try
	{
		if(!options)
			return;

		// set default values

		// suggestions will be displayed only after these many characters
		if(!options.minStringLengthToDisplaySuggestion)
			options.minStringLengthToDisplaySuggestion = 2;

		// suggestions will be displayed only after these many characters
		if(typeof(options.recentData) === 'undefined')
			options.recentData = true;

		// suggestions will be fetched and cached after these many characters are typed
		if(!options.minStringLengthToFetchSuggestion)
			options.minStringLengthToFetchSuggestion = 0;

		// number of suggestions to display
		if(!options.rowsToDisplay)
			options.rowsToDisplay = 5;

		// number of suggestions to fetch and cache
		if(!options.suggestionsToFetch)
			options.suggestionsToFetch = 25;

		if(!options.classPlaceholder)
			options.classPlaceholder = "ui-placeholder-input";

		// number of maximum characters which will be generating an http reuqest for more suggestions
		if(!options.maxCharForSuggestionRequest)
			options.maxCharForSuggestionRequest = 29;

		// options for highlighting - 'reverse', 'normal', 'none'
		if(typeof(options.highlight) === 'undefined')
			options.highlight = 'normal';

		// options to focus on box when user start typing
		if(typeof(options.defaultBox) === 'undefined')
			options.defaultBox = false;

		// country is searched always from start of the country name
		if((typeof(options.type) != 'undefined') && options.type.toLowerCase() === 'country')
			options.method = 'beginString';

		if((typeof(options.type) != 'undefined') && options.type.toLowerCase() === 'isd')
		{
			options.minStringLengthToDisplaySuggestion = 0;
			options.suggestionsToFetch = 999;
			options.iconHeight = asgv.isd.iconHeight;
            if(typeof(options.showmore) === 'undefined')
            options.showmore = 'true';
		}
		// city match will always fuzzy if not defined, add country 
		if((typeof(options.match) === 'undefined') && (typeof(options.type) == 'undefined') || (options.type.toLowerCase() === 'city' || options.type.toLowerCase().indexOf("product") > -1))
			options.match = 'fuzzy';

		if(typeof(options.match) === 'undefined')
			options.match = "exact";

		if(typeof(options.type) === 'undefined')
			options.type = asgv.type;
	
        if(typeof(options.type) != 'undefined' && options.type === asgv.type && window.location.href.indexOf("m.indiamart") < 0 && window.location.href.indexOf("hellotrade") < 0){
			options.fields = "img,cat1,catid1,cat2,catid2,cat3,catid3";
        }
        if(typeof(options.getQuotation) === 'undefined')
			options.getQuotation = true;

		this.recent = function(type , q, key)
		{
			//product end backward compatibility code(to be removed)
			var storeType = {searches:{limit:50}, cities:{limit:10}, mcats:{limit:50}, mcatnames:{limit:50}, cats:{limit:10}, groups:{limit:10}, sites:{limit:25}, latLong:{limit:10}};
			if(typeof(q) !== 'undefined' && typeof(type) === 'string')
			{	
				var ob = {}; ob[type] = q;
				type = ob;
			}				
			if(typeof(type) === 'object')
			{
				var query = {};
				$.each(type,function(dType,values){
					if(dType === "cities")	asgv.reqBoosters = 'prod_city:'+values;
					if(values !== ""){
						query[dType]=values.toLowerCase();
						mySuggester.getSetRecent(dType, values, key, storeType);
					}
				});
				if(Object.keys(query).length > 0)
				{
					query.vid = asgv.vid; query.gid = asgv.gid;query.type = "recent";query.dName = window.location.host;
					sendUserData(asgv.domain+"suggest/suggest_pdm.php", query);
				}
			}
			else if(!q)
				return mySuggester.getSetRecent(type , q, key, storeType);			
		};

		this.getSetRecent = function(type , q, key, storeType)
		{
			if(!(type in storeType) && typeof(key) == "undefined")
			{
				q = type;
				type = 'searches';
			}
			if(typeof(key) == "undefined")	key = "ims";
			var rs = asgv.store.getData(key,type) || [];
			var excludeValues = ["0", "-1", undefined, "undefined", null, "null"];
			rs = $(rs).not(excludeValues).get();
			var data = rs.map(function(ele, index, val){ return ele.toLowerCase();});
			// remove from array if "q" already exists
			var i = Suggester.getArrayCaseInsensitiveMatch(q,rs);
			if(i != -1)
				rs.splice(i,1);
			if(q){
				q = q.toLowerCase();
				asgv.store.setData(key,type,Suggester.getTopN([q].concat(rs), storeType[type].limit));
            			} else{
				return data;
            		}
		};
		
		// setting cursor position in textbox
		this.setCursor = function(el,st,end)
		{
			if(el.setSelectionRange) {
				el.focus();
				el.setSelectionRange(st,end);
			} else {
				if(el.createTextRange) {
					range=el.createTextRange();
					range.collapse(true);
					range.moveEnd('character',end);
					range.moveStart('character',st);
					range.select();
				}
			}
		}

		var boxid = '#' + options.element;

		// check if placeholder is supported
		var isPlaceholderSupported = function(){
			var input = document.createElement("input");
			return ('placeholder' in input);
			return false;
		}
		this.placeholderSupport = isPlaceholderSupported();
                //alert(this.placeholderSupport);
		this.changePlaceholder = function(placeholderMsg)
		{
			$(boxid).attr('placeholder', placeholderMsg);
			if(!this.placeholderSupport)
			{
				// If there is no placeholder support,
				// set the value of the input field to the placeholder value
				if(!$(boxid).val() || $(boxid).hasClass(options.classPlaceholder))
				{  
					$(boxid).val($(boxid).attr('placeholder')).addClass(options.classPlaceholder);
					if($(boxid).is(":focus") === true)
						this.setCursor(document.getElementById($(boxid).attr('id')),0,0);
				}
				var _suggEle = this;
				$(boxid).click(function()
				{    
					if($(this).val() == $(boxid).attr('placeholder'))
					_suggEle.setCursor(document.getElementById($(boxid).attr('id')),0,0);
				}); 
				$(boxid).keydown(function()
				{ 
					if ($(this).val() == $(boxid).attr('placeholder'))
					$(this).val('').removeClass(options.classPlaceholder);
				});
				$(boxid).on('paste',function()
				{
					if($(this).val() === $(boxid).attr('placeholder'))
					$(this).val('').removeClass(options.classPlaceholder);   
				});				
				$(boxid).focus(function()
				{ 	
					if((!$(boxid).val()) || ($(this).val() == $(boxid).attr('placeholder')))
					_suggEle.setCursor(document.getElementById($(boxid).attr('id')),0,0);
				});
				$(boxid).blur(function(event)
				{  
					if($(this).val() == '')
					$(this).val($(boxid).attr('placeholder')).addClass(options.classPlaceholder);
				});
			}
			else
			{ 
				$(boxid).attr('placeholder', placeholderMsg);
			}
		}

		// change the placeholder text
		this.changePlaceholder(options.placeholder);

		var mySuggester = this;
		var term = '';

		// flag variables to track time to display
		mySuggester.keyDownRecorded =false;
		mySuggester.displayRecorded = false;
		mySuggester.serverDisplayRecorded=false;
		mySuggester.preFilledTerm='';
		mySuggester.selectionRecorded=false;
		mySuggester.displayListLength=0;
		mySuggester.previousTerm='';
		mySuggester.pasteFired=false;

		this.searchBoxVal = function(boxid){
			var v = $(boxid).val();
			v = (typeof v === 'string' && v !== '')? ((v.indexOf(" in ") > -1) || (v.indexOf(" from ") > -1)) ? cleanString(v,1): cleanString(v,1):"";
			$(boxid).autocomplete( "search", v);
		};
	

       //This function will start auot search
        this.autoSearch = function(boxid){
            //Bind Search box with click event to return previous search
            $(boxid).bind("focus", function () {
                if(options.type === asgv.type)
                	mySuggester.searchBoxVal(boxid);
            });
            $(boxid).bind("click", function () {
                setTimeout(function () {
                    mySuggester.searchBoxVal(boxid);
                },200);
            });
            $(boxid).bind("paste", function () {
                setTimeout(function () {
                    mySuggester.pasteFired = true;
                    mySuggester.searchBoxVal(boxid);
                });
                setTimeout(function () {
                    mySuggester.pasteFired = false;
                },2000);
            });
		$(boxid).ready(function () {
			setTimeout(function () {
				$(boxid).attr( "autocomplete", 'off');
			},1500);
                });
        };
        this.autoSearch(boxid);
        // Set a default box for focus
        this.isDefaultBox = function(defaultBox){
            if(defaultBox == true){
                $(document).keydown(function(ev) {
                    var k=ev.which; var e=document.activeElement.name;
                    if ((e=== undefined || e==='') && ((k>= 65 && k<=90) && (!ev.ctrlKey))) {
                        var v = $(boxid).val();
                        $(boxid).focus();
                        v = (typeof v === 'string' && v !== '')? $.trim(v)+' ':v;
                        $(boxid).val(v);
                    }
                });
             }
        }
        //Function calling commented to avoid default box functionality
        //this.isDefaultBox(options.defaultBox);

	this.onExplicitChangeSuccess = function (data, options, mySuggester, request, response)
        {
            var ui;
           $.each(data, function(dType,values){
               if(data && data[dType]._list !== undefined)
               {
                   ui = {"item":data[dType]._list[0]};
                   return;
               } else if(data && data[dType][0] !== undefined) {
                   ui = {"item":data[dType][0]};
                   return;
               } else{
                   ui = {"item":""};
               }
           });
           options.onExplicitChange.call(this, request.event, ui);
        }

	this.onEnd = function()
	{
		var term = $(boxid).val();
		var setVal = (document.cookie.indexOf("xnHist=") > -1 && document.cookie.indexOf("ss%3D") > -1) ? document.cookie.substring(document.cookie.indexOf("xnHist="),document.cookie.indexOf("ss%3D")+5) : ((document.cookie.indexOf("xnHist=") > -1) ? (document.cookie.substring(document.cookie.indexOf("xnHist="),document.cookie.indexOf(";",document.cookie.indexOf("xnHist=")))+"%3Dss%7C") : ("xnHist=ss%7C"));
		if(mySuggester.displayListLength === 0){
			setVal = setVal + "notDisplayed";
			eventTrack('Auto-Suggest', options.type+'-suggestion-not-displayed-ms-'+(Math.ceil((new Date().getTime()-mySuggester.firstKeyDownTime)/500)*500)+"-paste-"+mySuggester.pasteFired, term, 0);
		}else if(mySuggester.displayListLength > 0 && mySuggester.selectionRecorded === false){
			setVal = setVal + "notSelected";
			eventTrack('Auto-Suggest', options.type+'-suggestion-not-selected-ms-'+(Math.ceil((new Date().getTime()-mySuggester.firstKeyDownTime)/500)*500)+"-paste-"+mySuggester.pasteFired, term, 0);
		}else{
			setVal = setVal + "selected";
		}
		var expires = new Date();expires.setTime(expires.getTime() + 24 * 60 * 60 * 180 * 1000);
		document.cookie = setVal + ";expires=" + expires.toGMTString() + ";" + "domain=.indiamart.com;path=/;";
	}
	
	//This function is used to request the data
	this.requestData = function(options, mySuggester, request, response)
	{
		$.ajax({
			url: options.url || asgv.domain+"suggest/suggest.php",
			dataType: "jsonp",
			data:
			{
				q: request.searchTerm || request.term,
				limit: request.limit || options.suggestionsToFetch,
				type: request.type || options.type,
				fields: request.fields || options.fields,
				filters: request.filters || options.filters,
				method: request.method || options.method,
				display_fields: request.displayFields || options.displayFields,
				display_separator: request.displaySeparator || options.displaySeparator,
				match: request.match || options.match,
                p:18,
				boosters: asgv.reqBoosters
			},
			success: function( data )
			{
				if( request.cache != null)
				{
					request.sugg = new Suggestions();
					var type = request.sugg.DIRECT;
					// if fetched rows were less than max possible, it means sggestions are exhausted
                     var dataCount = {};
                     dataCount.valuesCount = 0;
                     dataCount.dTypeCount  = 0;
                     if(request.type === asgv.type){
                         var mcatData = data.mcat; delete data.mcat;data.mcat = mcatData;
                     }
			$.each(data, function(dType,values){
				if(values.length < options.suggestionsToFetch && type != request.sugg.FILTERED){
					type = request.sugg.COMPLETE;
				}else if(values.length === options.suggestionsToFetch){
					type = request.sugg.FILTERED;
					return false; 
				}
			});
			$.each(data, function(dType,values){
				if(typeof(request.cache._cache[cleanString(request.term).substr(0, cleanString(request.term).length - 1)]) != "undefined")
				{
					var temp = new Object;
					if(options.match == "fuzzy")
						data[dType] = Suggester.getTopN(previouskeyCache(cleanString(request.term,1), request.cache._cache[cleanString(request.term).substr(0, cleanString(request.term).length - 1)]._list[dType], dType, temp, options)[dType].concat(data[dType]).concat(temp["spck"+dType]));
				}
			});      

					request.sugg.list(data, type);
					if(request.type == "city")
						request.cache.cache(cleanString(request.term), options, request.sugg);
					else
						request.cache.cache(cleanString(request.searchTerm), options, request.sugg);
				}
				if(typeof(request.onSuccess) === 'function')
				request.onSuccess(data, options, mySuggester, request, response);
			},
			jsonpCallback: request.callbackstr + request.searchTerm.replace(/[^a-zA-Z0-9]+/g, ' ').replace(/\s+/g,''),
			cache: true
		});
	}

	//This function will render the data
	this.renderData = function(data, options, mySuggester, request, response)
	{
		var term = request.term.trim(), searchTerm= request.searchTerm;		
		if(((term.length) >= options.minStringLengthToDisplaySuggestion) && (request.type == "city" || cleanString(term) == cleanString(searchTerm)))
		{
			var displayList = [], suggestionType = (options.type) ? options.type : 'keyword';
			if((options.type == "city" || request.type == "city") && options.recentData ==  true)
			{
				displayList = Suggester.match(term, mySuggester.recent('cities'), options.method);
				// format the list, i.e. [{label:"x", value:"y"}]
				if(options.type != "city")
				{
					displayList = Suggester.match(searchTerm, mySuggester.recent('cities'), options.method);
					for (var i in displayList)
					{
						displayList[i] = term.substring(0,(term.length-searchTerm.length)) + displayList[i].replace(/(^| )(\w)/g,function(x){ return x.toUpperCase();});
					}
				}
				$.each(displayList,function(i,v){displayList[i] = {label:v,value:v,cls:"rcnt"}});
			}
			else if((options.type == asgv.type) && (options.recentData == true))
			{
				displayList = Suggester.getTopN(Suggester.match(term.trim(), mySuggester.recent('searches'), options.method),3).concat(Suggester.match(term.trim(), mySuggester.recent('mcatnames'), options.method));
				// check if source is formatted. i.e. [{label:"Gurgaon", value:"Gurgaon >> Haryana"}]
				$.each(displayList,function(i,v){displayList[i] = {label:v,value:v,cls:"rcnt"}});
				$.each(Suggester.match(term.trim(), asgv.topSearches, options.method), function (i,v){
					displayList.push({label:v,value:v,cls:"topsearches"});
				});
			}
			if( (typeof(request.sugg._list["city"]) != 'undefined') && (request.sugg._list["city"].length > 0) && (cleanString(term) != searchTerm))
				mySuggester.changeList(request, request.addBeforCity, request.sugg._list["city"]);
			displayList = mySuggester.createDpList(data, Suggester.getTopN(displayList));
			response(Suggester.remDuplicateImg(Suggester.getTopN(displayList,(options.type === asgv.type && window.location.href.indexOf("m.indiamart") < 0)?options.rowsToDisplay + 2: options.rowsToDisplay)));
			mySuggester.displayListLength = displayList.length;
			// event tracking
			if(displayList.length > 0)
			{
				var myTime=(new Date()).getTime()-mySuggester.firstKeyDownTime;
				if(!mySuggester.displayRecorded)
				{
					eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-ms-'+myTime, myTime);
					eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-char-'+term.length, 0);
					mySuggester.displayRecorded = true;
				}
				if(!mySuggester.serverDisplayRecorded)
				{
					eventTrack('Auto-Suggest', suggestionType+'-appearance-speed-server', 'after-ms-'+myTime, myTime);	
					mySuggester.serverDisplayRecorded = true;
				}
			}
			if(options.type == asgv.type)
				 mySuggester.searchBoxVal(boxid);
		}		
	}

	//This function will change the displayList
	this.changeList = function(request, toadd, list)
	{	
		var tempDpList = list;
		for(var i in tempDpList)
		{
			tempDpList[i].label = toadd + tempDpList[i].label;
			tempDpList[i].value = toadd + tempDpList[i].value;
		}
	}

	//this function will create the displayList
	this.createDpList = function(data, displayList)
	{
	$.each(data,function(dType, values){
		if(dType != "mcat"){
			var product = Suggester.getTopN(values, 125);
			if(dType == "product"){
				for(var index = displayList.length-1; index > -1; index--){
				$.each(product,function(item,val){ 
					if(typeof(val) !== "undefined" && displayList[index].label.toLowerCase() == val.label && displayList[index].cls == "rcnt")
						{
							product.splice(0,0,product.splice(item,1)[0]);
							displayList.splice(index,1);
							return(false);
						}
				});}
                if(product.length < 2){
                    displayList = product.concat(displayList);
                }
                else{
                    $.each(displayList,function(item,val){ 
                        product.splice(2+item,0,val);
                    });
                    displayList = product;
                }
			}
			if(dType !== "mcat" && dType !== "product")
				displayList = Suggester.getTopN(displayList.concat(product),7);}
		else{
			var mcat = (displayList.length > 5)? Suggester.getTopN(values, 2) : Suggester.getTopN(values, 7-displayList.length+1);
			for(var index in mcat){
				$.each(displayList,function(item,val){ 
					if(typeof(val) !== "undefined" && typeof(val.cls) !== "undefined" && mcat[index].label == val.label)
						displayList.splice(item,1);
				});}
			displayList = Suggester.getTopN((Suggester.getTopN(displayList,((mcat.length < 2) ? (options.rowsToDisplay + (2 - mcat.length)) : 5))).concat(mcat),7);
			}
		});
	return displayList;
	}

		$(function()
		{
				var cache = new SuggestionCache({match:options.match});
				if(options.type === 'isd')
				{
						var request = {}; request.term = ""; request.limit= 500;
						request.type = "isd";// request.event = event;
						request.callbackstr = 'Suggester_callback_'+options.method;
						request.searchTerm = ""; request.cache = cache; request.onSuccess = renderIsd; 
                        var existDefaultIso = 'false';
                        $.each(asgv.data.isd, function(i,v){
                            if(v.data.iso === options.defaultValue)
                                existDefaultIso = 'true';
                        });
                        if(typeof(options.showmore) != 'undefined' && options.showmore === 'true' && existDefaultIso === 'true' ){
                            renderIsd(asgv.data, options, mySuggester, request, "");
                        }else{
                            mySuggester.requestData(options, mySuggester, request, "");
                        }
                        return;
				}
				var _ac = $(boxid).autocomplete({
				delay: 10,
				source: function( request, response )
				{
					if(asgv.blJsLoaded === false){
						getQ();
					}
					request.term = request.term.toLowerCase(); request.cache = cache;
					term = request.term; request.callbackstr = "Suggester_callback_";
					request.searchTerm = cleanString(term,1).trim(); 
                    request.onSuccess = mySuggester.renderData; 
					var suggestionType = (options.type) ? options.type : 'keyword';
					if (!mySuggester.keyDownRecorded)
					{
						eventTrack('Auto-Suggest', suggestionType+'-keydown', 'first-keydown', 1);
						mySuggester.firstKeyDownTime = new Date().getTime();
						mySuggester.preFilledTerm=term;
						mySuggester.keyDownRecorded=true;
					}
					var trackTermLength = 3;
					if(options.type == "city") trackTermLength = 1;
					if(term.length == trackTermLength) var time1 = new Date().getTime();
					// keep word count in search term (assumption: words are seperated by white spaces)
					mySuggester.termWords = (term.match(/\s+/g)||[]).length; 
					var filtered = options.source;
					// if source is provided, use it
					if(filtered && term.length >= options.minStringLengthToDisplaySuggestion)
					{
						// if we have a function to check for match/non-match, use it
						if(options.finder)
						{
							filtered = options.finder(filtered, term);
						}
						else
						{
							term = cleanString(request.term);
							// check if source is formatted. i.e. [{label:"Gurgaon", value:"Gurgaon >> Haryana"}]
							$.each(filtered,function(i,v){if(typeof(v) === "string"){filtered[i] = {label:v,value:v};}});

							var patt;
							if(options.method && options.method.toString().toLowerCase() == "beginstring")
								patt = new RegExp("^"+term,"i");
							else
								patt = new RegExp("\\b"+term,"i");
							filtered = $.grep(filtered, function(ele, index){ var label=cleanString(ele.label); return patt.test(label)});
						}
						$.each(filtered,function(i,v){if(typeof(v) === "string"){filtered[i] = {label:v,value:v};}});
						response(Suggester.getTopN(filtered,options.rowsToDisplay));
						//Event Tracking for Display Suggestion after First Key Down from local data
						if(!mySuggester.displayRecorded)
						{
						var myTime=(new Date()).getTime()-mySuggester.firstKeyDownTime;
						var charExceptPrefilled = (term.length === mySuggester.preFilledTerm.length && term === mySuggester.preFilledTerm) ? 0 : term.length;
						eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-ms-'+myTime, myTime);
						eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-char-'+charExceptPrefilled, charExceptPrefilled);
						mySuggester.displayRecorded = true;
						}
					}
					else
					{
						// Sending term with cleanup 
						term = cleanString(term,1);
						var termSugg;
						request.addPartialTerm = '';
						termSugg = request.cache.cache(term, options);
                        
						term = ((term.indexOf(" in ") > -1) || (term.indexOf(" from ") > -1)) ? term :cleanString(term);
						var displayList = [];
						// check for recent keyword/city searches
						if((options.type == asgv.type) && (options.recentData == true))
						{
							displayList = Suggester.getTopN(Suggester.match(term.trim(), mySuggester.recent('searches'), options.method),3).concat(Suggester.match(term.trim(), mySuggester.recent('mcatnames'), options.method));
							// format the list, i.e. [{label:"x", value:"y"}]
							$.each(displayList,function(i,v){displayList[i] = {label:v,value:v,cls:"rcnt"}});
							$.each(Suggester.match(term.trim(), asgv.topSearches, options.method), function (i,v){
								displayList.push({label:v,value:v,cls:"topsearches"}); });
						}
						else if(options.type == "city"  && options.recentData ==  true)
						{
							displayList = Suggester.match(term, mySuggester.recent('cities'), options.method);
							// format the list, i.e. [{label:"x", value:"y"}]
							$.each(displayList,function(i,v){displayList[i] = {label:v,value:v,cls:"rcnt"}});
						}
						if(term.length >= options.minStringLengthToDisplaySuggestion)
						{
							// add to display list if cache found
							if(termSugg && term.trim() == cleanString(request.searchTerm)){
							displayList = mySuggester.createDpList(termSugg.list(), Suggester.getTopN(displayList));
                            }else if(termSugg && request.searchTerm.indexOf(" ") > -1) {
                                $.each(termSugg.list(),function(i,v){
								    $.each(v,function(index,subList) {
                                        if(request.addPartialTerm.substring(request.addPartialTerm.trim().lastIndexOf(" ")).trim() == subList.value.substring(0,subList.value.indexOf(" ")))
                                        {
                                            var lbl  = request.addPartialTerm.substring(0,request.addPartialTerm.trim().lastIndexOf(" ")+1) + subList.value;
                                            displayList.push({label:lbl,value:lbl,cls:"partial"});
                                        }
                                        else
                                        {
                                            var lbl  = request.addPartialTerm + subList.value;
                                            displayList.push({label:lbl,value:lbl,cls:"partial"});
                                        }
								    });
                                });
							}	
						}

						// Track "in" keyword in Search string and add recent cities in suggestion
						if(((term.indexOf(" in ") > -1) || (term.indexOf(" from ") > -1)) && (options.type == asgv.type) && (mySuggester.displayRecorded == true))
						{ 
							request.addBeforCity = (term.indexOf(" in ") > -1) ? term.substring(0,term.indexOf(" in ")+4) : term.substring(0,term.indexOf(" from ")+6);
							request.searchTerm = (term.indexOf(" in ") > -1) ? term.substring(term.indexOf(" in ")+4).trim() : term.substring(term.indexOf(" from ")+6).trim();
							displayList = Suggester.match(request.searchTerm, mySuggester.recent('cities'), options.method);
							for(var i in displayList)
							{
								displayList[i] = request.addBeforCity + displayList[i].replace(/(^| )(\w)/g,function(x){ return x.toUpperCase();});
							}
							$.each(displayList,function(i,v){displayList[i] = {label:v,value:v}});
							if(termSugg && typeof(termSugg.list()['city']) != 'undefined' && termSugg.list()['city'].length > 0)
								displayList = displayList.concat(termSugg.list()['city']);
							
						}
						// display
                        response(Suggester.remDuplicateImg(Suggester.getTopN(displayList,(options.type === asgv.type && window.location.href.indexOf("m.indiamart") < 0)?options.rowsToDisplay + 2: options.rowsToDisplay)));
						mySuggester.displayListLength = displayList.length;
												
						//Event Tracking for Display Suggestion after First Key Down from local data
						if(!mySuggester.displayRecorded && displayList.length > 0)
						{
							var myTime=(new Date()).getTime()-mySuggester.firstKeyDownTime;
                            var charExceptPrefilled = (term.length === mySuggester.preFilledTerm.length && term === mySuggester.preFilledTerm) ? 0 : term.length;
							eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-ms-'+myTime, myTime);
							eventTrack('Auto-Suggest', suggestionType+'-appearance-speed', 'after-char-'+charExceptPrefilled, charExceptPrefilled);
							mySuggester.displayRecorded = true;
						}

						//Suggestions of City names with Search term
						if((typeof(request.addBeforCity) != "undefined") && (request.searchTerm != "" && request.searchTerm.length < 5) && typeof(request.cache._cache[cleanString(request.term)]) === 'undefined'
				&& (options.type == asgv.type) && (mySuggester.displayRecorded == true) 
                                && (cleanString(mySuggester.previousTerm.trim()) != cleanString(term.trim())) 
                                && (termSugg == null || termSugg.type == termSugg.FILTERED  || (typeof(termSugg.list()['product']) != 'undefined' && termSugg.list()['product'].length == 0)|| (typeof(termSugg.list()['city']) != 'undefined' && termSugg.list()['city'].length == 0)))
						{

							request.type = "city"; request.callbackstr = "City_Names_for_";
							mySuggester.previousTerm = request.term;
							mySuggester.requestData(options, mySuggester, request, response);
						}

						// return if no more suggestion are expected
						if(termSugg && (
							termSugg.type == termSugg.DIRECT
							|| termSugg.type == termSugg.COMPLETE)
						)
							return;

                        if(request.searchTerm !== '' && typeof(request.cache._cache[request.searchTerm]) === 'undefined' && (!termSugg || (termSugg.type == termSugg.FILTERED)) && (request.searchTerm.length <= options.maxCharForSuggestionRequest) && mySuggester.previousTerm != request.searchTerm && typeof(request.addBeforCity) === 'undefined')
                        {
                            mySuggester.previousTerm = request.searchTerm.trim();
                            if(request.searchTerm.length == 1)	request.limit = 125;
                            mySuggester.requestData(options, mySuggester, request, response);
                        }

					}
				},
				minLength: options.minStringLengthToFetchSuggestion,
				select:function(event, ui)
				{
					var suggestionType = (options.type) ? options.type : 'keyword';
					suggestionType += (typeof(ui.item.cls) === 'undefined') ? '-other' : ("-"+ui.item.cls);
					var keyDownToSelection =Math.ceil((new Date().getTime()-mySuggester.firstKeyDownTime)/500)*500;
					eventTrack('Auto-Suggest', suggestionType+'-keydown-to-selection-time', '-ms-'+keyDownToSelection, (new Date().getTime()-mySuggester.firstKeyDownTime));
					mySuggester.selectionRecorded = true;
					if(term.length === mySuggester.preFilledTerm.length && term === mySuggester.preFilledTerm ){
                        (asgv.getQ === true) ?  eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-getQuote-after-char-0-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos) : ((typeof(ui.item.data) === "object" && typeof(ui.item.data.img) != "undefined") ? eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-img-after-char-0-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos) : eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-after-char-0-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos));    
                    } 
                    else{
                        (asgv.getQ === true) ?  eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-getQuote-after-char-'+term.length+'-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos) :((typeof(ui.item.data) === "object" && typeof(ui.item.data.img) != "undefined") ? eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-img-after-char-'+term.length+'-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos) : eventTrack('Auto-Suggest', 'selected-'+suggestionType+'-after-char-'+term.length+'-pos-'+ui.item.pos, term+' - '+ui.item.value, ui.item.pos));
                    }
					$(boxid).val(ui.item.value);
					this.onSelectFired = true;
					if(options.onSelect && asgv.getQ != true)
						options.onSelect.call(this, event, ui);
					else{
						asgv.getQ = false;
						(typeof(openOnClickBLForm) !== 'function') ? $('#T9_q_buytitle').val(ui.item.value) : openOnClickBLForm(ui.item.value,"Tell us your Buy Requirement");
					}
				},
				change:function(event ,ui)
				{ 	
					var text = cleanString($(this).val());
					if(!ui.item)
					{
					       // if the user moves out of the text box without selecting from the auto-suggest drop down
					       // fire a onBlur event with status (whether exists in options or not) of the text typed

					       if(options.onExplicitChange)
					       {
						       var exactData;
						       // find the result of exact match in cache
						       // if cache does not serve the purpose send an AJAX request
						       // TODO: check the results in cache first
						       exactData == cache.cache(text, options);
						       if(!exactData && text != "")
						       {
								var request = {}; request.searchTerm = text;  
								request.match = "exact"; request.callbackstr= "Suggester_callback_";
								request.event = event; request.method = "exact"; request.limit = 1;
								request.onSuccess = mySuggester.onExplicitChangeSuccess;
								mySuggester.requestData (options, mySuggester, request, "")
						       }
					       }
					} 
				}, 
				open: options.onOpen,
				close: options.onClose
			}).data( "autocomplete" );
			if(options.autocompleteClass)
				$(_ac.menu.element[0]).addClass(options.autocompleteClass);
			_ac._renderItem = function( ul, item )
			{
				var hlTerm = cleanString(this.term,1).trim();
				var rhlTerm = hlTerm.replace(/ /g,"[^a-zA-Z0-9]+"); // Used for globally replacing with check SpecialCharacter 
				var patt=new RegExp("\\b("+rhlTerm+")","ig");
				var label = item.label || item.value;
				var cls = item.cls || "";
				if(options.highlight === 'normal')
				{
					label = '<b>' + label.replace(patt, "</b>$1<b>") + '</b>';
				}else if( options.highlight === 'reverse'){
					label = label.replace(patt, "<b>$1</b>") ;
				}
				if(cls)
					cls = ' class="'+cls+'"';

				var ob =  $( "<li"+cls+"></li>" );
				ob.data( "item.autocomplete", item );
				if(typeof(item.data) == "undefined" || (typeof(item.data.cat) == "undefined" && typeof(item.data.img) == "undefined" )){
					ob.append( "<a id=\"anchor\"> " + label + "</a>" );
					if(options.type == asgv.type && options.getQuotation === true && asgv.blJsLoaded === true && item.label.length <= asgv.getQAllowLen)
						ob.append( "<a class=\"flng-l\" onclick=\"getQ(true);\"><span class=\"blink\">"+String.fromCharCode(187)+"</span><span> Get Quotes</span></a>" );}
				if(options.type == asgv.type && typeof(item.data) != "undefined" && (typeof(item.data.cat) != "undefined")){
						ob.append( "<a class=\"ui-corner-all\" tabindex=\"-1\" style=\"padding-left:20px\"> in<span class=\"scat\">"+item.data[Object.keys(item.data)[0]]+"</span></a>");
						ob.appendTo( ul );
				}
				if(options.type == asgv.type && typeof(item.data) != "undefined" && typeof(item.data.img) != "undefined" && item.data.img != '' && window.location.href.indexOf("m.indiamart") < 0){
					ob.append( "<a> <div class=\"product-img\"><span class=\"image\"><img src=\""+item.data.img+"\"></span><span class=\"product-title\">"+label);
					if(options.type == asgv.type && options.getQuotation === true 
					&& asgv.blJsLoaded === true && item.label.length <= asgv.getQAllowLen-5){
						ob.append( "<a class=\"flng-l pro-q\" onclick=\"getQ(true);\"><span class=\"blink\">"+String.fromCharCode(187)+"</span><span> Get Quotes</span></a>" );
				}
				if(typeof(item.data) != "undefined" && typeof(item.data.price) != "undefined" && item.data.price != '' ){
						ob.append("<span class=\"price\">"+"Rs. "+item.price+"</span>"); 
					}
					ob.append("</span></div></a>");
					ob.appendTo( ul );
					$('.product-img').first().parent().parent().addClass("img-sep");
				}
				else if(typeof(item.data) == "undefined" || (typeof(item.data.cat) == "undefined" && typeof(item.data.img) == "undefined")){
					ob.appendTo( ul );
				}
				if(window.location.href.indexOf("trade") > 0){
					$('.ui-autocomplete li:nth-child(2) .flng-l').css('visibility','visible');
					$( "#search_string" ).keydown(function() {$('.ui-menu-item:nth-child(2) .flng-l').css('visibility','');});
					$( ".ui-autocomplete" ).mouseover(function() {$('.ui-menu-item:nth-child(2) .flng-l').css('visibility','');});
				}
				return ob;
			};
		});
	}
	catch(e)
	{
		// test comment #6 to check caching
	}
}

Suggester.match = function(term, list, method)
{
	if(!method)
		method = "beginword";
	var patt;
	if(method.toString().toLowerCase() == "beginstring")
		patt = new RegExp("^"+term,"i");
	else
		patt = new RegExp("\\b"+term,"i");
	return $.grep(list, function(ele, index){ var label=ele; return patt.test(label)});
};

/* get top "n" suggestions
this function works with two data types
1. for simple array of strings (numbers, etc.) it will simply return top N unique results
2. for the array of objects having label attribute (for display list), it only returns top N unique label elements,
   but also adds another attribute "pos" indicating the position of element in the display list
*/
Suggester.getTopN = function(list, n){
	var topList = [];
	var unique = {};
	var position = 1;
	for(var i = 0; i < list.length; i++)
	{
		var checklist = (typeof(list[i]) == "object") ? (/s$/.test(list[i].label)? list[i].label.toLowerCase().substring(0, list[i].label.length-1) :list[i].label.toLowerCase()) : list[i].toLowerCase();
		if(!unique[""+checklist] && (typeof(list[i].label) === 'undefined' || list[i].label.length < 35))
		{
			if(list[i].label)
				list[i]["pos"] = position++;
			topList.push(list[i]);
		}
		unique[""+checklist]=1;
		if(topList.length >= n) break;
	}
	return topList;
}
//this will remove the alternate images from the suggestions
Suggester.remDuplicateImg = function(list){
	var temList = JSON.parse(JSON.stringify(list));
	var topList = [];
	var unique  = {};
	var catCount = 0;
	var i = 0;
    for(i = temList.length-1; i >= 0; i--)
    {
        if(typeof(temList[i]) == "object" && typeof(temList[i].data) == "object" && typeof(temList[i].data.img) === "string"){
            var checklist = temList[i].data.img;
            if(unique[""+checklist])
            {               
                delete temList[i].data.img;
            }
            checklist = temList[i].data.img;
            unique[""+checklist]=1;
        }
    }
    	for(i = 0; i < temList.length; i++)
	{
		if(i < temList.length - 2)
			(typeof(temList[i].data) == "object" && typeof(temList[i].data.img) === "string") ? delete temList[i].data.img :temList[i];
		if(typeof(temList[i]) == "object" && typeof(temList[i].data) == "object" && typeof(temList[i].data.cat1) === "string" && catCount < 2){
			var j = 1;topList.push(temList[i]);topList[topList.length-1].pos = i+1;catCount++;
	    		for(j = 1; j <= 4; j++)
			{
				if( typeof(temList[i].data) == "object" && typeof(temList[i].data['cat'+j]) === "string"){
					var obj = {'label': temList[i].label,'value':temList[i].value, 'pos':i+1};
					obj.data={};
					obj['data']['cat']=temList[i].data['cat'+j];
					obj['data']['catid']=temList[i].data['catid'+j];	
					topList.push(obj);
				}else if(typeof(temList[i].data) == "object")
					delete topList[topList.length-j].data;
			}	        
		}else{
			topList.push(temList[i]); topList[topList.length-1].pos = i+1;
			if(typeof(topList[topList.length-1].data) == "object" && typeof(topList[topList.length-1].data.cat1) === "string" && i >= 2)
				delete topList[topList.length-1].data;
			}
	}
	return topList;
}
// get index position of matched element in the array (in case of non-match returns -1)
Suggester.getArrayCaseInsensitiveMatch = function (match,arr) {
	var returnValue = -1;
	if(typeof(match) !== "undefined"){
		match = cleanString(match);
		match = match.toLowerCase();
		$.each(arr, function(index, value) {
			value = cleanString(value);
			if (match == value.toLowerCase()) {
				returnValue = index;
				return returnValue;
			}
		});
	}
        return returnValue;
}

function IMStore() {
	var url = asgv.domain+'storage/store-v6.html';
	var frameId = 'storageFrame';
	this.url = document.URL;
	this.childURL = url;
	var message = {modId:"*",key:"*",data:"*",url:this.url};
	try {
		if(typeof(_IMStore_initialized) === "undefined") {
			_IMStore_initialized = true;
			var ifrm = document.createElement("IFRAME");
			ifrm.setAttribute("src", url);
			ifrm.style.visibility = "hidden";
			ifrm.setAttribute("id", frameId);
			ifrm.setAttribute("name", "storageFrame");
			ifrm.style.width = 0+"px";
			ifrm.style.height = 0+"px";
			$(document).ready(function(){
						document.body.appendChild(ifrm);
						$("#"+frameId).load(function(){
							IMStore.msgHandler = ifrm.contentWindow;
							IMStore.msgHandler.postMessage(message, url);
						});
					});
		}
	} catch(e){
	}
}

function sendUserData(url, query)
{
	$.ajax({
		url: url,
		dataType: "jsonp",
		async: true,
		data: query,
		cache: false,
		success: function(response)
		{
			if(query.storage == "ims")
			{
				asgv.store.setData("ss","pdmTime", new Date().getTime() / 1000);
				for( var i in (response[0].data))
				{
					if(response[0].data[i].length > 0)
					{	
						var pdmData = (typeof(asgv.store.getData("ims", i)) == "object") ? (asgv.store.getData("ims", i).concat(response[0].data[i])) : response[0].data[i];	
						asgv.store.setData("ims", i, pdmData.filter(function (item, pos) {return pdmData.indexOf(item) == pos}));
					}
				}
			}
		}
	});
}

function getGidVidUserData()
{
	if(asgv.userData == false){
		if((typeof(asgv.gid) == "undefined") && (document.cookie.indexOf(" ImeshVisitor") > -1) && (document.cookie.indexOf("glid%3D") > -1)){
		var name = "glid%3D";
		var offset = document.cookie.substring(document.cookie.indexOf(name) +7);
		asgv.gid = "g"+(offset.substring(0,offset.indexOf("%")));
		}
		if((typeof(asgv.vid) == "undefined") && (typeof(_gat) != "undefined")){
            asgv.vid = "v" + _gat._getTrackerByName()._visitCode();
        	}
		if(asgv.reqBoosters == "" && (document.cookie.indexOf(" ImeshVisitor") > -1) && (document.cookie.indexOf("ct%3D") > -1)){
			var cityName = "ct%3D";
			var offset = document.cookie.substring(document.cookie.indexOf(cityName) +5);
			if(offset.substring(0,offset.indexOf("%")) != "")
			{
				asgv.reqBoosters = 'prod_city:'+(offset.substring(0,offset.indexOf("%7"))).toLowerCase();
				var city = asgv.reqBoosters.substring(asgv.reqBoosters.indexOf("prod_city:")+10).toLowerCase().replace(/%20/g, " ").split();
				setTimeout(function () {
					((typeof(asgv.store.setData) != "undefined") && jQuery.inArray(city[0], asgv.store.getData("ims", "cities")) == -1) ? ((typeof(asgv.store.getData("ims", "cities")) === "undefined") ? asgv.store.setData("ims","cities", city): asgv.store.setData("ims","cities", city.concat(asgv.store.getData("ims", "cities")))) : "" ;
				},4000);
			}
		}
		if(asgv.userData == false && asgv.vid != undefined)
		{
			asgv.userData = true;	
			var pdmTime = ((typeof(asgv.store.getData) != "undefined") && asgv.store.getData("ss","pdmTime") != undefined) ? (((new Date().getTime() / 1000) - asgv.store.getData("ss","pdmTime")) > 3600) : true;
			if(pdmTime)
			{				
				var query = {}; query.storage = "ims"; query.vid = asgv.vid; query.gid = asgv.gid;
				sendUserData(asgv.domain+"suggest/suggest_pdm.php", query);
			}
		}	
	}
}

/* Core getter/setter functions to read/write from/on localStorage.
No other function is supposed to directly interact with localStorage.
All the cross browser functionality is also supposed to be done here
Modid and key must be in lower case
*/

/* getData receives modid and key. Returns the data stored against key for mentioned modid.
Return type could be anything and it depends on what we have stored against a particular modid, key combination.
If Storage is not supported or modId/key is not defined it will return null value
*/
IMStore.localStorage =  {};
IMStore.prototype.getData = function(modId, key)
{
	if(asgv.userData == false) getGidVidUserData();
	if(typeof(Storage) === "undefined") return null;
	if(typeof IMStore.localStorage === 'string')
        IMStore.localStorage = $.parseJSON(IMStore.localStorage);
        return $.parseJSON(IMStore.localStorage[modId.toLowerCase()]||'{}')[key.toLowerCase()];
};

IMStore.prototype.setData = function(modId,key,data)
{
	if(typeof(Storage) === "undefined") return null;
	var msg = {modId:modId,key:key,data:data,url:this.url};
	if(typeof(IMStore.msgHandler) != "undefined" && data[0] != "0" && data[0] != "undefined"){
		IMStore.msgHandler.postMessage(msg, this.childURL);
	}
};

// Receive message will call after storage response.
IMStore.receieveMessage = function(event)
{
	if(event.data){
		if(event.origin.match(/utils.imimg.com/g))
		IMStore.localStorage = event.data;
	}
}
 
if (window.addEventListener){
	addEventListener("message", IMStore.receieveMessage, false)
}else {
	attachEvent("onmessage", IMStore.receieveMessage)
}
$( "<style>.cls-city li.ui-menu-item a.ui-state-hover {padding:2px 0}.ui-menu {list-style:none;margin:0;display:block;float:left}.ui-autocomplete{position:absolute!important}.ui-menu .ui-menu-item { list-style: none; cursor: pointer; background: #fff; position: relative;font-family:arial; padding: 0px 5px !important;}.flng-l.pro-q { top: 13px; }.ui-menu .ui-menu-item a {text-decoration:none;font-size:14px;list-style:none;cursor:pointer;display:block;text-indent:5px;padding:5px 0;font-family:arial;}.ui-menu .ui-menu-item a:nth-child(1){color: #0C0F71!important;}.ui-menu .ui-menu-item a.ui-state-hover,.ui-menu .ui-menu-item a.ui-state-active {background:none repeat scroll 0 0 #efefef;color:#0C0F71;padding:5px 0}.ui-placeholder-input{color:#8d8d8d}.ui-widget-content{background:#fff;box-shadow:0px 5px 5px #cccccc;padding:0px !important;border:1px solid #0C0F71 !important; border-top:0;border-left-color:#0C0F71 !important;border-top-color: #FFFFFF !important}.ui-widget-content li:hover{background:#efefef}.ui-widget-content li a:hover{background:none!important;color:#0C0F71!important} </style>" ).appendTo( "head");
$("<style>.flng-l { z-index: 2; margin-right: 3px; font-size: 12px !important; font-weight: bold!important; visibility: hidden; color: #D0392D; position: absolute; right: 5px; top: 0; }.ui-menu .ui-menu-item  .ui-state-hover  .flng-l{visibility:visible;}.ui-menu .ui-menu-item a:nth-child(1).ui-state-hover, .ui-menu .ui-menu-item a:nth-child(1).ui-state-active {background: none repeat scroll 0 0 #efefef !important; color: #0C0F71 !important;}.ui-menu .ui-menu-item a:nth-child(2).ui-state-hover, .ui-menu .ui-menu-item a:nth-child(2).ui-state-active {background: none repeat scroll 0 0 #efefef !important;color: #D0392D !important;padding:3px 0 !important;}.ui-widget-content li {padding: 0 !important;}.ui-menu .ui-menu-item a.ui-state-hover.flng-l {visibility:visible;}.ui-menu .ui-menu-item a.ui-state-hover .blink, .ui-menu-item:nth-child(2) .flng-l .blink{ -webkit-animation-duration: 2s; animation-duration: 2s; -webkit-animation-fill-mode: both; animation-fill-mode: both;animation-iteration-count:infinite; -webkit-animation-iteration-count:infinite; -webkit-animation-name: as_shake;animation-name: as_shake;font-size:15px; display:inline-block; } @-webkit-keyframes as_shake { 0%, 100% {-webkit-transform: translateX(0);} 10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-3px);}     20%, 40%, 60%, 80% {-webkit-transform: translateX(3px);} } @keyframes as_shake {  0%, 100% {transform: translateX(0);}  10%, 30%, 50%, 70%, 90% {transform: translateX(-3px);}20%, 40%, 60%, 80% {transform: translateX(3px);} }.img-sep{ border-top: 2px solid #C1141A;}</style>" ).appendTo( "head");
$( "<style>.dropdown dd,.dropdown dt,.dropdown ul{margin:0px;padding:0px;}.dropdown dd{position:relative;}.dropdown dt a{display:inline-block;width:35px;height:20px;}.dropdown dt a span{cursor:pointer; display:block;}.dropdown dd ul{background:#FFFFFF none repeat scroll 0 0;display:none;list-style:none; padding:5px;position:absolute;left:0px;top:2px;width:auto;height:155px;overflow-y:scroll;border:1px solid #bdc7d8;}.dropdown dd ul li a {color:black;padding:5px;display:block;display:inline-block;cursor:pointer; font-size:14px;font-family: arial;text-decoration: none;}.dropdown dt a  span,.dropdown dd ul li span{width:16px;height:11px;background:url(\"//utils.imimg.com/imsrchui/imgs/country-v4.png\");}.dropdown dt a  span{margin:4px 3px;}.dropdown dd ul li span{display:inline-block;}.value{bottom: 5px;left: 2px;position: relative;font-size:14px;font-family: Arial;}.as_arrow{position: relative; top: 40%;margin-top:-19px;left:24px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent; border-top: 4px solid #555;}.as_arrow.up{border-top:none;border-bottom:4px solid #555;}.dropdown dd ul li.selected {background:#ddf}.dropdown dd ul li:hover {background: none repeat scroll 0 0 #efefef; color: #FFFFFF;cursor:pointer;}.dropdown dd rll li:nth-child\(3\){border-bottom: 1px solid #ccc;}.flng-l{float:right;visibility:hidden;  color: #D0392D !important;z-index: 2;  margin-right: 3px;}</style>" ).appendTo( "head");
$( "<style> .cat{color:#c94105;font:bold 12px Arial;padding-left:5px} .ui-title{border-top: 1px solid #ccc;margin-top: 12px;overflow: visible;height: 5px;padding:5px 5px 12px 10px;} .ui-title.hover-d{background-color: #fff !important;color: #333;} .ui-title .text {color:#585454;font:bold 13px Arial} .product-img {display:table;} .product-img .image{text-align: center;display:table-cell;width:50px;height:40px} .product-img .image img {max-height:40px;max-width:45px;margin:0px 0px -3px;} .product-img .product-title{display:table-cell;vertical-align:middle;color:#0C0F71;font-size:14px;} .product-img .price {color: #b00;display: block;font: bold 12px Arial;margin-top: 5px;} .scat{color:#c94105;font:bold 14px Arial;padding-left:5px}.showmore{text-align: right;} li.showmore a{color: #545454 !important;}</style>" ).appendTo( "head");
