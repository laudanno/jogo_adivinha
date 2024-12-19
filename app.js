
let intervalo = parseInt(Math.random() * 100 + 1); // Z dinâmico
let numeroSecreto = gerarNumAleatorio(intervalo); // Gera número secreto de 1 a Z
let tentativas = 1;

// Variáveis para controlar o intervalo
let minIntervalo = 1;
let maxIntervalo = intervalo;

function textosDeclarados(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    textosDeclarados('h1', 'Qual é o Número ?');
    textosDeclarados('h6', `O número está entre ${minIntervalo} e ${maxIntervalo}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (isNaN(chute)) {
        textosDeclarados('p', 'Insira um número válido.');
        return;
    }

    if (chute < minIntervalo || chute > maxIntervalo) {
        textosDeclarados('p', `Escolha um número entre ${minIntervalo} e ${maxIntervalo}.`);
        return;
    }

    if (chute === numeroSecreto) {
        textosDeclarados('h1', 'A C E R T O U');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Foram ${tentativas} ${palavraTentativa}`;
        textosDeclarados('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        textosDeclarados('h6', 'GAME OVER');

    } else {
        if (chute > numeroSecreto) {
            //textosDeclarados('p', `O número é menor que ${chute}`);
            if (chute < maxIntervalo) {
                maxIntervalo = chute - 1; // Atualiza o limite superior do intervalo
            }
        } else {
            //textosDeclarados('p', `O número é maior que ${chute}`);
            if (chute > minIntervalo) {
                minIntervalo = chute + 1; // Atualiza o limite inferior do intervalo
            }
        }
        textosDeclarados('h6', `O número está entre ${minIntervalo} e ${maxIntervalo}`);
    }

    tentativas++;
    limparCampo();
}

function gerarNumAleatorio(max) {
    return parseInt(Math.random() * max + 1); // Gera número entre 1 e max
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    intervalo = parseInt(Math.random() * 100 + 1); // Novo Z dinâmico
    numeroSecreto = gerarNumAleatorio(intervalo); // Novo número secreto
    minIntervalo = 1; // Redefine o limite inferior
    maxIntervalo = intervalo; // Redefine o limite superior
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    mensagemTentativas = '';
    textosDeclarados('p', mensagemTentativas);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
