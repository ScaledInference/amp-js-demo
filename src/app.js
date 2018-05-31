const products = { categories };

let cart = {
  items: [],
  total: 0
};
const shoppingCart = { cart };

window.addEventListener('DOMContentLoaded', (e) => {
  handleNavigation();

  // use Amp decision to take action on button color
  const ctaBtn = document.querySelector('.ctaBtn');
  ctaBtn.style.backgroundColor = decision.ctaColor;

  ctaBtn.addEventListener('click', (e) => {
    const label = e.target.textContent;

    switch (label) {
      case 'Checkout':
      location.hash = '/checkout';
      break;

      case 'Submit Order':
      location.hash = '/thank_you';
      break;

      case 'Continue Shopping':
      location.hash = '';
      cart = {
        items: [],
        total: 0
      };
      break;

      default:
      location.hash = '/cart';
    }
  });
});

window.addEventListener('hashchange', (e) => {
  handleNavigation();
});

function handleNavigation() {
  let html;
  const ctaBtn = document.querySelector('.ctaBtn');
  const main = document.querySelector('.main');

  switch (location.hash) {
    case '/', '':
    main.innerHTML = setupProductPage();
    handleActions();
    break;

    case '#/cart':
    ctaBtn.textContent = 'Checkout';

    main.innerHTML = Handlebars.templates.cart(shoppingCart);

    const cartBtn = document.querySelector('.cartBtn');
    cartBtn.style.backgroundColor = decision.ctaColor;
    cartBtn.addEventListener('click', (e) => { ctaBtn.click(); });
    break;
    
    case '#/checkout':
    ctaBtn.textContent = 'Submit Order';

    main.innerHTML = Handlebars.templates.checkout(shoppingCart);
    if (decision.rushShipping === 0) {
      document.querySelector('.shipping').style.visibility = 'hidden';
    } else {
      document.querySelector('.shipping').style.visibility = 'visible';
    }
    document.querySelector('.checkoutBtn').style.backgroundColor = decision.ctaColor;
    break;
    
    case '#/thank_you':
    main.innerHTML = Handlebars.templates.thankYou(shoppingCart);
    ctaBtn.textContent = 'Continue Shopping';

    amp.observe('Sale', { amount: cart.discountTotal });
    break;
    
    default:
    main.innerHTML = Handlebars.templates.product(products);
  }
}

function setupProductPage() {
  const html = Handlebars.templates.product(products);
  document.querySelector('.main').innerHTML = html;

  setTimeout(() => {
    document.querySelectorAll('.btn').forEach(element => {
      element.addEventListener('click', (e) => {
        const target = e.target;

        let existingItem = false;
        let cartSize = 0;
        let total = 0;

        cart.items.forEach(item => {
          if (item.id === target.dataset.id) {
            item.quantity = parseInt(item.quantity, 10) + 1;
            item.subtotal = parseFloat(item.quantity, 10) * parseFloat(item.price, 10).toFixed(2);
            existingItem = true;
          }
          
          cartSize += parseInt(item.quantity, 10);
          total += parseFloat(item.quantity, 10) * parseFloat(item.price, 10);
        });
        
        
        if (!existingItem) {
          cart.items.push({
            id: target.dataset.id,
            name: target.dataset.name,
            description: target.dataset.description,
            price: target.dataset.price,
            quantity: 1,
            subtotal: 1 * parseFloat(target.dataset.price, 10)
          });
          
          cartSize += 1;
          total += 1 * parseFloat(target.dataset.price, 10);
        } 

        cart.total = parseFloat(total, 10).toFixed(2);

        if (target.textContent === 'Buy Now') {
          location.hash = '/checkout';
        } else if (target.textContent === 'Quick Checkout') {
          location.hash = '/thank_you';
        }

        document.querySelector('.ctaBtn').textContent = `Cart - ${cartSize} Items`;
      });
    });

  }, 500);

  let numItems = 0;
  cart.items.forEach(item => {
    numItems += parseInt(item.quantity, 10);
  });

  document.querySelector('.ctaBtn').textContent = `Cart - ${numItems} Items`;
  return html;
}

function handleActions() {
  const buyButton = document.querySelectorAll('.buyNow');
  const quickButton = document.querySelectorAll('.quick');

  document.querySelectorAll('.btn').forEach(btn => { 
    btn.style.borderColor = decision.ctaColor;
    btn.style.color = decision.ctaColor;
  });

  buyButton.forEach(btn => { btn.style.visibility = 'hidden'; });
  quickButton.forEach(btn => { btn.style.visibility = 'hidden'; });

  if (decision.btnSequence === 'addBuy') {
    buyButton.forEach(btn => { btn.style.visibility = 'visible'; });
  } else if (decision.btnSequence === 'addQuick') {
    quickButton.forEach(btn => {btn.style.visibility = 'visible'; });
  } else if (decision.btnSequence === 'addBuyQuick') {
    buyButton.forEach(btn => { btn.style.visibility = 'visible'; });
    quickButton.forEach(btn => { btn.style.visibility = 'visible'; });
  }
}