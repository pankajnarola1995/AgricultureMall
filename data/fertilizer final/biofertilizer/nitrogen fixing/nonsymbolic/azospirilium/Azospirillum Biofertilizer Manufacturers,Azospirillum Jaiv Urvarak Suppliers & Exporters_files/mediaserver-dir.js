var mediaserver_height="";
var mediaserver_width="";
var mediaserver_contenttype="";
var mediaserver_id="";
var mediaserver_uname="";
var mediaserver_comp="";
var mediaserver_mcat="";
var mediaserver_cat="";
var mediaserver_grp="";
var mediaserver_cmpg="";
var mediaserver_kwd="";
var mediaserver_otherparam="";
var mediaserver_nomore=0;
var mediaserver_noadv=0;
var mediaserver_newwin=0;
var mediaserver_paidonly=0;
var mediaserver_useiframe=0;
var mediaserver_parentwindow=0;
var mediaserver_ad_url = "";
var mediaserver_size1 = "";
var mediaserver_size2 = "";
var mediaserver_size3 = "";
var mediaserver_size4 = "";
var mediaserver_location1 = "";
var mediaserver_location2 = "";
var mediaserver_location3 = "";
var mediaserver_location4 = "";
var mediaserver_pageurl = "";
var mediaserver_timeout = 5000;
var mediaserver_gluserid = "";

function serve_ad(mycompid, callback)
{
	if (mediaserver_otherparam == '')
	{
	    mediaserver_ad_url = 'http://www.media4trade.com/mediaserver-dir?';
// 	    mediaserver_size = mediaserver_width+'x'+mediaserver_height;
	    mediaserver_pageurl;
	    if(mediaserver_parentwindow == 1)
	    {
		    mediaserver_pageurl = parent.document.location;
	    }
	    else
	    {
		    mediaserver_pageurl = document.location;
	    }
// 	    mediaserver_pageurl = 'http://dir.indiamart.com/';

	    mediaserver_ad_url += 'action=show';
	    mediaserver_ad_url += '&pageurl=' + encodeURIComponent(mediaserver_pageurl);
	    mediaserver_ad_url += '&location1=' + mediaserver_location1;
	    mediaserver_ad_url += '&location2=' + mediaserver_location2;
	    mediaserver_ad_url += '&location3=' + mediaserver_location3;
	    mediaserver_ad_url += '&location4=' + mediaserver_location4;
	    mediaserver_ad_url += '&kwd=' + encodeURIComponent(mediaserver_kwd);
	    mediaserver_ad_url += '&size1=' + mediaserver_size1;
	    mediaserver_ad_url += '&size2=' + mediaserver_size2;
	    mediaserver_ad_url += '&size3=' + mediaserver_size3;
	    mediaserver_ad_url += '&size4=' + mediaserver_size4;
	    mediaserver_ad_url += '&contenttype=' + mediaserver_contenttype;
	    mediaserver_ad_url += '&id=' + mediaserver_id;
	    mediaserver_ad_url += '&uname=' + mediaserver_uname;

	    if(mycompid)
	    {
		    mediaserver_ad_url += '&comp=' + mycompid;
	    }
	    else
	    {
		    mediaserver_ad_url += '&comp=' + mediaserver_comp;
	    }
	    
	    mediaserver_ad_url += '&mcat=' + mediaserver_mcat;
	    mediaserver_ad_url += '&cat=' + mediaserver_cat;
	    mediaserver_ad_url += '&grp=' + mediaserver_grp;
	    mediaserver_ad_url += '&cmpg=' + mediaserver_cmpg;
	    mediaserver_ad_url += '&otherparam=' + encodeURIComponent(mediaserver_otherparam);
	    mediaserver_ad_url += '&nomore=' + mediaserver_nomore;
	    mediaserver_ad_url += '&noadv=' + mediaserver_noadv;
	    mediaserver_ad_url += '&newwin=' + mediaserver_newwin;
	    mediaserver_ad_url += '&paidonly=' + mediaserver_paidonly;
	    mediaserver_ad_url += '&glid=' + mediaserver_gluserid;
	    
	    $.ajax
	    ({
		    url: mediaserver_ad_url,
		    type: 'GET',
		    dataType: 'jsonp',
		    timeout: mediaserver_timeout,
		    success: function(s)
		    {
			var banner1 = '';
			var target_url1 = '';
			var size1 = '';
			var location1 ='';
			var banner2 = '';
			var target_url2 = '';
			var size2 = '';
			var location2 ='';
			var banner3 = '';
			var target_url3 = '';
			var size3 = '';
			var location3 ='';
			var banner4 = '';
			var target_url4 = '';
			var size4 = '';
			var location4 ='';

			if(typeof(s["1"]) != 'undefined' && s["1"] != null)
			{
				banner1 = s["1"].banner;
				target_url1 = s["1"].target_url;
				size1 = s["1"].size;
				location1 = s["1"].location;
			}

			if(typeof(s["2"]) != 'undefined' && s["2"] != null)
			{ 
				banner2 = s["2"].banner;
				target_url2 = s["2"].target_url;
				size2 = s["2"].size;
				location2 = s["2"].location;
			}
			
			if(typeof(s["3"]) != 'undefined' && s["3"] != null)
			{ 
				banner3 = s["3"].banner;
				target_url3 = s["3"].target_url;
				size3 = s["3"].size;
				location3 = s["3"].location;
			}
			if(typeof(s["4"]) != 'undefined' && s["4"] != null)
			{ 
				banner4 = s["4"].banner;
				target_url4 = s["4"].target_url;
				size4 = s["4"].size;
				location4 = s["4"].location;
			}	callback.call(null,banner1,target_url1,size1,location1,banner2,target_url2,size2,location2,banner3,target_url3,size3,location3,banner4,target_url4,size4,location4);
		    },
		    error: function(XHR, textStatus, errorThrown) 
		    {
		       callback.call(null, textStatus, errorThrown);
		    }
	    });
		
	}
	else
	{
		if (mediaserver_location == 'TOP1RIGHT')
		{
		    mediaserver_ad_url = 'http://www.media4trade.com/prdservernewm4t-new?';
		    mediaserver_size = mediaserver_width+'x'+mediaserver_height;
		    mediaserver_pageurl;
		    if(mediaserver_parentwindow == 1)
		    {
			    mediaserver_pageurl = parent.document.location;
		    }
		    else
		    {
			    mediaserver_pageurl = document.location;
		    }

		    mediaserver_ad_url += 'action=show';
		    mediaserver_ad_url += '&pageurl=' + encodeURIComponent(mediaserver_pageurl);
		    mediaserver_ad_url += '&location=' + mediaserver_location;
		    mediaserver_ad_url += '&kwd=' + encodeURIComponent(mediaserver_kwd);
		    mediaserver_ad_url += '&size=' + mediaserver_size;
		    mediaserver_ad_url += '&contenttype=' + mediaserver_contenttype;
		    mediaserver_ad_url += '&id=' + mediaserver_id;
		    mediaserver_ad_url += '&uname=' + mediaserver_uname;

		    if(mycompid)
		    {
			    mediaserver_ad_url += '&comp=' + mycompid;
		    }
		    else
		    {
			    mediaserver_ad_url += '&comp=' + mediaserver_comp;
		    }
		    
		    mediaserver_ad_url += '&mcat=' + mediaserver_mcat;
		    mediaserver_ad_url += '&cat=' + mediaserver_cat;
		    mediaserver_ad_url += '&grp=' + mediaserver_grp;
		    mediaserver_ad_url += '&cmpg=' + mediaserver_cmpg;
		    mediaserver_ad_url += '&otherparam=' + encodeURIComponent(mediaserver_otherparam);
		    mediaserver_ad_url += '&nomore=' + mediaserver_nomore;
		    mediaserver_ad_url += '&noadv=' + mediaserver_noadv;
		    mediaserver_ad_url += '&newwin=' + mediaserver_newwin;
		    mediaserver_ad_url += '&paidonly=' + mediaserver_paidonly;

		    $.ajax
		    ({
			    url: mediaserver_ad_url,
			    type: 'GET',
			    dataType: 'jsonp',
 			    timeout: mediaserver_timeout,
			    success: function(s)
			    {
			      var img_path = s.img_path;
			      var product_link = s.product_link;
			      var prd_name = s.prd_name;
			      var home_link = s.home_link;
			      var comp = s.comp; 
			      callback.call(null,img_path,product_link,prd_name,home_link,comp);
			    }
		    });
		}
		else if (mediaserver_location == 'MIDDLE1')
		{
		    mediaserver_ad_url = 'http://www.media4trade.com/prdservernewm4t-new?';
		    mediaserver_size = mediaserver_width+'x'+mediaserver_height;
		    mediaserver_pageurl;
		    if(mediaserver_parentwindow == 1)
		    {
			    mediaserver_pageurl = parent.document.location;
		    }
		    else
		    {
			    mediaserver_pageurl = document.location;
		    }

		    mediaserver_ad_url += 'action=show';
		    mediaserver_ad_url += '&pageurl=' + encodeURIComponent(mediaserver_pageurl);
		    mediaserver_ad_url += '&location=' + mediaserver_location;
		    mediaserver_ad_url += '&kwd=' + encodeURIComponent(mediaserver_kwd);
		    mediaserver_ad_url += '&size=' + mediaserver_size;
		    mediaserver_ad_url += '&contenttype=' + mediaserver_contenttype;
		    mediaserver_ad_url += '&id=' + mediaserver_id;
		    mediaserver_ad_url += '&uname=' + mediaserver_uname;

		    if(mycompid)
		    {
			    mediaserver_ad_url += '&comp=' + mycompid;
		    }
		    else
		    {
			    mediaserver_ad_url += '&comp=' + mediaserver_comp;
		    }
		    
		    mediaserver_ad_url += '&mcat=' + mediaserver_mcat;
		    mediaserver_ad_url += '&cat=' + mediaserver_cat;
		    mediaserver_ad_url += '&grp=' + mediaserver_grp;
		    mediaserver_ad_url += '&cmpg=' + mediaserver_cmpg;
		    mediaserver_ad_url += '&otherparam=' + encodeURIComponent(mediaserver_otherparam);
		    mediaserver_ad_url += '&nomore=' + mediaserver_nomore;
		    mediaserver_ad_url += '&noadv=' + mediaserver_noadv;
		    mediaserver_ad_url += '&newwin=' + mediaserver_newwin;
		    mediaserver_ad_url += '&paidonly=' + mediaserver_paidonly;
		    $.ajax
		    ({
			    url: mediaserver_ad_url,
			    type: 'GET',
			    dataType: 'jsonp',
			    timeout: mediaserver_timeout,
			    success: function(s)
			    {
			      var sm_img_path = '';
			      var prd_search_company = '';
			      var prd_search_name = '';
			      var prd_link = '';
			      var sm_img_path1 = '';
			      var prd_search_company1 = '';
			      var prd_search_name1 = '';
			      var prd_link1 = '';
			      var sm_img_path2 = '';
			      var prd_search_company2 = '';
			      var prd_search_name2 = '';
			      var prd_link2 = '';
	    
			      if(typeof(s["1"]) != 'undefined' && s["1"] != null)
			      {
			      sm_img_path = s["1"].sm_img_path;
			      prd_search_company = s["1"].prd_search_company;
			      prd_search_name = s["1"].prd_search_name;
			      prd_link = s["1"].prd_link;
			      }

			      if(typeof(s["2"]) != 'undefined' && s["2"] != null)
			      { 
			      sm_img_path1 = s["2"].sm_img_path;
			      prd_search_company1 = s["2"].prd_search_company;
			      prd_search_name1 = s["2"].prd_search_name;
			      prd_link1 = s["2"].prd_link;
			      }
			      
			      if(typeof(s["3"]) != 'undefined' && s["3"] != null)
			      { 
			      sm_img_path2 = s["3"].sm_img_path;
			      prd_search_company2 = s["3"].prd_search_company;
			      prd_search_name2 = s["3"].prd_search_name;
			      prd_link2 = s["3"].prd_link;
			      } callback.call(null,sm_img_path,prd_search_company,prd_search_name,prd_link,sm_img_path1,prd_search_company1,prd_search_name1,prd_link1,sm_img_path2,prd_search_company2,prd_search_name2,prd_link2);
			    }  
		    });
		} 
		else
		{
		    mediaserver_ad_url = 'http://www.media4trade.com/prdservernewm4t-new?';
		    mediaserver_size = mediaserver_width+'x'+mediaserver_height;
		    mediaserver_pageurl;
		    if(mediaserver_parentwindow == 1)
		    {
			    mediaserver_pageurl = parent.document.location;
		    }
		    else
		    {
			    mediaserver_pageurl = document.location;
		    }

		    mediaserver_ad_url += 'action=show';
		    mediaserver_ad_url += '&pageurl=' + encodeURIComponent(mediaserver_pageurl);
		    mediaserver_ad_url += '&location=' + mediaserver_location;
		    mediaserver_ad_url += '&kwd=' + encodeURIComponent(mediaserver_kwd);
		    mediaserver_ad_url += '&size=' + mediaserver_size;
		    mediaserver_ad_url += '&contenttype=' + mediaserver_contenttype;
		    mediaserver_ad_url += '&id=' + mediaserver_id;
		    mediaserver_ad_url += '&uname=' + mediaserver_uname;

		    if(mycompid)
		    {
			    mediaserver_ad_url += '&comp=' + mycompid;
		    }
		    else
		    {
			    mediaserver_ad_url += '&comp=' + mediaserver_comp;
		    }
		    
		    mediaserver_ad_url += '&mcat=' + mediaserver_mcat;
		    mediaserver_ad_url += '&cat=' + mediaserver_cat;
		    mediaserver_ad_url += '&grp=' + mediaserver_grp;
		    mediaserver_ad_url += '&cmpg=' + mediaserver_cmpg;
		    mediaserver_ad_url += '&otherparam=' + encodeURIComponent(mediaserver_otherparam);
		    mediaserver_ad_url += '&nomore=' + mediaserver_nomore;
		    mediaserver_ad_url += '&noadv=' + mediaserver_noadv;
		    mediaserver_ad_url += '&newwin=' + mediaserver_newwin;
		    mediaserver_ad_url += '&paidonly=' + mediaserver_paidonly;
		    
		    $.ajax
		    ({
			    url: mediaserver_ad_url,
			    type: 'GET',
			    dataType: 'jsonp',
 			    timeout: mediaserver_timeout,
			    success: function(s)
			    {
			      var view_catalog_url1 = s["1"].view_catalog_url;
			      var sm_img_path1 = s["1"].sm_img_path;
			      var prd_search_name1 = s["1"].prd_search_name;
			      var company1 = s["1"].company;
			      
			      var view_catalog_url2 = s["2"].view_catalog_url;
			      var sm_img_path2 = s["2"].sm_img_path;
			      var prd_search_name2 = s["2"].prd_search_name;
			      var company2 = s["2"].company;
			      
			      var view_catalog_url3 = s["3"].view_catalog_url;
			      var sm_img_path3 = s["3"].sm_img_path;
			      var prd_search_name3 = s["3"].prd_search_name;
			      var company3 = s["3"].company;
			      
			      var view_catalog_url4 = s["4"].view_catalog_url;
			      var sm_img_path4 = s["4"].sm_img_path;
			      var prd_search_name4 = s["4"].prd_search_name;
			      var company4 = s["4"].company;
			      
			      var view_catalog_url5 = s["5"].view_catalog_url;
			      var sm_img_path5 = s["5"].sm_img_path;
			      var prd_search_name5 = s["5"].prd_search_name;
			      var company5 = s["5"].company;
			      
			      var view_catalog_url6 = s["6"].view_catalog_url;
			      var sm_img_path6 = s["6"].sm_img_path;
			      var prd_search_name6 = s["6"].prd_search_name;
			      var company6 = s["6"].company;
			      
			      var view_catalog_url7 = s["7"].view_catalog_url;
			      var sm_img_path7 = s["7"].sm_img_path;
			      var prd_search_name7 = s["7"].prd_search_name;
			      var company7 = s["7"].company;
			      
			      var view_catalog_url8 = s["8"].view_catalog_url;
			      var sm_img_path8 = s["8"].sm_img_path;
			      var prd_search_name8 = s["8"].prd_search_name;
			      var company8 = s["8"].company;
			      
			      var view_catalog_url9 = s["9"].view_catalog_url;
			      var sm_img_path9 = s["9"].sm_img_path;
			      var prd_search_name9 = s["9"].prd_search_name;
			      var company9 = s["9"].company;
			      
			      var view_catalog_url10 = s["10"].view_catalog_url;
			      var sm_img_path10 = s["10"].sm_img_path;
			      var prd_search_name10 = s["10"].prd_search_name;
			      var company10 = s["10"].company;
			      
			      var view_catalog_url11 = s["11"].view_catalog_url;
			      var sm_img_path11 = s["11"].sm_img_path;
			      var prd_search_name11 = s["11"].prd_search_name;
			      var company11 = s["11"].company;
			      
			      var view_catalog_url12 = s["12"].view_catalog_url;
			      var sm_img_path12 = s["12"].sm_img_path;
			      var prd_search_name12 = s["12"].prd_search_name;
			      var company12 = s["12"].company;
			      
			      var view_catalog_url13 = s["13"].view_catalog_url;
			      var sm_img_path13 = s["13"].sm_img_path;
			      var prd_search_name13 = s["13"].prd_search_name;
			      var company13 = s["13"].company;
			      
			      var view_catalog_url14 = s["14"].view_catalog_url;
			      var sm_img_path14 = s["14"].sm_img_path;
			      var prd_search_name14 = s["14"].prd_search_name;
			      var company14 = s["14"].company;
			      
			      var view_catalog_url15 = s["15"].view_catalog_url;
			      var sm_img_path15 = s["15"].sm_img_path;
			      var prd_search_name15 = s["15"].prd_search_name;
			      var company15 = s["15"].company;
			      
			      var view_catalog_url16 = s["16"].view_catalog_url;
			      var sm_img_path16 = s["16"].sm_img_path;
			      var prd_search_name16 = s["16"].prd_search_name;
			      var company16 = s["16"].company;
			      callback.call(null,view_catalog_url1,sm_img_path1,prd_search_name1,company1,view_catalog_url2,sm_img_path2,prd_search_name2,company2,view_catalog_url3,sm_img_path3,prd_search_name3,company3,view_catalog_url4,sm_img_path4,prd_search_name4,company4,view_catalog_url5,sm_img_path5,prd_search_name5,company5,view_catalog_url6,sm_img_path6,prd_search_name6,company6,view_catalog_url7,sm_img_path7,prd_search_name7,company7,view_catalog_url8,sm_img_path8,prd_search_name8,company8,view_catalog_url9,sm_img_path9,prd_search_name9,company9,view_catalog_url10,sm_img_path10,prd_search_name10,company10,view_catalog_url11,sm_img_path11,prd_search_name11,company11,view_catalog_url12,sm_img_path12,prd_search_name12,company12,view_catalog_url13,sm_img_path13,prd_search_name13,company13,view_catalog_url14,sm_img_path14,prd_search_name14,company14,view_catalog_url15,sm_img_path15,prd_search_name15,company15,view_catalog_url16,sm_img_path16,prd_search_name16,company16);
			    }
		    });
		}       
	}
}


function resize_img(Obj, image)
{
	myImage = new Image();
	myImage.src = image;
	var height = myImage.height;
	var width  = myImage.width;

	if(height > 100 || width > 100)
	{
		if(height > width)
		{
			var temp = height/100;

			var new_width = width / temp;
			new_width = parseInt(new_width);

			height = 100;
			width = new_width;
		}
		else
		{
			var temp = width/100;

			var new_height = height / temp;
			new_height = parseInt(new_height);

			height = new_height;
			width = 100;
		}
	}
	Obj.height = height;
	Obj.width = width;
}

function resize_hw(Obj, h, w) { myImage = new Image(); myImage.src = Obj.src; var height = myImage.height; var width  = myImage.width; if(height > h || width > w) { if(height > width) { var temp = height/h; var new_width = width / temp; new_width = parseInt(new_width); height = h; width = new_width; } else { var temp = width/w; var new_height = height / temp; new_height = parseInt(new_height); height = new_height; width = w; } } Obj.height = height; Obj.width = width; }