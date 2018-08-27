import { Animal } from "./animal";

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
    private animals: Animal[];
    private numSlots: number;

    constructor(animals: Animal[], numSlots:number){
        animals = this.animals;
        numSlots = this.numSlots
    }
    breed(){
        if(this.numSlots !== 0){
            let newAnimal
            this.animals.push(newAnimal)
        }
        this.numSlots++
    }
    
    slaughter(){

    }
}