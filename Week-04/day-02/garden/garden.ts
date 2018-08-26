import { Plant } from "./plant";

'use strict'


export class Garden {
  private plants: Plant[] = [];

  watering(amountOfNumber) {
    let plantIsThirsty = this.plants.filter(plant => plant.needsWater());
    let ratioWater = amountOfNumber / plantIsThirsty.length;
    plantIsThirsty.forEach(plant => plant.watering(ratioWater));
    console.log(`Watering with ${amountOfNumber}`)
  }
  getStatus() {
    this.plants.forEach(plant => {
      if (plant.needsWater()) {
        console.log(`The ${plant.getColor()} ${plant.getType()} needs water`)
      } else {
        console.log(`The ${plant.getColor()} ${plant.getType()} doesnt need water`)
      }
    });
    console.log('\n')

  }
  addPlant(plant: Plant) {
    this.plants.push(plant);
  }
}


