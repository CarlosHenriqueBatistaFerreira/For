for(let contador = 1 ; contador < 6 ; contador++ ){
  console.log(contador);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

//FAZER UM PROGRAMA QUE LÊ UM VALOR INTEIRO N E DEPOIS N NÚMEROS INTEIRO. AO FINAL, MOSTRA A SOMA DOS N NÚMEROS LIDOS.

const prompt = require('prompt-sync');
const entrada = prompt();

var quantosNumerosSeraoSomados = entrada('Digite aqui quantos números você quer somar: ');
let número = 0;
let soma = 0;

for (let i = 0; i < quantosNumerosSeraoSomados; i++) {
  número = entrada('Digite o número a ser somado: ');
  soma += parseInt(número);
}

console.log(soma);