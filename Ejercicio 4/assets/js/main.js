// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.

// Ejercicio 4
// Pedir al usuario que escriba un numero correspondiente a dia
const dias = prompt("Ingrese un cantidad de dias ");
// transformar los dias a años, meses y dias
const año = Math.floor(dias/365);
const semana =Math.floor(dias/7);
const diasdelaño =dias%365
const dia = diasdelaño%7;

// // Imprimir Resultados

document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 4</h2>
<h2>Dias Ingresados: ${dias}</h2>
<h3>Años resultantes: ${año}</h3>
<h3>Semanas resultantes: ${semana}</h3>
<h3>Dias resultantes: ${dia}</h3>
</div>`)
