const Efecto = require("./Clases/Efecto");
const Unidad = require("./Clases/Unidad");

let ninjaRojo = new Unidad("Ninja Cinturón Rojo", 3, 3, 4);
let ninjaNegro = new Unidad("Ninja Cinturón Negro", 4, 5, 4);

let algoritmoDuro = new Efecto("Algoritmo Duro", 2, "Aumentar la resistencia del objetivo en 3", "resistencia", 3);
let promesaRechazada = new Efecto("Promesa Rechazada", 1, "Reducir la resistencia del objetivo en 2", "resistencia", -2);
let programacionPareja = new Efecto("Programación en Pareja", 3, "Aumentar el poder del objetivo en 2", "poder", 2);

console.log("Turno 1:");
ninjaRojo.atacar(ninjaNegro);

console.log("Turno 2:");
algoritmoDuro.aplicar(ninjaRojo);

console.log("Turno 3:");
promesaRechazada.aplicar(ninjaRojo);
programacionPareja.aplicar(ninjaRojo);

console.log("Estado Final:");
console.log(`${ninjaRojo.nombre} - Poder: ${ninjaRojo.poder}, Resistencia: ${ninjaRojo.resistencia}`);
console.log(`${ninjaNegro.nombre} - Poder: ${ninjaNegro.poder}, Resistencia: ${ninjaNegro.resistencia}`);
