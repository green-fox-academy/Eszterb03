import { StringedInstrument } from "./stringedInst";


class Electricguitar extends StringedInstrument{

  constructor(name: string, numberOfString : number = 6){
    super(name,numberOfString);
  }
  sound(){
    console.log ('Twang')
  }
}