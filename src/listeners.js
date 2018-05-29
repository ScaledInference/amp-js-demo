import loadScript from './loadScript.js';
import { run } from './demo.js';

document.addEventListener('DOMContentLoaded', function() {
   
  if (localStorage.getItem('key') == '') {
    document.querySelector('.run').dataset.count = 0;
    localStorage.setItem('count', 0);
  } else {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    } else {
      localStorage.setItem('count', localStorage.getItem('count'));
    }
    document.querySelector('.run').dataset.count = localStorage.getItem('count');
    
    loadScript();
  }
});

document.querySelector('#key').addEventListener('keyup', function(e) {
  if (typeof Amp === 'undefined') { // invalid key or not loaded
    localStorage.setItem('key', e.target.value);
    loadScript();
  } else {
    var newKey = e.target.value;
    var oldKey = localStorage.getItem('key');

    localStorage.setItem('key', e.target.value);
    
    if (newKey.indexOf(oldKey) === -1) {
      localStorage.setItem('count', 0);
      loadScript(); 
    } 
  }
});

document.querySelector('.run').addEventListener('click', function(e) {
  if (typeof Amp !== 'undefined') {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    }

    localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
    e.target.dataset.count = localStorage.getItem('count');

    amp.session = new amp.Session();
    amp.config.set('syncInterval', 1000);
        
    run();
  }
});

document.querySelector('.runMany').addEventListener('click', function(e) {
  if (typeof Amp !== 'undefined') {
    if (localStorage.getItem('count') === null) {
      localStorage.setItem('count', 0);
    }

    var button = e.target;
    if (button.innerHTML.indexOf('Run Many') != -1) {
      button.style.backgroundColor = 'rgb(252,76,71)';
      button.innerHTML = 'Pause';

      window.sync = setInterval(function() {
        amp.config.set('syncInterval', 1000);
      }, 1000);

      window.interval = setInterval(function(){
        localStorage.setItem('count', (parseInt(localStorage.getItem('count'), 10) + parseInt(1, 10)));
        document.querySelector('.run').dataset.count = localStorage.getItem('count');
        
        // uncomment for random context selection
        // const contextValue = ['connection', 'location', 'return', 'timeOfDay'][Math.floor(Math.random() * 4)];
        // document.querySelector('#stories').value = contextValue;

        amp.session = amp.Session();
        
        run();
      }, 20);

      setTimeout(function() {
        button.style.backgroundColor = 'orange';
        button.innerHTML = 'Run Many';
        clearInterval(window.interval);
        clearInterval(window.sync);
      }, 600000);
    } else {
      button.style.backgroundColor = 'orange';
      button.innerHTML = 'Run Many';
      clearInterval(window.interval);
      clearInterval(window.sync);
    }
  }
});

document.querySelector('#stories').addEventListener('change', function(e) {
  document.querySelector('#key').value = '';
});