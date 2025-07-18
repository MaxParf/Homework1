let playBtn = document.querySelector('#mini-game-1 .alt-play');
let container = document.querySelector('#mini-game-1 .alt-game-enter');
// Объявляем переменные
let isGameStarted = false;
let secretNumber;
let input;
let message;

playBtn.addEventListener('click', function (event) {
  event.preventDefault();

  if (!isGameStarted) {
    // Начинаем игру
    isGameStarted = true;
    playBtn.textContent = 'Проверить!';
    // Удаляем прежние результаты игры
    if (input && input.remove) {
      input.remove();
    }
    if (message && message.remove) {
      message.remove();
    }
    // Рандомное чило
    secretNumber = Math.floor(Math.random() * 100) + 1;

    input = document.createElement('input');
    input.classList.add('alt-input');
    // Интерфейс пользователя
    message = document.createElement('p');
    message.classList.add('alt-message');
    message.textContent = 'Введи свой вариант числа';

    container.appendChild(message);
    container.appendChild(input);

  } else {
    // Проверяем число пользователя
    let userNumber = Number(input.value);

    if (userNumber === secretNumber) {
      message.textContent = 'Поздравляю, ты угадал!';
      // Готов к новой игре
      playBtn.textContent = 'Играть!';
      isGameStarted = false;

    } else if (userNumber < secretNumber) {
      message.textContent = 'Слишком маленькое число, попробуй ещё.';
    } else {
      message.textContent = 'Слишком большое число, попробуй ещё.';
    }
  }
});

// Задание 1
function getMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Задание 2
function checkEvenOrOdd(n) {
  // Если остаток равен 0 - число четное
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

// Задание 3
// Вывод квадрата числа 
function showSquare(num) {
  console.log(num * num);
}
// Возврат квадрата числа
function getSquare(num) {
  return num * num;
}

// Задание 4
function askAge() {
  let age = prompt("Сколько вам лет?");
  age = Number(age);

  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  }
}

// Задание 5
function multiplyIfNumbers(a, b) {
  // Преобразуем входящие значения в числа
  a = Number(a);
  b = Number(b);

  // Проверяем на числа
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  }

  // Если числа — возврат произведения
  return a * b;
}

// Задание 6
function cubeNumber() {
  // Запросили число
  let userInput = prompt("Введите число от 0 до 10:");
  let number = Number(userInput);
  
  // Если не число
  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  }
  // Если число возврат куб числа
  return `${number} в кубе равняется ${number ** 3}`;
}

// Задание 7
// Создаем переменную для объекта круг
const circle1 = {
  radius: 5,
  getArea: function() {
    // ПиR2
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 8,
  getArea: function() {
    // 2ПиR
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};