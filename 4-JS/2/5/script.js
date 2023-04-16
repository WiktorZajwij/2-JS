
/*
Завдання 5 - Створіть програму, що виводить на екран перші 20 елементів послідовності 2 4 8 16 32 64 128…
*/

let n = 20;
let i = 1;
let count = 2;
while (i <= n) {
  document.write(`${count}` + ' ');
  i++;
  count *= 2;
};

/*
let i = 1;
let count = 2;
while (i <= 20) {
  document.write(`${count}` + ' ');
  i++;
  count *= 2;
};
*/

// or

/* 
let i = 1;
let count = 2;
do {
  document.write(`${count}` + ' ');
  i++;
  count *= 2;
} while (i <= 20);
*/

// or

/* 
let i = 1;
let n = 20;
let count = 2;
do {
  document.write(`${count}` + ' ');
  i++;
  count *= 2;
} while (i <= n);
*/