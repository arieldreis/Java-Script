function tabuada(event){
    event.preventDefault();
    let tabuada = document.getElementById('numero_mensagem');
    let resolucao = document.getElementById('resolucao');
    let lista = document.getElementById('idselect');
    let x = Number(tabuada.value);
    if(tabuada.value.length == 0){
        window.alert('Campo vazio, digite um número para o seu funcionamento.');
    }else{
        let contador = 1;
        lista.innerHTML = "";
        while(contador <= 10){
            let item = document.createElement('option');
            lista.appendChild(item);
            let mult = x * contador
            item.text = `${x} x ${contador} = ${mult}`;
            contador+=1
        }
    }

    resolucao.style.fontFamily = 'Arial';
    resolucao.style.margin = '20px'
    tabuada.value="";
    tabuada.focus();
}     