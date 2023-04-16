/* 
Завдання 3:

Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:

1. Створіть функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt(). 

2. Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.



Приклад роботи:

simpleNumber(10,15) – має повернути 11, 13

simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19

*/

//function declaration
/* 
  let n1 = +prompt('write first number');
  let n2 = +prompt('write second number');
  function simpleNumber(n1, n2) {
    for (let i = n1; i <= n2; i++) {
      for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j < i) {
          break;
        } else if (j === i) {
          console.log(i);
        }
      }
    }
  }
  simpleNumber(n1, n2);
*/



// function expression
/* 
  let n1 = +prompt('write first number');
  let n2 = +prompt('write second number');
  let simpleNumber = function (n1, n2) {
    for (let i = n1; i <= n2; i++) {
      for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j < i) {
          break;
        } else if (j === i) {
          console.log(i);
        }
      }
    }
  }
  simpleNumber(n1, n2);
*/



// arrow function
/* */
let n1 = +prompt('write first number');
let n2 = +prompt('write second number');
let simpleNumber = (n1, n2) => {
  for (let i = n1; i <= n2; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        console.log(i);
      }
    }
  }
}
simpleNumber(n1, n2);

