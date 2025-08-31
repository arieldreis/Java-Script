let agora = new Date()
let diasem = agora.getDay()
switch(diasem){
    case 0:
        console.log('Domindo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
    case 6:
        console.log('Sabádo')
        break
    default:
        console.log('[erro], dia inválido!!!')
        break
}