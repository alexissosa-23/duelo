const Carta = require("./Carta");
const Unidad = require("./Unidad");

class Efecto extends Carta {
    constructor(nombre, costo, texto, estadistica, magnitud) {
        super(nombre, costo);
        this.texto = texto;
        this.estadistica = estadistica;
        this.magnitud = magnitud;
    }

    aplicar(objetivo) {
        if (!(objetivo instanceof Unidad)) {
            throw new Error("El objetivo debe ser una unidad!");
        }
        console.log(`${this.nombre} se aplica sobre ${objetivo.nombre}: ${this.texto}`);
        if (this.estadistica === 'poder') {
            objetivo.poder += this.magnitud;
        } else if (this.estadistica === 'resistencia') {
            objetivo.resistencia += this.magnitud;
        }
    }
}
module.exports = Efecto;