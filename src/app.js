const productContext = {
  
};

const cartContext = {

};

window.addEventListener('DOMContentLoaded', (e) => {
  document.querySelector('.main').innerHTML = Handlebars.templates.product(productContext);;
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