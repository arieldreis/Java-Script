function tabuada(evente){
    evente.preventeDefault();
    let tabuada = parseInt(document.getElementById('numero_mensagem').value);
    let resolucao = document.getElementById('resolucao');
    let contador = 1
    let resultado = ""
    do{
        mult = contador * tabuada
        resultado+= `${tabuada} x ${contador} = ${mult}<br>`
        contador+=1
    }while(contador <= 10)
    resolucao.style.fontFamily = "Arial";
    resolucao.innerHTML = resultado;
 }