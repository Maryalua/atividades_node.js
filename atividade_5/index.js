// ## Importe a biblioteca ##

//A aplicação deve:  
//- Pedir para o usuário digitar qualquer coisa  
//- Contar quantos caracteres tem no que o usuário digitou  
// Informar o número de caracteres ao usuário (Ex.: "Você digitou 32 caracteres!")  

// ## Faça o código ##


let rs = require('readline-sync');
let digitos = rs.question('saiba quantos caracteres voce digitou: escreva o que quiser!');

console.log('seu texto possui' + digitos.length + 'caracteres');
