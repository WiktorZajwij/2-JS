/*
Завдання 4 -  Створіть програму, що виводить на екран всі невід'ємні елементи послідовності 90 85 80 75 70 65 60…
*/

let i = 90;
while(i >= 0) {
  document.write(`${i}` + ' ');
  i = i - 5;
};

// or
/*
let i = 90;
do {
  document.write(`${i}` + ' ');
  i = i - 5;
} while (i >= 0);
*/