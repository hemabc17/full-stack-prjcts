let currentInput = '';
let previousInput = '';
let currentOperation = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = `${previousInput} ${currentOperation} ${currentInput}`;
}
