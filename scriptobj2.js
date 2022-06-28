const saida = document.querySelector('#saida');

var carro = {
    nome:'fusca',
    cor: 'Laranja',
    ano: 1975,
    marca: 'VW',
    dados: function() {
        return this.marca+", "+this.nome + ', cor ' + this.cor + ', ano' + this.ano;

    }
   
};

saida.innerHTML = `Nome = ${carro.nome}<br>`;
saida.innerHTML += `Cor = ${carro.cor}<br>`;
saida.innerHTML += `Ano = ${carro.ano}<br>`;
saida.innerHTML += carro.dados();