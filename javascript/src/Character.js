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

	attack() {
		this.attackForce = rollDice();
	}

	defend(attack) {
		willBeDamaged = canDamage(this.armor, attack);
		if (willBeDamaged) {
			takeDamage(attack);
		}
	}

	canDamage(armor, attackForce) {
		if (armor <= attackForce) {
			return true;
		}
		return false;
	}

	takeDamage(attack) {
		if (attack === 20) {
			return this.doubleDamage();
		}

		if (this.armor <= attack) {
			return this.normalDamage();
		}
	}

	normalDamage() {
		this.hitPoints -= NormalDamage;
	}

	doubleDamage() {
		this.hitPoints -= 2 * NormalDamage;
	}

	isDead() {
		return this.hitPoints <= 0;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
	return getRandomInt(1, DiceSides);
}
