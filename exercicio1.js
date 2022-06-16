var idade, nome;
nome = prompt("Digite seu nome: ");
idade = parseInt(prompt("Digite sua idade: "));

if (idade <= 14) {
    document.write(nome + " A sua faixa estária é criança");
}
else if (idade <=29) {
    document.write(nome + ' A sua faixa estária é Jovem');
}
else if (idade <= 59) {
    document.write(nome +  ' A sua faixa estária é Adulto');
}
/*else if (idade >= 60) {
    document.write(nome + ' A sua faixa estária é Idoso');
}*/
else{
    document.write(nome + ' A sua faixa estária é Idoso')
}