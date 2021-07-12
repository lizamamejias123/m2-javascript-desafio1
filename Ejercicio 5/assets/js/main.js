// Crear un programa que solicite al usuario 5 números y realice los cálculos que se
// piden a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

// Ejercicio 5
// Pedir al usuario que escriba 5 numeros 
const n1 = prompt("Ingrese el primer número");
const n2 = prompt("Ingrese el segundo número");
const n3 = prompt("Ingrese el tercero número");
const n4 = prompt("Ingrese el cuarto número");
const n5 = prompt("Ingrese el quinto número");
// hacer la suma y sacar el promedio correspondiente
const suma = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5);
const promedio =parseInt(suma)/5

// // Imprimir Resultados
document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 5</h2>
<h2>Números Ingresados: ${n1}, ${n2}, ${n3}, ${n4} y ${n5} </h2>
<h3>Suma total de números: ${suma}</h3>
<h3>Promedio números: ${promedio}</h3>
</div>`)
