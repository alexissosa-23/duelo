const Carta = require("./Carta");

class Unidad extends Carta {
    constructor(nombre, costo, poder, resistencia) {
        super(nombre, costo);
        this.poder = poder;
        this.resistencia = resistencia;
    }

    atacar(objetivo) {
        if (!(objetivo instanceof Unidad)) {
            throw new Error("El objetivo debe ser una unidad!");
        }
        console.log(`${this.nombre} ataca a ${objetivo.nombre} reduciendo su resistencia en ${this.poder}`);
        objetivo.resistencia -= this.poder;
        if (objetivo.resistencia <= 0) {
            console.log(`${objetivo.nombre} ha sido destruido!`);
        }
    }
}
module.exports = Unidad;