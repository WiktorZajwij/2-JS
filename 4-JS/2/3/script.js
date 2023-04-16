/*
 Завдання 3 — Створіть програму, що виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17…
*/

let n = 55;
let i = 1;
let count = 1;
while(i <= n) {
  document.write(`${count}` + ' ');
  i++;
  count = count + 2;
}
/*

let i = 1;
let count = 1;
while(i <= 55) {
  document.write(`${count}` + ' ');
  i++;
  count = count + 2;

}
*/

// or

/* 
let i = 1;
let count = 1;
do {
  document.write(`${count}` + ' ');
  i++;
  count = count + 2;
} while (i <= 55);
*/

/* 
let i = 1;
let count = 1;
let n = 55;
do {
  document.write(`${count}` + ' ');
  i++;
  count = count + 2;
} while (i <= n);
*/