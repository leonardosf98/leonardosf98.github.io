let resultado = [];
let a1 = 2;
let i = 0;
let r = 3;
let n = 4;
let teste = 0;

while (i < n) {
    resultado.push(a1 + r * i);
    i++;
}
i = 0;

while(i < resultado.length){
    teste = teste + resultado[i];
    i++;
}
console.log(teste);