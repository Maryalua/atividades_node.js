// ## Importe a biblioteca ##

//A aplicação deve:  
//- Perguntar para o usuário o tamanho dos lados dos quadrado  
//- Calcular sua área  
//- Informar a área calculada ao usuário  


// ## Faça o código ##
let rs = require('readline-sync');

let lado = rs.question('qual a medida de um dos lados do seu quadrado em metros?');
let area = lado * lado;

if (area) {
    console.log('a area do seu quadrado é' + lado * lado + 'm²');
}