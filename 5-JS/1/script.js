/* 
👉 Завдання 1:

— Написати розв’язок нижче описаного завдання за допомогою конструкції switch:

1. Користувач вводить число в prompt

2. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.

3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.
*/

let month = +prompt('Введіть число місяця від 1 до 12');

switch (month) {
  case 1:
    alert('Січень - Зима');
    break;
  case 2:
    alert('Люти - Зима');
    break;
  case 3:
    alert('Березень - Весна');
    break;
  case 4:
    alert('Квітень - Весна');
    break;
  case 5:
    alert('Травень - Весна');
    break;
  case 6:
    alert('Червень - Літо');
    break;
  case 7:
    alert('Липень - Літо');
    break;
  case 8:
    alert('Серпень - Літо');
    break;
  case 9:
    alert('Вересень - Осінь');
    break;
  case 10:
    alert('Жовтень - Осінь');
    break;
  case 11:
    alert('Листопад - Осінь');
    break;
  case 12:
    alert('Грудень - Зима');
    break;

  default:
    alert('Це неможливо');
    break;
}