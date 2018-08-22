import { Vehicles } from "./vehicles";
import { Flyable } from "./flyable";

class Helicopter extends Vehicles implements Flyable {
  
  land(): void {
    console.log("Már repültem.");
  }  
  fly(): void {
    console.log("Most repülök.");
  }
  takeOff(): void {
    console.log("Ereszkedem.");
  }

}
let superHelicopater : Helicopter = new Helicopter;

superHelicopater.fly()