function verificar(){
    let demo = document.getElementById('demo');
    let bissexto = parseInt(window.prompt('Qual é o ano que você quer verificar?'));
    if(bissexto%4!=0){
        demo.innerHTML = `<p>O ano de ${bissexto} <mark style="background-color: tomato; color: white; padding: 5px; border-radius: 5px; font-weight: bold;">NÃO É BISSEXTO❌</mark></p>`
    }
    else{
        demo.innerHTML = `<p>O ano de ${bissexto} <mark style="background-color: lightgreen; color: darkgreen; padding: 5px; border-radius: 5px; font-weight: bold;">É BISSEXTO✅</mark></p>`
    }
    demo.style.lineHeight = '2.0'
}