const Calculator = {
    displayNumber : '0',
    operator: null,
    firstNumber: null,
    waitSecNumber: false
};

function updateDisplay () {
    document.querySelector('.calculatorDisplay').innerHTML = Calculator.displayNumber;
};

function clearCalculator () {
    Calculator.displayNumber = '0';
    Calculator.operator = null;
    Calculator.firstNumber = null;
    Calculator.waitSecNumber = false;
};

function numberInput (number) {
    Calculator.displayNumber === '0' ? Calculator.displayNumber = number : Calculator.displayNumber += number;
};

function inverseNumber () {
    Calculator.displayNumber = Calculator.displayNumber * -1;
}

function operatorInput (operator) {
    if (!Calculator.waitSecNumber) {
        Calculator.operator = operator;
        Calculator.waitSecNumber = true;
        Calculator.firstNumber = Calculator.displayNumber;
        // clearing the  diplay number back to default
        Calculator.displayNumber = '0';
    }
    else{
        alert('Please press equal before pressing another operator');
    }
}

function performCalculation (){
    let firstNum = parseInt(Calculator.firstNumber);
    let secondNum = parseInt(Calculator.displayNumber);
    let operator = Calculator.operator;
    let result = 0;

    if (operator === '+') {
        result = firstNum + secondNum;
    }
    else if (operator === '-') {
        result = firstNum - secondNum;
    }
    else if (operator === 'x') {
        result = firstNum * secondNum;
    }
    else if (operator === '÷') {
        result = firstNum / secondNum;
    }

    Calculator.displayNumber = result;
    // console.log(result);
}

const buttons = document.querySelectorAll('.calculatorButton');
// console.log(buttons);
// console.log(buttons[1].innerText);

Array.from(buttons).forEach(target => {
    // console.log(target);
    target.addEventListener('click', event => {

        if (target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        else if (target.classList.contains('plusOrMin')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        else if (target.classList.contains('equal')){
            performCalculation();
            updateDisplay();
            return;
        }
        else if (target.classList.contains('operator')){
            operatorInput(target.innerText);
            console.log(target.innerText);
            return;
        }
        numberInput(target.innerText);
        updateDisplay();
        return;
    });
});