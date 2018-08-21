import { F35 } from "./F35";

'use strict'

export class Aircraft{
  
  protected baseDamage: number;
  protected maxAmmo: number;
  protected typeName : string;
  protected ammo: number;

  constructor(typeName:string){
    // if( this.typeName !== (F16||F35)){
    //   throw new Error( "This type isn't exist ");
    // }
    // if (this.typeName == F16){
    //   this.maxAmmo == 8;
    //   this.baseDamage == 30;
    // }
    // if(this.typeName == F35){
    //   this.maxAmmo == 12;
    //   this.baseDamage == 50;
    // }

    this.typeName = typeName;
    this.ammo = 0;
   
    
  }

  fight(){
    this.ammo = 0;
    let damageOfFight = this.baseDamage*this.ammo
    return damageOfFight
  }
  refill(numberOfRefill:number){
    if( this.ammo + numberOfRefill < this.maxAmmo && numberOfRefill < this.ammo ){
     return this.maxAmmo - numberOfRefill
    } else {
      let sumOfAmmo = this.ammo+numberOfRefill
      return sumOfAmmo-this.maxAmmo
    }
  }

}

