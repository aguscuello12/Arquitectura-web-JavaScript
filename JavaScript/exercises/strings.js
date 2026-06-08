let string1, string2, resultado;
string1 = "Hola ";
string2 = "Mundo";
resultado = string1 + string2;
console.log(resultado);


let string1, string2, resultado;
string1 = "Hola";
string2 = "Mundo";
resultado = string1.length + string2.length;
console.log(resultado);

let texto, posicion, resultado;
texto = "javascript programacion";

posicion = texto.indexOf(" ");

resultado = texto.substring(0, 1).toUpperCase() +
            texto.substring(1, posicion).toLowerCase() +
            " " +
            texto.substring(posicion + 1, posicion + 2).toUpperCase() +
            texto.substring(posicion + 2).toLowerCase();

console.log(resultado);

let texto, posicion;
texto = "hola mundo!";
posicion = texto.indexOf(" ");
console.log(posicion);

let texto, resultado;
texto = "hOLA MUNDO!";
resultado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(resultado);

let texto, resultado;
texto = "hola mundo!";
resultado = texto.substring(texto.length - 3);
console.log(resultado);

let texto, resultado;
texto = "hola mundo!";
resultado = texto.substring(0, 5);
console.log(resultado);

let texto, resultado;
texto = "hola mundo!";
resultado = texto.toUpperCase();
console.log(resultado);


