

export abstract class Instrument {
  protected name: string

  constructor(name:string){
  this.name = name
  }

  play(): void {
    console.log(this.name)
   }
}