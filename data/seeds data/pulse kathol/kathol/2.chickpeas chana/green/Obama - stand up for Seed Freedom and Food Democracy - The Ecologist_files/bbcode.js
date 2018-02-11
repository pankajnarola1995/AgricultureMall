var b = 2;
var i = 2;
var u = 2;
var q = 2;
var c = 2;
var url = 2;
var img = 2;

function tag(v, tagadd, newbut, tagclose, oldbut, name) {
    if (eval(v)%2 == 0) {
        eval("window.document.editform."+name+".value = newbut;");
        var post = window.document.editform.comment.value;
        window.document.editform.comment.value = post + tagadd;
        window.document.editform.comment.focus();
    } else {
        eval("window.document.editform."+name+".value = oldbut;");
        var post = window.document.editform.comment.value;
        window.document.editform.comment.value = post + tagclose;
        window.document.editform.comment.focus();
    }
    eval(v+"++;");
}

function font(bbopen, bbclose) {
	var post = document.editform.comment;
    post.value += bbopen + bbclose;
    post.focus();
    return;
}

function smilie (smilie) {
    var post = document.editform.comment;
    post.value += smilie;
    post.focus();
    return;
}

bold_help = "Bold text: [b]text[/b]";
italic_help = "Italic text: [i]text[/i]";
underline_help = "Underline text: [u]text[/u]";
quote_help = "Quote text: [quote]text[/quote] or [quote=name]text[/quote]";
code_help = "Code display: [code]code[/code]";
img_help = "Insert image: [img]http://image_url[/img]";
url_help = "Insert URL: [url]http://url[/url] or [url=http://url]URL text[/url]";
fontcolor_help = "Font color: [color=red]text[/color]  Tip: you can also use color=#FF0000";
fontsize_help = "Font size: [size=50%]small text[/size]";

function helpline(help) {
    var helpbox = document.editform.helpbox;
    helpbox.value = eval(help + "_help");
}

function confirm_reset () {
	if(confirm("If you continue you will loose everything you have entered so far. \n \n" +
		"Click OK to proceed and start again.  \n \n Alternatively click cancel to continue " +
		"working on your post.")) {
		return true;
	}
	else {
    	return false;
	}
}

function checkForm() {
	var subject = document.editform.subject;
    var post = document.editform.comment;

    if (subject.value.length < 2 && post.value.length < 2) {
		alert("This is a short post!" + " \n \n " +
    		"We require that each post (and subject) \n" +
        	"be at least 2 characters long. \n \n" +
            "Go back and try again.");
		return false;
    }
    else { if (subject.value.length < 2) {
     	alert("We require that the subject  \n" +
           	"be at least 2 characters long. \n \n" +
            "Go back and try again.");
			return false;
        }
    else { if (post.value.length < 2) {
       	alert("We require that each post  \n" +
           	"be at least 2 characters long. \n \n" +
            "Go back and try again.");
        return false;
    }
    else {
    	return true;
    }
	}
	}
}
