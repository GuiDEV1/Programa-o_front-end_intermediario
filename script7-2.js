function boas_vindas(nome, n) {
    document.write('seja bem vindo(a) <b>' + nome + '</b>!');
}
var n;
n = prompt('digite seu nome');
boas_vindas(n);
alert(n);