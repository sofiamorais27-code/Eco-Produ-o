// Valores iniciais das barras (escala de 0 a 100)
let producao = 50;
let ambiente = 50;

function tomarDecisao(tipo) {
    let mensagem = "";

    if (tipo === 'agrofloresta') {
        producao += 10;
        ambiente += 20;
        mensagem = "Ótima escolha! A agrofloresta aumentou a biodiversidade e garantiu boa produção a longo prazo.";
    } 
    else if (tipo === 'Agrotóxicos') {
        producao += 25;
        ambiente -= 30;
        mensagem = "A produção disparou agora, mas a contaminação do solo e da água prejudicou severamente o ecossistema.";
    } 
    else if (tipo === 'energia') {
        producao -= 5; // Custo inicial de transição
        ambiente += 25;
        mensagem = "A transição energética reduziu a pegada de carbono drasticamente. Pequena queda temporária no ritmo de produção.";
    } 
    else if (tipo === 'maquinas') {
        producao += 15;
        ambiente -= 10;
        mensagem = "Mais produtos sendo feitos! Porém, o consumo de combustíveis fósseis das máquinas antigas aumentou a poluição.";
    }

    // Limitar os valores entre 0 e 100
    producao = Math.max(0, Math.min(100, producao));
    ambiente = Math.max(0, Math.min(100, ambiente));

    // Atualizar os componentes visuais na tela
    atualizarInterface(mensagem);
}

function atualizarInterface(mensagem) {
    // Atualiza os textos de porcentagem
    document.getElementById('val-producao').innerText = producao + "%";
    document.getElementById('val-ambiente').innerText = ambiente + "%";

    // Atualiza a largura das barras de progresso (CSS)
    document.getElementById('barra-producao').style.width = producao + "%";
    document.getElementById('barra-ambiente').style.width = ambiente + "%";

    // Atualiza o texto explicativo
    document.getElementById('feedback').innerText = mensagem;

    // Alerta de cenários extremos
    if (ambiente <= 20) {
        document.getElementById('feedback').innerText += " ⚠️ ALERTA: O meio ambiente está colapsando! Reveja suas escolhas.";
    }
    if (producao <= 20) {
        document.getElementById('feedback').innerText += " ⚠️ ALERTA: Crise de abastecimento! A produção está baixa demais.";
    }
}