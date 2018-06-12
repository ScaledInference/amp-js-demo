import { run } from './demo.js';

function load() {
  localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
  document.querySelector(".run").dataset.count = localStorage.getItem("count");
}

var script;
export default function loadScript() {
  var d = document;
  var firstScript = d.getElementsByTagName("script")[0];
  script = d.createElement("script");
  firstScript.parentNode.insertBefore(script, firstScript);

  firstScript.remove();
  
  script.type = "text/javascript";
  script.src = ampConfig.domain + "/libs/" + localStorage.getItem("key") + ".js";
  
  script.onload = function() {
    load();
    run();
  };
}