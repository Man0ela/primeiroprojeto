let nome ="Manoela";
let exp=9001;
let nivel="";
if (exp<1000){
    nivel="ferro";
} else if (exp>=1001&&exp<=2000) {
    nivel="Bronze";
} else if (exp>=2002&&exp<=5000) {
    nivel="Prata";
} else if (exp>=5001&&exp<=7000) {
    nivel="Ouro";
} else if (exp>=7001&&exp<=8000) {
    nivel="Platino";
} else if (exp>=8001&&exp<=9000) {
    nivel="Ascendente";
} else if (exp>=9001&&exp<=10000) {
    nivel="Imorta";
} else if (exp>=10001){
    nivel="Radiante";
}
console.log("O Herói de nome " + nome + " está no nível de "+ nivel);
