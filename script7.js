let oper, n1, n2, soma, subtr, multi, divi, i = 0, s=0, sub=0, mul=0, div=0

for (i=0; ;i++){
oper = prompt("Qual Operação você quer realizar? \n 1.Soma \n 2.Subtração\n 3.Multiplicação\n 4.Divisão\n 5.Sair")

if (oper == 5){
    break;
}
if (oper != 5 && oper != 4 && oper != 3 && oper != 2 && oper != 1){
   alert("DEU TUDO ERRADO REINICIA O PROGRAMA")
   break
}

n1 = prompt("Digite o primeiro número")

n1 = Number(n1)

n2 = prompt("Digite o segundo número")

n2 = Number(n2)



if (oper == 1){
    soma = n1 + n2
    alert("O resultado da operação é: " +soma)
    s++
}

if (oper == 2){
    subtr = n1 - n2
    alert("O resultado da operação é: " +subtr)
    sub++
}

if (oper == 3){
    multi = n1 * n2
    alert("O resultado da operação é: " +multi)
    mul++
}

if (oper == 4 && n2 != 0){
    divi = n1 / n2
    alert("O resultado da operação é: " +divi)
div++
}
    
else if (n2 == 0){
        alert("A divisão por 0 não é possível.")
    }

    
}


console.log("O número de Operações de soma realizadas foi de: ",+s)
console.log("O número de Operações de subtração realizadas foi de: ",+sub)
console.log("O número de Operações de multiplicação realizadas foi de: ",+mul)
console.log("O número de Operações de divisão realizadas foi de: ",+div)