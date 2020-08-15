var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}


function makeOperation(operation) {
    if (operation === '+') {
        var result = getNumber1() + getNumber2();
    }else if (operation === '-') {
        var result = getNumber1() - getNumber2();
    }else if (operation === '*') {
        var result = getNumber1() * getNumber2();
    }else if (operation === '/') {
        var result = getNumber1() / getNumber2();
    }
    window.alert(result);
}

function onButtonClickPlus() {
    makeOperation('+');
}

function onButtonClickMinus() {
    makeOperation('-');
}

function onButtonClickMultiply() {
    makeOperation('*');
}

function onButtonClickDevide() {
    makeOperation('/');
}

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultiply.addEventListener('click', onButtonClickMultiply); 
buttonDevide.addEventListener('click', onButtonClickDevide);