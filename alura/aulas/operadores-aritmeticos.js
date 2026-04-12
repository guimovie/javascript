const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
 media += media * 0.1; //Bônus de 10% para quem tirar nota maior que 7
}

console.log(`a média é ${media.toFixed(2)}`);