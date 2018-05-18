function load() {
  localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
  document.querySelector("#key").value = localStorage.getItem("key");
  document.querySelector(".play.btn").dataset.count = localStorage.getItem("count");
}

var script;
function loadScript() {
  var d = document;
  var firstScript = d.getElementsByTagName("script")[0];
  script = d.createElement("script");
  firstScript.parentNode.insertBefore(script, firstScript);

  script.type = "text/javascript";
  script.src = ampConfig.domain + "/libs/" + localStorage.getItem("key") + ".js";
  
  script.onload = function() {
    load();
    run();
  };
}