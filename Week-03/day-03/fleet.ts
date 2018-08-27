import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    print() {
        for (let i: number = 0; i < this.things.length; i++) {
            console.log((i + 1), '[' + this.things[i].printX() + ']', this.things[i].printOutName())
            //    console.log(`${i + 1.} [${this.things[i].printX()}] ${this.things[i].printOutName()}`)

        }
    }
}

export { Fleet };