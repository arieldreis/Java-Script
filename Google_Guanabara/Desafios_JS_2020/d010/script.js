function bhaskara(){
    let calculo = document.getElementById('calculo');
    let a = parseInt(window.prompt('Qual é o valor de a: '));
    let b = parseInt(window.prompt('Qual é o valor de b: '));
    let c = parseInt(window.prompt('Qual é o valor de c: '));
    let delta = (b)**2-4*(a)*(c)
    calculo.innerHTML = `A equação atual é<strong> ${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong><br>` +
    `O calculo realizado será de <strong>Δ = ${b}<sup>2</sup> -4 . ${a} . ${c}</strong><br>` +
    `O valor calculado será de <mark>Δ = ${delta}</mark><br>` +
    `E sua raiz quadrada é igual ${Math.sqrt(delta.toFixed(2))}`
    calculo.style.lineHeight = '2.5'
}