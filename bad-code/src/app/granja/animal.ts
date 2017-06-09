export class Animal {
    
    nombre: string = '';

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getSonido() {
        switch(this.nombre) {
            case 'vaca':
                return 'mu'
            case 'perro':
                return 'guau'
            case 'gato':
                return 'miauu'
            default:
                throw new TypeError('Animal desconocido');
        }
    }
}