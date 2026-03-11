var age = 100
if (age < 16) {
    console.log('Não pode votar')
} else if (age >= 16 && age <= 17 || age > 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}