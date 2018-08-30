import { Plant } from "./plant";

'use strict'

export class Tree extends Plant {

  currentWater: number;

  constructor(name: string) {
    super(name, 0.4,10);
  }
}

