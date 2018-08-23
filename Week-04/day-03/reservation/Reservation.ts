import { Reservationy } from "./interface";

class Reservation implements Reservationy {
  dow: string[] = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
  code: any[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  codeBook8: string = "";


  getDowBooking(): string {
    return this.dow[Math.floor(Math.random() * 7)]
  }

  getCodeBooking(): string {
    for (let i: number = 0; i < 8; i++) {
      this.codeBook8 =this.codeBook8.concat(this.code[Math.floor(Math.random() * 34)]);
    }
    return this.codeBook8.toUpperCase()
  }
  log(){
    return `Booking# ${res2.getCodeBooking()} for ${res2.getDowBooking()}`;
  }
}


let res2: Reservation = new Reservation();

console.log(res2.log());