function converter_medidas(){
    let solicitacao = parseFloat(window.prompt('Digite uma distância em metros: '));
    let mudanca = document.getElementById('mudanca');
    const kilometro = solicitacao / 1000
    const hectometro = solicitacao / 100
    const decametro = solicitacao / 10
    const decimetro = solicitacao * 10
    const centimetro = solicitacao * 100
    const milimetro = solicitacao * 1000
    mudanca.innerHTML = `<h2>A distância de ${solicitacao} metros, corresponde a...</h2><br>` +
    `<p>${kilometro} quilômetros (Km)</p>` +
    `<p>${hectometro} hectômetro (Hm)</p>` +
    `<p>${decametro} decâmetros (Dam)</p>` +
    `<p>${decimetro} decímetros (Dm)</p>` +
    `<p>${centimetro} centímetro (Cm)</p>` +
    `<p>${milimetro} milímetro (mm)</p>`
}