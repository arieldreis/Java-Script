function converter(){
    let mudanca_elemento = document.getElementById("mudanca_elemento");
   let solicitacao = parseFloat(window.prompt('Digite um temperatura em ºC(Celcius)'))
   let fahrenhati = (solicitacao * 9/5) + 32
   let  kelvin = solicitacao + 273.15
   mudanca_elemento.innerHTML = `<h3 style="font-family:Arial; text-shadow:none;">A TEMPERATURA DE ${solicitacao}ºC, corresponde a...</h3>` +
   `<p style="font-family:Arial">${fahrenhati}ºF</p>` +
   `<p style="font-family:Arial">${kelvin}ºK</p>`
}