function suma(num1, num2) {
    return num1 + num2;
}

let resultado = suma(10, 5);
console.log(resultado);


function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    return num1 + num2;
}

let resultado = suma(10, 5);
console.log(resultado);


function validateInteger(num) {
    return Number.isInteger(num);
}

function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }

    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("Uno de los parámetros tiene decimales, se redondeará el resultado");
        return Math.round(num1 + num2);
    }

    return num1 + num2;
}

let resultado = suma(10.5, 5.3);
console.log(resultado);


function validateInteger(num) {
    return Number.isInteger(num);
}

function validateDecimals(num1, num2) {
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("Uno de los parámetros tiene decimales, se redondeará el resultado");
        return true;
    }
    return false;
}

function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }

    if (validateDecimals(num1, num2)) {
        return Math.round(num1 + num2);
    }

    return num1 + num2;
}

let resultado = suma(10.5, 5.3);
console.log(resultado);