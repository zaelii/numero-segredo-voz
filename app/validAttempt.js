function verificaSeOChutePossuiUmValorValido() {
    const numero = parseInt(chute);



    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
                document.body.style.backgroundImage = "url(./app/game-over.jpg)";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (numeroForMaiorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Por favor, digite um número entre ${menorValor} e ${maiorValor}</div>`;
    } 

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
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

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})