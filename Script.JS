//Elegí estos dos números.

const num1 = 3;
const num2 = 2;

function Suma (num1, num2) {

    return num1 + num2;

}

var resultadoSuma = Suma (num1, num2);

function Resta (num1, num2) {

    return num1 - num2;
    
}

var resultadoResta = Resta (num1, num2);

function Multiplicación (num1, num2) {

    return num1 * num2;
    
}

let resultadoMultiplicación = Multiplicación (num1, num2);

function División (num1, num2) {

    return num1 % num2;
    
}

let resultadoDivisión = División (num1, num2);

const Array = [resultadoSuma, resultadoResta, resultadoMultiplicación, resultadoDivisión]
console.log (Array);