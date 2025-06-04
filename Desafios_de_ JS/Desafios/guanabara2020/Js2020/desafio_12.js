function verificar(){
    let demo = document.getElementById('demo');
    let anterior = parseFloat(window.prompt('Qual era o preço anterior do produto?'));
    let depois = parseFloat(window.prompt('Qual é o preço atual do produto agora?'));
    if(anterior < depois){
        let aumento_preco = depois - anterior;
        let porcentagem_aumento = (aumento_preco / anterior) * 100;
        demo.innerHTML = `<h2>Analisando os valores informados</h2><br>`+
        `<p>O produto custava R$${anterior} e agora custa R$${depois}</p><br>` +
        `<p>Hoje o produto está mais caro.</p><br>` +
        `<p>O produto subiu R$${aumento_preco} em relação ao preço anterior.</p><br>` +
        `<p>Uma variação de ${porcentagem_aumento.toFixed(2)}% para cima.</p>`
    }else{
        let desconto = anterior - depois;
        let porcentagem_desconto = (desconto / anterior) * 100;
        demo.innerHTML = `<h2>Analisando os valores informados</h2><br>`+
        `<p>O produto custava R$${anterior} e agora custa R$${depois}</p>.<br>` +
        `<p>Hoje o produto está mais barato.</p><br>` +
        `<p>O produto teve um desconto de R$${desconto} em relação ao produto anterior</p><br>` +
        `Uma variação de ${porcentagem_desconto.toFixed(2)}% para baixo`
    }
    demo.style.lineHeight = '1.5'
}