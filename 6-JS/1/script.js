/* 
Завдання 1:

— Написати розв’язок нижче описаного завдання за допомогою arrow function:

  1. Створити функцію яка прийматиме одне числове значення.

2. Це значення в функції означатиме кількіть елементів послідовності Фібаначі.

3. Обрахуйте цю послідовність і виведіть всі її елементи в консоль.



Приклад роботи:

1. fib(5) – має повернути 1 1 2 3 5.

2. fib(10) – має повернути 1 1 2 3 5 8 13 21 34 55.
*/



/* 
Цикл for
  let x = prompt('write some num');
  let a = 1;
  let b = 0;
  let c;
  for (let i = 1; i <= x; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
    document.write(`${c} `);
  }
*/

/*
Function Declaration
  function fib(x) {
    let a = 1;
    let b = 0;
    let c;
    for (let i = 1; i <= x; i++) {
      c = a + b;
      a = b;
      b = c;

      console.log(c);
      document.write(`${c} `);
    }
  }
  fib(10);
*/

/*
Function Expression
  let fib = function(x) {
  let a = 1;
  let b = 0;
  let c;
  for (let i = 1; i <= x; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    document.write(`${c} `);
  }
}
fib(10);
*/

/*
Function Arrow
*/
  let fib = x => {
    let a = 1;
    let b = 0;
    let c;
    for (let i = 1; i <= x; i++) {
      c = a + b;
      a = b;
      b = c;
      console.log(c);
      document.write(`${c} `);
    }
  }
  fib(10);
