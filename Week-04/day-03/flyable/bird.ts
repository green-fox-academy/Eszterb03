import { Animal } from "../../../Week-03/day-03/animal";
import { Flyable } from "./flyable";


class Bird extends Animal implements Flyable{
  land(): void {
    console.log("Leszállok."); 
  }  
  fly(): void {
    throw new Error("Szállok.");
  }
  takeOff(): void {
    throw new Error("Felszállok");
  }
}

let tucan:Bird = new Bird;

tucan.land()
