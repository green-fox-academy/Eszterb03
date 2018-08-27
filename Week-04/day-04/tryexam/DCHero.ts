import { Hero } from "./Hero";
import Punchable from "./punchable";
import { MarvelHero } from "./MarvelHero";

'use strict'

export class DCHero extends Hero {
  constructor(name: string, motivation: number = 45) {
    super(name, motivation);
  }

  punch(hero: Punchable) {
    if (hero instanceof DCHero) {
      return ('Hi my hero buddy');
    } else {
      return this.punch(hero);
    }
  }
}