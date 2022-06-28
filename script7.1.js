function soma(...num) {
    var resultado = 0;
    for(var i = 0; i < num.length; i++) {
      resultado += num[i];
    }
    return resultado;
}
document.write(soma(20,17,100,2,3,4,5,76,8,8,4,3,5,6,8,5,0,180,100))