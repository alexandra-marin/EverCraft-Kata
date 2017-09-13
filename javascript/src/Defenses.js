import { DiceSides } from "./Constants";
import * as Damage from "./Damage";

export class Defenses {
	calculateDamage(attack, defense) {
		if (attack === DiceSides) {
            return Damage.criticalHit;
		}

		if (defense <= attack) {
			return Damage.normalDamage;
		}
	}
}
