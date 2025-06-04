
        /*
            JSON significa JavaScript Object Notation que traduzido para o português fica algo com notação
            de objeto em JavaScript.

            Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto 
            e o contrário também , um texto em objeto.

            Ele é usado principalmente para transmitir dados entre sistemas de uma forma mais simples, já 
            que o formato de texto é lido por praticamente toda linguagem de programação.

            Para trabalhar com JSON em Java-Script usamos dois metódos:

            JSON.parse() -> Converter texto no padrão JSON em objetos
            JSON.stringify() -> Converter objetos em texto padrão JSON.
        */
function buscarCep(){
    event.preventDefault();
    let input = document.getElementById('cep');
    let validacaoCep = input.value.replace(/\D/g, "");
    let texto = document.getElementById('texto');
    const ajax = new XMLHttpRequest();
    ajax.open("GET", `https://viacep.com.br/ws/${validacaoCep}/json/`);
    ajax.send();
    ajax.onload = function(){
        try{
            let response = JSON.parse(this.responseText)
            if(validacaoCep.length != 8){
                texto.innerHTML = "<p>CEP INVALIDO, TENTE OUTRO.</p>";
                return;
            }else{
                let logradouro = response.logradouro ? response.logradouro: "Não Informado";
                let cidade = response.localidade;
                let estado = response.uf;
                texto.innerHTML = `<p>Logradouro: ${logradouro}, Cidade: ${cidade}, estado: ${estado}</p>`;
            }
        }catch(error){
            texto.innerHTML = "<p>ERRO AO PROCESSAR A REQUISIÇÃO. TENTE NOVAMENTE MAIS TARDE.</p>";
        }
    }
};