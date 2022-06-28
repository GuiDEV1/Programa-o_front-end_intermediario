const saida = document.querySelector('#saida');

var carro = {
    nome:'fusca',
    cor: 'Laranja',
    ano: 1975
};

saida.innerHTML = `Nome = ${carro.nome}<br>`;
saida.innerHTML += `Cor = ${carro.cor}<br>`;
saida.innerHTML += `Ano = ${carro.ano}<br>`;