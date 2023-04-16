/*
Завдання 2:

— Написати розв’язок нижче описаного завдання за допомогою function declaration:

1. Створити функцію яка буде приймати одне число.

2. В середині функції перевіряємо чи це число є простим.

3. Після перевірки виводимо повідомлення в console.log().
*/
'use strict';




function checkNum(n) {
  let check = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      check = false;
    }
  }
  if (check) {
    console.log(`Prime number ${n} is simple`);
  } else {
    console.log(`Prime number ${n} is not simple`);
  }
  
}
let n = +prompt(`Check number here...`);
checkNum(n);