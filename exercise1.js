/*

EJERCICIO 1:

Realizar el método/función
valoresEstadisticos(File f): int
que lea desde un fichero un conjunto de números y devuelva una serie de valores: 
máximo valor
mínimo valor
media aritmética
Número de veces que aparece el número mayor 
Ejemplo: si el fichero tuviera los números 3, 8, 9, 2, 10, 8, 5, 10, 2, 3    el método mostraría en pantalla: 
MAX: 10,      MIN: 2,      MEDIA: 6,     nº VECES MAX: 2


*/

function valoresEstadisticos(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;
  let count = 0;
  let timesMax = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    sum = sum + arr[i];
    media = Math.round(sum / count);

    if (max === arr[i]) {
      timesMax++;
    }
  }

  return console.log({
    max: `${max}`,
    min: `${min}`,
    media: `${media}`,
    timesMax: `${timesMax}`,
  });
}

valoresEstadisticos([3, 8, 9, 2, 52, 1, 5, 10, 2, 3]);




