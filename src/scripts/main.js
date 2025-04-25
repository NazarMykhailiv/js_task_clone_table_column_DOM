'use strict';

// write your code here

const theadRow = document.querySelector('thead tr');
const ths = theadRow.querySelectorAll('th');

const copiedTh = ths[1].cloneNode(true);

theadRow.insertBefore(copiedTh, ths[ths.length - 1]);

const rows = document.querySelectorAll('tbody tr');

rows.forEach((row) => {
  const tds = row.querySelectorAll('td');
  const copiedTd = tds[1].cloneNode(true);

  row.insertBefore(copiedTd, tds[tds.length - 1]);
});
