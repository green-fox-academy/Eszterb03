
export abstract class Plant {

  protected color: string
  protected minWater: number;
  protected currentWater = 0;
  protected absorbWater: number;
  protected type: string;

  constructor(color: string) {
    this.color = color;
  }


  watering(numberOfWater) {
    this.currentWater += numberOfWater * this.absorbWater;
  }
  needsWater(): boolean {
    return this.currentWater < this.minWater;
  }
  getColor() {
    return this.color;
  }
  getType(){
    return this.type;
  }

}
