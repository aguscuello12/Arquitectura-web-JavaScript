let palabras = ["Hola", "Mundo", "JavaScript", "Programacion", "Array"];

for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}


let palabras = ["hola", "mundo", "javascript", "programacion", "array"];

for (let i = 0; i < palabras.length; i++) {
    let palabraModificada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert(palabraModificada);
}

let palabras = ["Hola", "Mundo", "JavaScript", "Programacion", "Array"];
let sentence = "";

for (let i = 0; i < palabras.length; i++) {
    sentence = sentence + palabras[i] + " ";
}

alert(sentence);


let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log(numeros);