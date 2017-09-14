import { DiceSides } from "./Dice";

export class Attack {
	canDamage = (armor, attackForce) => armor <= attackForce;
    
    roll = () => getRandomInt(1, DiceSides);
}

let getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
