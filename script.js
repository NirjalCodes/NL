// script.js

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('x', '*').replace('÷', '/'));
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function redirect() {
    window.location.href = 'github.com/NirjalCodes'; // 
}
