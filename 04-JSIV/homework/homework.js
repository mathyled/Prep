// No cambies los nombres de las funciones.

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
cb();
}

function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver lo que retorne el ejecutar el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  // var suma=0;
  var suma= numeros[0]
  for (var i = 1; i < numeros.length; i++) {
    suma=suma+numeros[i]
  }
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre el array "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada elemento el arreglo)
  // Tu código:
  array.forEach(cb);
}

function map(array, cb) {
  // Itera sobre cada elemento de "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  var nuevo=array.map(cb);
  return nuevo;
}

function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  var filtrado=[];
 for (var i = 0; i < array.length; i++) {
   if (array[i][0]==="a") { filtrado.push(array[i]) }
 }
return filtrado;
}

// ---- Ejercicios de Repaso ----

function deObjetoArray(objeto){
  // Escribe una función que convierta un objeto en un arreglo, donde cada elemento representa 
  // un par clave-valor.
  // Ejemplo: 
  /* objeto({
      D: 1,
      B: 2,
      C: 3
     }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  // Tu código:
  var aux=[];
    for(const prop in objeto){
      aux.push([prop,objeto[prop]])
    }
    return aux;
}

function numberOfCharacters(string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  // en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  // Tu código: de string --> arreglo --> objeto

var run ={};
for (var i = 0; i < string.length; i++) {
    if ( !run[string[i]]){
      run[string[i]]=1
    }
  else {  run[string[i]]= run[string[i]] +1}
}

return run;
}

function capicua(numero){
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se lee igual de 
  // izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  // Tu código: numero --> string  ej : ojo --> ojo (invertido se lee igual)
  var auxNorm = numero.toString();
  var auxInv= auxNorm.split('').reverse().join('');
    
  if(auxNorm===auxInv)  { return "Es capicua"}
  else { return "No es capicua" }

}

function deleteAbc(cadena){
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  // y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  // Tu código:
  var nuevo="";
  for (let i = 0; i < cadena.length; i++) {
     if ( cadena[i]==="a" || cadena[i]==="b"||cadena[i]==="c"){
        delete cadena[i]
     }
else { nuevo= nuevo + cadena[i]}
  }
  return nuevo;
}

function buscoInterseccion(arreglo1, arreglo2){
  // Existen dos arrays, cada uno con cierta cantidad de números. A partir de ello, escribir una función que permita 
  // retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud
  // Tu código:
  var intersec=[];
for (var i = 0; i < arreglo1.length; i++) {
  for (var x = 0; x < arreglo2.length; x++) {
     if (arreglo1[i]===arreglo2[x]){intersec.push(arreglo1[i]) } 
    
  }
  }
  return intersec;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
  deObjetoArray,
  numberOfCharacters,
  capicua,
  deleteAbc,
  buscoInterseccion
};
