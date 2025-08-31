function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date();
    let hora = 16
    msg.innerHTML = `Agora são ${hora} horas `
    if(hora > 0 && hora < 12){
        /*Bom Dia!!!*/
        img.src = "manha.png"
        document.boby.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        /*Boa Tarde!*/
        img.src = "tarde.png"
        document.body.style.background = "#f29d35";
    }
    else{
        /*Boa Noite!*/
        img.src= "noite.png"
        document.body.style.background = "#1b1b1b";
    }
}
