// Calculadora de soma e substração

var x, y, resultado;
x = parseFloat(prompt('Digite um número: '));
y = parseFloat(prompt('Digite outro numero'));
resultado = prompt('soma ou subtracao?; ')

function calculo(num1 , num2, operacao) {
    if(operacao == 'soma') {
      return num1 + num2;
    }
    else if(operacao == 'subtracao') {
      return num1 - num2;
    }
}

document.querySelector("#saida").innerHTML = 'O resultado é: ' +  calculo(x,y,resultado)