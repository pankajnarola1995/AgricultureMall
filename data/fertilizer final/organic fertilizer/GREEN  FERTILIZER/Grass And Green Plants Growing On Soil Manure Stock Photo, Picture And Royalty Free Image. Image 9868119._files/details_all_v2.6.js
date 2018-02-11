function openPreview(url){
	$("details_preview_overlay_comp").style.display = "block";
	setTimeout(function(){
		$("details_preview_overlay_comp").style.opacity = 0.6;
	},100);
	$("details_preview_basket").style.display = "block";

	if(preview_loaded){
		showPreview();
	}else{
		var elem = document.createElement("img");
		elem.setAttribute("src", imgcacheserver+"/images/loading1.gif");
		$("details_preview_basket_loading").appendChild(elem);
		
		var elem = document.createElement("img");
		elem.setAttribute("src", url);
		elem.setAttribute("id", "details_preview_basket_img");
		$("details_preview_basket_img_wrapper").appendChild(elem);
		preview_loaded = 1;

		$("details_preview_basket_img").observe('click', function() {
			closePreview();
		});
		$("details_preview_basket_img").onload = function(){
			showPreview();
		};
	}
}

function showPreview(){
	var preview_height = document.documentElement.clientHeight * preview_screen_percentage;
	preview_height = ((preview_height>preview_max_size)?preview_max_size:preview_height);
	var preview_width = getWidthForHeight(preview_height);
	if(preview_width > (document.documentElement.clientWidth * preview_screen_percentage)){
		preview_width = document.documentElement.clientWidth * preview_screen_percentage;
		preview_height = getHeightForWidth(preview_width);
	}
	preview_width = Math.floor(preview_width);
	preview_height = Math.floor(preview_height);
	var previewImage_width = preview_width - preview_padding;
	var previewImage_height = preview_height - preview_padding;

	$("details_preview_basket").style.width = Math.max(preview_width,0)+"px";
	$("details_preview_basket").style.height = Math.max(preview_height,0)+"px";
	$("details_preview_basket_img_wrapper").width = previewImage_width;
	$("details_preview_basket_img_wrapper").height = previewImage_height;
	$("details_preview_basket_img").width = previewImage_width;
	$("details_preview_basket_img").height = previewImage_height;
	$("details_preview_basket").style.borderRadius = 0;

	setTimeout(function(){
		$("details_preview_basket_loading").style.display = "none";
		$("details_preview_basket_img_wrapper").style.display = "block";
		$("details_preview_exit_comp").style.display = "block";
		setTimeout(function(){
			$("details_preview_basket_img_wrapper").style.opacity = 1;
		},0);
	},300);
}

function closePreview(){
	$("details_preview_basket").style.display = "none";
	$("details_preview_overlay_comp").style.opacity = 0;
	setTimeout(function(){
		$("details_preview_overlay_comp").style.display = "none";
	},300);
}

function getWidthForHeight(height){
	return height * ((image_true_width) / (image_true_height));
}

function getHeightForWidth(width){
	return width * ((image_true_height) / (image_true_width));
}

function proceedDownload(mode, url){

	if(mode == "footage"){
		var producttype = "Footage";
	}else if(mode == "audio"){
		var producttype = "Audio";
	}else if(mode == 1){
		var producttype = "Vector";
	}else{
		var producttype = "Photo";
	}
	if (typeof clickEvent == 'function') { 
  		clickEvent("Clicks Download",producttype);
	}

	if(dllink_ready){
		if(mode=="footage" || mode=="audio"){
			var dllink = url;
		}else{
			var dllink = $("downloadlinknew").href;
		}

		dllink = dllink.replace("https:", "");
		dllink = dllink.replace("http:", "");
		dllink_tmp = dllink.toLowerCase();
		
		if(dllink_tmp.search("enlargement")>0 || dllink_tmp.search("isfreemode")>0 || old_dl_mode){
			top.location.href = dllink + '&dltrackid=' + final_string;
		}else{
			$("details_download_basket_loading").style.display = "block";
			$("details_download_overlay_comp").style.display = "block";
			setTimeout(function(){
				$("details_download_exit_comp").style.display = "block";
				$("details_download_overlay_comp").style.opacity = 0.6;
			},100);

			$("details_download_basket").style.display = "block";

			dllink = dllink + "&overlay=1&dltrackid=" + final_string;

			new Ajax.Request(dllink,
			{
				method:'get',
				requestHeaders:
				{
					Accept: 'application/json'
				},
				parameters:
				{},
				onSuccess: function(response)
				{
					var data = response.responseText.evalJSON();

					if(data.redirect){
						top.location.href = data.redirect;
					}else{
						$("details_download_basket_content_wrapper").style.display = "block";
						$("details_download_basket_loading").style.display = "none";

						//force the attribution box to display by default
						if(attributionBox < 1){
							toggleAttributionBox();
						}
						
						document.getElementById("dlbox-title").innerHTML = downloadpopup_text[data.title];
						document.getElementById("dlbox-main-contentbox-imageid").innerHTML = data.item;
						
						if(data.status == "1"){
							if (typeof clickEvent == 'function') { 
						  		clickEvent("Download Successful",producttype);
							}
							
							var remaining_text_final = "";
							if(data.remaining_text != ""){
								remaining_text_final = downloadpopup_text[data.remaining_text];
								data.remaining_value = ((data.remaining_value!="" && data.remaining_value!=null && data.remaining_value>0)?data.remaining_value:"0");
								remaining_text_final = remaining_text_final.replace("CONST_VAL", data.remaining_value);
							}

							document.getElementById("dlbox-main-contentbox").innerHTML = downloadpopup_text["LANG_EXT_MSG6"]+" <a href=\"#\" onclick=\"downloadFile();return false;\">"+downloadpopup_text["LANG_CLICKHERE"]+"</a><br><br>"+remaining_text_final;

							window.location = data.dlurl;
							finaldllink = data.dlurl;
							if(data.mode=="credits")
							{
								dataLayer.push({
								'language': js_lang,
								'type': data.dlType,
								'category': ' ',
								'credits_used': data.creditcost,
								'event': 'DownloadSuccess'
								});
							}
						}else{
							document.getElementById("dlbox-main-contentbox").innerHTML = ((data.msg)?data.msg+"<br>":"") + downloadpopup_text["LANG_ERRORCONTACT"];
							finaldllink = "";
						}
					}
				}
			});
		}
	}
}
var dllink_ready;
var finaldllink;
function downloadFile(){
	if(finaldllink){
		window.location = finaldllink;
	}
}

function closeDownloadBasket(){
	$("details_download_basket").style.display = "none";
	$("details_download_basket_content_wrapper").style.display = "none";
	$("details_download_overlay_comp").style.opacity = 0;
	setTimeout(function(){
		$("details_download_overlay_comp").style.display = "none";
	},300);
}

var attributionBox = 0;
function toggleAttributionBox(){
	if(attributionBox){
		$("details_download_attribution_content").style.display = "none";
		$("dlbox_arrow").className = "dlbox_arrow";
		$("details_download_basket").style.height = "290px";
		attributionBox = 0;
	}else{
		$("details_download_attribution_content").style.display = "block";
		$("dlbox_arrow").className = "dlbox_arrow_rotate";
		$("details_download_basket").style.height = "400px";
		var referrallink_text = $("referrallink").value;
		referrallink_text = referrallink_text.replace("profile_'", "profile_"+image_contributor+"'");
		referrallink_text = referrallink_text.replace("CONTRINAME", image_contributor);
		$("referrallink").value = referrallink_text;
		attributionBox = 1;
	}
}

window.onload = function(){
	if($("details_preview_basket") && image_true_width && image_true_height && $("compImg_link") && $("details_preview_overlay_comp") && $("details_preview_exit_comp")){
		$("compImg_link").observe('click', function(e) {
			e.preventDefault();
			openPreview($("compImg_link").getAttribute("href"));
		});
		$("details_preview_overlay_comp").observe('click', function() {
			closePreview();
		});
		$("details_preview_exit_comp").observe('click', function() {
			closePreview();
		});
	}
	dllink_ready = 1;
	if($("details_download_basket") && $("details_download_overlay_comp") && $("details_download_exit_comp") && $("details_download_attribution_bar")){
		$("details_download_overlay_comp").observe('click', function() {
			closeDownloadBasket();
		});
		$("details_download_exit_comp").observe('click', function() {
			closeDownloadBasket();
		});
		$("details_download_attribution_bar").observe('click', function() {
			toggleAttributionBox();
		});
	}
};
