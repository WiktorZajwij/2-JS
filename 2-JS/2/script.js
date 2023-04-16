let login = prompt("Введіть 'Ім'я'");

if (login === "Ім'я" || login === "ім'я" || login === "ІМ'Я") {
  let password = prompt("Введіть 'ЛОГОС'");

  if (password === "Логос" || password === "логос" || password === "ЛОГОС") {
    console.log("Ласкаво просимо!");
    document.write("Ласкаво просимо!");
  }

  else if (password == "") {
    console.log("Введіть дані!");
    document.write("Введіть дані!");
  }

  else if (password == null) {
    console.log("Вхід скасований!");
    document.write("Вхід скасований!");
  }

  else {
    console.log("Пароль невірний!");
    document.write("Пароль невірний!");
  }
}

else if (login == null) {
  console.log("Вхід скасований!");
  document.write("Вхід скасований!");
}

else if (login == "") {
  console.log("Введіть дані!");
  document.write("Введіть дані!");
}

else {
  console.log("Я вас не знаю!");
  document.write("Я вас не знаю!");
}