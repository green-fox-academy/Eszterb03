import { StringedInstrument } from "./stringedInst";


export class Violin extends StringedInstrument{

  constructor(numberOfString : number = 4){
    super('Violin',numberOfString);
  }
  sound():string {
    return 'Screech'
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

