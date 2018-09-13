import { Hero } from "./Hero";
import Punchable from "./punchable";

'use strict'

export class DCHero extends Hero {

  constructor(name: string, motivation: number = 45) {
    super(name, motivation);
  }

  public punch(hero: Punchable): void {
    if (!(hero instanceof DCHero) && this.getMotivationLevel() >= 1) {
      hero.bePunched(this.motivation / 1.5);
    }
  }
}