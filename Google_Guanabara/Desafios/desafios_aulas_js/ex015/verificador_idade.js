// Criança até 2012 para cima
// Adolescente 2011 até 2003
// Adulto 1960 até 2002
// Idoso 1959 para baixo
function verificar(event){
    event.preventDefault();
    let txtano = document.getElementById('txtano').value;

    let masculino = document.getElementById('masculino').checked; 
    let feminino = document.getElementById('feminino').checked;

    let resultado = document.querySelector('div#res');
    const anoAtual = new Date().getFullYear();
    let idade = anoAtual - parseInt(txtano);
    const img = document.createElement("img");
    if(txtano.length === 0 || parseInt(txtano) > anoAtual){
        window.alert('Dados Inválidos, digite novamente!');
        return;
    }
    resultado.innerHTML = '';
    if(masculino){
        if(idade <= 12){
            resultado.innerHTML = `Detectamos um criança de ${idade} anos<br>`
            img.setAttribute('src', "img/crianca_menino.png"); //img.setAttribute('src', "img/crianca_menino.png");
            img.alt = "Imagem de uma criança do sexo masculino";
        }else if(idade <= 19){
            resultado.innerHTML = `Detectamos um adolescente de ${idade} anos<br>`
            img.setAttribute('src' ,'img/adolescente_menino.png');
            img.alt = "Imagem de um Adolescente do sexo masculino"
        }else if(idade <= 64){
            resultado.innerHTML = `Detectamos um homem Adulto de ${idade} anos<br>`
            img.setAttribute('src' ,"img/homem.jpg");
            img.alt = "Homem Adulto"
        }else{
            resultado.innerHTML = `Detectamos um homem Idoso de ${idade} anos<br>`
            img.setAttribute( 'src' , 'img/idoso.png');
            img.alt = "Homem idoso";
        }
    }
    else if(feminino){
        if(idade <= 12){
            resultado.innerHTML = `Detectamos uma criança do sexo feminino de ${idade} anos<br>`
            img.setAttribute('src' ,'img/crianca_menina.png');
            img.alt = "Criança do sexo feminino";
        }else if(idade <= 19){
            resultado.innerHTML = `Detectamos uma adolescente do sexo feminino de ${idade} anos<br>`
            img.setAttribute('src' , 'img/adolescente_menina.png');
            img.alt = "Adolescente do sexo feminino";
        }else if(idade <= 64){
            resultado.innerHTML = `Detectamos uma mulher de ${idade} anos<br>`
            img.setAttribute('src' ,'img/mulher.png');
            img.alt = "Mulher";
        }else{
            resultado.innerHTML = `Detectamos uma mulher idosa de ${idade} anos<br>`
            img.setAttribute('src' ,'img/idosa.png');
            img.alt = "Mulher idosa";
        }
    }else{
        window.alert('Selecione o sexo antes de continuar!');
        return;
    }
    
    resultado.style.color = "Black";
    resultado.style.textAlign = 'center';
    resultado.appendChild(img)
    resultado.style.lineHeight = "2.5"
    resultado.style.fontFamily = 'Arial'
    img.width = 220; // exemplo: largura de 300 pixels
    img.height = 200; // exemplo: altura de 200 pixels
}
