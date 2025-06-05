function numerico(valor){
    var num = valor.toString().replace(',','.');
    if(isNaN(num) || num == ''){
        console.error('Somente valores numéricos são aceitos.');
        return null;
    }
    return Number(num);
}

