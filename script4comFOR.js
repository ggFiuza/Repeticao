let maiorFor = null;
let menorFor = null;
for (let i = 0; i < 10; i++) {
  let valor = Number(prompt(`[FOR] Digite o valor ${i + 1}: `));
  if (i === 0) {
    maiorFor = menorFor = valor;
  } else {
    if (valor > maiorFor) maiorFor = valor;
    if (valor < menorFor) menorFor = valor;
  }
}
console.log(`[FOR] Maior valor: ${maiorFor}, Menor valor: ${menorFor}`);