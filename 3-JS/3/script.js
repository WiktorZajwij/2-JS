/*
 Завдання 3 — Створіть програму, що виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17…
*/

let n = 55;
let count = 1;
for (let i = 1; i <= n; i++) {
  document.write(`${count}` + ' ');
  count += + 2;
}

/* 
let count = 1;
for (let i = 1; i <= 55; i++) {
  document.write(`${count}` + ' ');
  count = count + 2;
}
*/