let somaIdades = 0;
let quantidade = 0;

while (true) {
  let entrada = prompt("Digite a idade (ou um valor negativo para sair): ");
  let idade = Number(entrada);

  if (idade < 0) {
    break
  }

  somaIdades += idade;
  quantidade++;
}

if (quantidade > 0) {
  let media = somaIdades / quantidade;
  console.log("A idade média é:", media);
} else {
  console.log("Nenhuma idade válida foi inserida.");
}