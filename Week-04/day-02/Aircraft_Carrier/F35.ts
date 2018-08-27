import { Aircraft } from "./aircraft";

class F35 extends Aircraft{

  constructor(typeName:string ='F35', maxAmmo: number = 12, baseDamage:number = 50){
    super(typeName,maxAmmo,baseDamage);
  }
}

let F35plain: F35 = new F35();

//console.log(F35plain.getStatus())