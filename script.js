//  Игра №1
//  Угадай число
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

// Игра №2
// Простая арифметика
let playBtn2 = document.querySelector('#mini-game-2 .alt-play');
let container2 = document.querySelector('#mini-game-2 .alt-game-enter');

let isArithmeticStarted = false;
let currentAnswer;
let input2;
let message2;

playBtn2.addEventListener('click', function (event) {
  event.preventDefault();

  if (!isArithmeticStarted) {
    // Начинаем игру
    isArithmeticStarted = true;
    playBtn2.textContent = 'Проверить!';

    // Удаляем старые элементы
    if (input2 && input2.remove) input2.remove();
    if (message2 && message2.remove) message2.remove();

    // Генерируем задачу
    const operators = ['+', '-', '*', '/'];
    const a = Math.floor(Math.random() * 50) + 1;
    const b = Math.floor(Math.random() * 49) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let expression = `${a} ${operator} ${b}`;
    let result;

    // Вычисляем правильный ответ
    switch (operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = Number((a / b).toFixed(2)); break;
    }

    currentAnswer = result;

    // Интерфейс: показать пример и поле ввода
    message2 = document.createElement('p');
    message2.classList.add('alt-message');
    message2.textContent = `Реши: ${expression}`;

    input2 = document.createElement('input');
    input2.classList.add('alt-input');
    input2.type = 'text';
    input2.placeholder = 'Ваш ответ';

    container2.appendChild(message2);
    container2.appendChild(input2);

  } else {
    // Проверяем ответ пользователя
    let userAnswer = input2.value.trim();

    if (userAnswer === '') {
      message2.textContent = 'Введите ответ!';
      return;
    }

    // Преобразуем строку в число, округляем до 2 знаков для деления
    let userNumber = Number(Number(userAnswer).toFixed(2));

    if (userNumber === currentAnswer) {
      message2.textContent = 'Отлично!';
      playBtn2.textContent = 'Играть!';
      isArithmeticStarted = false;
    } else {
      message2.textContent = `Неверно!`;
    }
  }
});
