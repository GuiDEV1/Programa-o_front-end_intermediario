/* Programa que calcula a média de notas digitadas pelo o usuário.
   Autor: Guilherme M. Dias.
   Versão 1.0
*/

var n1, n2, n3, n4;

alert('Digite 4 numeros para ser calculado a média!!');

n1 = parseFloat(prompt('Digite um número: '));
n2 = parseFloat(prompt('Digite um número: '));
n3 = parseFloat(prompt('Digite um número: '));
n4 = parseFloat(prompt('Digite um número: '));

function calculaMedia(n1,n2,n3,n4) {
    return (n1 + n2 + n3 + n4) /4
};

document.querySelector('.saida').innerHTML += 'O resultado da média dos numeros: <br><br>'+n1+ ' ' + n2+ ' ' + n3+ ' ' + n4 + ' São: ' +  calculaMedia(n1,n2,n3,n4);


