import { should } from "should";
import { Character } from "../../Character";

describe("Character should", () => {
	let character;

	beforeEach(() => {
		character = new Character();
	});

	it("attack by rolling a dice 20-sided dice", () => {
		character.attack();
		console.log("Dice roll: " + character.attackForce);
		character.attackForce.should.be.aboveOrEqual(1).and.belowOrEqual(20);
	});

	it("inflict damage if roll is greater than enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 10;

		character.attackForce = 15;
		const willDamage = character.canDamage(enemy.armor, character.attackForce);

		willDamage.should.be.true();
	});

	it("inflict damage if roll is equal to enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 15;

		character.attackForce = 15;
		const willDamage = character.canDamage(enemy.armor, character.attackForce);

		willDamage.should.be.true();
	});

	it("not inflict damage if roll is less than enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 10;

		character.attackForce = 5;
		const willDamage = character.canDamage(enemy.armor, character.attackForce);

		willDamage.should.be.false();
	});
});
