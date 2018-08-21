import { Person } from "./Person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
    // nem akarunk arra esélyt adni, hogy másérték legyen ezért égetjük be 
  }
  getGoal() {
    console.log('My goal is:Be a junior software developer.')
  }
  introduce() {
    super.introduce();
    console.log(` from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }
  skipDays(numberofDays){
    this.skippedDays += numberofDays
  }
}

