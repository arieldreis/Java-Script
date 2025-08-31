let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");

function gerarResposta(){
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);
    let random3 = Math.floor(Math.random() * 10);
    let random4 = Math.floor(Math.random() * 10);
    let random5 = Math.floor(Math.random() * 10);
    let random6 = Math.floor(Math.random() * 10);
}
function timer(){
    // Contagem do tempo
    let tempo = setInterval(function (){
        const timer = document.getElementById('time');
        let soma = Number(timer.innerHTML) - 1;
        const emojiBomb = document.querySelector(".bomb");
        if(soma === 0){
            emojiBomb.innerHTML = "💥";
            timer.innerHTML = "TEMPO ESGOTADO!"
            clearInterval(tempo); // para o loop
        }else{
            timer.innerHTML = soma;
        }
    }, 1000);
}

function verificarTentativa(){}

function bomb(){
    // Inputs verficados
    let valorOne = Number(input1.value);
    let valorTwo = Number(input2.value);
    let valorThree = Number(input3.value);
    let valorFour = Number(input4.value);
    let valorFive = Number(input5.value);
    let valorSix = Number(input6.value);
    // Números aleatórios para cada input
    // Tentativas Usuário

    const EmojiInputOne = document.getElementById('emojiAnswerOne');
    const EmojiInputTwo = document.getElementById('emojiAnswerTwo');
    const EmojiInputThree = document.getElementById('emojiAnswerThree');
    const EmojiInputFour = document.getElementById('emojiAnswerFour');
    const EmojiInputFive = document.getElementById('emojiAnswerFive');
    const EmojiInputSix = document.getElementById('emojiAnswerSix');

    let inputs = [valorOne, valorTwo, valorThree, valorFour, valorFive, valorSix];
    let respostas = [random1, random2, random3, random4, random5, random6];

    if(inputs[valorOne] === respostas[random1]){
        EmojiInputOne.innerHTML = "✅";
        EmojiInputOne.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputOne.innerHTML = "❌";
        EmojiInputOne.style.backgroundColor = "#d0452d";
    }

    if(inputs[valorTwo] === respostas[random2]){
        EmojiInputTwo.innerHTML = "✅";
        EmojiInputTwo.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputTwo.innerHTML = "❌";
        EmojiInputTwo.style.backgroundColor = "#d0452d";
    }

    if(inputs[valorThree] === respostas[random3]){
        EmojiInputThree.innerHTML = "✅";
        EmojiInputThree.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputThree.innerHTML = "❌";
        EmojiInputThree.style.backgroundColor = "#d0452d";
    }

    if(inputs[valorFour] === respostas[random4]){
        EmojiInputFour.innerHTML = "✅";
        EmojiInputFour.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputFour.innerHTML = "❌";
        EmojiInputFour.style.backgroundColor = "#d0452d";
    }

    if(inputs[valorFive] === respostas[random5]){
        EmojiInputFive.innerHTML = "✅";
        EmojiInputFive.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputFive.innerHTML = "❌";
        EmojiInputFive.style.backgroundColor = "#d0452d";
    }
    
    if(inputs[valorSix] === respostas[random6]){
        EmojiInputSix.innerHTML = "✅";
        EmojiInputSix.style.backgroundColor = "#90ee90";
    }else{
        EmojiInputSix.innerHTML = "❌";
        EmojiInputSix.style.backgroundColor = "#d0452d";
    }
    timer();
};

input1.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        bomb();
    }
});
input2.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        bomb();
    }
});
input3.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        bomb();
    }
});
input4.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        bomb();
    }
});
input5.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        bomb();
    }
});
input6.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        bomb();
    }
});
