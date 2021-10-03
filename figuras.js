//codigo cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();

//codigo triangulo
console.group("triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return base*altura/2;
}
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
console.groupEnd();

//codigo circulo
console.group("circulos");
const PI=Math.PI;
function diametroCirculo(radio){
    return radio*2;
}
function circunferenciaCirculo(radio){
    return diametroCirculo(radio)*PI;
}
function AreaCirculo(radio){
    return radio*radio*PI;
}
console.groupEnd();


//Aca empezamos a interactuar con HTML
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;


    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;


    const area=areaCuadrado(value);
    alert(area);
}
function calcularAlturaTrianguloIsosceles(){
    const input1=document.getElementById("InputTriangulo1");
    const input2=document.getElementById("InputTriangulo2");
    const inputBase=document.getElementById("InputTrianguloBase");
    const value1=input1.value;
    const value2=input2.value;
    const valueBase=inputBase.value;

    const altura=alturaTrianguloIsosceles(value1,value2,valueBase);
    alert(altura);
}
