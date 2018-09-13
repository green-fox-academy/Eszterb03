'use strict'

export abstract class Plant {
  protected color: string;
  protected absorbWater: number;
  protected currentWater: number;
  protected minWater: number;

  constructor(color: string, absorbWater: number, minWater: number) {
    this.color = color;
    this.absorbWater = absorbWater;
    this.currentWater = 0;
    this.minWater = minWater;
  }
  
  watering(amountOfWater) {
    this.currentWater += amountOfWater / this.absorbWater;
  };

  needsWater() {
    return this.currentWater < this.minWater;
  };

  getColor() {
    return this.color;
  };

  getStatus() {
    if (this.currentWater < this.minWater) {
      return `needs water`;
    } else {
      return `doesnt need water`;
    }
  };

}