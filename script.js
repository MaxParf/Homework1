// Задание 1
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// Задание 4
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5
let n = 1000;
//num - кол-во итераций
let num;
// считаем кол-во итераций
for (num = 0; n >= 50; num++) {
  n = n / 2;
}

console.log(`Результат: ${n}`);
console.log(`Итераций: ${num}`);

// Задание 6
// Допустим первая пятница это 1-е число
const firstFriday = 1;
// Всего 31 день
const daysInMonth = 31;
// Цикл (начало day - первая пятница, условие число <= 31, + неделя) )
for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
} 

