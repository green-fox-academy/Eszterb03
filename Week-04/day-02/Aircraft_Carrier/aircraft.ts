'use strict'

export class Aircraft {

  protected baseDamage: number;
  protected maxAmmo: number;
  protected typeName: string;
  protected allDamage: number;
  protected currentAmmo: number;

  constructor(typeName: string, maxAmmo: number, baseDamage: number) {

    this.typeName = typeName;
    this.allDamage = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.currentAmmo = 0;

  }

  fight() {
    let damageOfFight = this.baseDamage * this.currentAmmo
    this.allDamage += damageOfFight;
    this.currentAmmo = 0;
    return damageOfFight
  }
  refill(numberOfRefill: number) {

    if (this.currentAmmo + numberOfRefill < this.maxAmmo) {
      this.currentAmmo += numberOfRefill;
      return 0;

    } else {
      let countRemainAmmo = numberOfRefill - this.maxAmmo + this.currentAmmo
      this.currentAmmo = this.maxAmmo
      return countRemainAmmo
    }
  }

  getType() {
    return (`${this.typeName}`)
  }
  getStatus() {
    return (`${this.typeName}, Ammo: ${this.currentAmmo}, Base Damage:${this.baseDamage}, All Damage: ${this.allDamage}`)
  }
  isPriority():boolean {
    return this.typeName == 'F35';
  }
}

// let aircraft1: Aircraft = new Aircraft('F35', 12, 50);
// let aircraft2: Aircraft = new Aircraft('F16', 8, 30)

// console.log(aircraft1.getType(),aircraft2.getType())
// console.log(aircraft1.getStatus())
//  console.log(aircraft1.refill(5))
// console.log(aircraft1.getStatus())
// console.log(aircraft1.isPriority())
