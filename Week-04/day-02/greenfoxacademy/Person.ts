'use strict'

export class Person {
  skipDays(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  hire(): any {
    throw new Error("Method not implemented.");
  }
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
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }

}
// let person1 = new Person();
// let person2 = new Person('Árnika', 20, 'female')



// export class Sponsor {
//   private name: string;
//   private age: number;
//   private gender: string;
//   private company: string;
//   private hiredStudents: number;

//   constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.company = company;
//     this.hiredStudents = 0;
//   }

//   introduce() {
//     console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far`);
//   }

//   getGoal() {
//     console.log('Hire brilliant junior software developers.')
//   }

//   hire() {
//     this.hiredStudents++;
//   }
// }

// a logikai összefüggések általában külön fáljban vannak, hogyha a meghívott
// class a másikba van importálva látszanak a függvények, ezért takjuk őket másik ts fájlba

// let people = [];
// let john = new Student('John Doe', 20, 'male', 'BME');
// people.push(john);
// let student = new Student();
// people.push(student);
// let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
// people.push(gandhi);
// let mentor = new Mentor();
// people.push(mentor);
// let sponsor = new Sponsor();
// people.push(sponsor);
// let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
// people.push(elon);

// student.skipDays(3);

// for (let i = 0; i < 6; i++) {
//   elon.hire();
// }

// for (let i = 0; i < 4; i++) {
//   sponsor.hire();
// }

// for (let person of people) {
//   person.introduce();
//   person.getGoal();
// }