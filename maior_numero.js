/*
Algoritimo que verifica o maior número e exibe para o usuario.
autor: Guilherme M.Dias
Versão 1.1.
Data: 06 de julho de 2022.
*/

var n1, n2, n3, n4, n5,nt,t;
 alert('Digite 5 números e o programa ira exibir o maior!!')
 n1 = parseFloat( prompt('Digite um número: '));
 n2 = parseFloat( prompt('Digite um número: '));
 n3 = parseFloat( prompt('Digite um número: '));
 n4 = parseFloat( prompt('Digite um número: '));
 n5 = parseFloat( prompt('Digite um número: '));

nt = [n1,n2,n3,n4,n5]

t = Math.max(...nt)


document.querySelector('#saida').innerHTML += 'O maior valor Digitado foi de: ' +  t;
