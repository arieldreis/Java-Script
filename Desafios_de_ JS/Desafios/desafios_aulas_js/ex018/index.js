let lista = [];
function adicionar(){
    let analisador = document.getElementById('idnumber');
    let analisador_num = parseInt(analisador.value);
    let valores = document.getElementById('valores');
    if(isNaN(analisador_num)){
        window.alert("O NÚMERO DIGITADO NÃO É NUMÉRICO!⚠️⚠️🚨🚨");
        return;
    }
    if(lista.includes(analisador_num)){
        window.alert("Esse número é inaválido, pois já está na lista!⚠️⚠️🚨🚨");
        return;
    }else if(analisador_num < 1 || analisador_num > 100){
        window.alert("O número informado está fora do intervalo permitido!⚠️⚠️🚨🚨");
        return;
    }else{
        let total = lista.push(analisador_num);
        valores.innerHTML = '';
        for( let contador = 1 ; contador <= lista.length; contador+=1){
            valores.innerHTML+=`<li>O número ${lista[contador - 1]} foi adicionado</li>\n`;
        }
    }
    analisador.value = "";
    analisador.focus();
    valores.style.marginTop = "20px";
}

function finalizar(){
    let resultado = document.getElementById('resultado');
    let soma = lista.reduce((acumulador , valorAtual) => acumulador + valorAtual, 0)
    let divisao = soma / lista.length
    resultado.innerHTML = `<li>Ao todo temos ${lista.length} números cadastrados.</li><br>` +
    `<li>O menor valor informado é ${Math.max(...lista)}</li><br>` +
    `<li>O menor valor informado é ${Math.min(...lista)}</li><br>` +
    `<li>A soma de todos os valores é igual ${soma}</li><br>` +
    `<li>E por final a média de todos os valores será de ${divisao.toFixed(3)}</li>`
    resultado.style.marginTop = "20px";
}
