let nbr1 = document.getElementById('firstNumber');
let nbr2 = document.getElementById('secondNumber');
let result = document.getElementById('answer');
let button = document.getElementById('myButton');
function multiplication() {
    result.value =(nbr1.value * nbr2.value).toString();
}

button.addEventListener ('click', multiplication);