import { StringedInstrument } from "./stringedInst";


class Violin extends StringedInstrument{

  constructor(name: string = 'Violin', numberOfString : number){
    super(name,numberOfString);
  }
  sound(){
    console.log ('Screech')
  }
}