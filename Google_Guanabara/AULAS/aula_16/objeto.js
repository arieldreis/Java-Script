let amigo = {nome:"Ariel" , 
sobrenome:"Marinho" , 
idade:16 ,
peso: 88.7,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)