/*
Algoritimo que verifica o maior número e exibe para o usuario.
autor: Guilherme M.Dias
Versão 1.0.
*/

var n1, n2, n3, n4, n5;
alert('Digite 5 números e o programa ira exibir o maior!!')
n1 = parseFloat( prompt('Digite um número: '));
n2 = parseFloat( prompt('Digite um número: '));
n3 = parseFloat( prompt('Digite um número: '));
n4 = parseFloat( prompt('Digite um número: '));
n5 = parseFloat( prompt('Digite um número: '));

if ( n1 > n2 || n1 > n3 || n1 > n4 || n1 > n5) {
    document.querySelector('#saida').innerHTML += 'O maior número foi ' + n1; 
}
else if (n2 > n1 || n2 > n3 || n2 > n4 || n2 > n5) {
    document.querySelector('#saida').innerHTML += 'O maior número foi ' + n2; 
}
else if (n3 > n1 || n3 > n2 || n3 > n4 || n3 > n5 ) {
     document.querySelector('#saida').innerHTML += 'O maior número foi ' + n3; 
}
