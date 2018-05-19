import context from './context.js';
import takeAction from './actions.js';
import saleFromContext from './outcome.js';

const orange = 'rgb(253, 142, 25)';
const blue = 'rgb(38, 138, 251)';
const red = 'rgb(225, 63, 63)';

let decision = {};

function run() {
  // Observe context
  const ctx = context();
  amp.observe('UserContext', { context: ctx });

  // Make decision
  decision = amp.decide('AmpedCart', {
    ctaColor: [orange, blue, red],
    btnSequence: ['add', 'addBuy', 'addQuick', 'addBuyQuick'],
    rushShipping: [0, 30, 120]
  });

  takeAction();

  // Observe outcome
  if (saleFromContext(ctx, decision)) {
    amp.observe('Sale');
  }
}

const colors = { orange, blue, red };
export { run, decision, colors };