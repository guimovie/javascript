function exibeInfosEstudante(nome, nota) {
    console.log(`o Nome é ${nome} e a nota é ${nota}`)
}

exibeInfosEstudante('Jose', 10)
exibeInfosEstudante('Carlos', 8)

// OU

function exibeInfosEstudante2(nome, nota) {
    return `o Nome é ${nome} e a nota é ${nota}`
}

console.log(exibeInfosEstudante2('Jose', 10))
console.log(exibeInfosEstudante2('Carlos', 8))
