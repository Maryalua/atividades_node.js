// ## Importe a biblioteca ##

//A aplicação deve:  
//- Perguntar ao usuário o seu nome  
//- Pedir para o usuário digitar qualquer coisa  
//- Contar quantos caracteres tem no que o usuário digitou  
//- Informar o número de caracteres ao usuário (Ex.: "Você digitou 32 caracteres!")  
//- Mostrar para o usuário qual foi a pessoa que digitou mais caracteres  

// ## Faça o código ##
let rs = require('readline-sync');

let nome1 = rs.question('qual o é o seu nome?');

let texto1 = rs.question('digite qualquer texto para contar os caracteres que ele possui');
console.log('você digitou' + texto1.length + 'caracteres!');

let nome2 = rs.question('qual o é o seu nome?');

let texto2 = rs.question('digite qualquer texto para contar os caracteres que ele possui');
console.log('você digitou' + texto2.length + 'caracteres!');

if (texto1>texto2){
    console.log('O'+nome1+'digitou o maior número de caracteres');
}else if(texto1<texto2){
    console.log('O'+nome2+'digitou o maior número de caracteres');
}


