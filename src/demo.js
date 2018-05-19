import context from './context.js';
import takeAction from './actions.js';
import saleFromContext from './outcome.js';

let decision = {};

function run() {
  // Observe context
  const ctx = context();
  amp.observe('UserContext', { context: ctx });

  // Make decision
  decision = amp.decide('AmpedCart', {
    ctaColor: ['rgb(253, 142, 25)', 'rgb(38, 138, 251)', 'rgb(225, 63, 63)'],
    btnSequence: ['add', 'addBuy', 'addQuick', 'addBuyQuick'],
    rushShipping: [0, 30, 120]
  });

  takeAction();

  // Observe outcome
  if (saleFromContext(ctx)) {
    amp.observe('Sale');
  }
}

export { run, decision };