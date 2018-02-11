		$(document).ready(function() { //http://www.vileworks.com/inframe-keep-the-demos-inside-the-page-with-jquery
		    $('a.inframe').click(function() {
			    var e=$(this);
    		
			    if (!e.data('state')) {	//if state is undefined
    		
				    e.data('state','open'); //set the state to 'open'
    			
				    // Extract the frame height from the height attribute
				    var frameHeight=e.attr('height');
				    var pat1 = new RegExp('height:');
				    pat1.test(frameHeight);
				    frameHeight=RegExp.rightContext;
				    var pat2 = new RegExp('px');
				    pat2.test(frameHeight);
				    frameHeight = RegExp.leftContext;
				    if ( !frameHeight || (Math.ceil(frameHeight) != Math.floor(frameHeight)) ) {
					    //if it's null or not an integer
					    frameHeight = '550'; //default frame height, in case none is specified
				    };
				    frameHeight += 'px';
    			    
    			    // Extract the frame width from the width attribute
				    var frameWidth=e.attr('width');
				    var pat3 = new RegExp('width:');
				    pat3.test(frameWidth);
				    frameWidth=RegExp.rightContext;
				    var pat4 = new RegExp('px');
				    pat4.test(frameWidth);
				    frameWidth = RegExp.leftContext;
				    if ( !frameWidth || (Math.ceil(frameWidth) != Math.floor(frameWidth)) ) {
					    //if it's null or not an integer
					    frameWidth = '550'; //default frame height, in case none is specified
				    };
				    frameWidth += 'px';
				    
				    
				    //frameWidth = '508px';
    			
				    // Insert the iframe just after the link
				    e.after('<iframe style="width:'+frameWidth+'; height:'+frameHeight+'; margin-bottom:1em; background:#fff;" src=' + e.attr('href') + ' frameborder="0" scrolling="no"></iframe>');
				    var iframe=e.next('iframe');
				    iframe.css('display', 'none');
				    // Insert the "loading..." text
				    iframe.before(' <h1 class="quiet"> Loading...</h1>')
				    iframe.load(function(){	//once content was loaded
					    iframe.slideDown(500);	//slide it down
					    iframe.prev('h1').remove();	//remove the 'loading...'
				    });
				    e.attr('title','Hide');	//set the link title to 'Hide'
			    } 
			    else if(e.data('state')=='closed') { //if state is 'closed'
				    e.data('state', 'open');
				    e.next('iframe').slideDown(500);
				    e.attr('title','Hide');
			    }
			    else if(e.data('state')=='open') { //if state is 'open'
				    e.data('state', 'closed');
				    e.next('iframe').slideUp(500);
				    e.attr('title','Show');
			    } 
			    return false;
		    });
        });		    
