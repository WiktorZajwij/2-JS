/*
Завдання 8 — Написати програму що обчислює піднесення до степеня. В 1й промпт вводиться число,а в 2й промпт степінь. Умови: Степінь може бути додатня, від'ємна або 0. Обрахувати всі можливі варіанти циклом for. Задачу бажано виконати використовуючи 1 цикл! 

a^b = a*a b раз;

a^-b= 1/a^b;

a^0 = 1;
*/

//a = число, b = степінь



let a = +prompt('Введить число');
let b = +prompt('Введить степінь');
let result = 1;
let i = 1;
while (i <= b || i <= -b) {
  result *= a;
  i++;

};
if (-b > 0) {
  result = 1 / result;
} else if (b == 0) {
  result = 1;
}


console.log(result);
document.write(`<h2>${result}</h2>`);



//or
/*
let a = +prompt('Введить число');
let b = +prompt('Введить степінь');
let result = 1;
let i = 1;
do {
  result *= a;
  i++;

} while (i <= b || i <= -b);

if (-b > 0) {
  result = 1 / result;
} else if (b == 0) {
  result = 1;
}


console.log(result);
document.write(`<h2>${result}</h2>`);
*/