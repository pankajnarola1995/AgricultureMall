/* From: production-mt-wfe-52-229-use1 : 23307 */
jQuery(document).ready(function(b){var c;var a;b(".geo_dropdown").click(function(){a=b(this).find("menu.inner");a.toggleClass("off");b(this).toggleClass("selected")}).mouseleave(function(){var d=b(this);c&&clearTimeout(c);c=setTimeout(function(){!a.hasClass("off")&&a.addClass("off")&&d.removeClass("selected")},1000)}).mouseenter(function(){c&&clearTimeout(c)})});
jQuery(document).ready(function($) {


(function($){
	
	/*
	* General page decoration
	*/	
	var decoration = {
		init: function() {						
		  
			// Add class to last LIs
			$('li:last-child').addClass('last');						
			
			// Style HRs
			$('hr').wrap('<div class="hr">').remove();
			
			// Quotes
			$('blockquote').append('<div class="ql"></div><div class="qr"></div>');
			
			// Cleanup
      $(".mod-advice img").each(function(){
        if($(this).attr("src") == null || $(this).attr("src") == '') {
          $(this).remove();
        }
      });

      // Cleanup
      $(".mod-top-stories img").each(function(){
        if($(this).attr("src") == null || $(this).attr("src") == ''){
          $(this).remove();
        }
      });			
		}		
	}
	
	/**
	* Adds text hint to form fields
	*/
	var placeholder = {
	  init: function() {
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur();

      $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
        })
      });	    
	  }
	}
	
	
	/*
	* Compares the heights of two columns, trims elements from tallest column to approximate their height
	*/
	var resizeRail = {
	  init: function() {

      var a = $('#content-main'), 
          b = $('#content-related'),
          c = $('#content-related .mod-advice .items'),
          trimTimeout,
          trimInterval;          
	    
	    if(a.length > 0 && b.length > 0) {

        // Wait for rail modules to finish loading
        trimTimeout = setTimeout(function() {

          // Compare column heights
          trimInterval = setInterval(function() {
            if((b.height() - 100) > a.height()) {

              // Remove elements from designated module
              c.find('li:eq(' + (c.children().length - 1) + ')').remove(); 
            }
            else {
              clearInterval(trimInterval);
            }
          }, 50)

        }, 1000);	    	      
	    }	    
	  }
	}
	
	
	/*
	* The trending module
	*/	
	var modTrending = {
		init: function() {
		  
		  // typical components that make up the module
		  var components = ['.stories', '.quote', '.bloggers'];
		  
		  // let's see which ones are present
		  for(var i=0;i<components.length;i++) {
        if($('.mod-trending ' + components[i]).length == 0) {
          components.splice(i--, 1);
        }		
		  }
		  
		  // tag the last one on the stack
      $('.mod-trending ' + components[components.length - 1]).addClass('last-component');
		}		
	}
		
	/*
	* The Join the Conversation module
	*/	
	var modConversation = {
		init: function() {		  
		  
		  if(typeof HuffCookies !== 'undefined'){
  		  // show user name and avatar
        var profileContainer = $('#comment_general_root'),
            userAvatar = HuffCookies.getCurrentUserPhotoUrl(),
            userName = HPUtil.getDisplayName();
        if(userName != '') {
          $('.user-name', profileContainer).prepend(userName).show();                  
        }      
        if(userAvatar != '') {
          $('.avatar img', $(profileContainer)).attr('src', userAvatar);        
          $('.avatar', $(profileContainer)).show();
					$('.comments_textarea', $(profileContainer)).addClass('with-avatar');
        }           

  			// grab the data that comes back from the post
  			huff.on('content/update', function(entryId){
  				var entryComments = $(entryId);
  				var commentBody = $('.comment_body', entryComments).html();
  				if(entryId.indexOf('#comments_inner') !== -1 && entryComments && entryComments.children().length > 0) {
  					$('.mod-conversation ul.comments li.last').removeClass('last');
  					$('.mod-conversation ul.comments').append('<li class="last"><p><strong>'+userName+'</strong> '+commentBody+'</p><small>'+__('just now')+'</small></li>');
  					$('#reply_ajax_for_root').remove();					
  					entryComments.remove();					
  				}
  			});      		    
		  }
		 
		}		
	}


	/*
	* Video Picks module
	*/	
	var modVideos = {
		init: function() {
		  
		  var ndn_lightbox=null;
      var ndn_videos = [];
      
		  // launches video player
		  function ndn_lightbox_launch(videoData, entry_url) {
		    
		    // instantiation the lightbox
        if(ndn_lightbox==null) {
          ndn_lightbox = new FIVEMIN.VideoLightbox({playerWidth:625, playerHeight: 440, isFreewheel:true});
          ndn_lightbox.init({"lightboxAnim": 0, "overlayOpacity": "0.7", "overlayColor": "#222", "show5minLink": false, "show5minText": false, "relatedMode": 2 });
        }		    

        // exit if we don't have a video id
        if(videoData.id == '') return;
        
        // sort the playlist
        var c = ndn_videos.length;
        while(c > 0 && ndn_videos[0].toString() != videoData.id.toString()) ndn_videos.push(ndn_videos.shift());        
        
        videoData.playerType = 'playerseed';
        videoData.playerParam = 'http://pshared.5min.com/Scripts/PlayerSeed.js?sid=577&width=600&height=435&companionPos=bottom&hasCompanion=true&relatedMode=2&relatedBottomHeight=60&shuffle=0&autoStart=true&cbFailOverURL=fwscript&playList='+ndn_videos.join(',');

        if (typeof(commercial_video) == "object") {
            videoData.playerParam += '&siteSection=' + commercial_video.site_and_category;
            if (commercial_video.package) {
                videoData.playerParam += '&sponsorship=' + commercial_video.package;
            }
        }

        ndn_lightbox.show(videoData);
		  }
		  
		  // add click functionality, update image source/size 
      $('.mod-videos .item').each(function(){

        var title=$(this).attr('data-title');
        var link=$(this).attr('data-link');
        var id=$(this).attr('data-id');
		var itemImage = $(this).attr('data-image');
		var imgsrc = $('.widget_thumb', this).attr('longdesc');
		
		if (imgsrc.toLowerCase().indexOf("pthumbnails.5min.com") >= 0) {
			$('.widget_thumb', this).attr('src', $('.widget_thumb', this).attr('longdesc'));
		}
		else {
			$('.widget_thumb', this).css('width', '300px');
			$('.widget_thumb', this).css('height', '150px');
			$('.widget_thumb', this).attr('src', itemImage);
		}
		
        $('a', this).click(function(e){ndn_lightbox_launch({ 'title': title, 'PageURL': link, 'ReferrerURL': link, 'id':id},link); e.preventDefault(); e.stopPropagation(); return false;});
        ndn_videos.push(id);		
        
      });
		  
		}		
	}

	/*
	* Code that enables slides pagination
	*/	
	var slides = {
		init: function() {
		  $('.slides').each(function() {
		    $('.slides-content', this).cycle({
          fx: 'scrollHorz',
          timeout: 0,
					speed:450,
          pause: true,
          sync:true,
          next: $('.next', this),
          prev: $('.prev', this),
          pager: $('.slides-pager', this),
          after: function(curr, next, opts){
            $('.pager', $(this).parents('.slides:first')).html((opts.currSlide + 1) + ' ' + __('of') + ' ' + opts.slideCount)
          },
          pagerAnchorBuilder: function(idx, slide) {
              return '<a href="#">&nbsp;</a>';
          }          
		    });
		if ($('.slides-content li', this).length == 1) {
			$('.slides-content li', this).show();
			$('.mod-slideshow .slides-control').hide();
			$('.mod-slideshow .slides-pager').hide();			
		}	
		  });
		}		
	}

	/*
	* Code that enables tabs
	*/	
	var tabs = {
		init: function() {
		  $('.tabs').unbind().each(function() {
		    
		    // Bind events to tab buttons
				$('.tabs-control', this).delegate('.tabs-control > li', 'click', function(e){
					$(this).addClass('active').siblings().removeClass('active');
					$('.tabs-content > li', $(this).parents('.tabs:first')).hide().eq($(e.currentTarget).index()).show();
					return false;
				})
		  });
			// enable first tab		
			$('.tabs .tabs-control li:first-child').trigger('click');
		}		
	}


	//------	
	// INIT
	//------

  // General page scripts 
	decoration.init();
	placeholder.init();
	slides.init();
	tabs.init();
	resizeRail.init();
	
	// Module speficic
	modConversation.init();
	modTrending.init();
	modVideos.init();

})(jQuery)
	
});

jQuery(document).ready(function(){floater={floatContainer:null,floatWrapper:null,fb_like_display:null,stickyStopElement:jQuery("#floaterTarget"),disabled:window.disableFloater,init:function(a){if(typeof(this.disabled)==="boolean"&&this.disabled===true){return}else{this.floatContainer=jQuery(a);this.floatContainer.wrap('<div id="float_tracker" class="bN" />');this.floatWrapper=jQuery("#float_tracker");this.floatWrapper.attr("data-beacon",'{"p":{"mnid":"non_floating_share"}}');this.fb_like_display=jQuery(".VERB_RECOMMEND");if(this.floatContainer.hasClass("floating")){this.trackFloater()}}},trackFloater:function(){jQuery(window).scroll(function(){if(!floater.floatContainer.hasClass("floating_share")){floater.floatWrapper.height(floater.floatContainer.innerHeight()).width(floater.floatContainer.innerWidth())}if(floater.floatWrapper.height()==0){floater.floatWrapper.height(floater.floatContainer.innerHeight())}var b=floater.stickyStopElement.offset().top-floater.floatContainer.height();var a=floater.floatWrapper.offset().top+floater.floatWrapper.height();var c=jQuery(window).scrollTop();if(a<c){if(b<c){floater.belowScreen()}else{floater.offScreen()}}else{floater.onScreen()}})},onScreen:function(){if(this.floatContainer.hasClass("floating_share")){this.floatWrapper.attr("data-beacon",'{"p":{"mnid":"non_floating_share"}}');this.floatContainer.removeClass("floating_share")}if(this.fb_like_display.hasClass("VERB_RECOMMEND")){this.fb_like_display.attr("style","display:block")}},belowScreen:function(){if(this.floatContainer.hasClass("floating_share")){this.floatContainer.fadeOut()}},offScreen:function(){if(!this.floatContainer.hasClass("floating_share")){this.floatWrapper.attr("data-beacon",'{"p":{"mnid":"floating_share"}}');this.floatContainer.hide().delay(100).fadeIn().addClass("floating_share");this.setOffset()}else{this.floatContainer.fadeIn()}if(this.fb_like_display.hasClass("VERB_RECOMMEND")){this.fb_like_display.attr("style","display:none")}jQuery(window).resize(function(){floater.setOffset()})},setOffset:function(){var a=HPConfig.current_vertical_name=="greece"?108:55;var b=this.wrapperOffset=jQuery("#wrapper").offset().left-a;if(b<=0){if(this.floatContainer.hasClass("floating_share")){this.floatContainer.removeClass("floating_share")}}else{if(HPConfig.current_vertical_name=="arabi"){this.floatContainer.css({right:b})}else{this.floatContainer.css({left:b})}}},destroy:function(){this.floatContainer.removeClass("floating_share");delete window.floater;return true}};floater.init("#social_badges")});

/* From: production-mt-wfe-52-229-use1 : 23307 *//* dacd5e19d3b49d242bf5f2653714052fce645c63 */