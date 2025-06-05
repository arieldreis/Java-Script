var pessoa = [];
var n = 0;
var confirma = false;
var msg = '<h1>IMC</h1>';
do{
pessoa[n] = new Pessoa();
pessoa[n].nome = window.prompt('Digite o nome do paciente');
do{
pessoa[n].altura = window.prompt('Digite a altura do paciente em metros.');
if(!pessoa[n].altura){
    window.alert('O valor da altura deve ser numérico.')
}}while(!pessoa[n].altura);
do{
    pessoa[n].peso = window.prompt('Digite o peso do paciente em quilogramas.');
if(!pessoa[n].peso){
    window.alert('O valor do peso deve ser numérico.')
}}while(!pessoa[n].peso);
pessoa[n].exame = new Imc(pessoa[n].altura,pessoa[n].peso);
pessoa[n].exame.classificar();
msg += `<h2>${pessoa[n].nome}</h2><p><b>Índice:</b>${pessoa[n].exame.indice}</p><p>${pessoa[n].exame.classificacao}</p>`;
confirma = window.confirm('Cadastrar novo paciente?');
n++;
}while(confirma);

document.writeln(msg);

console.log(pessoa);