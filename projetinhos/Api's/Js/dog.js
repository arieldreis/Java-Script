function cachorro(){
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://dog.ceo/api/breeds/image/random");
    ajax.send();
    ajax.onload = function(){
        const img = document.getElementById('dog-image');
        const mensagem_erro = document.getElementById('mensagem_erro');
        let response = JSON.parse(this.responseText);
        let doguinho = response.message;
        try{
            img.src = doguinho; // O atributo src já atualiza a img direto.
        }catch(error){
            mensagem_erro.innerHTML = "<p>ERRO AO PROCESSAR A REQUISIÇÃO. TENTE NOVAMENTE MAIS TARDE.</p>"
        }
        img.style.display = "block";
    }
}