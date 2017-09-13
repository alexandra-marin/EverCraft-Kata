import { should } from "should";
import { Character } from "../../Character";

describe("Character should", () => {
	let character;

	beforeEach(() => {
		character = new Character();
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
		var isDead = character.isDead();

		isDead.should.be.true();
	});
});
