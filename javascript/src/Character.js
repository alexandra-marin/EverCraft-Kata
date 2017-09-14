import { Defenses } from "./Defenses";
import { Attack } from "./Attack";
import * as Alignment from "./Alignment";

export class Character {
	constructor() {
		this.name = "Wizard";
		this.hitPoints = 5;
		this.armor = 10;
		this.attackForce = 0;
        this.alignment = Alignment.default();
		this.defense = new Defenses();
		this.attacks = new Attack();
	}

	attack = () => {
		this.attackForce = this.attacks.roll();
		return this.attackForce;
	};

	defend = (attack) => {
		let willBeDamaged = this.attacks.canDamage(this.armor, attack);
		if (willBeDamaged) {
			this.hitPoints -= this.defense.calculateDamage(attack, this.armor);
		}
	};

	isDead = () => this.hitPoints <= 0;
}
