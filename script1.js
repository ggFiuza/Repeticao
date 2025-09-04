let x = Number(prompt("Quantas pessoas a na sua familia"));

let s, t = 0;
while(x >= 1){
  s = Number(prompt("Qual o salario da pessoa " + x + "?"));
  t += s;
  x--;
}
console.log("O salario total da familia é de: ", t);
