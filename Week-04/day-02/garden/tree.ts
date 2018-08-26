import { Plant } from "./plant";

export class Tree extends Plant {

  constructor(color: string, ) {
    super(color);
    this.absorbWater = 0.4;
    this.minWater = 10;
    this.type = 'Tree';

  }
}