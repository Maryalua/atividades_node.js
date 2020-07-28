// ## Importe a biblioteca ##

//Criar uma aplicação de prevenção de COVID

//A aplicação deve:
//- Perguntar se o usuário está usando máscara quando precisa sair de casa (Sim ou Não)  
//- Perguntar se o usuário está lavando as mãos frequentemente  
//- Se o usuário responder sim para as perguntas anteriores, mostrar um elogio para o usuário  
//- Se não, dar bronca no usuário  

// ## Faça o código ##
let rs = require('readline-sync');
let mascara = rs.question('voce se lembrou de colocar a mascara para sair de casa? responda com: sim ou não');
if (mascara == 'sim') {
    console.log('Muito bom!');
} else {
    console.log('é melhor se previnir!');
}
let mao = rs.question('voce está lavando as maos com frequencia? responde com sim ou não');
if (mao == 'sim') {
    console.log('parabéns, você está se protegendo');
} else {
    console.log('agindo assim você vai pegar o coronavirus');
}

//código com operador ternário

let resposta = mascara ? sim : não;