const nome = window.prompt("QUAL É O SEU NOME:");
if(nome === null || nome === ""){
    window.alert("Você precisa precisa apertar o botão ok!");
    window.location.reload();
} else if(!isNaN(nome)){
    window.alert("Você só pode colocar caracteres.");
    window.location.reload();
}
const recebimento = document.querySelector('.message_received');
const mensagens = document.getElementById('message_input');

// Connection opened
const ws = new WebSocket('wss://12feb33f871e.ngrok-free.app');
ws.onopen = () => {
    console.log("Connect to server.");
}

// listen for messages
ws.onmessage = (event) => {
    const elemento = document.createElement('div');
    elemento.className = 'elemento';
    elemento.innerHTML = event.data;
    recebimento.appendChild(elemento);
    recebimento.scrollTop = recebimento.scrollHeight;
}
// Handle erros
ws.onerror = (error) => {
    console.log("Erro: " , error);
}
ws.onclose = () => {
    console.log("Disconnected from server");
}

function HashZapp(){
    const envio_mensagens = mensagens.value.trim();
    if(envio_mensagens === ""){
        window.alert("DIGITE O CAMPO DE INPUT⚠️⚠️");
        return;
    }
    if(envio_mensagens){
        const msg = `<strong>${nome}:</strong> ${envio_mensagens}`;
        ws.send(msg);
        mensagens.value = "";
        mensagens.focus();
    }
}
// Send message on Enter Key
mensagens.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        HashZapp();
    }
});