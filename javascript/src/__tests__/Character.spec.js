import { should } from "should";
import { Character } from "../Character";

describe("Character should", () => {
	let character;

	beforeEach(() => {
		character = new Character();
	});

	it("have a name", () => {
		character.should.have.property("name");
	});

	it("have an alignment", () => {
		character.should.have.property("alignment");
	});

	it("not have alignment different than Good, Bad, Neutral", () => {
		character.alignment = "Good";
		character.alignment = "Unknown";
		character.alignment.should.equal("Good");
    });
    
    it("change alignment to Good, Bad, Neutral", () => {
		character.hasAlignment = "Good";
		character.alignment = "Neutral";
		character.hasAlignment.should.equal("Neutral");
	});

	it("have 5 HP", () => {
		character.should.have.property("hitPoints");
		character.hitPoints.should.be.exactly(5);
	});

	it("have 10 armor", () => {
		character.should.have.property("armor");
		character.armor.should.be.exactly(10);
	});

	it("attack by rolling a dice 20-sided dice", () => {
		var attack = character.rollDice();
		console.log("Dice roll: " + character.attackForce);
		character.attackForce.should.be.aboveOrEqual(1).and.belowOrEqual(20);
	});

	it("inflict damage if roll is greater than enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 10;

		character.attackForce = 15;
		const willDamage = character.canDamage(enemy.armor);

		willDamage.should.be.true();
	});

	it("inflict damage if roll is equal to enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 15;

		character.attackForce = 15;
		const willDamage = character.canDamage(enemy.armor);

		willDamage.should.be.true();
	});

	it("not inflict damage if roll is less than enemy armor", () => {
		const enemy = new Character();
		enemy.armor = 10;

		character.attackForce = 5;
		const willDamage = character.canDamage(enemy.armor);

		willDamage.should.be.false();
	});

	it("take 1 damage when attack is greater than armor", () => {
		const enemy = new Character();
		enemy.attackForce = 15;

		character.armor = 2;
		character.hitPoints = 5;
		character.takeDamage(enemy.attackForce);

		character.hitPoints.should.be.exactly(4);
	});

	it("take 1 damage when attack is equal to armor", () => {
		const enemy = new Character();
		enemy.attackForce = 2;

		character.armor = 2;
		character.hitPoints = 5;
		character.takeDamage(enemy.attackForce);

		character.hitPoints.should.be.exactly(4);
	});

	it("take no damage when attack is less than armor", () => {
		const enemy = new Character();
		enemy.attackForce = 15;

		character.armor = 20;
		character.hitPoints = 5;
		character.takeDamage(enemy.attackForce);

		character.hitPoints.should.be.exactly(5);
	});

	it("take critical hit when enemy attack is 20", () => {
		const enemy = new Character();
		enemy.attackForce = 20;

		character.armor = 20;
		character.hitPoints = 5;
		character.takeDamage(enemy.attackForce);

		character.hitPoints.should.be.exactly(3);
	});

	it("die if hit points is 0 or less", () => {
		character.hitPoints = 0;
		var willDie = character.willDie();

		willDie.should.be.true();
	});
});
