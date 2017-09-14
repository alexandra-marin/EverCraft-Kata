import { DiceSides } from './Dice';
import * as Damage from './Damage';
import Modifier from './Modifier';

export default class BattleBehavior {
    modifier = new Modifier();
    
    roll = () => getRandomInt(1, DiceSides);

    canDamage = (attack, defense) => defense <= attack;

    calculateDamage = (attack, defense) => {
        if (attack === DiceSides) {
            return Damage.criticalHit;
        }

        if (defense <= attack) {
            return Damage.normalDamage;
        }
    }

    calculateAttack = (strength) => {
        var attack = this.roll() + this.modifier.for(strength);

        if(attack < 1) {
            attack = Damage.minDamage
        }
        return attack;
    };
}

let getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
