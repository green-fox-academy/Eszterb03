import BaseHero from "./basehero";
import Punchable from "./punchable";

'use strict'

export class Hero extends BaseHero implements Punchable {
  protected motivation: number;

  constructor(name: string, motivation: number) {
    super(name);
    this.motivation = motivation;
  }

  public punch(other: Punchable): void {
    if (this.motivation >= 1) {
      let damage = this.motivation / 1.5;
      other.bePunched(damage)
    } else {
      console.log('I cant punch him')
    }
  }

  public getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0
    } else if (this.motivation < 40 && this.motivation > 25) {
      return 1
    } else if (this.motivation > 40) {
      return 2
    }
  }
  
  public toString(): string {
    if (this.motivation === 0) {
      return (`the hero's motivation level is 0: ${this.getName()} is not motivated anymore.`);
    } else if (this.motivation === 1) {
      return (`the hero's motivation level is 1: ${this.getName()} is motivated.`)
    } else if (this.motivation === 2) {
      return (`the hero's motivation level is 2: ${this.getName()} is well motivated.`)
    }
  }

  bePunched(damage: number): void {
    this.motivation - (damage / this.motivation);
  }

}