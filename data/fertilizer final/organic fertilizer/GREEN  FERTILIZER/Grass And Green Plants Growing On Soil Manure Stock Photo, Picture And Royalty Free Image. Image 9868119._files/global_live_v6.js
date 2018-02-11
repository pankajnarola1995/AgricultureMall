function search_text_onfocus(obj, def_value) {
    if (obj.value == def_value) {
      obj.value = '';
    }
}

function search_text_onblur(obj, def_value) {
    if (obj.value == '' || obj.value == def_value) {
      obj.value = def_value;
    }
}

function searchsubmit(form) {
    var search = form.word;
    
    if(search.value.length == 0 || search.value == "Enter keywords or image code") {
        alert("Please enter a keyword.");
        search.focus();
        return false;
    }
    
    document.getElementById("t_word").value = "";
    
    if (document.getElementById('g_lang_uni') != null && document.getElementById('g_lang_uni').style.display != "none")
    {
        document.getElementById("t_lang").value = document.getElementById('g_lang_uni').value;
    }
    
    var current_lang = document.getElementById("t_lang").value;
    
    if((current_lang != "en" && current_lang!="") || document.getElementById('uni_srch_lang').checked)
    {
        
        if(current_lang == "gb")
        {
            current_lang = "zh-CN";
        }
        else if(current_lang == "jp")
        {
            current_lang = "ja";
        }
        else if(current_lang == "cz")
        {
            current_lang = "cs";
        }
        else if(current_lang == "kr")
        {
            current_lang = "ko";
        }
        else if(current_lang == "tw")
        {
            current_lang = "zh-TW";
        }
        
        if(document.getElementById('uni_srch_lang').checked)
        {
            current_lang = "";
        }
        
        google.language.translate(search.value,current_lang,"en",function(result)
        {
            if(result.translation)
            {
                
                if(document.getElementById('uni_srch_lang').checked)
                {
                    document.getElementById("t_lang").value = result.detectedSourceLanguage;
                }
                document.getElementById("t_word").value = result.translation.toLowerCase();
                form.submit();
            }
        });
        
        return false;
    }
    else
    {
        return true;
    }
}

function searchsubmit2(form) {
    var search = document.getElementById("searchtext2");
    
    if(search.value.length == 0 || search.value == "Enter keywords or image code") {
        alert("Please enter a keyword.");
        search.focus();
        return false;
    }
    
    document.getElementById("t_word2").value = "";
    
    var current_lang = document.getElementById("t_lang2").value;
    
    if((current_lang != "en" && current_lang!=""))
    {
        
        if(current_lang == "gb")
        {
            current_lang = "zh-CN";
        }
        else if(current_lang == "jp")
        {
            current_lang = "ja";
        }
        else if(current_lang == "cz")
        {
            current_lang = "cs";
        }
        else if(current_lang == "kr")
        {
            current_lang = "ko";
        }
        else if(current_lang == "tw")
        {
            current_lang = "zh-TW";
        }
        
        google.language.translate(search.value,current_lang,"en",function(result)
        {
            if(result.translation)
            {
                document.getElementById("t_word2").value = result.translation.toLowerCase();
                form.submit();
            }
        });
        
        return false;
    }
    else
    {
        return true;
    }
}

function hover_thumb(status, coord) {
    var thumb = 'thumb' + coord;

    if (status == 0) document.getElementById(thumb).style.opacity = 1;
    else if (status == 1) document.getElementById(thumb).style.opacity = 0.8;
}

function toggle_search_options(id, id_caption) {
    if (document.getElementById(id) != null) {
        if (document.getElementById(id).style.display == 'block') {
            document.getElementById(id).style.display = 'none';
            if (document.getElementById(id_caption) != null) document.getElementById(id_caption).innerHTML = '&#9660;';
            remembersearchbar(0);
        }
        else
        {
            document.getElementById(id).style.display = 'block';
            if (document.getElementById(id_caption) != null) document.getElementById(id_caption).innerHTML = '&#9650;';
            remembersearchbar(1);
        }
    }
}


function searchagain_submit() {
    var form = document.searchform;
    var search = form.search_text;

    if(search.value.length == 0 || search.value == "Enter keywords or image code") {
        alert("Please enter a keyword.");
        search.focus();
        return false;
    }

    form.submit();
}

function resetsearch() {
    var searchform = document.searchform;
    
    if (searchform.search_text != null) searchform.search_text.value = '';
    if (searchform.match != null) searchform.match[0].checked = true;
    if (searchform.exclude != null) searchform.exclude.value = '';
    if (searchform.cka != null) searchform.cka.checked = false;
    if (searchform.imgtype != null) searchform.imgtype[0].checked = true;
    if (searchform.cko != null) searchform.cko[0].checked = true;
    if (searchform.orderby != null) searchform.orderby[0].checked = true;
    if (searchform.exppl != null) searchform.exppl[0].checked = true;
    if (searchform.nonudity != null) searchform.nonudity.checked = false;
}

function magnifysmall_old(supplier_name, cd_code, file_name, width, height) {

    var imgsrc = 'http://sg.123rf.com/168nwm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg';

    if (width == 0 || height == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 50px; min-height: 50px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '; height: ' + height + '"; class="loading">';

    var imgphotog = '<div style="font-size: 1.1em; color: #DDD; margin-top: 2px;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgphotog, WIDTH, 10, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888');
}


function magnify_v2(cacheserver, supplier_name, cd_code, file_name, image_desc, width, height) {

    if (cacheserver == '') cacheserver = 'http://images.123rf.com/us';

    var imgsrc = cacheserver + '/400wm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg';

    if (width == 0 || height ==0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 200px; min-height: 200px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '; height: ' + height + '"; class="loading">';

    var imgdesc = '<div style="font-size: 1.1em; margin-top: 2px; margin-bottom: 1px; color: #FFF;">' + image_desc + '</div>';
    var imgphotog = '<div style="font-size: 1.1em; color: #DDD;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgdesc + imgphotog, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888', DELAY, 500);
}

function magnifysmall_v2(cacheserver, supplier_name, cd_code, file_name, width, height) {

    if (cacheserver == '') cacheserver = 'http://images.123rf.com/us';
    var imgsrc = cacheserver + '/168nwm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg';

    if (width == 0 || height == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 50px; min-height: 50px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '; height: ' + height + '"; class="loading">';

    var imgphotog = '<div style="font-size: 1.1em; color: #DDD; margin-top: 2px;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgphotog, WIDTH, 10, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888', DELAY, 500);
}


function magnify_v3(supplier_name, cd_code, file_name, image_desc, width, height) {
    if (!window.cacheserver || cacheserver == '') cacheserver = 'http://sg.123rf.com';
    var imgsrc = cacheserver + '/400wm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg';

    if (width == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 200px; min-height: 200px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '"; class="loading">';

    var imgdesc = '<div style="font-size: 1.1em; margin-top: 2px; margin-bottom: 1px; color: #FFF;">' + image_desc + '</div>';
    var imgphotog = '<div style="font-size: 1.1em; color: #DDD;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgdesc + imgphotog, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888', DELAY, 500);
}


function magnify(supplier_name, cd_code, file_name, width, height) {
    
    if(getCookie('previewimages') != 'no')
    {
        if (!window.cacheserver || cacheserver == '') cacheserver = 'http://us.123rf.com';
        var imgsrc = '<img class="loading" src='+ cacheserver + '/400wm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg>';

        var imgdiv = '<div style=\'margin: 20px;width:400px;min-height:150px; text-align:center; background-image:url("/images/36-0.gif");background-position:center center;background-repeat:no-repeat;\'>';

        image_desc = document.getElementById('image_desc|' + cd_code + '|' + file_name).value;
        
        var imgdesc = '<div style=" vertical-align: bottom; text-align:center; padding-top: 2px; color: #fff; font-family: Arial, Helvetica, Sans-Serif; font-size: 11px;">' + image_desc + '</div>';
        
        return overlib(imgdiv + imgsrc + imgdesc + '</div>', ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20', DELAY, 500);
    }      
}


function magnifysmall(supplier_name, cd_code, file_name, width, height, image_id) {
    if (!window.cacheserver || cacheserver == '') cacheserver = 'http://sg.123rf.com';
    var imgsrc = cacheserver + '/168nwm/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg';

    if (width == 0 || height == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 50px; min-height: 50px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '; height: ' + height + '"; class="loading">';

    var imgphotog = '<div style="font-size: 1.3em; color: #fff; margin-top: 2px;"><img src="/images/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + image_id + '</div>';

    return overlib(imgdiv + imgphotog, WIDTH, 10, ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20', DELAY, 500);
}

function staticMagnify450(supplier_name,cd_code,file_name,img_id,cdn168,urldesc) {
    if(getCookie('previewimages') != 'no')
    {
        cacheserver = 'http://us.123rf.com';
        var imgdiv = '<div style=\'position:relative;margin: 6px;text-align:center;\'>';
        var imgsrc = '<div><img id="imgt1" class="loading" style="max-width:450px;max-height:450px;" src="'+ cacheserver + '/450wm/' + supplier_name + '/' + cd_code + '/' + file_name +'/'+img_id+'-'+urldesc+'.jpg"></div>';
        return overlib(imgdiv + imgsrc + '</div>', ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20',NOFOLLOW,DELAY, 500);
    }
}

function hide_vidframe(file_name)
{
    document.getElementById("frame_video").style.display='none';
    document.getElementById("span_vid").innerHTML="";
}

function magnifyvideo(supplier_name, cd_code, file_name, width, height) {
    
    if(getCookie('previewimages') != 'no')
    {
        if (!window.cacheserver || cacheserver == '') cacheserver = 'http://us.123rf.com';

        var s3link = 'http://vid.123rf.com/preview/' + supplier_name + '/' + cd_code + '/' + file_name + '.mp4';

        var imgsrc = '<span id="span_vid"><iframe id="frame_video" src="/video_player.php?link=' + s3link + '&filename='+file_name+'" style="width:426px; height:240px; z-index:1;" noscroll frameborder=0></iframe></span>';

        var imgdiv = '<div style=\'margin: 20px;width:426px;min-height:150px; text-align:center; background-image:url("/images/36-0.gif");background-position:center center;background-repeat:no-repeat;\'>';
        
        return overlib(imgdiv + imgsrc + '</div>', ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20',NOFOLLOW, DELAY, 500);
        
    }      
}

//Enables and disables display image description.
function dispDesc()
{
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 30 * 24 * 3600 * 1000;
    futdate.setTime(expdate);
   
    if(getCookie('dDesc') == 'yes' || !getCookie('dDesc'))
    {       
        setCookie('dDesc', 'no', futdate, '/', '.123rf.com');
    }
    else
    {
        setCookie('dDesc', 'yes', futdate, '/', '.123rf.com');
    }
    window.location.reload();
}
function dispDesc2()
{
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 30 * 24 * 3600 * 1000 // expires in 14 days (milliseconds)
    futdate.setTime(expdate);
    if(getCookie('dDesc2') == 'yes')
    {
    setCookie('dDesc2', 'no', futdate, '/', '.123rf.com');
    }
    else
    {
    setCookie('dDesc2', 'yes', futdate, '/', '.123rf.com');
    }
    window.location.reload();
}
// reveal lightbox drop down box
function reveallb() {
    document.getElementById('lightbox_select').style.display = 'inline';
    document.getElementById('lightbox_text').style.display = 'none';

    document.getElementById('lightbox_select').focus();
}

// hide the lightbox drop down box while focus is lost
function hidelb() {
    document.getElementById('lightbox_select').style.display = 'none';
    document.getElementById('lightbox_text').style.display = 'inline';
}

// Remember Advanced Search bar state
function remembersearchbar(state) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);

    setCookie('advsrch', state, futdate, '/','.123rf.com');
}


// create new lightbox
function do_create () {
    var new_name = prompt('Please enter a name for the new lightbox.', '');
    if (new_name != null) {
        document.lightboxaction.text.value = new_name;
        document.lightboxaction.action.value = 'create';
        document.lightboxaction.submit();

        var futdate = new Date();
        var expdate = futdate.getTime();
        expdate += 14 * 24 * 3600 * 1000;
        futdate.setTime(expdate);
        setCookie('lightid', '', futdate, '/','.123rf.com');
    }
}

function do_create_lightbox () {
    var msg = document.getElementById('createmsg').innerHTML;
    
    var new_name = prompt(msg, '');
    if (new_name != null) {
        document.lightboxaction.text.value = new_name;
        document.lightboxaction.action.value = 'create';
        document.lightboxaction.submit();

        var futdate = new Date();
        var expdate = futdate.getTime();
        expdate += 14 * 24 * 3600 * 1000;
        futdate.setTime(expdate);
        setCookie('lightid', '', futdate, '/','.123rf.com');
    }
}

// rename lightbox
function do_rename (oldname, id) {
    oldname = decodeURI(oldname);
    var new_name = prompt('Please enter a new name for this lightbox.', oldname);
    if (new_name != null) {
        document.lightboxaction.text.value = new_name;
        document.lightboxaction.action.value = 'rename';
        document.lightboxaction.submit();

        var futdate = new Date();
        var expdate = futdate.getTime();
        expdate += 14 * 24 * 3600 * 1000;
        futdate.setTime(expdate);
        setCookie('lightid', id, futdate, '/','.123rf.com');
    }
}

function do_rename_lightbox (oldname, id) {
     var rename_msg = document.getElementById('renamemsg').innerHTML;
    oldname = decodeURI(oldname);
    var new_name = prompt(rename_msg, oldname);
    if (new_name != null) {
        document.lightboxaction.text.value = new_name;
        document.lightboxaction.action.value = 'rename';
        document.lightboxaction.submit();

        var futdate = new Date();
        var expdate = futdate.getTime();
        expdate += 14 * 24 * 3600 * 1000;
        futdate.setTime(expdate);
        setCookie('lightid', id, futdate, '/','.123rf.com');
    }
}

// delete existing ligthbox
function do_delete (n) {
    if (confirm('Are you sure you want to delete this lightbox?')) {
        document.lightboxaction.text.value = n;
        document.lightboxaction.action.value = 'delete';
        document.lightboxaction.submit();
    }
}

function do_delete_lightbox (n) {
    var msgdel = document.getElementById('deletemsg').innerHTML;
    if (confirm(msgdel)) {
        document.lightboxaction.text.value = n;
        document.lightboxaction.action.value = 'delete';
        document.lightboxaction.submit();
    }
}

function do_privacy(id, privacy)
{
  document.lightboxaction.text.value = privacy;
    document.lightboxaction.action.value = 'setprivacy';
    document.lightboxaction.submit();
}

function do_note()
{
  document.lightboxaction.text.value = document.getElementById('light_note').value;
    document.lightboxaction.action.value = 'note';
    document.lightboxaction.submit();
}

// remember current ligthbox
function rememberlightbox(id) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);

    setCookie('lightid', id, futdate, '/','.123rf.com');
}

// javascript reminder
function confirm_reminder(msg) {
    if (confirm(msg)) return true;
    return false;
}

// Cookies functions
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function remember_perpage(perpage) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);

    setCookie('perpage', perpage, futdate, '/','.123rf.com');
}


var newWin = null;
function popUp(strURL, strType, strHeight, strWidth) {
  if (newWin != null && !newWin.closed) newWin.close();
  var strOptions="";
  if (strType=="console") strOptions="resizable,height=" + strHeight+",width=" + strWidth;
  if (strType=="fixed") strOptions="status,height=" + strHeight+",width=" + strWidth;
  if (strType=="elastic") strOptions="toolbar,menubar,scrollbars," + "resizable,location,height="+ strHeight+",width="+strWidth;
  newWin = window.open(strURL, 'newWin', strOptions);
  newWin.focus();
}

// process and combine all keywords into
function process_kw(count, type) {

    var string_kw = '';
    var count_checked = 0;
    var chkbox_kw;
    
    for (var i = 0; i <= count; i++) {
        if (type == '123' || type == 'vid' || type == 'audio') chkbox_kw = eval("document.form_searchkw.kw_" + i);
        else if (type == 'inm') chkbox_kw = eval("document.form_searchkw_inm.kw_inm_" + i);
        
        if (chkbox_kw) {
            if (chkbox_kw.checked) {
                if (string_kw == '') string_kw = string_kw + chkbox_kw.value;
                else string_kw = string_kw + '_' + chkbox_kw.value;
                
                count_checked++;
            }
        }        
    }

    if (!count_checked) alert('Please check at least one keyword and try again.');    
    else {
        if (type == '123') window.location = '/stock-photo/' + string_kw + '.html';
        if (type == 'inm') window.open('http://www.inmagine.com/searchterms/' + string_kw + '.html');
        if (type == 'vid') window.location = '/stock-footage/' + string_kw + '.html';
        if (type == 'audio') window.location = '/stock-audio/' + string_kw + '.html';
    }
}

function $(v) { return(document.getElementById(v)); }
function $S(v) { return($(v).style); }
function agent(v) { return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0)); }
function isset(v) { return((typeof(v)=='undefined' || v.length==0)?false:true); }
function XYwin(v) { var z=agent('msie')?Array(document.body.clientHeight,document.body.clientWidth):Array(window.innerHeight,window.innerWidth); return(isset(v)?z[v]:z); }

function getY( oElement )
{
    var iReturnValue = 0;
    while( oElement != null ) {
        iReturnValue += oElement.offsetTop;
        oElement = oElement.offsetParent;
    }
    return iReturnValue;
}

function sexyTOG() {$S('sexyBG').display='none'; $S('sexyBOX').display='none';}
function sexyBOX(v,b) { setTimeout("sexyTOG()",8000); $S('sexyBG').height=(XYwin(0)*2.5)+'px'; $S('sexyBG').display='block'; $('sexyBOX').innerHTML=v+'<div class="sexyX"><br><img src=/image/loading.gif style= "vertical-align:middle;">&nbsp; Preparing for your download...<br><br>'+"<\/div>"; $S('sexyBOX').left=Math.round((XYwin(1)-b)/2)+'px'; $S('sexyBOX').width=b+'px'; $S('sexyBOX').display='block'; }

window.Blink = function(args){
  args = (/,/.test(args))?  args.split(/,/):  [args,'#FFFF88',6];
  var who = document.getElementById(args[0]);
  var count = parseInt(args[2]);
  if (--count <=0) {
      who.style.backgroundColor = '';
      if(who.focus) who.focus();
  } else {
      args[2]=count+'';
      who.style.backgroundColor=(count%2==0)? '': args[1];
    args='\"'+args.join(',')+'\"';
      setTimeout("Blink("+args+")",500);
  }
}
  
  
function tog_keywords(key,todo)
{
    var s; 
    var e;
    var addkeyword = "add_"+key;
    var deletekeyword = "delete_"+key;
  if (todo=='add') 
  {
    if (document.getElementById(addkeyword).src == 'http://www.123rf.com/image/icons/add.gif')
    {
      document.getElementById(addkeyword).src = 'http://www.123rf.com/image/icons/add_grey.gif';
      s=" "+document.searchform.word.value+" ";
      s=s.replace(new RegExp(" ", "g"),"  ");
      s=s.replace(new RegExp(" "+key+" ", "g")," ");
      s=s.replace(new RegExp("  ", "g")," ");     
    } 
    else
    {
      s=document.searchform.word.value + " " + key;
      document.getElementById(addkeyword).src = 'http://www.123rf.com/image/icons/add.gif';
      document.getElementById(deletekeyword).src = 'http://www.123rf.com/image/icons/delete_grey.gif';
      e=" "+document.searchform.exclude.value+" ";
      e=e.replace(new RegExp(" ", "g"),"  ");
      e=e.replace(new RegExp(" "+key+" ", "g")," ");
      e=e.replace(new RegExp("  ", "g")," ");     
      document.searchform.exclude.value = e.replace(/^\s+|\s+$/g,"");
    } 
  document.searchform.word.value = s.replace(/^\s+|\s+$/g,"");  
  }
  else
  {
    if (document.getElementById(deletekeyword).src == 'http://www.123rf.com/image/icons/delete.gif')
    {
      document.getElementById(deletekeyword).src = 'http://www.123rf.com/image/icons/delete_grey.gif';
      e=" "+document.searchform.exclude.value+" ";
      e=e.replace(new RegExp(" ", "g"),"  ");
      e=e.replace(new RegExp(" "+key+" ", "g")," ");
      e=e.replace(new RegExp("  ", "g")," ");     
    } 
    else
    {
      e=document.searchform.exclude.value + " " + key;
      document.getElementById(deletekeyword).src = 'http://www.123rf.com/image/icons/delete.gif';

      document.getElementById(addkeyword).src = 'http://www.123rf.com/image/icons/add_grey.gif';
      s=" "+document.searchform.word.value+" ";
      s=s.replace(new RegExp(" ", "g"),"  ");
      s=s.replace(new RegExp(" "+key+" ", "g")," ");
      s=s.replace(new RegExp("  ", "g")," "); 
      document.searchform.word.value = s.replace(/^\s+|\s+$/g,"");      

    } 
  document.searchform.exclude.value = e.replace(/^\s+|\s+$/g,"");
  }
  
  document.searchform.submit();
}


function magnifyme(supplier_name, image_id, width, height) {
    if (!window.cacheserver || cacheserver == '') cacheserver = 'http://sg.123rf.com';

  var imageid = "i_"+image_id;
  
  var image_desc = document.getElementById(image_id).getAttribute('alt');
  if (image_desc == null) {image_desc = '';}

  var imgsrc = document.getElementById(image_id).getAttribute('src');
  imgsrc = imgsrc.replace(new RegExp("168nwm", "g"),"400wm"); 

    if (width == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 200px; min-height: 200px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '"; class="loading">';

    var imgdesc = '<div style="font-size: 1.1em; margin-top: 2px; margin-bottom: 1px; color: #FFF;">' + image_desc + '</div>';
    var imgphotog = '<div style="font-size: 1.1em; color: #DDD;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgdesc + imgphotog, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888', DELAY, 500);
}


function magnifymev4(supplier_name, image_id, width, height,wmx,wmy) {
    if (!window.cacheserver || cacheserver == '') cacheserver = 'http://sg.123rf.com';

    var imageid = "i_"+image_id;

    var image_desc = document.getElementById(image_id).getAttribute('alt');
    if (image_desc == null) {image_desc = '';}

    var imgsrc = document.getElementById(image_id).getAttribute('src');
    imgsrc = imgsrc.replace(new RegExp("168nwm", "g"),"400wm/"+wmx+"/"+wmy); 

    if (width == 0) var imgdiv = '<img src="' + imgsrc + '" style="min-width: 200px; min-height: 200px;" class="loading">';
    else var imgdiv = '<img src="' + imgsrc + '" style="width: ' + width + '"; class="loading">';

    var imgdesc = '<div style="font-size: 1.1em; margin-top: 2px; margin-bottom: 1px; color: #FFF;">' + image_desc + '</div>';
    var imgphotog = '<div style="font-size: 1.1em; color: #DDD;"><img src="/images/v2/icon_photog.gif" style="margin-bottom: -1px; margin-right: 3px;" title="Photographer" alt="Photographer" border="0">' + supplier_name + '</div>';

    return overlib(imgdiv + imgdesc + imgphotog, ABOVE, HAUTO, VAUTO, BGCOLOR, '#888888', FGCOLOR, '#888888', DELAY, 500);
}

function toggle_advancedsearch (id_to_show) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);
    
    if (document.getElementById('top_search_panel_uni') != null) document.getElementById('top_search_panel_uni').style.display = 'none';
    if (document.getElementById('g_lang_uni') != null) document.getElementById('g_lang_uni').style.display = 'none';
    
    if (document.getElementById('search_win_brand') && document.getElementById('search_win_brand').style.display == "none") 
    {
        document.getElementById('search_win_brand').style.display = 'block';
    }
    
    if (document.getElementById('google_branding') && document.getElementById('google_branding') != "none") 
    {
        document.getElementById('google_branding').style.display = 'none';
    }
    
    document.getElementById("searchform").action = "search.php";
    
    if (id_to_show == 'basic_search') 
    {    
        var answer = confirm(lang_switchsearch);
        
        if (answer) 
        {
            resetsearch();
            
            if (document.getElementById('top_search_left_border') != null) document.getElementById('top_search_left_border').className = 'top_search_left_border_bsc';
            if (document.getElementById('advanced_search_options') != null) document.getElementById('advanced_search_options').style.display = 'none';
            if (document.getElementById('top_search_panel_bsc') != null) document.getElementById('top_search_panel_bsc').style.display = 'block';
            if (document.getElementById('top_search_panel_adv') != null) document.getElementById('top_search_panel_adv').style.display = 'none';

            if (document.getElementById('icon_searchmax') != null) document.getElementById('icon_searchmax').style.display = 'none';
            if (document.getElementById('icon_searchmin') != null) document.getElementById('icon_searchmin').style.display = 'none';
            
            if (document.getElementById('searchrm_option') != null) document.getElementById('searchrm_option').style.display = 'inline';
            
            setCookie('advsearchdisplay_new', 'none', futdate, '/', '.123rf.com');
        }
    }
    
    else if (id_to_show == 'adv_search_max') 
    {
        if (document.getElementById('top_search_left_border') != null) document.getElementById('top_search_left_border').className = 'top_search_left_border_adv';
        if (document.getElementById('advanced_search_options') != null) document.getElementById('advanced_search_options').style.display = 'block';
        if (document.getElementById('top_search_panel_bsc') != null) document.getElementById('top_search_panel_bsc').style.display = 'none';
        if (document.getElementById('top_search_panel_adv') != null) document.getElementById('top_search_panel_adv').style.display = 'block';
        
        if (document.getElementById('icon_searchmax') != null) document.getElementById('icon_searchmax').style.display = 'none';
        if (document.getElementById('icon_searchmin') != null) document.getElementById('icon_searchmin').style.display = 'block';
        
        if (document.getElementById('searchrm_option') != null) document.getElementById('searchrm_option').style.display = 'none';
        
        setCookie('advsearchdisplay_new', 'block', futdate, '/', '.123rf.com');
        setCookie('hide_adv_options', '0', futdate, '/', '.123rf.com');
    }
    
    else if (id_to_show == 'adv_search_min') 
    {
        if (document.getElementById('top_search_left_border') != null) document.getElementById('top_search_left_border').className = 'top_search_left_border_adv';
        if (document.getElementById('advanced_search_options') != null) document.getElementById('advanced_search_options').style.display = 'none';
        if (document.getElementById('top_search_panel_bsc') != null) document.getElementById('top_search_panel_bsc').style.display = 'none';
        if (document.getElementById('top_search_panel_adv') != null) document.getElementById('top_search_panel_adv').style.display = 'block';
        
        if (document.getElementById('icon_searchmax') != null) document.getElementById('icon_searchmax').style.display = 'block';
        if (document.getElementById('icon_searchmin') != null) document.getElementById('icon_searchmin').style.display = 'none';
        
        if (document.getElementById('searchrm_option') != null) document.getElementById('searchrm_option').style.display = 'none';
        
        setCookie('advsearchdisplay_new', 'block', futdate, '/', '.123rf.com');
        setCookie('hide_adv_options', '1', futdate, '/', '.123rf.com');
    }
}


function show_showAdvOptionButton () {
    if (document.getElementById('icon_searchmax') != null) document.getElementById('icon_searchmax').style.display = 'block';
}

function show_hideAdvOptionButton () {
    if (document.getElementById('icon_searchmin') != null) document.getElementById('icon_searchmin').style.display = 'block';
}

function show_contact_popup() {
    if (document.getElementById('top_contact_list') != null) document.getElementById('top_contact_list').style.display = 'block'; 
    if (document.getElementById('lang_option_list') != null) document.getElementById('lang_option_list').style.display = 'none';
}

function show_lang_popup() {
    if (document.getElementById('lang_option_list')) document.getElementById('lang_option_list').style.display = 'block'; 
    if (document.getElementById('top_contact_list')) document.getElementById('top_contact_list').style.display = 'none';
}

function backToTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }

    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }

    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));
    
    if (document.getElementById('zip') != null) {
        var zip = document.getElementById('zip');
        
        var x4 = zip.scrollLeft || 0;
        var y4 = zip.scrollTop || 0;
        
        var x = Math.max(x, x4);
        var y = Math.max(y, y4);
        
        document.getElementById('zip').scrollTop = Math.floor(y / 2);
        document.getElementById('zip').scrollLeft = Math.floor(x / 2);
    }
    
    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
    
    
    if (x > 0 || y > 0) {
        backToTop();
    }
}

function sortSearchResult(searchOpt) {
    document.sortform.orderby.value = searchOpt;
    document.sortform.submit();
}

function switch_cat_tab(viewtype) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    
    if(viewtype == ""){
        expdate -= 7 * 24 * 3600 * 1000;
    }
    else {
        expdate += 7 * 24 * 3600 * 1000;
    }

    futdate.setTime(expdate);
    setCookie('searchactivetab', viewtype, futdate, '/','.123rf.com');
}


function show_am_list() {
    var div_am = document.getElementById('div_am');
    if (div_am != null) div_am.style.display = '';
}

function hide_am_list() {
    var div_am = document.getElementById('div_am');
    if (div_am != null) div_am.style.display = 'none';
}

function replaceButton(id, textid, text)
{
    document.getElementById(id).display = 'none';
    document.getElementById(textid).display = 'block';
    document.getElementById(textid).innerHTML = text;
}

function watermark(inputId,text){
    var inputBox = document.getElementById(inputId);
    if (inputBox.value.length > 0){
        if (inputBox.value == text)
            inputBox.value = '';
    }
    else
        inputBox.value = text;
}

function staticMagnify(supplier_name,cd_code,file_name,img_id) {
    if(getCookie('previewimages') != 'no')
    {
        if (!window.cacheserver || cacheserver == '') cacheserver = 'http://us.123rf.com';
        var imgsrc = '<img class="loading" src='+ cacheserver + '/400wm/400/400/' + supplier_name + '/' + cd_code + '/' + file_name + '.jpg>';
        
        var overlibHeight = (document.getElementById(img_id).offsetHeight*2.38)+50;
        var overlibWidth = (document.getElementById(img_id).offsetWidth*2.38);

        var imgdiv = '<div style=\'margin: 6px;height:'+overlibHeight+'px;width:'+overlibWidth+'px;min-height:150px; text-align:center; background-image:url("/images/36-0.gif");background-position:center center;background-repeat:no-repeat;\'>';

        image_desc = document.getElementById('image_desc|' + cd_code + '|' + file_name).value;
        
        var imgdesc = '<div style=" vertical-align: bottom; text-align:left; padding-top: 2px; color: #fff; font-family: Arial, Helvetica, Sans-Serif; font-size: 11px;">#' +img_id + ' - ' + image_desc + '</div>';
        return overlib(imgdiv + imgsrc + imgdesc + '</div>', ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20',NOFOLLOW,DELAY, 500);
    }
}

function staticMagnifyv2(supplier_name,cd_code,file_name,img_id,cdn168,urldesc) {
    if(getCookie('previewimages') != 'no')
    {
        if (!window.cacheserver || cacheserver == '') cacheserver = 'http://us.123rf.com';
        var overlibHeight = (document.getElementById(img_id).offsetHeight*2.679);
        var overlibWidth = (document.getElementById(img_id).offsetWidth*2.679);
        var overlibHeight2 = (document.getElementById(img_id).offsetHeight*2.679);
        var imgdesc = '<div style=" vertical-align: bottom; text-align:left; padding: 8px 0 8px 10px; color: #fff; font-family: Arial, Helvetica, Sans-Serif; font-size: 11px;"></div>';
        var loadingDiv = '<div style="position:absolute;"><img class="loading" src="'+cdn168+'/168nwm/'+supplier_name+'/'+cd_code+'/'+file_name+'/'+img_id+'-'+urldesc+'.jpg" style="width:'+(overlibWidth)+'px;height:'+(overlibHeight2)+'px;">'+imgdesc+'</div>';
        var imgdiv = '<div style=\'position:relative;margin: 6px;height:'+(overlibHeight)+'px;width:'+(overlibWidth)+'px;\'>';
        var imgsrc = '<div style="position:absolute;"><img id="imgt1" class="loading" src="'+ cacheserver + '/450wm/' + supplier_name + '/' + cd_code + '/' + file_name +'/'+img_id+'-'+urldesc+ '.jpg"></div>';
        return overlib(imgdiv + loadingDiv + imgsrc + '</div>', ABOVE, HAUTO, VAUTO, BGCOLOR, '#231F20', FGCOLOR, '#231F20',NOFOLLOW,DELAY, 500);
    }
}


window.onload = function () {
    if (document.getElementById('toggle_bsc_search') != null) {
        var toggle_bsc_search = document.getElementById('toggle_bsc_search');
        toggle_bsc_search.onclick = function() {
            toggle_advancedsearch2009('bsc_search');
            return false;
        }
    }

    if (document.getElementById('toggle_adv_search') != null) {
        var toggle_adv_search = document.getElementById('toggle_adv_search');
        toggle_adv_search.onclick = function() {
            toggle_advancedsearch2009('adv_search');
            return false;
        }
    }

    if (document.getElementById('toggle_bsc_search_ed') != null) {
        var toggle_bsc_search_ed = document.getElementById('toggle_bsc_search_ed');
        toggle_bsc_search_ed.onclick = function() {
            toggle_advancedsearch2009('bsc_search_ed');
            return false;
        }
    }

    if (document.getElementById('toggle_adv_search_ed') != null) {
        var toggle_adv_search_ed = document.getElementById('toggle_adv_search_ed');
        toggle_adv_search_ed.onclick = function() {
            toggle_advancedsearch2009('adv_search_ed');
            return false;
        }
    }

    var footer_about = document.getElementById('footer_about');
    footer_about.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_about, event);
        return false;
    }

    footer_about.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_about, event);
        return false;
    }

    var footer_services = document.getElementById('footer_services');
    footer_services.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_services, event);
        return false;
    }

    footer_services.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_services, event);
        return false;
    }

    var footer_contents = document.getElementById('footer_contents');
    footer_contents.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_contents, event);
        return false;
    }

    footer_contents.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_contents, event);
        return false;
    }

    var footer_policies = document.getElementById('footer_policies');
    footer_policies.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_policies, event);
        return false;
    }

    footer_policies.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_policies, event);
        return false;
    }

    var footer_tools = document.getElementById('footer_tools');
    footer_tools.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_tools, event);
        return false;
    }

    footer_tools.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_tools, event);
        return false;
    }

    var footer_international = document.getElementById('footer_international');
    footer_international.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_international, event);
        return false;
    }

    footer_international.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_international, event);
        return false;
    }

    var footer_support = document.getElementById('footer_support');
    footer_support.onmouseover = function(e) {
        var event = window.event || e;
        toggle_footer_bg_over(footer_support, event);
        return false;
    }

    footer_support.onmouseout = function(e) {
        var event = window.event || e;
        toggle_footer_bg_out(footer_support, event);
        return false;
    }
    
};

toggle_footer_bg_out = function(id, e) {
    if (isMouseLeaveOrEnter(e, id)) id.className = 'footer_cols';
}

toggle_footer_bg_over = function(id, e) {
    if (isMouseLeaveOrEnter(e, id)) id.className = 'footer_cols_over';
}

remember_search_type = function(std_sub, evo) {
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);        
        
    if (std_sub && !evo) {
        setCookie('searchactivetab', 'subs', futdate, '/', '.123rf.com');
    }
    
    else if (!std_sub && evo) {
        setCookie('searchactivetab', 'evo', futdate, '/', '.123rf.com');
    }
        
    else {
        setCookie('searchactivetab', 'all', futdate, '/', '.123rf.com');
    }
}

function toggle_advancedsearch2009 (id_to_show) {

    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate);

    if (id_to_show == 'bsc_search' || id_to_show == 'bsc_search_ed') {
        if (document.getElementById('navi_advsearch_container') != null) document.getElementById('navi_advsearch_container').style.display = 'none';
        if (document.getElementById('div_toggle_bsc_search') != null) document.getElementById('div_toggle_bsc_search').style.display = 'none';
        if (document.getElementById('div_toggle_adv_search') != null) document.getElementById('div_toggle_adv_search').style.display = '';
        if (document.getElementById('header_back_box') != null) document.getElementById('header_back_box').style.height = '63px';

        if (id_to_show == 'bsc_search') {
            if (document.getElementById('div_navi_search') != null) document.getElementById('div_navi_search').className = 'navi_search';
        }

        else {
            if (document.getElementById('div_navi_search') != null) document.getElementById('div_navi_search').className = 'navi_search_ed';
        }
  
        setCookie('advsearchdisplay_new', 'none', futdate, '/', '.123rf.com');
    }

    else if (id_to_show == 'adv_search' || id_to_show == 'adv_search_ed') {
        if (document.getElementById('header_back_box') != null) document.getElementById('header_back_box').style.height = '284px';

        if(!$('navi_advsearch_container')) {
            new Ajax.Updater('adv_srch_filters', '/include/header_advsearch.php', {
                onCreate: function() {
                    $('filters_loading').show();
                },

                onComplete: function() {
                    get_advancedsearch_max2009(futdate, id_to_show);
                }
            });
        }

        else get_advancedsearch_max2009(futdate, id_to_show);
        
        setCookie('advsearchdisplay_new', 'block', futdate, '/', '.123rf.com');
    }
}

function get_advancedsearch_max2009(futdate, id_to_show) {
    if (document.getElementById('navi_advsearch_container') != null) document.getElementById('navi_advsearch_container').style.display = '';
    if (document.getElementById('div_toggle_bsc_search') != null) document.getElementById('div_toggle_bsc_search').style.display = '';
    if (document.getElementById('div_toggle_adv_search') != null) document.getElementById('div_toggle_adv_search').style.display = 'none';

    if (id_to_show == 'adv_search') {
        if (document.getElementById('div_navi_search') != null) document.getElementById('div_navi_search').className = 'navi_search_active';
    }
    else {
        if (document.getElementById('div_navi_search') != null) document.getElementById('div_navi_search').className = 'navi_search_active_ed';
    }

    setCookie('advsearchdisplay_new', 'block', futdate, '/', '.inmagine.com');
}


function isMouseLeaveOrEnter(e, handler) {
    if (e.type != 'mouseout' && e.type != 'mouseover') return false;
    var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;
    while (reltg && reltg != handler) reltg = reltg.parentNode;
    return (reltg != handler);
}

function searchSimilar(filename)
{
    window.location = "/inmsearch.php?word=similar:"+filename;
}

function previewimage()
{
  var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 365 * 24 * 60 * 60 * 1000;
    futdate.setTime(expdate);
  
  if ($('preview').checked == true)
  {
    setCookie('previewimages', 'yes', futdate, '/', '.123rf.com', '');   
  }
  else
  { 
    setCookie('previewimages', 'no', futdate, '/', '.123rf.com', '');    
  }
}

function dimthis(thetarget) {
    thetarget.style.filter = "alpha(opacity=75)";
    thetarget.style.opacity = 0.75;
    thetarget.style.MozOpacity = 0.75;
}

function brightenthis(thetarget) {
    thetarget.style.filter = "alpha(opacity=100)";
    thetarget.style.opacity = 1;
    thetarget.style.MozOpacity = 1;
}

function searchDrpDwnSwitch(site_http,url,searchoptions_noperpage,searchopt,drpdwnType,topbtm){
    if(drpdwnType!='' && drpdwnType!=null){
        if(drpdwnType==1){
            var itmPage = (topbtm==1)?$('selectPerPg').value:$('selectPerPg2').value;
            var cFreshness = getCookie('freshness');
            var freshnessURL = (cFreshness!='' && cFreshness!=null)?'&freshness='+cFreshness:'';
            
            jsHREF(site_http,url,'?'+searchoptions_noperpage+freshnessURL+'&itemsperpage='+itmPage+'&searchopts='+searchopt);
            remember_perpage(itmPage);
        }else if(drpdwnType==2){
            var freshDrt = (topbtm==1)?$('selectFresh').value:$('selectFresh2').value;
            var cItemPerPage = getCookie('perpage');
        
            var itemsPerPageURL = (cItemPerPage!='' && cItemPerPage!=null)?'&itemsperpage='+cItemPerPage:'';
            
            jsHREF(site_http,url,'?'+searchoptions_noperpage+'&freshness='+freshDrt+''+itemsPerPageURL+'&searchopts='+searchopt);
            remember_freshness(freshDrt);
        }
    }
}

function hideshowadvsearch(cDom,advsrc){
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000;
    futdate.setTime(expdate); 
    if($('adv_advsearch_box').style.display=='block'){
        $('adv_advsearch_box').hide();
        $('adv_content_padding').style.marginLeft='70px';
        $('container-adv-srch').style.height='';
        $('expand-adv-search').style.display='block';
        setCookie('advsearchdisplay_new', 'none', futdate, '/', cDom);
    }else if($('adv_advsearch_box').style.display=='none'){
        $('adv_advsearch_box').style.display='block';
        $('adv_content_padding').style.marginLeft='250px';
        if(parseFloat(navigator.appVersion.split("MSIE")[1])==7){
            if(advsrc<=10){
                $('container-adv-srch').style.height='1000px';
            }else{
                $('container-adv-srch').style.height='700px';
            }
        }else{
            $('container-adv-srch').style.height='1600px';
        }
        $('expand-adv-search').style.display='none';
        setCookie('advsearchdisplay_new', 'block', futdate, '/', cDom);
    }
}
