var uf =['SP', 'RJ', 'MG','ES','PR'];
var txt='Hoje tem atividade!';
var class_teste=document.querySelectorAll('.teste');

document.querySelector("#nome").innerHTML= uf[1];
document.querySelector('h2').innerHTML+='- '+uf.length;
//document.querySelector('.teste').innerHTML= txt;
//class_teste[3].innerHTML=txt;
for(var i=0;i<class_teste.length;i++) {
    class_teste[i].innerHTML=txt;
}

var imagem=["<img src='img/neve.jpg'>", "<img src='img/floresta.jpg'>"];

for(var i=0;i>=imagem.length;i++){
    document.querySelector('.img').innerHTML+= imagem[1];
  
}




// document.querySelector(".img").innerHTML="<img src='img/neve.jpg'>";