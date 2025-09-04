let soma = 0;

while (true) {
  let entrada = prompt("Qual os numeros que deseja somar?(0 para sair): ");
  let numero = Number(entrada);

  if (numero === 0) {
    break;
  }

  soma += numero;
}

console.log("A soma dos números é:", soma);