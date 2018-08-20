import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();

let milk = new Thing('Get milk');
let removeOb = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let eat = new Thing('Eat lunch');

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.add(milk);
fleet.add(removeOb);
fleet.add(standUp);
fleet.add(eat);

standUp.complete();
eat.complete();


fleet.print()



// fleet.print()