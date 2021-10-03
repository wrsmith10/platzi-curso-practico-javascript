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