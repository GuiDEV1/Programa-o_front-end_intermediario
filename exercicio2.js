var nome, altura, peso, m;

// minhas entradas de dados.
nome = prompt('Dgite seu nome: ');
altura = parseFloat(prompt('Digite sua altura em centimetros: '));
peso = parseFloat(prompt('Digite seu peso: '));

//convertendo altura para metros.
altura = altura / 100;

//calculando a massa corporal.
m = peso / ( altura * altura);

// estrutura de condições.
if (m < 16) {
   document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Baixo peso muito grave';
}
else if (m <= 16.99) {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Baixo peso  grave';
}
else if (m <= 18.49) {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Baixo peso';
}
else if (m <= 24.99) {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Peso normal';
}
else if (m <= 29.99){
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
    ' Sendo classificado como: Sobrepeso';
}
else if (m <= 34.99) {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Obsedidade grau I';
}
else if (m <= 39.99) {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Obsedidade grau II';
}
else {
    document.querySelector('#saida').innerHTML = nome + ' possui índice de massa corporal igual a ' +m.toFixed(2) + 
   ' Sendo classificado como: Obsedidade grau III';
}




