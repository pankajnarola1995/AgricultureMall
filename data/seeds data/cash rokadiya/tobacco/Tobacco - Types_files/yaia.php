
var popunder=new Array()

popunder[0]="http://ad.negociosbinarios.com/rd/?aid=amigos&sub=adryaia"
	popunder[1]="http://www.latinchatnet.com/?adryaia"
	popunder[2]="http://www.juegomaniac.com/?adryaia"


popunder_height=screen.availHeight-20;
popunder_width=screen.availWidth-10;


rndNumber=Math.floor(Math.random()*(popunder.length))

var p = 'scrollbars=yes,resizable=yes,toolbar=yes,' + //these are obvious variables. set yes or no.
    'menubar=yes,status=yes,location=yes,left=0,top=0,height=' +  //the location on the user's screen
    popunder_height + ',width=' + popunder_width;

win2=window.open(popunder[rndNumber],"YaiaPop2",p)
win2.blur()
window.focus()
