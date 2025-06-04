function moeda(){
    event.preventDefault();
    const input = document.getElementById('currencyInput');
    const currency = (input.value);
    const ajax = new XMLHttpRequest();
    ajax.open("GET" , `https://restcountries.com/v3.1/currency/${currency}`);
    ajax.send();
    ajax.onload = function(){
        const resultado = document.getElementById('resultsContainer');
        try{
            if(isFinite(currency) || currency.length === 0){
                 window.alert("OS DADOS SOLICITADOS ESTÃO INVÁLIDOS, DIGITE-OS NOVAMENTE.");
            } else {
                let response = JSON.parse(this.responseText);
                let  resultadoHTML = "" // Essa variável verifica o tipo de moeda e de qual pais ela é.
                response.forEach(pais => {
                    resultadoHTML = `<p>ANALISANDO A MOEDA DIGITADA PODE<br>SE CONCLUIR QUE SUA ORIGEM É...</p>`
                    resultadoHTML += 
                    `<ul>
                        <li><strong>${pais.name.common}:</strong>
                        ( Região: ${pais.region})
                        </li>
                    </ul>`;
                });
                resultado.innerHTML = resultadoHTML;
            }
        }catch(error){
            resultado.innerHTML = "<p>ERRO AO PROCESSAR A REQUISIÇÃO. TENTE NOVAMENTE MAIS TARDE.</p>";
        }
    }
    input.value = "";
    input.focus();
}