import { Hero } from "./Hero";
import Punchable from "./punchable";

'use strict'

export class MarvelHero extends Hero {

  constructor(name: string, motivation: number = 40) {
    super(name, motivation);
  }

  public punch(hero: Punchable): void {
    if (!(hero instanceof MarvelHero) && this.getMotivationLevel() >= 1) {
      hero.bePunched(this.motivation / 1.5);
    }
  }
}