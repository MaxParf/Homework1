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
    
    // Независимо от ответа кнопка возвращает Играть
    if (userNumber === currentAnswer) {
    message2.textContent = 'Отлично!';
    playBtn2.textContent = 'Играть!';
    isArithmeticStarted = false;
  } else {
    message2.textContent = `Неверно!`;
    playBtn2.textContent = 'Играть!';
    isArithmeticStarted = false;
  }

  }
});

// Игра №3 — Переверни текст
let playBtn3 = document.querySelector('#mini-game-3 .alt-play');
let container3 = document.querySelector('#mini-game-3 .alt-game-enter');

let isReverseStarted = false;
let input3;
let message3;

playBtn3.addEventListener('click', function (event) {
  event.preventDefault();

  if (!isReverseStarted) {
    isReverseStarted = true;
    playBtn3.textContent = 'Перевернуть!';

    // Удаляем старые элементы, если есть
    if (input3 && input3.remove) input3.remove();
    if (message3 && message3.remove) message3.remove();

    // Инструкция
    message3 = document.createElement('p');
    message3.classList.add('alt-message');
    message3.textContent = 'Введите текст, который вы хотите перевернуть:';

    // Поле ввода
    input3 = document.createElement('input');
    input3.classList.add('alt-input');
    input3.type = 'text';
    input3.placeholder = 'Ваш текст';

    container3.appendChild(message3);
    container3.appendChild(input3);

  } else {
    let userText = input3.value.trim();

    if (userText === '') {
      message3.textContent = 'Пожалуйста, введите текст!';
      return;
    }

    // Переворачиваем текст
    let reversed = reverseText(userText);

    message3.textContent = `${reversed}`;
    playBtn3.textContent = 'Играть!';
    isReverseStarted = false;
  }
});

// Функция переворота строки
function reverseText(text) {
  return text.split('').reverse().join('');
}



const quiz = [
  {
    question: "Столица Франции",
    options: ["1. Рим", "2. Париж", "3. Мытищи"],
    correctAnswer: 2
  },
  {
    question: "Столица Гондураса",
    options: ["1. Тегусигальпа", "2. Москва", "3. Мытищи"],
    correctAnswer: 1
  },
  {
    question: "Столица Мира",
    options: ["1. Мытыщи", "2. Нью Йорк", "3. Ваш любимый город"],
    correctAnswer: 3
  }
];

const playBtn5 = document.querySelector('#mini-game-5 .alt-play');
const container5 = document.querySelector('#mini-game-5 .alt-game-enter');
const taskParagraph = container5.querySelector('.alt-task'); // существующий параграф для вывода вопроса и вариантов

let input5;
let currentQuestionIndex = 0;
let correctCount = 0;
let quizStarted = false;

playBtn5.addEventListener('click', function (e) {
  e.preventDefault();

  if (!quizStarted) {
    quizStarted = true;
    currentQuestionIndex = 0;
    correctCount = 0;
    playBtn5.textContent = 'Ответить';

    // Создаём поле ввода, если его нет
    if (!input5) {
      input5 = document.createElement('input');
      input5.type = 'text';
      input5.classList.add('alt-input');
      input5.placeholder = 'Ответ (1, 2 или 3)';
      container5.appendChild(input5);
    }
    input5.value = '';

    showQuestion();

  } else {
    const userAnswer = input5.value.trim();

    if (userAnswer === '') {
      taskParagraph.textContent = 'Введите ответ!'; 
      showQuestion(); // чтобы вопрос и варианты остались видны
      return;
    }

    const currentQuiz = quiz[currentQuestionIndex];

    if (Number(userAnswer) === currentQuiz.correctAnswer) {
      correctCount++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
      input5.value = '';
      showQuestion();
    } else {
      alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
      playBtn5.textContent = 'Играть!';
      quizStarted = false;

      // Очистка интерфейса после окончания
      input5.remove();
      input5 = null;
      // Восстановим исходный текст параграфа alt-task
      taskParagraph.textContent = 'Отвечай на вопросы викторины с вариантами ответов.';
    }
  }
});

function showQuestion() {
  const q = quiz[currentQuestionIndex];
  taskParagraph.textContent = `${q.question}\n${q.options.join('\n')}`;
}
