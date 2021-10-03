//codigo cuadrado
const ladoCuadrado = 5;
console.group("cuadrados");
console.log("los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado=ladoCuadrado*4;
console.log("el perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log("el area del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd();

//codigo triangulo
console.group("triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo=5.5
console.log("los lados del triangulo miden: "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTriangulo+"cm");

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("el perimetro del triangulo es: "+perimetroTriangulo+"cm");

console.log("La altura del triangulo es: "+alturaTriangulo+"cm");

const areaTriangulo=baseTriangulo*alturaTriangulo/2;
console.log("el area del triangulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

//codigo triangulo
console.group("circulos");
const radioCirculo=4;
const diametroCirculo=radioCirculo*2;
const PI=Math.PI;
const circunferenciaCirculo=diametroCirculo*PI;
const areaCirculo=radioCirculo*radioCirculo*PI;

console.log("el radio del circulo es: "+radioCirculo+"cm");
console.log("el diametro del circulo es: "+diametroCirculo+"cm");
console.log("PI es: "+PI);
console.log("la circunferencia del circulo es: "+circunferenciaCirculo+"cm");
console.log("el area del circulo es: "+areaCirculo+"cm");
console.groupEnd();