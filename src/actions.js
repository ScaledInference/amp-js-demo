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
  const label = document.querySelector('.variant2 .result .label');

  addButton.style.visibility = 'visible';
  label.textContent = '3-Step Checkout';

  if (decision.btnSequence === 'addBuy') {
    buyButton.style.visibility = 'visible';
    label.textContent = '2/3-Step Checkout';
  } else if (decision.btnSequence === 'addQuick') {
    quickButton.style.visibility = 'visible';
    label.textContent = '1/3-Step Checkout';
  } else if (decision.btnSequence === 'addBuyQuick') {
    label.textContent = '1/2/3-Step Checkout';
    buyButton.style.visibility = 'visible';
    quickButton.style.visibility = 'visible';
  }

  const rushLabels = document.querySelectorAll('.variant3 .result .unit');
  // checkout action
  if (decision.rushShipping === 0) {
    checkoutIcon.textContent = '🚫';
    rushLabels.forEach(label => label.style.visibility = 'hidden');
  } else {
    checkoutIcon.textContent = decision.rushShipping;
    rushLabels.forEach(label => label.style.visibility = 'visible');
  }
}