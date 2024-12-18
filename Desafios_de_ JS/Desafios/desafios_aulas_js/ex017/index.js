function tabuada(event){
    event.preventDefault();
    let tabuada = document.getElementById('numero_mensagem');
    let resolucao = document.getElementById('resolucao');
    let select = document.getElementById('select');
    if(tabuada.value.length == 0){
        window.alert('Campo vazio, digite um número para o seu funcionamento.');
    }else if(isNaN(tabuada.value)){
        window.alert('O número digitado não é numérico!');
    }else{
        let x = Number(tabuada.value);
        let contador = 1;
        resolucao.innerHTML = '';
        while(contador <= 10){
            //let item = document.createElement('option')
            let mult = x * contador
            resolucao.innerHTML += `${x} x ${contador} = ${mult}<br>`;
            contador+=1
        }
    }

    resolucao.style.fontFamily = 'Arial';
    resolucao.style.margin = '20px'
    tabuada.value="";
}     