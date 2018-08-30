import { Plant } from "./plant";

'use strict'

export class Flower extends Plant {
  currentWater: number;

  constructor(color: string) {
    super(color,0.75,5);
  }
}