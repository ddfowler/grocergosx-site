// Orders app v1.1.2: checks the "Confirmed" message written from the checkout answers (patches/ops-v1.1.2-confirm-message.js), using the app's
// own X (first name) and q (date) helpers copied from the built file. usage: node tests/ops-confirm-message-check.js [ops/ggsx-ops-v1.1.2.txt]
const fs = require('fs'), path = require('path'), vm = require('vm');
const app = fs.readFileSync(process.argv[2] || path.join(__dirname, '../ops/ggsx-ops-v1.1.2.txt'), 'utf8');
const grab = name => { const i = app.indexOf('function ' + name + '('); if (i < 0) throw new Error('no ' + name); let d = 0, j = app.indexOf('{', i);
  for (let k = j; k < app.length; k++) { if (app[k] === '{') d++; else if (app[k] === '}' && --d === 0) return app.slice(i, k + 1); } };
const store = {};
const ctx = { store }; vm.createContext(ctx);
vm.runInContext(grab('X') + grab('q') + 'function At(id){return store[id]||null}' + grab('ggsxPlace') + grab('ggsxConfirmText'), ctx);
const msg = o => ctx.ggsxConfirmText(o);
let fails = 0, n = 0;
function check(label, got, want) { n++; const ok = typeof want === 'function' ? want(got) : got === want; if (!ok) { fails++; console.log('FAIL ' + label + '\n--- got:\n' + got + '\n--- want:\n' + want + '\n'); } else console.log('ok   ' + label); }
const P = '\n\nOnce we\u2019ve sourced your requested items, we\u2019ll send you a secure payment link.\n\nThank you for choosing GrocerGoSx!';
const darlene = { id: 'c1', first: 'Darlene', date: '2026-11-08', window: 'Afternoon \u00b7 12:00\u201317:00', address: 'The Cliff 7 Rhine Road Cupevoy',
  notes: 'Arriving Sun Nov 08, flight Jet Blue 569, lands 2:30 PM.\nStock the unit before arrival.\nAccess: front desk or reception (Darlene Stella).\nCheck in with registration our u it is Dreams Come True' };
// Dwayne's wording, 7 Nov 2026
check('Darlene (Dwayne\u2019s wording)', msg(darlene), 'Hi Darlene!\n\nYour GrocerGoSx order is confirmed for Sunday, November 8.\n\nWe\u2019ve noted your flight details and will coordinate with The Cliff reception to have your groceries stocked before your arrival.' + P);
// list summary without notes: falls back to the loaded full order
store.c1 = darlene;
check('summary object uses the loaded order', msg({ id: 'c1', first: 'Darlene', date: '2026-11-08' }), msg(darlene));
const base = { first: 'sam', date: '2026-11-10', window: 'Evening \u00b7 17:00\u201323:00' };
const A = (notes, extra) => Object.assign({}, base, { notes }, extra || {});
check('no flight, landing time only', msg(A('Arriving Tue Nov 10, lands 9:05 AM.\nStock the unit before arrival.\nAccess: front desk or reception (Sam Lee).', { address: 'Mirage Apartments, Jordan Road Cupecoy, room 302' })),
  'Hi Sam!\n\nYour GrocerGoSx order is confirmed for Tuesday, November 10.\n\nWe\u2019ve noted your arrival time and will coordinate with the Mirage Apartments reception to have your groceries stocked before your arrival.' + P);
check('no flight or time, street address', msg(A('Arriving Tue Nov 10.\nStock the unit before arrival.\nAccess: front desk or reception.', { address: '67 Fort Hill Road' })),
  s => s.includes('\n\nWe\u2019ll coordinate with the front desk to have your groceries stocked before your arrival.'));
check('host', msg(A('Arriving Tue Nov 10, flight AA 1234.\nStock the unit before arrival.\nAccess: host or property manager (Maria +1 721 555 0100).')),
  s => s.includes('We\u2019ve noted your flight details and will coordinate with your host to have your groceries stocked before your arrival.'));
check('lockbox', msg(A('Arriving Tue Nov 10, flight AA 1234.\nStock the unit before arrival.\nAccess: lockbox or door code (4471, left of the door).')),
  s => s.includes('We\u2019ve noted your flight details and the access code, and we\u2019ll have your groceries stocked before your arrival.') && !s.includes('4471'));
check('not sure yet', msg(A('Arriving Tue Nov 10, flight AA 1234.\nStock the unit before arrival.\nAccess: not sure yet.')),
  s => s.includes('We\u2019ve noted your flight details and will have your groceries stocked before your arrival. Please send us the access details (reception, host contact or lockbox code) when you have them.'));
check('wait until check-in', msg(A('Arriving Tue Nov 10, flight AA 1234, lands 3:15 PM.\nWait until check-in, then deliver (they\'ll message when they\'re in).\nPlease call first')),
  'Hi Sam!\n\nYour GrocerGoSx order is confirmed for Tuesday, November 10.\n\nWe\u2019ve noted your flight details. Just message us once you\u2019ve checked in and we\u2019ll head over with your groceries.' + P);
check('guest, front desk', msg(A('For guest John and Mary Smith. Arriving Tue Nov 10, flight B6 869.\nStock the unit before arrival.\nAccess: front desk or reception (Smith).', { address: 'Sonesta Maho Beach Resort, unit 1205' })),
  'Hi Sam!\n\nYour GrocerGoSx order for John and Mary Smith is confirmed for Tuesday, November 10.\n\nWe\u2019ve noted their flight details and will coordinate with the Sonesta Maho Beach Resort reception to have everything stocked before they arrive.' + P);
check('guest, host is the client', msg(A('For guest Ana. Arriving Tue Nov 10.\nStock the unit before arrival.\nAccess: host or property manager (me).')),
  s => s.includes('We\u2019ll coordinate with you to have everything stocked before they arrive.'));
check('guest, wait', msg(A('For guest Ana. Arriving Tue Nov 10, lands 1:00 PM.\nWait until check-in, then deliver (they\'ll message when they\'re in).')),
  s => s.includes('We\u2019ve noted their arrival time. Just message us once they\u2019ve checked in and we\u2019ll head over with everything.'));
check('already on the island keeps the window', msg(A('Already on the island.\nGate code 1234')),
  'Hi Sam!\n\nYour GrocerGoSx order is confirmed for Tuesday, November 10 (Evening \u00b7 17:00\u201323:00).\n\nWe\u2019ll shop everything fresh and let you know when we\u2019re on our way.' + P);
check('no checkout block (taken by message)', msg(A('Arriving tomorrow on the JetBlue flight, please stock the fridge')),
  s => s.includes('(Evening') && s.includes('We\u2019ll shop everything fresh and let you know when we\u2019re on our way.'));
check('no name, no date, no notes', msg({}), 'Hi there!\n\nYour GrocerGoSx order is confirmed.\n\nWe\u2019ll shop everything fresh and let you know when we\u2019re on our way.' + P);
check('client notes are not read as a block', msg(A('Already on the island.\nArriving Tue Nov 10, flight X.\nStock the unit before arrival.')), s => !s.includes('flight details') && s.includes('(Evening'));
// property names taken from addresses for "front desk or reception"
const pl = a => ctx.ggsxPlace(a);
[['The Cliff 7 Rhine Road Cupevoy', 'The Cliff'], ['Mirage Apartments, Jordan Road Cupecoy, room 302', 'Mirage Apartments'], ['Royal Islander Club La Plage', 'Royal Islander Club La Plage'],
 ['Flamingo Beach Resort Unit 1205', 'Flamingo Beach Resort'], ['67 Fort Hill Road', ''], ['Avenue des Plages, Hope Hill', ''], ['Villa 23 Pelican Key', ''], ['', ''], ['Unit 5, The Cliff', '']
].forEach(([a, w]) => check('place: ' + JSON.stringify(a), pl(a), w));
console.log(fails ? fails + ' of ' + n + ' checks FAILED' : 'all ' + n + ' checks pass');
process.exit(fails ? 1 : 0);
