import { DiceSides } from './Dice';
import * as Damage from './Damage';

export default class Defenses {
    calculateDamage(attack, defense) {
        if (attack === DiceSides) {
            return Damage.criticalHit;
        }

        if (defense <= attack) {
            return Damage.normalDamage;
        }
    }
}
