let num = [2, 3, 6, 8, 4, 9]
num.sort()
/*
console.log(num)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)
}