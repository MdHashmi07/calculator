const screen = document.getElementById("calScreen");
const calBtns = document.querySelectorAll(".cal-btn");
const operatorsBtn = document.querySelectorAll(".cal-operators");
const equalBtn = document.getElementById("equalOperator");
const clearAll = document.getElementById("clearAllButton");
const addBtn = document.getElementById("addOperator");
const percentBtn = document.getElementById("percentOperator");
const posNegBtn = document.getElementById("posNegOperator");
const clearBtn = document.getElementById("clearButton");
const decimalBtn = document.getElementById("decimalButton");

let result = 0;
let number1 = 0;
let operator = 0;
let number2 = 0;
let temp = 0;
let count = 0;

calBtns.forEach((element) => {
    element.addEventListener('click', () => {
        screen.innerHTML += element.innerHTML;
        number1 = Number(screen.innerHTML);
    });
});

operatorsBtn.forEach((element) => {
    element.addEventListener('click', () => {
        operator = element.innerHTML;
        screen.innerHTML = element.innerHTML;
        temp = Number(number1);
        screen.innerHTML += element.innerHTML;
        screen.innerHTML = '';
        count = 0;
    });
});

clearAll.addEventListener('click', () => {
    number1 = 0;
    number2 = 0;
    temp = 0;
    result = 0;
    screen.innerHTML = '';
    count = 0;
});

equalBtn.addEventListener('click', () => {
    number2 = Number(screen.innerHTML);
    switch (operator) {
        case '+':
            result = temp + number2;
            number1 = result;
            number2 = 0;
            screen.innerHTML = result;
            break;
        case '-':
            result = temp - number2;
            screen.innerHTML = result;
            number1 = result;
            number2 = 0;
            break;
        case 'x':
            result = temp * number2;
            screen.innerHTML = result;
            number1 = result;
            number2 = 0;
            break;
        case '/':
            result = temp / number2;
            screen.innerHTML = result;
            number1 = result;
            number2 = 0;
            break;
        default:
            screen.innerHTML = "Error! operator is not correct";
    }
});

percentBtn.addEventListener("click", () => {
    screen.innerHTML = "";
    temp = Number(number1);
    result = (temp / 100);
    screen.innerHTML = result;
});

posNegBtn.addEventListener("click", () => {
    let number = screen.innerHTML;
    number1 = number * -1;
    screen.innerHTML = number1;
});

clearBtn.addEventListener("click", () => {
    let res = screen.innerHTML.slice(0, -1);
    number1 = res;
    screen.innerHTML = number1;
});

decimalBtn.addEventListener("click", () => {
    if (count < 1) {
        screen.innerHTML += decimalBtn.innerHTML;
        count++;
    }
});