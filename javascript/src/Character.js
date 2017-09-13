import { Alignments } from "./Alignments";
import { Defenses } from "./Defenses";
import { Attack } from "./Attack";

export class Character {
	constructor() {
		this.name = "Wizard";
		this.hasAlignment = Alignments.good;
		this.hitPoints = 5;
		this.armor = 10;
		this.attackForce = 1;
		this.defense = new Defenses();
		this.attacks = new Attack();
	}

	get alignment() {
		return this.hasAlignment;
	}

	set alignment(value) {
		var alignmentExists = Alignments.includes(value);

		if (alignmentExists) {
			this.hasAlignment = value;
		}
	}

	attack = () => {
		this.attackForce = this.attacks.roll();
		return this.attackForce;
	};

	defend = attack => {
		let willBeDamaged = this.attacks.canDamage(this.armor, attack);
		if (willBeDamaged) {
			this.hitPoints -= this.defense.calculateDamage(attack, this.armor);
		}
	};

	isDead = () => this.hitPoints <= 0;
}
