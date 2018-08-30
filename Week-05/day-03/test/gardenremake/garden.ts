import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";

'use strict'

export class Garden {
  public plants: Plant[] = [];


  wateringAll(amountOfWater: number) {
    console.log(`Watering with ${amountOfWater}`)
    let isThirsty = this.plants.filter(plant => plant.needsWater())
    isThirsty.forEach(plant => {
      plant.watering(amountOfWater/isThirsty.length)      
    });
  }
  getStatus(){
    this.plants.forEach(plant=>
      console.log(`${plant.getColor()}  ${plant.constructor['name']} ${plant.getStatus()}`) 
    )};
}

let flower1: Flower = new Flower('sárga');
let tree1: Tree = new Tree('szilva');
let garden: Garden = new Garden();

garden.plants.push(flower1);
garden.plants.push(tree1);
garden.getStatus()
garden.wateringAll(40);
garden.getStatus();
garden.wateringAll(70);
garden.getStatus()

