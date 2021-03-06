// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export abstract class Animal{
   private hunger : number;
   private thirst : number;

    constructor(hunger:number =50,
        thirst:number=50){
        this.hunger = hunger;
        this.thirst = thirst;
		}
		eat(){
            this.hunger --;
            console.log('hunger level:',this.hunger)
        }
		drink(){
            this.thirst --;
            console.log('thirst level:',this.thirst)
		}
		play(){
            this.hunger ++;
            this.thirst ++;
            console.log('thirst level:',this.thirst,'hunger level:',this.hunger)
            }
        getHungry
}

// let sheep :Animal = new Animal()

// sheep.eat()
// sheep.drink()
// sheep.play()