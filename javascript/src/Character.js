import { DiceSides, NormalDamage } from "./Constants";
import { Alignments } from "./Alignments";

export class Character {
	constructor() {
		this.name = "Wizard";
		this.hasAlignment = Alignments.good;
		this.hitPoints = 5;
		this.armor = 10;
		this.attackForce = 1;
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

	attack = () => (this.attackForce = rollDice());

	defend(attack) {
		let willBeDamaged = canDamage(this.armor, attack);
		if (willBeDamaged) {
			this.takeDamage(attack);
		}
	}

	takeDamage(attack) {
		if (attack === DiceSides) {
			return this.criticalHit();
		}

		if (this.armor <= attack) {
			return this.normalDamage();
		}
	}

	criticalHit() {
		this.hitPoints -= 2 * NormalDamage;
	}

	normalDamage() {
		this.hitPoints -= NormalDamage;
	}

	isDead = () => this.hitPoints <= 0;
}

export let canDamage = (armor, attackForce) => armor <= attackForce;

let getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

let rollDice = () => getRandomInt(1, DiceSides);
