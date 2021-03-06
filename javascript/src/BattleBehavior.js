import { DiceSides } from './Dice';
import * as Damage from './Damage';
import Modifier from './Modifier';

export default class BattleBehavior {
    modifier = new Modifier();
    
    roll = () => getRandomInt(1, DiceSides);

    canDamage = (attack, defense, dexterity) => 
    {
        return defense + this.modifier.for(dexterity) <= attack;
    }

    calculateDamage = (attack, defense, strength) => {
        if (attack === DiceSides) {
            var damage = Damage.criticalHitModifier * this.modifier.for(strength) + 
                   Damage.criticalHitModifier * Damage.normalDamage;

            return Damage.minOr(damage);       
        }

        if (defense <= attack) {
            return Damage.normalDamage;
        }
    }

    calculateAttack = (strength) => {
        var attack = this.roll() + this.modifier.for(strength);
        return Damage.minOr(attack);
    };
}

let getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
