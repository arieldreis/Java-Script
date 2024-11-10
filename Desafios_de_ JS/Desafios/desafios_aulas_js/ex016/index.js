function calcular(event){
    if (event) event.preventDefault();
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('end');
    let passo = document.getElementById('passo');
    let resultado = document.getElementById('contagem');
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Valores Inválidos, digite novamente.');
    }else if(Number(passo.value) <= 0 || Number(fim.value) < 0){
        window.alert('Se você digitou o número 0 no campo de passo, por favor digite novamente\nOu se você digitou um número negativo no campo fim digite novamente.');
    }else{
        resultado.innerHTML = 'CONTANDO: '
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(i < f){
            //Contagem crescente
            let c = i
            while(c <= f){
                c += p
                resultado.innerHTML += `${c}\u{1F449}`
            }
        }else{
            //Contagem decrescente
            for(let c = i ;c >= f ;c-=p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.style.fontFamily = 'Arial'
        resultado.style.gap = '20'
        resultado.innerHTML+= `\u{1F3C1}`
    }
}
