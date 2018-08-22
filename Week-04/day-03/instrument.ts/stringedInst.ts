import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings= numberOfStrings
  }

  sound(): void { }

  play(){

  }

}