const commissions = [{
  salesperson: 'A',
  recipient: 'B',
  ratio: 0.10
}, {
  salesperson: 'A',
  recipient: 'C',
  ratio: 0.10
}, {
  salesperson: 'B',
  recipient: 'C',
  ratio: 0.05
}];

const sales = [{
  salesperson: 'A',
  amount: 500
}, {
  salesperson: 'A',
  amount: 500
}];

function solution(commissions, sales) {
  const results = {};
  const map = {};

  for (let i = 0; i < commissions.length; i++) {
    let c = commissions[i];
    if (!map[c.salesperson]) map[c.salesperson] = [];
    map[c.salesperson] = map[c.salesperson].concat([
      [c.recipient, c.ratio]
    ]);
  }

  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let person = map[sale.salesperson];
    let total = (sale.amount);
    if (!results[sale.salesperson]) results[sale.salesperson] = 0;

    results[sale.salesperson] += sale.amount;
    person.map(p => {
      total *= (p[1]);
      console.log(total)
      if (!results[p[0]]) results[p[0]] = 0;
      results[p[0]] = results[p[0]] + total;
      results[sale.salesperson] -= total;
    });
  }
  return results;
}

console.log(solution(commissions, sales));