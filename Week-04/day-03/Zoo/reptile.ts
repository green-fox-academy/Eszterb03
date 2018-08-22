import { Animal } from "./animalzoo";

export class Reptile extends Animal {

  constructor(name: string) {
    super(name)
    
  }
  getName() {
    return this.name
  }
  breed() {
    return 'laying eggs.'
  }

  eat() {
    this.isHungry = false;
    console.log('nyammog')
  }
}