function media_final(){
    let demo = document.getElementById('demo');
    let nome = String(window.prompt('Qual é o nome do aluno?'));
    let nota_1 = parseFloat(window.prompt(`Primeira nota de ${nome}:`));
    let nota_2 = parseFloat(window.prompt(`Segunda nota de ${nome}:`));
    let media_final = (nota_1 + nota_2) / 2;
    //blocos de condição
    if(media_final > 6){
        demo.innerHTML = `<h2>Analisando a situação de ${nome}</h2>` +
            `<p>Com as notas ${nota_1} e ${nota_2}, <strong>a média é ${media_final}</strong></p>` +
            `<p>Com média acima de 6.0 , o aluno está <mark style="background-color: lightgreen; color: darkgreen; padding: 5px; border-radius: 5px; font-weight: bold;">APROVADO✅</mark></p>`
    }else if(media_final >= 3.0 && media_final <= 6.0){
        demo.innerHTML =  `<h2>Analisando a situação de ${nome}</h2>` +
        `<p>Com as notas ${nota_1} e ${nota_2}, <strong>a média é ${media_final}</strong></p>` +
        `<p>Com média entre 3.0 e 6.0 , o aluno está em <mark style="background-color: #FFFACD; color: darkgreen; padding: 5px; border-radius: 5px; font-weight: bold;">RECUPERAÇÃO📝</mark></p>`
    }else{
        demo.innerHTML = `<h2>Analisando a situação de ${nome}</h2>` +
        `<p>Com as notas ${nota_1} e ${nota_2}, <strong>a média é ${media_final}</strong></p>` +
        `<p>Com as notas ${nota_1} e ${nota_2}, <strong>a média é ${media_final}</strong></p>` +
        `<p>Com média abaixo de 3.0 , o aluno está <mark style="background-color: tomato; color: darkgreen; padding: 5px; border-radius: 5px; font-weight: bold;">REPROVADO❌</mark></p>`
    }
}