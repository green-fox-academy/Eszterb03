import { Student } from "./Student";
import { Mentor } from "./Mentor";

'use strict'

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string, student = [], mentor = []) {
    this.name = name;
    this.students = []; //csak egy üres listát adok meg
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(Student);
  }
  addMentor(Mentor) {
    this.mentors.push(Mentor)
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} student and ${this.mentors.length} mentors.`)
  }

}
