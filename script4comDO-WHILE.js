let maiorDo = null;
let menorDo = null;
let countDo = 0;
do {
  let valor = Number(prompt(`[DO...WHILE] Digite o valor ${countDo + 1}: `));
  if (countDo === 0) {
    maiorDo = menorDo = valor;
  } else {
    if (valor > maiorDo) maiorDo = valor;
    if (valor < menorDo) menorDo = valor;
  }
  countDo++;
} while (countDo < 10);
console.log("`[DO...WHILE] Maior valor:")