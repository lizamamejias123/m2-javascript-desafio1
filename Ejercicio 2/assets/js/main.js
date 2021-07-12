// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
// números, calcular lo siguiente:
// ● Suma
// ● Resta
// ● División
// ● Multiplicación
// ● Módulo

// Ejercicio 1 / Solución

// Se le debe pedir al usuario que ingrese 2 numeros
// definir constantes

const numero1 = prompt("Ingrese el primer numero");
const numero2 = prompt("Ingrese el segundo numero");

// Definir Los siguientes calculos
// Suma
const suma = parseInt(numero1)+parseInt(numero2)
// Resta
const resta = parseInt(numero1)-parseInt(numero2)
// Division
const division = parseInt(numero1)/parseInt(numero2)
// Multiplicacion
const multiplicacion = parseInt(numero1)*parseInt(numero2)
// Modulo
const modulo = parseInt(numero1)%parseInt(numero2)

// Imprimir los resultados de los calculos
document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 2</h2>
<h2>Numeros ingresados: N°1 = ${numero1} y N°2 = ${numero2}</h2>
<h3>Suma: ${suma}</h3>
<h3>Resta: ${resta}</h3>
<h3>Multiplicación: ${multiplicacion}</h3>
<h3>División: ${division}</h3>
<h3>Módulo: ${modulo}</h3>
</div>`)


