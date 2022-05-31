const id_dv1=document.querySelector('#dv1');
const class_teste=document.querySelector('.teste');
const id_nome=document.querySelector('#nome');
const tag_h2=document.querySelector('h2');

tag_h2.innerHTML = 'Mudou!!';

var notas=[10,9,8];
var outras_notas=[4,3,2,1];
///document.write(notas+"<hr>");
id_dv1.innerHTML=notas + '<hr>';
var novas_notas=notas.concat(7,6,5);
///document.write(novas_notas+"<hr>");
class_teste.innerHTML = novas_notas + "<hr>"
var junta_tudo=novas_notas.concat(outras_notas);
class_teste.style.color='red'
//document.write(junta_tudo+"<hr>");
id_nome.value = junta_tudo ;