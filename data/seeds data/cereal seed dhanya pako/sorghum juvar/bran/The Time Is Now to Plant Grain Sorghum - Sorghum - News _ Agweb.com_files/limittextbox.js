(function($){$.fn.extend({limit:function(){var $this=$(this);var interval;var limit=$this.attr('maxlength');var limitTextBox=$this.parent().find('.limitTextBoxBar');var limitTextBoxInner=limitTextBox.find('.limitTextBoxBarInner');var limitTextBoxInfoWrpr=limitTextBox.find('.limitTextBoxBarInfoWrpr');limitTextBoxInner.html("&nbsp;");$this.focus(function(){interval=window.setInterval(applyLimit,100);})
$this.blur(function(){clearInterval(interval);applyLimit();});applyLimit();function getNewLineCount(text){var newLineMatch=text.match(/\n/g);if(newLineMatch)
return newLineMatch.length;return 0;}
function applyLimit(){var val=$this.val();var valClean=val.replace(/\r\n?|\n/g,"\r\n");var length=valClean.length;var diff=limit-length;var originalscroll=$this.scrollTop();if(length>limit){if(valClean.substring(valClean.length-1)=='\n'){valClean=valClean.substring(0,limit-1);}else{valClean=valClean.substring(0,limit);}
valClean=valClean.replace(/\r\n/g,"\n");$this.val(valClean);$this.scrollTop(originalscroll);}
if(limitTextBoxInner.html()!=limit-length){var percent=Math.round(100-(diff/limit)*100);limitTextBoxInner.css('width',percent+'%');}
if(diff<0)
diff=0;limitTextBoxInfoWrpr.html(diff+' character'+(diff!=1?'s':'')+' left');}}});})(jQuery);