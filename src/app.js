const productContext = {
  categories: categories
};

const cartContext = {

};

window.addEventListener('DOMContentLoaded', (e) => {
  document.querySelector('.main').innerHTML = Handlebars.templates.product(productContext);

  document.querySelectorAll('.product').forEach(element => { 
    element.addEventListener('mouseover', (e) => {
      element.querySelector('.overlay').className = 'overlay show';
    });
    element.addEventListener('mouseout', (e) => {
      element.querySelector('.overlay').className = 'overlay hide';
    });
  });
});

window.addEventListener('popstate', (e) => {
  let html;

  switch (location.hash) {
    case '#/':
    html = Handlebars.templates.product(productContext);
    break;

    case '#/product':
    html = Handlebars.templates.product(productContext);
    break;

    case '#/cart':
    html = Handlebars.templates.cart(cartContext);
    break;

    case '#/checkout':
    html = Handlebars.templates.checkout(checkoutContext);

    case '#/thank_you':
    html = Handlebars.templates.thankYou(thankYouContext);

    default:
    html = Handlebars.templates.product(productContext);
  }

  document.querySelector('.main').innerHTML = html;
});