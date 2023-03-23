/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arreglo = Object.entries(objeto);
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let charCount = {};
   for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      if (charCount[char]) {
         charCount[char]++;
      } else {
         charCount[char] = 1;
      }
   }
   let sortedKeys = Object.keys(charCount).sort();
   let result = {};
   for (let i = 0; i < sortedKeys.length; i++) {
      let key = sortedKeys[i];
      result[key] = charCount[key];
   }
   return result;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = '';
   let minusculas = '';
   for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayusculas += string[i];
      }
      else {
         minusculas += string[i];
      }
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayFrase = frase.split(' ');
   let fraseEspejo = '';
   for (var i = 0; i < arrayFrase.length; i++) {
      fraseEspejo += arrayFrase[i].split('').reverse().join('') + ' ';
   }
   return fraseEspejo.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let cadenaNumero = numero.toString();
   let cadenaInvertida = cadenaNumero.split('').reverse().join('');
   if (cadenaNumero === cadenaInvertida) {
      return "Es capicua";
   }
   else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arrayString = string.split('');
   for (var i = 0; i < arrayString.length; i++) {
      while (arrayString[i] === 'a' || arrayString[i] === 'b' || arrayString[i] === 'c') {
         arrayString.splice(i, 1);
      }
   }
   return arrayString.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let longitudDeCadaString = [];
   for (var i = 0; i < arrayOfStrings.length; i++) {
      longitudDeCadaString[i] = arrayOfStrings[i].length;
   }
   for (var i = 0; i < longitudDeCadaString.length; i++) {
      for (var j = 0; j < longitudDeCadaString.length - 1 - i; j++) {
         if (longitudDeCadaString[j] > longitudDeCadaString[j + 1]) {
            let aux = longitudDeCadaString[j];
            longitudDeCadaString[j] = longitudDeCadaString[j + 1];
            longitudDeCadaString[j + 1] = aux;

            let temp = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j + 1];
            arrayOfStrings[j + 1] = temp;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArreglo = [];
   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
         if (array1[i] == array2[j]) {
            nuevoArreglo.push(array1[i]);
         }
      }
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
