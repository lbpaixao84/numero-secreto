alert('Boas Vindas ao jogo do Número Secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
            } else {
        if (chute > numeroSecreto) {
           alert(`O número secreto é menor que ${chute}`);
        } else {
           alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavratentativa = tentativas > 1 ? 'tentativas':'tentativa';
    alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}!`);

//if (tentativas >1)
 //   alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);//
//} else {
//    alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
//}

