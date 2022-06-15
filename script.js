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

const buttons = document.querySelectorAll('.calculatorButton');
// console.log(buttons);
// console.log(buttons[1].innerText);

Array.from(buttons).forEach(target => {
    // console.log(target);
    target.addEventListener('click', event => {

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        else if (target.classList.contains('plusOrMin')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        numberInput(target.innerText);
        updateDisplay();
    })
});