const products = {
  categories: categories
};

const cart = [];

window.addEventListener('DOMContentLoaded', (e) => {
  addEventsForProductPage();

  document.querySelector('.ctaBtn').addEventListener('click', (e) => {
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
      break;

      default:
      location.hash = '/cart';
    }
  });
});

window.addEventListener('hashchange', (e) => {
  console.log('hashchange');
  handleNavigation();
});

function handleNavigation() {
  let html;

  switch (location.hash) {
    case '/', '':
    html = addEventsForProductPage();
    document.querySelector('.ctaBtn').textContent = `Cart - ${cart.length} Items`;
    break;

    case '#/cart':
    html = Handlebars.templates.cart(cart);
    document.querySelector('.ctaBtn').textContent = 'Checkout';
    break;
  
    case '#/checkout':
    html = Handlebars.templates.checkout(checkoutContext);
    document.querySelector('.ctaBtn').textContent = 'Submit Order';
  
    case '#/thank_you':
    html = Handlebars.templates.thankYou(thankYouContext);
    document.querySelector('.ctaBtn').textContent = 'Continue Shopping';
  
    default:
    html = Handlebars.templates.product(products);
  }
  
  document.querySelector('.main').innerHTML = html;
}

function addEventsForProductPage() {
  const html = Handlebars.templates.product(products);
  document.querySelector('.main').innerHTML = html;

  setTimeout(() => {
    document.querySelectorAll('.product').forEach(element => { 
      console.log('add product events');
      element.addEventListener('mouseover', (e) => {
        element.querySelector('.overlay').className = 'overlay show';
      });

      element.addEventListener('mouseout', (e) => {
        element.querySelector('.overlay').className = 'overlay hide';
      });
    });

    document.querySelectorAll('.addToCart').forEach(element => {
      element.addEventListener('click', (e) => {
        const target = e.target;
        cart.push({
          id: target.dataset.id,
          name: target.dataset.name,
          description: target.dataset.description,
          price: target.dataset.price
        });

        document.querySelector('.ctaBtn').textContent = `Cart - ${cart.length} Items`;
      });
    });
  }, 500);

  return html;
}