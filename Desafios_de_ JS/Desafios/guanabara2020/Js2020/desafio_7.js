function conversor(){
    let demo = document.getElementById('demo');
    let dolar = parseFloat(window.prompt('Antes de mais nada. Qual é o valor da cotação agora?'));
    let reais = parseFloat(window.prompt('Quantos R$ tem na sua carteira?'));
    let conversao_reais = reais / dolar
    demo.innerHTML = `<h1>Analisando os valores...</h1>` +
    `<p>Você tem R$${reais} na sua carteira</p>` +
    `<p>E se converter os valores você tem US$${conversao_reais.toFixed(2)} em sua carteira.</p>`
}