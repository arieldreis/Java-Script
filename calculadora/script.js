function zero(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function um(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero
}
function dois(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function tres(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero
}
function quatro(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function cinco(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function seis(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function sete(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero
}
function oito(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function nove(numero){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += numero;
}
function limpar(){

}
function diferenca(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "-";
}
function adicao(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "+"; // Só uma string
}
function multiplicacao(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "x";
}
function divisao(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "÷"
}
function virgula(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += ".";
}
function abre_conchete(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "[";
}
function fecha_conchete(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value += "]";
}
function calcular(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    try{
        input.value = eval(input.value.replace('x', '*').replace('÷', '/').replace('[', '(').replace(']', ')'));
    } catch {
        window.alert("ERRO!");
        input.value = "";
    }
}
function limpar(){
    event.preventDefault();
    let input = document.querySelector('.meuinput');
    input.value = "";
}