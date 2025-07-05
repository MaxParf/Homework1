// Задание 1
// Создаем переменную с паролем
let password = 'пароль123';

// Запрашиваем ввод пароля у пользователя
let userInput = prompt('Введите пароль');

// Проверка пароля
if (userInput === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

// Задание 2
// Присваиваем переменной C любое число
let с = -3;
// Если переменная > 0 и < 10 то верно
if (с > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
} 

// Задание 3
// Присваиваем переменным d и e любые числа
let d = 150;
let e = 50;
// Если значения d или e > 100 то верно
if (d > 100 || e > 100) {
    console.log('Верно');
}
else {
    console.log('Неверно')
}

// Задание 4
let a = '2';
let b = '3';
// Преобразуем текстовые значения в числовые
alert(Number(a) + Number(b));

// Задание 5
// Присваеваем переменной monthNumber номер любого из 12 месяцев
let monthNumber = 12;
// Если значение < 1 или > 12 - Ошибка ввода
if (monthNumber < 1 || monthNumber > 12) {
  console.log("Ошибка ввода");
} else {
    // При значениях 12,1,2 ответ Зима и т.д
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
  }
}
