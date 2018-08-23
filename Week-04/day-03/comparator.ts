import { Comparable } from "./interfacecomp";

export class Thing implements Comparable {
  
  compareTo(other: Comparable): number {
    throw new Error("Method not implemented.");
  }
  
  private name: string;
  private completed: boolean;


  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
}

