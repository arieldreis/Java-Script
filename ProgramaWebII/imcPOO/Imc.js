class Imc{
    _altura;
    _peso;
    _calculo;
    _classificacao;
    _indice;
    constructor(alt,pes){
        this.altura = alt;
        this.peso = pes;
    }
    calcular(){
        //IMC = peso (kg) / (altura (m))^2
        this.calculo = this.peso/(this.altura**2);
        this.indice = Math.round(this.calculo).toString().replace('.',',');
    }
    classificar(){
        this.calcular();
        console.log(this.calculo)
        if(this.calculo < 18.5){
            this.classificacao  = 'Abaixo do peso ideal.';
        }else if(this.calculo < 24.9){
            this.classificacao ='Peso ideal.'
        }else if(this.calculo < 29.9){
            this.classificacao = 'Sobre-Peso';
        }else if(this.calculo < 34.9){
            this.classificacao = 'Obesidade Grau I'
        }else if(this.calculo < 39.9){
            this.classificacao = 'Obesidade Severa Grau II'
        }else{
            this.classificacao='Obesidade Mórbida';
        }
    }
    set altura(valor){
        this._altura = numerico(valor);
    }
    set peso(valor){
        this._peso = numerico(valor);
    }
    set calculo(valor){
        this._calculo = valor;
    }
    set classificacao(valor){
        this._classificacao = valor;
    }
    set indice(valor){
        this._indice = valor;
    }
    get altura(){
        return this._altura;
    }
    get peso(){
        return this._peso;
    }
    get calculo(){
        return this._calculo;
    }
    get classificacao(){
        return this._classificacao;
    }
    get indice(){
        return this._indice;
    }
}