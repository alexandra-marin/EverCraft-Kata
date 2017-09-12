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
		var alignmentExists = Alignments[value];

		if (alignmentExists) {
			this.hasAlignment = value;
		}
	}

	rollDice() {
		this.attackForce = getRandomInt(1, DiceSides);
		return this.attackForce;
	}

	canDamage(armor) {
		if (armor < this.attackForce) return true;
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

	willDie() {
		return this.hitPoints <= 0;
	}
}

export const Alignments = {
	good: "Good",
	bad: "Bad",
	neutral: "Neutral"
};

const DiceSides = 20;
const NormalDamage = 1;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
