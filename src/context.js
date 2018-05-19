import geoLocation from './geo.js';

export default function context() {
  let context = {};

  let icon = '';
  let result = '';
  let useCase = document.querySelector('#stories').value;

  switch(useCase) {
    case 'connection':
    const slowConnection = Math.round(Math.random()) === 0 ? false : true;
    context = { slowConnection };

    if (slowConnection) {
      icon = '🐢';
      result = 'SlowConnection';
    } else {
      icon = '🐰';
      result = 'Fast Connection';
    }
    break;

    case 'location':
    const location = geoLocation();
    context = { location };
    
    switch(location.country) {
      case 'United States':
      icon = '🇺🇸';
      break;

      case 'Great Britain':
      icon = '🇬🇧';
      break;
      
      case 'Russia':
      icon = '🇷🇺';
      break;
      
      case 'Ukraine':
      icon = '🇺🇦';
      break;
      
      case 'Israel':
      icon = '🇮🇱';
      break;
      
      case 'India':
      icon = '🇮🇳';
      break;
      
      case 'China':
      icon = '🇨🇳';
      break;
      
      case 'Turkey':
      icon = '🇹🇷';
      break;
      
      default:
      icon = '';
    }

    result = location.country;
    break;

    case 'return':
    const newCustomer = Math.round(Math.random()) === 0 ? false : true;
    context = { newCustomer };

    if (newCustomer) {
      icon = '✨';
      result = 'New Customer';
    } else {
      icon = '⟳';
      result = 'Return Customer';
    }
    break;

    case 'timeOfDay':
    const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][Math.floor(Math.random() * 4)];
    const icons = {
      night: '🌙',
      morning: '🌇',
      afternoon: '☀️',
      evening: '🌄'
    };

    icon = icons[timeOfDay];
    result = timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1);
    break;

    default:
    context = { slowConnection: Math.round(Math.random()) === 0 ? false : true };
  }

  document.querySelector('.context .content .icon').textContent = icon;
  document.querySelector('.context .content .label').textContent = result;

  return context;
}