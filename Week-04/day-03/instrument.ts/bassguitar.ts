import { StringedInstrument } from "./stringedInst";


export class BassGuitar extends StringedInstrument{

  constructor(numberOfString : number =6){
    super('Bassguitar',numberOfString);
  }

  sound():string {
    return 'Duum-duum-duum'
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}