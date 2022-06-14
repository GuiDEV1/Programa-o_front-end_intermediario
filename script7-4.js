function calc(n1,n2,op){
    if(op== '+'){
        return (n1+n2);
    }
    else if(op =='-'){
        return (n1-n2);
    }
    else if(op == '*'){
        return (n1*n2);
    }
    else if(op== '/') {
        return (n1/n2);
    }
    else if(op == '%') {
        return (n1%n2);
    }
    else {
        return 'operador desconhecido!'
    }

}

var num1=parseFloat(prompt("Digite um número"));
var num2=parseFloat(prompt("Digite outro número"));
document.write("num1: "+num1+", num2: "+num2+" calc: "+calc(num1,num2,"*"))