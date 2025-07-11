
const nome = window.prompt("QUAL É O SEU NOME:");
if(nome === null || nome === ""){
    window.alert("Você precisa precisa apertar o botão ok!");
    window.location.reload();
} else if(!isNaN(nome)){
    window.alert("Você só pode colocar caracteres.");
    window.location.reload();
}

function HashZapp(){
    const recebimento = document.querySelector('.message_received');
    const mensagens = document.getElementById('message_input');
    const envio_mensagens = mensagens.value.trim();
    const elemento = document.createElement('div');
    elemento.textContent = `${nome}: ${envio_mensagens}`;

    if(envio_mensagens === ""){
        window.alert("DIGITE O CAMPO DE INPUT⚠️⚠️");
        return;
    }

    mensagens.value = "";
    mensagens.focus();
    recebimento.appendChild(elemento);
}