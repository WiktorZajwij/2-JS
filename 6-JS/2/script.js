/* 
Завдання 2:
— Написати розв’язок нижче описаного завдання за допомогою function expression:

Створіть функцію, яка обраховує суму чисел геометричної прогресії, в якій першим числом є 1. 

Функція приймає два аргументи: кількість чисел прогресії і її знаменник . Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5, а знаменник – 2 (тому що кожне наступне число прогресії домножується на 2). Результат, який має повернути функція для даної прогресії 31.


Функцію потрібно написати двома способами:

1. З використанням циклу

2. З використанням формули знаходження суми геометричної прогресії:

Sn=b1*(1-q^n)/(1-q),

де b1 – перший елемент прогресії (в даному завданні це 1),

q – знаменник,

n – кількість елементів прогресії

Приклад роботи:

1. f(5,2) – має повернути 1+2+4+8+16=31

2. f(4,3) – має повернути 1+3+9+27=40
*/



// 1. З використанням циклу
/* 
Цикл for
  let b = 1; //від котрої цифри
  let x = 5; //кількість ел(циклів)
  let q = 2; //крок множення
  let n; //cумма двух попередніх ел
  let sum = 0; //cумма всіх ел
  for (let i = 1; i <= x; i++) {
    console.log(b);
    sum += b;
    n = b * q;
    b = n;
  }
  console.log(sum);
*/

/*
Function Declaration
  function f(x, q) {
    let b = 1;
    let n;
    let sum = 0;
    for (let i = 1; i <= x; i++) {
      document.write(`<span>${b}</span> `);
      sum += b;
      n = b * q;
      b = n;
      
    }
    document.write(`<h2>${sum}</h2>`);
  }
  f(4, 3);
  f(5, 2);
*/

/* 
Function Expression
  let f = function (x, q) {
    let b = 1;
    let n;
    let sum = 0;
    for (let i = 1; i <= x; i++) {
      document.write(`<span>${b}</span> `);
      sum += b;
      n = b * q;
      b = n;
    }
    document.write(`<h2>${sum}</h2>`);
  }
  f(5, 2);
  f(4, 3);
*/

/* 
Function Arrow
  let f = (x, q) => {
    let b = 1;
    let n;
    let sum = 0;
    for (let i = 1; i <= x; i++) {
      document.write(`<span>${b}</span> `);
      sum += b;
      n = b * q;
      b = n;
    }
    document.write(`<h2>${sum}</h2>`);
  }
  f(5, 2);
  f(4, 3);
*/





/*
2. З використанням формули знаходження суми геометричної прогресії:
Sn = b1 * (1 - q ^ n) / (1 - q),
де b1 – перший елемент прогресії(в даному завданні це 1),
q – знаменник,
n – кількість елементів прогресії
*/

/*
Functсion Declaration
  function f(n, q) {
    let b1 = 1;
    let Sn = 0;
    Sn = b1 * (1 - q ** n) / (1 - q);
    console.log(Sn);
  }
  f(4, 3);
  f(5, 2);
*/

/*
Function Expression
  let f = function (n, q) {
    let b1 = 1;
    let Sn = 0;
    Sn = b1 * (1 - q ** n) / (1 - q);
    console.log(Sn);
  }
  f(5, 2);
  f(4, 3);
*/

/*
Function Arrow
  let f = (n, q) => {
    let b1 = 1;
    let Sn = 0;
    Sn = b1 * (1 - q ** n) / (1 - q);
    console.log(Sn);
  }
  f(5, 2);
  f(4, 3);
*/

/*
Function Arrow
*/
  let f = (n, q) => (1 - q ** n) / (1 - q);
  console.log(f(4, 3));
  console.log(f(5, 2));



