const nome = window.prompt("QUAL É O SEU NOME:");
if(nome === null || nome === ""){
    window.alert("Você precisa precisa apertar o botão ok!");
    window.location.reload();
} else if(!isNaN(nome)){
    window.alert("Você só pode colocar caracteres.");
    window.location.reload();
}
const ws = new WebSocket('ws://localhost:8080/'); // Essa linha cria um servidor par a ter uma conversa.
ws.onopen = () => {
    console.log("Conectado ao servidor WebSocket!");
};
ws.onmessage = (event) => {
    const recebimento = document.querySelector('.message_received');
    if(recebimento){
        const elemento = document.createElement('div');
        elemento.textContent = event.data;
        recebimento.appendChild(elemento);
    } else {
        console.error("Erro: elemento .message_receveid não encontrado!");
    }
};
ws.onerror = (error) => {
    console.log("Erro na conexão WebSocket:", error);
};
ws.onclose = () => {
    console.log("Conexão WebSocket fechada");
};
function HashZapp(){
    const mensagens = document.getElementById('message_input');
    const envio_mensagens = mensagens.value.trim();
    if(envio_mensagens === ""){
        window.alert("DIGITE O CAMPO DE INPUT⚠️⚠️");
        return;
    }

    // Enviando mensagem pelo WebSocket
    const mensagemFormatada = `${nome}: ${envio_mensagens}`;
    if(ws.readyState === WebSocket.OPEN){
        ws.send(mensagemFormatada);
    } else {
        window.alert("Erro: WebSocket não conectado!");
    }

    mensagens.value = "";
    mensagens.focus();
}