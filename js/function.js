/*
let numero1 = 1;
let numero2 = 3;
let numero3 = 5;


console.log("Hola Mundo");

console.log("a=" + numero1);
console.log("b=" + numero2);
console.log("a+b=" + (numero1 + numero2));

console.log("c=" + numero3);
console.log("(a+b)*c=" + (numero1 + numero2) * numero3);
*/


//acá empezamos con el ejemplo de prueba de javascript con acción en el botón
/*
document.getElementById("boton1").onclick = function () {
    console.log("se hizo clik en el botón");
    document.getElementById("elemento1").innerHTML = "Esto es la prueba de javascript";
}
*/

document.getElementById('h_titulo').onclick = function () {
    document.getElementById('titulo').style.display='';
}

document.getElementById('oc_titulo').onclick = function () {
    document.getElementById('titulo').style.display='none';
}



document.getElementById('h_html').onclick = function () {
    document.getElementById('html').style.display='';
}

document.getElementById('oc_html').onclick = function () {
    document.getElementById('html').style.display='none';
}



document.getElementById('h_css').onclick = function () {
    document.getElementById('css').style.display='';
}

document.getElementById('oc_css').onclick = function () {
    document.getElementById('css').style.display='none';
}



document.getElementById('h_git').onclick = function () {
    document.getElementById('git').style.display='';
}

document.getElementById('oc_git').onclick = function () {
    document.getElementById('git').style.display='none';
}



document.getElementById('h_js').onclick = function () {
    document.getElementById('js').style.display='';
}

document.getElementById('oc_js').onclick = function () {
    document.getElementById('js').style.display='none';
}