let num = [9, 8, 7, 2]
num.sort()
console.log(num)
console.log(`Meu vetor tem ${num.length} posições`)
console.log(`Meu primeiro vetor é ${num[0]}`)
num.push(3, 5)
num.sort()
console.log(`Atualizando...`)
console.log(num)
console.log(`Meu vetor tem ${num.length} posições`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log('não tem esse numero')
} else {
    console.log(`o numero está na posição ${pos}`)
}