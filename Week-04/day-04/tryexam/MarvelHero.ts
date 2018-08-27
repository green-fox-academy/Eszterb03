import { Hero } from "./Hero";
import Punchable from "./punchable";
import { DCHero } from "./DCHero";

'use strict'

export class MarvelHero extends Hero {

  constructor(name: string, motivation: number = 40) {
    super(name, motivation);
  }

  punch(punchThisHero: Punchable) {
    if (punchThisHero instanceof MarvelHero) {
      console.log('Hi my hero buddy');
    } else {
      return this.punch(punchThisHero);
    }
  }
}