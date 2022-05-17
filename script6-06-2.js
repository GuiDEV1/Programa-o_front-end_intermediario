/*
criar um lopping de: 9193 até: 9210
a saida mostrasse os emojins dos valores da faixa acima

*/
//desafio1
var i,j,signo;

for(i=9193;i<9211;i++) {
    document.querySelector('#dv1').innerHTML+='&#'+i+'<br>';
}


//desafio2
signo = ['Áries','touro','Gêmeos','câncer','leão','virgem','libra','escorpião','sagitario','capricprnio','aquario','peixes']

for(j=0;j<signo.length;j++){
    document.querySelector('.teste').innerHTML+='&#'+(9800+j)+"-"+signo[j]+'<br>'
}

