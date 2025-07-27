// Задание 1
const firstArr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < firstArr.length; i++) {
  console.log(firstArr[i]); // выводим элемент

  if (firstArr[i] === 10) {
    break; // останавливаем цикл при встрече числа 10
  }
}

// Задание 2
const secondArr = [1, 5, 4, 10, 0, 3];
let i = 0; // начинаем с первого индекса

while (i < secondArr.length) {
  if (secondArr[i] === 4) { // Если нашли 4
    console.log(i);
    break; // прерываем цикл
  }
}

// Задание 3
const thirdArr = [1, 3, 5, 10, 20];
const result = thirdArr.join(' ');
console.log(result); // Выводит "1 3 5 10 20"

// Задание 4
const matrix = [];
for (let i = 0; i < 3; i++) {
  const row = []; // Создаём новую строку (вложенный массив)
  for (let j = 0; j < 3; j++) {
    row.push(1); // Заполняем строку единицами
  }
  matrix.push(row); // Добавляем строку в основной массив
}

console.log(matrix);

// Задание 5
const fourthArr = [1, 1, 1];

fourthArr.push(2, 2, 2); // добавляем двойки в конец массива

console.log(fourthArr);

// Задание 6
const fifthArr = [9, 8, 7, 'a', 6, 5];

// Cортируем
fifthArr.sort(); // сортируем все как строки

const effect = fifthArr.filter(item => item !== 'a'); // удоляем найденую 'a'

console.log(effect); // [5, 6, 7, 8, 9]

// Задание 7
const num = [9, 8, 7, 6, 5];
const userInput = prompt('Угадай число'); // ставим задачу

if (num.includes(Number(userInput))) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание 8
const str = 'abcdef';

const sixthArr = str.split(''); // строку в массив

const reversedArr = sixthArr.reverse(); // разворачиваем

const reversedStr = reversedArr.join(''); // массив в строку

console.log(reversedStr); // 'fedcba'

// Задание 9
const seventhArr = [[1, 2, 3], [4, 5, 6]];
const flattened = [...seventhArr[0], ...seventhArr[1]];
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Задание 10
const numbers = [3, 7, 1, 5, 9]; // массив с произвольными числами от 1 до 10

for (let i = 0; i < numbers.length; i++) {
  // Проверяем, есть ли следующий элемент, чтобы не выйти за пределы массива
  if (i + 1 < numbers.length) {
    const sum = numbers[i] + numbers[i + 1];
    console.log(`Сумма элементов с индексами ${i} и ${i + 1} равна ${sum}`);
  } else {
    // Если следующего элемента нет, можно вывести сообщение или просто ничего не делать
    console.log(`Элемент с индексом ${i} — последний, следующего нет`);
  }
}

// Задание 11
function getSquares(arr) {
  return arr.map(num => num * num);
}

// Задание 12
function getLengths(arr) {
  return arr.map(str => str.length);
}

// Задание 13
function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}

// Задание 14
const number = []; // пустой массив
for (let i = 0; i < 10; i++) {  // случайнык числа
  numbers.push(Math.floor(Math.random() * 11));
} // генерим число от 0 до 1, умнож на 11, чтобы получить от 0 до 10.999,
  // Math.floor округляет вниз до целого

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log('Исходный массив:', numbers);
console.log('Массив с четными числами:', evenNumbers);

// Задание 15
const numbe = [];

for (let i = 0; i < 6; i++) {
  numbe.push(Math.floor(Math.random() * 10) + 1);
}

const sum = numbe.reduce((accumulator, current) => accumulator + current, 0);

const average = sum / numbe.length;

console.log('Массив:', numbe);
console.log('Среднее арифметическое:', average);
