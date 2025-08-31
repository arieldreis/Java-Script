function calculo(){
    let produto = String(window.prompt('Que produto você está comprando: '));
    let valor_produto = parseFloat(window.prompt(`Quanto custa o ${produto} que você está comprando`));
    let valor = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`));
    if(isNaN(valor_produto) || isNaN(valor)){
         window.alert('O valor inserido não é numérico, digite novamente: ');
         window.location.reload();
    }
    let troco = valor - valor_produto
    window.alert(`Você comprou um produto que custa R$${valor_produto.toFixed(2)}.\nDeu R$${valor.toFixed(2)} em dinheiro e vai receber R$${troco.toFixed(2)} de troco\nVolte Sempre!`)
    
 }