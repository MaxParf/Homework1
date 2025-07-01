let a = 10;
alert(a);
a = 20;
alert(a);

const firstIphone = 2007;
alert(firstIphone);

const jsCreator = "Brendan Eich";
alert(jsCreator);

let b = 10;
let c = 2;
alert("Сумма:" + (b + c));
alert("Разность:" + (b - c));
alert("Произведение:" + (b * c));
alert("Частное:" + (b / c));     

let result = 2 ** 5;
alert(result); 

let d = 9;
let e = 2;
let remainder = d % e;
alert(remainder);

let number = 1;
number += 5;
number -= 3;
number *= 7;
number /= 3;
number ++;
number --;
alert(number);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
  name: "Вася", // строковое значение
  age: 30,      // числовое значение
  isAdmin: true // булево значение
};
console.log(user);
alert(user.name);

let userName = prompt("Ввидите Ваше имя");
alert(`Привет, ${userName}!`);

//Дополнительное задание

// Шаг 1: Пользователь загадывает число
let num = prompt("Загада любое число");

// Преобразуем введённое значение в число
num = Number(num);

// Шаг 2: Удвваеваем задуманное число
let dbl = num * 2;
alert("Удвоенное число: " + dbl);

// Шаг 3: Плюс десять
let plusTen = dbl + 10;
alert("После прибавления 10: " + plusTen);

// Шаг 4: Делим на два
let divided = plusTen / 2;
alert("После деления на 2: " + divided);

// Шаг 5: Вычтем задуманное число
let total = divided - num;
alert("После вычитания загаданного числа: " + total);

// Шаг 6: Сообщаем результат
alert(total);

