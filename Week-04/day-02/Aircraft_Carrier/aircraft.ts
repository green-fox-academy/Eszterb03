'use strict'

export class Aircraft {

  protected baseDamage: number;
  protected maxAmmo: number;
  protected typeName: string;
  protected ammo: number;
  allDamage: number;
  currentAmmo: number;

  constructor(typeName: string, maxAmmo: number, baseDamage: number) {

    this.typeName = typeName;
    this.ammo = 0;
    this.allDamage = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.currentAmmo = 0;
 
  }

  fight() {
    this.ammo = 0;
    let damageOfFight = this.baseDamage * this.ammo
    this.allDamage += damageOfFight;
    return damageOfFight
  }
  refill(numberOfRefill: number) {
    
    if (this.ammo + numberOfRefill < this.maxAmmo) {
      this.currentAmmo += this.ammo + numberOfRefill;
    return this.ammo + numberOfRefill
    
    
    } else if (numberOfRefill + this.ammo > this.maxAmmo ) {
      this.currentAmmo = this.maxAmmo
      return this.maxAmmo
    
    } else {
      let remainingOfAmmo = this.ammo + numberOfRefill;
      return remainingOfAmmo - this.maxAmmo;
    }
  }
getType(){
  return (`${this.typeName}`)
}
getStatus(){
  return (`${this.typeName}, Ammo: ${this.currentAmmo}, Base Damage:${this.baseDamage}, All Damage: ${this.allDamage}`)
  }
}

let aircraft1: Aircraft = new Aircraft('F35', 12, 50);
let aircraft2: Aircraft = new Aircraft('F16', 8, 30)

console.log(aircraft1.getType(),aircraft2.getType())
console.log(aircraft1.getStatus())
console.log(aircraft1.refill(5))
console.log(aircraft1.getStatus())

