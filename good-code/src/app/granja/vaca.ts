import { Animal } from "app/granja/animal";

export class Vaca implements Animal {
    
    nombre = 'vaca';
    
    getSonido(): string {
        return 'mu';
    }
    
}

