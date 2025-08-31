function desconto(){
    let local = document.getElementById('local');
    let nome = String(window.prompt('Qual é o nome do produto que você está comprando? '))
    let preco = parseFloat(window.prompt(`Qual é o preço do ${nome} que você está comprando? `))
    let desconto = (preco*0.1) 
    let preco_des = preco -(preco*0.1) 
    local.innerHTML = `<h2>Calculando desconto de 10% no ${nome}</h2>` +
    `O preço original era de R$${preco.toFixed(2)}` +
    ` Você acaba de ganhar R$${desconto.toFixed(2)} de desconto` +
    ` No final o seu produto ficará R$${preco_des.toFixed(2)} no produto ${nome}`
}