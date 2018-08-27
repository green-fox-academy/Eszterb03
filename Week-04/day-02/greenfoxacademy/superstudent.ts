import { Student } from "./Student";
import { CoderPersons } from "./interface";
import { Sponsor } from "./Sponsor";

export class SuperStudent extends Student implements CoderPersons{
  futurePlan(): void {
    console.log ("I am going to be hired by Elon Musk.");
  }  

  codeHours(n):void {
    if (n>8){
    console.log("I am coding a lot, without any Errors.");
    } else {
      console.log(" I almost code nothing")
      }
    }
  }

let JózsiBé :SuperStudent= new SuperStudent('JózsiBé',18,)
JózsiBé.futurePlan()
let elon: Sponsor = new Sponsor("Elon Musk", 46, "male", "SpaceX");
elon.getGoal()
JózsiBé.codeHours(14)
elon.hire()
elon.introduce()

