// change in context
document.querySelector('#stories').addEventListener('change', (e) => {
  const context = e.target.value;
  const key = '';
  const builtinEvents = [
    'AmpSession'
  ];

  switch(context) {
    case 'slow':
    key = '6ed43ce4b6269097';
    break;
    
    case 'color':
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
  amp = new Amp({ key, builtinEvents });
  amp.session = amp.Session();
});

document.addEventListener("DOMContentLoaded", function() {
   
  if (localStorage.getItem("key") == "") {
    document.querySelector(".play.btn").dataset.count = 0;
    localStorage.setItem("count", 0);
  } else {
    document.querySelector("#key").value = localStorage.getItem("key");
    
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    } else {
      localStorage.setItem('count', localStorage.getItem('count'));
    }
    document.querySelector(".play.btn").dataset.count = localStorage.getItem("count");
    
    loadScript();
  }
});

document.querySelector("#key").addEventListener("keyup", function(e) {
  if (typeof Amp === "undefined") { // invalid key or not loaded
    localStorage.setItem("key", e.target.value);
    loadScript();
  } else {
    var newKey = e.target.value;
    var oldKey = localStorage.getItem("key");

    localStorage.setItem("key", e.target.value);
    if (newKey.indexOf(oldKey) === -1) {
      localStorage.setItem("count", 0);
      loadScript(); 
    } 
  }
});

document.querySelector(".play.btn").addEventListener("click", function(e) {
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

document.querySelector(".fast-forward.btn").addEventListener("click", function(e) {
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
        document.querySelector(".play.btn").dataset.count = localStorage.getItem('count');
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