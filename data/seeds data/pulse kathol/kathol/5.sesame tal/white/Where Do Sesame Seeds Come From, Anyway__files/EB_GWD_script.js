

var isLive = document.location.hostname.indexOf('serving-sys') !== -1;

function initEB() {

    if(!isLive) return startAdLocal();

        if (!EB.isInitialized()) {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
        } else {

            startAd();

        }

}


function startAdLocal(){
    console.log("start ad local");
    startAd();
}
function startAd(){
    var gwdAd = document.getElementById('gwd-ad');
    document.body.style.opacity = "";
    // Start the Ad lifecycle.
    setTimeout(function() {
        gwdAd.initAd();
    }, 0);
}



