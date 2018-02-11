(function () {
  var listeners = [];
  window.NewSite = {
    addListener: function() {
      listeners.push(arguments);
    },
    readyEventFired: function() {
      return false;
    }
  }
  var script = document.createElement('script');
  script.id = "NS_GLOBAL_JS";
  script.async = true;
  var host = document.getElementById("NS_GUID_JS").src.split("?")[0].replace("/hulu_global_loader.js", "");
  //host = "http://config.hulu.com/js"; //TODO, remove this line
  script.src = host + "/hulu_global.js";
  script.onload = function() {
    window.NewSite = new NewSiteApplication;
    for (var i = 0; i < listeners.length; ++i) {
      window.NewSite.addListener.apply(window.NewSite, listeners[i]);
    }
    window.NewSite.run()
  }
  var b = document.getElementsByTagName('script')[0];
  b.parentNode.insertBefore(script, b);
})();