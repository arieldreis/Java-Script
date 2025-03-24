let tempo = null;
let senhaCorreta 
function bomba(){
    if(tempo) return;
    senhaCorreta = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log("Senha correta:", senhaCorreta);
        let cronometro = document.querySelector('.timer');
        let emoji = document.querySelector('.bomb');
        let input = document.getElementById('password');
        let diferenca = parseInt(cronometro.textContent) - 1;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
    tempo = setInterval(function(){
        let senha = Number(input.value);
        if(senha === Number(senhaCorreta)){
            clearInterval(tempo);
            tempo = null; // Resetando a variável para permitir nova execução do cronômetro
            emoji.textContent = "✅"
            resultado.innerHTML = (`<p>ACERTOU! SENHA: ${senhaCorreta}</p>`);
        }else if(diferenca == 0){
            clearInterval(tempo);
            tempo = null; // Resetando a variável para permitir nova execução do cronômetro
            cronometro.textContent = "TEMPO ESGOTADO!";
            emoji.textContent = "💥";
            resultado.innerHTML = "VOCÊ PERDEU O JOGO, REINICIE O SITE PARA JOGAR NOVAMENTE!"
        } else if(senha !== Number(senhaCorreta)){
            resultado.innerHTML = `<p><mark>SENHA INCORRETA❌!</mark> Senha Digitada: ${senha}</p>`;
        }else{
            diferenca--;
            cronometro.textContent = diferenca;
        }
    }, 1000);
    input.value = "";
    input.focus();
    resultado.style.color = "white";
    resultado.style.fontWeight = "bolder";
}