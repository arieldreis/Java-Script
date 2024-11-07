function reajuste(){
    let name_employee = String(window.prompt('Qual é o nome do funcionário?'))
    let salario = parseFloat(window.prompt(`Qual é o salário de ${name_employee}?`))
    let reajuste = parseFloat(window.prompt(`O salário de ${name_employee} vai ser ajustado em qual porcentagem?`))
    let quantidade_aumento = salario * (reajuste / 100)
    let salario_bruto = salario + quantidade_aumento
    let mudanca = document.getElementById('mudanca');
    mudanca.innerHTML = `<h2>${name_employee} recebeu um aumento salarial!</h2>` +
    `O salário era de R$${salario}.<br>` +
    `Com o aumento de ${reajuste}%, o salário vai aumentar R$${quantidade_aumento} no proxímo mês<br>` +
    `E a partir daí, ${name_employee} vai passar a ganhar R$${salario_bruto}.<br>`
    mudanca.style.lineHeight = '2.5'
}