// Задача 1
// Ищем заголовок и кнопку в первом задании
const title1 = document.querySelector('#ts1 h1');
const button1 = document.querySelector('#ts1 .button');

// Ждем клик
button1.addEventListener('click', function () {
  title1.style.display = 'none';
});

// Задача 2
// Ищем параграф и кнопку
const paragraph2 = document.querySelector('#ts2 p'); // первый <p> в блоке
const button2 = document.querySelector('#ts2 .button'); // кнопка
// Ждем клик
button2.addEventListener('click', function () {
  // меняем цвет
  paragraph2.style.color = 'blue';
});

// Задача 3
// Ищем и находим
const title3 = document.querySelector('#ts3 h1');
const button3 = document.querySelector('#ts3 .button');
// Ждем и дожидаемся
button3.addEventListener('click', function () {
  title3.textContent = 'Привет, мир!';
});

// Задание 4
const button4 = document.querySelector('#ts4 .button');

button4.addEventListener('click', function () {
  // Ищем все description
  const descriptions = document.querySelectorAll('.description');
  // Перебираем и меняем текст
  descriptions.forEach(function (element) {
    element.textContent = 'Измененный текст';
  });
});

// Задание 5
const button5 = document.querySelector('#ts5 .button');
button5.addEventListener('click', function () {
  // Ищем все description
  const descriptions = document.querySelectorAll('#ts5 .description');
  // Перебираем и меняем текст
  descriptions.forEach(function (elem) {
    elem.textContent = 'Новый текст';
  });
});

// Задание 6
const button6 = document.querySelector('#ts6 .button');

button6.addEventListener('click', function () {
  // Создаем новый параграф <p>
  const newParagraph = document.createElement('p');

  // Добавляем текст
  newParagraph.textContent = 'Новый абзац';

  // Добавляем новый элемент в конец <body>
  document.body.appendChild(newParagraph);
});

// Задание 7
const button7 = document.querySelector('#ts7 .button');

button7.addEventListener('click', function () {
  // Ищем первый description
  const firstDescription = document.querySelector('.description');

  // Если нашли удаляем
  if (firstDescription) {
    firstDescription.remove();
  }
});

