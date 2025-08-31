function localizarString(){
    const string = document.getElementById('string');
    const substring = document.getElementById('subString');

    const posicao = string.indexOf(substring);
    var resultado;

    if(posicao === -1){
        resultado = "Elemento não encontrado no texto";
    }else{
        resultado = "A posição do elemento é: " + posicao
    }

    document.getElementById('resultado').innerHTML = resultado
}