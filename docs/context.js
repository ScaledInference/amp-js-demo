let icon = '';
let result = '';

switch(useCase) {
  case 0:
  const slowConnection = context.slowConnection;

  if (slowConnection) {
    icon = '🐢';
    result = 'Slow Connection';
  } else {
    icon = '🐰';
    result = 'Fast Connection';
  }
  break;

  case 1:
  const location = context.location;
  
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

  case 2:
  const newCustomer = context.newCustomer;

  if (newCustomer) {
    icon = '✨';
    result = 'New Customer';
  } else {
    icon = '⟳';
    result = 'Return Customer';
  }
  break;

  case 3:
  const timeOfDay = context.timeOfDay;
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
  context = {};
}

document.querySelector('.context .content .icon').textContent = icon;
document.querySelector('.context .content .label').textContent = result;