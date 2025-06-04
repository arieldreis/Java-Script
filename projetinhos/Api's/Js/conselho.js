function citacao(){
    let quote = document.getElementById('quote');
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://api.adviceslip.com/advice");
    ajax.send();
    ajax.onload = function(){
    let quote = document.getElementById('quote');
    try{
        let response = JSON.parse(this.responseText);
        let advice = response.slip.advice;
        quote.innerHTML = `<p>O CONSELHO DE HOJE "${advice}"</p>`
    }catch(error){
            quote.innerHTML = "<p>ERRO AO PROCESSAR A REQUISIÇÃO. TENTE NOVAMENTE MAIS TARDE.</p>";
        }
    }
}