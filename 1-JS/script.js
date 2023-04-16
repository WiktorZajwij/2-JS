/*
Завдання 1:
1 Створіть змінну city.
2 Присвойте їй значення «Київ».
3 Змініть значення змінної city на «Львів».
4 Створіть змінну address і скопіюйте в неї значення змінної city.
5 Вивести значення змінної address з допомогою команди alert().
*/
let city;
console.log(city);

city = 'Київ';
console.log(city);

city = 'Львів';
console.log(city);

let address = city;
console.log(address);

alert(address);




/*
Завдання 2:
1 Потрібно створити змінну n і записати в неї будь - яке число.
2 Створити іншу змінну result, в яку потрібно записати результат n в степені 3.
3 Результат вивести командою console.log().
*/
let n = 5;

let result = n * n * n;

console.log(result);





/* 
Завдання 3:
Потрібно написати програму, яка обчислить вартість покупки.
Людина купила 4 ручки по 5.25 грн і 6 олівців по 3.50 грн.
Командами JavaScript потрібно обрахувати загальну вартість і вивести результат в document.write(для вартостей і кількостей товарів постворювати окремі змінні).
*/



let pen = 4;
let pencil = 6;

let pricePen = 5.25;
let pricePencil = 3.50;

pens = pen * pricePen;
// console.log(pens);

pencils = pencil * pricePencil;
// console.log(pencils);

price = pens + pencils;
// console.log(price);

document.write(price);