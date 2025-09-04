class Pokemon {
  constructor(nome) {
    this.nome = nome;
    this.hp_inicial = Math.floor(Math.random() * 6) + 5; // HP entre 5 e 10
    this.ataque_inicial = Math.floor(Math.random() * 3) + 1; // Ataque entre 1 e 3
    this.level = 1;
    this.hp = this.hp_inicial;
    this.ataque = this.ataque_inicial;
    this.vitorias = 0;
    this.derrotas = 0;
  }

  batalhar(inimigo) {
    while (this.hp > 0 && inimigo.hp > 0) {
      // O pokemão ataca
      inimigo.hp -= this.ataque;
      if (inimigo.hp <= 0) {
        this.vitorias++;
        // Após vitória, o pokemão sobe um atributo
        if (Math.random() > 0.5) {
          this.hp++;
        } else {
          this.ataque++;
        }
        console.log(`${this.nome} venceu a batalha!`);
        return true;
      }

      // O inimigo ataca
      this.hp -= inimigo.ataque;
      if (this.hp <= 0) {
        this.derrotas++;
        console.log(`${this.nome} perdeu a batalha.`);
        return false;
      }
    }
  }

  mostrarDadosIniciais() {
    console.log(`${this.nome} - Dados Iniciais:`);
    console.log(`HP inicial: ${this.hp_inicial}`);
    console.log(`Ataque inicial: ${this.ataque_inicial}`);
    console.log(`Level: ${this.level}`);
  }

  mostrarDadosAtuais() {
    console.log(`${this.nome} - Dados Atuais:`);
    console.log(`HP: ${this.hp}`);
    console.log(`Ataque: ${this.ataque}`);
    console.log(`Level: ${this.level}`);
    console.log(`Vitórias: ${this.vitorias}`);
    console.log(`Derrotas: ${this.derrotas}`);
  }
}

function menu() {
  const nome = prompt("Digite o nome do seu Pokémon: ");
  const pokemon = new Pokemon(nome);

  while (true) {
    console.log("\nMenu:");
    console.log("1) Batalhar");
    console.log("2) Vitórias vs Derrotas");
    console.log("3) Listar objeto");
    console.log("4) Sair");

    const opcao = prompt("Escolha uma opção:");

    if (opcao === "1") {
      // Criar um inimigo aleatório
      const inimigoNome = `Inimigo${Math.floor(Math.random() * 100) + 1}`;
      const inimigo = new Pokemon(inimigoNome);
      console.log(`\n${inimigoNome} apareceu com HP: ${inimigo.hp} e Ataque: ${inimigo.ataque}`);
      pokemon.batalhar(inimigo);

    } else if (opcao === "2") {
      console.log(`\nVitórias: ${pokemon.vitorias} | Derrotas: ${pokemon.derrotas}`);

    } else if (opcao === "3") {
      console.log("\nDados Iniciais:");
      pokemon.mostrarDadosIniciais();
      console.log("\nDados Atuais:");
      pokemon.mostrarDadosAtuais();

    } else if (opcao === "4") {
      console.log("Saindo do programa...");
      break;

    } else {
      console.log("Opção inválida! Tente novamente.");
    }
  }
}

menu();
