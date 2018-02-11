var delay= 20;
var ie=0;
if (checkIt('msie')) ie=1;
griwDatas= new Array;
griwNb=0;
var griwPluginurl;
var griwroot;
var effectFuncIn=  [showIn, griwFadeIn, griwShrinkIn ,showIn, griwShrinkVIn, griwShrinkHIn];
var effectFuncOut= [showOut,griwFadeOut,griwShrinkOut,showOut, griwShrinkVOut, griwShrinkHOut];
if (ie==1)
{
	effectFuncIn[1]= showIn;
	effectFuncOut[1]= showOut;
}
function addLoadEvent(func) 
{ 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') 
	{ 
	    window.onload = func; 
	} else { 
	    window.onload = function() { 
		    if (oldonload) { 
		        oldonload(); 
		    } 
		    func(); 
		}; 
	}
}
function checkIt(string)
{
	var detect = navigator.userAgent.toLowerCase();
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}


function griwGetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        xmlHttp=new XMLHttpRequest();    
    }catch (e)
    {
        try
        {
        	xmlHttp =new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (e) {}
    }
	return xmlHttp;
}


function griwHideImage( objId)
{
	obj = document.getElementById(objId);
   	obj.style.display="none";
   	/*obj.style.visibility = 'hidden';*/
   //	obj.src=null;
   	obj.width=0;
   	obj.height=0;
}
function griwShowImage( objId)
{
	obj = document.getElementById(objId);
   	obj.style.display="block";
	/*obj.style.visibility = 'visible';*/
	obj.removeAttribute("width");
	obj.removeAttribute("height");
}
//fadein code from http://clagnut.com/sandbox/imagefades/
function griwSetOpacity(obj, opacity, useAlpha) {
  opacity = (opacity == 100)?99.999:opacity;
  // Safari -1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;
  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;
  // Safari +1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}
function griwShrinkIn(objId,opacity, useAlpha, width,hei) {
    
	obj = document.getElementById(objId);     
    griwSetOpacity(obj, opacity, useAlpha);
 
    nw=width*(opacity)/100;
    nh=hei*(opacity)/100;
    x=(width-nw)/2;
    y=(hei-nh)/2;
    
    if (ie==0)
    { 	 
    	obj.style.width = nw+"px";
    	obj.style.height = nh+"px";   
    } else {
	
    	obj.style.removeAttribute("width");
    	obj.style.removeAttribute("height");
    	obj.style.height = nh;  	
    }
    obj.style.left = x+"px";
    obj.style.top = y+"px";
    if (opacity < 100) {
	  opacity += 5;
	  window.setTimeout("griwShrinkIn('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay); 
    } 
}
function griwShrinkOut(objId,opacity,useAlpha, width, hei) 
{
	obj = document.getElementById(objId);
	griwSetOpacity(obj, opacity,useAlpha);
	nw= width*(opacity)/100;
	nh = hei*(opacity)/100;
	x=(width-nw)/2;   
	y=(hei-nh)/2;
	if (ie==0)
	{
		obj.style.width = nw+"px";
		obj.style.height = nh+"px";
	} else {
		obj.style.removeAttribute("width");
	    obj.style.removeAttribute("height");
	    obj.style.height = nh;	    
	  }
	  obj.style.left = x+"px";
	  obj.style.top = y+"px";
	  if (opacity > 0) 
	  {
		  opacity -= 5;
		  window.setTimeout("griwShrinkOut('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay);   
	  } else {
		griwHideImage(objId);
	  }
}
function griwShrinkVIn(objId,opacity, useAlpha, width,hei) {
	obj = document.getElementById(objId);     
    griwSetOpacity(obj, opacity, useAlpha);
    nh=hei*(opacity)/100; 
    if (ie==0)
    { 	 
    	obj.style.width = width+"px";
    	obj.style.height = nh+"px";   
    } else {
    	    	
    	obj.style.maxWidth=width;
    	obj.style.removeAttribute("height");
    	obj.style.height = nh;  	
    	obj.style.width = width+"px";
    	obj.style.height = nh; 	
    }
    obj.style.top=0;
    if (opacity < 100) {
	  opacity += 5;
	  window.setTimeout("griwShrinkVIn('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay); 
    } 
}
function griwShrinkVOut(objId,opacity,useAlpha, width, hei) 
{
	obj = document.getElementById(objId);
	griwSetOpacity(obj, opacity,useAlpha);
	nh = hei*(opacity)/100;
	y=(hei-nh);
	if (ie==0)
	{
		obj.style.width = width+"px";
		obj.style.height = nh+"px";
	} else {
		obj.style.removeAttribute("width");
	    obj.style.removeAttribute("height");
	    obj.style.height = nh;  	
    	obj.style.width = width;    	    
	  }
	  obj.style.top = y+"px";
	  if (opacity > 0) 
	  {
		  opacity -= 5;
		  window.setTimeout("griwShrinkVOut('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay);   
	  } else {
		griwHideImage(objId);
	  }
}
function griwShrinkHIn(objId,opacity, useAlpha, width,hei) {
    
	obj = document.getElementById(objId);     
    griwSetOpacity(obj, opacity, useAlpha);
      
	nw= width*(opacity)/100;
    
    if (ie==0)
    { 	 
    	obj.style.width = nw+"px";
    	obj.style.height = hei+"px";   
    } else {
    	    	
    	obj.style.maxWidth=width;
    	obj.style.removeAttribute("height");
    	obj.style.height = hei;  	
    	obj.style.width = nw+"px";
    	obj.style.height = hei;
    	
    }
    obj.style.top=0;
    obj.style.left = 0+"px";
    if (opacity < 100) {
	  opacity += 5;
	  window.setTimeout("griwShrinkHIn('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay); 
    } 
}
function griwShrinkHOut(objId,opacity,useAlpha, width, hei) 
{
	obj = document.getElementById(objId);
	griwSetOpacity(obj, opacity,useAlpha);
	
	nw= width*(opacity)/100;
	 	
	x=(width-nw); 
	if (ie==0)
	{
		obj.style.width = nw+"px";
		obj.style.height = hei+"px";
	} else {
		obj.style.removeAttribute("width");
	    obj.style.removeAttribute("height");
	    obj.style.height = hei;  	
    	obj.style.width = nw;    
	  }	 
	  obj.style.left = x+"px";
	  if (opacity > 0) 
	  {
		  opacity -= 5;
		  window.setTimeout("griwShrinkHOut('"+objId+"',"+opacity+","+useAlpha+","+width+","+hei+")", delay);   
	  } else {
		griwHideImage(objId);
	  }
}
function griwFadeIn(objId,opacity, useAlpha) {
    obj = document.getElementById(objId);
    
    if (opacity <= 100) {
    	dec=360-3.60*opacity;
      griwSetOpacity(obj, opacity, useAlpha);
      opacity += 2;
      window.setTimeout("griwFadeIn('"+objId+"',"+opacity+","+useAlpha+")", delay); 
    }
}
function griwFadeOut(objId,opacity, useAlpha) {
	obj = document.getElementById(objId);
	
    if (opacity >= 00) {
    	griwSetOpacity(obj, opacity, useAlpha);
      opacity -= 2;    
      window.setTimeout("griwFadeOut('"+objId+"',"+opacity+","+useAlpha+")", delay);
    } else {
    	griwHideImage(objId);
    }
}

function showIn(objId,opacity,useAlpha)
{
	obj = document.getElementById(objId);
	griwSetOpacity(obj, 100,useAlpha);
	griwShowImage(objId);
}
function showOut(objId,opacity,useAlpha)
{
	obj = document.getElementById(objId);
	griwSetOpacity(obj, 0, useAlpha);
	griwHideImage(objId);
}
function griwCenter(objId,dx,dy)
{	
	obj = document.getElementById(objId);
	if (obj==null) alert ("object "+objid +" not found");
	if (dx<0) dx=0;
	if (dy<0) dy=0;
	obj.style.padding=dy+"px"+"  0px 0px "+dx+"px ";
}

function griwSetup(root, pluginurl )
{
	griwroot=root;
	griwPluginurl=pluginurl;
}
function correctPNG(name) // correctly handle PNG transparency in Win IE 5.5 or higher.
{
	img = document.getElementById(name);
	img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + 
	img.src + ",sizingMethod='scale')";	
}
function griwAddImage( func,  maxX, maxY, imurl, fix, slide, photonum, framesize,bg , 
						url, preload, randOrNext, tooltip, effect )
{	
	griwDatas[griwNb]=new Object;
	griwDatas[griwNb].f=func;	/* function name */
	griwDatas[griwNb].img = new Array;
	griwDatas[griwNb].img [0] = func+"img1";
	griwDatas[griwNb].img [1] = func+"img2";
	griwDatas[griwNb].cur= 0;
	griwDatas[griwNb].next= 1;
	griwDatas[griwNb].x= maxX;
	griwDatas[griwNb].y= maxY;
	griwDatas[griwNb].fix= fix;
	griwDatas[griwNb].urlu = imurl;
	griwDatas[griwNb].framesize= framesize;
	griwDatas[griwNb].photonum= photonum;
	griwDatas[griwNb].xmlHttp = griwGetXmlHttpObject();	
	griwDatas[griwNb].bg=bg;
	griwDatas[griwNb].slide=slide;
	griwDatas[griwNb].slide=slide;
	griwDatas[griwNb].url=url;
	griwDatas[griwNb].preload=preload;
	griwDatas[griwNb].randOrNext=randOrNext;
	griwDatas[griwNb].tooltip=tooltip;
	griwDatas[griwNb].effect=effect;	
	griwDatas[griwNb].curTx=0;
	griwDatas[griwNb].curTy=0
	if(griwDatas[griwNb].xmlHttp==null)
	{
		alert("Random Image: Sorry, your browser is not supported!");
	}
	griwHideImage(griwDatas[griwNb].img [0]);
	griwHideImage(griwDatas[griwNb].img [1]);	
	griwNb++;
	griwRefreshImageSet(griwNb-1);
}
function griwFetchComplete()
{	
	if(this.readyState==4 )
	{
		if (this.status == 200)
		{
			var ni= this.ici;
			var mySplitResult = this.responseText.split("|");	
			/* result is composed of
			 [0] OK
			 [1] file path
			 [2] width
			 [3] height
			 [4] number
			 [5] caption
			 [6] link
			 */			
			if (mySplitResult[0]!="OK")
			{					
			} else {
				ww= parseInt(mySplitResult[2]);
				hh = parseInt(mySplitResult[3]);
				griwDatas[ni].lastTx=ww;
				griwDatas[ni].lastTy=hh;
				var uu;		
				if (griwDatas[ni].photonum== null)
				{
					// no picture frame , just the image 
					uu= griwroot+mySplitResult[1];						
				} else {
					// preview
					 uu = griwPluginurl+"/preview.php?file="+
					 		mySplitResult[1]+"&amp;w="+griwDatas[ni].x+"&amp;h="+griwDatas[ni].y;
					 uu+='&amp;f='+griwDatas[ni].photonum+"&amp;fr="+griwDatas[ni].framesize+"&amp;bg="+griwDatas[ni].bg;				 
				}	
				objCur= document.getElementById(griwDatas[ni].img[griwDatas[ni].cur]);
				objCur.onerror=function()
				{				
					var imgcur =document.getElementById(griwDatas[ni].img[griwDatas[ni].cur]);
					griwShowImage( griwDatas[ni].img[griwDatas[ni].cur]);				
					imgcur.alt='Error Loading '+ mySplitResult[1];				
					effectFuncIn[griwDatas[ni].effect](griwDatas[ni].img[griwDatas[ni].cur], 0);
					effectFuncOut[griwDatas[ni].effect](griwDatas[ni].img[griwDatas[ni].next], 100);									
					// setup links
					var varnum = parseInt(mySplitResult[4])-1;				
					if ( document.getElementById(griwDatas[ni].f+"prevIm") != null)
					{
						document.getElementById(griwDatas[ni].f+"prevIm") .href="JavaScript:griwRefresh('"+griwDatas[ni].f+"', "+varnum+");";
						varnum += 2;
						document.getElementById(griwDatas[ni].f+"nextIm").href="JavaScript:griwRefresh('"+griwDatas[ni].f+"', "+varnum+");";
					}
					if (griwDatas[ni].slide> 0)
					{
						window.setTimeout("griwRefresh('"+griwDatas[ni].f+"', null)",griwDatas[ni].slide*1000);
					}				
				}
				objCur.onload=function() 
				{
					var imgcur =document.getElementById(griwDatas[ni].img[griwDatas[ni].cur]);
					griwShowImage( griwDatas[ni].img[griwDatas[ni].cur]);
					if (griwDatas[ni].photonum== null)
					{
						// compute image size */
						var c1 = griwDatas[ni].x / griwDatas[ni].lastTx;
						var c2 = griwDatas[ni].y / griwDatas[ni].lastTy;	
						if (c1< c2)
						{
							ww = griwDatas[ni].lastTx * c1;
							hh = griwDatas[ni].lastTy * c1;
						} else {
							ww = griwDatas[ni].lastTx * c2;
							hh = griwDatas[ni].lastTy * c2;
						}						
					} else {
						//take real size
						if ( imgcur.height)
						{
							hh = imgcur.height;
							ww = imgcur.width;
						} else {
							hh = imgcur.naturalHeight ;
							ww = imgcur.naturalWidth ;
						}
					}				
					// compute center
					dx= (griwDatas[ni].x-ww)/2;
					dy= (griwDatas[ni].y-hh)/2;
					if (griwDatas[ni].fix == 1)
					{
						griwCenter(griwDatas[ni].img[griwDatas[ni].cur],dx,dy);
					} else {
						griwCenter(griwDatas[ni].img[griwDatas[ni].cur],dx,0);
					}
					// setup links
					var varnum = parseInt(mySplitResult[4])-1;
					
					if ( document.getElementById(griwDatas[ni].f+"prevIm") != null)
					{
						document.getElementById(griwDatas[ni].f+"prevIm") .href="JavaScript:griwRefresh('"+griwDatas[ni].f+"', "+varnum+");";
						varnum += 2;
						document.getElementById(griwDatas[ni].f+"nextIm").href="JavaScript:griwRefresh('"+griwDatas[ni].f+"', "+varnum+");";
					}
					if (griwDatas[ni].url == "1")
					{
						monurl= griwroot+mySplitResult[1];
					} else if (griwDatas[ni].url == "3")
						{
							monurl= mySplitResult[6];
						}
						else {
							monurl= griwDatas[ni].url;
						}
					if (document.getElementById(griwDatas[ni].f+"link1"))
					{
						document.getElementById(griwDatas[ni].f+"link1").href = monurl;					
						document.getElementById(griwDatas[ni].f+"link2").href = monurl;										
						if (griwDatas[ni].tooltip ==2)
						{
							document.getElementById(griwDatas[ni].f+"link1").title = mySplitResult[5];
							document.getElementById(griwDatas[ni].f+"link2").title = mySplitResult[5];						
						}
						document.getElementById(griwDatas[ni].f+"link1").rel = document.getElementById(griwDatas[ni].f+"link1").id;
						document.getElementById(griwDatas[ni].f+"link2").rel = document.getElementById(griwDatas[ni].f+"link2").id;
					}
					if (griwDatas[ni].tooltip ==2)
					{
						document.getElementById(griwDatas[ni].img[griwDatas[ni].cur]).title = mySplitResult[5];
						document.getElementById(griwDatas[ni].img[griwDatas[ni].next]).title = mySplitResult[5];
						if (document.getElementById(griwDatas[ni].f+"RI_Textzone"))
							document.getElementById(griwDatas[ni].f+"RI_Textzone").innerHTML= mySplitResult[5];
					}
					/* little fix for fancybox */				
					document.getElementById(griwDatas[ni].img[griwDatas[ni].cur]).alt = mySplitResult[5];				
					document.getElementById(griwDatas[ni].img[griwDatas[ni].next]).alt = mySplitResult[5];					
					if (griwDatas[ni].fix == 0)
					{
						document.getElementById(griwDatas[ni].f+"frm").style.height= hh +"px";
					} else {
						document.getElementById(griwDatas[ni].f+"frm").style.height= griwDatas[ni].y +"px";
					}

					if (griwDatas[ni].photonum== null)
					{
						imgcur.style.height=parseInt(hh)+"px";
					}
					/* picture frame */
					useAlpha=1;
					if ((griwDatas[ni].photonum != null) &&
					   (ie==1))
					{
						/* use ie filter for transparent color*/
						useAlpha=0;
					}
					effectFuncOut[griwDatas[ni].effect](griwDatas[ni].img[griwDatas[ni].next], 100, useAlpha,
												griwDatas[ni].curTx,
												griwDatas[ni].curTy);
					
					griwDatas[ni].curTx=ww;
					griwDatas[ni].curTy=hh;
					effectFuncIn[griwDatas[ni].effect](griwDatas[ni].img[griwDatas[ni].cur], 0, useAlpha,ww,hh);
					
					if (griwDatas[ni].slide> 0)
					{
						if (griwDatas[ni].randOrNext == 1)
						{
							window.setTimeout("griwRefresh('"+griwDatas[ni].f+"', null)",griwDatas[ni].slide*1000);
						} else { 			
							varnum = parseInt(mySplitResult[4])+1;
							window.setTimeout("griwRefresh('"+griwDatas[ni].f+"',"+varnum +")",griwDatas[ni].slide*1000);
						}
					}	 	
					if (griwDatas[ni].preload==true)
					{
						if (document.images)
						{
							preload_image = new Image(25,25); 
							preload_image.src=  monurl;
						}
					}				  					
				}
				objCur.removeAttribute("width");
				objCur.removeAttribute("height");
				
				objCur.removeAttribute("style.width");
				objCur.removeAttribute("style.height");
				if (ie==1)
				{
					objCur.style.removeAttribute("width");
					objCur.style.removeAttribute("height");
				}

				objCur.src = uu;			
			}
		} 
	} 
}
function griwRefreshImageSet(nbApp,imgNumber)
{
	if (griwDatas[nbApp].cur == 0)
	{
		griwDatas[nbApp].cur  =1;
		griwDatas[nbApp].next =0;
	}else{
		griwDatas[nbApp].cur  =0;
		griwDatas[nbApp].next =1;
	}	
	var u= griwPluginurl+"/rnd.php?path="+griwDatas[nbApp].urlu;
	if (imgNumber != null)
	{
		u= u+"&num="+imgNumber;
	}
	griwDatas[nbApp].xmlHttp.open("GET",u,true);
	griwDatas[nbApp].xmlHttp.ici= nbApp;
	griwDatas[nbApp].xmlHttp.onreadystatechange = griwFetchComplete;
	griwDatas[nbApp].xmlHttp.send(null);	
}
function griwRefresh(func, imgNumber)
{
	var i=0;
	var found = false;
	while ((i<griwNb) && (found==false))
	{
		if (griwDatas[i].f == func)
		{
			found = true;
			griwRefreshImageSet(i,imgNumber);
		} else {
			i++;
		}
	}
}
