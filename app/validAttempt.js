function verificaSeOChutePossuiUmValorValido() {
    const numero = parseInt(chute);



    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Isso não é um número</div>';
        return;
    }

    if (numeroForMaiorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Por favor, digite um número entre ${menorValor} e ${maiorValor}</div>`;
    } 

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>Nosso número secreto é menor <i class="fa-solid fa-arrow-down"></i></div></div>`;
    } else {
        elementoChute.innerHTML += `<div>Nosso número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

