// ## Importe a biblioteca ##

//A aplicação deve:  
//- Perguntar ao usuário sua data de nascimento  
//- Informar ao usuário qual o seu signo com base na sua data de nascimento  
//Áries: de 21 março a 20 abril
//Touro: de 21 abril a 20 maio
//Gêmeos: de 21 maio a 20 junho
//Câncer: de 21 junho a 22 julho
//Leão: de 23 julho a 22 agosto
//Virgem: de 23 agosto a 22 setembro
//Libra: de 23 setembro a 22 outubro
//Escorpião: de 23 outubro a 21 novembro
//Sagitário: de 22 novembro a 21 dezembro
//Capricórnio: de 22 dezembro a 20 janeiro
//Aquário: de 21 janeiro a 18 fevereiro
//Peixes: de 19 fevereiro a 20 março

// ## Faça o código ##

let rs = require('readline-sync');
let mes = rs.questionInt('Em qual mês você nasceu?');
let dia = rs.questionInt('Em qual dia você nasceu?');
let signo;
switch (mes) {
    case 1: signo = dia <= 19 ? 'Capricórnio' : 'Aquario'; break;
    case 2: signo = dia <= 18 ? 'Aquario' : 'Peixes'; break;
    case 3: signo = dia <= 20 ? 'Peixes' : 'Aries'; break;
    case 4: signo = dia <= 19 ? 'Aries' : 'Touro'; break;
    case 5: signo = dia <= 20 ? 'Touro' : 'Gemeos'; break;
    case 6: signo = dia <= 21 ? 'Gemeos' : 'Cancer'; break;
    case 7: signo = dia <= 22 ? 'Cancer' : 'Leao'; break;
    case 8: signo = dia <= 22 ? 'Leao' : 'Virgem'; break;
    case 9: signo = dia <= 20 ? 'Virgem' : 'Libra'; break;
    case 10: signo = dia <= 22 ? 'Libra' : 'Escorpiao'; break;
    case 11: signo = dia <= 21 ? 'Escorpiao' : 'Sagitario'; break;
    case 12: signo = dia <= 21 ? 'Sagitario' : 'Capricornio'; break;
    default: signo = 'Mes invalido'; break;
}
console.log(signo)