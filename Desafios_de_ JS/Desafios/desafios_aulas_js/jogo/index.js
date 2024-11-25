function adivinhar(){
    const jogador = document.getElementById('jogador');
    const demo = document.getElementById('demo');
    const computador = Math.floor(Math.random()*100) + 1;
    const numerodigitado = parseInt(jogador.value);
    if(numerodigitado.length === 0 || !NaN(numerodigitado)){
        window.alert('Digite uma valor válido no campo!')
        return;
    }
    if(numerodigitado === computador){
        demo.innerHTML = `<p>Você digitou o número ${numerodigitado} e a computador jogou o número ${computador}</p><br>` +
        `Você ganhou meus parabéns!🎉🎉🏆🏆`
    }else if(numerodigitado < 0 || numerodigitado > 100){
        window.alert('Dados Inválidos!');
    }else{
        demo.innerHTML =`<p>Você digitou o número ${numerodigitado} e a computador jogou o número ${computador}</p><br>` +
        `Você perdeu, tente jogar outra vez te desejo uma boa sorte!😔😔😔😔`
    }
    jogador.value = "";
}