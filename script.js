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


// Игра №4 Камень, Ножницы, Бумага
let playBtn4 = document.querySelector('#mini-game-4 .alt-play'); // ищем ID-игры и ждем клик по кнопке
let container4 = document.querySelector('#mini-game-4 .alt-game-enter'); // контейнер хрнения элементов коммуникации с пользователем
let taskText4 = document.querySelector('#mini-game-4 .alt-task'); // призыв к игре - скрыть после запуска

// переменные состояния игры
let isRPSStarted = false; // флаг состояния
let input4; // поле ввода 
let message4; // сообщения пользователю

// ждем клик 
playBtn4.addEventListener('click', function (event) {
  event.preventDefault(); // отменяем стандартное состояние кнопки(переход по ссылке)

  // Игра - запуск
  // создали флаг запуска игры
  if (!isRPSStarted) {
    isRPSStarted = true;
    // меняем функцию кнопки
    playBtn4.textContent = 'Проверить!';

    // скрываем призыв играть
    if (taskText4) taskText4.style.display = 'none';

    // Удаляем старые элементы
    if (input4 && input4.remove) input4.remove();
    if (message4 && message4.remove) message4.remove();

    // инструкция к игре - новый параграф
    message4 = document.createElement('p');
    message4.classList.add('alt-message');
    message4.textContent = 'Выберите ваш вариант: 1.Камень, 2.Ножницы или 3.Бумага.';

    // Поле ввода
    input4 = document.createElement('input');
    input4.classList.add('alt-input');
    input4.type = 'text';
    input4.placeholder = 'Ваш выбор';

    // добавляем элементы в контенйер 
    container4.appendChild(message4);
    container4.appendChild(input4);

    // проверяем ответ
    // если кнопка нажата второй раз (проверить)
  } else {
    let userChoice = input4.value.trim().toLowerCase();

    // если кнопку нажали без варианта ответа
    if (userChoice === '') {
      // выводим сообщене
      message4.textContent = 'Пожалуйста, выберите один из вариантов ответа!';
      // меняем кнопку на играть
      playBtn4.textContent = 'Играть!';
      // флаг готов начать с начала
      isRPSStarted = false;
      return;
    }

    // варианты ответа
    const options = ['камень', 'ножницы', 'бумага'];

    // переводим числа в текст
    if (userChoice === '1') {
      userChoice = 'камень';
    } else if (userChoice === '2') {
      userChoice = 'ножницы';
    } else if (userChoice === '3') {
      userChoice = 'бумага';
    } else {
      userChoice = userChoice.replace(/[0-9.\s]/g, '');
    }

    // если ввели некорректный ответ
    const validInputs = ['камень', 'ножницы', 'бумага'];
    
    if (!validInputs.includes(userChoice)) {
      message4.textContent = 'Некорректный ввод! Введите 1, 2, 3 или камень, ножницы, бумага.';
      // меняем кнопку на играть
      playBtn4.textContent = 'Играть!';
      // флаг готов начать с начала
      isRPSStarted = false;
      return;
    }
    
    // играет комп - рандом (0 или 1) * кол-во вариантов ответа 3
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    // выбор победителя
    let result;
    // ничья
    if (userChoice === computerChoice) {
      result = 'Ничья!';
    
    // условия победы пользователя
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      result = 'Вы выиграли!';
    
    // отсальные варианты
    } else {
      result = 'Вы проиграли!';
    }

    // вывод результатов игры
    message4.textContent = `Вы выбрали: ${userChoice}. Компьютер выбрал: ${computerChoice}. ${result}`;
    // меняем кнопку на играть
    playBtn4.textContent = 'Играть!';
    // флаг готов начать с начала
    isRPSStarted = false;
  }
});

// Игра №5 Простая викторина
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
// 1. Плавный скролл от кнопки .ahead к блоку #about
document.querySelector('.ahead').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// 2. Плавный скролл к конкретной мини-игре по id
document.querySelectorAll('.game-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // например "#mini-game-1"
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Игра 6
// Ищем кнопку
const playButton6 = document.querySelector('#mini-game-6 .alt-play');

// Ищем шемстой блок по ID (будем менять его фон)
const gameBlock6 = document.getElementById('mini-game-6');

// Генерим случайный цвет фона в НЕХ
function getRandomColor() {
  // Math.random() генерим число от 0 до 1
  // Умножаем на 16777215 (кол-во оттенков)
  // переводим число в шестнадцатеричный формат
  let color = Math.floor(Math.random() * 16777215).toString(16);

  // Если цвет короче 6 символов — дополняем нулями
  while (color.length < 6) {
    color = '0' + color;
  }

  return `#${color}`;
}

// Слушаем кнопку
playButton6.addEventListener('click', function () {
  // Получаем какойто цвет
  const randomColor = getRandomColor();

  // Меняем фон у блока 
  gameBlock6.style.backgroundColor = randomColor;
});

