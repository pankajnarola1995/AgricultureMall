$( function()
{
	$("#nav_tab ul li a").click(function( event )
	{
		event.preventDefault();
		// var -- grab class name
		var id = $(this).attr('class');
		// remove active classes
		$('#nav_tab ul li a').removeClass('active');
		// add active to current item
		$(this).addClass('active');
		// show div with same ID and hide siblings
		$('.tabs #'+id).siblings().hide();
		$('.tabs #'+id).fadeIn();
		$('#sorghums_trumba_cal iframe').css('min-height','400px');
		return false;
	});			

	// Caption Sliding (Partially Hidden to Visible)
	$('.recipe.caption').hover(function(){
		$(".cover", this).stop().animate({opacity:'.8'},{queue:false,duration:800});
		}, function() {
		$(".cover", this).stop().animate({opacity:'0'},{queue:false,duration:160});
	});
	
	// most external links get leaving site message (class="external")
	// all external links open in a new window
	$("a[href^='https:'], a[href^='http:']").not("[href*='sorghumcheckoff.com']").not("[href*='mcipreview.com']").not("[href*='aquariumdigital.com']").addClass('external').attr('target','_blank');  
	// open members section in a new window
	$("a[href^='http://members.sorghumcheckoff.mcipreview.com/login']").attr('target','_blank');

	$("#dialog").dialog(
	{
		autoOpen: false,
		modal: true
	});

	$(".external").click(function(e)
	{
		e.preventDefault();
		var targetUrl = $(this).attr("href");
		t = window.setTimeout (function()
			{
				$(".mask").hide();
				$('#dialog').dialog("close");
				window.open(targetUrl,"_blank");
			}, 4000);	
		
		$(".mask").show();
		$("#dialog").dialog({
			buttons :
			{
				"Continue to External Site" : function()
				{
					window.clearTimeout(t);
					$(".mask").hide();
					$(this).dialog("close");
					window.open(targetUrl,"_blank");
				},
				"Return to SorghumCheckoff.com" : function()
				{
					window.clearTimeout (t);
					$(".mask").hide();
					$(this).dialog("close");
				}
			}
		});

		$("#dialog").dialog("open");
		$(".ui-dialog-titlebar-close").click( function()
		{
			$(".mask").hide();
		});
	});

// This adds 'placeholder' to the items listed in the jQuery .support object.
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test)
   {
	   jQuery.support.placeholder = true;
   }
// This adds placeholder support to browsers that wouldn't otherwise support it.
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }

// data table
	$('#connection_table').dataTable(
	{
		"bJQueryUI"      : true,
		"sPaginationType": "full_numbers",
		"iDisplayLength" : 50
	});

	$('.tip').tooltip({showURL : false});

});
