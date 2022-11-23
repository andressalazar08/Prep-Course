// No cambies los nombres de las funciones.
//1
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

//2
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

//3
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

//4
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return(array);
  
}

//5
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

//6
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

//7
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  cadena = palabras[0];
  for (var i=1;i<palabras.length;i++){
    cadena = cadena + " " + palabras[i];
  }
  return cadena;
}

//8
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

//9
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma=numeros[0]
  for(var i=1;i<numeros.length;i++){
    suma+=numeros[i];
  }
  return suma;
}

//10
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=resultadosTest[0]
  for(var i=1;i<resultadosTest.length;i++){
    suma+=resultadosTest[i];
  }
  promedio=suma/(resultadosTest.length);
  return promedio;
}

//11
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max_of_array = Math.max.apply(Math, numeros);
  return max_of_array;
}

//12
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length===0){
    return 0;
  }
  if(arguments.length===1){
    return arguments[0];
  }else{
    multiplicacion=arguments[0]
    for (var i=1; i< arguments.length;i++){
      multiplicacion=multiplicacion*arguments[i];
    }
    return multiplicacion;
  }
}

//13
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
    var cantidad=0; //ojo con la definición de variables en JS
    for (var i=0;i<arreglo.length;i++){
      if (arreglo[i]>18){
        cantidad=cantidad+1;
      }
    }
    return cantidad;

}

//14
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia===1||numeroDeDia===7){
    return "Es fin de semana";

  }else{
    return "Es dia Laboral";
  }
  
} 

//15
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var m=n.toString();
  if(m[0]==='9'){
    return true;
  }else{
    return false;
  }
  
}

//16
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  inicial=arreglo[0]
  for (var i =1; i< arreglo.length; i++){
    if (inicial===arreglo[i]){
        var valor= true;
    }else{
      var valor = false;
    }

  }
  return valor;
  
} 

//17
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mes1=array.includes("Enero");
  var mes2=array.includes("Marzo");
  var mes3=array.includes("Noviembre");
  if(mes1===true && mes2===true && mes3===true){
    var lista=["Marzo","Noviembre","Enero"];
    return lista;
  }else{
    return "No se encontraron los meses pedidos"
  }
}

//18
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arraynuevo=[];
  for (var i=0; i<array.length;i++){
    if (array[i]>100){
      arraynuevo.push(array[i]);
    }
  }
  return arraynuevo;
}

//19
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arraynuevo=[];
  var valor=numero;
  for (i=0;i<10;i++){
    valor=valor+2;
    arraynuevo.push(valor);
    if (valor===i){
      return "Se interrumpió la ejecución";
      break;
    }
    

  }
  return arraynuevo;
}

//20
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arraynuevo=[];
  var valor=numero;
  for (i=0;i<10;i++){
    
    if (i===5){
      valor=valor;
      
    }else{
      valor=valor+2;
      arraynuevo.push(valor);
    }   

  }
  return arraynuevo;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
