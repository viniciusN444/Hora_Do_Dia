function Carregar(){
    const saudacao = window.document.getElementById("saudacao");
    const mensagem = window.document.getElementById("msg");
    const img = window.document.getElementById("imagem");
    const data = new Date();
    const horaAtual = data.getHours();
    const minutosAtual = data.getMinutes();

    // Função para formatar a hora e os minutos no formato "HH:MM"
    function formatarTempo(hora, minutos) {
        const horaFormatada = hora < 10 ? `0${hora}` : `${hora}`;
        const minutosFormatados = minutos < 10 ? `0${minutos}` : `${minutos}`;
        return `${horaFormatada}:${minutosFormatados}`;
    }

    if(horaAtual >= 0 && horaAtual< 6){
        // Madrugada: 00:00 às 5:59
        saudacao.innerHTML = "Oi, boa madrugada!";
        mensagem.innerHTML = `Agora são ${formatarTempo(horaAtual, minutosAtual)} da madrugada!`;
        img.src = 'img/madrugada.png';
    }
    else if(horaAtual >= 6 && horaAtual < 12){
        // Manhã: 6:00 às 11:59
        saudacao.innerHTML = "Oi, bom diaa!";
        mensagem.innerHTML = `Agora são ${formatarTempo(horaAtual, minutosAtual)} da manhã!`;
        img.src = 'img/img_manha.png';
    }
    else if(horaAtual >= 12 && horaAtual < 19){
        // Tarde: 12:00 às 18:59
        saudacao.innerHTML = "Oi, boa tardee!";
        mensagem.innerHTML = `Agora são ${formatarTempo(horaAtual, minutosAtual)} da tarde!`;
        img.src = 'img/img_tarde.png'
    }
    else{
        // Noite: 19:00 às 00:00
        saudacao.innerHTML = "Oi, boa noitee!";
        mensagem.innerHTML = `Agora são ${formatarTempo(horaAtual, minutosAtual)} da noite!`;
        img.src = 'img/img_noite.png'
    }
}