import { Aircraft } from "./aircraft";


export class Carrier {
  protected aircrafts: Aircraft[];
  protected ammoStorage: number;
  protected healthPoint: number;
  protected totalDamage: number;

  constructor(initalAmmo: number, healthPoint: number) {
    this.aircrafts = [];
    this.ammoStorage = initalAmmo;
    this.healthPoint = healthPoint;
    this.totalDamage = 0;
  }
  add(Aircraft) {
    this.aircrafts.push(Aircraft);
  }
  fill() {
    if (this.ammoStorage === 0) {
      throw new Error('There is no ammo');
    }
    this.aircrafts.forEach(aircraft => {
      this.ammoStorage = aircraft.refill(this.ammoStorage);
    });
  }

  fight(opponent: Carrier) {
    let allDamage = 0;
    this.aircrafts.forEach(aircraft => {
      allDamage += aircraft.fight()
    });
    this.totalDamage += allDamage
    opponent.healthPoint -= allDamage
  }

  getStatus() {

    if (this.healthPoint <= 0) {
      return "It/'s dead Jim :("
    }
    let statusCarrier = `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage:${this.totalDamage}`
    statusCarrier += '\n\r Aircrafts: \n\r'
    this.aircrafts.forEach(aircraft => {
      statusCarrier += aircraft.getStatus() + "\n\r"
    });
    return statusCarrier
  }

}
let aircraft1: Aircraft = new Aircraft('F35', 12, 50);
let aircraft2: Aircraft = new Aircraft('F16', 8, 30)
let aircraft3: Aircraft = new Aircraft('F35', 12, 50);
let aircraft4: Aircraft = new Aircraft('F16', 8, 30)

let aircraftCarrier3: Carrier = new Carrier(100,500);
let aircraftCarrier4: Carrier = new Carrier(100,500);

aircraftCarrier3.add(aircraft1);
aircraftCarrier3.add(aircraft3);
aircraftCarrier4.add(aircraft2);
aircraftCarrier4.add(aircraft4);

aircraftCarrier3.fill();
aircraftCarrier4.fill();
aircraftCarrier3.fight(aircraftCarrier4)
console.log(aircraftCarrier3.getStatus())
console.log(aircraftCarrier4.getStatus())

