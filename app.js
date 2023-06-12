let result = '';
let operator = '';
let first = '';
let second = '';
let pFirst = ''
let pSecond = ''
let pOperator = ''

let numberInput = document.querySelectorAll('.number');
let operatorInput = document.querySelectorAll('.operator');
let clearScreen = document.querySelector('#clear');
let back = document.querySelector('#back');
let equal = document.querySelector('#equal');
let decimal = document.querySelector('#point');
let display = document.querySelector('.display');


//Number input
numberInput.forEach(function(num) {
    num.addEventListener('click', () => append(num.textContent));
})


//Operator Input
operatorInput.forEach(function(ops) {
    ops.addEventListener('click', () => set(ops.textContent));
})

//Equal Button
equal.addEventListener('click', () => evaluate());

//Clear Button
clearScreen.addEventListener('click', () => clear());

//Decimal
decimal.addEventListener('click', () => addPoint());

//Back
back.addEventListener('click', () => undo());

// 1
// result 1
// +
// op +
// first = 1
// operator = +
// 2

// first 12
// op + 
// second 7
// op -
// calculate 12 + 7
// display
// store result
// result = first

function set(op) {
    if(operator !== '') evaluate();
    pFirst = first;
    first = result;
    pOperator = operator;
    operator = op;
    displayAppend(op);
    result = '';
}

function evaluate() {
    pSecond = second;
    second = result;
    result = operate(+first, operator, +second);
    displayResult();
    first = result; 
}

function addPoint() {
    if(result.includes('.')) return;
    display.textContent += '.';
    result += '.';
}


function clear() {
    display.textContent = '';
    restCalc();
}

function restCalc() {
    result = '';
    operator = '';
    second = '';
    first = '';
}

function resetResult() {
    result = '';
}

function displayResult() {
    display.textContent = result;
    operator = '';
}

function undo() {
    // if(isOperator(display.textContent.charAt(display.textContent.length - 1)) && display.textContent.length === 2) {
    //     operator = +pOperator;
    // } else if(isOperator(display.textContent.charAt(display.textContent.length - 1)) && display.textContent.length > 2) {
    //     operator = +pOperator;
    //     first = +pFirst;
    // } else if(isNumber(display.textContent.charAt(display.textContent.length - 1)) && display.textContent.length > 2) {
    //     second = pSecond;
    // }
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    console.log(display.textContent);

}

function isNumber(key) {
    if(key >= 0 && key <= 9) {
        return true;
    }
}


function isOperator(val) {
    if(val === '+' || val === '-' || val === '/' || val === '*') {
        return true;
    }
}

//Append input and display
function append(value) {
    display.textContent += value;
    result += value;
    console.log('result : ' + result);    
}

function displayAppend(op) {
    display.textContent += op;
}

function operate(first_op, op, second_op) {
    switch(op) {
        case '+':
            return add(first_op, second_op);
        case '-':
            return subtract(first_op, second_op);
        case '/':
            return divide(first_op, second_op);
        case '*':
            return mulitply(first_op, second_op);
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function mulitply(a,b) {
    return a * b;
}



/* Mereko input lete jana hai toh kya kr skti hu mai

function for 

1)add
2)subtract
3)multiply
4)divide

store the first number when a user presses an operator
save which operation has been chosen 

pair should be evaluated in strings like 12 + 7 - 5 * 3

first 12
op + 
second 7
op -
calculate 12 + 7
display
store result
result = first

//4
    //first = 4
    //op = +
    //second = 6
    //first = 10
    //op = -
    //second = 9

    //oprator left - second value null
    //operator - operator null
    //operator left - second value null
    //operator - operator null
    //string length - first null

    //4 undo 4
    //4 string length 1 - first null
    //5+ undo +
    //+ operator - operator null
    //5 undo 5
    //5 string length 1 - first null
    //6-7 undo 7
    //7 operator left - second null

    //4 append 
    //pFirst - 0
    //pSecond - 0
    //pOperator - 0
    //first - 0
    //second - 0
    //operator - 0
    //result - 4

    //4 undo string length 1 - result null and first null
    //pFirst - 0 first
    //pSecond - 0 second
    //pOperator - 0 operator
    //first - 0
    //second - 0
    //operator - 0
    //result - null (change)

    //5 append 
    //pFirst - 0 first
    //pSecond - 0 second
    //pOperator - 0 operator
    //first - 0
    //second - 0
    //operator - 0
    //result - 5 (change)

    //5+ set 
    //pFirst -  0 first
    //pSecond - 0 second
    //pOperator - 0 operator
    //first - 5
    //second - 0
    //operator - +
    //result - 5
    
    //5+ + undo
    //pFirst  - 0 first
    //pSecond - 0 second
    //pOperator - 0 operator
    //first - 5
    //second - 0
    //operator - + change to 0 i.e., pOperator
    //result - 5
    
    //5- set
    //pFirst  - 5 first
    //pSecond - 0 second
    //pOperator - 0 operator
    //first - 5
    //second - 0
    //operator - - 
    //result - null (change)
    
    //5-3 undo 3
    //pFirst  - 5 first
    //pSecond - 0 second
    //pOperator - - operator
    //first - 5
    //second - 0
    //operator - - 
    //result - null

    //5-3 = set
    //pFirst  - 5 first
    //pSecond - 0 second
    //pOperator - - operator
    //first - 5
    //second - 3
    //operator - - 
    //result - 2 (change)

    //5-3+ +undo
    //pFirst  - 5 first
    //pSecond - 0 second
    //pOperator - - operator
    //first - 2 change to pfirst i.e., 5
    //second - 3
    //operator - + change to pOperator i.e., -
    //result - 2

    //5-3- evaluate
    //pFirst  - 5 first
    //pSecond - 3 second
    //pOperator - - operator
    //first - 2
    //second - 3
    //operator - -
    //result - 2

    //5-3-1 1 undo
    //pFirst  - 5 first
    //pSecond - 3 second
    //pOperator - - operator
    //first - 2
    //second - 1 pSecond
    //operator - -
    //result - 2

*/