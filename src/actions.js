import { decision } from './demo.js';

export default function takeAction() {
  const products = document.querySelector('.products');
  const ctaIcon = products.querySelector('.variant1 .result .icon');

  const ctaButtons = products.querySelectorAll('.variant2 .result .icon button');

  const checkoutIcon = products.querySelector('.variant3 .result .icon');

  // cta action
  ctaIcon.style.backgroundColor = decision.ctaColor;

  // cta button colors
  ctaButtons.forEach(button => { 
    button.style.borderColor = decision.ctaColor; 
    button.style.color = decision.ctaColor;
    button.style.visibility = 'hidden';
  });

  // cta button option decision
  const addButton = document.querySelector('.variant2 .result .icon .add');
  const buyButton = document.querySelector('.variant2 .result .icon .buy');
  const quickButton = document.querySelector('.variant2 .result .icon .quick');

  addButton.style.visibility = 'visible';

  if (decision.btnSequence === 'addBuy') {
    buyButton.style.visibility = 'visible';
  } else if (decision.btnSequence === 'addQuick') {
    quickButton.style.visibility = 'visible';
  } else if (decision.btnSequence === 'addBuyQuick') {
    buyButton.style.visibility = 'visible';
    quickButton.style.visibility = 'visible';
  }

  // checkout action
  if (decision.rushShipping === 0) {
    checkoutIcon.textContent = '🚫';
  } else {
    checkoutIcon.textContent = decision.rushShipping;
  }
}