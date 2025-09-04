let pokemon = {
  nome: prompt("Digite o nome do seu Pokemão:"),
  hpInicial: 10,
  hp: 10,
  ataqueInicial: Math.floor(Math.random() * 3) + 1, 
  ataque: 0,
  level: 1,
  vitorias: 0,
  derrotas: 0
};
pokemon.ataque = pokemon.ataqueInicial; 

let opcao;
do {
  opcao = prompt(
    "Escolha uma opção:\n" +
    "1) Batalhar\n" +
    "2) Vitórias vs Derrotas\n" +
    "3) Listar Pokémon\n" +
    "4) Sair"
  );

  if (opcao === "1") {

    let inimigo = {
      hp: Math.floor(Math.random() * 6) + 5,  
      ataque: Math.floor(Math.random() * 5)   
    };

    let turno = 0;
    let meuHP = pokemon.hp;
    let inimigoHP = inimigo.hp;

    console.log("\n Uma batalha começou!");
    console.log("Inimigo -> HP: " + inimigo.hp + ", Ataque: " + inimigo.ataque);

    while (meuHP > 0 && inimigoHP > 0) {
      if (turno % 2 === 0) {
        inimigoHP -= pokemon.ataque;
        console.log(pokemon.nome + " atacou! Inimigo HP: " + Math.max(inimigoHP, 0));
      } else {
        meuHP -= inimigo.ataque;
        console.log("Inimigo atacou! " + pokemon.nome + " HP: " + Math.max(meuHP, 0));
      }
      turno++;
    }

    if (meuHP > 0) {
      console.log("Você venceu a batalha!");
      pokemon.vitorias++;
      pokemon.level++;

      let escolha = prompt("Escolha um atributo para aumentar permanentemente:\n1) HP\n2) Ataque");
      if (escolha === "1") {
        pokemon.hp++;
        pokemon.hpInicial++;
        console.log(pokemon.nome + " ganhou +1 de HP!");
      } else if (escolha === "2") {
        pokemon.ataque++;
        pokemon.ataqueInicial++;
        console.log(pokemon.nome + " ganhou +1 de Ataque!");
      }
    } else {
      console.log("Você perdeu a batalha...");
      pokemon.derrotas++;
    }

    pokemon.hp = pokemon.hpInicial;

  } else if (opcao === "2") {
    console.log("Vitórias: " + pokemon.vitorias + "  Derrotas: " + pokemon.derrotas);
  } else if (opcao === "3") {
    console.log("\nStatus do Pokemão:");
    console.log("Nome: " + pokemon.nome);
    console.log("Level: " + pokemon.level);
    console.log("HP Atual: " + pokemon.hp);
    console.log("HP Inicial: " + pokemon.hpInicial);
    console.log("Ataque Atual: " + pokemon.ataque);
    console.log("Ataque Inicial: " + pokemon.ataqueInicial);
  }

} while (opcao !== "4");

console.log("Programa encerrado");
