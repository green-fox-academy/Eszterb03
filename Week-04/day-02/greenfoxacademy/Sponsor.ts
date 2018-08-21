import { Person } from "./Person";

'use strict'


 export class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;
  
    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
      super();
      this.company = company;
      this.hiredStudents = 0;
    }
  
    introduce() {
      super.introduce()
      console.log(` who represents ${this.company} and hired ${this.hiredStudents} students so far`);
    }
  
    getGoal() {
      console.log('My goal is:Hire brilliant junior software developers.')
    }
  
    hire() {
      this.hiredStudents++;
    }
  }
