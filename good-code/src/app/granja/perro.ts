import { Animal } from "app/granja/animal";

export class Perro implements Animal {
    
    nombre = 'perro';
    
    getSonido(): string {
        return 'guau';
    }
    
}