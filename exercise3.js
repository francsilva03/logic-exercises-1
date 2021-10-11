/* 
Realizar el siguiente método/función 
traducirPalabra(String pal, int idiom): void
tal que dada una palabra y un número que identifique un idioma (1:alemán // 2:búlgaro) traduzca la palabra al idioma.
Según el idioma y lo que valga la última letra, los cambios serán
Alemán
(vocal). Quitar vocal y añadir sufijo “ujem”
Ej: silla 🡪 sillujem
(consonante). Quita 2 letras y añade sufijo “ujem”: 
Ej: camión 🡪 camiujem
Búlgaro 
(vocal). Añadir sufijo “kov”: 
Ej: silla 🡪 sillakov
(consonante). Quitar 1 letra y añadir sufijo “kov”: 
Ej: camión 🡪 camiokov
*/

function traducirPalabra(str, num) {

    let regExp = /[aeiou]/;
    let regExp2 = /[^aeiou]/;

    let arrStr = str.toLowerCase().split("");
    let lastWord = arrStr[arrStr.length - 1];

    let aleman = "ujem";
    let bulgaro = "kov";
  
    if (regExp.test(lastWord) && num == 1) return console.log(str.slice(0,-1).concat(aleman));
    if (regExp2.test(lastWord) && num == 1) return console.log(str.slice(0,-2).concat(aleman));
    if (regExp.test(lastWord) && num == 2) return console.log(str.concat(bulgaro));
    if (regExp2.test(lastWord) && num == 2) return console.log(str.slice(0,-1).concat(bulgaro));

  }
  
  traducirPalabra("Hola", 1);