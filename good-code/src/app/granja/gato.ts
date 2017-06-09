import { Animal } from "app/granja/animal";

export class Gato implements Animal {
    
    nombre = 'gato';
    
    getSonido(): string {
        return 'miauu';
    }
    
}

