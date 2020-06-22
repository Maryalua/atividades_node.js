// ## Importe a biblioteca ##

//A aplicação deve:  
//- Perguntar qual o número do vôo do usuário  
//- Perguntar em qual fileira o usuário deseja sentar (A, B, C, D ou F)  
//- Devolver um cartão de embarque com as informações de número do vôo e fileira escolhida pelo usuário  

// ## Faça o código ##
let rs = require('readline-sync');

let voo = rs.question('qual o numero do seu voo?');

let fileira = rs.question('qual fileira deseja se sentar: A, B, C, D, ou F?');

if (fileira == 'A' || fileira == 'B' || fileira == 'C' || fileira == 'D' || fileira == 'F'){
    console.log('O número do seu voo é o,' + voo + ',e sua fileira é a letra,' + fileira)
}
