import { Animal } from "./animalzoo";

export class Mammals extends Animal{

  constructor(name:string,){
    super(name)
  }
  getName(){
    return this.name
  }
  breed(){
    return 'pushing miniature versions out.'
  }
  eat(){
    this.isHungry = false;
    console.log('marcangol')
  }
}