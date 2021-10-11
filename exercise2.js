/* 

EJERCICIO 2

Un palíndromo es una palabra que se puede leer igual de izquierda a derecha o de derecha a izquierda (Ejemplo RADAR)
Realizar el siguiente método/función 
comprobarPalindromo(): void
En el algoritmo se leerá la palabra desde un fichero.
Comprobar si esa palabra es un palíndromo e indicar, por texto, si es o no es palíndromo y el número de letras. 
*/

function comprobarPalindromo(str) {
  const str1 = str.replace(/[\W_]/g, "").toLowerCase();
  const str2 = str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  const check = str1 === str2;
  if (check) {
    console.log(
      [...str2],
      `Sí, es un palindromo y contiene ${str2.length} letras`
    );
  } else {
    console.log("No es un palindromo.");
  }
  return comprobarPalindromo;
}

comprobarPalindromo("RADAR");


