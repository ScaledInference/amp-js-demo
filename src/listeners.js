import loadScript from './loadScript.js';
import { run } from './demo.js';

// change in context
document.querySelector('#stories').addEventListener('change', (e) => {
  const context = e.target.value;
  let key = '';

  switch(context) {
    case 'connection':
    key = '6ed43ce4b6269097';
    break;
    
    case 'location':
    key = 'a8fd142ccb629f85';
    break;

    case 'return':
    key = 'b170ecf20a216d79';
    break;

    case 'timeOfDay':
    key = '38f4be1eab0b0b0d';
    break;

    default:
    key = '6ed43ce4b6269097';
    break;
  }
  
  localStorage.setItem('key', key);
  loadScript();
});

document.addEventListener("DOMContentLoaded", function() {
   
  if (localStorage.getItem("key") == "") {
    document.querySelector(".run").dataset.count = 0;
    localStorage.setItem("count", 0);
  } else {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    } else {
      localStorage.setItem('count', localStorage.getItem('count'));
    }
    document.querySelector(".run").dataset.count = localStorage.getItem("count");
    
    localStorage.setItem('key', '6ed43ce4b6269097');
    loadScript();
  }
});

document.querySelector(".run").addEventListener("click", function(e) {
  if (typeof Amp !== "undefined") {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    }

    localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
    e.target.dataset.count = localStorage.getItem('count');

    amp.session = new amp.Session();
    amp.config.set("syncInterval", 1000);
        
    run();
  }
});

document.querySelector(".runMany").addEventListener("click", function(e) {
  if (typeof Amp !== "undefined") {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    }

    var button = e.target;
    if (button.innerHTML.indexOf("Run Many") != -1) {
      button.style.backgroundColor = "rgb(252,76,71)";
      button.innerHTML = "Pause";

      window.sync = setInterval(function() {
        amp.config.set("syncInterval", 1000);
      }, 1000);

      window.interval = setInterval(function(){
        localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
        document.querySelector(".run").dataset.count = localStorage.getItem('count');
        amp.session = amp.Session();
        
        run();
      }, 20);

      setTimeout(function() {
        button.style.backgroundColor = "orange";
        button.innerHTML = "Run Many";
        clearInterval(window.interval);
        clearInterval(window.sync);
      }, 600000);
    } else {
      button.style.backgroundColor = "orange";
      button.innerHTML = "Run Many";
      clearInterval(window.interval);
      clearInterval(window.sync);
    }
  }
});