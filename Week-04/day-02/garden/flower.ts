import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color);
    this.absorbWater = 0.75;
    this.minWater = 5;
    this.type = 'Flower';
  }
}

