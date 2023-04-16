/*
Завдання 1 — Створіть програму, яка обчислює факторіал натурального числа n, яке користувач введе з клавіатури.
*/

let n = +prompt('Введіть число');
let i = 1;
let res = 1;
while(i<=n) {
  res = res * i;
  console.log(res);
  document.write(`${res}` + ' ');
  i++;
}


//  or

/* 
let n = +prompt('Введіть число');
let i = 1;
let res = 1;
do {
  res *= i;
  document.write(`<h3>${res}</h3>`);
  i++;
} while (i<=n);

*/
