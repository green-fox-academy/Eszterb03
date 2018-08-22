import { StringedInstrument } from "./stringedInst";


class bassGuitar extends StringedInstrument{

  constructor(name: string, numberOfString : number){
    super(name,numberOfString);
  }
  sound(){
    console.log ('Duum-duum-duum')
  }
}