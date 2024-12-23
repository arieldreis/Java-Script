// Maneira tradicional 
function fatorial(numero){
    let fato = 1
    let c = numero
    while(c > 1){
        fato*= c
        c--
    }
    return fato
}

console.log(fatorial(5))