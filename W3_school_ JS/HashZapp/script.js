const nome = window.prompt("QUAL É O SEU NOME:")
function HashZapp(){
    const mensagens = document.getElementById('message_input');
    const envio_mensagens = mensagens.value.trim();
    const recebimento = document.querySelector('.message_received');
    const elemento = document.createElement('div');
    if(envio_mensagens === ""){
        window.alert("DIGITE O CAMPO DE INPUT⚠️⚠️");
        return;
    } else {
        elemento.textContent += `${nome}: ${envio_mensagens}`
    }
    recebimento.appendChild(elemento);
    mensagens.value = "";
    mensagens.focus();
}