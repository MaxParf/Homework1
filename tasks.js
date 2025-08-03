// Задание 1
let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr); // Выводит JS

// Задание 2
function filterByStart(arr, startStr) {
  const lowerStart = startStr.toLowerCase();
  return arr.filter(item => item.toLowerCase().startsWith(lowerStart));
}
const fruits = ['Apple', 'apricot', 'Banana', 'Avocado', 'berry'];
const filtered = filterByStart(fruits, 'ap');
console.log(filtered); // ['Apple', 'apricot']

// Задание 3
const num = 32.58884;

const roundDown = Math.floor(num);  // Округляем вниз
const roundUp = Math.ceil(num);     // Округляем вверх
const roundNearest = Math.round(num); // Округляем до ближайшего целого числа

console.log('Округляем вниз:', roundDown); // 32
console.log('Округляем вверх:', roundUp); // 33
console.log('Округляем до ближайшего целого числа:', roundNearest); // 33

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log('Минимальное значение:', minValue); // 21
console.log('Максимальное значение:', maxValue); // 77

// Задание 5
function outRndNum() {
  // Math.random() генерит число от 0 до 0.999...
  // Умножаем на 10 
  // Math.floor() округляет вниз до целого
  // Плюс 1, получаем диапазон от 1 до 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

// Задание 6

function getRandomArray(n) {
  // Вычисляем длину массива — 1/2 от n-(рандомное число) округляем вниз
  const length = Math.floor(n / 2);

  // Массив для результата
  const result = [];

  // Цикл выполнится length раз - 1/2n
  for (let i = 0; i < length; i++) {
    // Генерим число от 0 до n-1
    // Math.random() генерим новое число от 0 до 0,999... и умножаем на n
    // получаем от 0 до чуть меньше n
    // Math.floor и округляем вниз до целого
    const randomNum = Math.floor(Math.random() * n);

    // результат идет в массив
    result.push(randomNum);
  }

  // Выдаем массив с результатами
  return result;
}

// Задание 7
function getRandomInRange(min, max) {
  // Округляем 
  min = Math.ceil(min);
  max = Math.floor(max);
  // Генерим число между мин и макс включительно
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 8
const currentDate = new Date();
console.log(currentDate);

// Задание 9
// Текущая дата из задания 8
const futureDate = new Date(currentDate);

// Плюс 73
futureDate.setDate(futureDate.getDate() + 73);

console.log("Текущая дата:", currentDate.toDateString());
console.log("Дата через 73 дня:", futureDate.toDateString());

// Задание 10
function formatRussianDate(date) {
  const daysOfWeek = [
    "воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"
  ];

  const months = [
    "января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа",
    "сентября", "октября", "ноября", "декабря"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = daysOfWeek[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `Дата: ${day} ${month} ${year} — это ${weekday}.
Время: ${hours}:${minutes}:${seconds}`;
}
