'use strict'

export class Person {
 
  protected name: string;
  protected age: number;
  protected gender: string;

  // name?:string; opcionális hogy megadom e az értéket 
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log (`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  introduceText() {
    return `Hi, I am ${this.name}, a ${this.age} year old ${this.gender}`
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }

}
