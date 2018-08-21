import { Person } from "./Person";

export class Mentor extends Person {
  private level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
       super();
        this.level = level;
      }
  
      introduce() {
        super.introduce();
        console.log(` ${this.level} mentor`);
      }
    
      getGoal() {
        console.log('My goal is:Educate brilliant junior software developers.')
      }
}

