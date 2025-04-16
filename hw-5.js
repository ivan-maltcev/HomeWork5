// Задание 1
function getMin(a, b) {
    return a < b ? a : b;
  }
alert(getMin(8, 4));
alert(getMin(6, 6));
alert(getMin(10, 25));

// Задание 2
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
  }
  
  const userInput2 = prompt('Введите число:');
  const number2 = Number(userInput2);
  
  if (!isNaN(number2)) {
    alert(checkEvenOdd(number2));
  } else {
    alert('Пожалуйста, введите корректное число.');
  }

// Задание 3
function getSquare(n) {
    return n * n;
  }
  function printSquare(n) {
    alert('Квадрат числа:', n * n);
  }
  const userInput3 = prompt('Введите число:');
  const number3 = Number(userInput3);
  if (!isNaN(number3)) {
    const square = getSquare(number3);
    alert('Квадрат числа: ' + square);
    printSquare(number3);
  } else {
    alert('Пожалуйста, введите корректное число.');
  }

  // Задание 4
  function checkAge() {
    const userInput = prompt('Сколько тебе лет?');
    const age = Number(userInput);
  
    if (isNaN(age) || userInput.trim() === '') {
      alert('Пожалуйста, введите корректное число.');
    } else if (age < 0) {
      alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
      alert('Привет, друг!');
    } else if (age >= 13) {
      alert('Добро пожаловать!');
    }
  }
  checkAge();

// Задание 5
function multiplyIfNumbers() {
  const a = prompt('Введите первое число:');
  const b = prompt('Введите второе число:');

  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Одно или оба значения не являются числом');
  } else {
    const product = num1 * num2;
    alert('Произведение чисел: ' + product);
  }
}
multiplyIfNumbers();

// Задание 6
function cubeNumber() {
  const input = prompt('Введите число от 0 до 10:');
  const number = Number(input);

  if (isNaN(number)) {
    alert('Переданный параметр не является числом');
  } else {
    const cube = number ** 3;
    alert(`${number} в кубе равняется ${cube}`);
  }
}
cubeNumber();

// Задание 7
const circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};
const message = 
  `Площадь circle1: ${circle1.getArea().toFixed(2)}\n` +
  `Периметр circle1: ${circle1.getPerimeter().toFixed(2)}\n\n` +
  `Площадь circle2: ${circle2.getArea().toFixed(2)}\n` +
  `Периметр circle2: ${circle2.getPerimeter().toFixed(2)}`;
alert(message);