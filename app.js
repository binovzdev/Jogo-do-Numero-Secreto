listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto; 
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirtextoNaTela('h1', 'jogo do numero secreto');
    exibirtextoNaTela('p', 'escolha um numero entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){
        exibirtextoNaTela('h1' , 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `parabens, voce acertou com ${tentativas} ${palavraTentativa}`;
        exibirtextoNaTela('p' , mensagemTentativas )
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else {
        if(chute > numeroSecreto){
            exibirtextoNaTela('p' , 'o numero é menor' )
        }else {
            exibirtextoNaTela('p' , 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}
