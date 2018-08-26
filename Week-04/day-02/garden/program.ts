import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";


let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');

let tree1: Tree = new Tree('purple');
let tree2: Tree = new Tree('orange');

let garden:Garden = new Garden()
garden.addPlant(flower1);
garden.addPlant(flower2);
garden.addPlant(tree1);
garden.addPlant(tree2);

garden.getStatus();
garden.watering(40);
garden.getStatus();
garden.watering(70);
garden.getStatus();