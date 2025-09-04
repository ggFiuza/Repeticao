let i 
while(true){
    let f = Number(prompt("Quantos graus a pessoa está(0 para sair): "));

if(f < 37.5){
    console.log("A pessoa está com febre.");
    f++
}else if(f == 0){
    break;
}

}
console.log("O numero de pessoas com febre e =", f);
