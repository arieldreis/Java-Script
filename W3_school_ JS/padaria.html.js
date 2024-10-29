// Função para calcular o total das vendas de pães e bolos
function calcularVendas(quantidadePaes, quantidadeBolos) {
    const precoPao = 0.35;
    const precoBolo = 5.00;
    const totalVendas = (quantidadePaes * precoPao) + (quantidadeBolos * precoBolo);
    return totalVendas;
}

// Função para calcular o aumento salarial com base no tempo de serviço
function calcularAumentoSalarial(salarioAtual, tempoServico) {
    let aumentoPercentual = tempoServico > 10 ? 0.25 : 0.10;
    let novoSalario = salarioAtual + (salarioAtual * aumentoPercentual);
    return novoSalario;
}

// Exemplos de uso:

// Dados das vendas de pães e bolos
const quantidadePaes = 100; // Exemplo: 100 pães vendidos
const quantidadeBolos = 20; // Exemplo: 20 bolos vendidos
const totalVendas = calcularVendas(quantidadePaes, quantidadeBolos);
console.log(`Total de vendas: R$${totalVendas.toFixed(2)}`);

// Dados do funcionário para cálculo de aumento salarial
const salarioAtual = 2000.00; // Exemplo: salário atual de R$ 2000,00
const tempoServico = 12; // Exemplo: tempo de serviço de 12 anos
const novoSalario = calcularAumentoSalarial(salarioAtual, tempoServico);
console.log(`Novo salário após aumento: R$${novoSalario.toFixed(2)}`);
