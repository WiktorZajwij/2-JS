let count = 0;

let ask1 = prompt('Скільки буде 2 + 2?');
if (ask1 == 4) {
  console.log('Питання №1 - Вірно (4)');
  count++;
} else {
  console.log(`Питання №1 - Не вірно (2 + 2 = 4)`);
}

let ask2 = prompt('Скільки буде 5 - 2?');
if (ask2 == 3) {
  console.log('Питання №2 - Вірно (3)');
  count++;
} else {
  console.log('Питання №2 - Не вірно (5 + 2 = 3)');
}

let ask3 = prompt('Скільки буде 5 * 2?');
if (ask3 == 10) {
  console.log('Питання №3 - Вірно (10)');
  count++;
} else {
  console.log('Питання №3 - Не вірно (5 * 2 = 10)');
}

let ask4 = prompt('Скільки буде 5 + 7?');
if (ask4 == 12) {
  console.log('Питання №4 - Вірно (12)');
  count++;
} else {
  console.log('Питання №4 - Не вірно (5 + 7 = 12)');
}

let ask5 = prompt('Скільки буде 3 + 3?');
if (ask5 == 6) {
  console.log('Питання №5 - Вірно (6)');
  count++;
} else {
  console.log('Питання №5 - Не вірно (3 + 3 = 6)');
}

let ask6 = prompt('Скільки буде 3 / 3?');
if (ask6 == 1) {
  console.log('Питання №6 - Вірно (1)');
  count++;
} else {
  console.log('Питання №6 - Не вірно (3 / 3 = 1)');
}

let ask7 = prompt('Скільки буде 7 % 3?');
if (ask7 == 1) {
  console.log('Питання №7 - Вірно (1)');
  count++;
} else {
  console.log('Питання №7 - Не вірно (7 % 3 = 1)');
}
let ask8 = prompt('Скільки буде 7 * 7?');
if (ask8 == 49) {
  console.log('Питання №8 - Вірно (49)');
  count++;
} else {
  console.log('Питання №8 - Не вірно (7 * 7 = 49)');
}

let ask9 = prompt('Скільки буде 12 - 12?');
if (ask9 == 0) {
  console.log('Питання №9 - Вірно (0)');
  count++;
} else {
  console.log('Питання №9 - Не вірно (12 - 12 = 0)');
}

let ask10 = prompt('Скільки буде 10 ** 2?');
if (ask10 == 100) {
  console.log('Питання №10 - Вірно (100)');
  count++;
} else {
  console.log('Питання №10 - Не вірно (10 ** 2 = 100)');
}


if (count >= 0 && count <= 2) {
  console.log('Правильних відповідей -', count, '- Поганий результат');
  document.write(`Правильних відповідей - ${count} - Поганий результат`);
}
if (count >= 3 && count <= 5) {
  console.log('Правильних відповідей -', count, '- Середній результат');
  document.write(`Правильних відповідей - ${count} - Середній результат`);
}
if (count >= 6 && count <= 8) {
  console.log('Правильних відповідей -', count, '- Високій результат');
  document.write(`Правильних відповідей - ${count} - Високій результат`);
}
if (count >= 9 && count <= 10) {
  console.log('Правильних відповідей -', count, '- Відмінний результат');
  document.write(`Правильних відповідей - ${count} - Високій результат`);
}
