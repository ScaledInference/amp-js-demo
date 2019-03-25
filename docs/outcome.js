import { colors } from './demo.js';

export default function saleFromContext(context, decision) {
  // decisions
  const cta = decision.ctaColor;
  const btnSequence = decision.btnSequence;
  const rushShipping = decision.rushShipping;

  // Web Story #1
  if (context.slowConnection !== undefined) {
    switch(btnSequence) {
      case 'add':
      return context.slowConnection ? sale(5) : sale(20);

      case 'addBuy':
      return context.slowConnection ? sale(10) : sale(80);

      case 'addQuick':
      return context.slowConnection ? sale(20) : sale(40);

      case 'addBuyQuick':
      return context.slowConnection ? sale(75) : sale(30);

      default:
      console.log('Connection button sequence is not matching.');
    }
  }
  
  // Web Story #2
  if (context.location) {
    switch(context.location.country) {
      case 'United States':
      switch (cta) {
        case colors.orange:
        return sale(20);

        case colors.blue:
        return sale(40);

        case colors.red:
        return sale(70);

        default:
        console.log("Location colors not matching.");
      }

      case 'Great Britain':
      switch (cta) {
        case colors.orange:
        return sale(30);

        case colors.blue:
        return sale(70);

        case colors.red:
        return sale(40);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'Russia':
      switch (cta) {
        case colors.orange:
        return sale(20);

        case colors.blue:
        return sale(40);

        case colors.red:
        return sale(80);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'Ukraine':
      switch (cta) {
        case colors.orange:
        return sale(50);

        case colors.blue:
        return sale(80);

        case colors.red:
        return sale(20);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'Israel':
      switch (cta) {
        case colors.orange:
        return sale(40);

        case colors.blue:
        return sale(80);

        case colors.red:
        return sale(20);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'India':
      switch (cta) {
        case colors.orange:
        return sale(90);

        case colors.blue:
        return sale(60);

        case colors.red:
        return sale(20);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'China':
      switch (cta) {
        case colors.orange:
        return sale(60);

        case colors.blue:
        return sale(40);

        case colors.red:
        return sale(90);

        default:
        console.log("Location colors not matching.");
      }
      
      case 'Turkey':
      switch (cta) {
        case colors.orange:
        return sale(60);

        case colors.blue:
        return sale(20);

        case colors.red:
        return sale(90);

        default:
        console.log("Location colors not matching.");
      }
      
      default:
      console.log("Location countries not matching.");
    }
  }
  
  // Web Story #3
  if (context.newCustomer !== undefined) {
    switch(btnSequence) {
      case 'add':
      return context.newCustomer ? sale(80) : sale(10);

      case 'addBuy':
      return context.newCustomer ? sale(25) : sale(20);

      case 'addQuick':
      return context.newCustomer ? sale(15) : sale(50);

      case 'addBuyQuick':
      return context.newCustomer ? sale(5) : sale(80);

      default:
      console.log('New customer button sequence is not matching.');
    }
  }

  // Web Story #4
  if (context.timeOfDay) {
    switch(context.timeOfDay) {
      case 'night':
        switch (rushShipping) {
          case 0:
          return sale(20);

          case 30:
          return sale(80);

          case 120:
          return sale(30);

          default:
          console.log('Time of day rush shipping is not matching.');
        }

      case 'morning':
        switch (rushShipping) {
          case 0:
          return sale(30);

          case 30:
          return sale(50);

          case 120:
          return sale(90);

          default:
          console.log('Time of day rush shipping is not matching.');
        }

      case 'afternoon':
      switch (rushShipping) {
        case 0:
        return sale(20);

        case 30:
        return sale(50);

        case 120:
        return sale(80);

        default:
        console.log('Time of day rush shipping is not matching.');
      }

      case 'evening':
      switch (rushShipping) {
        case 0:
        return sale(10);

        case 30:
        return sale(90);

        case 120:
        return sale(40);

        default:
        console.log('Time of day rush shipping is not matching.');
      }

      default:
      console.log('Time of day is not matching.');
    }
  }
}

function sale(percent) { 
  var sampling = [];
  for (var i = 0; i < 100; i++) {
    if (i < percent) {
      sampling.push(true);
    } else {
      sampling.push(false);
    }
  }

  sampling = shuffle(sampling);

  var icon = document.querySelector('.outcome .result .icon');
  var label = document.querySelector(".outcome .result .label");

  if (sampling[Math.floor(Math.random() * 100)]) { // true at index
    icon.textContent = '💰';
    label.textContent = 'Sale';
    
    return true;
  } else {
    icon.textContent = '🚫';
    label.textContent = 'No Sale';

    return false;
  }
}

function shuffle(arr) {
  arr = arr.slice(0); // Clone
  let temp, swap, index = arr.length;
  while (index > 0) {
    swap = Math.floor(Math.random() * index--);
    temp = arr[swap];
    arr[swap] = arr[index];
    arr[index] = temp;
  }
  return arr;
}