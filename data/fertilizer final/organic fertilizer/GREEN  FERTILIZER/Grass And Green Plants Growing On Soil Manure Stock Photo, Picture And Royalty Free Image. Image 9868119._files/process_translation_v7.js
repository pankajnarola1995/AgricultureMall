function htmlDecode(input){
	var e = document.createElement('div');
	e.innerHTML = input;
	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function process_search(form,tWord,tLang,searchText)
{
	var search = form.word;
	var source = "";

	if(search.value.length === 0 || search.value == "Enter keywords or image code") {
		alert("Please enter a keyword.");
		search.focus();
		return false;
	}

	document.getElementById(tWord).value = "";
	if (document.getElementById('g_lang_uni') !== null && document.getElementById('g_lang_uni').style.display != "none")
	{
		document.getElementById(tLang).value = document.getElementById('g_lang_uni').value;
	}

	var current_lang = document.getElementById(tLang).value;

	if((current_lang != "en" && current_lang !== "") || document.getElementById('uni_srch_lang').checked)
	{
		url_link = 'http://www.123rf.com';
		
		if(current_lang == "gb"){
			url_link ='http://www.123rf.net';
		}
		
		var newScript = document.createElement('script');
		newScript.type = 'text/javascript';

		var sourceText = encodeURI(document.getElementById(searchText).value);
		
		if(document.getElementById('uni_srch_lang').checked){
			source = url_link+'/translate/index.php?source=&target=en&callback=translateText&q=' + sourceText;
		}else{
			source = url_link+'/translate/index.php?source=' + current_lang + '&target=en&callback=translateText&q=' + sourceText;
		}
		
		newScript.src = source;

		document.getElementsByTagName('head')[0].appendChild(newScript);
		
		return false;
	}else{
		return true;
	}
}

function process_search_text(form)
{
	return process_search(form,"tword","t_lang","searchtext");
}

function process_search_text2(form)
{
	return process_search(form,"t_word2","t_lang2","searchtext2");
}

function process_search_text3(form)
{
	return process_search(form,"t_word3","t_lang3","searchtext");
}

function translateText(response)
{
	document.getElementById("tword").value += htmlDecode(response.data.translations[0].translatedText);
	document.searchForm.submit();
}

function translateText2(response)
{
	document.getElementById("t_word2").value += htmlDecode(response.data.translations[0].translatedText);
	document.searchForm2.submit();
}
function translateText3(response)
{
	document.getElementById("t_word3").value += htmlDecode(response.data.translations[0].translatedText);
	document.searchForm3.submit();
}