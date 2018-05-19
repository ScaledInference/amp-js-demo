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
    button.style.display = 'none';
  });

  // cta button option decision
  const addButton = document.querySelector('.variant2 .result .icon .add');
  const buyButton = document.querySelector('.variant2 .result .icon .buy');
  const quickButton = document.querySelector('.variant2 .result .icon .quick');

  addButton.style.display = 'block';

  if (decision.btnSequence === 'addBuy') {
    buyButton.style.display = 'block';
  } else if (decision.btnSequence === 'addQuick') {
    quickButton.style.display = 'block';
  } else if (decision.btnSequence === 'addBuyQuick') {
    buyButton.style.display = 'block';
    quickButton.style.display = 'block';
  }

  // checkout action
  if (decision.rushShipping === 0) {
    checkoutIcon.textContent = '🚫';
  } else {
    checkoutIcon.textContent = decision.rushShipping;
  }
}