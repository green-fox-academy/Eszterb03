'use strict'

export abstract class Animal {
  name: string
  age: number
  gender: string
  isHungry: boolean

  constructor(name: string, age?: number, gender?: string, isHungry?: boolean) {
    this.name = name;
    this.age = age;
    this.isHungry = isHungry;
    this.gender = gender;

  //   if (this.gender == 'female' || this.gender == 'male') {
  //     this.gender = gender
  //   }
  //   else {
  //     throw new Error("this is not a gender")
  //   }
   }
  abstract getName():void;
  abstract breed(): void;
  abstract eat(): void;

}