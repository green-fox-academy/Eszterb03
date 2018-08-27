import { Aircraft } from "./aircraft";

class F16 extends Aircraft {

  constructor(typeName:string ="F16",maxAmmo:number = 8, baseDamage:number = 30){
    super(typeName,maxAmmo,baseDamage);
  }
}
