(function(BaseModule,$,undefined){var modulesToRebind={};var rebindAllModules=function(rebindFunctions){for(var bindFunc in rebindFunctions){var callFunc=rebindFunctions[bindFunc];if(typeof callFunc==="function")
callFunc();}};BaseModule.addModuleRebindFunction=function(key,rebindFunction){modulesToRebind[key]=rebindFunction;}
BaseModule.rebindModules=function(){rebindAllModules(modulesToRebind);}
BaseModule.getQueryVariable=function(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0].toLowerCase()==variable.toLowerCase()){return pair[1];}}};$.fn.tabIndex=function(){return $(this).parent().find(this).index()-1;};$.fn.selectTabByID=function(tabID){$(this).tabs("option","active",$('#'+tabID).tabIndex()-1);};$.fn.selectTabByIndex=function(tabIndex){$(this).tabs("option","active",tabIndex);};BaseModule.NewWindow=function(sURL,sWindowName,iWidth,iHeight,sScrollYesNo,sResizableYesNo){var fLeftPosition,fTopPosition;var sSettings;fLeftPosition=(screen.width)?(screen.width-iWidth)/2:0;fTopPosition=(screen.height)?(screen.height-iHeight)/2:0;sSettings='height='+iHeight+',width='+iWidth+',top='+fTopPosition+',left='+fLeftPosition+',scrollbars='+sScrollYesNo+',resizable='+sResizableYesNo
window.open(sURL,sWindowName,sSettings)}
BaseModule.isEmpty=function(s){if(s==null||this.trim(s)==''){return true;}
else{return false;}}
BaseModule.isNotEmptyDate=function(val){return!this.isEmptyDate(val);}
BaseModule.isNotEmptyTime=function(val){return!this.isEmptyTime(val);}
BaseModule.isEmptyDate=function(val){var ctrl=document.getElementById(val.controltovalidate+'_txtDatePicker');return this.isEmptyField(ctrl);}
BaseModule.isEmptyTime=function(val){var ctrl_h=document.getElementById(val.controltovalidate+'_H');var ctrl_m=document.getElementById(val.controltovalidate+'_M');var ctrl_ampm=document.getElementById(val.controltovalidate+'_AMPM');if(ctrl_h.selectedIndex==0)return true;if(ctrl_m.selectedIndex==0)return true;if(ctrl_ampm.selectedIndex==0)return true;return false;}
BaseModule.isDate=function(Field){if(this.isEmptyField(Field))return true;var dtArray=Field.value.split('/');if(dtArray.length!=3)return false;return CheckDate(dtArray[0],dtArray[1],dtArray[2]);}
BaseModule.isValidDate=function(val){var ctrl=document.getElementById(val.controltovalidate+'_txtDatePicker');return BaseModule.isDate(ctrl);}
BaseModule.CheckDate=function(m,d,y){Months="31/!/28/!/31/!/30/!/31/!/30/!/31/!/31/!/30/!/31/!/30/!/31";MonthArray=Months.split("/!/");if(isNaN(parseInt(m,10)))return false;if(isNaN(parseInt(d,10)))return false;if(isNaN(parseInt(y,10)))return false;if(d!=parseInt(d,10))return false;if(m!=parseInt(m,10))return false;if(y!=parseInt(y,10))return false;d=parseInt(d,10);m=parseInt(m,10);y=parseInt(y,10);y=convertYear(y);if(y<=1900)return false;if(y>=2100)return false;if(m<1||m>12)return false;if(isLeapYear(y))MonthArray[1]=eval(eval(MonthArray[1])+1);if(d<1||MonthArray[m-1]<d)return false;return true;}
BaseModule.isValidTime=function(val){var ctrl_h=document.getElementById(val.controltovalidate+'_H');var ctrl_m=document.getElementById(val.controltovalidate+'_M');var ctrl_ampm=document.getElementById(val.controltovalidate+'_AMPM');if(ctrl_h.selectedIndex==0&&ctrl_m.selectedIndex==0&&ctrl_ampm.selectedIndex==0)return true;if(ctrl_h.selectedIndex==0)return false;if(ctrl_m.selectedIndex==0)return false;if(ctrl_ampm.selectedIndex==0)return false;return true;}
BaseModule.isNotEmptyCK=function(val){var ctrl=document.getElementById(val.controltovalidate);return!this.isEmptyCK(ctrl);}
BaseModule.isLeapYear=function(Year){if(Math.round(Year/4)==Year/4){if(Math.round(Year/100)==Year/100){if(Math.round(Year/400)==Year/400)
return true;else return false;}else return true;}
return false;}
BaseModule.getValue=function(Field){fieldType=Field.type;if(fieldType=="text"){return this.getTextValue(Field);}else if(fieldType=="hidden"){return this.getTextValue(Field);}else if(fieldType=="select-one"){return this.getListValue(Field);}else if(fieldType=="textarea"){return this.getTextValue(Field);}else if(fieldType=="file"){return this.getTextValue(Field);}else if(fieldType=="password"){return this.getTextValue(Field);}else if(fieldType=="checkbox"){return this.getCheckboxValue(Field);}else if(isNaN(fieldType)){return this.getRadioValue(Field);}else{return this.getTextValue(Field);}}
BaseModule.getListValue=function(Field){return Field[Field.selectedIndex].value;}
BaseModule.getTextValue=function(Field){return Field.value;}
BaseModule.getCheckboxValue=function(Field){if(Field.checked)return Field.value;return'';}
BaseModule.getRadioValue=function(Field){found=false;if(isNaN(Field.length)){return Field.value;}
for(var i=0;i<Field.length;i++){if(Field[i].checked){return Field[i].value;break;}}
return!found;}
BaseModule.trim=function(str){while(str.substring(0,1)==" "){str=str.substring(1,str.length);}
while(str.substring(str.length-1,str.length)==" "){str=str.substring(0,str.length-1);}
return str;}
BaseModule.isEmptyList=function(Field){return this.isEmpty(Field[Field.selectedIndex].value);}
BaseModule.isEmptyText=function(Field){return this.isEmpty(Field.value)}
BaseModule.isEmptyCheckbox=function(Field){return!Field.checked;}
BaseModule.isEmptyField=function(Field){fieldType=Field.type;if(fieldType=="text"){return this.isEmptyText(Field);}else if(fieldType=="hidden"){return this.isEmptyText(Field);}else if(fieldType=="file"){return this.isEmptyText(Field);}else if(fieldType=="select-one"){return this.isEmptyList(Field);}else if(fieldType=="textarea"){return this.isEmptyText(Field);}else if(fieldType=="password"){return this.isEmptyText(Field);}else if(fieldType=="checkbox"){return this.isEmptyCheckbox(Field)}else if(isNaN(fieldType)){return this.isEmptyRadio(Field)}else{return this.isEmptyText(Field);}}
BaseModule.isDefined=function(obj){return(typeof(obj)!=="undefined");}
BaseModule.isEmptyRadio=function(Field){found=false;if(isNaN(Field.length)){return!Field.checked;}
for(var i=0;i<Field.length;i++){if(Field[i].checked){found=true;break;}}
return!found;}
BaseModule.isNotEmptyFile=function(val){return!this.isEmptyFile(val);}
BaseModule.isEmptyFile=function(val){var oid,fid,cid,bDelChecked=false;oid=document.getElementById(val.controltovalidate+'_OLD');fid=document.getElementById(val.controltovalidate+'_FILE');cid=document.getElementById(val.controltovalidate+'_CHK');if(cid!=null){bDelChecked=cid.checked;}
return(this.isEmptyField(oid)&&this.isEmptyField(fid)||this.isEmptyField(fid)&&bDelChecked);}
BaseModule.isNotEmptyCheckBoxList=function(val){var parent=document.getElementById(val.controltovalidate);var checkboxes=parent.getElementsByTagName('INPUT');var checked=false;for(var i=0;i<checkboxes.length;i++){if(checkboxes[i].checked)return true;}
return false;}
BaseModule.isValidFile=function(val){if(this.isEmptyFile(val))return true;var fid=document.getElementById(val.controltovalidate+'_FILE');if(this.isEmptyField(fid))return true;var filename=getValue(fid);var lastDot=filename.lastIndexOf(".")
if(lastDot==-1)return false;var ext=filename.substring(lastDot+1,filename.length);filename=filename.substring(0,lastDot);if(filename=='')return false;var aExtensions=val.extensions.split(",");for(i=0;i<aExtensions.length;i++){if(aExtensions[i]==ext.toLowerCase())return true;}
return false;}
BaseModule.createCookie=function(name,value,days){var cookie_string=name+"="+escape(value);if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));cookie_string+="; expires="+date.toGMTString();}
document.cookie=cookie_string+"; path=/"}
BaseModule.readCookie=function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
BaseModule.eraseCookie=function(name){this.createCookie(name,"",-1);}
BaseModule.getCookie=function(NameOfCookie){if(document.cookie.length>0){begin=document.cookie.indexOf(NameOfCookie+"=");if(begin!=-1){begin+=NameOfCookie.length+1;end=document.cookie.indexOf(";",begin);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(begin,end));}}
return null;}
BaseModule.TrimCookieSize=function(valueArray){var slicedArray=valueArray.slice(1);var newValues="";for(i=0;i<slicedArray.length;i++){newValues+=slicedArray[i]}
return newValues;}
BaseModule.getElementsByClassName=function(oElm,strTagName,strClassName){var arrElements=(strTagName=="*"&&oElm.all)?oElm.all:oElm.getElementsByTagName(strTagName);var arrReturnElements=new Array();strClassName=strClassName.replace(/\-/g,"\\-");var oRegExp=new RegExp("(^|\\s)"+strClassName+"(\\s|$)");var oElement;for(var i=0;i<arrElements.length;i++){oElement=arrElements[i];if(oRegExp.test(oElement.className)){arrReturnElements.push(oElement);}}
return(arrReturnElements)}
BaseModule.ClearElement=function(id){var e=$("#"+id);e.wrap('<form>').closest('form').get(0).reset();e.unwrap();}
BaseModule.toEllipsedText=function(s,length){if(s.length<=length){return s;}
var indices=[];var sum=0;var tokens=s.split(" ");if(s.indexOf(" ")>=0){for(i in tokens){var token=tokens[i];indices.push(sum+token.length+1);sum+=token.length+1;}}
var maxLength=0;for(i in indices){var index=indices[i];if(index>s.length){continue;}
if(index+3<=length){maxLength=index-1;}}
if(maxLength==0){return s.substring(0,length-3)+" ...";}else{return s.substring(0,maxLength)+" ...";}}}(window.BaseModule=window.BaseModule||{},jQuery));function UpdatePanelPartialPostback(sender,args){if(args.get_isPartialLoad())
BaseModule.rebindModules();}
var globalSiteSubDirectory='';BaseModule.getGlobalSiteSubDirectory=function(){if($('#hdnSubDirectory').size()>0)
return $('#hdnSubDirectory').val();else
return'';}
jQuery(function(){if(typeof Sys!='undefined')Sys.Application.add_load(UpdatePanelPartialPostback);globalSiteSubDirectory=BaseModule.getGlobalSiteSubDirectory();});if(!Array.prototype.map){Array.prototype.map=function(callback,thisArg){var T,A,k;if(this==null){throw new TypeError(" this is null or not defined");}
var O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function");}
if(thisArg){T=thisArg;}
A=new Array(len);k=0;while(k<len){var kValue,mappedValue;if(k in O){kValue=O[k];mappedValue=callback.call(T,kValue,k,O);A[k]=mappedValue;}
k++;}
return A;};}
if(!String.prototype.format&&!String.prototype.f){String.prototype.format=String.prototype.f=function(){var s=this,i=arguments.length;while(i--){s=s.replace(new RegExp('\\{'+i+'\\}','gm'),arguments[i]);}
return s;};}