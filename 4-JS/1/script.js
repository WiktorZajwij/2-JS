/* 
👉 Завдання 1:

— Пароль і 4 спроби. Завдання виконуємо через while або do while.

1. Запросити у користувача пароль!

2. Якщо пароль не вірний повідомити що залишилось 4 спроби!

- якщо далі невірні паролі спроби зменшуються.

- коли спроб вже нема вивести повідомлення: "Будь ласка спробуйте пізніше!".

3. Якщо користувач одразу чи після кількох спроб ввів вірний пароль, вивести повідомлення "Запрошуємо на сайт!".

4. Завдання реалізуємо без break і міток!
*/


let ask = +prompt('Введіть пароль (1234)');
let password = 1234;
let i = 4;

while(i > 0 && ask !== password) {
  ask = +prompt(`Пароль не вірний, залишилось ${i} спроб`);
  i--;
}

if (ask == password) {
  document.write(`<h2>Запрошуємо на сайт!</h2>`);

} else if (i == 0) {
  document.write(`<h2>Будь ласка спробуйте пізніше!</h2>`);
}






// let pass = 1234;
// let i = 5;
// while (i > 0) {
//   let ask = +prompt(`Введіть свій пароль,ще ${i}`);
//   if (ask == pass) {
//     console.log('Запрошуємо на сайт!');
//   } else {
//     console.log('Будь');
//   }
//   i--;
// }