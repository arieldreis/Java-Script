class Pessoa{
    _nome;
    _altura;
    _peso;
    _exame;
    //getter and setters
    set nome(valor){
        this._nome = valor;
    }
    set altura(valor){
        this._altura = numerico(valor);
    }
    set peso(valor){
        this._peso = numerico(valor);
    }
    set exame(obj){
        if(typeof(obj)=='object'){
        this._exame = obj;}else{
            console.error('O atributo exame da classe Pessoa deve ter um objeto como valor');
        this._exame = null;
        }
    }
    get nome(){
        return this._nome;
    }
    get altura(){
        return this._altura;
    }
    get peso(){
        return this._peso;
    }
    get exame(){
        return this._exame;
    }
}