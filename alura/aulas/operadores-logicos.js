const nota = 7
const falta = 1
const advertencia = 0

if (nota >= 7 && falta < 4) {
    console.log('aprovado')
} else {
    console.log('reprovado')
}

if (falta < 2 && !advertencia) {
    console.log(`recebeu bônus, sua nota agora é ${nota + nota * 0.1}`)
} else {
    console.log('sem bônus')
}