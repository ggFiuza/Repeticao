let matriculas = [];
let notas = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
    let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
    matriculas.push(matricula);
    notas.push(nota);
    soma += nota;
}

let media = soma / 5;

console.log("Matrículas dos alunos com nota acima da média:");
for (let i = 0; i < 5; i++) {
    if (notas[i] > media) {
        console.log(matriculas[i]);
    }
}
