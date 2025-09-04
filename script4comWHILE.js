let maiorWhile = null;
let menorWhile = null;
let countWhile = 0;
while (countWhile < 10) {
  let valor = Number(prompt(`[WHILE] Digite o valor ${countWhile + 1}: `));
  if (countWhile === 0) {
    maiorWhile = menorWhile = valor;
  } else {
    if (valor > maiorWhile) maiorWhile = valor;
    if (valor < menorWhile) menorWhile = valor;
  }
  countWhile++;
}
console.log(`[WHILE] Maior valor: ${maiorWhile}, Menor valor: ${menorWhile}`);