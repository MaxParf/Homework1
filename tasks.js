// Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

// Сортировка по возрасту по возрастанию
// коллбек - функция если а или б < 0 то ставим вперед
// а если = 0 то ничего не меняем 
people.sort(function(a, b) {
  return a.age - b.age;
});

console.log(people);

// Задание 2
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      output.push(arr[i]);
    }
  }

  return output;
}

console.log(filter([3, -4, 1, 9], isPositive));
// → [3, 1, 9]

const humans = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(humans, isMale));
// → [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

// Задание 3
// Запуск интервала, каждые 3 секунды вывод текущей даты
const intervalId = setInterval(() => {
  console.log(new Date());
}, 3000); // 3000 мс = 3 секунды

// Запуск таймера, через 30 секунд стоп интервала
setTimeout(() => {
  // Останавливаем setInterval
  clearInterval(intervalId); 
  console.log("30 секунд прошло");
}, 30000); // 30000 мс = 30 секунд

// Задание 4
function delayForSecond(callback) {
  setTimeout(callback, 1000); // запуск коллбека через 1 сек
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
// обернув коллбек в доп.скобки и задав стрелочную функцию 
// мы вернули его в функцию delayForSecond
// иначе sayHi('Глеб') выполнится сразщу
delayForSecond(() => sayHi('Глеб'));

