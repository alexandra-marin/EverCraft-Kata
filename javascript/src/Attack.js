import { DiceSides } from './Dice';
import * as Damage from './Damage';
import Modifier from './Modifier';

export default class Attack {
    modifier = new Modifier();

    canDamage = (armor, attackForce) => armor <= attackForce;

    roll = () => getRandomInt(1, DiceSides);

    calculateAttack = (strength) => {
        var attack = this.roll() + this.modifier.for(strength);

        if(attack < 1) {
            attack = Damage.minDamage
        }
        return attack;
    };
}

let getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
